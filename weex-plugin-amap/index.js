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
	module.exports = __webpack_require__(8);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _web = __webpack_require__(2);
	
	var _web2 = _interopRequireDefault(_web);
	
	var _web3 = __webpack_require__(3);
	
	var _web4 = _interopRequireDefault(_web3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.weex && window.weex.install(_web2.default);
	
	window.weex && window.weex.install(_web4.default);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var proto = {
	  create: function create() {
	    this.node = document.createElement('div');
	    this.inner = new Image();
	    this.inner.style.marginBottom = '10px';
	    this.node.style.padding = "5px 5px 10px 5px";
	    this.node.style.textAlign = "center";
	    this.node.style.border = '1px solid #ccc';
	    this.node.appendChild(this.inner);
	    this.node.appendChild(document.createElement('div'));
	
	    return this.node;
	  }
	};
	
	// attribute setters.
	var attr = {
	  text: function text(val) {
	    var text = document.createTextNode(val);
	    this.node.appendChild(text);
	  },
	  imgsrc: function imgsrc(val) {
	    this.inner.src = val;
	  }
	};
	
	// style setters.
	var style = {
	  txtColor: function txtColor(val) {
	    this.inner.style.color = val;
	  }
	};
	
	// event config.
	var event = {
	  click: {
	    extra: function extra() {
	      return {
	        value: this.inner.textContent
	      };
	    }
	  }
	};
	
	function init(Weex) {
	  var Component = Weex.Component;
	  var extend = Weex.utils.extend;
	
	  function PolaroidPhoto(data) {
	    Component.call(this, data);
	  }
	
	  PolaroidPhoto.prototype = Object.create(Component.prototype);
	  extend(PolaroidPhoto.prototype, proto);
	  extend(PolaroidPhoto.prototype, { attr: attr });
	  extend(PolaroidPhoto.prototype, {
	    style: extend(Object.create(Component.prototype.style), style)
	  });
	  extend(PolaroidPhoto.prototype, { event: event });
	
	  Weex.registerComponent('weex-chart', PolaroidPhoto);
	}
	
	exports.default = { init: init };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _marker = __webpack_require__(4);
	
	var _marker2 = _interopRequireDefault(_marker);
	
	var _mapLoader = __webpack_require__(5);
	
	var _mapLoader2 = _interopRequireDefault(_mapLoader);
	
	var _vendor = __webpack_require__(6);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	var _amap = __webpack_require__(7);
	
	var _amap2 = _interopRequireDefault(_amap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loadingGif = 'http://img1.vued.vanthink.cn/vued2113eaa062abbaee0441d16a7848d23e.gif';
	var params = {
	  center: undefined,
	  zoom: 11,
	  toolbar: true,
	  scale: false,
	  geolocation: false,
	  resizeEnable: true
	};
	var events = {
	  zoomchange: function zoomchange() {}
	};
	var markers = [];
	// prototype methods.
	var proto = {
	  create: function create() {
	    this.mapwrap = document.createElement('div');
	    this.mapwrap.id = _vendor2.default.gengerateRandomId('map');
	    this.mapwrap.append(this.renderLoadingSpinner());
	    return this.mapwrap;
	  },
	  renderLoadingSpinner: function renderLoadingSpinner() {
	    var el = document.createElement('div');
	    el.style.height = 60;
	    el.style.margin = '20 auto';
	    el.style.textAlign = 'center';
	    var image = document.createElement('img');
	    image.src = loadingGif;
	    el.appendChild(image);
	    var text = document.createElement('div');
	    text.appendChild(document.createTextNode('高德地图加载中....'));
	    el.appendChild(text);
	    return el;
	  },
	  ready: function ready() {
	    var self = this;
	    if (window.AMap) {
	      this.map = new AMap.Map(this.mapwrap.id, params);
	      AMap.plugin(['AMap.ToolBar', 'AMap.Geolocation'], function () {
	        if (params.scale) {
	          self.map.addControl(new AMap.ToolBar());
	        }
	        if (params.geolocation) {
	          self.map.addControl(new AMap.Geolocation());
	        }
	      });
	      this.initEvents();
	      _marker2.default.changeMarker(markers, this.map);
	      this.mapInstance = this.map;
	    }
	  },
	  initEvents: function initEvents() {
	    var _this = this;
	
	    Object.entries(events).forEach(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 2),
	          eventName = _ref2[0],
	          func = _ref2[1];
	
	      AMap.event.addListener(_this.map, eventName, func);
	    });
	  }
	};
	
	var attr = {
	  center: function center(val) {
	    var _this2 = this;
	
	    if (Array.isArray(val) && val.length === 2) {
	      params.center = val;
	      if (window.AMap) {
	        this.map.setCenter(params.center);
	      }
	    }
	    if (typeof val === 'number') {
	      (function () {
	        var geo = new AMap.Geolocation({
	          enableHighAccuracy: true
	        });
	        var self = _this2;
	        geo.getCurrentPosition();
	        AMap.event.AMap.event.addListener(geo, 'complete', function (data) {
	          params.center = [data.position.getLng(), data.position.getLat()];
	          self.map.setCenter(params.center);
	        });
	      })();
	    }
	  },
	  zoom: function zoom(val) {
	    if (/^[0-9]+$/.test(val)) {
	      params.zoom = val;
	    }
	    if (window.AMap) {
	      this.map.setZoom(params.zoom);
	    }
	  },
	  marker: function marker(val) {
	    if (Array.isArray(val)) {
	      markers = val;
	      if (window.AMap) {
	        _marker2.default.changeMarker(markers, this.map);
	      }
	    }
	  },
	  scale: function scale(val) {
	    params.scale = val;
	  },
	  geolocation: function geolocation(val) {
	    params.geolocation = val;
	  },
	  sdkKey: function sdkKey(val) {
	    var _this3 = this;
	
	    var key = '';
	    if (val) {
	      key = val.h5;
	    }
	    _mapLoader2.default.load({
	      key: key
	    }, this.mapwrap, function () {
	      return _this3.ready();
	    });
	  },
	
	  // events
	  zoomchange: function zoomchange(val) {
	    if (typeof val === 'function') {
	      events.zoomchange = val;
	    }
	  }
	};
	
	var event = {
	  zoomchange: {
	    extra: function extra() {
	      return { isSuccess: true };
	    }
	  }
	};
	
	function init(Weex) {
	  var Component = Weex.Component;
	  var extend = Weex.utils.extend;
	
	  function Amap(data) {
	    Component.call(this, data);
	  }
	  Amap.prototype = Object.create(Component.prototype);
	  extend(Amap.prototype, proto);
	  extend(Amap.prototype, { attr: attr });
	  extend(Amap.prototype, {
	    style: extend(Object.create(Component.prototype.style), {})
	  });
	  extend(Amap.prototype, { event: event });
	  Weex.registerComponent('weex-amap', Amap);
	  (0, _amap2.default)(Weex);
	}
	
	exports.default = { init: init };

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	// a lib to manage all marker
	var markers = {};
	module.exports = {
	  changeMarker: function changeMarker(arr, map) {
	    for (var i = 0; i < arr.length; i++) {
	      var data = arr[i];
	      var marker = this.findMarker(data);
	      if (!marker) {
	        this.addMarker(data, map);
	      } else {
	        this.removeMarker(data);
	      }
	    }
	  },
	  addMarker: function addMarker(data, map) {
	    var icon = null;
	    if (data.icon) {
	      icon = new AMap.Icon({
	        image: data.icon,
	        size: new AMap.Size(64, 64)
	      });
	    }
	    var marker = new AMap.Marker({
	      position: data.position,
	      title: data.title,
	      icon: icon,
	      map: map
	    });
	    this.registerEvents(data.events, marker);
	    markers[this.__getMid(data)] = marker;
	  },
	  registerEvents: function registerEvents(events, marker) {
	    if ((typeof events === 'undefined' ? 'undefined' : _typeof(events)) === 'object') {
	      for (var key in events) {
	        AMap.event.addListener(marker, key, events[key]);
	      }
	    }
	  },
	  removeMarker: function removeMarker(data) {
	    var marker = this.findMarker(data);
	    if (marker) {
	      marker.visible = true;
	      marker = null;
	    }
	  },
	  findMarker: function findMarker(data) {
	    var mid = this.__getMid(data);
	    return markers[mid];
	  },
	  __getMid: function __getMid(data) {
	    return 'mid-' + data.position.join('-');
	  },
	  __isMaker: function __isMaker(obj) {
	    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.CLASS_NAME === 'AMap.Marker';
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	var DEFAULT_CONFIG = {
	  key: '',
	  v: '1.3',
	  url: 'https://webapi.amap.com/maps'
	};
	
	var gengerateScriptUrl = function gengerateScriptUrl(obj) {
	  var paramArr = [];
	  for (var key in obj) {
	    if (key !== 'url') {
	      paramArr.push(encodeURI(key + '=' + obj[key]));
	    }
	  }
	  return obj.url += '?' + paramArr.join('&');
	};
	
	module.exports = {
	  load: function load(config, container, callback) {
	    var newConfig = Object.assign({}, DEFAULT_CONFIG, config);
	    var lib = document.createElement('script');
	    lib.src = gengerateScriptUrl(newConfig);
	    console.log(lib.src);
	    var self = this;
	    lib.addEventListener('load', function () {
	      window.maploaded = true;
	      callback();
	    });
	    document.head.appendChild(lib);
	    this.loadTimeout(container);
	  },
	  loadTimeout: function loadTimeout(wrap) {
	    setTimeout(function () {
	      if (!window.Amap) {
	        var el = document.createElement('button');
	        el.appendChild(document.createTextNode('重新加载'));
	        el.addEventListener('click', function () {
	          location.reload();
	        });
	        wrap.childNodes[0].remove();
	        wrap.appendChild(el);
	      }
	    }, 10000);
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  gengerateRandomId: function gengerateRandomId(prefix) {
	    return prefix + new Date().getTime().toString().substring(9, 3) + parseInt(Math.random() * 10000);
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	// AMap module
	var amap = {
	  /** get user loaction by browser and IP
	  * @param {function} callback
	  * @param {function} errorCallback
	  **/
	  getUserLocation: function getUserLocation(mapRef, callback) {
	    var self = this;
	    var geo = new AMap.Geolocation({
	      enableHighAccuracy: true,
	      timeout: 10000
	    });
	    geo.getCurrentPosition(function (status, res) {
	      if (status !== 'error') {
	        self.sender.performCallback(callback, {
	          data: {
	            position: [res.position.getLng(), res.position.getLat()]
	          },
	          result: 'success'
	        });
	      } else {
	        console.warn(res.message);
	      }
	    });
	  }
	};
	
	var meta = {
	  amap: [{
	    name: 'getUserLocation',
	    args: ['string', 'function']
	  }]
	};
	
	module.exports = function (Weex) {
	  Weex.registerApiModule('amap', amap, meta);
	};

/***/ },
/* 8 */
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
	  var page = getUrlParam('page') || './dist/index.js';
	  window.weex.init({
	    appId: location.href,
	    loader: loader,
	    source: page,
	    rootId: 'weex'
	  });
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTliYTdlZjBlZTAxZTY0NzA0MmUiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9wbHVnaW5fYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1jaGFydC93ZWIvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1wbHVnaW4tYW1hcC93ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LXBsdWdpbi1hbWFwL3dlYi9zZXJ2aWNlL21hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViL3NlcnZpY2UvbWFwLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViL3NlcnZpY2UvdmVuZG9yLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1wbHVnaW4tYW1hcC93ZWIvbW9kdWxlL2FtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2pzL2luaXQuanMiXSwibmFtZXMiOlsid2luZG93Iiwid2VleCIsImluc3RhbGwiLCJwcm90byIsImNyZWF0ZSIsIm5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lciIsIkltYWdlIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiYm9yZGVyIiwiYXBwZW5kQ2hpbGQiLCJhdHRyIiwidGV4dCIsInZhbCIsImNyZWF0ZVRleHROb2RlIiwiaW1nc3JjIiwic3JjIiwidHh0Q29sb3IiLCJjb2xvciIsImV2ZW50IiwiY2xpY2siLCJleHRyYSIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJpbml0IiwiV2VleCIsIkNvbXBvbmVudCIsImV4dGVuZCIsInV0aWxzIiwiUG9sYXJvaWRQaG90byIsImRhdGEiLCJjYWxsIiwicHJvdG90eXBlIiwiT2JqZWN0IiwicmVnaXN0ZXJDb21wb25lbnQiLCJsb2FkaW5nR2lmIiwicGFyYW1zIiwiY2VudGVyIiwidW5kZWZpbmVkIiwiem9vbSIsInRvb2xiYXIiLCJzY2FsZSIsImdlb2xvY2F0aW9uIiwicmVzaXplRW5hYmxlIiwiZXZlbnRzIiwiem9vbWNoYW5nZSIsIm1hcmtlcnMiLCJtYXB3cmFwIiwiaWQiLCJnZW5nZXJhdGVSYW5kb21JZCIsImFwcGVuZCIsInJlbmRlckxvYWRpbmdTcGlubmVyIiwiZWwiLCJoZWlnaHQiLCJtYXJnaW4iLCJpbWFnZSIsInJlYWR5Iiwic2VsZiIsIkFNYXAiLCJtYXAiLCJNYXAiLCJwbHVnaW4iLCJhZGRDb250cm9sIiwiVG9vbEJhciIsIkdlb2xvY2F0aW9uIiwiaW5pdEV2ZW50cyIsImNoYW5nZU1hcmtlciIsIm1hcEluc3RhbmNlIiwiZW50cmllcyIsImZvckVhY2giLCJldmVudE5hbWUiLCJmdW5jIiwiYWRkTGlzdGVuZXIiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJzZXRDZW50ZXIiLCJnZW8iLCJlbmFibGVIaWdoQWNjdXJhY3kiLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImdldExuZyIsImdldExhdCIsInRlc3QiLCJzZXRab29tIiwibWFya2VyIiwic2RrS2V5Iiwia2V5IiwiaDUiLCJsb2FkIiwiaXNTdWNjZXNzIiwiQW1hcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnIiLCJpIiwiZmluZE1hcmtlciIsImFkZE1hcmtlciIsInJlbW92ZU1hcmtlciIsImljb24iLCJJY29uIiwic2l6ZSIsIlNpemUiLCJNYXJrZXIiLCJ0aXRsZSIsInJlZ2lzdGVyRXZlbnRzIiwiX19nZXRNaWQiLCJ2aXNpYmxlIiwibWlkIiwiam9pbiIsIl9faXNNYWtlciIsIm9iaiIsIkNMQVNTX05BTUUiLCJERUZBVUxUX0NPTkZJRyIsInYiLCJ1cmwiLCJnZW5nZXJhdGVTY3JpcHRVcmwiLCJwYXJhbUFyciIsInB1c2giLCJlbmNvZGVVUkkiLCJjb25maWciLCJjb250YWluZXIiLCJjYWxsYmFjayIsIm5ld0NvbmZpZyIsImFzc2lnbiIsImxpYiIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwibWFwbG9hZGVkIiwiaGVhZCIsImxvYWRUaW1lb3V0Iiwid3JhcCIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNoaWxkTm9kZXMiLCJyZW1vdmUiLCJwcmVmaXgiLCJEYXRlIiwiZ2V0VGltZSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiYW1hcCIsImdldFVzZXJMb2NhdGlvbiIsIm1hcFJlZiIsInRpbWVvdXQiLCJzdGF0dXMiLCJyZXMiLCJzZW5kZXIiLCJwZXJmb3JtQ2FsbGJhY2siLCJyZXN1bHQiLCJ3YXJuIiwibWVzc2FnZSIsIm1ldGEiLCJuYW1lIiwiYXJncyIsInJlZ2lzdGVyQXBpTW9kdWxlIiwiZ2V0VXJsUGFyYW0iLCJyZWciLCJSZWdFeHAiLCJtYXRjaCIsInNlYXJjaCIsImxvYWRlciIsInBhZ2UiLCJhcHBJZCIsImhyZWYiLCJzb3VyY2UiLCJyb290SWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7Ozs7QUFEQUEsUUFBT0MsSUFBUCxJQUFlRCxPQUFPQyxJQUFQLENBQVlDLE9BQVosZUFBZjs7QUFFQUYsUUFBT0MsSUFBUCxJQUFlRCxPQUFPQyxJQUFQLENBQVlDLE9BQVosZUFBZixDOzs7Ozs7QUNIQTs7Ozs7QUFHQSxLQUFNQyxRQUFRO0FBQ1pDLFNBRFksb0JBQ0Y7QUFDUixVQUFLQyxJQUFMLEdBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFVBQUtDLEtBQUws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SXBDd0UsbUJBQVE7QUFKNEIsVUFBdEM7QUFNRCxRQVBELE1BT087QUFDTDVCLGlCQUFRNkIsSUFBUixDQUFhSixJQUFJSyxPQUFqQjtBQUNEO0FBQ0YsTUFYRDtBQVlEO0FBdkJVLEVBQWI7O0FBMEJBLEtBQU1DLE9BQU87QUFDWFgsU0FBTSxDQUFDO0FBQ0xZLFdBQU0saUJBREQ7QUFFTEMsV0FBTSxDQUFDLFFBQUQsRUFBVyxVQUFYO0FBRkQsSUFBRDtBQURLLEVBQWI7O0FBT0FuRSxRQUFPQyxPQUFQLEdBQWlCLFVBQVVwRSxJQUFWLEVBQWdCO0FBQy9CQSxRQUFLdUksaUJBQUwsQ0FBdUIsTUFBdkIsRUFBK0JkLElBQS9CLEVBQXFDVyxJQUFyQztBQUNELEVBRkQsQzs7Ozs7Ozs7QUNsQ0M7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLEVBQUMsWUFBWTtBQUNYLFlBQVNJLFdBQVQsQ0FBcUIxRSxHQUFyQixFQUEwQjtBQUN4QixTQUFJMkUsTUFBTSxJQUFJQyxNQUFKLENBQVcsVUFBVTVFLEdBQVYsR0FBZ0IsVUFBM0IsQ0FBVjtBQUNBLFNBQUk2RSxRQUFROUIsU0FBUytCLE1BQVQsQ0FBZ0JELEtBQWhCLENBQXNCRixHQUF0QixDQUFaO0FBQ0EsWUFBT0UsU0FBU0EsTUFBTSxDQUFOLENBQWhCO0FBQ0Q7QUFDRCxPQUFJRSxTQUFTTCxZQUFZLFFBQVosS0FBeUIsS0FBdEM7QUFDQSxPQUFJTSxPQUFPTixZQUFZLE1BQVosS0FBdUIsa0JBQWxDO0FBQ0F0SyxVQUFPQyxJQUFQLENBQVk0QixJQUFaLENBQWlCO0FBQ2ZnSixZQUFPbEMsU0FBU21DLElBREQ7QUFFYkgsYUFBUUEsTUFGSztBQUdiSSxhQUFRSCxJQUhLO0FBSWJJLGFBQVE7QUFKSyxJQUFqQjtBQU1ELEVBZEQsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk5YmE3ZWYwZWUwMWU2NDcwNDJlIiwiaW1wb3J0IGNoYXJ0IGZyb20gXCIvVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9wbHVnaW5zL3dlZXgtY2hhcnQvd2ViXCI7XHJcbndpbmRvdy53ZWV4ICYmIHdpbmRvdy53ZWV4Lmluc3RhbGwoY2hhcnQpO1xyXG5pbXBvcnQgcGx1Z2luQW1hcCBmcm9tIFwiL1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hcHAvcGx1Z2lucy93ZWV4LXBsdWdpbi1hbWFwL3dlYlwiO1xyXG53aW5kb3cud2VleCAmJiB3aW5kb3cud2VleC5pbnN0YWxsKHBsdWdpbkFtYXApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvcGx1Z2luX2J1bmRsZS5qcyIsIid1c2Ugc3RyaWN0J1xuXG5cbmNvbnN0IHByb3RvID0ge1xuICBjcmVhdGUgKCkge1xuICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuaW5uZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmlubmVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxMHB4JztcbiAgICB0aGlzLm5vZGUuc3R5bGUucGFkZGluZyA9IFwiNXB4IDVweCAxMHB4IDVweFwiOyBcbiAgICB0aGlzLm5vZGUuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG4gICAgdGhpcy5ub2RlLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgI2NjYyc7XG4gICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuaW5uZXIpO1xuICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gIFxuICAgIHJldHVybiB0aGlzLm5vZGUgXG4gIH1cbn1cblxuLy8gYXR0cmlidXRlIHNldHRlcnMuXG5jb25zdCBhdHRyID0ge1xuICB0ZXh0ICh2YWwpIHtcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbCk7XG4gICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRleHQpO1xuICB9LFxuICBcbiAgaW1nc3JjKHZhbCkge1xuICAgIHRoaXMuaW5uZXIuc3JjID0gdmFsO1xuICB9XG59XG5cbi8vIHN0eWxlIHNldHRlcnMuXG5jb25zdCBzdHlsZSA9IHtcbiAgdHh0Q29sb3IgKHZhbCkge1xuICAgIHRoaXMuaW5uZXIuc3R5bGUuY29sb3IgPSB2YWxcbiAgfVxufVxuXG4vLyBldmVudCBjb25maWcuXG5jb25zdCBldmVudCA9IHtcbiAgY2xpY2s6IHtcbiAgICBleHRyYSAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdGhpcy5pbm5lci50ZXh0Q29udGVudFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0IChXZWV4KSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IFdlZXguQ29tcG9uZW50O1xuICBjb25zdCBleHRlbmQgPSBXZWV4LnV0aWxzLmV4dGVuZDtcblxuICBmdW5jdGlvbiBQb2xhcm9pZFBob3RvIChkYXRhKSB7XG4gICAgQ29tcG9uZW50LmNhbGwodGhpcywgZGF0YSk7XG4gIH1cblxuICBQb2xhcm9pZFBob3RvLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChQb2xhcm9pZFBob3RvLnByb3RvdHlwZSwgcHJvdG8pO1xuICBleHRlbmQoUG9sYXJvaWRQaG90by5wcm90b3R5cGUsIHsgYXR0ciB9KTtcbiAgZXh0ZW5kKFBvbGFyb2lkUGhvdG8ucHJvdG90eXBlLCB7XG4gICAgc3R5bGU6IGV4dGVuZChPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUuc3R5bGUpLCBzdHlsZSlcbiAgfSk7XG4gIGV4dGVuZChQb2xhcm9pZFBob3RvLnByb3RvdHlwZSwgeyBldmVudCB9KTtcblxuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWNoYXJ0JywgUG9sYXJvaWRQaG90byk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWNoYXJ0L3dlYi9zcmMvaW5kZXguanMiLCJpbXBvcnQgbWFya2VyTWFuYWdlIGZyb20gJy4vc2VydmljZS9tYXJrZXInO1xuaW1wb3J0IG1hcExvYWRlciBmcm9tICcuL3NlcnZpY2UvbWFwLWxvYWRlcic7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4vc2VydmljZS92ZW5kb3InO1xuaW1wb3J0IGFtYXBNb2R1bGVSZWcgZnJvbSAnLi9tb2R1bGUvYW1hcCc7XG5cbmNvbnN0IGxvYWRpbmdHaWYgPSAnaHR0cDovL2ltZzEudnVlZC52YW50aGluay5jbi92dWVkMjExM2VhYTA2MmFiYmFlZTA0NDFkMTZhNzg0OGQyM2UuZ2lmJztcbmNvbnN0IHBhcmFtcyA9IHtcbiAgY2VudGVyOiB1bmRlZmluZWQsXG4gIHpvb206IDExLFxuICB0b29sYmFyOiB0cnVlLFxuICBzY2FsZTogZmFsc2UsXG4gIGdlb2xvY2F0aW9uOiBmYWxzZSxcbiAgcmVzaXplRW5hYmxlOiB0cnVlXG59O1xuY29uc3QgZXZlbnRzID0ge1xuICB6b29tY2hhbmdlOiBmdW5jdGlvbiAoKSB7fVxufTtcbmxldCBtYXJrZXJzID0gW107XG4vLyBwcm90b3R5cGUgbWV0aG9kcy5cbmNvbnN0IHByb3RvID0ge1xuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5tYXB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5tYXB3cmFwLmlkID0gdmVuZG9yLmdlbmdlcmF0ZVJhbmRvbUlkKCdtYXAnKTtcbiAgICB0aGlzLm1hcHdyYXAuYXBwZW5kKHRoaXMucmVuZGVyTG9hZGluZ1NwaW5uZXIoKSk7XG4gICAgcmV0dXJuIHRoaXMubWFwd3JhcDtcbiAgfSxcbiAgcmVuZGVyTG9hZGluZ1NwaW5uZXIoKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSA2MDtcbiAgICBlbC5zdHlsZS5tYXJnaW4gPSAnMjAgYXV0byc7XG4gICAgZWwuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSBsb2FkaW5nR2lmO1xuICAgIGVsLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgn6auY5b635Zyw5Zu+5Yqg6L295LitLi4uLicpKTtcbiAgICBlbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICByZXR1cm4gZWw7XG4gIH0sXG4gIHJlYWR5KCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICh3aW5kb3cuQU1hcCkge1xuICAgICAgdGhpcy5tYXAgPSBuZXcgQU1hcC5NYXAodGhpcy5tYXB3cmFwLmlkLCBwYXJhbXMpO1xuICAgICAgQU1hcC5wbHVnaW4oWydBTWFwLlRvb2xCYXInLCAnQU1hcC5HZW9sb2NhdGlvbiddLCAoKSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXMuc2NhbGUpIHtcbiAgICAgICAgICBzZWxmLm1hcC5hZGRDb250cm9sKG5ldyBBTWFwLlRvb2xCYXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5nZW9sb2NhdGlvbikge1xuICAgICAgICAgIHNlbGYubWFwLmFkZENvbnRyb2wobmV3IEFNYXAuR2VvbG9jYXRpb24oKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgICBtYXJrZXJNYW5hZ2UuY2hhbmdlTWFya2VyKG1hcmtlcnMsIHRoaXMubWFwKTtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UgPSB0aGlzLm1hcDtcbiAgICB9XG4gIH0sXG4gIGluaXRFdmVudHMoKSB7XG4gICAgT2JqZWN0LmVudHJpZXMoZXZlbnRzKS5mb3JFYWNoKChbZXZlbnROYW1lLCBmdW5jXSkgPT4ge1xuICAgICAgQU1hcC5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcCwgZXZlbnROYW1lLCBmdW5jKTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgYXR0ciA9IHtcbiAgY2VudGVyKHZhbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA9PT0gMikge1xuICAgICAgcGFyYW1zLmNlbnRlciA9IHZhbDtcbiAgICAgIGlmICh3aW5kb3cuQU1hcCkge1xuICAgICAgICB0aGlzLm1hcC5zZXRDZW50ZXIocGFyYW1zLmNlbnRlcik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgY29uc3QgZ2VvID0gbmV3IEFNYXAuR2VvbG9jYXRpb24oe1xuICAgICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBnZW8uZ2V0Q3VycmVudFBvc2l0aW9uKCk7XG4gICAgICBBTWFwLmV2ZW50LkFNYXAuZXZlbnQuYWRkTGlzdGVuZXIoZ2VvLCAnY29tcGxldGUnLCAoZGF0YSkgPT4ge1xuICAgICAgICBwYXJhbXMuY2VudGVyID0gW2RhdGEucG9zaXRpb24uZ2V0TG5nKCksIGRhdGEucG9zaXRpb24uZ2V0TGF0KCldO1xuICAgICAgICBzZWxmLm1hcC5zZXRDZW50ZXIocGFyYW1zLmNlbnRlcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHpvb20odmFsKSB7XG4gICAgaWYgKC9eWzAtOV0rJC8udGVzdCh2YWwpKSB7XG4gICAgICBwYXJhbXMuem9vbSA9IHZhbDtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5BTWFwKSB7XG4gICAgICB0aGlzLm1hcC5zZXRab29tKHBhcmFtcy56b29tKTtcbiAgICB9XG4gIH0sXG4gIG1hcmtlcih2YWwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICBtYXJrZXJzID0gdmFsO1xuICAgICAgaWYgKHdpbmRvdy5BTWFwKSB7XG4gICAgICAgIG1hcmtlck1hbmFnZS5jaGFuZ2VNYXJrZXIobWFya2VycywgdGhpcy5tYXApO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2NhbGUodmFsKSB7XG4gICAgcGFyYW1zLnNjYWxlID0gdmFsO1xuICB9LFxuICBnZW9sb2NhdGlvbih2YWwpIHtcbiAgICBwYXJhbXMuZ2VvbG9jYXRpb24gPSB2YWw7XG4gIH0sXG4gIHNka0tleSh2YWwpIHtcbiAgICBsZXQga2V5ID0gJyc7XG4gICAgaWYgKHZhbCkge1xuICAgICAga2V5ID0gdmFsLmg1O1xuICAgIH1cbiAgICBtYXBMb2FkZXIubG9hZCh7XG4gICAgICBrZXk6IGtleVxuICAgIH0sIHRoaXMubWFwd3JhcCwgKCkgPT4gdGhpcy5yZWFkeSgpKTtcbiAgfSxcbiAgLy8gZXZlbnRzXG4gIHpvb21jaGFuZ2UodmFsKSB7XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGV2ZW50cy56b29tY2hhbmdlID0gdmFsO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZXZlbnQgPSB7XG4gIHpvb21jaGFuZ2U6IHtcbiAgICBleHRyYSgpIHtcbiAgICAgIHJldHVybiB7aXNTdWNjZXNzOiB0cnVlfTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcChkYXRhKSB7XG4gICAgQ29tcG9uZW50LmNhbGwodGhpcywgZGF0YSk7XG4gIH1cbiAgQW1hcC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUpO1xuICBleHRlbmQoQW1hcC5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXAucHJvdG90eXBlLCB7IGF0dHIgfSk7XG4gIGV4dGVuZChBbWFwLnByb3RvdHlwZSwge1xuICAgIHN0eWxlOiBleHRlbmQoT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlLnN0eWxlKSwge30pXG4gIH0pO1xuICBleHRlbmQoQW1hcC5wcm90b3R5cGUsIHsgZXZlbnQgfSk7XG4gIFdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ3dlZXgtYW1hcCcsIEFtYXApO1xuICBhbWFwTW9kdWxlUmVnKFdlZXgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1wbHVnaW4tYW1hcC93ZWIvaW5kZXguanMiLCIvLyBhIGxpYiB0byBtYW5hZ2UgYWxsIG1hcmtlclxuY29uc3QgbWFya2VycyA9IHt9O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoYW5nZU1hcmtlcihhcnIsIG1hcCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXJyW2ldO1xuICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5maW5kTWFya2VyKGRhdGEpO1xuICAgICAgaWYgKCFtYXJrZXIpIHtcbiAgICAgICAgdGhpcy5hZGRNYXJrZXIoZGF0YSwgbWFwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTWFya2VyKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgYWRkTWFya2VyKGRhdGEsIG1hcCkge1xuICAgIGxldCBpY29uID0gbnVsbDtcbiAgICBpZiAoZGF0YS5pY29uKSB7XG4gICAgICBpY29uID0gbmV3IEFNYXAuSWNvbih7XG4gICAgICAgIGltYWdlOiBkYXRhLmljb24sXG4gICAgICAgIHNpemU6IG5ldyBBTWFwLlNpemUoNjQsIDY0KVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBBTWFwLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogZGF0YS5wb3NpdGlvbixcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgaWNvbjogaWNvbixcbiAgICAgIG1hcDogbWFwLFxuICAgIH0pO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoZGF0YS5ldmVudHMsIG1hcmtlcik7XG4gICAgbWFya2Vyc1t0aGlzLl9fZ2V0TWlkKGRhdGEpXSA9IG1hcmtlcjtcbiAgfSxcbiAgcmVnaXN0ZXJFdmVudHMoZXZlbnRzLCBtYXJrZXIpIHtcbiAgICBpZiAodHlwZW9mIGV2ZW50cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGV2ZW50cykge1xuICAgICAgICBBTWFwLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwga2V5LCBldmVudHNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZW1vdmVNYXJrZXIoZGF0YSkge1xuICAgIGxldCBtYXJrZXIgPSB0aGlzLmZpbmRNYXJrZXIoZGF0YSk7XG4gICAgaWYgKG1hcmtlcikge1xuICAgICAgbWFya2VyLnZpc2libGUgPSB0cnVlO1xuICAgICAgbWFya2VyID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIGZpbmRNYXJrZXIoZGF0YSkge1xuICAgIGNvbnN0IG1pZCA9IHRoaXMuX19nZXRNaWQoZGF0YSk7XG4gICAgcmV0dXJuIG1hcmtlcnNbbWlkXTtcbiAgfSxcbiAgX19nZXRNaWQoZGF0YSkge1xuICAgIHJldHVybiAnbWlkLScgKyBkYXRhLnBvc2l0aW9uLmpvaW4oJy0nKTtcbiAgfSxcbiAgX19pc01ha2VyKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouQ0xBU1NfTkFNRSA9PT0gJ0FNYXAuTWFya2VyJztcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1wbHVnaW4tYW1hcC93ZWIvc2VydmljZS9tYXJrZXIuanMiLCJjb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAga2V5OiAnJyxcbiAgdjogJzEuMycsXG4gIHVybDogJ2h0dHBzOi8vd2ViYXBpLmFtYXAuY29tL21hcHMnXG59O1xuIFxuY29uc3QgZ2VuZ2VyYXRlU2NyaXB0VXJsID0gZnVuY3Rpb24ob2JqKSB7XG4gIGxldCBwYXJhbUFyciA9IFtdO1xuICBmb3IobGV0IGtleSBpbiBvYmopIHtcbiAgICBpZihrZXkgIT09ICd1cmwnKSB7XG4gICAgICBwYXJhbUFyci5wdXNoKGVuY29kZVVSSShrZXkgKyAnPScgKyBvYmpba2V5XSkpOyAgXG4gICAgfVxuICB9XG4gIHJldHVybiBvYmoudXJsICs9ICc/JyArIHBhcmFtQXJyLmpvaW4oJyYnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBcbiAgbG9hZChjb25maWcsY29udGFpbmVyLGNhbGxiYWNrKSB7XG4gICAgbGV0IG5ld0NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sREVGQVVMVF9DT05GSUcsY29uZmlnKTtcbiAgICBsZXQgbGliID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgbGliLnNyYyA9IGdlbmdlcmF0ZVNjcmlwdFVybChuZXdDb25maWcpO1xuICAgIGNvbnNvbGUubG9nKGxpYi5zcmMpO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsaWIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cubWFwbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaWIpOyAgXG4gICAgdGhpcy5sb2FkVGltZW91dChjb250YWluZXIpO1xuICB9LFxuICBcbiAgbG9hZFRpbWVvdXQod3JhcCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYoIXdpbmRvdy5BbWFwKSB7XG4gICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgn6YeN5paw5Yqg6L29JykpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdyYXAuY2hpbGROb2Rlc1swXS5yZW1vdmUoKTtcbiAgICAgICAgd3JhcC5hcHBlbmRDaGlsZChlbCk7XG4gICAgICB9XG4gICAgfSwgMTAwMDApO1xuICB9XG5cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LXBsdWdpbi1hbWFwL3dlYi9zZXJ2aWNlL21hcC1sb2FkZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2VuZ2VyYXRlUmFuZG9tSWQgKHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggKyAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKS50b1N0cmluZygpLnN1YnN0cmluZyg5LDMpKSArIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMDAwMCk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LXBsdWdpbi1hbWFwL3dlYi9zZXJ2aWNlL3ZlbmRvci5qcyIsIi8vIEFNYXAgbW9kdWxlXG5jb25zdCBhbWFwID0ge1xuICAvKiogZ2V0IHVzZXIgbG9hY3Rpb24gYnkgYnJvd3NlciBhbmQgSVBcbiAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAqIEBwYXJhbSB7ZnVuY3Rpb259IGVycm9yQ2FsbGJhY2tcbiAgKiovXG4gIGdldFVzZXJMb2NhdGlvbihtYXBSZWYsIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgZ2VvID0gbmV3IEFNYXAuR2VvbG9jYXRpb24oe1xuICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlLFxuICAgICAgdGltZW91dDogMTAwMDBcbiAgICB9KTtcbiAgICBnZW8uZ2V0Q3VycmVudFBvc2l0aW9uKChzdGF0dXMsIHJlcykgPT4ge1xuICAgICAgaWYgKHN0YXR1cyAhPT0gJ2Vycm9yJykge1xuICAgICAgICBzZWxmLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2ssIHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogW3Jlcy5wb3NpdGlvbi5nZXRMbmcoKSwgcmVzLnBvc2l0aW9uLmdldExhdCgpXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzdWx0OiAnc3VjY2VzcydcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4ocmVzLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBtZXRhID0ge1xuICBhbWFwOiBbe1xuICAgIG5hbWU6ICdnZXRVc2VyTG9jYXRpb24nLFxuICAgIGFyZ3M6IFsnc3RyaW5nJywgJ2Z1bmN0aW9uJ11cbiAgfV1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFdlZXgpIHtcbiAgV2VleC5yZWdpc3RlckFwaU1vZHVsZSgnYW1hcCcsIGFtYXAsIG1ldGEpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1wbHVnaW4tYW1hcC93ZWIvbW9kdWxlL2FtYXAuanMiLCIgLyoqXG4gICogSW5pdCB3ZWV4IGluc3RhbmNlIGRlcGVuZGluZyBvbiB0aGUgdXJsIHBhcmFtcy5cbiAgKiBUaGVyZSBhcmUgdGhyZWUgd2F5cyB0byBsb2FkIHdlZXggYnVuZGxlcywgZGVwZW5kcyBvbiB0aGVcbiAgKiBwYXJhbWV0ZXIgJ2xvYWRlcicgaW4gdGhlIHVybDpcbiAgKlxuICAqICAgKyB4aHI6IHVzZSBYTUxIdHRwUmVxdWVzdC4gUGFyYW1ldGVyICdwYWdlJyBzaG91bGQgYmVcbiAgKiAgIHRoZSBidW5kbGUncyB1cmwuXG4gICogICArIHNvdXJjZTogdXNlIHRoZSB0cmFuc2Zvcm1lZCBjb2RlIGl0c2VsZi4gJ3BhZ2UnIHNob3VsZFxuICAqICAgYmUgdGhlIHRyYW5zZm9ybWVkIHdlZXggYnVuZGxlLlxuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IGJ1bmRsZSAtIEl0IGhhcyBkaWZmZXJlbnQgbWVhbmluZyBkZXBlbmRzIG9uXG4gICogICB0aGUgdHlwZSBvZiBsb2FkZXIuXG4gICovXG4gIFxuXG4gIFxuIChmdW5jdGlvbiAoKSB7XG4gICBmdW5jdGlvbiBnZXRVcmxQYXJhbShrZXkpIHtcbiAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoJ1s/fCZdJyArIGtleSArICc9KFteJl0rKScpXG4gICAgIHZhciBtYXRjaCA9IGxvY2F0aW9uLnNlYXJjaC5tYXRjaChyZWcpXG4gICAgIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXVxuICAgfVxuICAgdmFyIGxvYWRlciA9IGdldFVybFBhcmFtKCdsb2FkZXInKSB8fCAneGhyJztcbiAgIHZhciBwYWdlID0gZ2V0VXJsUGFyYW0oJ3BhZ2UnKSB8fCAnLi4vZGlzdC9pbmRleC5qcyc7XG4gICB3aW5kb3cud2VleC5pbml0KHtcbiAgICAgYXBwSWQ6IGxvY2F0aW9uLmhyZWZcbiAgICAgLCBsb2FkZXI6IGxvYWRlclxuICAgICAsIHNvdXJjZTogcGFnZVxuICAgICAsIHJvb3RJZDogJ3dlZXgnXG4gICB9KVxuIH0pKCk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYi9qcy9pbml0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==