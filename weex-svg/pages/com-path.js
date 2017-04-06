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
	__vue_styles__.push(__webpack_require__(34)
	)

	/* script */
	__vue_exports__ = __webpack_require__(35)

	/* template */
	var __vue_template__ = __webpack_require__(36)
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
	__vue_options__._scopeId = "data-v-e7c9f888"
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

/***/ 34:
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

/***/ 35:
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

/***/ },

/***/ 36:
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
	  }, [_vm._v("a simple path componnent")])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticClass: ["item-shape"]
	  }, [_c('path', {
	    attrs: {
	      "d": "M25,100 C25,150 75,150 75,100 S100,25 150,75",
	      "stroke": "#3598dc",
	      "fill": "none",
	      "strokeWidth": "2"
	    }
	  })], 1), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("path command with C and S")])], 1), _c('div', {
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
	    attrs: {
	      "d": "M120,240\n                   A50,50 0 0,0 120,80",
	      "stroke": "#3598dc",
	      "fill": "none",
	      "strokeWidth": "2"
	    }
	  }), _c('path', {
	    attrs: {
	      "d": "M50,50\n                   A50,50 0 1,0 120,80",
	      "stroke": "#2fcc71",
	      "fill": "none",
	      "strokeWidth": "2"
	    }
	  }), _c('path', {
	    attrs: {
	      "d": "M50,50\n                   A50,50 0 0,1 120,80",
	      "stroke": "#ea6153",
	      "fill": "none",
	      "strokeWidth": "2"
	    }
	  })], 1), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("The attribute d defines a path to follow")])], 1), _c('div', {
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
	      "fill": "#9b59b6",
	      "d": "M63.9,128.2l39.7,16.9l14,48.2l-27.6,28.6l-45.3,2.5c-13.8-19.5-22.3-43.1-23.4-68.6L63.9,128.2L63.9,128.2z\n\t M64.9,116.4L47.7,71.8C62.3,52.7,82,37.9,104.9,29.3l39.5,32.1v42.7l-37.1,30.2L64.9,116.4L64.9,116.4z M101,226.6l25.3-26.2h46.1\n\tl26.3,27.3l-12.2,45.9l0,0c-11.6,3.4-23.9,5.3-36.6,5.3s-25-1.8-36.6-5.3L101,226.6L101,226.6z M208.6,221.7L182,194.2l14.4-49.7\n\tl39.2-16.6l43,27.8c-1.1,25.5-9.6,49.1-23.4,68.6L208.6,221.7L208.6,221.7z M235.3,115.9l-42.8,18.2l-36.8-30V61.4l39.5-32.1l0,0\n\tc22.9,8.5,42.7,23.4,57.3,42.5L235.3,115.9L235.3,115.9z M39.8,83.2l14.5,37.7l-32.9,21.3C22.7,120.7,29.3,100.6,39.8,83.2\n\tL39.8,83.2z M100.4,268.9c-18.1-7.5-34-19.1-46.8-33.5l37.3-2L100.4,268.9L100.4,268.9z M199.6,268.9l9.5-35.5l37.3,2\n\tC233.7,249.8,217.7,261.3,199.6,268.9z M260.2,83.2c10.6,17.4,17.1,37.5,18.4,59l-32.9-21.3L260.2,83.2L260.2,83.2z M182.2,25.3\n\tL150,51.4l-32.2-26.2c10.3-2.7,21.1-4.1,32.2-4.1C161.1,21.2,171.9,22.6,182.2,25.3z M150,290c77.3,0,140-62.7,140-140\n\tS227.3,10,150,10S10,72.7,10,150S72.7,290,150,290L150,290z M150,114.2l35.8,29.1l-14.6,45.9h-42.6l-14.6-45.9L150,114.2L150,114.2z\n\t"
	    }
	  })], 1), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("use path to draw a soccer")])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticStyle: {
	      width: "300px",
	      height: "300px"
	    },
	    attrs: {
	      "viewBox": "0 0 1024 1024"
	    }
	  }, [_c('path', {
	    attrs: {
	      "fill": "#f1c40f",
	      "d": "M210.1,129.3L210.1,129.3c1.1-4.4,1.8-8.9,2-13.5c-5.8,2-12.1,3.2-18.6,3.2c-30.9,0-55.9-25-55.9-55.9\n\tc0-6.5,1.1-12.8,3.2-18.6c-4.7,0.2-9.2,0.9-13.5,2c-29.7,7.4-51.7,34.3-51.7,66.3c0,37.7,30.6,68.3,68.3,68.3\n\tC175.8,181,202.7,159,210.1,129.3L210.1,129.3z M87.9,112.7c0-24.4,15.6-45.1,37.3-52.7c0,1-0.1,2-0.1,3.1\n\tc0,37.7,30.6,68.3,68.3,68.3c1,0,2,0,3.1-0.1c-7.7,21.7-28.4,37.3-52.7,37.3C112.9,168.6,87.9,143.5,87.9,112.7L87.9,112.7\n\tL87.9,112.7z M38.3,218.3c-3.5,0-6.3-2.9-6.3-6.2c0-3.4,2.8-6.2,6.3-6.2h75.5l36.2,31.1l36.2-31.1h75.5c3.5,0,6.3,2.9,6.3,6.2\n\tc0,3.4-2.8,6.2-6.3,6.2h-68.2L150,255.6l-43.5-37.3H38.3z"
	    }
	  })], 1), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("use path to draw a moon")])], 1)])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });