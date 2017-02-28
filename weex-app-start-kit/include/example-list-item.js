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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(2)
	var __weex_style__ = __webpack_require__(3)
	var __weex_script__ = __webpack_require__(4)

	__weex_define__('@weex-component/bccbe5313fb37801c8ad33a3adbbc2e9', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/bccbe5313fb37801c8ad33a3adbbc2e9',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "click": "redirect"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "item-bannar"
	      ],
	      "attr": {
	        "src": function () {return this.imgsrc}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "item-desc"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "inner"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "keyword"
	              ],
	              "attr": {
	                "value": function () {return this.keyword}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "details"
	              ],
	              "attr": {
	                "value": function () {return this.desc}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "btn-wrap"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "btn"
	              ],
	              "attr": {
	                "value": "查看详情"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "height": 460,
	    "margin": 40,
	    "marginTop": 20,
	    "backgroundColor": "#ffffff",
	    "borderWidth": 1,
	    "borderBottomWidth": 2,
	    "borderColor": "rgba(0,0,0,0.2)"
	  },
	  "item-bannar": {
	    "height": 300,
	    "borderWidth": 10,
	    "borderColor": "#ffffff"
	  },
	  "item-desc": {
	    "flex": 1,
	    "flexDirection": "row",
	    "paddingTop": 15,
	    "fontSize": 36,
	    "color": "#555555",
	    "textAlign": "center"
	  },
	  "inner": {
	    "flex": 0.7,
	    "flexDirection": "column",
	    "paddingLeft": 10,
	    "alignItems": "flex-start"
	  },
	  "keyword": {
	    "fontSize": 40,
	    "color": "#1995f9"
	  },
	  "details": {
	    "fontSize": 24,
	    "color": "#333333"
	  },
	  "btn-wrap": {
	    "flex": 0.4,
	    "justifyContent": "center",
	    "alignSelf": "right"
	  },
	  "btn": {
	    "alignSelf": "center",
	    "marginLeft": 10,
	    "display": "inline-block",
	    "backgroundColor": "#1995f9",
	    "color": "#ffffff",
	    "padding": 20,
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "borderRadius": 30,
	    "fontSize": 24
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var navigator = __weex_require__('@weex-module/navigator');
	module.exports = {
	  data: function () {return {
	    title: '',
	    url: ''
	  }},
	  methods: {
	    redirect: function redirect() {
	      navigator.push({
	        url: this.url
	      });
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);