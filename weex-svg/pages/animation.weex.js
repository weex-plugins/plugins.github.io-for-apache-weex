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
	__vue_styles__.push(__webpack_require__(16)
	)

	/* script */
	__vue_exports__ = __webpack_require__(17)

	/* template */
	var __vue_template__ = __webpack_require__(19)
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
	__vue_options__.__file = "/Users/ali-130257n/www/weex-svg/demos/pages/animation.vue"
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
/* 16 */
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
	  "gloabl": {
	    "overflow": "hidden",
	    "width": 140,
	    "height": 140,
	    "borderRadius": 50,
	    "border": "4px solid #8bc34a"
	  },
	  "btn-group": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "backgroundColor": "#ffffff",
	    "borderTopWidth": 1,
	    "borderTopColor": "rgba(0,0,0,0.15)"
	  },
	  "btn": {
	    "margin": 20,
	    "padding": 20,
	    "backgroundColor": "#1ba1e2",
	    "borderRadius": 5
	  },
	  "btn-white": {
	    "backgroundColor": "#ffffff",
	    "border": "2px solid #ddd"
	  },
	  "btn-text-white": {
	    "color": "#ffffff",
	    "textAlign": "center",
	    "cursor": "pointer",
	    "fontSize": 28
	  },
	  "btn-text-dark": {
	    "color": "#777777",
	    "textAlign": "center",
	    "cursor": "pointer",
	    "fontSize": 28
	  }
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _navbar = __webpack_require__(18);

	var _navbar2 = _interopRequireDefault(_navbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var animation = weex.requireModule('animation'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  components: {
	    navbar: _navbar2.default
	  },
	  methods: {
	    runEarth: function runEarth() {
	      var earth = this.$refs.earth;
	      earth.$el = earth;
	      console.log(earth);
	      animation.transition(earth, {
	        styles: {
	          transform: 'translate(250px,0)',
	          transformOrigin: 'center center'
	        },
	        duration: 1200,
	        timingFunction: 'linear'
	      });
	    },
	    runBicycle: function runBicycle() {},
	    runSakura: function runSakura() {},
	    stopSakura: function stopSakura() {}
	  }

	};

/***/ },
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
/* 19 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["page"]
	  }, [_c('navbar', {
	    attrs: {
	      "back": "true",
	      "title": "animation"
	    }
	  }), _c('scroller', {
	    staticClass: ["main"]
	  }, [_c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("The circle element is an SVG basic shape, used to create circles based on a center point and a radius")]), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    attrs: {
	      "width": "200",
	      "height": "200",
	      "x": "0px",
	      "y": "0px",
	      "viewBox": "0 0 100 100",
	      "enableBackground": "new 0 0 0 0"
	    }
	  }, [_c('path', {
	    attrs: {
	      "fill": "#3498db",
	      "d": "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",
	      "transform": "rotate(55.0802 50 50)"
	    }
	  }, [_c('animateTransform', {
	    attrs: {
	      "attributeName": "transform",
	      "attributeType": "XML",
	      "type": "rotate",
	      "dur": "1s",
	      "from": "0 50 50",
	      "to": "360 50 50",
	      "repeatCount": "indefinite"
	    }
	  })], 1)], 1), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("earth animation by  Kurt Gierke")])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    attrs: {
	      "viewBox": "0 0 30 30",
	      "enableBackground": "new 0 0 30 30",
	      "width": "120",
	      "height": "120"
	    }
	  }, [_c('rect', {
	    attrs: {
	      "fill": "#FBBA44",
	      "width": "15",
	      "height": "15"
	    }
	  }, [_c('animateTransform', {
	    attrs: {
	      "attributeName": "transform",
	      "attributeType": "XML",
	      "type": "translate",
	      "dur": "1.7s",
	      "values": "0,0;15,0;15,15;0,15;0,0;",
	      "repeatCount": "indefinite"
	    }
	  })], 1), _c('rect', {
	    attrs: {
	      "x": "15",
	      "fill": "#E84150",
	      "width": "15",
	      "height": "15"
	    }
	  }, [_c('animateTransform', {
	    attrs: {
	      "attributeName": "transform",
	      "attributeType": "XML",
	      "type": "translate",
	      "dur": "1.7s",
	      "values": "0,0;0,15;-15,15;-15,0;0,0;",
	      "repeatCount": "indefinite"
	    }
	  })], 1), _c('rect', {
	    attrs: {
	      "x": "15",
	      "y": "15",
	      "fill": "#62B87B",
	      "width": "15",
	      "height": "15"
	    }
	  }, [_c('animateTransform', {
	    attrs: {
	      "attributeName": "transform",
	      "attributeType": "XML",
	      "type": "translate",
	      "dur": "1.7s",
	      "values": "0,0;-15,0;-15,-15;0,-15;0,0;",
	      "repeatCount": "indefinite"
	    }
	  })], 1), _c('rect', {
	    attrs: {
	      "y": "15",
	      "fill": "#2F6FB6",
	      "width": "15",
	      "height": "15"
	    }
	  }, [_c('animateTransform', {
	    attrs: {
	      "attributeName": "transform",
	      "attributeType": "XML",
	      "type": "translate",
	      "dur": "1.7s",
	      "values": "0,0;0,-15;15,-15;15,0;0,0;",
	      "repeatCount": "indefinite"
	    }
	  })], 1)], 1), _c('text', {
	    staticClass: ["desc"]
	  })], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    attrs: {
	      "width": "640",
	      "height": "360",
	      "viewBox": "0 0 1920 1080"
	    }
	  }, [_c('g', {
	    attrs: {
	      "id": "Layer_12 yellow-back-fig",
	      "dataName": "Layer 12"
	    }
	  }, [_c('path', {
	    attrs: {
	      "fill": "#ffc541",
	      "d": "M600.87,872H156a4,4,0,0,0-3.78,4.19h0a4,4,0,0,0,3.78,4.19H600.87a4,4,0,0,0,3.78-4.19h0A4,4,0,0,0,600.87,872Z"
	    }
	  }), _c('rect', {
	    attrs: {
	      "fill": "#ffc541",
	      "x": "680.91",
	      "y": "871.98",
	      "width": "513.38",
	      "height": "8.39",
	      "rx": "4.19",
	      "ry": "4.19"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#ffc541",
	      "d": "M1480,876.17h0c0,2.32,2.37,4.19,5.3,4.19h350.61c2.93,0,5.3-1.88,5.3-4.19h0c0-2.32-2.37-4.19-5.3-4.19H1485.26C1482.33,872,1480,873.86,1480,876.17Z"
	    }
	  }), _c('rect', {
	    attrs: {
	      "fill": "#ffc541",
	      "x": "492.21",
	      "y": "920.64",
	      "width": "249.8",
	      "height": "8.39",
	      "rx": "4.19",
	      "ry": "4.19"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#ffc541",
	      "d": "M1549.14,924.84h0a4.19,4.19,0,0,0-4.19-4.19H1067.46a14.66,14.66,0,0,1,.35,3.21v1A4.19,4.19,0,0,0,1072,929h472.94A4.19,4.19,0,0,0,1549.14,924.84Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#ffc541",
	      "d": "M865.5,924.84h0a4.19,4.19,0,0,0,4.19,4.19h82.37a12.28,12.28,0,0,1-.19-2v-2.17a4.19,4.19,0,0,0-4.19-4.19h-78A4.19,4.19,0,0,0,865.5,924.84Z"
	    }
	  }), _c('rect', {
	    attrs: {
	      "fill": "#ffc541",
	      "x": "915.6",
	      "y": "981.47",
	      "width": "54.72",
	      "height": "8.39",
	      "rx": "4.19",
	      "ry": "4.19"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#ffc541",
	      "d": "M730.33,985.67h0c0,2.32,4.23,4.19,9.44,4.19h104.3c5.22,0,9.44-1.88,9.44-4.19h0c0-2.32-4.23-4.19-9.44-4.19H739.78C734.56,981.47,730.33,983.35,730.33,985.67Z"
	    }
	  }), _c('rect', {
	    attrs: {
	      "fill": "#ffc541",
	      "x": "997.06",
	      "y": "981.47",
	      "width": "78.11",
	      "height": "8.39",
	      "rx": "4.19",
	      "ry": "4.19"
	    }
	  }), _c('g', {
	    attrs: {
	      "id": "round-conf"
	    }
	  }, [_c('path', {
	    attrs: {
	      "fill": "#ffc541",
	      "d": "M536.41,155.14a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,536.41,155.14Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,536.41,183.81Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#ffc541",
	      "d": "M1345.09,82.44a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1345.09,82.44Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1345.09,111.12Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#ffc541",
	      "d": "M70.12,363A17.77,17.77,0,1,0,87.89,380.8,17.77,17.77,0,0,0,70.12,363Zm0,28.68A10.9,10.9,0,1,1,81,380.8,10.9,10.9,0,0,1,70.12,391.7Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#ffc541",
	      "d": "M170.47,751.82a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,170.47,751.82Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,170.47,780.5Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#ffc541",
	      "d": "M1457.34,762.73a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1457.34,762.73Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1457.34,791.4Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#ffc541",
	      "d": "M1829.15,407.49a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1829.15,407.49Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1829.15,436.17Z"
	    }
	  })], 1)], 1), _c('g', {
	    attrs: {
	      "id": "fortyfour",
	      "dataName": "Layer 2"
	    }
	  }, [_c('g', {
	    staticClass: ["four", "a"]
	  }, [_c('rect', {
	    attrs: {
	      "fill": "#4e4066",
	      "x": "233.74",
	      "y": "391.14",
	      "width": "120.71",
	      "height": "466.29",
	      "rx": "57.1",
	      "ry": "57.1",
	      "transform": "translate(918.39 330.19) rotate(90)"
	    }
	  }), _c('rect', {
	    attrs: {
	      "fill": "#6f5b92",
	      "x": "333.83",
	      "y": "475.1",
	      "width": "120.71",
	      "height": "396.88",
	      "rx": "60.36",
	      "ry": "60.36"
	    }
	  }), _c('rect', {
	    attrs: {
	      "fill": "#6f5b92",
	      "x": "197.13",
	      "y": "122.89",
	      "width": "120.71",
	      "height": "604.75",
	      "rx": "60.36",
	      "ry": "60.36",
	      "transform": "translate(290.49 -70.78) rotate(35)"
	    }
	  })], 1), _c('g', {
	    staticClass: ["four", "b"]
	  }, [_c('rect', {
	    attrs: {
	      "fill": "#4e4066",
	      "x": "1558.84",
	      "y": "391.91",
	      "width": "120.71",
	      "height": "466.29",
	      "rx": "57.1",
	      "ry": "57.1",
	      "transform": "translate(2244.26 -994.14) rotate(90)"
	    }
	  }), _c('rect', {
	    attrs: {
	      "fill": "#6f5b92",
	      "x": "1658.92",
	      "y": "475.87",
	      "width": "120.71",
	      "height": "396.88",
	      "rx": "60.36",
	      "ry": "60.36"
	    }
	  }), _c('rect', {
	    attrs: {
	      "fill": "#6f5b92",
	      "x": "1522.22",
	      "y": "123.66",
	      "width": "120.71",
	      "height": "604.75",
	      "rx": "60.36",
	      "ry": "60.36",
	      "transform": "translate(530.57 -830.68) rotate(35)"
	    }
	  })], 1), _c('path', {
	    attrs: {
	      "fill": "#6f5b92",
	      "id": "ou",
	      "d": "M956.54,168.2c-194.34,0-351.89,157.55-351.89,351.89S762.19,872,956.54,872s351.89-157.55,351.89-351.89S1150.88,168.2,956.54,168.2Zm0,584.49c-128.46,0-232.6-104.14-232.6-232.6s104.14-232.6,232.6-232.6,232.6,104.14,232.6,232.6S1085,752.69,956.54,752.69Z"
	    }
	  })], 1), _c('g', {
	    attrs: {
	      "id": "umbrella",
	      "dataName": "Layer 3"
	    }
	  }, [_c('g', [_c('circle', {
	    attrs: {
	      "fill": "#f78d5e",
	      "cx": "1187.53",
	      "cy": "240.3",
	      "r": "7.66",
	      "transform": "translate(236.36 990.8) rotate(-49.71)"
	    }
	  }), _c('g', [_c('path', {
	    attrs: {
	      "fill": "#fa976c",
	      "d": "M1219.56,359.67l55,100.52c32.7-48.48-6.87-142.43-91.75-214.38-84.41-71.55-183-95.33-225.81-56l114.21,44.14Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#b65c32",
	      "d": "M1182.79,245.81c-84.41-71.55-183-95.33-225.81-56l114.21,44.14Z"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "fill": "#b65c32",
	      "points": "1182.79 245.81 1071.19 233.91 1219.56 359.67 1182.79 245.81"
	    }
	  })], 1), _c('polygon', {
	    attrs: {
	      "fill": "#b65c32",
	      "points": "1180.91 409.02 1274.54 460.19 1219.56 359.67 1071.19 233.91 956.98 189.76 1021.95 274.29 1180.91 409.02"
	    }
	  }), _c('g', [_c('rect', {
	    attrs: {
	      "fill": "#f78d5e",
	      "x": "997.45",
	      "y": "358.35",
	      "width": "175.58",
	      "height": "5.1",
	      "transform": "translate(108.21 955.38) rotate(-49.71)"
	    }
	  }), _c('rect', {
	    attrs: {
	      "fill": "#f78d5e",
	      "x": "1028.09",
	      "y": "399.36",
	      "width": "21.46",
	      "height": "32.27",
	      "rx": "10.73",
	      "ry": "10.73",
	      "transform": "translate(515.04 -573.16) rotate(40.29)"
	    }
	  })], 1)], 1)], 1), _c('g', {
	    attrs: {
	      "id": "pillow",
	      "dataName": "Layer 4"
	    }
	  }, [_c('path', {
	    attrs: {
	      "fill": "#ffc541",
	      "d": "M754,627.07c7,.54,12.92-2.82,13.35-7.59s-4.95-9.24-12-9.87a18.55,18.55,0,0,0-2.17,0l-74.9-81.64c0-.1,0-.19,0-.29,0-7.09-4-12.83-8.8-12.81s-8.75,5.77-8.73,12.87c0,0,0,.09,0,.13l-50.21,46.07h-.09c-7.06-.63-13.14,2.77-13.57,7.59s4.87,9.16,11.85,9.84l76.08,82.92s0,0,0,.06c0,7.09,4,12.83,8.8,12.81s8.65-5.66,8.71-12.65Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#f4b73b",
	      "d": "M669.46,514.82c-4.77-.83-8.75,5.77-8.73,12.87,0,0,0,.09,0,.13l-50.21,46.07h-.09c-7.06-.63-13.14,2.77-13.57,7.59s4.87,9.16,11.85,9.84l76.08,82.92s0,0,0,.06c0,7.09,4,12.83,8.8,12.81s8.65-5.66,8.71-12.65C570.55,573,702.07,520.47,669.46,514.82Z"
	    }
	  })], 1), _c('g', {
	    attrs: {
	      "id": "cup",
	      "dataName": "Layer 7"
	    }
	  }, [_c('polygon', {
	    attrs: {
	      "fill": "#ffc541",
	      "points": "1173.69 748.21 1140.52 715.42 1195.79 647.35 1241.13 692.16 1173.69 748.21"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "fill": "#b65c32",
	      "points": "1173.69 748.21 1140.52 715.42 1143.93 711.27 1177.81 744.75 1173.69 748.21"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "fill": "#fa976c",
	      "points": "1194.68 731.46 1157.04 694.24 1183.8 661.7 1226.91 704.32 1194.68 731.46"
	    }
	  }), _c('g', [_c('path', {
	    attrs: {
	      "fill": "#b65c32",
	      "d": "M1176.32,667.78h0a4.19,4.19,0,0,1,4.19,4.19v33.54a0,0,0,0,1,0,0h-8.38a0,0,0,0,1,0,0V672a4.19,4.19,0,0,1,4.19-4.19Z",
	      "transform": "translate(822.53 -628.67) rotate(44.67)"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#b65c32",
	      "d": "M1172.73,709.7l23.58-23.85a4.19,4.19,0,0,1,5.92,0h0a4.19,4.19,0,0,1,0,5.92l-23.58,23.85Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#b65c32",
	      "d": "M1185.11,722.09l23.58-23.85a4.19,4.19,0,0,1,5.92,0h0a4.19,4.19,0,0,1,0,5.92L1191.06,728Z"
	    }
	  })], 1), _c('path', {
	    attrs: {
	      "fill": "#fa976c",
	      "d": "M1197.85,660.5h45.69a5.7,5.7,0,0,1,5.7,5.7v8.32a0,0,0,0,1,0,0h-57.09a0,0,0,0,1,0,0v-8.32A5.7,5.7,0,0,1,1197.85,660.5Z",
	      "transform": "translate(829.53 -667.66) rotate(45)"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#b65c32",
	      "d": "M1191.49,664.74h53.94a5.25,5.25,0,0,1,5.25,5.25v4.79a0,0,0,0,1,0,0h-64.44a0,0,0,0,1,0,0V670a5.25,5.25,0,0,1,5.25-5.25Z",
	      "transform": "translate(822.83 -663.17) rotate(44.67)"
	    }
	  })], 1), _c('g', {
	    attrs: {
	      "id": "clock",
	      "dataName": "Layer 8"
	    }
	  }, [_c('circle', {
	    attrs: {
	      "fill": "#fa976c",
	      "cx": "847.7",
	      "cy": "247.59",
	      "r": "74.66",
	      "transform": "translate(-32.91 314.05) rotate(-20.6)"
	    }
	  }), _c('circle', {
	    attrs: {
	      "fill": "#ffc541",
	      "cx": "847.7",
	      "cy": "247.59",
	      "r": "63.44",
	      "transform": "translate(-32.91 314.05) rotate(-20.6)"
	    }
	  }), _c('rect', {
	    attrs: {
	      "fill": "#6f5b92",
	      "x": "845",
	      "y": "189.5",
	      "width": "6.04",
	      "height": "58",
	      "rx": "3.02",
	      "ry": "3.02"
	    }
	  }), _c('rect', {
	    attrs: {
	      "fill": "#6f5b92",
	      "x": "845",
	      "y": "209.5",
	      "width": "6.04",
	      "height": "38",
	      "rx": "3.02",
	      "ry": "3.02",
	      "transform": "translate(1611.22 -230.4) rotate(130.4)"
	    }
	  }), _c('circle', {
	    attrs: {
	      "fill": "#6f5b92",
	      "cx": "847.7",
	      "cy": "247.59",
	      "transform": "translate(-32.91 314.05) rotate(-20.6)",
	      "r": "3"
	    }
	  })], 1), _c('g', {
	    attrs: {
	      "id": "box",
	      "dataName": "Layer 9"
	    }
	  }, [_c('g', {
	    attrs: {
	      "id": "box-top"
	    }
	  }, [_c('polygon', {
	    attrs: {
	      "fill": "#b65c32",
	      "points": "569.71 382.28 653.74 329.39 747.13 320.1 679.2 369.85 569.71 382.28"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "fill": "#fa976c",
	      "points": "691.95 367.2 570.87 392.34 565.32 383.35 687.8 357.45 691.95 367.2"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "fill": "#fa976c",
	      "points": "661.54 337.48 570.87 392.34 562.42 378.92 652.25 322.38 658.12 321.34 661.54 337.48"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "fill": "#b65c32",
	      "points": "661.54 337.48 570.87 392.34 562.42 378.92 652.25 322.38 658.12 321.34 661.54 337.48"
	    }
	  }), _c('polygon', {
	    staticClass: ["cls-5"],
	    attrs: {
	      "points": "747.13 320.1 661.54 337.48 652.25 322.38 738.4 307.1 747.13 320.1"
	    }
	  })], 1), _c('path', {
	    attrs: {
	      "fill": "#fa976c",
	      "d": "M588.28,420.26s3.44,5.2,5.19,8l43.1,68.48,158.81-100-43.1-68.48q-2.63-4.17-5.47-8Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#b65c32",
	      "d": "M588.28,420.26s3.44,5.2,5.19,8l43.1,68.48,158.81-100-43.1-68.48q-2.63-4.17-5.47-8Z"
	    }
	  }), _c('rect', {
	    attrs: {
	      "fill": "#fa976c",
	      "x": "693.73",
	      "y": "335.51",
	      "width": "83.99",
	      "height": "90.58",
	      "transform": "translate(-89.78 450.43) rotate(-32.19)"
	    }
	  })], 1), _c('g', {
	    attrs: {
	      "id": "rucksack",
	      "dataName": "Layer 6"
	    }
	  }, [_c('g', {
	    attrs: {
	      "id": "stripe"
	    }
	  }, [_c('path', {
	    attrs: {
	      "fill": "#9b462c",
	      "d": "M1200.32,473.91h0a13.74,13.74,0,0,0-18.41,7.44l-55,129.86a14.82,14.82,0,0,0,7.13,19.21h0a13.74,13.74,0,0,0,18.41-7.44l55-129.86A14.82,14.82,0,0,0,1200.32,473.91Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#aa512e",
	      "d": "M1202.18,606.34h0a14,14,0,0,0-16.18-11.8l-48.83,9c-7.59,1.4-12.66,9-11.31,16.89h0a14,14,0,0,0,16.18,11.8l48.83-9C1198.46,621.82,1203.53,614.26,1202.18,606.34Z"
	    }
	  })], 1), _c('path', {
	    attrs: {
	      "fill": "#b65c32",
	      "d": "M1300.86,603l-122.93,22.74-15.44-90.91c-5.75-33.86,15.89-66.17,48.34-72.18l11.58-2.08c32.45-6,57.26,17.66,63,51.51Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#ffc541",
	      "d": "M1307,601.91l-112.32,20.78-15.9-93.61c-5.5-32.36,15.19-63.25,46.2-69h0c31-5.74,60.62,15.85,66.12,48.21Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#b65c32",
	      "d": "M1296.76,603.8,1215,618.92l-4.89-28.77c-2.11-12.42,5.83-24.27,17.73-26.47l38.67-7.15c11.9-2.2,23.26,6.08,25.37,18.5Z"
	    }
	  }), _c('path', {
	    staticClass: ["cls-5"],
	    attrs: {
	      "d": "M1296.76,603.8l-73.41,13.58-4.92-29c-2-11.62,5.45-22.72,16.6-24.78l33.07-6.12c11.14-2.06,21.77,5.69,23.75,17.32Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#f78d5e",
	      "d": "M1231.77,469.69l-13.42,2.48a10.25,10.25,0,0,0-8,11.92l2.38,14a9.9,9.9,0,0,0,11.42,8.33l13.42-2.48a10.25,10.25,0,0,0,8-11.92l-2.38-14A9.9,9.9,0,0,0,1231.77,469.69Zm7.17,20.84a6.39,6.39,0,0,1-5,7.43l-8.36,1.55a6.17,6.17,0,0,1-7.12-5.19l-1.48-8.73a6.39,6.39,0,0,1,5-7.43l8.36-1.55a6.17,6.17,0,0,1,7.12,5.19Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#7d6aa5",
	      "d": "M1233.74,471.13l-13.42,2.48a10.25,10.25,0,0,0-8,11.92l2.38,14a9.9,9.9,0,0,0,11.42,8.33l13.42-2.48a10.25,10.25,0,0,0,8-11.92l-2.38-14A9.9,9.9,0,0,0,1233.74,471.13Zm7.17,20.84a6.39,6.39,0,0,1-5,7.43l-8.36,1.55a6.17,6.17,0,0,1-7.12-5.19L1219,487a6.39,6.39,0,0,1,5-7.43l8.36-1.55a6.17,6.17,0,0,1,7.12,5.19Z"
	    }
	  })], 1), _c('g', {
	    attrs: {
	      "id": "bike",
	      "dataName": "Layer 5"
	    }
	  }, [_c('path', {
	    attrs: {
	      "fill": "#b65c32",
	      "d": "M1139.82,780.44a76.59,76.59,0,1,0-57.9,91.53A76.59,76.59,0,0,0,1139.82,780.44Zm-28.12,6.33a47.59,47.59,0,0,1,.83,15.8c-30.14-6.28-47.68-21.65-54.39-52.52A47.73,47.73,0,0,1,1111.69,786.77Zm-70.46-30.9c10.35,26.88,10.14,50.4-13.73,70.77a47.67,47.67,0,0,1,13.73-70.77Zm34.35,88a47.55,47.55,0,0,1-34.94-5.62c16.8-20.36,41.71-25.94,67.09-19.46A47.66,47.66,0,0,1,1075.58,843.85Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#b65c32",
	      "d": "M864.89,789.69a76.59,76.59,0,1,0-66.13,85.78A76.59,76.59,0,0,0,864.89,789.69Zm-28.59,3.7a47.59,47.59,0,0,1-.64,15.81c-29.43-9-45.47-26-49.3-57.33A47.73,47.73,0,0,1,836.3,793.39ZM769,756.1c7.82,27.72,5.43,51.12-20.22,69.2A47.67,47.67,0,0,1,769,756.1Zm26.06,90.78a47.55,47.55,0,0,1-34.27-8.83c18.61-18.72,43.93-22,68.6-13.16A47.66,47.66,0,0,1,795.06,846.88Z"
	    }
	  }), _c('g', [_c('rect', {
	    attrs: {
	      "fill": "#ffc541",
	      "x": "871.39",
	      "y": "693.37",
	      "width": "12.87",
	      "height": "53.21",
	      "transform": "translate(-165.97 273.38) rotate(-16.19)"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#fa976c",
	      "d": "M813.93,679.35c-3.72-5.2,2.24-18.5,9.16-16.13,33.43,11.46,73.85,10.45,73.85,10.45,8.84.15,14.44,10.34,7.27,15.48-14.36,8.79-33.13,17-56.35,9.76C830.17,693.41,819.83,687.6,813.93,679.35Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#b65c32",
	      "d": "M813.93,679.35c-3.72-5.2,2.24-18.5,9.16-16.13,33.43,11.46,73.85,10.45,73.85,10.45,8.84.15,14.44,10.34,7.27,15.48-14.36,8.79-33.13,17-56.35,9.76C830.17,693.41,819.83,687.6,813.93,679.35Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#fa976c",
	      "d": "M817.15,680.06c-3.59-5,1.69-16.51,8.37-14.22,32.3,11.09,71.41,7.83,71.41,7.83,8.54.14,17.45,9.94,7.43,15.88-13.87,8.51-32,16.44-54.44,9.44C832.84,693.67,822.85,688,817.15,680.06Z"
	    }
	  })], 1), _c('g', [_c('circle', {
	    attrs: {
	      "fill": "#f4b73b",
	      "cx": "1022.66",
	      "cy": "599.55",
	      "r": "11.57",
	      "transform": "translate(-4.86 8.38) rotate(-0.47)"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#ffc541",
	      "d": "M1069.76,792.37l-34.89-96.74,1.93-.8-1.71-4.15-1.74.72-13.26-36.76,1.27-.42-2.25-6.76,5.94-2-2.57-7.72-9.7,3.22c-11.55-22.55,2-36.33,15-41.86l-5.57-8.81c-23,10.29-29.61,28.75-19.53,54l-9.38,3.12,2.56,7.72,5.47-1.82,2.25,6.76,2.36-.78,13.62,37.76-2.35,1,1.71,4.15,2.16-.89,34.65,96.09a7.47,7.47,0,0,0,9.56,4.49h0A7.47,7.47,0,0,0,1069.76,792.37Z"
	    }
	  }), _c('circle', {
	    attrs: {
	      "fill": "#f9c358",
	      "cx": "1027.9",
	      "cy": "587.94",
	      "r": "12.99",
	      "transform": "translate(-4.77 8.42) rotate(-0.47)"
	    }
	  })], 1), _c('path', {
	    attrs: {
	      "fill": "#fa976c",
	      "d": "M1021.29,654l-17.73,6.15,1.72,5.59-31.41,82.36c-19.35,32.53-66.3,36.72-75.56,16.68l-7.09-21.5L879,747.1l3.28,10.09-94.65,33.95c-11.49,2.29-11.85,15.79-2.61,17.84,0,0,39.11,3.66,103,9.5a92.75,92.75,0,0,0,40.89-5.29c44.32-16.56,57.73-50.67,57.73-50.67l26.82-67.26a1.37,1.37,0,0,1,2.53,0l1.42,3.33,17.75-7.62Z"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "#b65c32",
	      "d": "M1021.29,654l-17.73,6.15,1.72,5.59-31.41,82.36c-19.35,32.53-66.3,36.72-75.56,16.68l-7.09-21.5L879,747.1l3.28,10.09-94.65,33.95c-11.49,2.29-11.85,15.79-2.61,17.84,0,0,39.11,3.66,103,9.5a92.75,92.75,0,0,0,40.89-5.29c44.32-16.56,57.73-50.67,57.73-50.67l26.82-67.26a1.37,1.37,0,0,1,2.53,0l1.42,3.33,17.75-7.62Z"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["btn-group"]
	  }, [_c('div', {
	    staticClass: ["btn"]
	  }, [_c('text', {
	    staticClass: ["btn-text-white"],
	    on: {
	      "click": _vm.runEarth
	    }
	  }, [_vm._v("Play Animation")])]), _c('div', {
	    staticClass: ["btn"]
	  }, [_c('text', {
	    staticClass: ["btn-text-white"],
	    on: {
	      "click": _vm.runEarth
	    }
	  }, [_vm._v("Start Animation")])])]), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("\"r\" defines the radius of the circle. ")])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticStyle: {
	      width: "300px",
	      height: "300px"
	    },
	    attrs: {
	      "fill": "#ff3377",
	      "viewBox": "0 0 1000 1000"
	    }
	  }, [_c('g', {
	    staticClass: ["rose"]
	  }, [_c('circle', {
	    attrs: {
	      "cx": "500",
	      "cy": "500",
	      "r": "225"
	    }
	  }), _c('circle', {
	    attrs: {
	      "cx": "500",
	      "cy": "500",
	      "r": "225"
	    }
	  }), _c('circle', {
	    attrs: {
	      "cx": "500",
	      "cy": "500",
	      "r": "225"
	    }
	  }), _c('circle', {
	    attrs: {
	      "cx": "500",
	      "cy": "500",
	      "r": "225"
	    }
	  }), _c('circle', {
	    attrs: {
	      "cx": "500",
	      "cy": "500",
	      "r": "225"
	    }
	  }), _c('circle', {
	    attrs: {
	      "cx": "500",
	      "cy": "500",
	      "r": "225"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["btn-group"]
	  }, [_c('div', {
	    staticClass: ["btn"]
	  }, [_c('text', {
	    staticClass: ["btn-text-white"],
	    on: {
	      "click": _vm.runEarth
	    }
	  }, [_vm._v("Expand Animation")])]), _c('div', {
	    staticClass: ["btn", "btn-white"]
	  }, [_c('text', {
	    staticClass: ["btn-text-dark"],
	    on: {
	      "click": _vm.stopSakura
	    }
	  }, [_vm._v("Shrink Animation")])])]), _c('text', {
	    staticClass: ["desc"]
	  }, [_vm._v("use fill and stroke to set the color and outline of the component")])], 1)])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);