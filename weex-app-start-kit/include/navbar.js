// { "framework": "Weex" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(90)
	var __weex_style__ = __webpack_require__(91)
	var __weex_script__ = __webpack_require__(92)

	__weex_define__('@weex-component/5de3c072c9f9c327119836bfe553927a', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/5de3c072c9f9c327119836bfe553927a',undefined,undefined)

/***/ },

/***/ 90:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "navbar"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "btn-back"
	      ],
	      "events": {
	        "click": "goHome"
	      },
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "btn-arrow-left"
	          ],
	          "attr": {
	            "src": "http://img1.vued.vanthink.cn/vued9c8e7e738ff94abee23eb69d7f1401e9.png"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "btn-text"
	          ],
	          "attr": {
	            "value": "返回"
	          }
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "classList": [
	        "title"
	      ],
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },

/***/ 91:
/***/ function(module, exports) {

	module.exports = {
	  "navbar": {
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "row",
	    "height": 88,
	    "backgroundColor": "#ffffff",
	    "alignItems": "center",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#dddddd"
	  },
	  "btn-back": {
	    "zIndex": 10,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "width": 180
	  },
	  "btn-arrow-left": {
	    "width": 60,
	    "height": 60,
	    "marginLeft": 10
	  },
	  "btn-text": {
	    "color": "#0f89f5"
	  },
	  "title": {
	    "position": "absolute",
	    "left": 0,
	    "right": 0,
	    "top": 0,
	    "height": 88,
	    "lineHeight": 88,
	    "fontSize": 36,
	    "textAlign": "center"
	  }
	}

/***/ },

/***/ 92:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var navigator = __weex_require__('@weex-module/navigator');
	module.exports = {
	  methods: {
	    goHome: function goHome() {
	      navigator.pop();
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });