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
	__vue_styles__.push(__webpack_require__(46)
	)

	/* script */
	__vue_exports__ = __webpack_require__(47)

	/* template */
	var __vue_template__ = __webpack_require__(48)
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
	__vue_options__.__file = "/Users/ali-130257n/www/weex-svg/demos/pages/pressure.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2574f9e0"
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

/***/ 46:
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
	  "item-shape2": {
	    "width": 600,
	    "height": 600
	  },
	  "btn": {
	    "padding": 20,
	    "backgroundColor": "#1ba1e2"
	  },
	  "btn-text1": {
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "color": "#ffffff"
	  }
	}

/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _navbar = __webpack_require__(19);

	var _navbar2 = _interopRequireDefault(_navbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var circleArr = []; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	for (var i = 4; i < 150; i += 4) {
	  circleArr.push({ r: i, color: ['#', i, i, i, i, i, i].join('').substr(0, 7) });
	}
	module.exports = {
	  components: {
	    navbar: _navbar2.default
	  },

	  data: function data() {
	    return {
	      circles: circleArr,
	      randomShapes: {
	        circles: [],
	        rects: [],
	        polygon: []
	      },
	      points: '100,100 100,200'
	    };
	  },


	  methods: {
	    genRandomShapes: function genRandomShapes() {
	      function genRect() {
	        return {
	          x: Math.floor(Math.random() * 300),
	          y: Math.floor(Math.random() * 300),
	          w: Math.floor(Math.random() * 300),
	          h: Math.floor(Math.random() * 300)
	        };
	      }
	      console.log(this.randomShapes.rects);
	      this.randomShapes.rects.push(genRect());
	    },
	    changePath: function changePath() {
	      var dots = 3 + Math.floor(Math.random() * 10);
	      var path = [];
	      for (var _i = 0; _i < dots; _i++) {
	        path.push(Math.floor(Math.random() * 600) + ',' + Math.floor(Math.random() * 600));
	      }
	      this.points = path.join(' ');
	    }
	  }

	};

/***/ },

/***/ 48:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["page"]
	  }, [_c('navbar', {
	    attrs: {
	      "back": "true",
	      "title": "pressure"
	    }
	  }), _c('scroller', {
	    staticClass: ["main"]
	  }, [_c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("this is simple pressure test ")]), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticClass: ["item-shape"]
	  }, _vm._l((_vm.circles), function(item) {
	    return _c('circle', {
	      key: item.r,
	      attrs: {
	        "cx": "300",
	        "cy": "200",
	        "fill": "none",
	        "r": item.r,
	        "stroke": item.color,
	        "strokeWidth": "2"
	      }
	    })
	  })), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("more than 100 cricles")])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticClass: ["item-shape2"]
	  }, _vm._l((_vm.randomShapes.rects), function(item) {
	    return _c('rect', {
	      key: item.x,
	      attrs: {
	        "fill": "none",
	        "x": item.x,
	        "y": item.y,
	        "width": item.w,
	        "height": item.h,
	        "stroke": "#222",
	        "strokeWidth": "2"
	      }
	    })
	  })), _c('div', {
	    staticClass: ["btn"],
	    on: {
	      "click": _vm.genRandomShapes
	    }
	  }, [_c('text', {
	    staticClass: ["btn-text1"]
	  }, [_vm._v("随机添加形状")])])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticClass: ["item-shape2"]
	  }, [_c('polygon', {
	    attrs: {
	      "points": _vm.points,
	      "fill": "#9b59b6"
	    }
	  })], 1), _c('div', {
	    staticClass: ["btn"],
	    on: {
	      "click": _vm.changePath
	    }
	  }, [_c('text', {
	    staticClass: ["btn-text1"]
	  }, [_vm._v("随机改变形状")])])], 1)])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });