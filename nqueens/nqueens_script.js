var _0x3509=["\x63\x61\x6E\x76\x61\x73","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x73\x72\x63","\x70\x72\x69\x73\x6F\x6E\x5F\x6D\x69\x6B\x65\x2E\x70\x6E\x67","\x23\x66\x66\x66\x66\x66\x30","\x23\x34\x34\x33\x30\x32\x38","\x72\x65\x64","\x63\x68\x61\x6E\x67\x65","\x76\x61\x6C\x75\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x49\x6E\x64\x65\x78","\x6F\x70\x74\x69\x6F\x6E\x73","\x73\x6C\x6F\x77","\x6D\x65\x64\x69\x75\x6D","\x66\x61\x73\x74","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x62\x74\x6E\x53\x70\x65\x65\x64","\x62\x74\x6E\x53\x69\x7A\x65","\x64\x69\x76\x4F\x66\x53\x6F\x6C\x75\x74\x69\x6F\x6E\x73","\x63\x68\x69\x6C\x64\x4E\x6F\x64\x65\x73","\x72\x65\x6D\x6F\x76\x65\x43\x68\x69\x6C\x64","\x68\x61\x73\x43\x68\x69\x6C\x64\x4E\x6F\x64\x65\x73","\x32\x64","\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74","\x23\x34\x39\x66\x62\x33\x35","\x77\x69\x64\x74\x68","\x68\x65\x69\x67\x68\x74","\x66\x69\x6C\x6C\x53\x74\x79\x6C\x65","\x62\x6C\x75\x65","\x62\x65\x67\x69\x6E\x50\x61\x74\x68","\x6D\x6F\x76\x65\x54\x6F","\x6C\x69\x6E\x65\x54\x6F","\x73\x74\x72\x6F\x6B\x65","\x66\x69\x6C\x6C\x52\x65\x63\x74","\x50\x49","\x61\x72\x63","\x66\x69\x6C\x6C","\x6C\x69\x6E\x65\x57\x69\x64\x74\x68","\x73\x74\x72\x6F\x6B\x65\x53\x74\x79\x6C\x65","\x23\x30\x30\x33\x33\x30\x30","\x61\x62\x73","\x73\x74\x79\x6C\x65","\x31\x30\x30\x25","\x6F\x66\x66\x73\x65\x74\x57\x69\x64\x74\x68","\x64\x69\x76","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x63\x6C\x61\x73\x73","\x72\x6F\x77","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x6D\x61\x72\x67\x69\x6E\x2D\x62\x6F\x74\x74\x6F\x6D\x3A\x32\x30\x70\x78","\x69\x64","\x64\x69\x76\x23","\x63\x6F\x6C\x2D\x6C\x67\x2D\x32","\x68\x34","\x53\x4F\x4C\x55\x54\x49\x4F\x4E\x20","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x69\x6D\x67","\x69\x6D\x67\x23","\x39\x30\x25","\x74\x6F\x44\x61\x74\x61\x55\x52\x4C","\x61\x6C\x74","\x73\x6F\x6C\x75\x74\x69\x6F\x6E","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x63\x6C\x69\x63\x6B","\x69\x6D\x61\x67\x65\x70\x72\x65\x76\x69\x65\x77","\x6D\x79\x4D\x6F\x64\x61\x6C\x4C\x61\x62\x65\x6C","\x73\x68\x6F\x77","\x6D\x6F\x64\x61\x6C","\x23\x69\x6D\x61\x67\x65\x6D\x6F\x64\x61\x6C"];var speed=500;var idOfSolution=0;var timer;var sizeOfBoard=8;var canvas=document[_0x3509[1]](_0x3509[0]);var queenPiece= new Image();queenPiece[_0x3509[2]]= _0x3509[3];var boardColor1=_0x3509[4];var boardColor2=_0x3509[5];var colorOfCircle=_0x3509[6];var isSolved=false;document[_0x3509[1]](_0x3509[15])[_0x3509[14]](_0x3509[7],function(){var _0x260exb=this[_0x3509[10]][this[_0x3509[9]]][_0x3509[8]];if(_0x260exb== _0x3509[11]){speed= 1000}else {if(_0x260exb== _0x3509[12]){speed= 500}else {if(_0x260exb== _0x3509[13]){speed= 100}else {speed= 40}}};stopCurrentInterval();solveNQueens()});document[_0x3509[1]](_0x3509[16])[_0x3509[14]](_0x3509[7],function(){sizeOfBoard= this[_0x3509[8]];stopCurrentInterval();removeAllSolutions();idOfSolution= 0;solveNQueens()});function removeAllSolutions(){var _0x260exd=document[_0x3509[1]](_0x3509[17]);while(_0x260exd[_0x3509[20]]()){_0x260exd[_0x3509[19]](_0x260exd[_0x3509[18]][0])}}fitToContainer(canvas);var ctx=canvas[_0x3509[22]](_0x3509[21]);solveNQueens();function drawBoard(canvas,_0x260ex10,_0x260ex11){if(isSolved){colorOfCircle= _0x3509[23]};var _0x260ex12=canvas[_0x3509[24]]/ _0x260ex10;var _0x260ex13=canvas[_0x3509[25]]/ _0x260ex10;var _0x260ex14=0,_0x260ex15=0;ctx[_0x3509[26]]= _0x3509[27];ctx[_0x3509[28]]();ctx[_0x3509[29]](0,0);for(var _0x260ex16=0;_0x260ex16< _0x260ex10;_0x260ex16++){ctx[_0x3509[30]](_0x260ex14,canvas[_0x3509[25]]);ctx[_0x3509[31]]();_0x260ex14= _0x260ex14+ _0x260ex12;ctx[_0x3509[28]]();ctx[_0x3509[29]](_0x260ex14,0)};ctx[_0x3509[28]]();ctx[_0x3509[29]](0,0);for(var _0x260ex16=0;_0x260ex16< _0x260ex10;_0x260ex16++){ctx[_0x3509[30]](canvas[_0x3509[24]],_0x260ex15);ctx[_0x3509[31]]();_0x260ex15= _0x260ex15+ _0x260ex13;ctx[_0x3509[28]]();ctx[_0x3509[29]](0,_0x260ex15)};for(var _0x260ex17=0;_0x260ex17< _0x260ex10;_0x260ex17++){for(var _0x260ex18=0;_0x260ex18< _0x260ex10;_0x260ex18++){if(_0x260ex17% 2== 0){if(_0x260ex18% 2== 0){ctx[_0x3509[26]]= boardColor1}else {ctx[_0x3509[26]]= boardColor2}}else {if(_0x260ex18% 2!= 0){ctx[_0x3509[26]]= boardColor1}else {ctx[_0x3509[26]]= boardColor2}};ctx[_0x3509[32]](_0x260ex18* _0x260ex12,_0x260ex17* _0x260ex13,_0x260ex12,_0x260ex13)}};for(var _0x260ex17=0;_0x260ex17< _0x260ex10;_0x260ex17++){for(var _0x260ex18=0;_0x260ex18< _0x260ex10;_0x260ex18++){if(_0x260ex18== _0x260ex11[_0x260ex17]){ctx[_0x3509[28]]();ctx[_0x3509[26]]= colorOfCircle;ctx[_0x3509[34]](_0x260ex11[_0x260ex17]* _0x260ex12+ _0x260ex12/ 2,(_0x260ex17)* _0x260ex13+ _0x260ex13/ 2,_0x260ex12/ 4,0,2* Math[_0x3509[33]],false);var _0x260ex19=[_0x260ex11[_0x260ex17]* _0x260ex12+ _0x260ex12/ 2,(_0x260ex17)* _0x260ex13+ _0x260ex13/ 2,_0x260ex12/ 4];ctx[_0x3509[35]]();ctx[_0x3509[36]]= 5;ctx[_0x3509[37]]= _0x3509[38];ctx[_0x3509[31]]()}}};if(isSolved){saveSolutionImage()}}function solveNQueens(){var _0x260ex11=[];for(var _0x260ex16=0;_0x260ex16<= sizeOfBoard;_0x260ex16++){_0x260ex11[_0x260ex16]=  -1};var _0x260ex1b=0;function _0x260ex1c(_0x260ex1d){for(var _0x260ex16=0;_0x260ex16< _0x260ex1d;_0x260ex16++){if(_0x260ex11[_0x260ex1d]== _0x260ex11[_0x260ex16]){return false}else {if(Math[_0x3509[39]](_0x260ex11[_0x260ex1d]- _0x260ex11[_0x260ex16])== Math[_0x3509[39]](_0x260ex1d- _0x260ex16)){return false}}};return true}var _0x260ex1e=0;timer= setInterval(function(){if(_0x260ex1e> 0){_0x260ex1e--;return};_0x260ex11[_0x260ex1b]++;if(_0x260ex11[_0x260ex1b]== sizeOfBoard){_0x260ex11[_0x260ex1b]=  -1;_0x260ex1b--}else {if(_0x260ex1c(_0x260ex1b)){_0x260ex1b++;if(_0x260ex1b== sizeOfBoard){isSolved= true;_0x260ex1e= 50;_0x260ex1b--}}};drawBoard(canvas,sizeOfBoard,_0x260ex11)},speed)}function stopCurrentInterval(){clearInterval(timer)}function fitToContainer(canvas){canvas[_0x3509[40]][_0x3509[24]]= _0x3509[41];canvas[_0x3509[24]]= canvas[_0x3509[42]]}function saveSolutionImage(){resetBoardProperties();var _0x260ex22=document[_0x3509[44]](_0x3509[43]);_0x260ex22[_0x3509[47]](_0x3509[45],_0x3509[46]);_0x260ex22[_0x3509[47]](_0x3509[40],_0x3509[48]);_0x260ex22[_0x3509[47]](_0x3509[49],_0x3509[50]+ idOfSolution);var _0x260ex23=document[_0x3509[44]](_0x3509[43]);_0x260ex23[_0x3509[47]](_0x3509[45],_0x3509[51]);_0x260ex23[_0x3509[47]](_0x3509[49],_0x3509[50]+ idOfSolution);var _0x260ex24=document[_0x3509[44]](_0x3509[52]);var _0x260ex25=_0x3509[53]+ (idOfSolution+ 1);_0x260ex24[_0x3509[54]]= _0x260ex25;var _0x260ex26=document[_0x3509[44]](_0x3509[55]);_0x260ex26[_0x3509[47]](_0x3509[49],_0x3509[56]+ idOfSolution);_0x260ex26[_0x3509[47]](_0x3509[24],_0x3509[57]);_0x260ex26[_0x3509[47]](_0x3509[25],_0x3509[57]);_0x260ex26[_0x3509[47]](_0x3509[2],canvas[_0x3509[58]](),_0x260ex25);_0x260ex26[_0x3509[47]](_0x3509[59],_0x3509[60]);_0x260ex23[_0x3509[61]](_0x260ex24);_0x260ex22[_0x3509[61]](_0x260ex26);_0x260ex23[_0x3509[61]](_0x260ex22);document[_0x3509[1]](_0x3509[17])[_0x3509[61]](_0x260ex23);setOnImageClick(_0x3509[56]+ idOfSolution,canvas[_0x3509[58]](),_0x260ex25);idOfSolution++}function setOnImageClick(_0x260ex28,_0x260ex29,_0x260ex25){document[_0x3509[1]](_0x260ex28)[_0x3509[14]](_0x3509[62],function(){document[_0x3509[1]](_0x3509[63])[_0x3509[47]](_0x3509[2],_0x260ex29);document[_0x3509[1]](_0x3509[64])[_0x3509[54]]= _0x260ex25;$(_0x3509[67])[_0x3509[66]](_0x3509[65])})}function resetBoardProperties(){isSolved= false;colorOfCircle= _0x3509[6]}