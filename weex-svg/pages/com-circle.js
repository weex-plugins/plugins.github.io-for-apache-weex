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

	var App = __webpack_require__(31);
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(32)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(34),
	  /* template */
	  __webpack_require__(35),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/ali-130257n/www/weex-svg/demos/pages/com-circle.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] com-circle.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-40da6682", Component.options)
	  } else {
	    hotAPI.reload("data-v-40da6682", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("5fe1483f", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/css-loader/index.js!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-40da6682!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./com-circle.vue", function() {
	     var newContent = require("!!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/css-loader/index.js!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-40da6682!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./com-circle.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.page{\n  flex: 1;\n  padding-top: 20px;\n  background-color: #fff;\n}\n.main{\n  padding-top: 88px;\n}\n.desc{\n  margin: 20px;\n  font-size: 28px;\n  text-align: left;\n  color: #444;\n}\n.item{\n  align-items: center;\n  margin: 20px;\n  padding: 10px;\n  border-bottom: 2px solid #ddd;\n}\n.item-shape{\n  width: 600px;\n  height: 480px;\n}\n", ""]);

	// exports


/***/ },
/* 34 */
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

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "page"
	  }, [_c('navbar', {
	    attrs: {
	      "back": "true",
	      "title": "circle"
	    }
	  }), _vm._v(" "), _c('scroller', {
	    staticClass: "main"
	  }, [_c('text', {
	    staticClass: "desc"
	  }, [_vm._v("The circle element is an SVG basic shape, used to create circles based on a center point and a radius")]), _vm._v(" "), _c('div', {
	    staticClass: "item"
	  }, [_c('svg', {
	    staticClass: "item-shape"
	  }, [_c('circle', {
	    attrs: {
	      "cx": "300",
	      "cy": "200",
	      "r": "100",
	      "fill": "#ea6153"
	    }
	  })]), _vm._v(" "), _c('text', {
	    staticClass: "desc"
	  }, [_vm._v("a simple circle componnet")])]), _vm._v(" "), _c('div', {
	    staticClass: "item"
	  }, [_c('svg', {
	    staticClass: "item-shape"
	  }, [_c('circle', {
	    attrs: {
	      "cx": "55",
	      "cy": "55",
	      "r": "50",
	      "fill": "#ea6153"
	    }
	  }), _vm._v(" "), _c('circle', {
	    attrs: {
	      "cx": "160",
	      "cy": "160",
	      "r": "50",
	      "fill": "#ea6153"
	    }
	  }), _vm._v(" "), _c('circle', {
	    attrs: {
	      "cx": "275",
	      "cy": "275",
	      "r": "50",
	      "fill": "#ea6153"
	    }
	  })]), _vm._v(" "), _c('text', {
	    staticClass: "desc"
	  }, [_vm._v("use \"cx\" and \"cy\" to set the center position of the component")])]), _vm._v(" "), _c('div', {
	    staticClass: "item"
	  }, [_c('svg', {
	    staticClass: "item-shape"
	  }, [_c('circle', {
	    attrs: {
	      "cx": "55",
	      "cy": "55",
	      "r": "50",
	      "fill": "#ea6153"
	    }
	  }), _vm._v(" "), _c('circle', {
	    attrs: {
	      "cx": "200",
	      "cy": "200",
	      "r": "100",
	      "fill": "#ea6153"
	    }
	  }), _vm._v(" "), _c('circle', {
	    attrs: {
	      "cx": "330",
	      "cy": "330",
	      "r": "30",
	      "fill": "#ea6153"
	    }
	  })]), _vm._v(" "), _c('text', {
	    staticClass: "desc"
	  }, [_vm._v("\"r\" defines the radius of the circle. ")])]), _vm._v(" "), _c('div', {
	    staticClass: "item"
	  }, [_c('svg', {
	    staticClass: "item-shape"
	  }, [_c('circle', {
	    attrs: {
	      "cx": "105",
	      "cy": "200",
	      "r": "100",
	      "fill": "#ea6153"
	    }
	  }), _vm._v(" "), _c('circle', {
	    attrs: {
	      "cx": "155",
	      "cy": "200",
	      "r": "100",
	      "fill": "#3498db"
	    }
	  }), _vm._v(" "), _c('circle', {
	    attrs: {
	      "cx": "195",
	      "cy": "200",
	      "r": "100",
	      "fill": "#9b59b6"
	    }
	  }), _vm._v(" "), _c('circle', {
	    attrs: {
	      "cx": "410",
	      "cy": "200",
	      "r": "100",
	      "fill": "#fff",
	      "stroke-width": "4",
	      "stroke": "#9b59b6"
	    }
	  })]), _vm._v(" "), _c('text', {
	    staticClass: "desc"
	  }, [_vm._v("use fill and stroke to set the color and outline of the component")])])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-40da6682", module.exports)
	  }
	}

/***/ }
/******/ ]);