/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(165)
	
	/* script */
	__vue_exports__ = __webpack_require__(167)
	
	/* template */
	var __vue_template__ = __webpack_require__(169)
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
	__vue_options__.__file = "/Users/ali-130257n/www/app/src/vue/input.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-25568cf2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-25568cf2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] input.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(160);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(162)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e9d72cf6!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./panel.vue", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e9d72cf6!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(161)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  /*border: 1px solid transparent;*/\n  /*border-radius: 10px;*/\n  /*-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n  /*box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n  border-color: #dddddd;\n  border-width: 1px;\n}\n.panel-default {\n}\n.panel-primary {\n  border-color: rgb(40, 96, 144);\n}\n.panel-success {\n  border-color: rgb(76, 174, 76);\n}\n.panel-info {\n  border-color: rgb(70, 184, 218);\n}\n.panel-warning {\n  border-color: rgb(238, 162, 54);\n}\n.panel-danger {\n  border-color: rgb(212, 63, 58);\n}\n.panel-header {\n  background-color: #f5f5f5;\n  font-size: 40px;\n  /*padding-left: 12px;*/\n  /*padding-right: 12px;*/\n  /*padding-top: 20px;*/\n  /*padding-bottom: 20px;*/\n  color: #333;\n}\n.panel-header-default {\n}\n.panel-header-primary {\n  background-color: rgb(40, 96, 144);\n  color: #ffffff;\n}\n.panel-header-success {\n  background-color: rgb(92, 184, 92);\n  color: #ffffff;\n}\n.panel-header-info {\n  background-color: rgb(91, 192, 222);\n  color: #ffffff;\n}\n.panel-header-warning {\n  background-color: rgb(240, 173, 78);\n  color: #ffffff;\n}\n.panel-header-danger {\n  background-color: rgb(217, 83, 79);\n  color: #ffffff;\n}\n.panel-body {\n  /*padding-left: 12px;*/\n  /*padding-right: 12px;*/\n  /*padding-top: 20px;*/\n  /*padding-bottom: 20px;*/\n}\n.panel-body-default {\n}\n.panel-body-primary {\n}\n.panel-body-success {\n}\n.panel-body-info {\n}\n.panel-body-warning {\n}\n.panel-body-danger {\n}\n", "", {"version":3,"sources":["/./src/vue/include/panel.vue?66cb0698"],"names":[],"mappings":";AAuCA;EACA,oBAAA;EACA,uBAAA;EACA,kCAAA;EACA,wBAAA;EACA,kDAAA;EACA,0CAAA;EACA,sBAAA;EACA,kBAAA;CACA;AACA;CACA;AACA;EACA,+BAAA;CACA;AACA;EACA,+BAAA;CACA;AACA;EACA,gCAAA;CACA;AACA;EACA,gCAAA;CACA;AACA;EACA,+BAAA;CACA;AACA;EACA,0BAAA;EACA,gBAAA;EACA,uBAAA;EACA,wBAAA;EACA,sBAAA;EACA,yBAAA;EACA,YAAA;CACA;AACA;CACA;AACA;EACA,mCAAA;EACA,eAAA;CACA;AACA;EACA,mCAAA;EACA,eAAA;CACA;AACA;EACA,oCAAA;EACA,eAAA;CACA;AACA;EACA,oCAAA;EACA,eAAA;CACA;AACA;EACA,mCAAA;EACA,eAAA;CACA;AACA;EACA,uBAAA;EACA,wBAAA;EACA,sBAAA;EACA,yBAAA;CACA;AACA;CACA;AACA;CACA;AACA;CACA;AACA;CACA;AACA;CACA;AACA;CACA","file":"panel.vue","sourcesContent":["<template>\n  <div\n    :class=\"['panel', 'panel-' + type]\"\n    :style=\"{ borderWidth: border }\">\n    <text\n      :class=\"['panel-header', 'panel-header-' + type]\"\n      :style=\"{\n        paddingTop: paddingHead,\n        paddingBottom: paddingHead,\n        paddingLeft: paddingHead*1.5,\n        paddingRight: paddingHead*1.5\n      }\">{{title}}</text>\n    <div\n      :class=\"['panel-body', 'panel-body-' + type]\"\n      :style=\"{\n        paddingTop: paddingBody,\n        paddingBottom: paddingBody,\n        paddingLeft: paddingBody*1.5,\n        paddingRight: paddingBody*1.5\n      }\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n\n<script>\n  module.exports = {\n    props: {\n      type: { default: 'default' },\n      title: { default: '' },\n      paddingBody: { default: 20 },\n      paddingHead: { default: 20 },\n      dataClass: { default: '' }, // FIXME transfer class\n      border:{ default: 0 }\n    }\n  }\n</script>\n\n<style>\n  .panel {\n    margin-bottom: 20px;\n    background-color: #fff;\n    /*border: 1px solid transparent;*/\n    /*border-radius: 10px;*/\n    /*-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n    /*box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n    border-color: #dddddd;\n    border-width: 1px;\n  }\n  .panel-default {\n  }\n  .panel-primary {\n    border-color: rgb(40, 96, 144);\n  }\n  .panel-success {\n    border-color: rgb(76, 174, 76);\n  }\n  .panel-info {\n    border-color: rgb(70, 184, 218);\n  }\n  .panel-warning {\n    border-color: rgb(238, 162, 54);\n  }\n  .panel-danger {\n    border-color: rgb(212, 63, 58);\n  }\n  .panel-header {\n    background-color: #f5f5f5;\n    font-size: 40px;\n    /*padding-left: 12px;*/\n    /*padding-right: 12px;*/\n    /*padding-top: 20px;*/\n    /*padding-bottom: 20px;*/\n    color: #333;\n  }\n  .panel-header-default {\n  }\n  .panel-header-primary {\n    background-color: rgb(40, 96, 144);\n    color: #ffffff;\n  }\n  .panel-header-success {\n    background-color: rgb(92, 184, 92);\n    color: #ffffff;\n  }\n  .panel-header-info {\n    background-color: rgb(91, 192, 222);\n    color: #ffffff;\n  }\n  .panel-header-warning {\n    background-color: rgb(240, 173, 78);\n    color: #ffffff;\n  }\n  .panel-header-danger {\n    background-color: rgb(217, 83, 79);\n    color: #ffffff;\n  }\n  .panel-body {\n    /*padding-left: 12px;*/\n    /*padding-right: 12px;*/\n    /*padding-top: 20px;*/\n    /*padding-bottom: 20px;*/\n  }\n  .panel-body-default {\n  }\n  .panel-body-primary {\n  }\n  .panel-body-success {\n  }\n  .panel-body-info {\n  }\n  .panel-body-warning {\n  }\n  .panel-body-danger {\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 161:
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

/***/ 162:
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

/***/ 163:
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
	
	module.exports = {
	  props: {
	    type: { default: 'default' },
	    title: { default: '' },
	    paddingBody: { default: 20 },
	    paddingHead: { default: 20 },
	    dataClass: { default: '' }, // FIXME transfer class
	    border: { default: 0 }
	  }
	};

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['panel', 'panel-' + _vm.type],
	    style: ({
	      borderWidth: _vm.border
	    })
	  }, [_c('text', {
	    class: ['panel-header', 'panel-header-' + _vm.type],
	    style: ({
	      paddingTop: _vm.paddingHead,
	      paddingBottom: _vm.paddingHead,
	      paddingLeft: _vm.paddingHead * 1.5,
	      paddingRight: _vm.paddingHead * 1.5
	    })
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
	    class: ['panel-body', 'panel-body-' + _vm.type],
	    style: ({
	      paddingTop: _vm.paddingBody,
	      paddingBottom: _vm.paddingBody,
	      paddingLeft: _vm.paddingBody * 1.5,
	      paddingRight: _vm.paddingBody * 1.5
	    })
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e9d72cf6", module.exports)
	  }
	}

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(166);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(162)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-25568cf2!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./input.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-25568cf2!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./input.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(161)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.input {\n  font-size: 60px;\n  height: 80px;\n  width: 400px;\n}\n", "", {"version":3,"sources":["/./src/vue/input.vue?6609833a"],"names":[],"mappings":";AAkBA;EACA,gBAAA;EACA,aAAA;EACA,aAAA;CACA","file":"input.vue","sourcesContent":["<template>\n  <scroller>\n    <panel title=\"input\" type=\"primary\">\n      <input\n        type=\"text\"\n        placeholder=\"Text Input\"\n        class=\"input\"\n        value=\"\"\n        @change=\"onchange\"\n        @input=\"oninput\"\n      />\n      <text>oninput: {{txtInput}}</text>\n      <text>onchange: {{txtChange}}</text>\n    </panel>\n  </scroller>\n</template>\n\n<style>\n  .input {\n    font-size: 60px;\n    height: 80px;\n    width: 400px;\n  }\n</style>\n\n<script>\n  var modal = weex.requireModule('modal')\n  module.exports = {\n    data: function () {\n      return {\n        txtInput: '',\n        txtChange: ''\n      }\n    },\n    components: {\n      panel: require('./include/panel.vue')\n    },\n    methods: {\n      onchange: function(event) {\n        this.txtChange = event.value;\n        modal.toast({\n          message: 'onchange: ' + event.value,\n          duration: 2\n        })\n      },\n      oninput: function(event) {\n        this.txtInput = event.value;\n        modal.toast({\n          message: 'onitput: ' + event.value,\n          duration: 1\n        })\n      }\n    }\n  };\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

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
	
	var modal = weex.requireModule('modal');
	module.exports = {
	  data: function data() {
	    return {
	      txtInput: '',
	      txtChange: ''
	    };
	  },
	  components: {
	    panel: __webpack_require__(168)
	  },
	  methods: {
	    onchange: function onchange(event) {
	      this.txtChange = event.value;
	      modal.toast({
	        message: 'onchange: ' + event.value,
	        duration: 2
	      });
	    },
	    oninput: function oninput(event) {
	      this.txtInput = event.value;
	      modal.toast({
	        message: 'onitput: ' + event.value,
	        duration: 1
	      });
	    }
	  }
	};

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(159)
	
	/* script */
	__vue_exports__ = __webpack_require__(163)
	
	/* template */
	var __vue_template__ = __webpack_require__(164)
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
	__vue_options__.__file = "/Users/ali-130257n/www/app/src/vue/include/panel.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e9d72cf6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e9d72cf6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] panel.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', [_c('panel', {
	    attrs: {
	      "title": "input",
	      "type": "primary"
	    }
	  }, [_c('input', {
	    staticClass: "input",
	    attrs: {
	      "type": "text",
	      "placeholder": "Text Input",
	      "value": ""
	    },
	    domProps: {
	      "value": ""
	    },
	    on: {
	      "change": _vm.onchange,
	      "input": _vm.oninput
	    }
	  }), _vm._v(" "), _c('text', [_vm._v("oninput: " + _vm._s(_vm.txtInput))]), _vm._v(" "), _c('text', [_vm._v("onchange: " + _vm._s(_vm.txtChange))])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-25568cf2", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTI5MDc5ZTMzNjI4ZGEwNjVhMjk/NGE2NyoqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy92dWUvaW5wdXQudnVlIiwid2VicGFjazovLy8uL3NyYy92dWUvaW5jbHVkZS9wYW5lbC52dWU/YmE3OSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Z1ZS9pbmNsdWRlL3BhbmVsLnZ1ZT83ODRkKiIsIndlYnBhY2s6Ly8vL1VzZXJzL2FsaS0xMzAyNTduL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanM/ODYwYiIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzP2MyZmMiLCJ3ZWJwYWNrOi8vL3BhbmVsLnZ1ZT81MWY5Iiwid2VicGFjazovLy8uL3NyYy92dWUvaW5jbHVkZS9wYW5lbC52dWU/Yjk1YioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Z1ZS9pbnB1dC52dWU/YjliNSIsIndlYnBhY2s6Ly8vLi9zcmMvdnVlL2lucHV0LnZ1ZT9iOTdhIiwid2VicGFjazovLy9pbnB1dC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Z1ZS9pbmNsdWRlL3BhbmVsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdnVlL2lucHV0LnZ1ZT80NjhlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFzRCxtREFBbUQsSUFBSTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDO0FBQ0Qsa0NBQWlDOztBQUVqQzs7Ozs7Ozs7QUN4Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEY7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSxxQ0FBb0Msd0JBQXdCLDJCQUEyQixvQ0FBb0MsNEJBQTRCLHNEQUFzRCw4Q0FBOEMsNEJBQTRCLHNCQUFzQixHQUFHLGtCQUFrQixHQUFHLGtCQUFrQixtQ0FBbUMsR0FBRyxrQkFBa0IsbUNBQW1DLEdBQUcsZUFBZSxvQ0FBb0MsR0FBRyxrQkFBa0Isb0NBQW9DLEdBQUcsaUJBQWlCLG1DQUFtQyxHQUFHLGlCQUFpQiw4QkFBOEIsb0JBQW9CLHlCQUF5Qiw0QkFBNEIsMEJBQTBCLDZCQUE2QixrQkFBa0IsR0FBRyx5QkFBeUIsR0FBRyx5QkFBeUIsdUNBQXVDLG1CQUFtQixHQUFHLHlCQUF5Qix1Q0FBdUMsbUJBQW1CLEdBQUcsc0JBQXNCLHdDQUF3QyxtQkFBbUIsR0FBRyx5QkFBeUIsd0NBQXdDLG1CQUFtQixHQUFHLHdCQUF3Qix1Q0FBdUMsbUJBQW1CLEdBQUcsZUFBZSx5QkFBeUIsNEJBQTRCLDBCQUEwQiw2QkFBNkIsS0FBSyx1QkFBdUIsR0FBRyx1QkFBdUIsR0FBRyx1QkFBdUIsR0FBRyxvQkFBb0IsR0FBRyx1QkFBdUIsR0FBRyxzQkFBc0IsR0FBRyxVQUFVLHdGQUF3RixNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyx5SEFBeUgsc0JBQXNCLDJGQUEyRiw4SkFBOEosS0FBSyxPQUFPLDBGQUEwRiw4SkFBOEosNkZBQTZGLGNBQWMsZUFBZSxxQkFBcUIsaUJBQWlCLGNBQWMsdUJBQXVCLGNBQWMsdUJBQXVCLGNBQWMscUJBQXFCLGNBQWMseUNBQXlDLGFBQWEsT0FBTyxLQUFLLGtDQUFrQywwQkFBMEIsNkJBQTZCLHNDQUFzQyw4QkFBOEIsd0RBQXdELGdEQUFnRCw4QkFBOEIsd0JBQXdCLEtBQUssb0JBQW9CLEtBQUssb0JBQW9CLHFDQUFxQyxLQUFLLG9CQUFvQixxQ0FBcUMsS0FBSyxpQkFBaUIsc0NBQXNDLEtBQUssb0JBQW9CLHNDQUFzQyxLQUFLLG1CQUFtQixxQ0FBcUMsS0FBSyxtQkFBbUIsZ0NBQWdDLHNCQUFzQiwyQkFBMkIsOEJBQThCLDRCQUE0QiwrQkFBK0Isb0JBQW9CLEtBQUssMkJBQTJCLEtBQUssMkJBQTJCLHlDQUF5QyxxQkFBcUIsS0FBSywyQkFBMkIseUNBQXlDLHFCQUFxQixLQUFLLHdCQUF3QiwwQ0FBMEMscUJBQXFCLEtBQUssMkJBQTJCLDBDQUEwQyxxQkFBcUIsS0FBSywwQkFBMEIseUNBQXlDLHFCQUFxQixLQUFLLGlCQUFpQiwyQkFBMkIsOEJBQThCLDRCQUE0QiwrQkFBK0IsT0FBTyx5QkFBeUIsS0FBSyx5QkFBeUIsS0FBSyx5QkFBeUIsS0FBSyxzQkFBc0IsS0FBSyx5QkFBeUIsS0FBSyx3QkFBd0IsS0FBSyx1Q0FBdUM7O0FBRWwwSjs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQSx5Q0FBd0MsZ0JBQWdCO0FBQ3hELEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0EsbUJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQSxTQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0Esa0JBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZDtBQUNBLGlDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVEO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TEE7O3NCQUdBO3VCQUNBOzZCQUNBOzZCQUNBO2lDQUNBO3dCQUVBO0FBUEE7QUFEQSxHOzs7Ozs7O0FDM0JBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQzlCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUF1RjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLHFDQUFvQyxvQkFBb0IsaUJBQWlCLGlCQUFpQixHQUFHLFVBQVUsZ0ZBQWdGLE1BQU0sV0FBVyxVQUFVLFVBQVUscVVBQXFVLFVBQVUsaUNBQWlDLFdBQVcsd0VBQXdFLHNCQUFzQixtQkFBbUIsbUJBQW1CLEtBQUssdUZBQXVGLHlCQUF5QixnQkFBZ0IsdURBQXVELE9BQU8sb0JBQW9CLG9EQUFvRCxpQkFBaUIsbUNBQW1DLHVDQUF1Qyx1QkFBdUIsa0ZBQWtGLFVBQVUsbUNBQW1DLHNDQUFzQyx1QkFBdUIsaUZBQWlGLFVBQVUsT0FBTyxNQUFNLHdDQUF3Qzs7QUFFcDZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNtQkE7QUFDQTt5QkFFQTs7aUJBRUE7a0JBRUE7QUFIQTtBQUlBOztnQ0FHQTtBQUZBOzt3Q0FJQTs4QkFDQTs7dUNBRUE7bUJBRUE7QUFIQTtBQUlBO3NDQUNBOzZCQUNBOztzQ0FFQTttQkFFQTtBQUhBO0FBS0E7QUFmQTtBQVZBLEc7Ozs7Ozs7QUM1QkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBc0QsbURBQW1ELElBQUk7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQztBQUNELGtDQUFpQzs7QUFFakM7Ozs7Ozs7O0FDeENBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoidnVlL2lucHV0LnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUyOTA3OWUzMzYyOGRhMDY1YTI5IiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTI1NTY4Y2YyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbnB1dC52dWVcIilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2lucHV0LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjU1NjhjZjIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5wdXQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL3NyYy92dWUvaW5wdXQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yNTU2OGNmMlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yNTU2OGNmMlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGlucHV0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Z1ZS9pbnB1dC52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1lOWQ3MmNmNiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFuZWwudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1lOWQ3MmNmNiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFuZWwudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTlkNzJjZjYhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhbmVsLnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhL1VzZXJzL2FsaS0xMzAyNTduL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1lOWQ3MmNmNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy92dWUvaW5jbHVkZS9wYW5lbC52dWVcbi8vIG1vZHVsZSBpZCA9IDE1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDE3IDE4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucGFuZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAvKmJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyovXFxuICAvKmJvcmRlci1yYWRpdXM6IDEwcHg7Ki9cXG4gIC8qLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXFxuICAvKmJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cXG4gIGJvcmRlci1jb2xvcjogI2RkZGRkZDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG4ucGFuZWwtZGVmYXVsdCB7XFxufVxcbi5wYW5lbC1wcmltYXJ5IHtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcXG59XFxuLnBhbmVsLXN1Y2Nlc3Mge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNzYsIDE3NCwgNzYpO1xcbn1cXG4ucGFuZWwtaW5mbyB7XFxuICBib3JkZXItY29sb3I6IHJnYig3MCwgMTg0LCAyMTgpO1xcbn1cXG4ucGFuZWwtd2FybmluZyB7XFxuICBib3JkZXItY29sb3I6IHJnYigyMzgsIDE2MiwgNTQpO1xcbn1cXG4ucGFuZWwtZGFuZ2VyIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDIxMiwgNjMsIDU4KTtcXG59XFxuLnBhbmVsLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgLypwYWRkaW5nLWxlZnQ6IDEycHg7Ki9cXG4gIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xcbiAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xcbiAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5wYW5lbC1oZWFkZXItZGVmYXVsdCB7XFxufVxcbi5wYW5lbC1oZWFkZXItcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5wYW5lbC1oZWFkZXItc3VjY2VzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDE4NCwgOTIpO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5wYW5lbC1oZWFkZXItaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDE5MiwgMjIyKTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4ucGFuZWwtaGVhZGVyLXdhcm5pbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTczLCA3OCk7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLnBhbmVsLWhlYWRlci1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgODMsIDc5KTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4ucGFuZWwtYm9keSB7XFxuICAvKnBhZGRpbmctbGVmdDogMTJweDsqL1xcbiAgLypwYWRkaW5nLXJpZ2h0OiAxMnB4OyovXFxuICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXFxuICAvKnBhZGRpbmctYm90dG9tOiAyMHB4OyovXFxufVxcbi5wYW5lbC1ib2R5LWRlZmF1bHQge1xcbn1cXG4ucGFuZWwtYm9keS1wcmltYXJ5IHtcXG59XFxuLnBhbmVsLWJvZHktc3VjY2VzcyB7XFxufVxcbi5wYW5lbC1ib2R5LWluZm8ge1xcbn1cXG4ucGFuZWwtYm9keS13YXJuaW5nIHtcXG59XFxuLnBhbmVsLWJvZHktZGFuZ2VyIHtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92dWUvaW5jbHVkZS9wYW5lbC52dWU/NjZjYjA2OThcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXVDQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7Q0FDQTtBQUNBO0NBQ0E7QUFDQTtFQUNBLCtCQUFBO0NBQ0E7QUFDQTtFQUNBLCtCQUFBO0NBQ0E7QUFDQTtFQUNBLGdDQUFBO0NBQ0E7QUFDQTtFQUNBLGdDQUFBO0NBQ0E7QUFDQTtFQUNBLCtCQUFBO0NBQ0E7QUFDQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7Q0FDQTtBQUNBO0NBQ0E7QUFDQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtDQUNBO0FBQ0E7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7Q0FDQTtBQUNBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0NBQ0E7QUFDQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtDQUNBO0FBQ0E7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7Q0FDQTtBQUNBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7Q0FDQTtBQUNBO0NBQ0E7QUFDQTtDQUNBO0FBQ0E7Q0FDQTtBQUNBO0NBQ0E7QUFDQTtDQUNBO0FBQ0E7Q0FDQVwiLFwiZmlsZVwiOlwicGFuZWwudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXZcXG4gICAgOmNsYXNzPVxcXCJbJ3BhbmVsJywgJ3BhbmVsLScgKyB0eXBlXVxcXCJcXG4gICAgOnN0eWxlPVxcXCJ7IGJvcmRlcldpZHRoOiBib3JkZXIgfVxcXCI+XFxuICAgIDx0ZXh0XFxuICAgICAgOmNsYXNzPVxcXCJbJ3BhbmVsLWhlYWRlcicsICdwYW5lbC1oZWFkZXItJyArIHR5cGVdXFxcIlxcbiAgICAgIDpzdHlsZT1cXFwie1xcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ0hlYWQsXFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nSGVhZCxcXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nSGVhZCoxLjUsXFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdIZWFkKjEuNVxcbiAgICAgIH1cXFwiPnt7dGl0bGV9fTwvdGV4dD5cXG4gICAgPGRpdlxcbiAgICAgIDpjbGFzcz1cXFwiWydwYW5lbC1ib2R5JywgJ3BhbmVsLWJvZHktJyArIHR5cGVdXFxcIlxcbiAgICAgIDpzdHlsZT1cXFwie1xcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ0JvZHksXFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nQm9keSxcXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nQm9keSoxLjUsXFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdCb2R5KjEuNVxcbiAgICAgIH1cXFwiPlxcbiAgICAgIDxzbG90Pjwvc2xvdD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICBtb2R1bGUuZXhwb3J0cyA9IHtcXG4gICAgcHJvcHM6IHtcXG4gICAgICB0eXBlOiB7IGRlZmF1bHQ6ICdkZWZhdWx0JyB9LFxcbiAgICAgIHRpdGxlOiB7IGRlZmF1bHQ6ICcnIH0sXFxuICAgICAgcGFkZGluZ0JvZHk6IHsgZGVmYXVsdDogMjAgfSxcXG4gICAgICBwYWRkaW5nSGVhZDogeyBkZWZhdWx0OiAyMCB9LFxcbiAgICAgIGRhdGFDbGFzczogeyBkZWZhdWx0OiAnJyB9LCAvLyBGSVhNRSB0cmFuc2ZlciBjbGFzc1xcbiAgICAgIGJvcmRlcjp7IGRlZmF1bHQ6IDAgfVxcbiAgICB9XFxuICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbiAgLnBhbmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsqL1xcbiAgICAvKmJvcmRlci1yYWRpdXM6IDEwcHg7Ki9cXG4gICAgLyotd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cXG4gICAgLypib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXFxuICAgIGJvcmRlci1jb2xvcjogI2RkZGRkZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICB9XFxuICAucGFuZWwtZGVmYXVsdCB7XFxuICB9XFxuICAucGFuZWwtcHJpbWFyeSB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcXG4gIH1cXG4gIC5wYW5lbC1zdWNjZXNzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzYsIDE3NCwgNzYpO1xcbiAgfVxcbiAgLnBhbmVsLWluZm8ge1xcbiAgICBib3JkZXItY29sb3I6IHJnYig3MCwgMTg0LCAyMTgpO1xcbiAgfVxcbiAgLnBhbmVsLXdhcm5pbmcge1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzgsIDE2MiwgNTQpO1xcbiAgfVxcbiAgLnBhbmVsLWRhbmdlciB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxMiwgNjMsIDU4KTtcXG4gIH1cXG4gIC5wYW5lbC1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXFxuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xcbiAgICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXFxuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cXG4gICAgY29sb3I6ICMzMzM7XFxuICB9XFxuICAucGFuZWwtaGVhZGVyLWRlZmF1bHQge1xcbiAgfVxcbiAgLnBhbmVsLWhlYWRlci1wcmltYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICB9XFxuICAucGFuZWwtaGVhZGVyLXN1Y2Nlc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDE4NCwgOTIpO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gIH1cXG4gIC5wYW5lbC1oZWFkZXItaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MSwgMTkyLCAyMjIpO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gIH1cXG4gIC5wYW5lbC1oZWFkZXItd2FybmluZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE3MywgNzgpO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gIH1cXG4gIC5wYW5lbC1oZWFkZXItZGFuZ2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgODMsIDc5KTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICB9XFxuICAucGFuZWwtYm9keSB7XFxuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXFxuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xcbiAgICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXFxuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cXG4gIH1cXG4gIC5wYW5lbC1ib2R5LWRlZmF1bHQge1xcbiAgfVxcbiAgLnBhbmVsLWJvZHktcHJpbWFyeSB7XFxuICB9XFxuICAucGFuZWwtYm9keS1zdWNjZXNzIHtcXG4gIH1cXG4gIC5wYW5lbC1ib2R5LWluZm8ge1xcbiAgfVxcbiAgLnBhbmVsLWJvZHktd2FybmluZyB7XFxuICB9XFxuICAucGFuZWwtYm9keS1kYW5nZXIge1xcbiAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvYWxpLTEzMDI1N24vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWU5ZDcyY2Y2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3Z1ZS9pbmNsdWRlL3BhbmVsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTcgMTgiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL2FsaS0xMzAyNTduL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDE3IDE4IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYgKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcblx0XHQvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG5cdFx0Y3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nO1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDE3IDE4IiwiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgOmNsYXNzPVwiWydwYW5lbCcsICdwYW5lbC0nICsgdHlwZV1cIlxuICAgIDpzdHlsZT1cInsgYm9yZGVyV2lkdGg6IGJvcmRlciB9XCI+XG4gICAgPHRleHRcbiAgICAgIDpjbGFzcz1cIlsncGFuZWwtaGVhZGVyJywgJ3BhbmVsLWhlYWRlci0nICsgdHlwZV1cIlxuICAgICAgOnN0eWxlPVwie1xuICAgICAgICBwYWRkaW5nVG9wOiBwYWRkaW5nSGVhZCxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogcGFkZGluZ0hlYWQsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nSGVhZCoxLjUsXG4gICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZ0hlYWQqMS41XG4gICAgICB9XCI+e3t0aXRsZX19PC90ZXh0PlxuICAgIDxkaXZcbiAgICAgIDpjbGFzcz1cIlsncGFuZWwtYm9keScsICdwYW5lbC1ib2R5LScgKyB0eXBlXVwiXG4gICAgICA6c3R5bGU9XCJ7XG4gICAgICAgIHBhZGRpbmdUb3A6IHBhZGRpbmdCb2R5LFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nQm9keSxcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmdCb2R5KjEuNSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nQm9keSoxLjVcbiAgICAgIH1cIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBwcm9wczoge1xuICAgICAgdHlwZTogeyBkZWZhdWx0OiAnZGVmYXVsdCcgfSxcbiAgICAgIHRpdGxlOiB7IGRlZmF1bHQ6ICcnIH0sXG4gICAgICBwYWRkaW5nQm9keTogeyBkZWZhdWx0OiAyMCB9LFxuICAgICAgcGFkZGluZ0hlYWQ6IHsgZGVmYXVsdDogMjAgfSxcbiAgICAgIGRhdGFDbGFzczogeyBkZWZhdWx0OiAnJyB9LCAvLyBGSVhNRSB0cmFuc2ZlciBjbGFzc1xuICAgICAgYm9yZGVyOnsgZGVmYXVsdDogMCB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAucGFuZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyovXG4gICAgLypib3JkZXItcmFkaXVzOiAxMHB4OyovXG4gICAgLyotd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cbiAgICAvKmJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIH1cbiAgLnBhbmVsLWRlZmF1bHQge1xuICB9XG4gIC5wYW5lbC1wcmltYXJ5IHtcbiAgICBib3JkZXItY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XG4gIH1cbiAgLnBhbmVsLXN1Y2Nlc3Mge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDc2LCAxNzQsIDc2KTtcbiAgfVxuICAucGFuZWwtaW5mbyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzAsIDE4NCwgMjE4KTtcbiAgfVxuICAucGFuZWwtd2FybmluZyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM4LCAxNjIsIDU0KTtcbiAgfVxuICAucGFuZWwtZGFuZ2VyIHtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTIsIDYzLCA1OCk7XG4gIH1cbiAgLnBhbmVsLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgLypwYWRkaW5nLWxlZnQ6IDEycHg7Ki9cbiAgICAvKnBhZGRpbmctcmlnaHQ6IDEycHg7Ki9cbiAgICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXG4gICAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIC5wYW5lbC1oZWFkZXItZGVmYXVsdCB7XG4gIH1cbiAgLnBhbmVsLWhlYWRlci1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIC5wYW5lbC1oZWFkZXItc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAxODQsIDkyKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAucGFuZWwtaGVhZGVyLWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MSwgMTkyLCAyMjIpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIC5wYW5lbC1oZWFkZXItd2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTczLCA3OCk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgLnBhbmVsLWhlYWRlci1kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDgzLCA3OSk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgLnBhbmVsLWJvZHkge1xuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXJpZ2h0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cbiAgfVxuICAucGFuZWwtYm9keS1kZWZhdWx0IHtcbiAgfVxuICAucGFuZWwtYm9keS1wcmltYXJ5IHtcbiAgfVxuICAucGFuZWwtYm9keS1zdWNjZXNzIHtcbiAgfVxuICAucGFuZWwtYm9keS1pbmZvIHtcbiAgfVxuICAucGFuZWwtYm9keS13YXJuaW5nIHtcbiAgfVxuICAucGFuZWwtYm9keS1kYW5nZXIge1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwYW5lbC52dWU/NjZjYjA2OTgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydwYW5lbCcsICdwYW5lbC0nICsgX3ZtLnR5cGVdLFxuICAgIHN0eWxlOiAoe1xuICAgICAgYm9yZGVyV2lkdGg6IF92bS5ib3JkZXJcbiAgICB9KVxuICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgY2xhc3M6IFsncGFuZWwtaGVhZGVyJywgJ3BhbmVsLWhlYWRlci0nICsgX3ZtLnR5cGVdLFxuICAgIHN0eWxlOiAoe1xuICAgICAgcGFkZGluZ1RvcDogX3ZtLnBhZGRpbmdIZWFkLFxuICAgICAgcGFkZGluZ0JvdHRvbTogX3ZtLnBhZGRpbmdIZWFkLFxuICAgICAgcGFkZGluZ0xlZnQ6IF92bS5wYWRkaW5nSGVhZCAqIDEuNSxcbiAgICAgIHBhZGRpbmdSaWdodDogX3ZtLnBhZGRpbmdIZWFkICogMS41XG4gICAgfSlcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydwYW5lbC1ib2R5JywgJ3BhbmVsLWJvZHktJyArIF92bS50eXBlXSxcbiAgICBzdHlsZTogKHtcbiAgICAgIHBhZGRpbmdUb3A6IF92bS5wYWRkaW5nQm9keSxcbiAgICAgIHBhZGRpbmdCb3R0b206IF92bS5wYWRkaW5nQm9keSxcbiAgICAgIHBhZGRpbmdMZWZ0OiBfdm0ucGFkZGluZ0JvZHkgKiAxLjUsXG4gICAgICBwYWRkaW5nUmlnaHQ6IF92bS5wYWRkaW5nQm9keSAqIDEuNVxuICAgIH0pXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1lOWQ3MmNmNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZTlkNzJjZjYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy92dWUvaW5jbHVkZS9wYW5lbC52dWVcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDE3IDE4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yNTU2OGNmMiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5wdXQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yNTU2OGNmMiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5wdXQudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjU1NjhjZjIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2lucHV0LnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhL1VzZXJzL2FsaS0xMzAyNTduL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yNTU2OGNmMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy92dWUvaW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92dWUvaW5wdXQudnVlPzY2MDk4MzNhXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFrQkE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0NBQ0FcIixcImZpbGVcIjpcImlucHV0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8c2Nyb2xsZXI+XFxuICAgIDxwYW5lbCB0aXRsZT1cXFwiaW5wdXRcXFwiIHR5cGU9XFxcInByaW1hcnlcXFwiPlxcbiAgICAgIDxpbnB1dFxcbiAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgIHBsYWNlaG9sZGVyPVxcXCJUZXh0IElucHV0XFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImlucHV0XFxcIlxcbiAgICAgICAgdmFsdWU9XFxcIlxcXCJcXG4gICAgICAgIEBjaGFuZ2U9XFxcIm9uY2hhbmdlXFxcIlxcbiAgICAgICAgQGlucHV0PVxcXCJvbmlucHV0XFxcIlxcbiAgICAgIC8+XFxuICAgICAgPHRleHQ+b25pbnB1dDoge3t0eHRJbnB1dH19PC90ZXh0PlxcbiAgICAgIDx0ZXh0Pm9uY2hhbmdlOiB7e3R4dENoYW5nZX19PC90ZXh0PlxcbiAgICA8L3BhbmVsPlxcbiAgPC9zY3JvbGxlcj5cXG48L3RlbXBsYXRlPlxcblxcbjxzdHlsZT5cXG4gIC5pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48c2NyaXB0PlxcbiAgdmFyIG1vZGFsID0gd2VleC5yZXF1aXJlTW9kdWxlKCdtb2RhbCcpXFxuICBtb2R1bGUuZXhwb3J0cyA9IHtcXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xcbiAgICAgIHJldHVybiB7XFxuICAgICAgICB0eHRJbnB1dDogJycsXFxuICAgICAgICB0eHRDaGFuZ2U6ICcnXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBjb21wb25lbnRzOiB7XFxuICAgICAgcGFuZWw6IHJlcXVpcmUoJy4vaW5jbHVkZS9wYW5lbC52dWUnKVxcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgb25jaGFuZ2U6IGZ1bmN0aW9uKGV2ZW50KSB7XFxuICAgICAgICB0aGlzLnR4dENoYW5nZSA9IGV2ZW50LnZhbHVlO1xcbiAgICAgICAgbW9kYWwudG9hc3Qoe1xcbiAgICAgICAgICBtZXNzYWdlOiAnb25jaGFuZ2U6ICcgKyBldmVudC52YWx1ZSxcXG4gICAgICAgICAgZHVyYXRpb246IDJcXG4gICAgICAgIH0pXFxuICAgICAgfSxcXG4gICAgICBvbmlucHV0OiBmdW5jdGlvbihldmVudCkge1xcbiAgICAgICAgdGhpcy50eHRJbnB1dCA9IGV2ZW50LnZhbHVlO1xcbiAgICAgICAgbW9kYWwudG9hc3Qoe1xcbiAgICAgICAgICBtZXNzYWdlOiAnb25pdHB1dDogJyArIGV2ZW50LnZhbHVlLFxcbiAgICAgICAgICBkdXJhdGlvbjogMVxcbiAgICAgICAgfSlcXG4gICAgICB9XFxuICAgIH1cXG4gIH07XFxuPC9zY3JpcHQ+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvYWxpLTEzMDI1N24vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI1NTY4Y2YyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3Z1ZS9pbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDE2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4IiwiPHRlbXBsYXRlPlxuICA8c2Nyb2xsZXI+XG4gICAgPHBhbmVsIHRpdGxlPVwiaW5wdXRcIiB0eXBlPVwicHJpbWFyeVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUZXh0IElucHV0XCJcbiAgICAgICAgY2xhc3M9XCJpbnB1dFwiXG4gICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgQGNoYW5nZT1cIm9uY2hhbmdlXCJcbiAgICAgICAgQGlucHV0PVwib25pbnB1dFwiXG4gICAgICAvPlxuICAgICAgPHRleHQ+b25pbnB1dDoge3t0eHRJbnB1dH19PC90ZXh0PlxuICAgICAgPHRleHQ+b25jaGFuZ2U6IHt7dHh0Q2hhbmdlfX08L3RleHQ+XG4gICAgPC9wYW5lbD5cbiAgPC9zY3JvbGxlcj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLmlucHV0IHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgdmFyIG1vZGFsID0gd2VleC5yZXF1aXJlTW9kdWxlKCdtb2RhbCcpXG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR4dElucHV0OiAnJyxcbiAgICAgICAgdHh0Q2hhbmdlOiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgcGFuZWw6IHJlcXVpcmUoJy4vaW5jbHVkZS9wYW5lbC52dWUnKVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgb25jaGFuZ2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHRoaXMudHh0Q2hhbmdlID0gZXZlbnQudmFsdWU7XG4gICAgICAgIG1vZGFsLnRvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiAnb25jaGFuZ2U6ICcgKyBldmVudC52YWx1ZSxcbiAgICAgICAgICBkdXJhdGlvbjogMlxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIG9uaW5wdXQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHRoaXMudHh0SW5wdXQgPSBldmVudC52YWx1ZTtcbiAgICAgICAgbW9kYWwudG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6ICdvbml0cHV0OiAnICsgZXZlbnQudmFsdWUsXG4gICAgICAgICAgZHVyYXRpb246IDFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaW5wdXQudnVlPzY2MDk4MzNhIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWU5ZDcyY2Y2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYW5lbC52dWVcIilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhbmVsLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZTlkNzJjZjYhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFuZWwudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL3NyYy92dWUvaW5jbHVkZS9wYW5lbC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWU5ZDcyY2Y2XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWU5ZDcyY2Y2XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcGFuZWwudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdnVlL2luY2x1ZGUvcGFuZWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc2Nyb2xsZXInLCBbX2MoJ3BhbmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIlxuICAgIH1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiVGV4dCBJbnB1dFwiLFxuICAgICAgXCJ2YWx1ZVwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcIlwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLm9uY2hhbmdlLFxuICAgICAgXCJpbnB1dFwiOiBfdm0ub25pbnB1dFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0JywgW192bS5fdihcIm9uaW5wdXQ6IFwiICsgX3ZtLl9zKF92bS50eHRJbnB1dCkpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0JywgW192bS5fdihcIm9uY2hhbmdlOiBcIiArIF92bS5fcyhfdm0udHh0Q2hhbmdlKSldKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMjU1NjhjZjJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTI1NTY4Y2YyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdnVlL2lucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgiXSwic291cmNlUm9vdCI6IiJ9