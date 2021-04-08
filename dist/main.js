/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const test = document.querySelector('#test');\r\n\r\nconst searchBtn = document.querySelector('#searchBtn');\r\nconst weatherImg = document.querySelector('#weather-img');\r\n\r\nasync function getData(city) {\r\n  const fet = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87661441a138699d2c9a259ebfb1c52f`);\r\n  const data = await fet.json();\r\n   test.innerHTML = data.main.temp;\r\n  if (data.main.temp - 273 > 10) {\r\n     weatherImg.src = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80'\r\n   } \r\n   else {\r\n     weatherImg.src = 'https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'\r\n   }\r\n}\r\n\r\nsearchBtn.addEventListener('click', (e)=>{\r\n  e.preventDefault();\r\n  const search = document.querySelector('#search').value;\r\n  getData(search);\r\n} )\r\n\n\n//# sourceURL=webpack://weatherApp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;