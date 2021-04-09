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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataObj\": () => (/* binding */ dataObj),\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"changeBackGround\": () => (/* binding */ changeBackGround)\n/* harmony export */ });\n/* harmony import */ var _img_snow_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/snow.jpg */ \"./src/img/snow.jpg\");\n/* harmony import */ var _img_sun_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/sun.jpg */ \"./src/img/sun.jpg\");\n/* harmony import */ var _img_rain_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/rain.jpg */ \"./src/img/rain.jpg\");\n/* harmony import */ var _img_clouds_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/clouds.jpg */ \"./src/img/clouds.jpg\");\n/* harmony import */ var _img_else_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/else.jpg */ \"./src/img/else.jpg\");\n\n\n\n\n\n\n\nconst dataObj = {};\n\nasync function getData(city) {\n  const fet = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=87661441a138699d2c9a259ebfb1c52f`);\n  const data = await fet.json();\n  dataObj.name = data.name;\n  dataObj.temp = data.main.temp;\n  dataObj.feels = data.main.feels_like;\n  dataObj.humidity = data.main.humidity;\n  dataObj.weatherDes = data.weather[0].main;\n}\n\n\nconst changeBackGround = (img) => {\n  if (dataObj.weatherDes === 'Snow') {\n    img.src = _img_snow_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  } else if (dataObj.weatherDes === 'Clouds') {\n    img.src = _img_clouds_jpg__WEBPACK_IMPORTED_MODULE_3__;\n  } else if (dataObj.weatherDes === 'Clear') {\n    img.src = _img_sun_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  } else if (dataObj.weatherDes === 'Rain') {\n    img.src = _img_rain_jpg__WEBPACK_IMPORTED_MODULE_2__;\n  } else {\n    img.src = _img_else_jpg__WEBPACK_IMPORTED_MODULE_4__;\n  }\n};\n\n\n//# sourceURL=webpack://weatherApp/./src/fetchData.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ \"./src/fetchData.js\");\n/* harmony import */ var _img_else_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/else.jpg */ \"./src/img/else.jpg\");\n\n\n\n\n// Main elements:\nconst searchBtn = document.querySelector('#searchBtn');\nconst weatherImg = document.querySelector('#weather-img');\nconst changeBtn = document.querySelector('#changeBtn');\nconst cityName = document.querySelector('#city-name');\nconst tempDisplay = document.querySelector('#temp-degree');\nconst feelsLike = document.querySelector('#feel-like');\nconst humidityDisplay = document.querySelector('#humidity');\nconst weatherCond = document.querySelector('#weather-condition');\nconst table = document.querySelector('table');\n\n// Main style and content:\nweatherImg.src = 'https://i.pinimg.com/originals/0e/f3/bb/0ef3bb66d9216fffcea9022628f7bb26.gif';\ntable.classList.add('hide');\nchangeBtn.classList.add('hideVis');\n\n\n// Main functions:\nconst fillData = () => {\n  cityName.classList.add('text-primary');\n  cityName.classList.remove('text-danger');\n  weatherCond.classList.remove('hide');\n  table.classList.remove('hide');\n  changeBtn.classList.add('show');\n  changeBtn.classList.remove('hideVis');\n\n  // Add content:\n  weatherCond.innerHTML = `Weather Condition: ${_fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.weatherDes}`;\n  cityName.innerHTML = `City Name: ${_fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.name}`;\n  tempDisplay.innerHTML = `${Math.round(_fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.temp)} °C `;\n  feelsLike.innerHTML = _fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.feels;\n  humidityDisplay.innerHTML = _fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.humidity;\n  (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.changeBackGround)(weatherImg);\n};\n\nconst errorData = () => {\n  weatherImg.src = _img_else_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  cityName.innerHTML = 'Wrong City Name !';\n  cityName.classList.remove('text-primary');\n  cityName.classList.add('text-danger');\n  weatherCond.classList.add('hide');\n  weatherCond.classList.remove('show');\n  table.classList.add('hide');\n  table.classList.remove('show');\n  changeBtn.classList.add('hideVis');\n  changeBtn.classList.remove('show');\n};\n\nconst changeBtnText = () => {\n  if (tempDisplay.innerHTML.includes('C')) {\n    tempDisplay.innerHTML = `${(_fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.temp * (9 / 5)) + 32} °F`;\n    feelsLike.innerHTML = (_fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.feels * (9 / 5)) + 32;\n    changeBtn.innerHTML = 'Change To Celsius';\n  } else {\n    tempDisplay.innerHTML = `${Math.round(_fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.temp)} °C `;\n    changeBtn.innerHTML = 'Change To Fahrenheit';\n    feelsLike.innerHTML = _fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.feels;\n  }\n};\n\nchangeBtnText();\n\n// Evenets:\nsearchBtn.addEventListener('click', (e) => {\n  e.preventDefault();\n  const search = document.querySelector('#search').value;\n  (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.getData)(search).then(() => {\n    fillData();\n    (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.changeBackGround)(weatherImg);\n  }).catch(() => {\n    errorData();\n  });\n});\n\nchangeBtn.addEventListener('click', () => {\n  changeBtnText();\n});\n\n\n// Add geolocation:\nasync function success(pos) {\n  const crd = pos.coords;\n  const fet = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&appid=87661441a138699d2c9a259ebfb1c52f`);\n  const data = await fet.json();\n  _fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.name = data.name;\n  _fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.temp = data.main.temp;\n  _fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.feels = data.main.feels_like;\n  _fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.humidity = data.main.humidity;\n  _fetchData__WEBPACK_IMPORTED_MODULE_0__.dataObj.weatherDes = data.weather[0].main;\n  fillData();\n}\n\nnavigator.geolocation.getCurrentPosition(success);\n\n\n//# sourceURL=webpack://weatherApp/./src/index.js?");

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