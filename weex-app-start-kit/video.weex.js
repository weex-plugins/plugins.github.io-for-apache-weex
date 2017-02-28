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

	
	/* styles */
	__webpack_require__(131)

	var Component = __webpack_require__(5)(
	  /* script */
	  __webpack_require__(133),
	  /* template */
	  __webpack_require__(149),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/ali-130257n/www/weex-app-start-kit/src/video.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] video.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e25e18fc", Component.options)
	  } else {
	    hotAPI.reload("data-v-e25e18fc", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(28)

	var Component = __webpack_require__(5)(
	  /* script */
	  __webpack_require__(30),
	  /* template */
	  __webpack_require__(31),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/ali-130257n/www/weex-app-start-kit/src/include/navbar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-03f0b540", Component.options)
	  } else {
	    hotAPI.reload("data-v-03f0b540", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-03f0b540!./../../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navbar.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-03f0b540!./../../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navbar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n.navbar{\n  z-index: 200;\n  position: fixed;\n  left:0;\n  right: 0;\n  top:0;\n  display:flex;\n  flex-direction: row;\n  height: 88px;\n  background-color: #fff;\n  align-items: center;\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n  border-bottom-color: #ddd;\n}\n.btn-icon-left{\n  z-index:10;\n  flex-direction: row;\n  align-items: center;\n  width: 180px;\n}\n.btn-arrow-left{\n  width: 60px;\n  height: 60px;\n  margin-left: 10px;\n}\n.btn-text{\n  color: #0f89f5;\n}\n.title{\n  position: absolute;\n  left:0;\n  right:0;\n  top:0;\n  height: 88px;\n  line-height: 88px;\n  font-size: 34px;\n  text-align: center;\n}\n", ""]);

	// exports


/***/ },
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "navbar"
	  }, [(_vm.leftCorner) ? _c('div', {
	    staticClass: "btn-icon-left",
	    on: {
	      "click": _vm.goHome
	    }
	  }, [_c('image', {
	    staticClass: "btn-arrow-left",
	    attrs: {
	      "src": _vm.leftCorner.src
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "btn-text"
	  }, [_vm._v(_vm._s(_vm.leftCorner.text))])]) : _vm._e(), _vm._v(" "), (_vm.back) ? _c('div', {
	    staticClass: "btn-icon-left",
	    on: {
	      "click": _vm.goHome
	    }
	  }, [_c('image', {
	    staticClass: "btn-arrow-left",
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vued9c8e7e738ff94abee23eb69d7f1401e9.png"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "btn-text"
	  }, [_vm._v("返回")])]) : _vm._e(), _vm._v(" "), (_vm.rightCorner) ? _c('div', {
	    staticClass: "btn-icon-left",
	    on: {
	      "click": _vm.goHome
	    }
	  }, [_c('image', {
	    staticClass: "btn-arrow-left",
	    attrs: {
	      "src": "rightCorner.src"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "btn-text"
	  }, [_vm._v(_vm._s(_vm.rightCorner.text))])]) : _vm._e(), _vm._v(" "), _c('text', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-03f0b540", module.exports)
	  }
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(33)

	var Component = __webpack_require__(5)(
	  /* script */
	  __webpack_require__(35),
	  /* template */
	  __webpack_require__(37),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/ali-130257n/www/weex-app-start-kit/src/include/footer.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] footer.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5f55816b", Component.options)
	  } else {
	    hotAPI.reload("data-v-5f55816b", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5f55816b!./../../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./footer.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5f55816b!./../../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./footer.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n.footer{\n  flex-direction: row;\n  align-items: center;\n  z-index: 200;\n  position:fixed;\n  bottom: 0;\n  left:0;\n  right:0;\n  height: 100px;\n  line-height: 100px;\n  background-color: #fff;\n  border-top-width: 1;\n  border-top-style: solid;\n  border-top-color: rgba(0,0,0,.15);\n}\n.footer-item{\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n}\n.footer-item-icon{\n  width: 54px;\n  height: 54px;\n}\n.btn-sm-text{\n  color: #777;\n  font-size: 20px;\n}\n.active{\n  color: #1ba1e2;\n}\n", ""]);

	// exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _helper = __webpack_require__(36);

	var _helper2 = _interopRequireDefault(_helper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navigator = weex.requireModule('navigator'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    active: {
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      type: '',
	      items: [{
	        name: 'Home',
	        url: 'home.js',
	        icon: 'http://img1.vued.vanthink.cn/vued40a1db1fb50417e72fc59c3535de9d1f.png'
	      }, {
	        name: 'Shop',
	        url: 'shop.js',
	        icon: 'http://img1.vued.vanthink.cn/vuede3edd4e57e450d00b3fa0e0fd82bc6af.png'
	      }, {
	        name: 'Video',
	        url: 'video.js',
	        icon: 'http://img1.vued.vanthink.cn/vueda026977b63cd85ebbcc0309a2f592082.png'
	      }, {
	        name: 'Profile',
	        url: 'profile.js',
	        icon: 'http://img1.vued.vanthink.cn/vued78336017bc3e794059a4fea0fe1450f9.png'
	      }]
	    };
	  },


	  methods: {
	    changeUrl: function changeUrl(index) {
	      console.log(this.items[index].url);
	      var url = _helper2.default.setBundleUrl(this.items[index].url, weex);
	      console.log(url);
	      navigator.push({
	        url: url
	      });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// helper.js 2016
	exports.default = {
	  setBundleUrl: function setBundleUrl(jsFile, weex) {
	    var bundleUrl = weex.config.bundleUrl;
	    var host = '';
	    var path = '';
	    var nativeBase;
	    var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
	    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	    if (isAndroidAssets) {
	      nativeBase = 'file://assets/';
	    } else if (isiOSAssets) {
	      // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	      // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	      nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    } else {
	      var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	      var matchFirstPath = /\/\/.+\/([^\/]+?)\//.exec(bundleUrl);
	      if (matches && matches.length >= 2) {
	        host = matches[1];
	      }
	      if (matchFirstPath && matchFirstPath.length >= 2) {
	        path = matchFirstPath[1];
	      }
	      nativeBase = 'http://' + host + '/';
	    }
	    var h5Base = './weex.html?page=';
	    // in Native
	    var base = nativeBase;
	    if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
	      // check if in weexpack project
	      if (path === 'web') {
	        base = h5Base + '/dist/';
	      } else {
	        base = h5Base;
	      }
	    } else {
	      base = nativeBase + path + '/';
	    }

	    var newUrl = base + jsFile;
	    return newUrl;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "footer"
	  }, _vm._l((_vm.items), function(item, index) {
	    return _c('div', {
	      key: item.url,
	      staticClass: "footer-item",
	      on: {
	        "click": function($event) {
	          _vm.changeUrl(index)
	        }
	      }
	    }, [_c('image', {
	      staticClass: "footer-item-icon",
	      attrs: {
	        "src": item.icon
	      }
	    }), _vm._v(" "), (_vm.active != index) ? _c('text', {
	      staticClass: "btn-sm-text"
	    }, [_vm._v(_vm._s(item.name))]) : _vm._e(), _vm._v(" "), (_vm.active == index) ? _c('text', {
	      staticClass: "btn-sm-text active"
	    }, [_vm._v(_vm._s(item.name))]) : _vm._e()])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5f55816b", module.exports)
	  }
	}

/***/ },
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(132);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e25e18fc!./../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./video.vue?entry=true", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e25e18fc!./../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./video.vue?entry=true");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n.container{\n  position: relative;\n  flex:1;\n  flex-direction: column;\n  background-color: #fff;\n  padding-top: 88px;\n}\n.map{\n  flex: 1;\n  position: relative;\n  min-height: 400;\n  border-bottom-width: 10;\n  border-bottom-color: #fff;\n}\n.profile-bannar{\n  height: 380px;\n  align-items: center;\n  justify-content: center;\n  background-image: linear-gradient(to left,#00c6ff , #0072ff);\n}\n.profile-avatar{\n  width: 200px;\n  height: 200px;\n  margin-bottom: 20px;\n}\n.profile-username{\n  font-size: 40px;\n  font-weight: 100;\n  color: #fff;\n}\n.profile-groups{\n  margin-top: 40px;\n  padding-top: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: #fff;\n  border-top:2px solid rgba(0,0,0,.1);\n  border-bottom: 2px solid rgba(0,0,0,.3);\n}\n.profile-groups-item{\n  height: 90px;\n  justify-content: center;\n  border-bottom: 2px solid rgba(0,0,0,.1);\n  color: #555;\n}\n", ""]);

	// exports


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _navbar = __webpack_require__(27);

	var _navbar2 = _interopRequireDefault(_navbar);

	var _footer = __webpack_require__(32);

	var _footer2 = _interopRequireDefault(_footer);

	var _h = __webpack_require__(134);

	var _h2 = _interopRequireDefault(_h);

	var _video = __webpack_require__(139);

	var _video2 = _interopRequireDefault(_video);

	var _videoList = __webpack_require__(144);

	var _videoList2 = _interopRequireDefault(_videoList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  components: {
	    'navbar': _navbar2.default,
	    'footer': _footer2.default,
	    'jp-video': _video2.default,
	    'h3': _h2.default,
	    'video-list': _videoList2.default
	  },
	  data: function data() {
	    return {
	      user: {
	        avatar: 'http://img1.vued.vanthink.cn/vued4eff4743ed47b7d8add8e7969a5d16cd.png',
	        username: 'Tom'
	      },
	      recList: [{
	        cover: 'http://img1.vued.vanthink.cn/vued894e9f0de251af913f115b6a494e1650.png',
	        title: 'Kung Fu Hustle',
	        comments: '15k',
	        views: '224K',
	        upload_date: '2004-1-26',
	        producer: {
	          avatar: 'http://img1.vued.vanthink.cn/vued058dd8bc2314a8bdeee12de7749a859a.png',
	          username: 'Coloumn Pictures'
	        }
	      }, {
	        cover: 'http://img1.vued.vanthink.cn/vued2591e41f36bafb15ade52def89a245d3.png',
	        title: 'Captain America 3',
	        comments: '28k',
	        views: '445K',
	        upload_date: '2016-5-24',
	        producer: {
	          avatar: 'http://img1.vued.vanthink.cn/vued9bbaa9de16747dda754b75bf96e34b83.png',
	          username: 'Marvel Studio'
	        }
	      }]
	    };
	  },

	  methods: {}
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

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(135)

	var Component = __webpack_require__(5)(
	  /* script */
	  __webpack_require__(137),
	  /* template */
	  __webpack_require__(138),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/ali-130257n/www/weex-app-start-kit/src/include/h3.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] h3.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-be7846ca", Component.options)
	  } else {
	    hotAPI.reload("data-v-be7846ca", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(136);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-be7846ca!./../../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./h3.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-be7846ca!./../../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./h3.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n.h3{\n  margin: 20px;\n  padding-bottom: 10px;\n}\n.h3-text{\n  font-size: 36px;\n  color: #222;\n}\n", ""]);

	// exports


/***/ },
/* 137 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    contents: {
	      default: 'h3',
	      type: String
	    }
	  }

	};
	module.exports = exports['default'];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "h3"
	  }, [_c('text', {
	    staticClass: "h3-text"
	  }, [_vm._v(_vm._s(_vm.contents))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-be7846ca", module.exports)
	  }
	}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(140)

	var Component = __webpack_require__(5)(
	  /* script */
	  __webpack_require__(142),
	  /* template */
	  __webpack_require__(143),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/ali-130257n/www/weex-app-start-kit/src/components/video.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] video.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0955d88b", Component.options)
	  } else {
	    hotAPI.reload("data-v-0955d88b", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(141);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0955d88b!./../../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./video.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0955d88b!./../../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./video.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n.video{\n  position: relative;\n  height: 425px;\n  background-color: #000;\n}\n.video-contents{\n  height: 425px;\n}\n.video-control{\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  right: 20px;\n  height: 60px;\n  justify-content: center;\n}\n.video-progrees-bar{\n  position: relative;\n  height: 14px;\n  background-color: rgba(255,255,255,.7);\n  border-radius: 7px;\n}\n.video-progrees-hightlight{\n  position: absolute;\n  top:0;\n  left:0;\n  width: 400px;\n  height: 14px;\n  background-color: rgba(255,255,255,.95);\n  border-radius: 7px;\n}\n.video-info{\n  margin-top: 20px;\n  flex-direction: row;\n  justify-content: center;\n}\n.video-title{\n  flex: .8;\n  padding: 20px;\n  font-size: 37px;\n  font-weight: 400;\n}\n.video-rate{\n  flex: .2;\n  padding-top: 20px;\n  margin-right: 20px;\n  font-size: 37px;\n  color: #1ba1e2;\n  font-style: italic;\n  text-align: right;\n  font-weight: 100;\n}\n.video-author{\n  flex-direction: row;\n}\n.author-item{\n  flex: .7;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  margin-left: 20px;\n}\n.author-avatar{\n  width: 54px;\n  height: 54px;\n}\n.author-name{\n  margin-left: 20px;\n  font-size: 36px;\n  color: #222;\n}\n.author-follower{\n  margin-left: 10px;\n  padding: 5px;\n  font-size: 20px;\n  color: #fff;\n  background-color: #1ba1e2;\n}\n.video-play-count{\n  flex: .3;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  margin-right: 20px;\n}\n.icon-video{\n  width: 54px;\n  height: 54px;\n}\n.play-count{\n  font-size: 28px;\n  color: #555;\n  margin-left: 10px;\n}\n", ""]);

	// exports


/***/ },
/* 142 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      title: 'The Guardian of Galaxy 2',
	      rate: '9.7',
	      author: {
	        avatar: 'http://img1.vued.vanthink.cn/vuedc20586840fac27d4e0ea5acfb2112f57.png',
	        username: 'Marvel',
	        follower: '50.4K'
	      },
	      playCount: '20.4K'
	    };
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "video-container"
	  }, [_c('div', {
	    staticClass: "video"
	  }, [_c('image', {
	    staticClass: "video-contents",
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vuede7438bc6e898a7a9ed2b45b3db0c352f.jpeg"
	    }
	  }), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
	    staticClass: "video-info"
	  }, [_c('text', {
	    staticClass: "video-title"
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('text', {
	    staticClass: "video-rate"
	  }, [_vm._v(_vm._s(_vm.rate))])]), _vm._v(" "), _c('div', {
	    staticClass: "video-author"
	  }, [_c('div', {
	    staticClass: "author-item"
	  }, [_c('image', {
	    staticClass: "author-avatar",
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vuedc20586840fac27d4e0ea5acfb2112f57.png"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "author-name"
	  }, [_vm._v(_vm._s(_vm.author.username))]), _vm._v(" "), _c('text', {
	    staticClass: "author-follower"
	  }, [_vm._v(_vm._s(_vm.author.follower))])]), _vm._v(" "), _c('div', {
	    staticClass: "video-play-count"
	  }, [_c('image', {
	    staticClass: "icon-video",
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vueda026977b63cd85ebbcc0309a2f592082.png"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "play-count"
	  }, [_vm._v(_vm._s(_vm.playCount))])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "video-control"
	  }, [_c('div', {
	    staticClass: "video-progrees-bar"
	  }, [_c('div', {
	    staticClass: "video-progrees-hightlight"
	  })])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0955d88b", module.exports)
	  }
	}

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(145)

	var Component = __webpack_require__(5)(
	  /* script */
	  __webpack_require__(147),
	  /* template */
	  __webpack_require__(148),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/ali-130257n/www/weex-app-start-kit/src/components/video-list.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] video-list.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-08450150", Component.options)
	  } else {
	    hotAPI.reload("data-v-08450150", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(146);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-08450150!./../../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./video-list.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-08450150!./../../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./video-list.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n.video-list{\n  position: relative;\n  border-top: 1px solid rgba(0,0,0,.2);\n}\n.video-list-item{\n  padding: 20px;\n  border-bottom: 1px solid rgba(0,0,0,.3);\n}\n.video-item-main{\n  flex-direction: row;\n}\n.video-item-cover{\n  width: 220px;\n  height: 120px;\n}\n.video-item-desc{\n  flex-direction: column;\n  margin-left: 40px;\n}\n.video-upload-info{\n  margin-top: 20px;\n  flex-direction: row;\n}\n.icon-upload {\n  width: 36px;\n  height: 36px;\n}\n.video-upload-date{\n  margin-left: 20px;\n  font-size: 24px;\n  color: #777;\n}\n.video-item-ft{\n  flex-direction: row; \n  margin-top: 20px;\n}\n.video-item-producer{\n  flex: .6;\n  flex-direction: row;\n}\n.producer-avatar {\n  width: 36px;\n  height: 36px;\n}\n.producer-name{\n  margin-left: 20px;\n  font-size: 24px;\n  color: #888;\n}\n.video-item-social{\n  flex: .4;\n  flex-direction: row;\n  align-items: center;\n}\n.social-number{\n  color: #444;\n  font-size: 24px;\n}\n.scial-label{\n  margin-left: 5px;\n  color: #999;\n  font-size: 20px;\n}\n\n", ""]);

	// exports


/***/ },
/* 147 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    items: {
	      default: []
	    }
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "video-list"
	  }, _vm._l((_vm.items), function(item) {
	    return _c('div', {
	      staticClass: "video-list-item"
	    }, [_c('div', {
	      staticClass: "video-item-main"
	    }, [_c('image', {
	      staticClass: "video-item-cover",
	      attrs: {
	        "src": item.cover
	      }
	    }), _vm._v(" "), _c('div', {
	      staticClass: "video-item-desc"
	    }, [_c('text', {
	      staticClass: "video-name"
	    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
	      staticClass: "video-upload-info"
	    }, [_c('image', {
	      staticClass: "icon-upload",
	      attrs: {
	        "src": "http://img1.vued.vanthink.cn/vued5f365239dd87f0d91e314ab96d40e669.png"
	      }
	    }), _vm._v(" "), _c('text', {
	      staticClass: "video-upload-date"
	    }, [_vm._v(_vm._s(item.upload_date))])])])]), _vm._v(" "), _c('div', {
	      staticClass: "video-item-ft"
	    }, [_c('div', {
	      staticClass: "video-item-producer"
	    }, [_c('image', {
	      staticClass: "producer-avatar",
	      attrs: {
	        "src": item.producer.avatar
	      }
	    }), _vm._v(" "), _c('text', {
	      staticClass: "producer-name"
	    }, [_vm._v(_vm._s(item.producer.username))])]), _vm._v(" "), _c('div', {
	      staticClass: "video-item-social"
	    }, [_c('text', {
	      staticClass: "social-number"
	    }, [_vm._v(_vm._s(item.views))]), _vm._v(" "), _c('text', {
	      staticClass: "scial-label"
	    }, [_vm._v("Views")]), _vm._v(" "), _c('text', {
	      staticClass: "social-number",
	      staticStyle: {
	        "margin-left": "10px"
	      }
	    }, [_vm._v(_vm._s(item.comments))]), _vm._v(" "), _c('text', {
	      staticClass: "scial-label"
	    }, [_vm._v("Comments")])])])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-08450150", module.exports)
	  }
	}

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('navbar', {
	    attrs: {
	      "title": "The Guardian"
	    }
	  }), _vm._v(" "), _c('scroller', {
	    staticClass: "map"
	  }, [_c('jp-video'), _vm._v(" "), _c('h3', {
	    attrs: {
	      "contents": "Recomand"
	    }
	  }), _vm._v(" "), _c('video-list', {
	    attrs: {
	      "items": _vm.recList
	    }
	  })], 1), _vm._v(" "), _c('footer', {
	    attrs: {
	      "active": "2"
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e25e18fc", module.exports)
	  }
	}

/***/ }
/******/ ]);