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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _web = __webpack_require__(2);
	
	var _web2 = _interopRequireDefault(_web);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.weex && window.weex.install(_web2.default);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function webpackUniversalModuleDefinition(root, factory) {
	  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
	    var a = factory();
	    for (var i in a) {
	      ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' ? exports : root)[i] = a[i];
	    }
	  }
	})(undefined, function () {
	  return (/******/function (modules) {
	      // webpackBootstrap
	      /******/ // The module cache
	      /******/var installedModules = {};
	
	      /******/ // The require function
	      /******/function __webpack_require__(moduleId) {
	
	        /******/ // Check if module is in cache
	        /******/if (installedModules[moduleId])
	          /******/return installedModules[moduleId].exports;
	
	        /******/ // Create a new module (and put it into the cache)
	        /******/var module = installedModules[moduleId] = {
	          /******/i: moduleId,
	          /******/l: false,
	          /******/exports: {}
	          /******/ };
	
	        /******/ // Execute the module function
	        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	        /******/ // Flag the module as loaded
	        /******/module.l = true;
	
	        /******/ // Return the exports of the module
	        /******/return module.exports;
	        /******/
	      }
	
	      /******/ // expose the modules object (__webpack_modules__)
	      /******/__webpack_require__.m = modules;
	
	      /******/ // expose the module cache
	      /******/__webpack_require__.c = installedModules;
	
	      /******/ // identity function for calling harmony imports with the correct context
	      /******/__webpack_require__.i = function (value) {
	        return value;
	      };
	
	      /******/ // define getter function for harmony exports
	      /******/__webpack_require__.d = function (exports, name, getter) {
	        /******/if (!__webpack_require__.o(exports, name)) {
	          /******/Object.defineProperty(exports, name, {
	            /******/configurable: false,
	            /******/enumerable: true,
	            /******/get: getter
	            /******/ });
	          /******/
	        }
	        /******/
	      };
	
	      /******/ // getDefaultExport function for compatibility with non-harmony modules
	      /******/__webpack_require__.n = function (module) {
	        /******/var getter = module && module.__esModule ?
	        /******/function getDefault() {
	          return module['default'];
	        } :
	        /******/function getModuleExports() {
	          return module;
	        };
	        /******/__webpack_require__.d(getter, 'a', getter);
	        /******/return getter;
	        /******/
	      };
	
	      /******/ // Object.prototype.hasOwnProperty.call
	      /******/__webpack_require__.o = function (object, property) {
	        return Object.prototype.hasOwnProperty.call(object, property);
	      };
	
	      /******/ // __webpack_public_path__
	      /******/__webpack_require__.p = "";
	
	      /******/ // Load entry module and return exports
	      /******/return __webpack_require__(__webpack_require__.s = 15);
	      /******/
	    }(
	    /************************************************************************/
	    /******/[
	    /* 0 */
	    /***/function (module, exports) {
	
	      /*
	      	MIT License http://www.opensource.org/licenses/mit-license.php
	      	Author Tobias Koppers @sokra
	      */
	      // css base code, injected by the css-loader
	      module.exports = function () {
	        var list = [];
	
	        // return the list of modules as css string
	        list.toString = function toString() {
	          var result = [];
	          for (var i = 0; i < this.length; i++) {
	            var item = this[i];
	            if (item[2]) {
	              result.push("@media " + item[2] + "{" + item[1] + "}");
	            } else {
	              result.push(item[1]);
	            }
	          }
	          return result.join("");
	        };
	
	        // import a list of modules into the list
	        list.i = function (modules, mediaQuery) {
	          if (typeof modules === "string") modules = [[null, modules, ""]];
	          var alreadyImportedModules = {};
	          for (var i = 0; i < this.length; i++) {
	            var id = this[i][0];
	            if (typeof id === "number") alreadyImportedModules[id] = true;
	          }
	          for (i = 0; i < modules.length; i++) {
	            var item = modules[i];
	            // skip already imported module
	            // this implementation is not 100% perfect for weird media query combinations
	            //  when a module is imported multiple times with different media queries.
	            //  I hope this will never occur (Hey this way we have smaller bundles)
	            if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
	              if (mediaQuery && !item[2]) {
	                item[2] = mediaQuery;
	              } else if (mediaQuery) {
	                item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
	              }
	              list.push(item);
	            }
	          }
	        };
	        return list;
	      };
	
	      /***/
	    },
	    /* 1 */
	    /***/function (module, exports, __webpack_require__) {
	
	      "use strict";
	
	      Object.defineProperty(exports, "__esModule", {
	        value: true
	      });
	      exports.default = {
	        actionSheet: [{
	          name: 'create',
	          args: ['object', 'string']
	        }]
	      };
	
	      /***/
	    },
	    /* 2 */
	    /***/function (module, exports, __webpack_require__) {
	
	      "use strict";
	
	      Object.defineProperty(exports, "__esModule", {
	        value: true
	      });
	      var CANCEL_TYPE = 1;
	
	      exports.default = {
	        findCancel: function findCancel(arr) {
	          var flag = false;
	          for (var i = 0; i < arr.length; i++) {
	            if (arr[i].type === CANCEL_TYPE) {
	              flag = arr[i]['message'];
	            }
	          }
	          return flag;
	        },
	        filterData: function filterData(arr) {
	          var data = [];
	          arr.forEach(function (item) {
	            if (item.type !== CANCEL_TYPE) {
	              data.push(item);
	            }
	          });
	          return data;
	        }
	      };
	
	      /***/
	    },
	    /* 3 */
	    /***/function (module, exports, __webpack_require__) {
	
	      "use strict";
	
	      var _createClass = function () {
	        function defineProperties(target, props) {
	          for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	          }
	        }return function (Constructor, protoProps, staticProps) {
	          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	        };
	      }();
	
	      function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	          throw new TypeError("Cannot call a class as a function");
	        }
	      }
	
	      var GLOBAL_CLASS_PREFIX = 'as-';
	      var TYPE_WARNING = 2;
	
	      __webpack_require__(9);
	
	      var ActionSheet = function () {
	        function ActionSheet(opts) {
	          _classCallCheck(this, ActionSheet);
	
	          var options = opts.data();
	          this.clickHandle = options.callback;
	          var container = document.createElement('div');
	          container.className = 'as-container';
	          var dialog = this.createEle('dialog');
	          this.createTitle(options.title, options.message, dialog);
	          this.createList(options.items, dialog);
	          if (options.hasCancel) {
	            this.createCancelButton(dialog, options.hasCancel);
	          }
	          container.appendChild(dialog);
	          this.$el = container;
	        }
	
	        _createClass(ActionSheet, [{
	          key: 'createTitle',
	          value: function createTitle(title, message, container) {
	            var hd = this.createEle('hd');
	            hd.appendChild(this.createEle('title', title));
	            hd.appendChild(this.createEle('message', message));
	            container.appendChild(hd);
	          }
	        }, {
	          key: 'createEle',
	          value: function createEle(className, text) {
	            var el = document.createElement('div');
	            el.className = className ? GLOBAL_CLASS_PREFIX + className : '';
	            if (text) {
	              el.appendChild(document.createTextNode(text));
	            }
	            return el;
	          }
	        }, {
	          key: 'createList',
	          value: function createList(data, container) {
	            var _this = this;
	
	            data.forEach(function (item, index) {
	              var btn = _this.createEle('btn');
	              if (index === data.length - 1) {
	                btn.classList.add(GLOBAL_CLASS_PREFIX + 'btn-last');
	              }
	              var btnText = document.createElement('p');
	              btnText.className = GLOBAL_CLASS_PREFIX + 'btn-text';
	              btnText.appendChild(document.createTextNode(item.message));
	              if (item.type === TYPE_WARNING) {
	                btnText.classList.add(GLOBAL_CLASS_PREFIX + 'text-warn');
	              }
	              btn.appendChild(btnText);
	              _this.addEvent(btn, index, item.message);
	              container.appendChild(btn);
	            });
	          }
	        }, {
	          key: 'createCancelButton',
	          value: function createCancelButton(container, text) {
	            var _this2 = this;
	
	            var btn = this.createEle('btn');
	            btn.classList.add(GLOBAL_CLASS_PREFIX + 'cancel');
	            var btnText = document.createElement('p');
	            btnText.className = GLOBAL_CLASS_PREFIX + 'btn-text';
	            btnText.appendChild(document.createTextNode(text));
	            btn.appendChild(btnText);
	            btn.addEventListener('click', function () {
	              _this2.cancel();
	            }, false);
	            container.appendChild(btn);
	          }
	        }, {
	          key: 'addEvent',
	          value: function addEvent(btn, index, msg) {
	            var _this3 = this;
	
	            btn.addEventListener('click', function () {
	              console.log(index);
	              _this3.clickHandle({
	                result: 'success',
	                data: {
	                  message: msg,
	                  index: index
	                }
	              });
	              _this3.cancel();
	            }, false);
	          }
	        }, {
	          key: 'cancel',
	          value: function cancel() {
	            var el = document.querySelector('.as-container');
	            if (el) {
	              el.remove();
	            }
	          }
	        }]);
	
	        return ActionSheet;
	      }();
	
	      module.exports = ActionSheet;
	
	      /***/
	    },
	    /* 4 */
	    /***/function (module, exports, __webpack_require__) {
	
	      /* styles */
	      __webpack_require__(12);
	
	      var Component = __webpack_require__(10)(
	      /* script */
	      __webpack_require__(5),
	      /* template */
	      __webpack_require__(11),
	      /* scopeId */
	      null,
	      /* cssModules */
	      null);
	      Component.options.__file = "/Users/ali-130257n/www/weex-actionSheet/web/src/vue/action-sheet.vue";
	      if (Component.esModule && Object.keys(Component.esModule).some(function (key) {
	        return key !== "default" && key !== "__esModule";
	      })) {
	        console.error("named exports are not supported in *.vue files.");
	      }
	      if (Component.options.functional) {
	        console.error("[vue-loader] action-sheet.vue: functional components are not supported with templates, they should use render functions.");
	      }
	
	      /* hot reload */
	      if (false) {
	        (function () {
	          var hotAPI = require("vue-hot-reload-api");
	          hotAPI.install(require("vue"), false);
	          if (!hotAPI.compatible) return;
	          module.hot.accept();
	          if (!module.hot.data) {
	            hotAPI.createRecord("data-v-18fee04b", Component.options);
	          } else {
	            hotAPI.reload("data-v-18fee04b", Component.options);
	          }
	        })();
	      }
	
	      module.exports = Component.exports;
	
	      /***/
	    },
	    /* 5 */
	    /***/function (module, exports, __webpack_require__) {
	
	      "use strict";
	
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
	      //
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
	        data: function data() {
	          return {
	            message: 'your message',
	            title: 'title'
	          };
	        },
	
	        methods: {
	          cancel: function cancel() {
	            var el = document.querySelector('.as-container');
	            if (el) {
	              el.remove();
	            }
	          },
	          ok: function ok(index) {
	            this.callback({
	              result: 'success',
	              data: {
	                message: this.message,
	                index: index
	              }
	            });
	            this.cancel();
	          }
	        }
	      };
	
	      /***/
	    },
	    /* 6 */
	    /***/function (module, exports, __webpack_require__) {
	
	      exports = module.exports = __webpack_require__(0)();
	      // imports
	
	
	      // module
	      exports.push([module.i, "\n.as-container{\n  flex:1;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,.5);\n}\n.as-dialog{\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  bottom: 10px;\n  padding: 20px;\n}\n.as-hd{\n  padding: 20px 0;\n  background-color: #fff;\n  align-items: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.as-title{\n  font-size: 26px;\n  margin-bottom: 15px;\n}\n.as-message{\n  font-size: 24px;\n}\n.as-btn{\n  font-size: 30px;\n  padding: 30px 0;\n  background-color: #fff;\n  border-top: 1px solid #ddd;\n}\n.as-btn-text{\n  flex:1;\n  text-align: center;\n  color: #1ba1e2;\n}\n.as-btn-last{\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n}\n.as-text-warn{\n  color: red;\n}\n.as-cancel{\n  margin-top: 30px;\n  border-radius: 15px;\n}\n", ""]);
	
	      // exports
	
	
	      /***/
	    },
	    /* 7 */
	    /***/function (module, exports, __webpack_require__) {
	
	      exports = module.exports = __webpack_require__(0)();
	      // imports
	
	
	      // module
	      exports.push([module.i, ".as-container{\n    flex:1;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,.5);  \n  }\n  .as-dialog{\n    position: absolute;\n    left: 10px;\n    right: 10px;\n    bottom: 10px;\n    padding: 20px;\n    \n  }\n  .as-hd{\n    padding: 20px 0;\n    background-color: #fff;\n    align-items: center;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n    text-align: center;\n  }\n  .as-title{\n    font-size: 26px;\n    margin-bottom: 15px;\n    \n  }\n  .as-message{\n    font-size: 24px;\n  }\n  .as-btn{\n    font-size: 30px;\n    padding: 30px 0;\n    background-color: #fff;\n    border-top: 1px solid #ddd;\n    \n  }\n  .as-btn-text{\n    flex:1;\n    text-align: center;\n    color: #1ba1e2;\n  }\n  .as-btn-last{\n    border-bottom-right-radius: 15px;\n    border-bottom-left-radius: 15px;\n  }\n  .as-text-warn{\n    color: red;\n  }\n  .as-cancel{\n    margin-top: 30px;\n    border-radius: 15px;\n  }", ""]);
	
	      // exports
	
	
	      /***/
	    },
	    /* 8 */
	    /***/function (module, exports) {
	
	      /*
	      	MIT License http://www.opensource.org/licenses/mit-license.php
	      	Author Tobias Koppers @sokra
	      */
	      var stylesInDom = {},
	          memoize = function memoize(fn) {
	        var memo;
	        return function () {
	          if (typeof memo === "undefined") memo = fn.apply(this, arguments);
	          return memo;
	        };
	      },
	          isOldIE = memoize(function () {
	        return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
	        );
	      }),
	          getHeadElement = memoize(function () {
	        return document.head || document.getElementsByTagName("head")[0];
	      }),
	          singletonElement = null,
	          singletonCounter = 0,
	          styleElementsInsertedAtTop = [];
	
	      module.exports = function (list, options) {
	        if (false) {
	          if ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
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
	          for (var i = 0; i < styles.length; i++) {
	            var item = styles[i];
	            var domStyle = stylesInDom[item.id];
	            domStyle.refs--;
	            mayRemove.push(domStyle);
	          }
	          if (newList) {
	            var newStyles = listToStyles(newList);
	            addStylesToDom(newStyles, options);
	          }
	          for (var i = 0; i < mayRemove.length; i++) {
	            var domStyle = mayRemove[i];
	            if (domStyle.refs === 0) {
	              for (var j = 0; j < domStyle.parts.length; j++) {
	                domStyle.parts[j]();
	              }delete stylesInDom[domStyle.id];
	            }
	          }
	        };
	      };
	
	      function addStylesToDom(styles, options) {
	        for (var i = 0; i < styles.length; i++) {
	          var item = styles[i];
	          var domStyle = stylesInDom[item.id];
	          if (domStyle) {
	            domStyle.refs++;
	            for (var j = 0; j < domStyle.parts.length; j++) {
	              domStyle.parts[j](item.parts[j]);
	            }
	            for (; j < item.parts.length; j++) {
	              domStyle.parts.push(addStyle(item.parts[j], options));
	            }
	          } else {
	            var parts = [];
	            for (var j = 0; j < item.parts.length; j++) {
	              parts.push(addStyle(item.parts[j], options));
	            }
	            stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
	          }
	        }
	      }
	
	      function listToStyles(list) {
	        var styles = [];
	        var newStyles = {};
	        for (var i = 0; i < list.length; i++) {
	          var item = list[i];
	          var id = item[0];
	          var css = item[1];
	          var media = item[2];
	          var sourceMap = item[3];
	          var part = { css: css, media: media, sourceMap: sourceMap };
	          if (!newStyles[id]) styles.push(newStyles[id] = { id: id, parts: [part] });else newStyles[id].parts.push(part);
	        }
	        return styles;
	      }
	
	      function insertStyleElement(options, styleElement) {
	        var head = getHeadElement();
	        var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	        if (options.insertAt === "top") {
	          if (!lastStyleElementInsertedAtTop) {
	            head.insertBefore(styleElement, head.firstChild);
	          } else if (lastStyleElementInsertedAtTop.nextSibling) {
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
	        if (idx >= 0) {
	          styleElementsInsertedAtTop.splice(idx, 1);
	        }
	      }
	
	      function createStyleElement(options) {
	        var styleElement = document.createElement("style");
	        styleElement.type = "text/css";
	        insertStyleElement(options, styleElement);
	        return styleElement;
	      }
	
	      function createLinkElement(options) {
	        var linkElement = document.createElement("link");
	        linkElement.rel = "stylesheet";
	        insertStyleElement(options, linkElement);
	        return linkElement;
	      }
	
	      function addStyle(obj, options) {
	        var styleElement, update, remove;
	
	        if (options.singleton) {
	          var styleIndex = singletonCounter++;
	          styleElement = singletonElement || (singletonElement = createStyleElement(options));
	          update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
	          remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	        } else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
	          styleElement = createLinkElement(options);
	          update = updateLink.bind(null, styleElement);
	          remove = function remove() {
	            removeStyleElement(styleElement);
	            if (styleElement.href) URL.revokeObjectURL(styleElement.href);
	          };
	        } else {
	          styleElement = createStyleElement(options);
	          update = applyToTag.bind(null, styleElement);
	          remove = function remove() {
	            removeStyleElement(styleElement);
	          };
	        }
	
	        update(obj);
	
	        return function updateStyle(newObj) {
	          if (newObj) {
	            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
	            update(obj = newObj);
	          } else {
	            remove();
	          }
	        };
	      }
	
	      var replaceText = function () {
	        var textStore = [];
	
	        return function (index, replacement) {
	          textStore[index] = replacement;
	          return textStore.filter(Boolean).join('\n');
	        };
	      }();
	
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
	
	        if (media) {
	          styleElement.setAttribute("media", media);
	        }
	
	        if (styleElement.styleSheet) {
	          styleElement.styleSheet.cssText = css;
	        } else {
	          while (styleElement.firstChild) {
	            styleElement.removeChild(styleElement.firstChild);
	          }
	          styleElement.appendChild(document.createTextNode(css));
	        }
	      }
	
	      function updateLink(linkElement, obj) {
	        var css = obj.css;
	        var sourceMap = obj.sourceMap;
	
	        if (sourceMap) {
	          // http://stackoverflow.com/a/26603875
	          css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	        }
	
	        var blob = new Blob([css], { type: "text/css" });
	
	        var oldSrc = linkElement.href;
	
	        linkElement.href = URL.createObjectURL(blob);
	
	        if (oldSrc) URL.revokeObjectURL(oldSrc);
	      }
	
	      /***/
	    },
	    /* 9 */
	    /***/function (module, exports, __webpack_require__) {
	
	      // style-loader: Adds some css to the DOM by adding a <style> tag
	
	      // load the styles
	      var content = __webpack_require__(7);
	      if (typeof content === 'string') content = [[module.i, content, '']];
	      // add the styles to the DOM
	      var update = __webpack_require__(8)(content, {});
	      if (content.locals) module.exports = content.locals;
	      // Hot Module Replacement
	      if (false) {
	        // When the styles change, update the <style> tags
	        if (!content.locals) {
	          module.hot.accept("!!./../../../node_modules/css-loader/index.js!./style.css", function () {
	            var newContent = require("!!./../../../node_modules/css-loader/index.js!./style.css");
	            if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	            update(newContent);
	          });
	        }
	        // When the module is disposed, remove the <style> tags
	        module.hot.dispose(function () {
	          update();
	        });
	      }
	
	      /***/
	    },
	    /* 10 */
	    /***/function (module, exports) {
	
	      module.exports = function normalizeComponent(rawScriptExports, compiledTemplate, scopeId, cssModules) {
	        var esModule;
	        var scriptExports = rawScriptExports = rawScriptExports || {};
	
	        // ES6 modules interop
	        var type = _typeof(rawScriptExports.default);
	        if (type === 'object' || type === 'function') {
	          esModule = rawScriptExports;
	          scriptExports = rawScriptExports.default;
	        }
	
	        // Vue.extend constructor export interop
	        var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
	
	        // render functions
	        if (compiledTemplate) {
	          options.render = compiledTemplate.render;
	          options.staticRenderFns = compiledTemplate.staticRenderFns;
	        }
	
	        // scopedId
	        if (scopeId) {
	          options._scopeId = scopeId;
	        }
	
	        // inject cssModules
	        if (cssModules) {
	          var computed = options.computed || (options.computed = {});
	          Object.keys(cssModules).forEach(function (key) {
	            var module = cssModules[key];
	            computed[key] = function () {
	              return module;
	            };
	          });
	        }
	
	        return {
	          esModule: esModule,
	          exports: scriptExports,
	          options: options
	        };
	      };
	
	      /***/
	    },
	    /* 11 */
	    /***/function (module, exports, __webpack_require__) {
	
	      module.exports = { render: function render() {
	          var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
	          return _c('div', {
	            staticClass: "as-container"
	          }, [_c('div', {
	            staticClass: "as-dialog"
	          }, [_c('div', {
	            staticClass: "as-hd"
	          }, [_c('div', {
	            staticClass: "as-title"
	          }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
	            staticClass: "as-message"
	          }, [_vm._v(_vm._s(_vm.message))])]), _vm._v(" "), _vm._l(_vm.items, function (item, index) {
	            return _c('div', {
	              staticClass: "as-btn",
	              class: {
	                'as-btn-last': index == _vm.items.length - 1
	              },
	              on: {
	                "click": function click($event) {
	                  _vm.ok(index);
	                }
	              }
	            }, [_c('text', {
	              staticClass: "as-btn-text",
	              class: {
	                'as-text-warn': item.type == 2
	              }
	            }, [_vm._v(_vm._s(item.message))])]);
	          }), _vm._v(" "), _vm.hasCancel ? _c('div', {
	            staticClass: "as-btn as-cancel",
	            on: {
	              "click": _vm.cancel
	            }
	          }, [_c('text', {
	            staticClass: "as-btn-text"
	          }, [_vm._v("取消")])]) : _vm._e()], 2)]);
	        }, staticRenderFns: [] };
	      module.exports.render._withStripped = true;
	      if (false) {
	        module.hot.accept();
	        if (module.hot.data) {
	          require("vue-hot-reload-api").rerender("data-v-18fee04b", module.exports);
	        }
	      }
	
	      /***/
	    },
	    /* 12 */
	    /***/function (module, exports, __webpack_require__) {
	
	      // style-loader: Adds some css to the DOM by adding a <style> tag
	
	      // load the styles
	      var content = __webpack_require__(6);
	      if (typeof content === 'string') content = [[module.i, content, '']];
	      if (content.locals) module.exports = content.locals;
	      // add the styles to the DOM
	      var update = __webpack_require__(13)("188935cc", content, false);
	      // Hot Module Replacement
	      if (false) {
	        // When the styles change, update the <style> tags
	        if (!content.locals) {
	          module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-18fee04b!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./action-sheet.vue", function () {
	            var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-18fee04b!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./action-sheet.vue");
	            if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	            update(newContent);
	          });
	        }
	        // When the module is disposed, remove the <style> tags
	        module.hot.dispose(function () {
	          update();
	        });
	      }
	
	      /***/
	    },
	    /* 13 */
	    /***/function (module, exports, __webpack_require__) {
	
	      /*
	        MIT License http://www.opensource.org/licenses/mit-license.php
	        Author Tobias Koppers @sokra
	        Modified by Evan You @yyx990803
	      */
	
	      var hasDocument = typeof document !== 'undefined';
	
	      if (false) {
	        if (!hasDocument) {
	          throw new Error('vue-style-loader cannot be used in a non-browser environment. ' + "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
	        }
	      }
	
	      var listToStyles = __webpack_require__(14);
	
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
	                         */};
	
	      var head = hasDocument && (document.head || document.getElementsByTagName('head')[0]);
	      var singletonElement = null;
	      var singletonCounter = 0;
	      var isProduction = false;
	      var noop = function noop() {};
	
	      // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	      // tags it will allow on a page
	      var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
	
	      module.exports = function (parentId, list, _isProduction) {
	        isProduction = _isProduction;
	
	        var styles = listToStyles(parentId, list);
	        addStylesToDom(styles);
	
	        return function update(newList) {
	          var mayRemove = [];
	          for (var i = 0; i < styles.length; i++) {
	            var item = styles[i];
	            var domStyle = stylesInDom[item.id];
	            domStyle.refs--;
	            mayRemove.push(domStyle);
	          }
	          if (newList) {
	            styles = listToStyles(parentId, newList);
	            addStylesToDom(styles);
	          } else {
	            styles = [];
	          }
	          for (var i = 0; i < mayRemove.length; i++) {
	            var domStyle = mayRemove[i];
	            if (domStyle.refs === 0) {
	              for (var j = 0; j < domStyle.parts.length; j++) {
	                domStyle.parts[j]();
	              }
	              delete stylesInDom[domStyle.id];
	            }
	          }
	        };
	      };
	
	      function addStylesToDom(styles /* Array<StyleObject> */) {
	        for (var i = 0; i < styles.length; i++) {
	          var item = styles[i];
	          var domStyle = stylesInDom[item.id];
	          if (domStyle) {
	            domStyle.refs++;
	            for (var j = 0; j < domStyle.parts.length; j++) {
	              domStyle.parts[j](item.parts[j]);
	            }
	            for (; j < item.parts.length; j++) {
	              domStyle.parts.push(addStyle(item.parts[j]));
	            }
	            if (domStyle.parts.length > item.parts.length) {
	              domStyle.parts.length = item.parts.length;
	            }
	          } else {
	            var parts = [];
	            for (var j = 0; j < item.parts.length; j++) {
	              parts.push(addStyle(item.parts[j]));
	            }
	            stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
	          }
	        }
	      }
	
	      function listToStyles(parentId, list) {
	        var styles = [];
	        var newStyles = {};
	        for (var i = 0; i < list.length; i++) {
	          var item = list[i];
	          var id = item[0];
	          var css = item[1];
	          var media = item[2];
	          var sourceMap = item[3];
	          var part = { css: css, media: media, sourceMap: sourceMap };
	          if (!newStyles[id]) {
	            part.id = parentId + ':0';
	            styles.push(newStyles[id] = { id: id, parts: [part] });
	          } else {
	            part.id = parentId + ':' + newStyles[id].parts.length;
	            newStyles[id].parts.push(part);
	          }
	        }
	        return styles;
	      }
	
	      function createStyleElement() {
	        var styleElement = document.createElement('style');
	        styleElement.type = 'text/css';
	        head.appendChild(styleElement);
	        return styleElement;
	      }
	
	      function addStyle(obj /* StyleObjectPart */) {
	        var update, remove;
	        var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]');
	        var hasSSR = styleElement != null;
	
	        // if in production mode and style is already provided by SSR,
	        // simply do nothing.
	        if (hasSSR && isProduction) {
	          return noop;
	        }
	
	        if (isOldIE) {
	          // use singleton mode for IE9.
	          var styleIndex = singletonCounter++;
	          styleElement = singletonElement || (singletonElement = createStyleElement());
	          update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
	          remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	        } else {
	          // use multi-style-tag mode in all other cases
	          styleElement = styleElement || createStyleElement();
	          update = applyToTag.bind(null, styleElement);
	          remove = function remove() {
	            styleElement.parentNode.removeChild(styleElement);
	          };
	        }
	
	        if (!hasSSR) {
	          update(obj);
	        }
	
	        return function updateStyle(newObj /* StyleObjectPart */) {
	          if (newObj) {
	            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
	              return;
	            }
	            update(obj = newObj);
	          } else {
	            remove();
	          }
	        };
	      }
	
	      var replaceText = function () {
	        var textStore = [];
	
	        return function (index, replacement) {
	          textStore[index] = replacement;
	          return textStore.filter(Boolean).join('\n');
	        };
	      }();
	
	      function applyToSingletonTag(styleElement, index, remove, obj) {
	        var css = remove ? '' : obj.css;
	
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
	          styleElement.setAttribute('media', media);
	        }
	
	        if (sourceMap) {
	          // https://developer.chrome.com/devtools/docs/javascript-debugging
	          // this makes source maps inside style tags work properly in Chrome
	          css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
	          // http://stackoverflow.com/a/26603875
	          css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
	        }
	
	        if (styleElement.styleSheet) {
	          styleElement.styleSheet.cssText = css;
	        } else {
	          while (styleElement.firstChild) {
	            styleElement.removeChild(styleElement.firstChild);
	          }
	          styleElement.appendChild(document.createTextNode(css));
	        }
	      }
	
	      /***/
	    },
	    /* 14 */
	    /***/function (module, exports) {
	
	      /**
	       * Translates the list format produced by css-loader into something
	       * easier to manipulate.
	       */
	      module.exports = function listToStyles(parentId, list) {
	        var styles = [];
	        var newStyles = {};
	        for (var i = 0; i < list.length; i++) {
	          var item = list[i];
	          var id = item[0];
	          var css = item[1];
	          var media = item[2];
	          var sourceMap = item[3];
	          var part = {
	            id: parentId + ':' + i,
	            css: css,
	            media: media,
	            sourceMap: sourceMap
	          };
	          if (!newStyles[id]) {
	            styles.push(newStyles[id] = { id: id, parts: [part] });
	          } else {
	            newStyles[id].parts.push(part);
	          }
	        }
	        return styles;
	      };
	
	      /***/
	    },
	    /* 15 */
	    /***/function (module, exports, __webpack_require__) {
	
	      "use strict";
	
	      var _actionSheet = __webpack_require__(4);
	
	      var _actionSheet2 = _interopRequireDefault(_actionSheet);
	
	      var _actionSheet3 = __webpack_require__(3);
	
	      var _actionSheet4 = _interopRequireDefault(_actionSheet3);
	
	      var _meta = __webpack_require__(1);
	
	      var _meta2 = _interopRequireDefault(_meta);
	
	      var _vendor = __webpack_require__(2);
	
	      var _vendor2 = _interopRequireDefault(_vendor);
	
	      function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : { default: obj };
	      }
	
	      // weex-actionSheet-web
	      var actionSheet = {
	        create: function create(options, callbackID) {
	          var _this = this;
	
	          var defaultOPtions = {
	            title: '提示',
	            message: '',
	            items: [],
	            callback: function callback() {},
	            hasCancel: true
	          };
	
	          var opts = Object.assign({}, defaultOPtions, options);
	          if (opts.items.length > 1) {
	            opts.hasCancel = _vendor2.default.findCancel(options.items);
	            opts.items = _vendor2.default.filterData(options.items);
	          }
	          if (typeof callbackID === 'function') {
	            (function () {
	              var self = _this;
	              opts.callback = function (res) {
	                self.sender.performCallback(callbackID, res);
	              };
	            })();
	          }
	          var ActionSheet = null;
	          console.log(window.vue);
	          if (window.vue) {
	
	            ActionSheet = Vue.extend(_actionSheet2.default);
	          } else {
	            ActionSheet = _actionSheet4.default;
	          }
	          var vueActionSheetInstance = new ActionSheet({
	            el: document.createElement('div'),
	            data: function data() {
	              return opts;
	            }
	          });
	          document.body.appendChild(vueActionSheetInstance.$el);
	        }
	      };
	
	      function init(weex) {
	        weex.registerApiModule('actionSheet', actionSheet, _meta2.default);
	      }
	
	      module.exports = {
	        init: init
	      };
	
	      /***/
	    }])
	  );
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Init weex instance depending on the url params.
	 * There are three ways to load weex bundles, depends on the
	 * parameter 'loader' in the url:
	 *
	 *   + xhr: use XMLHttpRequest. Parameter 'page' should be
	 *   the bundle's url.
	 *   + source: use the transformed code itself. 'page' should
	 *   be the transformed weex bundle.
	 *
	 * @param {String} bundle - It has different meaning depends on
	 *   the type of loader.
	 */
	
	(function () {
	  function getUrlParam(key) {
	    var reg = new RegExp('[?|&]' + key + '=([^&]+)');
	    var match = location.search.match(reg);
	    return match && match[1];
	  }
	  var loader = getUrlParam('loader') || 'xhr';
	  var page = getUrlParam('page') || './dist/index.min.js';
	  window.weex.init({
	    appId: location.href,
	    loader: loader,
	    source: page,
	    rootId: 'weex'
	  });
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDBjMWU2YjFhZDJjMjMxM2MxMmYiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9wbHVnaW5fYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1hY3Rpb25TaGVldC93ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvanMvaW5pdC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJ3ZWV4IiwiaW5zdGFsbCIsIndlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiYSIsImkiLCJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImwiLCJjYWxsIiwibSIsImMiLCJ2YWx1ZSIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsIm4iLCJfX2VzTW9kdWxlIiwiZ2V0RGVmYXVsdCIsImdldE1vZHVsZUV4cG9ydHMiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJsaXN0IiwidG9TdHJpbmciLCJyZXN1bHQiLCJsZW5ndGgiLCJpdGVtIiwicHVzaCIsImpvaW4iLCJtZWRpYVF1ZXJ5IiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImlkIiwiZGVmYXVsdCIsImFjdGlvblNoZWV0IiwiYXJncyIsIkNBTkNFTF9UWVBFIiwiZmluZENhbmNlbCIsImFyciIsImZsYWciLCJ0eXBlIiwiZmlsdGVyRGF0YSIsImRhdGEiLCJmb3JFYWNoIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiZGVzY3JpcHRvciIsIndyaXRhYmxlIiwia2V5IiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIlR5cGVFcnJvciIsIkdMT0JBTF9DTEFTU19QUkVGSVgiLCJUWVBFX1dBUk5JTkciLCJBY3Rpb25TaGVldCIsIm9wdHMiLCJvcHRpb25zIiwiY2xpY2tIYW5kbGUiLCJjYWxsYmFjayIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRpYWxvZyIsImNyZWF0ZUVsZSIsImNyZWF0ZVRpdGxlIiwidGl0bGUiLCJtZXNzYWdlIiwiY3JlYXRlTGlzdCIsIml0ZW1zIiwiaGFzQ2FuY2VsIiwiY3JlYXRlQ2FuY2VsQnV0dG9uIiwiYXBwZW5kQ2hpbGQiLCIkZWwiLCJoZCIsInRleHQiLCJlbCIsImNyZWF0ZVRleHROb2RlIiwiX3RoaXMiLCJpbmRleCIsImJ0biIsImNsYXNzTGlzdCIsImFkZCIsImJ0blRleHQiLCJhZGRFdmVudCIsIl90aGlzMiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW5jZWwiLCJtc2ciLCJfdGhpczMiLCJjb25zb2xlIiwibG9nIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsIkNvbXBvbmVudCIsIl9fZmlsZSIsImVzTW9kdWxlIiwia2V5cyIsInNvbWUiLCJlcnJvciIsImZ1bmN0aW9uYWwiLCJob3RBUEkiLCJyZXF1aXJlIiwiY29tcGF0aWJsZSIsImhvdCIsImFjY2VwdCIsImNyZWF0ZVJlY29yZCIsInJlbG9hZCIsIm1ldGhvZHMiLCJvayIsInN0eWxlc0luRG9tIiwibWVtb2l6ZSIsImZuIiwibWVtbyIsImFwcGx5IiwiYXJndW1lbnRzIiwiaXNPbGRJRSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImdldEhlYWRFbGVtZW50IiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2luZ2xldG9uRWxlbWVudCIsInNpbmdsZXRvbkNvdW50ZXIiLCJzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCIsIkVycm9yIiwic2luZ2xldG9uIiwiaW5zZXJ0QXQiLCJzdHlsZXMiLCJsaXN0VG9TdHlsZXMiLCJhZGRTdHlsZXNUb0RvbSIsInVwZGF0ZSIsIm5ld0xpc3QiLCJtYXlSZW1vdmUiLCJkb21TdHlsZSIsInJlZnMiLCJuZXdTdHlsZXMiLCJqIiwicGFydHMiLCJhZGRTdHlsZSIsImNzcyIsIm1lZGlhIiwic291cmNlTWFwIiwicGFydCIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlRWxlbWVudCIsImxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwicmVtb3ZlU3R5bGVFbGVtZW50IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiaWR4IiwiaW5kZXhPZiIsInNwbGljZSIsImNyZWF0ZVN0eWxlRWxlbWVudCIsImNyZWF0ZUxpbmtFbGVtZW50IiwibGlua0VsZW1lbnQiLCJyZWwiLCJvYmoiLCJzdHlsZUluZGV4IiwiYXBwbHlUb1NpbmdsZXRvblRhZyIsImJpbmQiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJCbG9iIiwiYnRvYSIsInVwZGF0ZUxpbmsiLCJocmVmIiwiYXBwbHlUb1RhZyIsInVwZGF0ZVN0eWxlIiwibmV3T2JqIiwicmVwbGFjZVRleHQiLCJ0ZXh0U3RvcmUiLCJyZXBsYWNlbWVudCIsImZpbHRlciIsIkJvb2xlYW4iLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImNzc05vZGUiLCJjaGlsZE5vZGVzIiwic2V0QXR0cmlidXRlIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiYmxvYiIsIm9sZFNyYyIsImNvbnRlbnQiLCJsb2NhbHMiLCJuZXdDb250ZW50IiwiZGlzcG9zZSIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsInJhd1NjcmlwdEV4cG9ydHMiLCJjb21waWxlZFRlbXBsYXRlIiwic2NvcGVJZCIsImNzc01vZHVsZXMiLCJzY3JpcHRFeHBvcnRzIiwicmVuZGVyIiwic3RhdGljUmVuZGVyRm5zIiwiX3Njb3BlSWQiLCJjb21wdXRlZCIsIl92bSIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJfdiIsIl9zIiwiX2wiLCJjbGFzcyIsIm9uIiwiJGV2ZW50IiwiX2UiLCJfd2l0aFN0cmlwcGVkIiwicmVyZW5kZXIiLCJoYXNEb2N1bWVudCIsImlzUHJvZHVjdGlvbiIsIm5vb3AiLCJwYXJlbnRJZCIsIl9pc1Byb2R1Y3Rpb24iLCJoYXNTU1IiLCJzb3VyY2VzIiwiX2FjdGlvblNoZWV0IiwiX2FjdGlvblNoZWV0MiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfYWN0aW9uU2hlZXQzIiwiX2FjdGlvblNoZWV0NCIsIl9tZXRhIiwiX21ldGEyIiwiX3ZlbmRvciIsIl92ZW5kb3IyIiwiY3JlYXRlIiwiY2FsbGJhY2tJRCIsImRlZmF1bHRPUHRpb25zIiwiYXNzaWduIiwic2VsZiIsInJlcyIsInNlbmRlciIsInBlcmZvcm1DYWxsYmFjayIsInZ1ZSIsIlZ1ZSIsImV4dGVuZCIsInZ1ZUFjdGlvblNoZWV0SW5zdGFuY2UiLCJib2R5IiwiaW5pdCIsInJlZ2lzdGVyQXBpTW9kdWxlIiwiZ2V0VXJsUGFyYW0iLCJyZWciLCJSZWdFeHAiLCJtYXRjaCIsImxvY2F0aW9uIiwic2VhcmNoIiwibG9hZGVyIiwicGFnZSIsImFwcElkIiwic291cmNlIiwicm9vdElkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0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QU9QLFlBQVksTUFBWixLQUF1QixrQkFBbEM7QUFDQWhSLFVBQU9DLElBQVAsQ0FBWTZRLElBQVosQ0FBaUI7QUFDZlUsWUFBT0osU0FBU3BGLElBREQ7QUFFYnNGLGFBQVFBLE1BRks7QUFHYkcsYUFBUUYsSUFISztBQUliRyxhQUFRO0FBSkssSUFBakI7QUFNRCxFQWRELEkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0MGMxZTZiMWFkMmMyMzEzYzEyZiIsImltcG9ydCBhY3Rpb25TaGVldCBmcm9tIFwiL1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hY3Rpb25zaGVldGRlbW8vcGx1Z2lucy93ZWV4LWFjdGlvblNoZWV0L3dlYlwiO1xyXG53aW5kb3cud2VleCAmJiB3aW5kb3cud2VleC5pbnN0YWxsKGFjdGlvblNoZWV0KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3BsdWdpbl9idW5kbGUuanMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG5cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcblxuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1KTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgYWN0aW9uU2hlZXQ6IFt7XG4gICAgbmFtZTogJ2NyZWF0ZScsXG4gICAgYXJnczogWydvYmplY3QnLCAnc3RyaW5nJ11cbiAgfV1cbn07XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIENBTkNFTF9UWVBFID0gMTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBmaW5kQ2FuY2VsOiBmdW5jdGlvbiBmaW5kQ2FuY2VsKGFycikge1xuICAgIHZhciBmbGFnID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJbaV0udHlwZSA9PT0gQ0FOQ0VMX1RZUEUpIHtcbiAgICAgICAgZmxhZyA9IGFycltpXVsnbWVzc2FnZSddO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmxhZztcbiAgfSxcbiAgZmlsdGVyRGF0YTogZnVuY3Rpb24gZmlsdGVyRGF0YShhcnIpIHtcbiAgICB2YXIgZGF0YSA9IFtdO1xuICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBpZiAoaXRlbS50eXBlICE9PSBDQU5DRUxfVFlQRSkge1xuICAgICAgICBkYXRhLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn07XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgR0xPQkFMX0NMQVNTX1BSRUZJWCA9ICdhcy0nO1xudmFyIFRZUEVfV0FSTklORyA9IDI7XG5cbl9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cbnZhciBBY3Rpb25TaGVldCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQWN0aW9uU2hlZXQob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb25TaGVldCk7XG5cbiAgICB2YXIgb3B0aW9ucyA9IG9wdHMuZGF0YSgpO1xuICAgIHRoaXMuY2xpY2tIYW5kbGUgPSBvcHRpb25zLmNhbGxiYWNrO1xuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2FzLWNvbnRhaW5lcic7XG4gICAgdmFyIGRpYWxvZyA9IHRoaXMuY3JlYXRlRWxlKCdkaWFsb2cnKTtcbiAgICB0aGlzLmNyZWF0ZVRpdGxlKG9wdGlvbnMudGl0bGUsIG9wdGlvbnMubWVzc2FnZSwgZGlhbG9nKTtcbiAgICB0aGlzLmNyZWF0ZUxpc3Qob3B0aW9ucy5pdGVtcywgZGlhbG9nKTtcbiAgICBpZiAob3B0aW9ucy5oYXNDYW5jZWwpIHtcbiAgICAgIHRoaXMuY3JlYXRlQ2FuY2VsQnV0dG9uKGRpYWxvZywgb3B0aW9ucy5oYXNDYW5jZWwpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbiAgICB0aGlzLiRlbCA9IGNvbnRhaW5lcjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBY3Rpb25TaGVldCwgW3tcbiAgICBrZXk6ICdjcmVhdGVUaXRsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHRpdGxlLCBtZXNzYWdlLCBjb250YWluZXIpIHtcbiAgICAgIHZhciBoZCA9IHRoaXMuY3JlYXRlRWxlKCdoZCcpO1xuICAgICAgaGQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGUoJ3RpdGxlJywgdGl0bGUpKTtcbiAgICAgIGhkLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlKCdtZXNzYWdlJywgbWVzc2FnZSkpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVFbGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFbGUoY2xhc3NOYW1lLCB0ZXh0KSB7XG4gICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZSA/IEdMT0JBTF9DTEFTU19QUkVGSVggKyBjbGFzc05hbWUgOiAnJztcbiAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVMaXN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTGlzdChkYXRhLCBjb250YWluZXIpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGJ0biA9IF90aGlzLmNyZWF0ZUVsZSgnYnRuJyk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gZGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoR0xPQkFMX0NMQVNTX1BSRUZJWCArICdidG4tbGFzdCcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBidG5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBidG5UZXh0LmNsYXNzTmFtZSA9IEdMT0JBTF9DTEFTU19QUkVGSVggKyAnYnRuLXRleHQnO1xuICAgICAgICBidG5UZXh0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGl0ZW0ubWVzc2FnZSkpO1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSBUWVBFX1dBUk5JTkcpIHtcbiAgICAgICAgICBidG5UZXh0LmNsYXNzTGlzdC5hZGQoR0xPQkFMX0NMQVNTX1BSRUZJWCArICd0ZXh0LXdhcm4nKTtcbiAgICAgICAgfVxuICAgICAgICBidG4uYXBwZW5kQ2hpbGQoYnRuVGV4dCk7XG4gICAgICAgIF90aGlzLmFkZEV2ZW50KGJ0biwgaW5kZXgsIGl0ZW0ubWVzc2FnZSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlQ2FuY2VsQnV0dG9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQ2FuY2VsQnV0dG9uKGNvbnRhaW5lciwgdGV4dCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBidG4gPSB0aGlzLmNyZWF0ZUVsZSgnYnRuJyk7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChHTE9CQUxfQ0xBU1NfUFJFRklYICsgJ2NhbmNlbCcpO1xuICAgICAgdmFyIGJ0blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBidG5UZXh0LmNsYXNzTmFtZSA9IEdMT0JBTF9DTEFTU19QUkVGSVggKyAnYnRuLXRleHQnO1xuICAgICAgYnRuVGV4dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSk7XG4gICAgICBidG4uYXBwZW5kQ2hpbGQoYnRuVGV4dCk7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5jYW5jZWwoKTtcbiAgICAgIH0sIGZhbHNlKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZEV2ZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnQoYnRuLCBpbmRleCwgbXNnKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgIF90aGlzMy5jbGlja0hhbmRsZSh7XG4gICAgICAgICAgcmVzdWx0OiAnc3VjY2VzcycsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbWVzc2FnZTogbXNnLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMzLmNhbmNlbCgpO1xuICAgICAgfSwgZmFsc2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhbmNlbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcy1jb250YWluZXInKTtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICBlbC5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQWN0aW9uU2hlZXQ7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0aW9uU2hlZXQ7XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cbi8qIHN0eWxlcyAqL1xuX193ZWJwYWNrX3JlcXVpcmVfXygxMilcblxudmFyIENvbXBvbmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApKFxuICAvKiBzY3JpcHQgKi9cbiAgX193ZWJwYWNrX3JlcXVpcmVfXyg1KSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgX193ZWJwYWNrX3JlcXVpcmVfXygxMSksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9hbGktMTMwMjU3bi93d3cvd2VleC1hY3Rpb25TaGVldC93ZWIvc3JjL3Z1ZS9hY3Rpb24tc2hlZXQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYWN0aW9uLXNoZWV0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChmYWxzZSkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMThmZWUwNGJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xOGZlZTA0YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiAneW91ciBtZXNzYWdlJyxcbiAgICAgIHRpdGxlOiAndGl0bGUnXG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2FuY2VsOiBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXMtY29udGFpbmVyJyk7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgZWwucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvazogZnVuY3Rpb24gb2soaW5kZXgpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICByZXN1bHQ6ICdzdWNjZXNzJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMCkoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmksIFwiXFxuLmFzLWNvbnRhaW5lcntcXG4gIGZsZXg6MTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xcbn1cXG4uYXMtZGlhbG9ne1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLmFzLWhke1xcbiAgcGFkZGluZzogMjBweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxufVxcbi5hcy10aXRsZXtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5hcy1tZXNzYWdle1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4uYXMtYnRue1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgcGFkZGluZzogMzBweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xcbn1cXG4uYXMtYnRuLXRleHR7XFxuICBmbGV4OjE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzFiYTFlMjtcXG59XFxuLmFzLWJ0bi1sYXN0e1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcbn1cXG4uYXMtdGV4dC13YXJue1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLmFzLWNhbmNlbHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMCkoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmksIFwiLmFzLWNvbnRhaW5lcntcXG4gICAgZmxleDoxO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNSk7ICBcXG4gIH1cXG4gIC5hcy1kaWFsb2d7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgXFxuICB9XFxuICAuYXMtaGR7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC5hcy10aXRsZXtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBcXG4gIH1cXG4gIC5hcy1tZXNzYWdle1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICB9XFxuICAuYXMtYnRue1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHggMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XFxuICAgIFxcbiAgfVxcbiAgLmFzLWJ0bi10ZXh0e1xcbiAgICBmbGV4OjE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICMxYmExZTI7XFxuICB9XFxuICAuYXMtYnRuLWxhc3R7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgfVxcbiAgLmFzLXRleHQtd2FybntcXG4gICAgY29sb3I6IHJlZDtcXG4gIH1cXG4gIC5hcy1jYW5jZWx7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oOCkoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihmYWxzZSkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXMtY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXMtZGlhbG9nXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXMtaGRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhcy10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXMtbWVzc2FnZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5tZXNzYWdlKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5pdGVtcyksIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJhcy1idG5cIixcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdhcy1idG4tbGFzdCc6IGluZGV4ID09IF92bS5pdGVtcy5sZW5ndGggLSAxXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0ub2soaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJhcy1idG4tdGV4dFwiLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ2FzLXRleHQtd2Fybic6IGl0ZW0udHlwZSA9PSAyXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MoaXRlbS5tZXNzYWdlKSldKV0pXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmhhc0NhbmNlbCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFzLWJ0biBhcy1jYW5jZWxcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2FuY2VsXG4gICAgfVxuICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXMtYnRuLXRleHRcIlxuICB9LCBbX3ZtLl92KFwi5Y+W5raIXCIpXSldKSA6IF92bS5fZSgpXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAoZmFsc2UpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMThmZWUwNGJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmksIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKShcIjE4ODkzNWNjXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKGZhbHNlKSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xOGZlZTA0YiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYWN0aW9uLXNoZWV0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xOGZlZTA0YiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vYWN0aW9uLXNoZWV0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG52YXIgbGlzdFRvU3R5bGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNClcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7IGNzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHBhcnQuaWQgPSBwYXJlbnRJZCArICc6MCdcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0LmlkID0gcGFyZW50SWQgKyAnOicgKyBuZXdTdHlsZXNbaWRdLnBhcnRzLmxlbmd0aFxuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS12dWUtc3NyLWlkfj1cIicgKyBvYmouaWQgKyAnXCJdJylcbiAgdmFyIGhhc1NTUiA9IHN0eWxlRWxlbWVudCAhPSBudWxsXG5cbiAgLy8gaWYgaW4gcHJvZHVjdGlvbiBtb2RlIGFuZCBzdHlsZSBpcyBhbHJlYWR5IHByb3ZpZGVkIGJ5IFNTUixcbiAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gIGlmIChoYXNTU1IgJiYgaXNQcm9kdWN0aW9uKSB7XG4gICAgcmV0dXJuIG5vb3BcbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gc3R5bGVFbGVtZW50IHx8IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKCFoYXNTU1IpIHtcbiAgICB1cGRhdGUob2JqKVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuLyoqKi8gfSksXG4vKiAxNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cblxuLyoqKi8gfSksXG4vKiAxNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX2FjdGlvblNoZWV0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9hY3Rpb25TaGVldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hY3Rpb25TaGVldCk7XG5cbnZhciBfYWN0aW9uU2hlZXQzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF9hY3Rpb25TaGVldDQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hY3Rpb25TaGVldDMpO1xuXG52YXIgX21ldGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX21ldGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWV0YSk7XG5cbnZhciBfdmVuZG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF92ZW5kb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmVuZG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gd2VleC1hY3Rpb25TaGVldC13ZWJcbnZhciBhY3Rpb25TaGVldCA9IHtcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUob3B0aW9ucywgY2FsbGJhY2tJRCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgZGVmYXVsdE9QdGlvbnMgPSB7XG4gICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICBtZXNzYWdlOiAnJyxcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjaygpIHt9LFxuICAgICAgaGFzQ2FuY2VsOiB0cnVlXG4gICAgfTtcblxuICAgIHZhciBvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9QdGlvbnMsIG9wdGlvbnMpO1xuICAgIGlmIChvcHRzLml0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgIG9wdHMuaGFzQ2FuY2VsID0gX3ZlbmRvcjIuZGVmYXVsdC5maW5kQ2FuY2VsKG9wdGlvbnMuaXRlbXMpO1xuICAgICAgb3B0cy5pdGVtcyA9IF92ZW5kb3IyLmRlZmF1bHQuZmlsdGVyRGF0YShvcHRpb25zLml0ZW1zKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFja0lEID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IF90aGlzO1xuICAgICAgICBvcHRzLmNhbGxiYWNrID0gZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIHNlbGYuc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lELCByZXMpO1xuICAgICAgICB9O1xuICAgICAgfSkoKTtcbiAgICB9XG4gICAgdmFyIEFjdGlvblNoZWV0ID0gbnVsbDtcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cudnVlKTtcbiAgICBpZiAod2luZG93LnZ1ZSkge1xuXG4gICAgICBBY3Rpb25TaGVldCA9IFZ1ZS5leHRlbmQoX2FjdGlvblNoZWV0Mi5kZWZhdWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgQWN0aW9uU2hlZXQgPSBfYWN0aW9uU2hlZXQ0LmRlZmF1bHQ7XG4gICAgfVxuICAgIHZhciB2dWVBY3Rpb25TaGVldEluc3RhbmNlID0gbmV3IEFjdGlvblNoZWV0KHtcbiAgICAgIGVsOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiBvcHRzO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodnVlQWN0aW9uU2hlZXRJbnN0YW5jZS4kZWwpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0KHdlZXgpIHtcbiAgd2VleC5yZWdpc3RlckFwaU1vZHVsZSgnYWN0aW9uU2hlZXQnLCBhY3Rpb25TaGVldCwgX21ldGEyLmRlZmF1bHQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdDogaW5pdFxufTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFjdGlvblNoZWV0L3dlYi9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIiAvKipcbiAgKiBJbml0IHdlZXggaW5zdGFuY2UgZGVwZW5kaW5nIG9uIHRoZSB1cmwgcGFyYW1zLlxuICAqIFRoZXJlIGFyZSB0aHJlZSB3YXlzIHRvIGxvYWQgd2VleCBidW5kbGVzLCBkZXBlbmRzIG9uIHRoZVxuICAqIHBhcmFtZXRlciAnbG9hZGVyJyBpbiB0aGUgdXJsOlxuICAqXG4gICogICArIHhocjogdXNlIFhNTEh0dHBSZXF1ZXN0LiBQYXJhbWV0ZXIgJ3BhZ2UnIHNob3VsZCBiZVxuICAqICAgdGhlIGJ1bmRsZSdzIHVybC5cbiAgKiAgICsgc291cmNlOiB1c2UgdGhlIHRyYW5zZm9ybWVkIGNvZGUgaXRzZWxmLiAncGFnZScgc2hvdWxkXG4gICogICBiZSB0aGUgdHJhbnNmb3JtZWQgd2VleCBidW5kbGUuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gYnVuZGxlIC0gSXQgaGFzIGRpZmZlcmVudCBtZWFuaW5nIGRlcGVuZHMgb25cbiAgKiAgIHRoZSB0eXBlIG9mIGxvYWRlci5cbiAgKi9cbiAgXG5cbiAgXG4gKGZ1bmN0aW9uICgpIHtcbiAgIGZ1bmN0aW9uIGdldFVybFBhcmFtKGtleSkge1xuICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cCgnWz98Jl0nICsga2V5ICsgJz0oW14mXSspJylcbiAgICAgdmFyIG1hdGNoID0gbG9jYXRpb24uc2VhcmNoLm1hdGNoKHJlZylcbiAgICAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdXG4gICB9XG4gICB2YXIgbG9hZGVyID0gZ2V0VXJsUGFyYW0oJ2xvYWRlcicpIHx8ICd4aHInO1xuICAgdmFyIHBhZ2UgPSBnZXRVcmxQYXJhbSgncGFnZScpIHx8ICcuLi9kaXN0L2luZGV4LmpzJztcbiAgIHdpbmRvdy53ZWV4LmluaXQoe1xuICAgICBhcHBJZDogbG9jYXRpb24uaHJlZlxuICAgICAsIGxvYWRlcjogbG9hZGVyXG4gICAgICwgc291cmNlOiBwYWdlXG4gICAgICwgcm9vdElkOiAnd2VleCdcbiAgIH0pXG4gfSkoKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2ViL2pzL2luaXQuanMiXSwic291cmNlUm9vdCI6IiJ9