# AJCC Staging Calculator — Progressive Web App

The proof-of-concept calculator packaged as an installable web app. It runs on the built-in mock data (`USE_MOCK = true` in `index.html`).

## Files

| File | Purpose |
|---|---|
| `index.html` | The calculator (same proof of concept, plus install and offline support) |
| `manifest.webmanifest` | App name, colors, icons; makes it installable |
| `sw.js` | Service worker: caches the app so it opens offline |
| `icons/` | Home-screen, Android (incl. maskable) and browser icons |

## Try it

A service worker only runs over **HTTPS** (or `localhost`), so opening `index.html` straight from disk works as a normal page but won't install or go offline.

**On your computer**

```
cd ajcc-pwa
python3 -m http.server 8080      # or: npx serve .
```

Then open http://localhost:8080.

**On a phone**: the folder needs an HTTPS address. Any static host works, for example:
- **Netlify Drop** (app.netlify.com/drop): drag the `ajcc-pwa` folder in to get a URL.
- **GitHub Pages**: push the folder to a repo and enable Pages.
- Your organization's web server or Azure Static Web Apps.

## Install

- **Android / Chrome / Edge**: tap the **Install app** button in the blue bar (or the browser menu's *Install app*).
- **iPhone / iPad (Safari)**: tap **Share**, then **Add to Home Screen**. The app shows this hint on iOS.

Once installed it opens full-screen with its own icon. It also works with no connection.

## Going live with the real API

1. In `index.html`, set `USE_MOCK = false` and `BASE_URL` to the staging service's **HTTPS** address.
2. On the API, allow CORS from the app's domain.
3. Stage results always come from the live API and are never cached (`/tnmstaging/` requests bypass the service worker). Offline, users can open the app and enter values, and the app says results need a connection.

## Shipping updates

Change `CACHE_VERSION` in `sw.js` (e.g. `ajcc-staging-v2`) whenever you change any file. Anyone with the app open gets an **Update** button; it updates automatically on next launch.
