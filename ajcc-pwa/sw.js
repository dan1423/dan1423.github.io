/*
 * AJCC Staging Calculator — service worker
 *
 * App shell (page, manifest, icons): cache-first, so the app opens instantly and works offline.
 * Staging API calls (/tnmstaging/...): network-only. Stage results always come from the live
 * staging engine and are never served from a stale cache.
 *
 * To ship an update: change CACHE_VERSION. Open copies show an "Update" button.
 */
const CACHE_VERSION = "ajcc-staging-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// The page asks the waiting worker to take over when the user taps "Update"
self.addEventListener("message", (event) => {
  if (event.data === "skipWaiting") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;                       // POSTs (e.g. /breastresponse) go straight to the network
  const url = new URL(req.url);
  if (url.pathname.includes("/tnmstaging/")) return;       // staging API: always live
  if (url.origin !== self.location.origin) return;         // other origins: browser default

  // Page navigations: try the network first so updates land quickly, fall back to the cached page offline
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put("./index.html", copy));
          return res;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Everything else in the app shell: cache first, then network (and cache what we fetch)
  event.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE_VERSION).then((c) => c.put(req, copy)); }
      return res;
    }))
  );
});
