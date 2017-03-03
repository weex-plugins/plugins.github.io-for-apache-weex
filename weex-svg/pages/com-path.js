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

	var App = __webpack_require__(41);
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
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(6)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = { css: css, media: media, sourceMap: sourceMap }
	    if (!newStyles[id]) {
	      part.id = parentId + ':0'
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      part.id = parentId + ':' + newStyles[id].parts.length
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
	  var hasSSR = styleElement != null

	  // if in production mode and style is already provided by SSR,
	  // simply do nothing.
	  if (hasSSR && isProduction) {
	    return noop
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = styleElement || createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (!hasSSR) {
	    update(obj)
	  }

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ },
/* 7 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(26)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(28),
	  /* template */
	  __webpack_require__(29),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/ali-130257n/www/weex-svg/demos/include/navbar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-400f5362", Component.options)
	  } else {
	    hotAPI.reload("data-v-400f5362", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("07bb8eb8", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/css-loader/index.js!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-400f5362!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navbar.vue", function() {
	     var newContent = require("!!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/css-loader/index.js!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-400f5362!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navbar.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.navbar{\n  z-index: 200;\n  position: fixed;\n  left:0;\n  right: 0;\n  top:0;\n  display:flex;\n  flex-direction: row;\n  height: 88px;\n  background-color: #fff;\n  align-items: center;\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n  border-bottom-color: #ddd;\n}\n.btn-icon-left{\n  z-index:10;\n  flex-direction: row;\n  align-items: center;\n  width: 180px;\n}\n.btn-arrow-left{\n  width: 60px;\n  height: 60px;\n  margin-left: 10px;\n}\n.btn-text{\n  color: #0f89f5;\n}\n.title{\n  position: absolute;\n  left:0;\n  right:0;\n  top:0;\n  height: 88px;\n  line-height: 88px;\n  font-size: 34px;\n  text-align: center;\n}\n", ""]);

	// exports


/***/ },
/* 28 */
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
/* 29 */
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
	     require("vue-hot-reload-api").rerender("data-v-400f5362", module.exports)
	  }
	}

/***/ },
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(42)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(44),
	  /* template */
	  __webpack_require__(45),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/ali-130257n/www/weex-svg/demos/pages/com-path.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] com-path.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-b1e7a958", Component.options)
	  } else {
	    hotAPI.reload("data-v-b1e7a958", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("6f3df833", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/css-loader/index.js!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-b1e7a958!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./com-path.vue", function() {
	     var newContent = require("!!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/css-loader/index.js!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-b1e7a958!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./com-path.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.page{\n  flex: 1;\n  padding-top: 20px;\n  background-color: #fff;\n}\n.main{\n  padding-top: 88px;\n}\n.desc{\n  margin: 20px;\n  font-size: 28px;\n  text-align: left;\n  color: #444;\n}\n.item{\n  align-items: center;\n  margin: 20px;\n  padding: 10px;\n  border-bottom: 2px solid #ddd;\n}\n.item-shape{\n  width: 600px;\n  height: 480px;\n}\n", ""]);

	// exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _navbar = __webpack_require__(25);

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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "page"
	  }, [_c('navbar', {
	    attrs: {
	      "back": "true",
	      "title": "path"
	    }
	  }), _vm._v(" "), _c('scroller', {
	    staticClass: "main"
	  }, [_c('text', {
	    staticClass: "desc"
	  }, [_vm._v("The rect component is an SVG basic shape, used to create rectangles based on the position of a corner and their width and height")]), _vm._v(" "), _c('div', {
	    staticClass: "item"
	  }, [_c('svg', {
	    staticClass: "item-shape"
	  }, [_c('path', {
	    attrs: {
	      "d": "M300,240 A50,50 0 0,1 150,80",
	      "stroke": "#e84c3d",
	      "stroke-width": "4",
	      "fill": "none"
	    }
	  })]), _vm._v(" "), _c('text', {
	    staticClass: "desc"
	  }, [_vm._v("a simple path componnet")])]), _vm._v(" "), _c('div', {
	    staticClass: "item"
	  }, [_c('svg', {
	    staticClass: "item-shape"
	  }, [_c('path', {
	    attrs: {
	      "d": "M20,20 L420,20",
	      "stroke": "#e84c3d",
	      "stroke-width": "4",
	      "fill": "none"
	    }
	  }), _vm._v(" "), _c('path', {
	    staticStyle: {
	      "stroke": "#3598dc",
	      "fill": "none",
	      "stroke-width": "2"
	    },
	    attrs: {
	      "d": "M120,240\n                 A50,50 0 0,0 120,80"
	    }
	  }), _vm._v(" "), _c('path', {
	    staticStyle: {
	      "stroke": "#2fcc71",
	      "fill": "none",
	      "stroke-width": "2"
	    },
	    attrs: {
	      "d": "M50,50\n                 A50,50 0 1,0 120,80"
	    }
	  }), _vm._v(" "), _c('path', {
	    staticStyle: {
	      "stroke": "#ea6153",
	      "fill": "none",
	      "stroke-width": "2"
	    },
	    attrs: {
	      "d": "M50,50\n                 A50,50 0 0,1 120,80"
	    }
	  })]), _vm._v(" "), _c('text', {
	    staticClass: "desc"
	  }, [_vm._v("The attribute d defines a path to follow")])]), _vm._v(" "), _c('div', {
	    staticClass: "item"
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
	  })]), _vm._v(" "), _c('text', {
	    staticClass: "desc"
	  }, [_vm._v("use path to draw a soccer")])]), _vm._v(" "), _c('div', {
	    staticClass: "item"
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
	  })]), _vm._v(" "), _c('text', {
	    staticClass: "desc"
	  }, [_vm._v("use path to draw a moon")])])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-b1e7a958", module.exports)
	  }
	}

/***/ }
/******/ ]);