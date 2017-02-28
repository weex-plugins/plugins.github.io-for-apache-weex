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

	'use strict';

	var App = __webpack_require__(80);
	App.el = '#root';
	new Vue(App);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(15)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(17),
	  /* template */
	  __webpack_require__(18),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/ali-130257n/www/weex-app-start-kit/src/components/card-item.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] card-item.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-981f1d80", Component.options)
	  } else {
	    hotAPI.reload("data-v-981f1d80", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-981f1d80!./../../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./card-item.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-981f1d80!./../../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./card-item.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.card {\n  flex: 0.5;\n  padding: 10px;\n  margin: 10px;\n  border: 1px solid #ddd;\n  border-bottom: 2px solid rgba(0,0,0,.3);\n  min-width: 240px;\n  min-height: 120px;\n  background-color: #fff;\n}\n.card-cover{\n  height: 200px;\n  margin-bottom: 20px;\n  border:2px solid #eee;\n}\n.card-detail{\n  flex-direction: row;\n}\n.card-name{\n  flex: 1;\n  font-size: 30px;\n  color: #555;\n  font-weight: bold;\n}\n.share-contents{\n  flex: 1;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n.icon-share{\n  width: 36px;\n  height: 36px;\n}\n.share-count{\n  margin-left: 10px;\n  font-size: 24px;\n  color: #999;\n}\n", ""]);

	// exports


/***/ },
/* 17 */
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

	exports.default = {
	  props: {
	    name: {
	      default: ''
	    },
	    shareCount: {
	      default: ''
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "card"
	  }, [_c('image', {
	    staticClass: "card-cover",
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vuedf9246c2edc2e4f1fc7caabf6cc84f719.png"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "card-detail"
	  }, [_c('text', {
	    staticClass: "card-name"
	  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('div', {
	    staticClass: "share-contents"
	  }, [_c('image', {
	    staticClass: "icon-share",
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vued823de5c04e0cc944dede20370bee354d.png"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "share-count"
	  }, [_vm._v(_vm._s(_vm.shareCount))])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-981f1d80", module.exports)
	  }
	}

/***/ },
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(39)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(41),
	  /* template */
	  __webpack_require__(43),
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.footer{\n  flex-direction: row;\n  align-items: center;\n  z-index: 200;\n  position:fixed;\n  bottom: 0;\n  left:0;\n  right:0;\n  height: 100px;\n  line-height: 100px;\n  background-color: #fff;\n  border-top-width: 1;\n  border-top-style: solid;\n  border-top-color: rgba(0,0,0,.15);\n}\n.footer-item{\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n}\n.footer-item-icon{\n  width: 54px;\n  height: 54px;\n}\n.btn-sm-text{\n  color: #777;\n  font-size: 20px;\n}\n.active{\n  color: #1ba1e2;\n}\n", ""]);

	// exports


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _helper = __webpack_require__(42);

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
/* 42 */
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
/* 43 */
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(65)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(67),
	  /* template */
	  __webpack_require__(68),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/ali-130257n/www/weex-app-start-kit/src/include/search-bar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] search-bar.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-00755e84", Component.options)
	  } else {
	    hotAPI.reload("data-v-00755e84", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(66);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-00755e84!./../../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./search-bar.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-00755e84!./../../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./search-bar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.search-bar{\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  display:flex;\n  flex-direction: row;\n  height: 88px;\n  background-color: #1ba1e2;\n  align-items: center;\n  justify-content: center;\n  border-bottom-width: 2px;\n  border-bottom-color: #ddd;\n}\n.btn-back{\n  z-index:10;\n  flex-direction: row;\n  align-items: center;\n  width: 180px;\n}\n.btn-arrow-left{\n  width: 60px;\n  height: 60px;\n  margin-left: 10px;\n}\n.btn-text{\n  color: #0f89f5;\n}\n.input-wrap{\n  flex: 1;\n  flex-direction: row;\n  justify-content: center;\n  margin-left: 20px;\n  margin-right: 80px;\n  height: 58px;\n  padding-left: 20px;\n  font-size: 24px;\n  background-color: #fff;\n  border-width: 0;\n  border-radius: 5px;\n}\n.input{\n  flex: 1;\n  font-size: 24px;\n}\n.btn-search{\n  width: 54px;\n  height: 54px;\n}\n", ""]);

	// exports


/***/ },
/* 67 */
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
	    }
	  },
	  methods: {
	    goHome: function goHome() {
	      navigator.pop();
	    }
	  }
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "search-bar"
	  }, [(_vm.back) ? _c('div', {
	    staticClass: "btn-back",
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
	  }, [_vm._v("返回")])]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "input-wrap"
	  }, [_c('input', {
	    staticClass: "input",
	    attrs: {
	      "placeholder": "Search..."
	    },
	    on: {
	      "change": _vm.change
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "btn-search",
	    on: {
	      "click": _vm.searchEvent
	    }
	  }, [_c('image', {
	    staticStyle: {
	      "width": "54px",
	      "height": "54px"
	    },
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vuedea56601586fafc6cb665126938506b35.png"
	    }
	  })])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-00755e84", module.exports)
	  }
	}

/***/ },
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(81)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(83),
	  /* template */
	  __webpack_require__(89),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/ali-130257n/www/weex-app-start-kit/src/shop.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] shop.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-56c07282", Component.options)
	  } else {
	    hotAPI.reload("data-v-56c07282", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(82);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-56c07282!./../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./shop.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-56c07282!./../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./shop.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.container{\n  position: relative;\n  flex:1;\n  flex-direction: column;\n  padding-top: 88px;\n  background-color: #e3e3e3;\n}\n.map{\n  flex: 1;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  min-height: 400;\n}\n\n", ""]);

	// exports


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _searchBar = __webpack_require__(64);

	var _searchBar2 = _interopRequireDefault(_searchBar);

	var _tabBar = __webpack_require__(84);

	var _tabBar2 = _interopRequireDefault(_tabBar);

	var _footer = __webpack_require__(38);

	var _footer2 = _interopRequireDefault(_footer);

	var _cardItem = __webpack_require__(14);

	var _cardItem2 = _interopRequireDefault(_cardItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    'search-bar': _searchBar2.default,
	    'footer': _footer2.default,
	    'box-item': _cardItem2.default,
	    'tabbar': _tabBar2.default
	  },
	  data: function data() {
	    var list = [];
	    for (var i = 0; i < 20; i++) {
	      list.push({
	        id: i + 1,
	        name: '商品' + (i + 1),
	        shareCount: '1' + i + '.3' + i + 'K'
	      });
	    }
	    return {
	      list: list,
	      tabs: [{
	        name: 'Tab1'
	      }, {
	        name: 'Tab2'
	      }, {
	        name: 'Tab3'
	      }]
	    };
	  },

	  methods: {
	    change: function change(event) {
	      this.place = event.value;
	    },
	    changeType: function changeType(q) {
	      this.type = q;
	    }
	  }
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(85)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(87),
	  /* template */
	  __webpack_require__(88),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/ali-130257n/www/weex-app-start-kit/src/include/tab-bar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] tab-bar.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-44d3a33b", Component.options)
	  } else {
	    hotAPI.reload("data-v-44d3a33b", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(86);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-44d3a33b!./../../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tab-bar.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../weex-previewer/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-44d3a33b!./../../../weex-previewer/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tab-bar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.tabs{\n  flex-direction: row;\n  height: 88px;\n  background-color: #fff;\n  border-bottom: 2px solid rgba(0,0,0,.25);\n}\n.tab{\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n}\n.tab-text{\n  colro: #444;\n}\n", ""]);

	// exports


/***/ },
/* 87 */
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

	exports.default = {
	  props: {
	    items: {
	      default: []
	    }
	  },
	  data: function data() {
	    return {
	      tabIndex: 0
	    };
	  },

	  methods: {
	    tabClick: function tabClick(index) {
	      this.tabIndex = index;
	      this.$emit('tabClick', index);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "tabs"
	  }, _vm._l((_vm.items), function(item, index) {
	    return _c('div', {
	      staticClass: "tab",
	      on: {
	        "click": function($event) {
	          _vm.tabClick(index)
	        }
	      }
	    }, [(_vm.tabIndex != index) ? _c('text', {
	      staticClass: "tab-text"
	    }, [_vm._v(_vm._s(item.name))]) : _vm._e(), _vm._v(" "), (_vm.tabIndex == index) ? _c('text', {
	      staticClass: "tab-text active"
	    }, [_vm._v(_vm._s(item.name))]) : _vm._e()])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-44d3a33b", module.exports)
	  }
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('search-bar'), _vm._v(" "), _c('tabbar', {
	    attrs: {
	      "items": _vm.tabs
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "map"
	  }, _vm._l((_vm.list), function(item) {
	    return _c('box-item', {
	      key: item.id,
	      attrs: {
	        "name": item.name,
	        "share-count": item.shareCount
	      }
	    })
	  })), _vm._v(" "), _c('footer', {
	    attrs: {
	      "active": "1"
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-56c07282", module.exports)
	  }
	}

/***/ }
/******/ ]);