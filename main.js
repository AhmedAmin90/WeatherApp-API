/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fetchData.js":
/*!**************************!*\
  !*** ./src/fetchData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataObj\": () => (/* binding */ dataObj),\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"changeBackGround\": () => (/* binding */ changeBackGround)\n/* harmony export */ });\n/* harmony import */ var _img_snow_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/snow.jpg */ \"./src/img/snow.jpg\");\n/* harmony import */ var _img_sun_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/sun.jpg */ \"./src/img/sun.jpg\");\n/* harmony import */ var _img_rain_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/rain.jpg */ \"./src/img/rain.jpg\");\n/* harmony import */ var _img_clouds_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/clouds.jpg */ \"./src/img/clouds.jpg\");\n/* harmony import */ var _img_else_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/else.jpg */ \"./src/img/else.jpg\");\n// import defaultDisplay from './index';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst dataObj = {}\r\n\r\nasync function getData(city) {\r\n  const fet = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=87661441a138699d2c9a259ebfb1c52f`);\r\n  const data = await fet.json();\r\n    dataObj['name'] = data.name;\r\n    dataObj['temp'] = data.main.temp;\r\n    dataObj['feels'] = data.main.feels_like;\r\n    dataObj['humidity'] = data.main.humidity;\r\n    dataObj['weatherDes'] = data.weather[0].main;\r\n    console.log(dataObj);\r\n    \r\n}\r\n\r\n\r\nfunction changeBackGround(img){\r\n  if (dataObj['weatherDes'] === 'Snow') {\r\n    img.src = _img_snow_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n  } else if (dataObj['weatherDes'] === 'Clouds'){\r\n    img.src = _img_clouds_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n  }\r\n  else if (dataObj['weatherDes'] === 'Clear') {\r\n    img.src = _img_sun_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n  }\r\n  else if (dataObj['weatherDes'] === 'Rain') {\r\n    img.src = _img_rain_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n  }\r\n  else  {\r\n    img.src = _img_else_jpg__WEBPACK_IMPORTED_MODULE_4__;\r\n  }\r\n}\n\n//# sourceURL=webpack://weatherApp/./src/fetchData.js?");

/***/ }),

/***/ "./src/img/clouds.jpg":
/*!****************************!*\
  !*** ./src/img/clouds.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e896fd3f8bb1d9aa5503.jpg\";\n\n//# sourceURL=webpack://weatherApp/./src/img/clouds.jpg?");

/***/ }),

/***/ "./src/img/else.jpg":
/*!**************************!*\
  !*** ./src/img/else.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dc1b3e259379e36de53a.jpg\";\n\n//# sourceURL=webpack://weatherApp/./src/img/else.jpg?");

/***/ }),

/***/ "./src/img/rain.jpg":
/*!**************************!*\
  !*** ./src/img/rain.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3cd4b296cf1e8be7c5cd.jpg\";\n\n//# sourceURL=webpack://weatherApp/./src/img/rain.jpg?");

/***/ }),

/***/ "./src/img/snow.jpg":
/*!**************************!*\
  !*** ./src/img/snow.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8d75eccfda89e8181ed5.jpg\";\n\n//# sourceURL=webpack://weatherApp/./src/img/snow.jpg?");

/***/ }),

/***/ "./src/img/sun.jpg":
/*!*************************!*\
  !*** ./src/img/sun.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"adc6db783f47e1cd65a0.jpg\";\n\n//# sourceURL=webpack://weatherApp/./src/img/sun.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ \"./src/fetchData.js\");\n/* harmony import */ var _img_else_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/else.jpg */ \"./src/img/else.jpg\");\n\r\n\r\n\r\n\r\n// Main elements:\r\nconst searchBtn = document.querySelector('#searchBtn');\r\nconst weatherImg = document.querySelector('#weather-img');\r\nconst changeBtn = document.querySelector('#changeBtn');\r\nconst cityName = document.querySelector('#city-name');\r\nconst tempDisplay = document.querySelector('#temp-degree');\r\nconst feelsLike = document.querySelector('#feel-like');\r\nconst humidityDisplay = document.querySelector('#humidity');\r\nconst weatherCond = document.querySelector('#weather-condition');\r\nconst table = document.querySelector('table');\r\n\r\n// Main style and content:\r\nweatherImg.src = _img_else_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\ntable.classList.add('hide');\r\nchangeBtn.classList.add('hideVis')\r\n\r\n\r\n// Main functions:\r\nfunction fillData(){\r\n  // Setup the elements:\r\n  cityName.classList.add('text-primary')\r\n  cityName.classList.remove('text-danger');\r\n  weatherCond.classList.remove('hide');\r\n  // weatherCond.classList.add('show');\r\n  table.classList.remove('hide');\r\n  // table.classList.add('show');\r\n  changeBtn.classList.add('show');\r\n  changeBtn.classList.remove('hideVis');\r\n\r\n  // Add content:\r\n  weatherCond.innerHTML = `Weather Condition: ${_fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.weatherDes}`;\r\n  cityName.innerHTML = `City Name: ${_fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.name}`;\r\n  tempDisplay.innerHTML = `${Math.round(_fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.temp)} °C `;\r\n  feelsLike.innerHTML = _fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.feels;\r\n  humidityDisplay.innerHTML = _fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.humidity;\r\n}\r\n\r\nfunction errorData(){\r\n  weatherImg.src = _img_else_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n  cityName.innerHTML = 'Wrong City Name !';\r\n  cityName.classList.remove('text-primary')\r\n  cityName.classList.add('text-danger');\r\n  weatherCond.classList.add('hide');\r\n  weatherCond.classList.remove('show');\r\n  table.classList.add('hide');\r\n  table.classList.remove('show');\r\n  changeBtn.classList.add('hideVis');\r\n  changeBtn.classList.remove('show');\r\n}\r\n\r\n// Evenets:\r\nsearchBtn.addEventListener('click', (e)=>{\r\n  e.preventDefault();\r\n  const search = document.querySelector('#search').value;\r\n  (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.getData)(search).then(()=>{\r\n    fillData();\r\n    (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.changeBackGround)(weatherImg)\r\n  }).catch(()=>{\r\n    errorData()\r\n  })\r\n})\r\n\r\nchangeBtn.addEventListener('click' ,() => {\r\n  if (tempDisplay.innerHTML.includes('C')) {\r\n    tempDisplay.innerHTML = `${_fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.temp * 9 / 5 + 32} °F`;\r\n    feelsLike.innerHTML = _fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.feels * 9 / 5 + 32;\r\n    changeBtn.innerHTML = 'Change To Celsius'\r\n  } else {\r\n    tempDisplay.innerHTML = `${Math.round(_fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.temp)} °C `;\r\n    changeBtn.innerHTML = 'Change To Fahrenheit';\r\n    feelsLike.innerHTML = _fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.feels;\r\n  }\r\n  })\r\n\n\n//# sourceURL=webpack://weatherApp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;