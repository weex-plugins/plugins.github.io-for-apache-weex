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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(107)
	var __weex_style__ = __webpack_require__(108)
	var __weex_script__ = __webpack_require__(109)
	
	__weex_define__('@weex-component/8ddde268ed71c60dbed118a6095d9bad', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/8ddde268ed71c60dbed118a6095d9bad',undefined,undefined)

/***/ },

/***/ 93:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "navbar-con"
	  ],
	  "children": [
	    {
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
	  ]
	}

/***/ },

/***/ 94:
/***/ function(module, exports) {

	module.exports = {
	  "navbar-con": {
	    "height": 108,
	    "paddingTop": 20
	  },
	  "navbar": {
	    "zIndex": 1000,
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
	    "zIndex": 1002,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "width": 180,
	    "height": 88
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
	    "left": 180,
	    "right": 180,
	    "top": 0,
	    "height": 88,
	    "lineHeight": 88,
	    "fontSize": 36,
	    "textAlign": "center"
	  }
	}

/***/ },

/***/ 95:
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


/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(93)
	var __weex_style__ = __webpack_require__(94)
	var __weex_script__ = __webpack_require__(95)
	
	__weex_define__('@weex-component/navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },

/***/ 107:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "navbar",
	      "attr": {
	        "title": "使用地图定位"
	      }
	    },
	    {
	      "type": "weex-amap",
	      "classList": [
	        "map"
	      ],
	      "id": "map2017",
	      "attr": {
	        "sdkKey": function () {return this.keys},
	        "mapInstance": function () {return this.map},
	        "zoom": function () {return this.zoom},
	        "center": function () {return this.pos}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "map-control"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title"
	          ],
	          "attr": {
	            "value": "Methods: getUserLocation"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "tips"
	          ],
	          "attr": {
	            "value": "getUserLocation 你可以通过调用该方法来进行用户当前位置的定位"
	          }
	        },
	        {
	          "type": "div",
	          "events": {
	            "click": "setUserLocation"
	          },
	          "classList": [
	            "btnbox"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "btn"
	              ],
	              "attr": {
	                "value": "定位到当前位置"
	              }
	            }
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "tips"
	          ],
	          "attr": {
	            "value": function () {return '用户的当前坐标为: ' + (this.pos)}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 108:
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "position": "relative",
	    "flex": 1,
	    "backgroundColor": "#ffffff"
	  },
	  "map": {
	    "flex": 1,
	    "position": "relative",
	    "backgroundColor": "#ffffff",
	    "minHeight": 800,
	    "borderBottomWidth": 10,
	    "borderBottomColor": "#ffffff"
	  },
	  "map-control": {
	    "paddingTop": 20,
	    "minHeight": 600
	  },
	  "title": {
	    "marginLeft": 20,
	    "paddingLeft": 20,
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "fontSize": 36,
	    "borderLeftWidth": 6,
	    "borderLeftColor": "#e74c3c",
	    "color": "#222222",
	    "textAlign": "left"
	  },
	  "tips": {
	    "margin": 20,
	    "padding": 10,
	    "color": "#666666",
	    "fontSize": 20
	  },
	  "btn": {
	    "margin": 20,
	    "padding": 20,
	    "backgroundColor": "#1ba1e2",
	    "borderRadius": 5,
	    "color": "#ffffff",
	    "textAlign": "center",
	    "cursor": "pointer",
	    "fontSize": 28
	  }
	}

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	__webpack_require__(103);
	var Amap = null;
	try {
	  Amap = __weex_require__('@weex-module/amap');
	} catch (err) {
	  console.log(err);
	}
	var modal = __weex_require__('@weex-module/modal');
	module.exports = {
	  data: function () {return {
	    keys: {
	      h5: 'f4b99dcd51752142ec0f1bdcb9a8ec02',
	      ios: '',
	      android: 'db6a973159cb0c2639ad02c617a786ae'
	    },
	    pos: [116.487, 40.00003],
	    zoom: 9
	  }},
	
	  methods: {
	    setUserLocation: function setUserLocation() {
	      var self = this;
	      Amap.getUserLocation(this.$el('map2017').ref, function (data) {
	        if (data.result == 'success') {
	          self.pos = data.data.position;
	        }
	      });
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTMxMzU2MzI5NmVhZTEyN2MzZGU/NzgxZCoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2dlb2xvY2F0aW9uLndlPzIyN2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvbmF2YmFyLndlPzM1NjEqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvbmF2YmFyLndlPzliNDAqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvbmF2YmFyLndlP2MxOTYqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvbmF2YmFyLndlP2Y4N2EqKiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZ2VvbG9jYXRpb24ud2U/MWFlMiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZ2VvbG9jYXRpb24ud2U/MGZjNCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZ2VvbG9jYXRpb24ud2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOztBQUVELDJGOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7QUNhQSx5QkFDQTs7OytCQUdBO2lCQUNBO0FBRUE7QUFKQTtBQURBOzs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7O0FDZkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixpQkFBaUI7QUFDaEQscUNBQW9DLGdCQUFnQjtBQUNwRCw4QkFBNkIsaUJBQWlCO0FBQzlDLGdDQUErQjtBQUMvQjtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7OztBQ2lCQSxxQkFDQTtZQUNBO0tBQ0E7a0JBQ0E7ZUFDQTtlQUNBO0FBQ0E7cUJBQ0E7Ozs7V0FJQTtZQUNBO2dCQUVBO0FBSkE7b0JBS0E7V0FHQTtBQVRBOzs7aURBV0E7a0JBQ0E7cUVBQ0E7dUNBQ0E7Z0NBQ0E7QUFDQTtBQUNBO0FBRUE7QUFUQTtBQVhBIiwiZmlsZSI6InBhZ2VzL2dlb2xvY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTMxMzU2MzI5NmVhZTEyN2MzZGUiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL2dlb2xvY2F0aW9uLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL2dlb2xvY2F0aW9uLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9L1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hcHAvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL25vZGVfbW9kdWxlcy9iYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz0vVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9ub2RlX21vZHVsZXMvYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vZ2VvbG9jYXRpb24ud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvOGRkZGUyNjhlZDcxYzYwZGJlZDExOGE2MDk1ZDliYWQnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuX193ZWV4X2Jvb3RzdHJhcF9fKCdAd2VleC1jb21wb25lbnQvOGRkZGUyNjhlZDcxYzYwZGJlZDExOGE2MDk1ZDliYWQnLHVuZGVmaW5lZCx1bmRlZmluZWQpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcGFnZXMvZ2VvbG9jYXRpb24ud2U/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIm5hdmJhci1jb25cIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJuYXZiYXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJidG4tYmFja1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwiZ29Ib21lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJidG4tYXJyb3ctbGVmdFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwOi8vaW1nMS52dWVkLnZhbnRoaW5rLmNuL3Z1ZWQ5YzhlN2U3MzhmZjk0YWJlZTIzZWI2OWQ3ZjE0MDFlOS5wbmdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJ0bi10ZXh0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6L+U5ZueXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRpdGxlXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9pbmNsdWRlL25hdmJhci53ZVxuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIm5hdmJhci1jb25cIjoge1xuICAgIFwiaGVpZ2h0XCI6IDEwOCxcbiAgICBcInBhZGRpbmdUb3BcIjogMjBcbiAgfSxcbiAgXCJuYXZiYXJcIjoge1xuICAgIFwiekluZGV4XCI6IDEwMDAsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiaGVpZ2h0XCI6IDg4LFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2RkZGRkZFwiXG4gIH0sXG4gIFwiYnRuLWJhY2tcIjoge1xuICAgIFwiekluZGV4XCI6IDEwMDIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiAxODAsXG4gICAgXCJoZWlnaHRcIjogODhcbiAgfSxcbiAgXCJidG4tYXJyb3ctbGVmdFwiOiB7XG4gICAgXCJ3aWR0aFwiOiA2MCxcbiAgICBcImhlaWdodFwiOiA2MCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMTBcbiAgfSxcbiAgXCJidG4tdGV4dFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwZjg5ZjVcIlxuICB9LFxuICBcInRpdGxlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogMTgwLFxuICAgIFwicmlnaHRcIjogMTgwLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJoZWlnaHRcIjogODgsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDg4LFxuICAgIFwiZm9udFNpemVcIjogMzYsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvaW5jbHVkZS9uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTciLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJuYXZiYXItY29uXCI+XG4gICAgPGRpdiBjbGFzcz1cIm5hdmJhclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImJ0bi1iYWNrXCIgb25jbGljaz1cImdvSG9tZVwiPlxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJidG4tYXJyb3ctbGVmdFwiIHNyYz1cImh0dHA6Ly9pbWcxLnZ1ZWQudmFudGhpbmsuY24vdnVlZDljOGU3ZTczOGZmOTRhYmVlMjNlYjY5ZDdmMTQwMWU5LnBuZ1wiPjwvaW1hZ2U+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiYnRuLXRleHRcIj7ov5Tlm548L3RleHQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwidGl0bGVcIj57e3RpdGxlfX08L3RleHQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZT5cbiAgLm5hdmJhci1jb257XG4gICAgaGVpZ2h0OiAxMDg7XG4gICAgcGFkZGluZy10b3A6IDIwO1xuICB9XG4gIC5uYXZiYXJ7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OiA4ODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMjtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGRkO1xuICB9XG4gIC5idG4tYmFja3tcbiAgICB6LWluZGV4OiAxMDAyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTgwO1xuICAgIGhlaWdodDogODg7XG4gIH1cbiAgLmJ0bi1hcnJvdy1sZWZ0e1xuICAgIHdpZHRoOiA2MDtcbiAgICBoZWlnaHQ6IDYwO1xuICAgIG1hcmdpbi1sZWZ0OiAxMDtcbiAgfVxuICAuYnRuLXRleHR7XG4gICAgY29sb3I6ICMwZjg5ZjU7XG4gIH1cbiAgLnRpdGxle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OjE4MDtcbiAgICByaWdodDoxODA7XG4gICAgdG9wOjA7XG4gICAgaGVpZ2h0OiA4ODtcbiAgICBsaW5lLWhlaWdodDogODg7XG4gICAgZm9udC1zaXplOiAzNjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICBjb25zdCBuYXZpZ2F0b3IgPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvbmF2aWdhdG9yJyk7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIG1ldGhvZHM6IHtcbiAgICAgIGdvSG9tZSgpIHtcbiAgICAgICAgbmF2aWdhdG9yLnBvcCgpO1xuICAgICAgfVxuICAgIH0gICBcbiAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luY2x1ZGUvbmF2YmFyLndlPzE2NTJiYWE4IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9uYXZiYXIud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vbmF2YmFyLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9L1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hcHAvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL25vZGVfbW9kdWxlcy9iYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz0vVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9ub2RlX21vZHVsZXMvYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vbmF2YmFyLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L25hdmJhcicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS9uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwibmF2YmFyXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInRpdGxlXCI6IFwi5L2/55So5Zyw5Zu+5a6a5L2NXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIndlZXgtYW1hcFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIm1hcFwiXG4gICAgICBdLFxuICAgICAgXCJpZFwiOiBcIm1hcDIwMTdcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic2RrS2V5XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5rZXlzfSxcbiAgICAgICAgXCJtYXBJbnN0YW5jZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubWFwfSxcbiAgICAgICAgXCJ6b29tXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy56b29tfSxcbiAgICAgICAgXCJjZW50ZXJcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBvc31cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIm1hcC1jb250cm9sXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRpdGxlXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiTWV0aG9kczogZ2V0VXNlckxvY2F0aW9uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0aXBzXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiZ2V0VXNlckxvY2F0aW9uIOS9oOWPr+S7pemAmui/h+iwg+eUqOivpeaWueazleadpei/m+ihjOeUqOaIt+W9k+WJjeS9jee9rueahOWumuS9jVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInNldFVzZXJMb2NhdGlvblwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJ0bmJveFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJidG5cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlrprkvY3liLDlvZPliY3kvY3nva5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidGlwc1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICfnlKjmiLfnmoTlvZPliY3lnZDmoIfkuLo6ICcgKyAodGhpcy5wb3MpfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL3BhZ2VzL2dlb2xvY2F0aW9uLndlXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcIm1hcFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJtaW5IZWlnaHRcIjogODAwLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMTAsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcIm1hcC1jb250cm9sXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMjAsXG4gICAgXCJtaW5IZWlnaHRcIjogNjAwXG4gIH0sXG4gIFwidGl0bGVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAyMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDIwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAxMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMTAsXG4gICAgXCJmb250U2l6ZVwiOiAzNixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiA2LFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2U3NGMzY1wiLFxuICAgIFwiY29sb3JcIjogXCIjMjIyMjIyXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJsZWZ0XCJcbiAgfSxcbiAgXCJ0aXBzXCI6IHtcbiAgICBcIm1hcmdpblwiOiAyMCxcbiAgICBcInBhZGRpbmdcIjogMTAsXG4gICAgXCJjb2xvclwiOiBcIiM2NjY2NjZcIixcbiAgICBcImZvbnRTaXplXCI6IDIwXG4gIH0sXG4gIFwiYnRuXCI6IHtcbiAgICBcIm1hcmdpblwiOiAyMCxcbiAgICBcInBhZGRpbmdcIjogMjAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMWJhMWUyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNSxcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiAyOFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvcGFnZXMvZ2VvbG9jYXRpb24ud2Vcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8bmF2YmFyIHRpdGxlPVwi5L2/55So5Zyw5Zu+5a6a5L2NXCI+PC9uYXZiYXI+XG4gICAgPHdlZXgtYW1hcCBjbGFzcz1cIm1hcFwiIGlkPVwibWFwMjAxN1wiIHNkay1rZXk9e3trZXlzfX0gIG1hcC1pbnN0YW5jZT17e21hcH19IHpvb209e3t6b29tfX0gY2VudGVyPXt7cG9zfX0+XG4gICAgPC93ZWV4LWFtYXA+XG4gICAgPGRpdiBjbGFzcz1cIm1hcC1jb250cm9sXCI+XG4gICAgICA8dGV4dCBjbGFzcz1cInRpdGxlXCI+TWV0aG9kczogZ2V0VXNlckxvY2F0aW9uPC90ZXh0PiBcbiAgICAgIDx0ZXh0IGNsYXNzPVwidGlwc1wiPmdldFVzZXJMb2NhdGlvbiDkvaDlj6/ku6XpgJrov4fosIPnlKjor6Xmlrnms5XmnaXov5vooYznlKjmiLflvZPliY3kvY3nva7nmoTlrprkvY08L3RleHQ+XG4gICAgICA8ZGl2IG9uY2xpY2s9XCJzZXRVc2VyTG9jYXRpb25cIiBjbGFzcz1cImJ0bmJveFwiPjx0ZXh0IGNsYXNzPVwiYnRuXCIgPuWumuS9jeWIsOW9k+WJjeS9jee9rjwvdGV4dD48L2Rpdj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwidGlwc1wiPueUqOaIt+eahOW9k+WJjeWdkOagh+S4ujoge3twb3N9fTwvdGV4dD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIC5jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIC5tYXB7XG4gICAgZmxleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtaW4taGVpZ2h0OiA4MDA7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTA7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgfVxuICAubWFwLWNvbnRyb2x7XG4gICAgcGFkZGluZy10b3A6IDIwO1xuICAgIG1pbi1oZWlnaHQ6IDYwMDtcbiAgfVxuICAudGl0bGV7XG4gICAgbWFyZ2luLWxlZnQ6IDIwO1xuICAgIHBhZGRpbmctbGVmdDogMjA7XG4gICAgcGFkZGluZy10b3A6IDEwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDY7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNlNzRjM2M7XG4gICAgY29sb3I6ICMyMjI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAudGlwc3tcbiAgICBtYXJnaW46IDIwO1xuICAgIHBhZGRpbmc6IDEwO1xuICAgIGNvbG9yOiM2NjY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5idG57XG4gICAgbWFyZ2luOiAyMDtcbiAgICBwYWRkaW5nOiAyMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWJhMWUyO1xuICAgIGJvcmRlci1yYWRpdXM6IDU7XG4gICAgY29sb3I6ICNmZmY7IFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIHJlcXVpcmUoJy4uL2luY2x1ZGUvbmF2YmFyLndlJyk7XG4gIHZhciBBbWFwID0gbnVsbDtcbiAgdHJ5IHtcbiAgICBBbWFwID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL2FtYXAnKTtcbiAgfSBjYXRjaChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG4gIHZhciBtb2RhbCA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9tb2RhbCcpO1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICBrZXlzOiB7XG4gICAgICAgIGg1OidmNGI5OWRjZDUxNzUyMTQyZWMwZjFiZGNiOWE4ZWMwMicsXG4gICAgICAgIGlvczogJycsXG4gICAgICAgIGFuZHJvaWQ6ICdkYjZhOTczMTU5Y2IwYzI2MzlhZDAyYzYxN2E3ODZhZSdcbiAgICAgIH0sXG4gICAgICBwb3M6IFsxMTYuNDg3LCA0MC4wMDAwM10sXG4gICAgICB6b29tOiA5LFxuICAgIH0sXG4gICAgXG4gICAgbWV0aG9kczoge1xuICAgICAgc2V0VXNlckxvY2F0aW9uKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgQW1hcC5nZXRVc2VyTG9jYXRpb24odGhpcy4kZWwoJ21hcDIwMTcnKS5yZWYsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgaWYoZGF0YS5yZXN1bHQgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBzZWxmLnBvcyA9IGRhdGEuZGF0YS5wb3NpdGlvbjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvZ2VvbG9jYXRpb24ud2U/MDc5NTg4ZWUiXSwic291cmNlUm9vdCI6IiJ9