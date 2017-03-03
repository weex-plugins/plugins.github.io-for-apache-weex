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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(26)
	)

	/* script */
	__vue_exports__ = __webpack_require__(27)

	/* template */
	var __vue_template__ = __webpack_require__(28)
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
	__vue_options__.__file = "/Users/ali-130257n/www/weex-svg/demos/pages/com-path.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
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
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _navbar = __webpack_require__(18);

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

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["page"]
	  }, [_c('navbar', {
	    attrs: {
	      "back": "true",
	      "title": "path"
	    }
	  }), _c('scroller', {
	    staticClass: ["main"]
	  }, [_c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("The rect component is an SVG basic shape, used to create rectangles based on the position of a corner and their width and height")]), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticClass: ["item-shape"]
	  }, [_c('path', {
	    attrs: {
	      "d": "M300,240 A50,50 0 0,1 150,80",
	      "stroke": "#e84c3d",
	      "strokeWidth": "4",
	      "fill": "none"
	    }
	  })], 1), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("a simple path componnet")])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticClass: ["item-shape"]
	  }, [_c('path', {
	    attrs: {
	      "d": "M20,20 L420,20",
	      "stroke": "#e84c3d",
	      "strokeWidth": "4",
	      "fill": "none"
	    }
	  }), _c('path', {
	    staticStyle: {
	      stroke: "#3598dc",
	      fill: "none",
	      strokeWidth: "2"
	    },
	    attrs: {
	      "d": "M120,240\n                 A50,50 0 0,0 120,80"
	    }
	  }), _c('path', {
	    staticStyle: {
	      stroke: "#2fcc71",
	      fill: "none",
	      strokeWidth: "2"
	    },
	    attrs: {
	      "d": "M50,50\n                 A50,50 0 1,0 120,80"
	    }
	  }), _c('path', {
	    staticStyle: {
	      stroke: "#ea6153",
	      fill: "none",
	      strokeWidth: "2"
	    },
	    attrs: {
	      "d": "M50,50\n                 A50,50 0 0,1 120,80"
	    }
	  })], 1), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("The attribute d defines a path to follow")])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    attrs: {
	      "width": "300",
	      "height": "300",
	      "viewBox": "0 0 1024 1024"
	    }
	  }, [_c('path', {
	    attrs: {
	      "fill": "#9b59b6",
	      "d": "M282.096 465.638l113.485 48.172 40.052 137.68-78.856 81.658-129.431 7.11c-39.496-55.842-63.826-123.172-66.993-195.993l121.743-78.626zM284.936 432.080l-49.333-127.558c41.686-54.459 98.242-96.933 163.603-121.355l112.794 91.809v122.047l-106.134 86.389-120.929-51.331zM387.908 746.977l72.404-74.977h131.769l75.234 77.907-34.756 131.027v0c-33.143 9.804-68.237 15.066-104.559 15.066s-71.416-5.262-104.559-15.066l-35.533-133.957zM695.414 732.939l-75.882-78.579 41.276-141.887 112.002-47.542 122.837 79.333c-3.167 72.821-27.497 140.151-66.993 195.993l-133.24-7.319zM771.606 430.679l-122.417 51.963-105.188-85.619v-122.047l112.794-91.809v0c65.361 24.423 121.917 66.896 163.603 121.355l-48.791 126.156zM213.234 337.249l41.532 107.667-94.108 60.896c3.655-61.467 22.398-118.872 52.576-168.563zM386.164 867.672c-51.591-21.568-97.225-54.547-133.745-95.782l106.713-5.768 27.032 101.55zM669.836 867.672l27.032-101.55 106.713 5.768c-36.521 41.235-82.154 74.214-133.745 95.782zM842.766 337.249c30.178 49.691 48.921 107.096 52.576 168.563l-94.108-60.896 41.532-107.667zM620.053 171.607l-92.053 74.793-92.053-74.793c29.421-7.577 60.266-11.607 92.053-11.607s62.632 4.030 92.053 11.607zM528 928c220.914 0 400-179.086 400-400s-179.086-400-400-400c-220.914 0-400 179.086-400 400s179.086 400 400 400v0zM528 425.6l102.4 83.2-41.601 131.2h-121.6l-41.601-131.2 102.4-83.2z"
	    }
	  })], 1), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("use path to draw a soccer")])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    attrs: {
	      "width": "300",
	      "height": "300",
	      "viewBox": "0 0 1024 1024"
	    }
	  }, [_c('path', {
	    attrs: {
	      "fill": "#f1c40f",
	      "d": "M682.768 474.595v0c2.807-11.244 4.533-22.917 5.060-34.901-14.965 5.268-31.061 8.133-47.827 8.133-79.529 0-144-64.471-144-144 0-16.766 2.865-32.863 8.133-47.827-11.984 0.527-23.656 2.253-34.901 5.060-76.535 19.106-133.232 88.316-133.232 170.768 0 97.202 78.798 176 176 176 82.452 0 151.662-56.698 170.768-133.232zM368 431.827c0-62.763 40.153-116.148 96.173-135.867-0.115 2.608-0.173 5.231-0.173 7.867 0 97.202 78.798 176 176 176 2.636 0 5.259-0.058 7.867-0.173-19.719 56.019-73.104 96.173-135.867 96.173-79.529 0-144-64.471-144-144v0zM240.263 704c-8.982 0-16.263-7.422-16.263-16 0-8.837 7.252-16 16.263-16h194.404l93.333 80 93.333-80h194.404c8.982 0 16.263 7.422 16.263 16 0 8.837-7.252 16-16.263 16h-175.737l-112 96-112-96h-175.737z"
	    }
	  })], 1), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("use path to draw a moon")])], 1)])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);