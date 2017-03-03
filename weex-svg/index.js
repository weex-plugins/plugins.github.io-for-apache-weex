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

	var App = __webpack_require__(1);
	App.el = '#root';
	new Vue(App);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(2)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(8),
	  /* template */
	  __webpack_require__(20),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/ali-130257n/www/weex-svg/demos/index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-edf28aec", Component.options)
	  } else {
	    hotAPI.reload("data-v-edf28aec", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("1218cdd9", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/css-loader/index.js!../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-edf28aec!../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
	     var newContent = require("!!../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/css-loader/index.js!../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-edf28aec!../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.page{\n  flex: 1;\n  padding-top: 20px;\n  text-align: center;\n  background-color: #f1f1f1;\n}\n.hd{\n  align-items: center;\n}\n.logo{\n  width: 375px;\n  height: 240px;\n}\n.main{\n  margin-top: 40px;\n}\n.h3{\n  margin: 20px;\n  font-size: 24px;\n  text-align: left;\n  color: #888;\n}\n.group{\n  padding-top: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: #fff;\n  border-top:2px solid rgba(0,0,0,.1);\n  border-bottom: 2px solid rgba(0,0,0,.3);\n}\n\n", ""]);

	// exports


/***/ },
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _groupItem = __webpack_require__(9);

	var _groupItem2 = _interopRequireDefault(_groupItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  components: {
	    groupItem: _groupItem2.default
	  },
	  data: function data() {
	    return {
	      coms: [{
	        name: 'rect',
	        icon: 'http://img1.vued.vanthink.cn/vuedd801b5ac3622f3a86e1274693e0cca06.png',
	        url: 'pages/com-rect.js'
	      }, {
	        name: 'circle',
	        icon: 'http://img1.vued.vanthink.cn/vuedc972ff2bbd382918da0d54a50abf5886.png',
	        url: 'pages/com-circle.js'
	      }, {
	        name: 'line',
	        icon: 'http://img1.vued.vanthink.cn/vuedd34a9f03fb2cfb4e4928fd50dac7c2f0.png',
	        url: 'pages/com-line.js'
	      }, {
	        name: 'polyline',
	        icon: 'http://img1.vued.vanthink.cn/vued636ac9019ecf3cfb37203afaf58831a1.png',
	        url: 'pages/com-polyline-and-polygon.js'
	      }, {
	        name: 'path',
	        icon: 'http://img1.vued.vanthink.cn/vued95cc17b37133964d0700f8efe0dd464f.png',
	        url: 'pages/path.js'
	      }],
	      props: [{
	        name: 'fill',
	        icon: 'http://img1.vued.vanthink.cn/vued6ff56846b1d309224d1c4984b7e885be.png',
	        url: 'pages/prop-fill.js'
	      }, {
	        name: 'stroke',
	        icon: 'http://img1.vued.vanthink.cn/vued8ad53b37ce358bbe5fa5964f46cc1309.png',
	        url: 'pages/prop-stroke.js'
	      }],
	      demos: [{
	        name: 'animation',
	        icon: 'http://img1.vued.vanthink.cn/vued3be8484ba1350e3f81f8c9ad447c435f.png',
	        url: 'page/animation.js'
	      }, {
	        name: 'complex svg shape',
	        icon: 'http://img1.vued.vanthink.cn/vued1d89bd6213951e62d0bad242093c82ce.png',
	        url: 'page/complex-shape.js'
	      }]

	    };
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

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(10)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(12),
	  /* template */
	  __webpack_require__(19),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/ali-130257n/www/weex-svg/demos/include/group-item.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] group-item.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2b25bbe0", Component.options)
	  } else {
	    hotAPI.reload("data-v-2b25bbe0", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("b836aff6", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/css-loader/index.js!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2b25bbe0!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./group-item.vue", function() {
	     var newContent = require("!!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/css-loader/index.js!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2b25bbe0!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./group-item.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.group-item{\n  flex-direction: row;\n  align-items: center;\n  height: 110px;\n  color: #555;\n}\n.group-item-text{\n  flex: 1;\n  margin-left: 40px;\n  padding-bottom: 20px;\n  border-bottom: 2px solid rgba(0,0,0,.1);\n}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _icon = __webpack_require__(13);

	var _icon2 = _interopRequireDefault(_icon);

	var _helper = __webpack_require__(18);

	var _helper2 = _interopRequireDefault(_helper);

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


	var navigator = weex.requireModule('navigator');
	exports.default = {
	  components: {
	    icon: _icon2.default
	  },
	  props: {
	    name: {
	      default: '',
	      type: String
	    },
	    icon: {
	      default: '',
	      type: String
	    },
	    url: {
	      default: '',
	      type: String
	    }
	  },

	  methods: {
	    redirect: function redirect() {
	      var url = _helper2.default.setBundleUrl(this.url, weex);
	      navigator.push({
	        url: url
	      });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(14)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(16),
	  /* template */
	  __webpack_require__(17),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/ali-130257n/www/weex-svg/demos/include/icon.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] icon.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-079bd7f8", Component.options)
	  } else {
	    hotAPI.reload("data-v-079bd7f8", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("4f42db44", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/css-loader/index.js!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-079bd7f8!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./icon.vue", function() {
	     var newContent = require("!!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/css-loader/index.js!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-079bd7f8!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./icon.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.icon{\n  width: 54px;\n  height: 54px;\n}\n", ""]);

	// exports


/***/ },
/* 16 */
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

	exports.default = {
	  props: {
	    src: {
	      default: ''
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('image', {
	    staticClass: "icon",
	    attrs: {
	      "src": _vm.src
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-079bd7f8", module.exports)
	  }
	}

/***/ },
/* 18 */
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
	    var nativeBase = void 0;
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
	      if (path === 'web' || path === 'dist') {
	        base = h5Base + '/dist/';
	      } else {
	        base = h5Base + '/';
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "group-item",
	    on: {
	      "click": _vm.redirect
	    }
	  }, [_c('icon', {
	    attrs: {
	      "src": _vm.icon
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "group-item-text"
	  }, [_vm._v(_vm._s(_vm.name))])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2b25bbe0", module.exports)
	  }
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "page"
	  }, [_c('div', {
	    staticClass: "hd"
	  }, [_c('image', {
	    staticClass: "logo",
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vued50a9ba7ffdffdfe2578e0f921a741f5a.png"
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "desc"
	  }, [_vm._v(" A weex plugin for svg support ")])]), _vm._v(" "), _c('div', {
	    staticClass: "main"
	  }, [_c('text', {
	    staticClass: "h3"
	  }, [_vm._v("Components")]), _vm._v(" "), _c('div', {
	    staticClass: "group"
	  }, _vm._l((_vm.coms), function(com) {
	    return _c('group-item', {
	      key: com.name,
	      attrs: {
	        "url": com.url,
	        "name": com.name,
	        "icon": com.icon
	      }
	    })
	  })), _vm._v(" "), _c('text', {
	    staticClass: "h3"
	  }, [_vm._v("Props")]), _vm._v(" "), _c('div', {
	    staticClass: "group"
	  }, _vm._l((_vm.props), function(prop) {
	    return _c('group-item', {
	      key: prop.name,
	      attrs: {
	        "url": prop.url,
	        "name": prop.name,
	        "icon": prop.icon
	      }
	    })
	  })), _vm._v(" "), _c('text', {
	    staticClass: "h3"
	  }, [_vm._v("Advanced")]), _vm._v(" "), _c('div', {
	    staticClass: "group"
	  }, _vm._l((_vm.demos), function(demo) {
	    return _c('group-item', {
	      key: demo.name,
	      attrs: {
	        "url": demo.url,
	        "name": demo.name,
	        "icon": demo.icon
	      }
	    })
	  }))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-edf28aec", module.exports)
	  }
	}

/***/ }
/******/ ]);