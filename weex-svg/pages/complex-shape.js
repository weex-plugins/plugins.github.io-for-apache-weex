// { "framework": "Vue" }
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

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(43)
	)

	/* script */
	__vue_exports__ = __webpack_require__(44)

	/* template */
	var __vue_template__ = __webpack_require__(45)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/ali-130257n/www/weex-svg/demos/pages/complex-shape.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-19cbefee"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = {
	  "navbar": {
	    "zIndex": 200,
	    "position": "fixed",
	    "left": 0,
	    "right": 0,
	    "top": 0,
	    "display": "flex",
	    "flexDirection": "row",
	    "height": 88,
	    "backgroundColor": "#ffffff",
	    "alignItems": "center",
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#dddddd"
	  },
	  "btn-icon-left": {
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
	    "fontSize": 34,
	    "textAlign": "center"
	  }
	}

/***/ },

/***/ 10:
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var navigator = weex.requireModule('navigator');
	module.exports = {
	  props: {
	    title: {
	      default: 'Title',
	      type: String
	    },
	    back: {
	      default: false,
	      type: Boolean
	    }
	  },
	  methods: {
	    goHome: function goHome() {
	      navigator.pop();
	    }
	  }
	};

/***/ },

/***/ 11:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["navbar"]
	  }, [(_vm.leftCorner) ? _c('div', {
	    staticClass: ["btn-icon-left"],
	    on: {
	      "click": _vm.goHome
	    }
	  }, [_c('image', {
	    staticClass: ["btn-arrow-left"],
	    attrs: {
	      "src": _vm.leftCorner.src
	    }
	  }), _c('text', {
	    staticClass: ["btn-text"]
	  }, [_vm._v(_vm._s(_vm.leftCorner.text))])]) : _vm._e(), (_vm.back) ? _c('div', {
	    staticClass: ["btn-icon-left"],
	    on: {
	      "click": _vm.goHome
	    }
	  }, [_c('image', {
	    staticClass: ["btn-arrow-left"],
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vued9c8e7e738ff94abee23eb69d7f1401e9.png"
	    }
	  }), _c('text', {
	    staticClass: ["btn-text"]
	  }, [_vm._v("返回")])]) : _vm._e(), (_vm.rightCorner) ? _c('div', {
	    staticClass: ["btn-icon-left"],
	    on: {
	      "click": _vm.goHome
	    }
	  }, [_c('image', {
	    staticClass: ["btn-arrow-left"],
	    attrs: {
	      "src": "rightCorner.src"
	    }
	  }), _c('text', {
	    staticClass: ["btn-text"]
	  }, [_vm._v(_vm._s(_vm.rightCorner.text))])]) : _vm._e(), _c('text', {
	    staticClass: ["title"]
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(9)
	)

	/* script */
	__vue_exports__ = __webpack_require__(10)

	/* template */
	var __vue_template__ = __webpack_require__(11)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/ali-130257n/www/weex-svg/demos/include/navbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-75f1a292"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },

/***/ 43:
/***/ function(module, exports) {

	module.exports = {
	  "page": {
	    "flex": 1,
	    "paddingTop": 20,
	    "backgroundColor": "#ffffff"
	  },
	  "main": {
	    "paddingTop": 88
	  },
	  "desc": {
	    "margin": 20,
	    "fontSize": 28,
	    "textAlign": "left",
	    "color": "#444444"
	  },
	  "item": {
	    "alignItems": "center",
	    "margin": 20,
	    "padding": 10,
	    "borderBottom": "2px solid #ddd"
	  },
	  "item-shape": {
	    "width": 600,
	    "height": 480
	  }
	}

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _navbar = __webpack_require__(19);

	var _navbar2 = _interopRequireDefault(_navbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  components: {
	    navbar: _navbar2.default
	  }

	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },

/***/ 45:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["page"]
	  }, [_c('navbar', {
	    attrs: {
	      "back": "true",
	      "title": "Advanced Demos"
	    }
	  }), _c('scroller', {
	    staticClass: ["main"]
	  }, [_c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("Some Svg Figures")]), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticStyle: {
	      width: "363px",
	      height: "177px"
	    },
	    attrs: {
	      "viewBox": "0 0 121 59"
	    }
	  }, [_c('path', {
	    attrs: {
	      "d": "M61.072 32.55c.227 0 .455.147.487.38l.714 6.92c.032.32.13.554.26.554s.26-.233.292-.554l.78-6.92c.064-.233.162-.38.39-.38h3.31c.163 0 .358.147.39.322l.844 6.978c.033.32.13.554.26.554s.26-.233.293-.554l.65-6.95c.03-.203.162-.35.357-.35h5.26c.325 0 .422.176.39.41l-3.02 21.05c-.033.292-.228.438-.422.438h-4.74a.4.4 0 0 1-.39-.32l-1.235-7.067c-.033-.26-.13-.466-.26-.466s-.227.234-.26.497L64.287 54.1c-.065.204-.163.35-.357.35h-4.807a.467.467 0 0 1-.454-.38L55.55 32.93c-.033-.263.13-.38.357-.38h5.162zM77.21 32.93c0-.175.195-.38.422-.38H89.16c.194 0 .324.146.324.322v5.255c0 .175-.162.292-.357.292h-5.423c-.13 0-.227.087-.227.203v1.636c0 .115.13.203.227.203h5.48c.13 0 .227.088.227.204v5.314a.27.27 0 0 1-.26.264h-5.543c-.13 0-.228.088-.228.234V48.2c0 .117.097.205.194.205h5.618c.227 0 .358.146.358.292v5.43c0 .176-.163.32-.358.32H77.567c-.195 0-.357-.174-.357-.378V32.93zM91.66 32.93c0-.175.194-.38.422-.38h11.527c.194 0 .324.146.324.322v5.255c0 .175-.163.292-.357.292h-5.423c-.13 0-.227.087-.227.203v1.636c0 .115.13.203.227.203h5.48c.13 0 .227.088.227.204v5.314a.27.27 0 0 1-.26.264h-5.544c-.13 0-.227.088-.227.234V48.2c0 .117.097.205.194.205h5.618c.227 0 .357.146.357.292v5.43c0 .176-.164.32-.358.32H92.016c-.194 0-.357-.174-.357-.378V32.93zM109.194 43.47a.63.63 0 0 0 .065-.233c0-.06-.033-.205-.066-.292l-3.702-10.073c-.065-.146 0-.322.195-.322h5.942c.13 0 .227.117.26.234l.746 3.037c.033.117.097.205.13.205.065 0 .13-.088.162-.204l.747-3.036c.033-.146.13-.234.26-.234h5.942c.13 0 .26.088.26.234 0 .058 0 .117-.032.204l-3.702 9.84c-.065.117-.098.32-.098.38 0 .058.033.233.065.32l3.767 10.628c.065.205 0 .292-.195.292h-6.04c-.097 0-.194-.087-.227-.204l-.747-3.59c-.032-.118-.097-.176-.13-.176-.065 0-.097.058-.13.175l-.746 3.59c-.033.118-.163.205-.293.205h-5.976c-.13 0-.194-.058-.194-.146 0-.058 0-.088.032-.146l3.702-10.686z",
	      "stroke": "#F5F5F5",
	      "strokeWidth": ".9",
	      "fill": "#515151"
	    }
	  }), _c('path', {
	    attrs: {
	      "d": "M34.93 21.862a2.734 2.734 0 0 1 0-5.466 2.734 2.734 0 0 1 0 5.466m20.622-10.31a20.59 20.59 0 0 0-5.766-4.86C34.99-4.104 14.29-1.036 3.256 13.506 7.303 8.28 13.39 5.503 19.57 5.472 8.03 10.708 0 22.312 0 35.8c0 3.77.837 7.627 1.993 11.005 1.66-1.508 3.173-5.484 4.948-6.862.87 4.27 2.554 10.537 4.886 14.043 2.168-4.383 3.93-7.445 7.157-11.055.88 6.3 4.505 11.052 8.398 15.71a33.137 33.137 0 0 1 3.138-15.576c.156.076.313.15.472.224A33.468 33.468 0 0 0 41.56 55.13c-1.486-3.093-2.32-6.452-2.788-9.984a33.586 33.586 0 0 1-.294-4.416c0-3.223-.1-6.338.754-9.286.4-1.374.51-2.71 1.075-4.006.22-.503.45-1 .695-1.49 1.054-2.12 2.147-4.147 3.747-6.126.303-.376.802-.745 1.12-1.108 1.435-1.412 4.15-2.285 6.324-2.285 4.123 0 7.406 2.918 7.8 6.95-.146-4.694-1.658-8.434-4.442-11.828",
	      "fill": "#00B4FF"
	    }
	  }), _c('path', {
	    attrs: {
	      "d": "M35.975 17.44a1.69 1.69 0 1 1 .002 3.38 1.69 1.69 0 0 1-.002-3.38",
	      "fill": "#515151"
	    }
	  })], 1), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("weex logo")])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticStyle: {
	      width: "300px",
	      height: "300px"
	    },
	    attrs: {
	      "viewBox": "0 0 300 300"
	    }
	  }, [_c('path', {
	    attrs: {
	      "d": "M155.3,39.7c26.9,1.1,51.2,11.9,69.7,29l0,0c-18.5,20.2-30.2,46.8-31.4,76.1h-38.3C155.3,144.7,155.3,39.7,155.3,39.7z\n           M145.7,39.7v105.1h-38.3c-1.2-29.3-12.8-55.9-31.4-76.1l0,0C94.5,51.6,118.9,40.8,145.7,39.7z M155.3,259.3V154.3h38.3\n          c1.2,29.3,12.8,55.9,31.4,76.1l0,0C206.5,247.4,182.1,258.2,155.3,259.3z M145.7,259.3c-26.9-1.1-51.2-11.9-69.7-29\n          c18.5-20.2,30.2-46.8,31.4-76.1h38.3C145.7,154.3,145.7,259.3,145.7,259.3z M231.8,75.4c16.8,18.4,27.4,42.6,28.6,69.3l0,0h-57.2\n          C204.3,118.1,214.9,93.9,231.8,75.4L231.8,75.4L231.8,75.4L231.8,75.4z M231.8,223.6L231.8,223.6L231.8,223.6\n          c-16.8-18.4-27.4-42.6-28.6-69.3h57.2C259.2,180.9,248.6,205.1,231.8,223.6L231.8,223.6z M40.7,144.7c1.1-26.6,11.8-50.8,28.6-69.3\n          l0,0c16.8,18.4,27.4,42.6,28.6,69.3H40.7L40.7,144.7z M40.7,154.3h57.2c-1.1,26.6-11.8,50.8-28.6,69.3\n          C52.4,205.1,41.8,180.9,40.7,154.3L40.7,154.3z M150.5,269c66,0,119.5-53.5,119.5-119.5S216.5,30,150.5,30S31,83.5,31,149.5\n          S84.5,269,150.5,269L150.5,269z",
	      "fill": "#000000"
	    }
	  })], 1), _c('svg', {
	    staticStyle: {
	      width: "120px",
	      height: "120px"
	    },
	    attrs: {
	      "viewBox": "0 0 120 120"
	    }
	  }, [_c('path', {
	    attrs: {
	      "fill": "#f1c40f",
	      "d": "M29.2,31.2V10h61.5L69.6,31.2l21.2,21.2H33.1V110h-3.8V31.2z M33.1,13.8v34.6h48.1L63.8,31.2l17.3-17.3H33.1z"
	    }
	  })], 1), _c('svg', {
	    staticStyle: {
	      width: "120px",
	      height: "120px"
	    },
	    attrs: {
	      "viewBox": "0 0 120 120"
	    }
	  }, [_c('path', {
	    attrs: {
	      "fill": "#2ec7c1",
	      "d": "M73.6,64.6H47.3l7.1,6.3l7.2,0l-5.4,0h10.7l0.1-0.1l-0.3,0L73.6,64.6L73.6,64.6z M77.1,61.4l10.2-9.2V26.7\n\tc0-1.8-1.4-3.2-3.2-3.2H36.8c-1.7,0-3.2,1.4-3.2,3.2v25.9l10,8.8H77.1L77.1,61.4z M49.7,20.3l10.8-9.5l10.8,9.5h12.9\n\tc3.5,0,6.3,2.8,6.3,6.3v10.6l9.5,8.3v44.3c0,3.5-2.8,6.3-6.3,6.3H27.3c-3.5,0-6.3-2.8-6.3-6.3V45.6l9.5-8.3V26.6\n\tc0-3.5,2.8-6.3,6.3-6.3L49.7,20.3L49.7,20.3z M66.6,20.3l-6.1-5.4l-6.1,5.4C54.4,20.3,66.6,20.3,66.6,20.3z M90.5,41.4v8.4l4.7-4.2\n\tL90.5,41.4z M30.5,49.8v-8.4l-4.7,4.2L30.5,49.8z M51,74L28.9,93h63.2L70,74H51z M95.8,92.1L95.8,92.1L95.8,92.1\n\tc0.6-0.6,1-1.4,1-2.3V48.8L71.6,70.9L95.8,92.1z M25.2,92.1l24.3-21.2L24.2,48.8v41.1C24.2,90.7,24.5,91.6,25.2,92.1L25.2,92.1\n\tL25.2,92.1z M40,33v3.2H81V33H40z M40,42.4v3.2H81v-3.2H40z M40,51.9v3.2H81v-3.2H40z"
	    }
	  })], 1), _c('svg', {
	    staticStyle: {
	      width: "120px",
	      height: "120px"
	    },
	    attrs: {
	      "viewBox": "0 0 120 120"
	    }
	  }, [_c('path', {
	    attrs: {
	      "fill": "#3ec7c1",
	      "d": "M59,77l28.3,18.9L74.7,64.4L103,45.6H71.6L59,14.1L46.4,45.6H15l28.3,18.9L30.7,95.9L59,77z M59,73.1L37.6,87.4\n\tl10.1-24.2L25.1,48.7h23.6L59,22l10.4,26.7h23.6L70.3,63.2l10.1,24.2C80.4,87.4,59,73.1,59,73.1z"
	    }
	  })], 1), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("Some Svg Icons")])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticStyle: {
	      width: "400px",
	      height: "300px"
	    }
	  }, [_c('defs', [_c('linearGradient', {
	    attrs: {
	      "id": "trunkgrad",
	      "x1": "0%",
	      "y1": "0%",
	      "x2": "0%",
	      "y2": "100%"
	    }
	  }, [_c('stop', {
	    attrs: {
	      "offset": "0%",
	      "stopColor": "#996d2e"
	    }
	  }), _c('stop', {
	    attrs: {
	      "offset": "100%",
	      "stopColor": "#d5bc79"
	    }
	  })], 1), _c('radialGradient', {
	    attrs: {
	      "id": "shadow",
	      "cx": "50%",
	      "cy": "50%",
	      "r": "50%",
	      "fx": "50%",
	      "fy": "50%"
	    }
	  }, [_c('stop', {
	    attrs: {
	      "offset": "0%",
	      "stopColor": "000000"
	    }
	  }), _c('stop', {
	    attrs: {
	      "offset": "100%",
	      "stopColor": "#666666"
	    }
	  })], 1)], 1), _c('ellipse', {
	    attrs: {
	      "cx": "188",
	      "cy": "273",
	      "rx": "80",
	      "ry": "20",
	      "fill": "url(#shadow)"
	    }
	  }), _c('ellipse', {
	    attrs: {
	      "cx": "188",
	      "cy": "273",
	      "rx": "24",
	      "ry": "5",
	      "fill": "url(#shadow)"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "182,211 187,211 187,274 180,274",
	      "fill": "url(#trunkgrad)"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "187,211 196,211 198,274 187,274",
	      "fill": "#996d2e"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "187,28 154,162 116,159",
	      "fill": "#a5df66",
	      "stroke": "#a5df66"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "154,162 116,159 155,218",
	      "fill": "#79b544",
	      "stroke": "#79b544"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "187,28 216,114 154,162",
	      "fill": "#619b37",
	      "stroke": "#619b37"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "187,28 216,114 264,162 204,28",
	      "fill": "#619b37",
	      "stroke": "#619b37"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "216,114 264,162 223,210",
	      "fill": "#54892f",
	      "stroke": "#54892f"
	    }
	  }), _c('polygon', {
	    staticStyle: {
	      fill: "#5c9433"
	    },
	    attrs: {
	      "points": "216,114 223,210 154,162"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "154,162 223,210 188,211",
	      "fill": "#54892f",
	      "stroke": "#54892f"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "154,162 188,211 155,218",
	      "fill": "#54892f",
	      "stroke": "#54892f"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "200,70 216,114 185,137",
	      "fill": "#79b544",
	      "stroke": "#79b544"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "216,114 220,167 185,137",
	      "fill": "#588f32"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "216,114 250,148 220,167",
	      "fill": "#598d33"
	    }
	  })], 1), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("A tree by  Luke Reid")])], 1)])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });