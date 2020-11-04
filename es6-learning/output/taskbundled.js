/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	class TaskCollection{
	    constructor(tasks =[]){
	        this.tasks = tasks;
	    }
	
	    dump(){
	        console.log(this.tasks);
	    }
	}
	
	/* harmony default export */ exports["a"] = TaskCollection;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TaskCollection__ = __webpack_require__(0);
	//________ ES6 MODULES and WEBPACK BUNDLER   __________________________________________________///
	
	
	
	
	new /* harmony import */__WEBPACK_IMPORTED_MODULE_0__TaskCollection__["a"]([
	    'Go to the store',
	    'Finish screencast',
	    'Eact cake']
	).dump();


/***/ }
/******/ ]);