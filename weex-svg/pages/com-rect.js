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
	__vue_styles__.push(__webpack_require__(40)
	)

	/* script */
	__vue_exports__ = __webpack_require__(41)

	/* template */
	var __vue_template__ = __webpack_require__(42)
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
	__vue_options__.__file = "/Users/ali-130257n/www/weex-svg/demos/pages/com-rect.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-131d01fb"
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

/***/ 40:
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
	  },
	  "btn-group": {
	    "flexDirection": "row"
	  },
	  "btn": {
	    "margin": 20,
	    "border": "1px solid #ccc"
	  },
	  "btn-text": {
	    "color": "#333333"
	  }
	}

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _navbar = __webpack_require__(19);

	var _navbar2 = _interopRequireDefault(_navbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  components: {
	    navbar: _navbar2.default
	  },

	  data: function data() {
	    return {
	      timer: false,
	      animRect: {
	        x: 5,
	        y: 5
	      }
	    };
	  },


	  methods: {
	    start: function start() {
	      var _this = this;

	      this.timer = setInterval(function () {
	        if (_this.animRect.x > 550) {
	          clearInterval(_this.timer);
	          _this.animRect.x = 5;
	          _this.animRect.y = 5;
	        }
	        _this.animRect.x += 2;
	        _this.animRect.y += 2;
	      }, 1000 / 60);
	    }
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

/***/ },

/***/ 42:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["page"]
	  }, [_c('navbar', {
	    attrs: {
	      "back": "true",
	      "title": "rect"
	    }
	  }), _c('scroller', {
	    staticClass: ["main"]
	  }, [_c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("The rect component is an SVG basic shape, used to create rectangles based on the position of a corner and their width and height")]), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticClass: ["item-shape"]
	  }, [_c('rect', {
	    attrs: {
	      "x": "100",
	      "y": "50",
	      "width": "300",
	      "height": "300",
	      "fill": "#f39c12"
	    }
	  })], 1), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("a simple rect componnet")])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticClass: ["item-shape"]
	  }, [_c('rect', {
	    attrs: {
	      "x": "5",
	      "y": "5",
	      "width": "50",
	      "height": "50",
	      "fill": "#f39c12"
	    }
	  }), _c('rect', {
	    attrs: {
	      "x": "60",
	      "y": "60",
	      "width": "50",
	      "height": "50",
	      "fill": "#f39c12"
	    }
	  }), _c('rect', {
	    attrs: {
	      "x": "115",
	      "y": "115",
	      "width": "50",
	      "height": "50",
	      "fill": "#f39c12"
	    }
	  }), _c('rect', {
	    attrs: {
	      "x": "170",
	      "y": "170",
	      "width": "50",
	      "height": "50",
	      "fill": "#f39c12"
	    }
	  }), _c('rect', {
	    attrs: {
	      "x": "220",
	      "y": "225",
	      "width": "50",
	      "height": "50",
	      "fill": "#f1c40f"
	    }
	  })], 1), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("use x and y to set the position of shape")])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticClass: ["item-shape"]
	  }, [_c('rect', {
	    attrs: {
	      "x": "5",
	      "y": "5",
	      "width": "50",
	      "height": "50",
	      "fill": "#f39c12"
	    }
	  }), _c('rect', {
	    attrs: {
	      "x": "60",
	      "y": "60",
	      "width": "100",
	      "height": "100",
	      "fill": "#f39c12"
	    }
	  }), _c('rect', {
	    attrs: {
	      "x": "165",
	      "y": "160",
	      "width": "150",
	      "height": "150",
	      "fill": "#f39c12"
	    }
	  })], 1), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("use width and height to set the size of shape")])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticClass: ["item-shape"]
	  }, [_c('rect', {
	    attrs: {
	      "x": "5",
	      "y": "5",
	      "width": "100",
	      "height": "100",
	      "fill": "#2ecc71"
	    }
	  }), _c('rect', {
	    attrs: {
	      "x": "120",
	      "y": "5",
	      "width": "100",
	      "height": "100",
	      "fill": "#3498db"
	    }
	  }), _c('rect', {
	    attrs: {
	      "x": "240",
	      "y": "5",
	      "width": "100",
	      "height": "100",
	      "fill": "#9b59b6"
	    }
	  }), _c('rect', {
	    attrs: {
	      "x": "5",
	      "y": "120",
	      "width": "100",
	      "height": "100",
	      "strokeWidth": "2",
	      "fill": "#fff",
	      "stroke": "#2ecc71"
	    }
	  }), _c('rect', {
	    attrs: {
	      "x": "120",
	      "y": "120",
	      "width": "100",
	      "height": "100",
	      "strokeWidth": "2",
	      "fill": "#fff",
	      "stroke": "#3498db"
	    }
	  }), _c('rect', {
	    attrs: {
	      "x": "240",
	      "y": "120",
	      "width": "100",
	      "height": "100",
	      "strokeWidth": "4",
	      "fill": "#fff",
	      "stroke": "#9b59b6"
	    }
	  }), _c('rect', {
	    attrs: {
	      "x": "5",
	      "y": "240",
	      "width": "335",
	      "height": "100",
	      "strokeWidth": "4",
	      "fill": "#fff",
	      "stroke": "#9b59b6"
	    }
	  })], 1), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("use fill and stroke to set the color and outline of shape")])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticStyle: {
	      width: "600px",
	      height: "600px"
	    }
	  }, [_c('rect', {
	    attrs: {
	      "x": _vm.animRect.x,
	      "y": _vm.animRect.y,
	      "width": "50",
	      "height": "50",
	      "fill": "#2ecc71"
	    }
	  })], 1), _c('div', {
	    staticClass: ["btn-group"]
	  }, [_c('div', {
	    staticClass: ["btn"],
	    on: {
	      "click": _vm.start
	    }
	  }, [_c('text', [_vm._v("开始")])])])], 1)])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });