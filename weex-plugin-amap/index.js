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
	module.exports = __webpack_require__(11);


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
	
	var _amap = __webpack_require__(4);
	
	var _amap2 = _interopRequireDefault(_amap);
	
	var _amap3 = __webpack_require__(5);
	
	var _amap4 = _interopRequireDefault(_amap3);
	
	var _amapMarker = __webpack_require__(10);
	
	var _amapMarker2 = _interopRequireDefault(_amapMarker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var components = [_amap4.default, _amapMarker2.default];
	
	function init(Weex) {
	  components.forEach(function (comp) {
	    comp.init(Weex);
	  });
	  (0, _amap2.default)(Weex);
	}
	module.exports = {
	  init: init
	};

/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _marker = __webpack_require__(6);
	
	var _marker2 = _interopRequireDefault(_marker);
	
	var _mapLoader = __webpack_require__(9);
	
	var _mapLoader2 = _interopRequireDefault(_mapLoader);
	
	var _mapManager = __webpack_require__(7);
	
	var _mapManager2 = _interopRequireDefault(_mapManager);
	
	var _vendor = __webpack_require__(8);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
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
	var events = ['zoomchange', 'dragend'];
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
	      _mapManager2.default.initMap(this.mapwrap.id, this.map);
	    }
	  },
	  removeChild: function removeChild(child) {
	    _marker2.default.removeMaker(child.data);
	  },
	  initEvents: function initEvents() {
	    var _this = this;
	
	    events.forEach(function (eventName) {
	      AMap.event.addListener(_this.map, eventName, function () {
	        _this.dispatchEvent(eventName);
	      });
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
	  }
	};
	
	var event = {
	  zoomchange: {
	    extra: function extra() {
	      return { isSuccess: true };
	    }
	  },
	  dragend: {
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
	}
	
	exports.default = { init: init };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // a lib to manage all marker
	
	
	var _mapManager = __webpack_require__(7);
	
	var _mapManager2 = _interopRequireDefault(_mapManager);
	
	var _vendor = __webpack_require__(8);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	  addMarker: function addMarker(data) {
	    var _this = this;
	
	    var map = _mapManager2.default.getMap();
	    if (!map) {
	      return _mapManager2.default.addReadyCallback(function (mapIns) {
	        _this.setMarker(data, mapIns);
	      });
	    }
	    return this.setMarker(data, map);
	  },
	  setMarker: function setMarker(data, map) {
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
	    markers[this.__getMid(data)] = marker;
	    this.registerEvents(data.events, marker);
	  },
	  removeMaker: function removeMaker(data) {
	    var marker = this.findMarker(data);
	    console.log(marker);
	    marker.setMap(null);
	  },
	  updateMarker: function updateMarker(data, attr, val) {
	    console.log(data);
	    var marker = this.findMarker(data);
	    if (!marker) {
	      return false;
	    }
	    var method = _vendor2.default.setFirstLetterToUppercase(attr);
	    marker['set' + method](val);
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
	    return 'mid-' + data.ref || data.position.join('-');
	  },
	  __isMaker: function __isMaker(obj) {
	    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.CLASS_NAME === 'AMap.Marker';
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	/** map instance manager
	* 20170204
	**/
	var callbackStack = [];
	module.exports = {
	  initMap: function initMap(id, map) {
	    if (!this.__maps) {
	      this.__maps = {};
	    }
	    this.__maps[id] = map;
	    callbackStack.forEach(function (cb) {
	      cb(map);
	    });
	    callbackStack = [];
	  },
	  getMap: function getMap(id) {
	    if (!this.__maps) {
	      return null;
	    }
	    if (!id) {
	      id = Object.keys(this.__maps)[0];
	    }
	    console.log(this.__maps);
	    return this.__maps[id];
	  },
	  addReadyCallback: function addReadyCallback(callback) {
	    callbackStack.push(callback);
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  gengerateRandomId: function gengerateRandomId(prefix) {
	    return prefix + new Date().getTime().toString().substring(9, 3) + parseInt(Math.random() * 10000);
	  },
	  setFirstLetterToUppercase: function setFirstLetterToUppercase(str) {
	    return str.substr(0, 1).toUpperCase() + str.substring(1);
	  }
	};

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _marker = __webpack_require__(6);
	
	var _marker2 = _interopRequireDefault(_marker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var params = {
	  poistion: [],
	  title: '',
	  icon: ''
	};
	
	// prototype methods.
	var proto = {
	  create: function create() {
	    var _this = this;
	
	    var node = document.createElement('div');
	    var data = this.data.attr;
	    _marker2.default.addMarker({
	      position: data.position,
	      icon: data.icon,
	      title: data.title,
	      ref: this.data.ref,
	      events: {
	        click: function click() {
	          _this.dispatchEvent('click');
	        }
	      },
	      map: window.Amap
	    });
	    return node;
	  },
	  updateAttrs: function updateAttrs(attrs) {
	    var keys = Object.keys(attrs);
	    var data = {
	      ref: this.data.ref
	    };
	    keys.forEach(function (k) {
	      _marker2.default.updateMarker(data, k, attrs[k]);
	    });
	  }
	};
	
	var attr = {
	  position: function position(val) {
	    console.log(val);
	    console.log(this);
	    if (Array.isArray(val) && val.length === 2) {
	      params.position = val;
	    }
	  },
	  icon: function icon(val) {
	    params.icon = val;
	  },
	  title: function title(val) {
	    params.title = val;
	  }
	};
	
	var event = {
	  click: {
	    extra: function extra() {
	      return { isSuccess: true };
	    }
	  }
	};
	
	function init(Weex) {
	  var Component = Weex.Component;
	  var extend = Weex.utils.extend;
	
	  function AmapMaker(data) {
	    Component.call(this, data);
	  }
	  AmapMaker.prototype = Object.create(Component.prototype);
	  extend(AmapMaker.prototype, proto);
	  extend(AmapMaker.prototype, { attr: attr });
	  extend(AmapMaker.prototype, { event: event });
	  Weex.registerComponent('weex-amap-marker', AmapMaker);
	}
	
	exports.default = { init: init };

/***/ },
/* 11 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjI1ODQwZjI5ZjU1MGZlZmRjNzgiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9wbHVnaW5fYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1jaGFydC93ZWIvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1wbHVnaW4tYW1hcC93ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LXBsdWdpbi1hbWFwL3dlYi9tb2R1bGUvYW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViL3NlcnZpY2UvbWFya2VyLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1wbHVnaW4tYW1hcC93ZWIvc2VydmljZS9tYXAtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViL3NlcnZpY2UvdmVuZG9yLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1wbHVnaW4tYW1hcC93ZWIvc2VydmljZS9tYXAtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1wbHVnaW4tYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLW1hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvanMvaW5pdC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJ3ZWV4IiwiaW5zdGFsbCIsInByb3RvIiwiY3JlYXRlIiwibm9kZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVyIiwiSW1hZ2UiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJib3JkZXIiLCJhcHBlbmRDaGlsZCIsImF0dHIiLCJ0ZXh0IiwidmFsIiwiY3JlYXRlVGV4dE5vZGUiLCJpbWdzcmMiLCJzcmMiLCJ0eHRDb2xvciIsImNvbG9yIiwiZXZlbnQiLCJjbGljayIsImV4dHJhIiwidmFsdWUiLCJ0ZXh0Q29udGVudCIsImluaXQiLCJXZWV4IiwiQ29tcG9uZW50IiwiZXh0ZW5kIiwidXRpbHMiLCJQb2xhcm9pZFBob3RvIiwiZGF0YSIsImNhbGwiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJyZWdpc3RlckNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJmb3JFYWNoIiwiY29tcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhbWFwIiwiZ2V0VXNlckxvY2F0aW9uIiwibWFwUmVmIiwiY2FsbGJhY2siLCJzZWxmIiwiZ2VvIiwiQU1hcCIsIkdlb2xvY2F0aW9uIiwiZW5hYmxlSGlnaEFjY3VyYWN5IiwidGltZW91dCIsImdldEN1cnJlbnRQb3NpdGlvbiIsInN0YXR1cyIsInJlcyIsInNlbmRlciIsInBlcmZvcm1DYWxsYmFjayIsInBvc2l0aW9uIiwiZ2V0TG5nIiwiZ2V0TGF0IiwicmVzdWx0IiwiY29uc29sZSIsIndhcm4iLCJtZXNzYWdlIiwibWV0YSIsIm5hbWUiLCJhcmdzIiwicmVnaXN0ZXJBcGlNb2R1bGUiLCJsb2FkaW5nR2lmIiwicGFyYW1zIiwiY2VudGVyIiwidW5kZWZpbmVkIiwiem9vbSIsInRvb2xiYXIiLCJzY2FsZSIsImdlb2xvY2F0aW9uIiwicmVzaXplRW5hYmxlIiwiZXZlbnRzIiwibWFwd3JhcCIsImlkIiwiZ2VuZ2VyYXRlUmFuZG9tSWQiLCJhcHBlbmQiLCJyZW5kZXJMb2FkaW5nU3Bpbm5lciIsImVsIiwiaGVpZ2h0IiwibWFyZ2luIiwiaW1hZ2UiLCJyZWFkeSIsIm1hcCIsIk1hcCIsInBsdWdpbiIsImFkZENvbnRyb2wiLCJUb29sQmFyIiwiaW5pdEV2ZW50cyIsImluaXRNYXAiLCJyZW1vdmVDaGlsZCIsImNoaWxkIiwicmVtb3ZlTWFrZXIiLCJldmVudE5hbWUiLCJhZGRMaXN0ZW5lciIsImRpc3BhdGNoRXZlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJzZXRDZW50ZXIiLCJ0ZXN0Iiwic2V0Wm9vbSIsInNka0tleSIsImtleSIsImg1IiwibG9hZCIsInpvb21jaGFuZ2UiLCJpc1N1Y2Nlc3MiLCJkcmFnZW5kIiwiQW1hcCIsIm1hcmtlcnMiLCJjaGFuZ2VNYXJrZXIiLCJhcnIiLCJpIiwibWFya2VyIiwiZmluZE1hcmtlciIsImFkZE1hcmtlciIsInJlbW92ZU1hcmtlciIsImdldE1hcCIsImFkZFJlYWR5Q2FsbGJhY2siLCJtYXBJbnMiLCJzZXRNYXJrZXIiLCJpY29uIiwiSWNvbiIsInNpemUiLCJTaXplIiwiTWFya2VyIiwidGl0bGUiLCJfX2dldE1pZCIsInJlZ2lzdGVyRXZlbnRzIiwibG9nIiwic2V0TWFwIiwidXBkYXRlTWFya2VyIiwibWV0aG9kIiwic2V0Rmlyc3RMZXR0ZXJUb1VwcGVyY2FzZSIsInZpc2libGUiLCJtaWQiLCJyZWYiLCJqb2luIiwiX19pc01ha2VyIiwib2JqIiwiQ0xBU1NfTkFNRSIsImNhbGxiYWNrU3RhY2siLCJfX21hcHMiLCJjYiIsImtleXMiLCJwdXNoIiwicHJlZml4IiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsInN0ciIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwiREVGQVVMVF9DT05GSUciLCJ2IiwidXJsIiwiZ2VuZ2VyYXRlU2NyaXB0VXJsIiwicGFyYW1BcnIiLCJlbmNvZGVVUkkiLCJjb25maWciLCJjb250YWluZXIiLCJuZXdDb25maWciLCJhc3NpZ24iLCJsaWIiLCJhZGRFdmVudExpc3RlbmVyIiwibWFwbG9hZGVkIiwiaGVhZCIsImxvYWRUaW1lb3V0Iiwid3JhcCIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNoaWxkTm9kZXMiLCJyZW1vdmUiLCJwb2lzdGlvbiIsInVwZGF0ZUF0dHJzIiwiYXR0cnMiLCJrIiwiQW1hcE1ha2VyIiwiZ2V0VXJsUGFyYW0iLCJyZWciLCJSZWdFeHAiLCJtYXRjaCIsInNlYXJjaCIsImxvYWRlciIsInBhZ2UiLCJhcHBJZCIsImhyZWYiLCJzb3VyY2UiLCJyb290SWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7Ozs7QUFEQUEsUUFBT0MsSUFBUCxJQUFlRCxPQUFPQyxJQUFQLENBQVlDLE9BQVosZUFBZjs7QUFFQUYsUUFBT0MsSUFBUCxJQUFlRCxPQUFPQyxJQUFQLENBQVlDLE9BQVosZUFBZixDOzs7Ozs7QUNIQTs7Ozs7QUFHQSxLQUFNQyxRQUFRO0FBQ1pDLFNBRFksb0JBQ0Y7QUFDUixVQUFLQyxJQUFMLEdBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxJQUFJQyxLQUFKLEVBQWI7QUFDQSxVQUFLRCxLQUFMLENBQVdFLEtBQVgsQ0FBaUJDLFlBQWpCLEdBQWdDLE1BQWhDO0FBQ0EsVUFBS04sSUFBTCxDQUFVSyxLQUFWLENBQWdCRSxPQUFoQixHQUEwQixrQkFBMUI7QUFDQSxVQUFLUCxJQUFMLENBQVVLLEtBQVYsQ0FBZ0JHLFNBQWhCLEdBQTRCLFFBQTVCO0FBQ0EsVUFBS1IsSUFBTCxDQUFVSyxLQUFWLENBQWdCSSxNQUFoQixHQUF5QixnQkFBekI7QUFDQSxVQUFLVCxJQUFMLENBQVVVLFdBQVYsQ0FBc0IsS0FBS1AsS0FBM0I7QUFDQSxVQUFLSCxJQUFMLENBQVVVLFdBQVYsQ0FBc0JULFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdEI7O0FBRUEsWUFBTyxLQUFLRixJQUFaO0FBQ0Q7QUFaVyxFQUFkOztBQWVBO0FBQ0EsS0FBTVcsT0FBTztBQUNYQyxPQURX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QjtBQU1ELEVBZEQsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIyNTg0MGYyOWY1NTBmZWZkYzc4IiwiaW1wb3J0IGNoYXJ0IGZyb20gXCIvVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9wbHVnaW5zL3dlZXgtY2hhcnQvd2ViXCI7XHJcbndpbmRvdy53ZWV4ICYmIHdpbmRvdy53ZWV4Lmluc3RhbGwoY2hhcnQpO1xyXG5pbXBvcnQgcGx1Z2luQW1hcCBmcm9tIFwiL1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hcHAvcGx1Z2lucy93ZWV4LXBsdWdpbi1hbWFwL3dlYlwiO1xyXG53aW5kb3cud2VleCAmJiB3aW5kb3cud2VleC5pbnN0YWxsKHBsdWdpbkFtYXApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvcGx1Z2luX2J1bmRsZS5qcyIsIid1c2Ugc3RyaWN0J1xuXG5cbmNvbnN0IHByb3RvID0ge1xuICBjcmVhdGUgKCkge1xuICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuaW5uZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmlubmVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxMHB4JztcbiAgICB0aGlzLm5vZGUuc3R5bGUucGFkZGluZyA9IFwiNXB4IDVweCAxMHB4IDVweFwiOyBcbiAgICB0aGlzLm5vZGUuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG4gICAgdGhpcy5ub2RlLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgI2NjYyc7XG4gICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuaW5uZXIpO1xuICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gIFxuICAgIHJldHVybiB0aGlzLm5vZGUgXG4gIH1cbn1cblxuLy8gYXR0cmlidXRlIHNldHRlcnMuXG5jb25zdCBhdHRyID0ge1xuICB0ZXh0ICh2YWwpIHtcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbCk7XG4gICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRleHQpO1xuICB9LFxuICBcbiAgaW1nc3JjKHZhbCkge1xuICAgIHRoaXMuaW5uZXIuc3JjID0gdmFsO1xuICB9XG59XG5cbi8vIHN0eWxlIHNldHRlcnMuXG5jb25zdCBzdHlsZSA9IHtcbiAgdHh0Q29sb3IgKHZhbCkge1xuICAgIHRoaXMuaW5uZXIuc3R5bGUuY29sb3IgPSB2YWxcbiAgfVxufVxuXG4vLyBldmVudCBjb25maWcuXG5jb25zdCBldmVudCA9IHtcbiAgY2xpY2s6IHtcbiAgICBleHRyYSAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdGhpcy5pbm5lci50ZXh0Q29udGVudFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0IChXZWV4KSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IFdlZXguQ29tcG9uZW50O1xuICBjb25zdCBleHRlbmQgPSBXZWV4LnV0aWxzLmV4dGVuZDtcblxuICBmdW5jdGlvbiBQb2xhcm9pZFBob3RvIChkYXRhKSB7XG4gICAgQ29tcG9uZW50LmNhbGwodGhpcywgZGF0YSk7XG4gIH1cblxuICBQb2xhcm9pZFBob3RvLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChQb2xhcm9pZFBob3RvLnByb3RvdHlwZSwgcHJvdG8pO1xuICBleHRlbmQoUG9sYXJvaWRQaG90by5wcm90b3R5cGUsIHsgYXR0ciB9KTtcbiAgZXh0ZW5kKFBvbGFyb2lkUGhvdG8ucHJvdG90eXBlLCB7XG4gICAgc3R5bGU6IGV4dGVuZChPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUuc3R5bGUpLCBzdHlsZSlcbiAgfSk7XG4gIGV4dGVuZChQb2xhcm9pZFBob3RvLnByb3RvdHlwZSwgeyBldmVudCB9KTtcblxuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWNoYXJ0JywgUG9sYXJvaWRQaG90byk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWNoYXJ0L3dlYi9zcmMvaW5kZXguanMiLCJpbXBvcnQgYW1hcE1vZHVsZVJlZyBmcm9tICcuL21vZHVsZS9hbWFwJztcbmltcG9ydCBBbWFwIGZyb20gJy4vY29tcG9uZW50cy9hbWFwJztcbmltcG9ydCBBbWFwTWFya2VyIGZyb20gJy4vY29tcG9uZW50cy9hbWFwLW1hcmtlcic7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIEFtYXAsXG4gIEFtYXBNYXJrZXJcbl07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb21wb25lbnRzLmZvckVhY2goKGNvbXApID0+IHtcbiAgICBjb21wLmluaXQoV2VleCk7XG4gIH0pO1xuICBhbWFwTW9kdWxlUmVnKFdlZXgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXRcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViL2luZGV4LmpzIiwiLy8gQU1hcCBtb2R1bGVcbmNvbnN0IGFtYXAgPSB7XG4gIC8qKiBnZXQgdXNlciBsb2FjdGlvbiBieSBicm93c2VyIGFuZCBJUFxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICogQHBhcmFtIHtmdW5jdGlvbn0gZXJyb3JDYWxsYmFja1xuICAqKi9cbiAgZ2V0VXNlckxvY2F0aW9uKG1hcFJlZiwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBnZW8gPSBuZXcgQU1hcC5HZW9sb2NhdGlvbih7XG4gICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUsXG4gICAgICB0aW1lb3V0OiAxMDAwMFxuICAgIH0pO1xuICAgIGdlby5nZXRDdXJyZW50UG9zaXRpb24oKHN0YXR1cywgcmVzKSA9PiB7XG4gICAgICBpZiAoc3RhdHVzICE9PSAnZXJyb3InKSB7XG4gICAgICAgIHNlbGYuc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFjaywge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbcmVzLnBvc2l0aW9uLmdldExuZygpLCByZXMucG9zaXRpb24uZ2V0TGF0KCldXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXN1bHQ6ICdzdWNjZXNzJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihyZXMubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IG1ldGEgPSB7XG4gIGFtYXA6IFt7XG4gICAgbmFtZTogJ2dldFVzZXJMb2NhdGlvbicsXG4gICAgYXJnczogWydzdHJpbmcnLCAnZnVuY3Rpb24nXVxuICB9XVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoV2VleCkge1xuICBXZWV4LnJlZ2lzdGVyQXBpTW9kdWxlKCdhbWFwJywgYW1hcCwgbWV0YSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LXBsdWdpbi1hbWFwL3dlYi9tb2R1bGUvYW1hcC5qcyIsImltcG9ydCBtYXJrZXJNYW5hZ2UgZnJvbSAnLi4vc2VydmljZS9tYXJrZXInO1xuaW1wb3J0IG1hcExvYWRlciBmcm9tICcuLi9zZXJ2aWNlL21hcC1sb2FkZXInO1xuaW1wb3J0IGFtYXBNYW5hZ2VyIGZyb20gJy4uL3NlcnZpY2UvbWFwLW1hbmFnZXInO1xuaW1wb3J0IHZlbmRvciBmcm9tICcuLi9zZXJ2aWNlL3ZlbmRvcic7XG5cblxuY29uc3QgbG9hZGluZ0dpZiA9ICdodHRwOi8vaW1nMS52dWVkLnZhbnRoaW5rLmNuL3Z1ZWQyMTEzZWFhMDYyYWJiYWVlMDQ0MWQxNmE3ODQ4ZDIzZS5naWYnO1xuY29uc3QgcGFyYW1zID0ge1xuICBjZW50ZXI6IHVuZGVmaW5lZCxcbiAgem9vbTogMTEsXG4gIHRvb2xiYXI6IHRydWUsXG4gIHNjYWxlOiBmYWxzZSxcbiAgZ2VvbG9jYXRpb246IGZhbHNlLFxuICByZXNpemVFbmFibGU6IHRydWVcbn07XG5jb25zdCBldmVudHMgPSBbXG4gICd6b29tY2hhbmdlJyxcbiAgJ2RyYWdlbmQnXG5dO1xuLy8gcHJvdG90eXBlIG1ldGhvZHMuXG5jb25zdCBwcm90byA9IHtcbiAgY3JlYXRlKCkge1xuICAgIHRoaXMubWFwd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMubWFwd3JhcC5pZCA9IHZlbmRvci5nZW5nZXJhdGVSYW5kb21JZCgnbWFwJyk7XG4gICAgdGhpcy5tYXB3cmFwLmFwcGVuZCh0aGlzLnJlbmRlckxvYWRpbmdTcGlubmVyKCkpO1xuICAgIHJldHVybiB0aGlzLm1hcHdyYXA7XG4gIH0sXG4gIHJlbmRlckxvYWRpbmdTcGlubmVyKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gNjA7XG4gICAgZWwuc3R5bGUubWFyZ2luID0gJzIwIGF1dG8nO1xuICAgIGVsLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gbG9hZGluZ0dpZjtcbiAgICBlbC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ+mrmOW+t+WcsOWbvuWKoOi9veS4rS4uLi4nKSk7XG4gICAgZWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcmV0dXJuIGVsO1xuICB9LFxuICByZWFkeSgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAod2luZG93LkFNYXApIHtcbiAgICAgIHRoaXMubWFwID0gbmV3IEFNYXAuTWFwKHRoaXMubWFwd3JhcC5pZCwgcGFyYW1zKTtcbiAgICAgIEFNYXAucGx1Z2luKFsnQU1hcC5Ub29sQmFyJywgJ0FNYXAuR2VvbG9jYXRpb24nXSwgKCkgPT4ge1xuICAgICAgICBpZiAocGFyYW1zLnNjYWxlKSB7XG4gICAgICAgICAgc2VsZi5tYXAuYWRkQ29udHJvbChuZXcgQU1hcC5Ub29sQmFyKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgICBzZWxmLm1hcC5hZGRDb250cm9sKG5ldyBBTWFwLkdlb2xvY2F0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgICAgYW1hcE1hbmFnZXIuaW5pdE1hcCh0aGlzLm1hcHdyYXAuaWQsIHRoaXMubWFwKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgbWFya2VyTWFuYWdlLnJlbW92ZU1ha2VyKGNoaWxkLmRhdGEpO1xuICB9LFxuICBpbml0RXZlbnRzKCkge1xuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudE5hbWUpID0+IHtcbiAgICAgIEFNYXAuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXAsIGV2ZW50TmFtZSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnROYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBhdHRyID0ge1xuICBjZW50ZXIodmFsKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoID09PSAyKSB7XG4gICAgICBwYXJhbXMuY2VudGVyID0gdmFsO1xuICAgICAgaWYgKHdpbmRvdy5BTWFwKSB7XG4gICAgICAgIHRoaXMubWFwLnNldENlbnRlcihwYXJhbXMuY2VudGVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25zdCBnZW8gPSBuZXcgQU1hcC5HZW9sb2NhdGlvbih7XG4gICAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgIGdlby5nZXRDdXJyZW50UG9zaXRpb24oKTtcbiAgICAgIEFNYXAuZXZlbnQuQU1hcC5ldmVudC5hZGRMaXN0ZW5lcihnZW8sICdjb21wbGV0ZScsIChkYXRhKSA9PiB7XG4gICAgICAgIHBhcmFtcy5jZW50ZXIgPSBbZGF0YS5wb3NpdGlvbi5nZXRMbmcoKSwgZGF0YS5wb3NpdGlvbi5nZXRMYXQoKV07XG4gICAgICAgIHNlbGYubWFwLnNldENlbnRlcihwYXJhbXMuY2VudGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgem9vbSh2YWwpIHtcbiAgICBpZiAoL15bMC05XSskLy50ZXN0KHZhbCkpIHtcbiAgICAgIHBhcmFtcy56b29tID0gdmFsO1xuICAgIH1cbiAgICBpZiAod2luZG93LkFNYXApIHtcbiAgICAgIHRoaXMubWFwLnNldFpvb20ocGFyYW1zLnpvb20pO1xuICAgIH1cbiAgfSxcbiAgc2NhbGUodmFsKSB7XG4gICAgcGFyYW1zLnNjYWxlID0gdmFsO1xuICB9LFxuICBnZW9sb2NhdGlvbih2YWwpIHtcbiAgICBwYXJhbXMuZ2VvbG9jYXRpb24gPSB2YWw7XG4gIH0sXG4gIHNka0tleSh2YWwpIHtcbiAgICBsZXQga2V5ID0gJyc7XG4gICAgaWYgKHZhbCkge1xuICAgICAga2V5ID0gdmFsLmg1O1xuICAgIH1cbiAgICBtYXBMb2FkZXIubG9hZCh7XG4gICAgICBrZXk6IGtleVxuICAgIH0sIHRoaXMubWFwd3JhcCwgKCkgPT4gdGhpcy5yZWFkeSgpKTtcbiAgfSxcbn07XG5cbmNvbnN0IGV2ZW50ID0ge1xuICB6b29tY2hhbmdlOiB7XG4gICAgZXh0cmEoKSB7XG4gICAgICByZXR1cm4geyBpc1N1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG4gIH0sXG4gIGRyYWdlbmQ6IHtcbiAgICBleHRyYSgpIHtcbiAgICAgIHJldHVybiB7IGlzU3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gaW5pdChXZWV4KSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IFdlZXguQ29tcG9uZW50O1xuICBjb25zdCBleHRlbmQgPSBXZWV4LnV0aWxzLmV4dGVuZDtcblxuICBmdW5jdGlvbiBBbWFwKGRhdGEpIHtcbiAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfVxuICBBbWFwLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChBbWFwLnByb3RvdHlwZSwgcHJvdG8pO1xuICBleHRlbmQoQW1hcC5wcm90b3R5cGUsIHsgYXR0ciB9KTtcbiAgZXh0ZW5kKEFtYXAucHJvdG90eXBlLCB7XG4gICAgc3R5bGU6IGV4dGVuZChPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUuc3R5bGUpLCB7fSlcbiAgfSk7XG4gIGV4dGVuZChBbWFwLnByb3RvdHlwZSwgeyBldmVudCB9KTtcbiAgV2VleC5yZWdpc3RlckNvbXBvbmVudCgnd2VleC1hbWFwJywgQW1hcCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LXBsdWdpbi1hbWFwL3dlYi9jb21wb25lbnRzL2FtYXAuanMiLCIvLyBhIGxpYiB0byBtYW5hZ2UgYWxsIG1hcmtlclxuaW1wb3J0IGFtYXBNYW5hZ2VyIGZyb20gJy4vbWFwLW1hbmFnZXInO1xuaW1wb3J0IHZlbmRvciBmcm9tICcuL3ZlbmRvcic7XG5cbmNvbnN0IG1hcmtlcnMgPSB7fTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGFuZ2VNYXJrZXIoYXJyLCBtYXApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGF0YSA9IGFycltpXTtcbiAgICAgIGNvbnN0IG1hcmtlciA9IHRoaXMuZmluZE1hcmtlcihkYXRhKTtcbiAgICAgIGlmICghbWFya2VyKSB7XG4gICAgICAgIHRoaXMuYWRkTWFya2VyKGRhdGEsIG1hcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZU1hcmtlcihkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGFkZE1hcmtlcihkYXRhKSB7XG4gICAgY29uc3QgbWFwID0gYW1hcE1hbmFnZXIuZ2V0TWFwKCk7XG4gICAgaWYgKCFtYXApIHtcbiAgICAgIHJldHVybiBhbWFwTWFuYWdlci5hZGRSZWFkeUNhbGxiYWNrKChtYXBJbnMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRNYXJrZXIoZGF0YSwgbWFwSW5zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZXRNYXJrZXIoZGF0YSwgbWFwKTtcbiAgfSxcbiAgc2V0TWFya2VyKGRhdGEsIG1hcCkge1xuICAgIGxldCBpY29uID0gbnVsbDtcbiAgICBpZiAoZGF0YS5pY29uKSB7XG4gICAgICBpY29uID0gbmV3IEFNYXAuSWNvbih7XG4gICAgICAgIGltYWdlOiBkYXRhLmljb24sXG4gICAgICAgIHNpemU6IG5ldyBBTWFwLlNpemUoNjQsIDY0KVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBBTWFwLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogZGF0YS5wb3NpdGlvbixcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgaWNvbjogaWNvbixcbiAgICAgIG1hcDogbWFwLFxuICAgIH0pO1xuICAgIG1hcmtlcnNbdGhpcy5fX2dldE1pZChkYXRhKV0gPSBtYXJrZXI7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cyhkYXRhLmV2ZW50cywgbWFya2VyKTtcbiAgfSxcbiAgcmVtb3ZlTWFrZXIoZGF0YSkge1xuICAgIGNvbnN0IG1hcmtlciA9IHRoaXMuZmluZE1hcmtlcihkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhtYXJrZXIpO1xuICAgIG1hcmtlci5zZXRNYXAobnVsbCk7XG4gIH0sXG4gIHVwZGF0ZU1hcmtlcihkYXRhLCBhdHRyLCB2YWwpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBjb25zdCBtYXJrZXIgPSB0aGlzLmZpbmRNYXJrZXIoZGF0YSk7XG4gICAgaWYgKCFtYXJrZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgbWV0aG9kID0gdmVuZG9yLnNldEZpcnN0TGV0dGVyVG9VcHBlcmNhc2UoYXR0cik7XG4gICAgbWFya2VyWydzZXQnICsgbWV0aG9kXSh2YWwpO1xuICB9LFxuICByZWdpc3RlckV2ZW50cyhldmVudHMsIG1hcmtlcikge1xuICAgIGlmICh0eXBlb2YgZXZlbnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXZlbnRzKSB7XG4gICAgICAgIEFNYXAuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCBrZXksIGV2ZW50c1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlbW92ZU1hcmtlcihkYXRhKSB7XG4gICAgbGV0IG1hcmtlciA9IHRoaXMuZmluZE1hcmtlcihkYXRhKTtcbiAgICBpZiAobWFya2VyKSB7XG4gICAgICBtYXJrZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICBtYXJrZXIgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgZmluZE1hcmtlcihkYXRhKSB7XG4gICAgY29uc3QgbWlkID0gdGhpcy5fX2dldE1pZChkYXRhKTtcbiAgICByZXR1cm4gbWFya2Vyc1ttaWRdO1xuICB9LFxuICBfX2dldE1pZChkYXRhKSB7XG4gICAgcmV0dXJuICdtaWQtJyArIGRhdGEucmVmIHx8IGRhdGEucG9zaXRpb24uam9pbignLScpO1xuICB9LFxuICBfX2lzTWFrZXIob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iai5DTEFTU19OQU1FID09PSAnQU1hcC5NYXJrZXInO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LXBsdWdpbi1hbWFwL3dlYi9zZXJ2aWNlL21hcmtlci5qcyIsIi8qKiBtYXAgaW5zdGFuY2UgbWFuYWdlclxuKiAyMDE3MDIwNFxuKiovXG5sZXQgY2FsbGJhY2tTdGFjayA9IFtdO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXRNYXAoaWQsIG1hcCkge1xuICAgIGlmICghdGhpcy5fX21hcHMpIHtcbiAgICAgIHRoaXMuX19tYXBzID0ge307XG4gICAgfVxuICAgIHRoaXMuX19tYXBzW2lkXSA9IG1hcDtcbiAgICBjYWxsYmFja1N0YWNrLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICBjYihtYXApO1xuICAgIH0pO1xuICAgIGNhbGxiYWNrU3RhY2sgPSBbXTtcbiAgfSxcbiAgZ2V0TWFwKGlkKSB7XG4gICAgaWYgKCF0aGlzLl9fbWFwcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICghaWQpIHtcbiAgICAgIGlkID0gT2JqZWN0LmtleXModGhpcy5fX21hcHMpWzBdO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLl9fbWFwcyk7XG4gICAgcmV0dXJuIHRoaXMuX19tYXBzW2lkXTtcbiAgfSxcbiAgYWRkUmVhZHlDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrU3RhY2sucHVzaChjYWxsYmFjayk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViL3NlcnZpY2UvbWFwLW1hbmFnZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2VuZ2VyYXRlUmFuZG9tSWQocHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCArICgobmV3IERhdGUoKSkuZ2V0VGltZSgpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDksMykpICsgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwMDAwKTtcbiAgfSxcbiAgc2V0Rmlyc3RMZXR0ZXJUb1VwcGVyY2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnN1YnN0cigwLDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyaW5nKDEpOyAgXG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LXBsdWdpbi1hbWFwL3dlYi9zZXJ2aWNlL3ZlbmRvci5qcyIsImNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICBrZXk6ICcnLFxuICB2OiAnMS4zJyxcbiAgdXJsOiAnaHR0cHM6Ly93ZWJhcGkuYW1hcC5jb20vbWFwcydcbn07XG4gXG5jb25zdCBnZW5nZXJhdGVTY3JpcHRVcmwgPSBmdW5jdGlvbihvYmopIHtcbiAgbGV0IHBhcmFtQXJyID0gW107XG4gIGZvcihsZXQga2V5IGluIG9iaikge1xuICAgIGlmKGtleSAhPT0gJ3VybCcpIHtcbiAgICAgIHBhcmFtQXJyLnB1c2goZW5jb2RlVVJJKGtleSArICc9JyArIG9ialtrZXldKSk7ICBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iai51cmwgKz0gJz8nICsgcGFyYW1BcnIuam9pbignJicpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFxuICBsb2FkKGNvbmZpZyxjb250YWluZXIsY2FsbGJhY2spIHtcbiAgICBsZXQgbmV3Q29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSxERUZBVUxUX0NPTkZJRyxjb25maWcpO1xuICAgIGxldCBsaWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBsaWIuc3JjID0gZ2VuZ2VyYXRlU2NyaXB0VXJsKG5ld0NvbmZpZyk7XG4gICAgY29uc29sZS5sb2cobGliLnNyYyk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxpYi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJyxmdW5jdGlvbigpIHtcbiAgICAgIHdpbmRvdy5tYXBsb2FkZWQgPSB0cnVlO1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpYik7ICBcbiAgICB0aGlzLmxvYWRUaW1lb3V0KGNvbnRhaW5lcik7XG4gIH0sXG4gIFxuICBsb2FkVGltZW91dCh3cmFwKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZighd2luZG93LkFtYXApIHtcbiAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfph43mlrDliqDovb0nKSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgd3JhcC5jaGlsZE5vZGVzWzBdLnJlbW92ZSgpO1xuICAgICAgICB3cmFwLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwMCk7XG4gIH1cblxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViL3NlcnZpY2UvbWFwLWxvYWRlci5qcyIsImltcG9ydCBtYXJrZXJNYW5hZ2VyIGZyb20gJy4uL3NlcnZpY2UvbWFya2VyJztcblxuY29uc3QgcGFyYW1zID0ge1xuICBwb2lzdGlvbjogW10sXG4gIHRpdGxlOiAnJyxcbiAgaWNvbjogJydcbn07XG5cbi8vIHByb3RvdHlwZSBtZXRob2RzLlxuY29uc3QgcHJvdG8gPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5hdHRyO1xuICAgIG1hcmtlck1hbmFnZXIuYWRkTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLFxuICAgICAgaWNvbjogZGF0YS5pY29uLFxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICByZWY6IHRoaXMuZGF0YS5yZWYsXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtYXA6IHdpbmRvdy5BbWFwXG4gICAgfSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIHVwZGF0ZUF0dHJzKGF0dHJzKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGF0dHJzKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgcmVmOiB0aGlzLmRhdGEucmVmXG4gICAgfTtcbiAgICBrZXlzLmZvckVhY2goKGspID0+IHtcbiAgICAgIG1hcmtlck1hbmFnZXIudXBkYXRlTWFya2VyKGRhdGEsIGssIGF0dHJzW2tdKTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgYXR0ciA9IHtcbiAgcG9zaXRpb24odmFsKSB7XG4gICAgY29uc29sZS5sb2codmFsKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGggPT09IDIpIHtcbiAgICAgIHBhcmFtcy5wb3NpdGlvbiA9IHZhbDtcbiAgICB9XG4gIH0sXG4gIGljb24odmFsKSB7XG4gICAgcGFyYW1zLmljb24gPSB2YWw7XG4gIH0sXG4gIHRpdGxlKHZhbCkge1xuICAgIHBhcmFtcy50aXRsZSA9IHZhbDtcbiAgfVxufTtcblxuY29uc3QgZXZlbnQgPSB7XG4gIGNsaWNrOiB7XG4gICAgZXh0cmEoKSB7XG4gICAgICByZXR1cm4geyBpc1N1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcE1ha2VyKGRhdGEpIHtcbiAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfVxuICBBbWFwTWFrZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlKTtcbiAgZXh0ZW5kKEFtYXBNYWtlci5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXBNYWtlci5wcm90b3R5cGUsIHsgYXR0ciB9KTtcbiAgZXh0ZW5kKEFtYXBNYWtlci5wcm90b3R5cGUsIHsgZXZlbnQgfSk7XG4gIFdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ3dlZXgtYW1hcC1tYXJrZXInLCBBbWFwTWFrZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1wbHVnaW4tYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLW1hcmtlci5qcyIsIiAvKipcbiAgKiBJbml0IHdlZXggaW5zdGFuY2UgZGVwZW5kaW5nIG9uIHRoZSB1cmwgcGFyYW1zLlxuICAqIFRoZXJlIGFyZSB0aHJlZSB3YXlzIHRvIGxvYWQgd2VleCBidW5kbGVzLCBkZXBlbmRzIG9uIHRoZVxuICAqIHBhcmFtZXRlciAnbG9hZGVyJyBpbiB0aGUgdXJsOlxuICAqXG4gICogICArIHhocjogdXNlIFhNTEh0dHBSZXF1ZXN0LiBQYXJhbWV0ZXIgJ3BhZ2UnIHNob3VsZCBiZVxuICAqICAgdGhlIGJ1bmRsZSdzIHVybC5cbiAgKiAgICsgc291cmNlOiB1c2UgdGhlIHRyYW5zZm9ybWVkIGNvZGUgaXRzZWxmLiAncGFnZScgc2hvdWxkXG4gICogICBiZSB0aGUgdHJhbnNmb3JtZWQgd2VleCBidW5kbGUuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gYnVuZGxlIC0gSXQgaGFzIGRpZmZlcmVudCBtZWFuaW5nIGRlcGVuZHMgb25cbiAgKiAgIHRoZSB0eXBlIG9mIGxvYWRlci5cbiAgKi9cbiAgXG5cbiAgXG4gKGZ1bmN0aW9uICgpIHtcbiAgIGZ1bmN0aW9uIGdldFVybFBhcmFtKGtleSkge1xuICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cCgnWz98Jl0nICsga2V5ICsgJz0oW14mXSspJylcbiAgICAgdmFyIG1hdGNoID0gbG9jYXRpb24uc2VhcmNoLm1hdGNoKHJlZylcbiAgICAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdXG4gICB9XG4gICB2YXIgbG9hZGVyID0gZ2V0VXJsUGFyYW0oJ2xvYWRlcicpIHx8ICd4aHInO1xuICAgdmFyIHBhZ2UgPSBnZXRVcmxQYXJhbSgncGFnZScpIHx8ICcuLi9kaXN0L2luZGV4LmpzJztcbiAgIHdpbmRvdy53ZWV4LmluaXQoe1xuICAgICBhcHBJZDogbG9jYXRpb24uaHJlZlxuICAgICAsIGxvYWRlcjogbG9hZGVyXG4gICAgICwgc291cmNlOiBwYWdlXG4gICAgICwgcm9vdElkOiAnd2VleCdcbiAgIH0pXG4gfSkoKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2ViL2pzL2luaXQuanMiXSwic291cmNlUm9vdCI6IiJ9