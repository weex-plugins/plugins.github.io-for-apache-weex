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
	
	var _amap3 = __webpack_require__(6);
	
	var _amap4 = _interopRequireDefault(_amap3);
	
	var _amapMarker = __webpack_require__(10);
	
	var _amapMarker2 = _interopRequireDefault(_amapMarker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import VueAmap from './vue-amap/index';
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// AMap module
	var mapManager = __webpack_require__(5);
	
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
	  },
	
	  /**
	  *  search place
	  * @param {string} mapref
	  * @param {function} callback
	  **/
	  search: function search(q, callback, mapRef) {
	    var _this = this;
	
	    var map = mapManager.getMap();
	    map.placeSearch.search(q, function (status, res) {
	      _this.sender.performCallback(callback, {
	        data: res,
	        result: status === 'complete' ? 'success' : 'error'
	      });
	    });
	  },
	
	  /**
	  * search nearby
	  * @param {string} q query keyword
	  * @param {array} location example:[123.123, 12.123123]
	  * @param {number} distance example: 1000
	  **/
	  searchNearBy: function searchNearBy(q, location, distance, callback, mapRef) {
	    var _this2 = this;
	
	    var map = mapManager.getMap();
	    map.placeSearch.search(q, location, distance, function (status, res) {
	      _this2.sender.performCallback(callback, {
	        data: res,
	        result: status === 'complete' ? 'success' : 'error'
	      });
	    });
	  }
	};
	
	var meta = {
	  amap: [{
	    name: 'getUserLocation',
	    args: ['string', 'function']
	  }, {
	    name: 'searchNearBy',
	    args: ['string', 'function', 'string']
	  }, {
	    name: 'search',
	    args: ['string', 'array', 'number', 'function', 'string']
	  }]
	};
	
	module.exports = function (Weex) {
	  Weex.registerApiModule('amap', amap, meta);
	};

/***/ },
/* 5 */
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
	    return this.__maps[id];
	  },
	  addReadyCallback: function addReadyCallback(callback) {
	    callbackStack.push(callback);
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _marker = __webpack_require__(7);
	
	var _marker2 = _interopRequireDefault(_marker);
	
	var _mapLoader = __webpack_require__(9);
	
	var _mapLoader2 = _interopRequireDefault(_mapLoader);
	
	var _mapManager = __webpack_require__(5);
	
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
	  resizeEnable: true,
	  search: {}
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
	    var _this = this;
	
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
	      AMap.service('AMap.PlaceSearch', function () {
	        _this.map.placeSearch = new AMap.PlaceSearch({
	          city: params.search.city,
	          type: params.search.type,
	          map: _this.map
	        });
	      });
	      this.initEvents();
	      _mapManager2.default.initMap(this.mapwrap.id, this.map);
	    }
	  },
	  removeChild: function removeChild(child) {
	    _marker2.default.removeMaker(child.data);
	  },
	  initEvents: function initEvents() {
	    var _this2 = this;
	
	    events.forEach(function (eventName) {
	      AMap.event.addListener(_this2.map, eventName, function () {
	        _this2.dispatchEvent(eventName);
	      });
	    });
	  }
	};
	
	var attr = {
	  center: function center(val) {
	    var _this3 = this;
	
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
	        var self = _this3;
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
	    var _this4 = this;
	
	    var key = '';
	    if (val) {
	      key = val.h5;
	    }
	    _mapLoader2.default.load({
	      key: key
	    }, this.mapwrap, function () {
	      return _this4.ready();
	    });
	  },
	  search: function search(val) {
	    params.search = val;
	    console.log(val);
	    if (window.AMap) {
	      if (val.city) {
	        this.placeSearch.setCity(val.city);
	      }
	      if (val.type) {
	        this.placeSearch.setCity(val.type);
	      }
	      if (val.keyword) {
	        console.log(this.placeSearch);
	        this.placeSearch.search(val.keyword);
	      }
	    }
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // a lib to manage all marker
	
	
	var _mapManager = __webpack_require__(5);
	
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
	    marker.setMap(null);
	  },
	  updateMarker: function updateMarker(data, attr, val) {
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
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  gengerateRandomId: function gengerateRandomId(prefix) {
	    return prefix + new Date().getTime().toString().substring(9, 3) + parseInt(Math.random() * 10000, 10);
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
	
	var _marker = __webpack_require__(7);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTVkNzI5ZjYzMjA4NTE4NTYzMjEiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9wbHVnaW5fYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1jaGFydC93ZWIvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvbW9kdWxlL2FtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvbWFwLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvdmVuZG9yLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9zZXJ2aWNlL21hcC1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC1tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2pzL2luaXQuanMiXSwibmFtZXMiOlsid2luZG93Iiwid2VleCIsImluc3RhbGwiLCJwcm90byIsImNyZWF0ZSIsIm5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lciIsIkltYWdlIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiYm9yZGVyIiwiYXBwZW5kQ2hpbGQiLCJhdHRyIiwidGV4dCIsInZhbCIsImNyZWF0ZVRleHROb2RlIiwiaW1nc3JjIiwic3JjIiwidHh0Q29sb3IiLCJjb2xvciIsImV2ZW50IiwiY2xpY2siLCJleHRyYSIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJpbml0IiwiV2VleCIsIkNvbXBvbmVudCIsImV4dGVuZCIsInV0aWxzIiwiUG9sYXJvaWRQaG90byIsImRhdGEiLCJjYWxsIiwicHJvdG90eXBlIiwiT2JqZWN0IiwicmVnaXN0ZXJDb21wb25lbnQiLCJjb21wb25lbnRzIiwiZm9yRWFjaCIsImNvbXAiLCJtb2R1bGUiLCJleHBvcnRzIiwibWFwTWFuYWdlciIsInJlcXVpcmUiLCJhbWFwIiwiZ2V0VXNlckxvY2F0aW9uIiwibWFwUmVmIiwiY2FsbGJhY2siLCJzZWxmIiwiZ2VvIiwiQU1hcCIsIkdlb2xvY2F0aW9uIiwiZW5hYmxlSGlnaEFjY3VyYWN5IiwidGltZW91dCIsImdldEN1cnJlbnRQb3NpdGlvbiIsInN0YXR1cyIsInJlcyIsInNlbmRlciIsInBlcmZvcm1DYWxsYmFjayIsInBvc2l0aW9uIiwiZ2V0TG5nIiwiZ2V0TGF0IiwicmVzdWx0IiwiY29uc29sZSIsIndhcm4iLCJtZXNzYWdlIiwic2VhcmNoIiwicSIsIm1hcCIsImdldE1hcCIsInBsYWNlU2VhcmNoIiwic2VhcmNoTmVhckJ5IiwibG9jYXRpb24iLCJkaXN0YW5jZSIsIm1ldGEiLCJuYW1lIiwiYXJncyIsInJlZ2lzdGVyQXBpTW9kdWxlIiwiY2FsbGJhY2tTdGFjayIsImluaXRNYXAiLCJpZCIsIl9fbWFwcyIsImNiIiwia2V5cyIsImFkZFJlYWR5Q2FsbGJhY2siLCJwdXNoIiwibG9hZGluZ0dpZiIsInBhcmFtcyIsImNlbnRlciIsInVuZGVmaW5lZCIsInpvb20iLCJ0b29sYmFyIiwic2NhbGUiLCJnZW9sb2NhdGlvbiIsInJlc2l6ZUVuYWJsZSIsImV2ZW50cyIsIm1hcHdyYXAiLCJnZW5nZXJhdGVSYW5kb21JZCIsImFwcGVuZCIsInJlbmRlckxvYWRpbmdTcGlubmVyIiwiZWwiLCJoZWlnaHQiLCJtYXJnaW4iLCJpbWFnZSIsInJlYWR5IiwiTWFwIiwicGx1Z2luIiwiYWRkQ29udHJvbCIsIlRvb2xCYXIiLCJzZXJ2aWNlIiwiUGxhY2VTZWFyY2giLCJjaXR5IiwidHlwZSIsImluaXRFdmVudHMiLCJyZW1vdmVDaGlsZCIsImNoaWxkIiwicmVtb3ZlTWFrZXIiLCJldmVudE5hbWUiLCJhZGRMaXN0ZW5lciIsImRpc3BhdGNoRXZlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJzZXRDZW50ZXIiLCJ0ZXN0Iiwic2V0Wm9vbSIsInNka0tleSIsImtleSIsImg1IiwibG9hZCIsImxvZyIsInNldENpdHkiLCJrZXl3b3JkIiwiem9vbWNoYW5nZSIsImlzU3VjY2VzcyIsImRyYWdlbmQiLCJBbWFwIiwibWFya2VycyIsImNoYW5nZU1hcmtlciIsImFyciIsImkiLCJtYXJrZXIiLCJmaW5kTWFya2VyIiwiYWRkTWFya2VyIiwicmVtb3ZlTWFya2VyIiwibWFwSW5zIiwic2V0TWFya2VyIiwiaWNvbiIsIkljb24iLCJzaXplIiwiU2l6ZSIsIk1hcmtlciIsInRpdGxlIiwiX19nZXRNaWQiLCJyZWdpc3RlckV2ZW50cyIsInNldE1hcCIsInVwZGF0ZU1hcmtlciIsIm1ldGhvZCIsInNldEZpcnN0TGV0dGVyVG9VcHBlcmNhc2UiLCJ2aXNpYmxlIiwibWlkIiwicmVmIiwiam9pbiIsIl9faXNNYWtlciIsIm9iaiIsIkNMQVNTX05BTUUiLCJwcmVmaXgiLCJEYXRlIiwiZ2V0VGltZSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwic3RyIiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJERUZBVUxUX0NPTkZJRyIsInYiLCJ1cmwiLCJnZW5nZXJhdGVTY3JpcHRVcmwiLCJwYXJhbUFyciIsImVuY29kZVVSSSIsImNvbmZpZyIsImNvbnRhaW5lciIsIm5ld0NvbmZpZyIsImFzc2lnbiIsImxpYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYXBsb2FkZWQiLCJoZWFkIiwibG9hZFRpbWVvdXQiLCJ3cmFwIiwic2V0VGltZW91dCIsInJlbG9hZCIsImNoaWxkTm9kZXMiLCJyZW1vdmUiLCJwb2lzdGlvbiIsInVwZGF0ZUF0dHJzIiwiYXR0cnMiLCJrIiwiQW1hcE1ha2VyIiwiZ2V0VXJsUGFyYW0iLCJyZWciLCJSZWdFeHAiLCJtYXRjaCIsImxvYWRlciIsInBhZ2UiLCJhcHBJZCIsImhyZWYiLCJzb3VyY2UiLCJyb290SWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7Ozs7QUFEQUEsUUFBT0MsSUFBUCxJQUFlRCxPQUFPQyxJQUFQLENBQVlDLE9BQVosZUFBZjs7QUFFQUYsUUFBT0MsSUFBUCxJQUFlRCxPQUFPQyxJQUFQLENBQVlDLE9BQVosZUFBZixDOzs7Ozs7QUNIQTs7Ozs7QUFHQSxLQUFNQyxRQUFRO0FBQ1pDLFNBRFksb0JBQ0Y7QUFDUixVQUFLQyxJQUFMLEdBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxJQUFJQyxLQUFKLEVBQWI7QUFDQSxVQUFLRCxLQUFMLENBQVdFLEtBQVgsQ0FBaUJDLFlBQWpCLEdBQWdDLE1BQWhDO0FBQ0EsVUFBS04sSUFBTCxDQUFVSyxLQUFWLENBQWdCRSxPQUFoQixHQUEwQixrQkFBMUI7QUFDQSxVQUFLUCxJQUFMLENBQVVLLEtBQVYsQ0FBZ0JHLFNBQWhCLEdBQTRCLFFBQTVCO0FBQ0EsVUFBS1IsSUFBTCxDQUFVSyxLQUFWLENBQWdCSSxNQUFoQixHQUF5QixnQkFBekI7QUFDQSxVQUFLVCxJQUFMLENBQVVVLFdBQVYsQ0FBc0IsS0FBS1AsS0FBM0I7QUFDQSxVQUFLSCxJQUFMLENBQVVVLFdBQVYsQ0FBc0JULFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdEI7O0FBRUEsWUFBTyxLQUFLRixJQUFaO0FBQ0Q7QUFaVyxFQUFkOztBQWVBO0FBQ0EsS0FBTVcsT0FBTztBQUNYQyxPQURXLGdCQUNMQyxHQURLLEVBQ0E7QUFDVCxTQUFJRCxPQUFPWCxTQUFTYSxjQUFULENBQXdCRCxHQUF4QixDQUFYO0FBQ0EsVUFBS2IsSUFBTCxDQUFVVSxXQUFWLENBQXNCRSxJQUF0QjtBQUNELElBSlU7QUFNWEcsU0FOVyxrQkFNSkYsR0FOSSxFQU1DO0FBQ1YsVUFBS1YsS0FBTCxDQUFXYSxHQUFYLEdBQWlCSCxHQUFqQjtBQUNEO0FBUlUsRUFBYjs7QUFXQTtBQUNBLEtBQU1SLFFBQVE7QUFDWlksV0FEWSxvQkFDRkosR0FERSxFQUNHO0FBQ2IsVUFBS1YsS0FBTCxDQUFXRSxLQUFYLENBQWlCYSxLQUFqQixHQUF5QkwsR0FBekI7QUFDRDtBQUhXLEVBQWQ7O0FBTUE7QUFDQSxLQUFNTSxRQUFRO0FBQ1pDLFVBQU87QUFDTEMsVUFESyxtQkFDSTtBQUNQLGNBQU87QUFDTEMsZ0JBQU8sS0FBS25CLEtBQUwsQ0FBV29CO0FBRGIsUUFBUDtBQUdEO0FBTEk7QUFESyxFQUFkOztBQVVBLFVBQVNDLElBQVQsQ0FBZUMsSUFBZixFQUFxQjtBQUNuQixPQUFNQyxZQUFZRCxLQUFLQyxTQUF2QjtBQUNBLE9BQU1DLFNBQVNGLEtBQUtHLEtBQUwsQ0FBV0QsTUFBMUI7O0FBRUEsWUFBU0UsYUFBVCxDQUF3QkMsSUFBeEIsRUFBOEI7QUFDNUJKLGVBQVVLLElBQVYsQ0FBZSxJQUFmLEVBQXFCRCxJQUFyQjtBQUNEOztBQUVERCxpQkFBY0csU0FBZCxHQUEwQkMsT0FBT2xDLE1BQVAsQ0FBYzJCLFVBQVVNLFNBQXhCLENBQTFCO0FBQ0FMLFVBQU9FLGNBQWNHLFNBQXJCLEVBQWdDbEMsS0FBaEM7QUFDQTZCLFVBQU9FLGNBQWNHLFNBQXJCLEVBQWdDLEVBQUVyQixVQUFGLEVBQWhDO0FBQ0FnQixVQUFPRSxjQUFjRyxTQUFyQixFQUFnQztBQUM5QjNCLFlBQU9zQixPQUFPTSxPQUFPbEMsTUFBUCxDQUFjMkIsVUFBVU0sU0FBVixDQUFvQjNCLEtBQWxDLENBQVAsRUFBaURBLEtBQWpEO0FBRHVCLElBQWhDO0FBR0FzQixVQUFPRSxjQUFjRyxTQUFyQixFQUFnQyxFQUFFYixZQUFGLEVBQWhDOztBQUVBTSxRQUFLUyxpQkFBTCxDQUF1QixZQUF2QixFQUFxQ0wsYUFBckM7QUFDRDs7bUJBRWMsRUFBRUwsVUFBRixFOzs7Ozs7OztBQ25FZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBO0FBQ0EsS0FBTVcsYUFBYSxzQ0FBbkI7O0FBS0EsVUFBU1gsSUFBVCxDQUFjQyxJQUFkLEVBQW9CO0FBQ2xCVSxjQUFXQyxPQUFYLENBQW1CLFVBQUNDLElBQUQsRUFBVTtBQUMzQkEsVUFBS2IsSUFBTCxDQUFVQyxJQUFWO0FBQ0QsSUFGRDtBQUdBLHVCQUFjQSxJQUFkO0FBQ0Q7QUFDRGEsUUFBT0MsT0FBUCxHQUFpQjtBQUNmZjtBQURlLEVBQWpCLEM7Ozs7Ozs7O0FDZkE7QUFDQSxLQUFNZ0IsYUFBYSxtQkFBQUMsQ0FBUSxDQUFSLENBQW5COztBQUVBLEtBQU1DLE9BQU87QUFDWDs7OztBQUlBQyxrQkFMVywyQkFLS0MsTUFMTCxFQUthQyxRQUxiLEVBS3VCO0FBQ2hDLFNBQU1DLE9BQU8sSUFBYjtBQUNBLFNBQU1DLE1BQU0sSUFBSUMsS0FBS0MsV0FBVCxDQUFxQjtBQUMvQkMsMkJBQW9CLElBRFc7QUFFL0JDLGdCQUFTO0FBRnNCLE1BQXJCLENBQVo7QUFJQUosU0FBSUssa0JBQUosQ0FBdUIsVUFBQ0MsTUFBRCxFQUFTQyxHQUFULEVBQWlCO0FBQ3RDLFdBQUlELFdBQVcsT0FBZixFQUF3QjtBQUN0QlAsY0FBS1MsTUFBTCxDQUFZQyxlQUFaLENBQTRCWCxRQUE1QixFQUFzQztBQUNwQ2YsaUJBQU07QUFDSjJCLHVCQUFVLENBQUNILElBQUlHLFFBQUosQ0FBYUMsTUFBYixFQUFELEVBQXdCSixJQUFJRyxRQUFKLENBQWFFLE1BQWIsRUFBeEI7QUFETixZQUQ4QjtBQUlwQ0MsbUJBQVE7QUFKNEIsVUFBdEM7QUFNRCxRQVBELE1BT087QUFDTEMsaUJBQVFDLElBQVIsQ0FBYVIsSUFBSVMsT0FBakI7QUFDRDtBQUNGLE1BWEQ7QUFZRCxJQXZCVTs7QUF3Qlg7Ozs7O0FBS0FDLFNBN0JXLGtCQTZCSkMsQ0E3QkksRUE2QkRwQixRQTdCQyxFQTZCU0QsTUE3QlQsRUE2QmlCO0FBQUE7O0FBQzFCLFNBQU1zQixNQUFNMUIsV0FBVzJCLE1BQVgsRUFBWjtBQUNBRCxTQUFJRSxXQUFKLENBQWdCSixNQUFoQixDQUF1QkMsQ0FBdkIsRUFBMEIsVUFBQ1osTUFBRCxFQUFTQyxHQUFULEVBQWlCO0FBQ3pDLGFBQUtDLE1BQUwsQ0FBWUMsZUFBWixDQUE0QlgsUUFBNUIsRUFBc0M7QUFDcENmLGVBQU13QixHQUQ4QjtBQUVwQ00saUJBQVFQLFdBQVcsVUFBWCxHQUF3QixTQUF4QixHQUFvQztBQUZSLFFBQXRDO0FBSUQsTUFMRDtBQU1ELElBckNVOztBQXNDWDs7Ozs7O0FBTUFnQixlQTVDVyx3QkE0Q0VKLENBNUNGLEVBNENLSyxRQTVDTCxFQTRDZUMsUUE1Q2YsRUE0Q3lCMUIsUUE1Q3pCLEVBNENtQ0QsTUE1Q25DLEVBNEMyQztBQUFBOztBQUNwRCxTQUFNc0IsTUFBTTFCLFdBQVcyQixNQUFYLEVBQVo7QUFDQUQsU0FBSUUsV0FBSixDQUFnQkosTUFBaEIsQ0FBdUJDLENBQXZCLEVBQTBCSyxRQUExQixFQUFvQ0MsUUFBcEMsRUFBOEMsVUFBQ2xCLE1BQUQsRUFBU0MsR0FBVCxFQUFpQjtBQUM3RCxjQUFLQyxNQUFMLENBQVlDLGVBQVosQ0FBNEJYLFFBQTVCLEVBQXNDO0FBQ3BDZixlQUFNd0IsR0FEOEI7QUFFcENNLGlCQUFRUCxXQUFXLFVBQVgsR0FBd0IsU0FBeEIsR0FBb0M7QUFGUixRQUF0QztBQUlELE1BTEQ7QUFNRDtBQXBEVSxFQUFiOztBQXVEQSxLQUFNbUIsT0FBTztBQUNYOUIsU0FBTSxDQUFDO0FBQ0wrQixXQUFNLGlCQUREO0FBRUxDLFdBQU0sQ0FBQyxRQUFELEVBQVcsVUFBWDtBQUZELElBQUQsRUFHSDtBQUNERCxXQUFNLGNBREw7QUFFREMsV0FBTSxDQUFDLFFBQUQsRUFBVyxVQUFYLEVBQXVCLFFBQXZCO0FBRkwsSUFIRyxFQU1IO0FBQ0RELFdBQU0sUUFETDtBQUVEQyxXQUFNLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsUUFBcEIsRUFBOEIsVUFBOUIsRUFBMEMsUUFBMUM7QUFGTCxJQU5HO0FBREssRUFBYjs7QUFhQXBDLFFBQU9DLE9BQVAsR0FBaUIsVUFBVWQsSUFBVixFQUFnQjtBQUMvQkEsUUFBS2tELGlCQUFMLENBQXVCLE1BQXZCLEVBQStCakMsSUFBL0IsRUFBcUM4QixJQUFyQztBQUNELEVBRkQsQzs7Ozs7Ozs7QUN2RUE7OztBQUdBLEtBQUlJLGdCQUFnQixFQUFwQjtBQUNBdEMsUUFBT0MsT0FBUCxHQUFpQjtBQUNmc0MsVUFEZSxtQkFDUEMsRUFETyxFQUNIWixHQURHLEVBQ0U7QUFDZixTQUFJLENBQUMsS0FBS2EsTUFBVixFQUFrQjtBQUNoQixZQUFLQSxNQUFMLEdBQWMsRUFBZDtBQUNEO0FBQ0QsVUFBS0EsTUFBTCxDQUFZRCxFQUFaLElBQWtCWixHQUFsQjtBQUNBVSxtQkFBY3hDLE9BQWQsQ0FBc0IsVUFBQzRDLEVBQUQsRUFBUTtBQUM1QkEsVUFBR2QsR0FBSDtBQUNELE1BRkQ7QUFHQVUscUJBQWdCLEVBQWhCO0FBQ0QsSUFWYztBQVdmVCxTQVhlLGtCQVdSVyxFQVhRLEVBV0o7QUFDVCxTQUFJLENBQUMsS0FBS0MsTUFBVixFQUFrQjtBQUNoQixjQUFPLElBQVA7QUFDRDtBQUNELFNBQUksQ0FBQ0QsRUFBTCxFQUFTO0FBQ1BBLFlBQUs3QyxPQUFPZ0QsSUFBUCxDQUFZLEtBQUtGLE1BQWpCLEVBQXlCLENBQXpCLENBQUw7QUFDRDtBQUNELFlBQU8sS0FBS0EsTUFBTCxDQUFZRCxFQUFaLENBQVA7QUFDRCxJQW5CYztBQW9CZkksbUJBcEJlLDRCQW9CRXJDLFFBcEJGLEVBb0JZO0FBQ3pCK0IsbUJBQWNPLElBQWQsQ0FBbUJ0QyxRQUFuQjtBQUNEO0FBdEJjLEVBQWpCLEM7Ozs7Ozs7Ozs7OztBQ0pBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxLQUFNdUMsYUFBYSx1RUFBbkI7QUFDQSxLQUFNQyxTQUFTO0FBQ2JDLFdBQVFDLFNBREs7QUFFYkMsU0FBTSxFQUZPO0FBR2JDLFlBQVMsSUFISTtBQUliQyxVQUFPLEtBSk07QUFLYkMsZ0JBQWEsS0FMQTtBQU1iQyxpQkFBYyxJQU5EO0FBT2I1QixXQUFRO0FBUEssRUFBZjtBQVNBLEtBQU02QixTQUFTLENBQ2IsWUFEYSxFQUViLFNBRmEsQ0FBZjtBQUlBO0FBQ0EsS0FBTS9GLFFBQVE7QUFDWkMsU0FEWSxvQkFDSDtBQUNQLFVBQUsrRixPQUFMLEdBQWU3RixTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxVQUFLNEYsT0FBTCxDQUFhaEIsRUFBYixHQUFrQixpQkFBT2lCLGlCQUFQLENBQXlCLEtBQXpCLENBQWxCO0FBQ0EsVUFBS0QsT0FBTCxDQUFhRSxNQUFiLENBQW9CLEtBQUtDLG9CQUFMLEVBQXBCO0FBQ0EsWUFBTyxLQUFLSCxPQUFaO0FBQ0QsSUFOVztBQU9aRyx1QkFQWSxrQ0FPVztBQUNyQixTQUFNQyxLQUFLakcsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0FnRyxRQUFHN0YsS0FBSCxDQUFTOEYsTUFBVCxHQUFrQixFQUFsQjtBQUNBRCxRQUFHN0YsS0FBSCxDQUFTK0YsTUFBVCxHQUFrQixTQUFsQjtBQUNBRixRQUFHN0YsS0FBSCxDQUFTRyxTQUFULEdBQXFCLFFBQXJCO0FBQ0EsU0FBTTZGLFFBQVFwRyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQW1HLFdBQU1yRixHQUFOLEdBQVlvRSxVQUFaO0FBQ0FjLFFBQUd4RixXQUFILENBQWUyRixLQUFmO0FBQ0EsU0FBTXpGLE9BQU9YLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBVSxVQUFLRixXQUFMLENBQWlCVCxTQUFTYSxjQUFULENBQXdCLGFBQXhCLENBQWpCO0FBQ0FvRixRQUFHeEYsV0FBSCxDQUFlRSxJQUFmO0FBQ0EsWUFBT3NGLEVBQVA7QUFDRCxJQW5CVztBQW9CWkksUUFwQlksbUJBb0JKO0FBQUE7O0FBQ04sU0FBTXhELE9BQU8sSUFBYjtBQUNBLFNBQUluRCxPQUFPcUQsSUFBWCxFQUFpQjtBQUNmLFlBQUtrQixHQUFMLEdBQVcsSUFBSWxCLEtBQUt1RCxHQUFULENBQWEsS0FBS1QsT0FBTCxDQUFhaEIsRUFBMUIsRUFBOEJPLE1BQTlCLENBQVg7QUFDQXJDLFlBQUt3RCxNQUFMLENBQVksQ0FBQyxjQUFELEVBQWlCLGtCQUFqQixDQUFaLEVBQWtELFlBQU07QUFDdEQsYUFBSW5CLE9BQU9LLEtBQVgsRUFBa0I7QUFDaEI1QyxnQkFBS29CLEdBQUwsQ0FBU3VDLFVBQVQsQ0FBb0IsSUFBSXpELEtBQUswRCxPQUFULEVBQXBCO0FBQ0Q7QUFDRCxhQUFJckIsT0FBT00sV0FBWCxFQUF3QjtBQUN0QjdDLGdCQUFLb0IsR0FBTCxDQUFTdUMsVUFBVCxDQUFvQixJQUFJekQsS0FBS0MsV0FBVCxFQUFwQjtBQUNEO0FBQ0YsUUFQRDtBQVFBRCxZQUFLMkQsT0FBTCxDQUFhLGtCQUFiLEVBQWlDLFlBQU07QUFDckMsZUFBS3pDLEdBQUwsQ0FBU0UsV0FBVCxHQUF1QixJQUFJcEIsS0FBSzRELFdBQVQsQ0FBcUI7QUFDMUNDLGlCQUFNeEIsT0FBT3JCLE1BQVAsQ0FBYzZDLElBRHNCO0FBRTFDQyxpQkFBTXpCLE9BQU9yQixNQUFQLENBQWM4QyxJQUZzQjtBQUcxQzVDLGdCQUFLLE1BQUtBO0FBSGdDLFVBQXJCLENBQXZCO0FBS0QsUUFORDtBQU9BLFlBQUs2QyxVQUFMO0FBQ0EsNEJBQVlsQyxPQUFaLENBQW9CLEtBQUtpQixPQUFMLENBQWFoQixFQUFqQyxFQUFxQyxLQUFLWixHQUExQztBQUNEO0FBQ0YsSUExQ1c7QUEyQ1o4QyxjQTNDWSx1QkEyQ0FDLEtBM0NBLEVBMkNPO0FBQ2pCLHNCQUFhQyxXQUFiLENBQXlCRCxNQUFNbkYsSUFBL0I7QUFDRCxJQTdDVztBQThDWmlGLGFBOUNZLHdCQThDQztBQUFBOztBQUNYbEIsWUFBT3pELE9BQVAsQ0FBZSxVQUFDK0UsU0FBRCxFQUFlO0FBQzVCbkUsWUFBSzdCLEtBQUwsQ0FBV2lHLFdBQVgsQ0FBdUIsT0FBS2xELEdBQTVCLEVBQWlDaUQsU0FBakMsRUFBNEMsWUFBTTtBQUNoRCxnQkFBS0UsYUFBTCxDQUFtQkYsU0FBbkI7QUFDRCxRQUZEO0FBR0QsTUFKRDtBQUtEO0FBcERXLEVBQWQ7O0FBdURBLEtBQU14RyxPQUFPO0FBQ1gyRSxTQURXLGtCQUNKekUsR0FESSxFQUNDO0FBQUE7O0FBQ1YsU0FBSXlHLE1BQU1DLE9BQU4sQ0FBYzFHLEdBQWQsS0FBc0JBLElBQUkyRyxNQUFKLEtBQWUsQ0FBekMsRUFBNEM7QUFDMUNuQyxjQUFPQyxNQUFQLEdBQWdCekUsR0FBaEI7QUFDQSxXQUFJbEIsT0FBT3FELElBQVgsRUFBaUI7QUFDZixjQUFLa0IsR0FBTCxDQUFTdUQsU0FBVCxDQUFtQnBDLE9BQU9DLE1BQTFCO0FBQ0Q7QUFDRjtBQUNELFNBQUksT0FBT3pFLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUFBO0FBQzNCLGFBQU1rQyxNQUFNLElBQUlDLEtBQUtDLFdBQVQsQ0FBcUI7QUFDL0JDLCtCQUFvQjtBQURXLFVBQXJCLENBQVo7QUFHQSxhQUFNSixhQUFOO0FBQ0FDLGFBQUlLLGtCQUFKO0FBQ0FKLGNBQUs3QixLQUFMLENBQVc2QixJQUFYLENBQWdCN0IsS0FBaEIsQ0FBc0JpRyxXQUF0QixDQUFrQ3JFLEdBQWxDLEVBQXVDLFVBQXZDLEVBQW1ELFVBQUNqQixJQUFELEVBQVU7QUFDM0R1RCxrQkFBT0MsTUFBUCxHQUFnQixDQUFDeEQsS0FBSzJCLFFBQUwsQ0FBY0MsTUFBZCxFQUFELEVBQXlCNUIsS0FBSzJCLFFBQUwsQ0FBY0UsTUFBZCxFQUF6QixDQUFoQjtBQUNBYixnQkFBS29CLEdBQUwsQ0FBU3VELFNBQVQsQ0FBbUJwQyxPQUFPQyxNQUExQjtBQUNELFVBSEQ7QUFOMkI7QUFVNUI7QUFDRixJQW5CVTtBQW9CWEUsT0FwQlcsZ0JBb0JOM0UsR0FwQk0sRUFvQkQ7QUFDUixTQUFJLFdBQVc2RyxJQUFYLENBQWdCN0csR0FBaEIsQ0FBSixFQUEwQjtBQUN4QndFLGNBQU9HLElBQVAsR0FBYzNFLEdBQWQ7QUFDRDtBQUNELFNBQUlsQixPQUFPcUQsSUFBWCxFQUFpQjtBQUNmLFlBQUtrQixHQUFMLENBQVN5RCxPQUFULENBQWlCdEMsT0FBT0csSUFBeEI7QUFDRDtBQUNGLElBM0JVO0FBNEJYRSxRQTVCVyxpQkE0Qkw3RSxHQTVCSyxFQTRCQTtBQUNUd0UsWUFBT0ssS0FBUCxHQUFlN0UsR0FBZjtBQUNELElBOUJVO0FBK0JYOEUsY0EvQlcsdUJBK0JDOUUsR0EvQkQsRUErQk07QUFDZndFLFlBQU9NLFdBQVAsR0FBcUI5RSxHQUFyQjtBQUNELElBakNVO0FBa0NYK0csU0FsQ1csa0JBa0NKL0csR0FsQ0ksRUFrQ0M7QUFBQTs7QUFDVixTQUFJZ0gsTUFBTSxFQUFWO0FBQ0EsU0FBSWhILEdBQUosRUFBUztBQUNQZ0gsYUFBTWhILElBQUlpSCxFQUFWO0FBQ0Q7QUFDRCx5QkFBVUMsSUFBVixDQUFlO0FBQ2JGLFlBQUtBO0FBRFEsTUFBZixFQUVHLEtBQUsvQixPQUZSLEVBRWlCO0FBQUEsY0FBTSxPQUFLUSxLQUFMLEVBQU47QUFBQSxNQUZqQjtBQUdELElBMUNVO0FBMkNYdEMsU0EzQ1csa0JBMkNKbkQsR0EzQ0ksRUEyQ0M7QUFDVndFLFlBQU9yQixNQUFQLEdBQWdCbkQsR0FBaEI7QUFDQWdELGFBQVFtRSxHQUFSLENBQVluSCxHQUFaO0FBQ0EsU0FBSWxCLE9BQU9xRCxJQUFYLEVBQWlCO0FBQ2YsV0FBSW5DLElBQUlnRyxJQUFSLEVBQWM7QUFDWixjQUFLekMsV0FBTCxDQUFpQjZELE9BQWpCLENBQXlCcEgsSUFBSWdHLElBQTdCO0FBQ0Q7QUFDRCxXQUFJaEcsSUFBSWlHLElBQVIsRUFBYztBQUNaLGNBQUsxQyxXQUFMLENBQWlCNkQsT0FBakIsQ0FBeUJwSCxJQUFJaUcsSUFBN0I7QUFDRDtBQUNELFdBQUlqRyxJQUFJcUgsT0FBUixFQUFpQjtBQUNmckUsaUJBQVFtRSxHQUFSLENBQVksS0FBSzVELFdBQWpCO0FBQ0EsY0FBS0EsV0FBTCxDQUFpQkosTUFBakIsQ0FBd0JuRCxJQUFJcUgsT0FBNUI7QUFDRDtBQUNGO0FBQ0Y7QUExRFUsRUFBYjs7QUE2REEsS0FBTS9HLFFBQVE7QUFDWmdILGVBQVk7QUFDVjlHLFVBRFUsbUJBQ0Y7QUFDTixjQUFPLEVBQUUrRyxXQUFXLElBQWIsRUFBUDtBQUNEO0FBSFMsSUFEQTtBQU1aQyxZQUFTO0FBQ1BoSCxVQURPLG1CQUNDO0FBQ04sY0FBTyxFQUFFK0csV0FBVyxJQUFiLEVBQVA7QUFDRDtBQUhNO0FBTkcsRUFBZDs7QUFhQSxVQUFTNUcsSUFBVCxDQUFjQyxJQUFkLEVBQW9CO0FBQ2xCLE9BQU1DLFlBQVlELEtBQUtDLFNBQXZCO0FBQ0EsT0FBTUMsU0FBU0YsS0FBS0csS0FBTCxDQUFXRCxNQUExQjs7QUFFQSxZQUFTMkcsSUFBVCxDQUFjeEcsSUFBZCxFQUFvQjtBQUNsQkosZUFBVUssSUFBVixDQUFlLElBQWYsRUFBcUJELElBQXJCO0FBQ0Q7QUFDRHdHLFFBQUt0RyxTQUFMLEdBQWlCQyxPQUFPbEMsTUFBUCxDQUFjMkIsVUFBVU0sU0FBeEIsQ0FBakI7QUFDQUwsVUFBTzJHLEtBQUt0RyxTQUFaLEVBQXVCbEMsS0FBdkI7QUFDQTZCLFVBQU8yRyxLQUFLdEcsU0FBWixFQUF1QixFQUFFckIsVUFBRixFQUF2QjtBQUNBZ0IsVUFBTzJHLEtBQUt0RyxTQUFaLEVBQXVCO0FBQ3JCM0IsWUFBT3NCLE9BQU9NLE9BQU9sQyxNQUFQLENBQWMyQixVQUFVTSxTQUFWLENBQW9CM0IsS0FBbEMsQ0FBUCxFQUFpRCxFQUFqRDtBQURjLElBQXZCO0FBR0FzQixVQUFPMkcsS0FBS3RHLFNBQVosRUFBdUIsRUFBRWIsWUFBRixFQUF2QjtBQUNBTSxRQUFLUyxpQkFBTCxDQUF1QixXQUF2QixFQUFvQ29HLElBQXBDO0FBQ0Q7O21CQUVjLEVBQUU5RyxVQUFGLEU7Ozs7Ozs7OytRQ3ZLZjs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBTStHLFVBQVUsRUFBaEI7QUFDQWpHLFFBQU9DLE9BQVAsR0FBaUI7QUFDZmlHLGVBRGUsd0JBQ0ZDLEdBREUsRUFDR3ZFLEdBREgsRUFDUTtBQUNyQixVQUFLLElBQUl3RSxJQUFJLENBQWIsRUFBZ0JBLElBQUlELElBQUlqQixNQUF4QixFQUFnQ2tCLEdBQWhDLEVBQXFDO0FBQ25DLFdBQU01RyxPQUFPMkcsSUFBSUMsQ0FBSixDQUFiO0FBQ0EsV0FBTUMsU0FBUyxLQUFLQyxVQUFMLENBQWdCOUcsSUFBaEIsQ0FBZjtBQUNBLFdBQUksQ0FBQzZHLE1BQUwsRUFBYTtBQUNYLGNBQUtFLFNBQUwsQ0FBZS9HLElBQWYsRUFBcUJvQyxHQUFyQjtBQUNELFFBRkQsTUFFTztBQUNMLGNBQUs0RSxZQUFMLENBQWtCaEgsSUFBbEI7QUFDRDtBQUNGO0FBQ0YsSUFYYztBQVlmK0csWUFaZSxxQkFZTC9HLElBWkssRUFZQztBQUFBOztBQUNkLFNBQU1vQyxNQUFNLHFCQUFZQyxNQUFaLEVBQVo7QUFDQSxTQUFJLENBQUNELEdBQUwsRUFBVTtBQUNSLGNBQU8scUJBQVlnQixnQkFBWixDQUE2QixVQUFDNkQsTUFBRCxFQUFZO0FBQzlDLGVBQUtDLFNBQUwsQ0FBZWxILElBQWYsRUFBcUJpSCxNQUFyQjtBQUNELFFBRk0sQ0FBUDtBQUdEO0FBQ0QsWUFBTyxLQUFLQyxTQUFMLENBQWVsSCxJQUFmLEVBQXFCb0MsR0FBckIsQ0FBUDtBQUNELElBcEJjO0FBcUJmOEUsWUFyQmUscUJBcUJMbEgsSUFyQkssRUFxQkNvQyxHQXJCRCxFQXFCTTtBQUNuQixTQUFJK0UsT0FBTyxJQUFYO0FBQ0EsU0FBSW5ILEtBQUttSCxJQUFULEVBQWU7QUFDYkEsY0FBTyxJQUFJakcsS0FBS2tHLElBQVQsQ0FBYztBQUNuQjdDLGdCQUFPdkUsS0FBS21ILElBRE87QUFFbkJFLGVBQU0sSUFBSW5HLEtBQUtvRyxJQUFULENBQWMsRUFBZCxFQUFrQixFQUFsQjtBQUZhLFFBQWQsQ0FBUDtBQUlEO0FBQ0QsU0FBTVQsU0FBUyxJQUFJM0YsS0FBS3FHLE1BQVQsQ0FBZ0I7QUFDN0I1RixpQkFBVTNCLEtBQUsyQixRQURjO0FBRTdCNkYsY0FBT3hILEtBQUt3SCxLQUZpQjtBQUc3QkwsYUFBTUEsSUFIdUI7QUFJN0IvRSxZQUFLQTtBQUp3QixNQUFoQixDQUFmO0FBTUFxRSxhQUFRLEtBQUtnQixRQUFMLENBQWN6SCxJQUFkLENBQVIsSUFBK0I2RyxNQUEvQjtBQUNBLFVBQUthLGNBQUwsQ0FBb0IxSCxLQUFLK0QsTUFBekIsRUFBaUM4QyxNQUFqQztBQUNELElBckNjO0FBc0NmekIsY0F0Q2UsdUJBc0NIcEYsSUF0Q0csRUFzQ0c7QUFDaEIsU0FBTTZHLFNBQVMsS0FBS0MsVUFBTCxDQUFnQjlHLElBQWhCLENBQWY7QUFDQTZHLFlBQU9jLE1BQVAsQ0FBYyxJQUFkO0FBQ0QsSUF6Q2M7QUEwQ2ZDLGVBMUNlLHdCQTBDRjVILElBMUNFLEVBMENJbkIsSUExQ0osRUEwQ1VFLEdBMUNWLEVBMENlO0FBQzVCLFNBQU04SCxTQUFTLEtBQUtDLFVBQUwsQ0FBZ0I5RyxJQUFoQixDQUFmO0FBQ0EsU0FBSSxDQUFDNkcsTUFBTCxFQUFhO0FBQ1gsY0FBTyxLQUFQO0FBQ0Q7QUFDRCxTQUFNZ0IsU0FBUyxpQkFBT0MseUJBQVAsQ0FBaUNqSixJQUFqQyxDQUFmO0FBQ0FnSSxZQUFPLFFBQVFnQixNQUFmLEVBQXVCOUksR0FBdkI7QUFDRCxJQWpEYztBQWtEZjJJLGlCQWxEZSwwQkFrREEzRCxNQWxEQSxFQWtEUThDLE1BbERSLEVBa0RnQjtBQUM3QixTQUFJLFFBQU85QyxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQXRCLEVBQWdDO0FBQzlCLFlBQUssSUFBTWdDLEdBQVgsSUFBa0JoQyxNQUFsQixFQUEwQjtBQUN4QjdDLGNBQUs3QixLQUFMLENBQVdpRyxXQUFYLENBQXVCdUIsTUFBdkIsRUFBK0JkLEdBQS9CLEVBQW9DaEMsT0FBT2dDLEdBQVAsQ0FBcEM7QUFDRDtBQUNGO0FBQ0YsSUF4RGM7QUF5RGZpQixlQXpEZSx3QkF5REZoSCxJQXpERSxFQXlESTtBQUNqQixTQUFJNkcsU0FBUyxLQUFLQyxVQUFMLENBQWdCOUcsSUFBaEIsQ0FBYjtBQUNBLFNBQUk2RyxNQUFKLEVBQVk7QUFDVkEsY0FBT2tCLE9BQVAsR0FBaUIsSUFBakI7QUFDQWxCLGdCQUFTLElBQVQ7QUFDRDtBQUNGLElBL0RjO0FBZ0VmQyxhQWhFZSxzQkFnRUo5RyxJQWhFSSxFQWdFRTtBQUNmLFNBQU1nSSxNQUFNLEtBQUtQLFFBQUwsQ0FBY3pILElBQWQsQ0FBWjtBQUNBLFlBQU95RyxRQUFRdUIsR0FBUixDQUFQO0FBQ0QsSUFuRWM7QUFvRWZQLFdBcEVlLG9CQW9FTnpILElBcEVNLEVBb0VBO0FBQ2IsWUFBTyxTQUFTQSxLQUFLaUksR0FBZCxJQUFxQmpJLEtBQUsyQixRQUFMLENBQWN1RyxJQUFkLENBQW1CLEdBQW5CLENBQTVCO0FBQ0QsSUF0RWM7QUF1RWZDLFlBdkVlLHFCQXVFTEMsR0F2RUssRUF1RUE7QUFDYixZQUFPLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsT0FBZSxRQUFmLElBQTJCQSxJQUFJQyxVQUFKLEtBQW1CLGFBQXJEO0FBQ0Q7QUF6RWMsRUFBakIsQzs7Ozs7Ozs7QUNMQTdILFFBQU9DLE9BQVAsR0FBaUI7QUFDZndELG9CQURlLDZCQUNHcUUsTUFESCxFQUNXO0FBQ3hCLFlBQU9BLFNBQVcsSUFBSUMsSUFBSixFQUFELENBQWFDLE9BQWIsR0FBdUJDLFFBQXZCLEdBQWtDQyxTQUFsQyxDQUE0QyxDQUE1QyxFQUErQyxDQUEvQyxDQUFWLEdBQStEQyxTQUFTQyxLQUFLQyxNQUFMLEtBQWdCLEtBQXpCLEVBQWdDLEVBQWhDLENBQXRFO0FBQ0QsSUFIYztBQUlmZiw0QkFKZSxxQ0FJV2dCLEdBSlgsRUFJZ0I7QUFDN0IsWUFBT0EsSUFBSUMsTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCQyxXQUFqQixLQUFpQ0YsSUFBSUosU0FBSixDQUFjLENBQWQsQ0FBeEM7QUFDRDtBQU5jLEVBQWpCLEM7Ozs7Ozs7O0FDQUEsS0FBTU8saUJBQWlCO0FBQ3JCbEQsUUFBSyxFQURnQjtBQUVyQm1ELE1BQUcsS0FGa0I7QUFHckJDLFFBQUs7QUFIZ0IsRUFBdkI7O0FBTUEsS0FBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBU2hCLEdBQVQsRUFBYztBQUN2QyxPQUFJaUIsV0FBVyxFQUFmO0FBQ0EsUUFBSSxJQUFJdEQsR0FBUixJQUFlcUMsR0FBZixFQUFvQjtBQUNsQixTQUFHckMsUUFBUSxLQUFYLEVBQWtCO0FBQ2hCc0QsZ0JBQVNoRyxJQUFULENBQWNpRyxVQUFVdkQsTUFBTSxHQUFOLEdBQVlxQyxJQUFJckMsR0FBSixDQUF0QixDQUFkO0FBQ0Q7QUFDRjtBQUNELFVBQU9xQyxJQUFJZSxHQUFKLElBQVcsTUFBTUUsU0FBU25CLElBQVQsQ0FBYyxHQUFkLENBQXhCO0FBQ0QsRUFSRDs7QUFVQTFILFFBQU9DLE9BQVAsR0FBaUI7QUFFZndGLE9BRmUsZ0JBRVZzRCxNQUZVLEVBRUhDLFNBRkcsRUFFT3pJLFFBRlAsRUFFaUI7QUFDOUIsU0FBSTBJLFlBQVl0SixPQUFPdUosTUFBUCxDQUFjLEVBQWQsRUFBaUJULGNBQWpCLEVBQWdDTSxNQUFoQyxDQUFoQjtBQUNBLFNBQUlJLE1BQU14TCxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQVY7QUFDQXVMLFNBQUl6SyxHQUFKLEdBQVVrSyxtQkFBbUJLLFNBQW5CLENBQVY7QUFDQTFILGFBQVFtRSxHQUFSLENBQVl5RCxJQUFJekssR0FBaEI7QUFDQSxTQUFJOEIsT0FBTyxJQUFYO0FBQ0EySSxTQUFJQyxnQkFBSixDQUFxQixNQUFyQixFQUE0QixZQUFXO0FBQ3JDL0wsY0FBT2dNLFNBQVAsR0FBbUIsSUFBbkI7QUFDQTlJO0FBQ0QsTUFIRDtBQUlBNUMsY0FBUzJMLElBQVQsQ0FBY2xMLFdBQWQsQ0FBMEIrSyxHQUExQjtBQUNBLFVBQUtJLFdBQUwsQ0FBaUJQLFNBQWpCO0FBQ0QsSUFkYztBQWdCZk8sY0FoQmUsdUJBZ0JIQyxJQWhCRyxFQWdCRztBQUNoQkMsZ0JBQVcsWUFBTTtBQUNmLFdBQUcsQ0FBQ3BNLE9BQU8ySSxJQUFYLEVBQWlCO0FBQ2YsYUFBSXBDLEtBQUtqRyxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQVQ7QUFDQWdHLFlBQUd4RixXQUFILENBQWVULFNBQVNhLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBZjtBQUNBb0YsWUFBR3dGLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFlBQVk7QUFDdkNwSCxvQkFBUzBILE1BQVQ7QUFDRCxVQUZEO0FBR0FGLGNBQUtHLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUJDLE1BQW5CO0FBQ0FKLGNBQUtwTCxXQUFMLENBQWlCd0YsRUFBakI7QUFDRDtBQUNGLE1BVkQsRUFVRyxLQVZIO0FBV0Q7QUE1QmMsRUFBakIsQzs7Ozs7Ozs7Ozs7O0FDaEJBOzs7Ozs7QUFFQSxLQUFNYixTQUFTO0FBQ2I4RyxhQUFVLEVBREc7QUFFYjdDLFVBQU8sRUFGTTtBQUdiTCxTQUFNO0FBSE8sRUFBZjs7QUFNQTtBQUNBLEtBQU1uSixRQUFRO0FBQ1pDLFNBRFksb0JBQ0g7QUFBQTs7QUFDUCxTQUFNQyxPQUFPQyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDQSxTQUFNNEIsT0FBTyxLQUFLQSxJQUFMLENBQVVuQixJQUF2QjtBQUNBLHNCQUFja0ksU0FBZCxDQUF3QjtBQUN0QnBGLGlCQUFVM0IsS0FBSzJCLFFBRE87QUFFdEJ3RixhQUFNbkgsS0FBS21ILElBRlc7QUFHdEJLLGNBQU94SCxLQUFLd0gsS0FIVTtBQUl0QlMsWUFBSyxLQUFLakksSUFBTCxDQUFVaUksR0FKTztBQUt0QmxFLGVBQVE7QUFDTnpFLGdCQUFPLGlCQUFNO0FBQ1gsaUJBQUtpRyxhQUFMLENBQW1CLE9BQW5CO0FBQ0Q7QUFISyxRQUxjO0FBVXRCbkQsWUFBS3ZFLE9BQU8ySTtBQVZVLE1BQXhCO0FBWUEsWUFBT3RJLElBQVA7QUFDRCxJQWpCVztBQWtCWm9NLGNBbEJZLHVCQWtCQUMsS0FsQkEsRUFrQk87QUFDakIsU0FBTXBILE9BQU9oRCxPQUFPZ0QsSUFBUCxDQUFZb0gsS0FBWixDQUFiO0FBQ0EsU0FBTXZLLE9BQU87QUFDWGlJLFlBQUssS0FBS2pJLElBQUwsQ0FBVWlJO0FBREosTUFBYjtBQUdBOUUsVUFBSzdDLE9BQUwsQ0FBYSxVQUFDa0ssQ0FBRCxFQUFPO0FBQ2xCLHdCQUFjNUMsWUFBZCxDQUEyQjVILElBQTNCLEVBQWlDd0ssQ0FBakMsRUFBb0NELE1BQU1DLENBQU4sQ0FBcEM7QUFDRCxNQUZEO0FBR0Q7QUExQlcsRUFBZDs7QUE2QkEsS0FBTTNMLE9BQU87QUFDWDhDLFdBRFcsb0JBQ0Y1QyxHQURFLEVBQ0c7QUFDWmdELGFBQVFtRSxHQUFSLENBQVluSCxHQUFaO0FBQ0FnRCxhQUFRbUUsR0FBUixDQUFZLElBQVo7QUFDQSxTQUFJVixNQUFNQyxPQUFOLENBQWMxRyxHQUFkLEtBQXNCQSxJQUFJMkcsTUFBSixLQUFlLENBQXpDLEVBQTRDO0FBQzFDbkMsY0FBTzVCLFFBQVAsR0FBa0I1QyxHQUFsQjtBQUNEO0FBQ0YsSUFQVTtBQVFYb0ksT0FSVyxnQkFRTnBJLEdBUk0sRUFRRDtBQUNSd0UsWUFBTzRELElBQVAsR0FBY3BJLEdBQWQ7QUFDRCxJQVZVO0FBV1h5SSxRQVhXLGlCQVdMekksR0FYSyxFQVdBO0FBQ1R3RSxZQUFPaUUsS0FBUCxHQUFlekksR0FBZjtBQUNEO0FBYlUsRUFBYjs7QUFnQkEsS0FBTU0sUUFBUTtBQUNaQyxVQUFPO0FBQ0xDLFVBREssbUJBQ0c7QUFDTixjQUFPLEVBQUUrRyxXQUFXLElBQWIsRUFBUDtBQUNEO0FBSEk7QUFESyxFQUFkOztBQVFBLFVBQVM1RyxJQUFULENBQWNDLElBQWQsRUFBb0I7QUFDbEIsT0FBTUMsWUFBWUQsS0FBS0MsU0FBdkI7QUFDQSxPQUFNQyxTQUFTRixLQUFLRyxLQUFMLENBQVdELE1BQTFCOztBQUVBLFlBQVM0SyxTQUFULENBQW1CekssSUFBbkIsRUFBeUI7QUFDdkJKLGVBQVVLLElBQVYsQ0FBZSxJQUFmLEVBQXFCRCxJQUFyQjtBQUNEO0FBQ0R5SyxhQUFVdkssU0FBVixHQUFzQkMsT0FBT2xDLE1BQVAsQ0FBYzJCLFVBQVVNLFNBQXhCLENBQXRCO0FBQ0FMLFVBQU80SyxVQUFVdkssU0FBakIsRUFBNEJsQyxLQUE1QjtBQUNBNkIsVUFBTzRLLFVBQVV2SyxTQUFqQixFQUE0QixFQUFFckIsVUFBRixFQUE1QjtBQUNBZ0IsVUFBTzRLLFVBQVV2SyxTQUFqQixFQUE0QixFQUFFYixZQUFGLEVBQTVCO0FBQ0FNLFFBQUtTLGlCQUFMLENBQXVCLGtCQUF2QixFQUEyQ3FLLFNBQTNDO0FBQ0Q7O21CQUVjLEVBQUUvSyxVQUFGLEU7Ozs7Ozs7O0FDNUVkOzs7Ozs7Ozs7Ozs7OztBQWdCQSxFQUFDLFlBQVk7QUFDWCxZQUFTZ0wsV0FBVCxDQUFxQjNFLEdBQXJCLEVBQTBCO0FBQ3hCLFNBQUk0RSxNQUFNLElBQUlDLE1BQUosQ0FBVyxVQUFVN0UsR0FBVixHQUFnQixVQUEzQixDQUFWO0FBQ0EsU0FBSThFLFFBQVFySSxTQUFTTixNQUFULENBQWdCMkksS0FBaEIsQ0FBc0JGLEdBQXRCLENBQVo7QUFDQSxZQUFPRSxTQUFTQSxNQUFNLENBQU4sQ0FBaEI7QUFDRDtBQUNELE9BQUlDLFNBQVNKLFlBQVksUUFBWixLQUF5QixLQUF0QztBQUNBLE9BQUlLLE9BQU9MLFlBQVksTUFBWixLQUF1QixrQkFBbEM7QUFDQTdNLFVBQU9DLElBQVAsQ0FBWTRCLElBQVosQ0FBaUI7QUFDZnNMLFlBQU94SSxTQUFTeUksSUFERDtBQUViSCxhQUFRQSxNQUZLO0FBR2JJLGFBQVFILElBSEs7QUFJYkksYUFBUTtBQUpLLElBQWpCO0FBTUQsRUFkRCxJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTVkNzI5ZjYzMjA4NTE4NTYzMjEiLCJpbXBvcnQgY2hhcnQgZnJvbSBcIi9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL3BsdWdpbnMvd2VleC1jaGFydC93ZWJcIjtcclxud2luZG93LndlZXggJiYgd2luZG93LndlZXguaW5zdGFsbChjaGFydCk7XHJcbmltcG9ydCBhbWFwIGZyb20gXCIvVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9wbHVnaW5zL3dlZXgtYW1hcC93ZWJcIjtcclxud2luZG93LndlZXggJiYgd2luZG93LndlZXguaW5zdGFsbChhbWFwKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3BsdWdpbl9idW5kbGUuanMiLCIndXNlIHN0cmljdCdcblxuXG5jb25zdCBwcm90byA9IHtcbiAgY3JlYXRlICgpIHtcbiAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmlubmVyID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbm5lci5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMTBweCc7XG4gICAgdGhpcy5ub2RlLnN0eWxlLnBhZGRpbmcgPSBcIjVweCA1cHggMTBweCA1cHhcIjsgXG4gICAgdGhpcy5ub2RlLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7IFxuICAgIHRoaXMubm9kZS5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICNjY2MnO1xuICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmlubmVyKTtcbiAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICBcbiAgICByZXR1cm4gdGhpcy5ub2RlIFxuICB9XG59XG5cbi8vIGF0dHJpYnV0ZSBzZXR0ZXJzLlxuY29uc3QgYXR0ciA9IHtcbiAgdGV4dCAodmFsKSB7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWwpO1xuICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgfSxcbiAgXG4gIGltZ3NyYyh2YWwpIHtcbiAgICB0aGlzLmlubmVyLnNyYyA9IHZhbDtcbiAgfVxufVxuXG4vLyBzdHlsZSBzZXR0ZXJzLlxuY29uc3Qgc3R5bGUgPSB7XG4gIHR4dENvbG9yICh2YWwpIHtcbiAgICB0aGlzLmlubmVyLnN0eWxlLmNvbG9yID0gdmFsXG4gIH1cbn1cblxuLy8gZXZlbnQgY29uZmlnLlxuY29uc3QgZXZlbnQgPSB7XG4gIGNsaWNrOiB7XG4gICAgZXh0cmEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuaW5uZXIudGV4dENvbnRlbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdCAoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gUG9sYXJvaWRQaG90byAoZGF0YSkge1xuICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9XG5cbiAgUG9sYXJvaWRQaG90by5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUpO1xuICBleHRlbmQoUG9sYXJvaWRQaG90by5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKFBvbGFyb2lkUGhvdG8ucHJvdG90eXBlLCB7IGF0dHIgfSk7XG4gIGV4dGVuZChQb2xhcm9pZFBob3RvLnByb3RvdHlwZSwge1xuICAgIHN0eWxlOiBleHRlbmQoT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlLnN0eWxlKSwgc3R5bGUpXG4gIH0pO1xuICBleHRlbmQoUG9sYXJvaWRQaG90by5wcm90b3R5cGUsIHsgZXZlbnQgfSk7XG5cbiAgV2VleC5yZWdpc3RlckNvbXBvbmVudCgnd2VleC1jaGFydCcsIFBvbGFyb2lkUGhvdG8pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1jaGFydC93ZWIvc3JjL2luZGV4LmpzIiwiaW1wb3J0IGFtYXBNb2R1bGVSZWcgZnJvbSAnLi9tb2R1bGUvYW1hcCc7XG5pbXBvcnQgQW1hcCBmcm9tICcuL2NvbXBvbmVudHMvYW1hcCc7XG5pbXBvcnQgQW1hcE1hcmtlciBmcm9tICcuL2NvbXBvbmVudHMvYW1hcC1tYXJrZXInO1xuLy8gaW1wb3J0IFZ1ZUFtYXAgZnJvbSAnLi92dWUtYW1hcC9pbmRleCc7XG5jb25zdCBjb21wb25lbnRzID0gW1xuICBBbWFwLFxuICBBbWFwTWFya2VyXG5dO1xuXG5mdW5jdGlvbiBpbml0KFdlZXgpIHtcbiAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wKSA9PiB7XG4gICAgY29tcC5pbml0KFdlZXgpO1xuICB9KTtcbiAgYW1hcE1vZHVsZVJlZyhXZWV4KTtcbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvaW5kZXguanMiLCIvLyBBTWFwIG1vZHVsZVxuY29uc3QgbWFwTWFuYWdlciA9IHJlcXVpcmUoJy4uL3NlcnZpY2UvbWFwLW1hbmFnZXInKTtcblxuY29uc3QgYW1hcCA9IHtcbiAgLyoqIGdldCB1c2VyIGxvYWN0aW9uIGJ5IGJyb3dzZXIgYW5kIElQXG4gICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBlcnJvckNhbGxiYWNrXG4gICoqL1xuICBnZXRVc2VyTG9jYXRpb24obWFwUmVmLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IGdlbyA9IG5ldyBBTWFwLkdlb2xvY2F0aW9uKHtcbiAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSxcbiAgICAgIHRpbWVvdXQ6IDEwMDAwXG4gICAgfSk7XG4gICAgZ2VvLmdldEN1cnJlbnRQb3NpdGlvbigoc3RhdHVzLCByZXMpID0+IHtcbiAgICAgIGlmIChzdGF0dXMgIT09ICdlcnJvcicpIHtcbiAgICAgICAgc2VsZi5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrLCB7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcG9zaXRpb246IFtyZXMucG9zaXRpb24uZ2V0TG5nKCksIHJlcy5wb3NpdGlvbi5nZXRMYXQoKV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3VsdDogJ3N1Y2Nlc3MnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKHJlcy5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgLyoqXG4gICogIHNlYXJjaCBwbGFjZVxuICAqIEBwYXJhbSB7c3RyaW5nfSBtYXByZWZcbiAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAqKi9cbiAgc2VhcmNoKHEsIGNhbGxiYWNrLCBtYXBSZWYpIHtcbiAgICBjb25zdCBtYXAgPSBtYXBNYW5hZ2VyLmdldE1hcCgpO1xuICAgIG1hcC5wbGFjZVNlYXJjaC5zZWFyY2gocSwgKHN0YXR1cywgcmVzKSA9PiB7XG4gICAgICB0aGlzLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2ssIHtcbiAgICAgICAgZGF0YTogcmVzLFxuICAgICAgICByZXN1bHQ6IHN0YXR1cyA9PT0gJ2NvbXBsZXRlJyA/ICdzdWNjZXNzJyA6ICdlcnJvcidcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICAvKipcbiAgKiBzZWFyY2ggbmVhcmJ5XG4gICogQHBhcmFtIHtzdHJpbmd9IHEgcXVlcnkga2V5d29yZFxuICAqIEBwYXJhbSB7YXJyYXl9IGxvY2F0aW9uIGV4YW1wbGU6WzEyMy4xMjMsIDEyLjEyMzEyM11cbiAgKiBAcGFyYW0ge251bWJlcn0gZGlzdGFuY2UgZXhhbXBsZTogMTAwMFxuICAqKi9cbiAgc2VhcmNoTmVhckJ5KHEsIGxvY2F0aW9uLCBkaXN0YW5jZSwgY2FsbGJhY2ssIG1hcFJlZikge1xuICAgIGNvbnN0IG1hcCA9IG1hcE1hbmFnZXIuZ2V0TWFwKCk7XG4gICAgbWFwLnBsYWNlU2VhcmNoLnNlYXJjaChxLCBsb2NhdGlvbiwgZGlzdGFuY2UsIChzdGF0dXMsIHJlcykgPT4ge1xuICAgICAgdGhpcy5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrLCB7XG4gICAgICAgIGRhdGE6IHJlcyxcbiAgICAgICAgcmVzdWx0OiBzdGF0dXMgPT09ICdjb21wbGV0ZScgPyAnc3VjY2VzcycgOiAnZXJyb3InXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgbWV0YSA9IHtcbiAgYW1hcDogW3tcbiAgICBuYW1lOiAnZ2V0VXNlckxvY2F0aW9uJyxcbiAgICBhcmdzOiBbJ3N0cmluZycsICdmdW5jdGlvbiddXG4gIH0sIHtcbiAgICBuYW1lOiAnc2VhcmNoTmVhckJ5JyxcbiAgICBhcmdzOiBbJ3N0cmluZycsICdmdW5jdGlvbicsICdzdHJpbmcnXVxuICB9LCB7XG4gICAgbmFtZTogJ3NlYXJjaCcsXG4gICAgYXJnczogWydzdHJpbmcnLCAnYXJyYXknLCAnbnVtYmVyJywgJ2Z1bmN0aW9uJywgJ3N0cmluZyddXG4gIH1dXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChXZWV4KSB7XG4gIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ2FtYXAnLCBhbWFwLCBtZXRhKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvbW9kdWxlL2FtYXAuanMiLCIvKiogbWFwIGluc3RhbmNlIG1hbmFnZXJcbiogMjAxNzAyMDRcbioqL1xubGV0IGNhbGxiYWNrU3RhY2sgPSBbXTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0TWFwKGlkLCBtYXApIHtcbiAgICBpZiAoIXRoaXMuX19tYXBzKSB7XG4gICAgICB0aGlzLl9fbWFwcyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLl9fbWFwc1tpZF0gPSBtYXA7XG4gICAgY2FsbGJhY2tTdGFjay5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgY2IobWFwKTtcbiAgICB9KTtcbiAgICBjYWxsYmFja1N0YWNrID0gW107XG4gIH0sXG4gIGdldE1hcChpZCkge1xuICAgIGlmICghdGhpcy5fX21hcHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoIWlkKSB7XG4gICAgICBpZCA9IE9iamVjdC5rZXlzKHRoaXMuX19tYXBzKVswXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX19tYXBzW2lkXTtcbiAgfSxcbiAgYWRkUmVhZHlDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrU3RhY2sucHVzaChjYWxsYmFjayk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9tYXAtbWFuYWdlci5qcyIsImltcG9ydCBtYXJrZXJNYW5hZ2UgZnJvbSAnLi4vc2VydmljZS9tYXJrZXInO1xuaW1wb3J0IG1hcExvYWRlciBmcm9tICcuLi9zZXJ2aWNlL21hcC1sb2FkZXInO1xuaW1wb3J0IGFtYXBNYW5hZ2VyIGZyb20gJy4uL3NlcnZpY2UvbWFwLW1hbmFnZXInO1xuaW1wb3J0IHZlbmRvciBmcm9tICcuLi9zZXJ2aWNlL3ZlbmRvcic7XG5cblxuY29uc3QgbG9hZGluZ0dpZiA9ICdodHRwOi8vaW1nMS52dWVkLnZhbnRoaW5rLmNuL3Z1ZWQyMTEzZWFhMDYyYWJiYWVlMDQ0MWQxNmE3ODQ4ZDIzZS5naWYnO1xuY29uc3QgcGFyYW1zID0ge1xuICBjZW50ZXI6IHVuZGVmaW5lZCxcbiAgem9vbTogMTEsXG4gIHRvb2xiYXI6IHRydWUsXG4gIHNjYWxlOiBmYWxzZSxcbiAgZ2VvbG9jYXRpb246IGZhbHNlLFxuICByZXNpemVFbmFibGU6IHRydWUsXG4gIHNlYXJjaDoge31cbn07XG5jb25zdCBldmVudHMgPSBbXG4gICd6b29tY2hhbmdlJyxcbiAgJ2RyYWdlbmQnXG5dO1xuLy8gcHJvdG90eXBlIG1ldGhvZHMuXG5jb25zdCBwcm90byA9IHtcbiAgY3JlYXRlKCkge1xuICAgIHRoaXMubWFwd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMubWFwd3JhcC5pZCA9IHZlbmRvci5nZW5nZXJhdGVSYW5kb21JZCgnbWFwJyk7XG4gICAgdGhpcy5tYXB3cmFwLmFwcGVuZCh0aGlzLnJlbmRlckxvYWRpbmdTcGlubmVyKCkpO1xuICAgIHJldHVybiB0aGlzLm1hcHdyYXA7XG4gIH0sXG4gIHJlbmRlckxvYWRpbmdTcGlubmVyKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gNjA7XG4gICAgZWwuc3R5bGUubWFyZ2luID0gJzIwIGF1dG8nO1xuICAgIGVsLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gbG9hZGluZ0dpZjtcbiAgICBlbC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ+mrmOW+t+WcsOWbvuWKoOi9veS4rS4uLi4nKSk7XG4gICAgZWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcmV0dXJuIGVsO1xuICB9LFxuICByZWFkeSgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAod2luZG93LkFNYXApIHtcbiAgICAgIHRoaXMubWFwID0gbmV3IEFNYXAuTWFwKHRoaXMubWFwd3JhcC5pZCwgcGFyYW1zKTtcbiAgICAgIEFNYXAucGx1Z2luKFsnQU1hcC5Ub29sQmFyJywgJ0FNYXAuR2VvbG9jYXRpb24nXSwgKCkgPT4ge1xuICAgICAgICBpZiAocGFyYW1zLnNjYWxlKSB7XG4gICAgICAgICAgc2VsZi5tYXAuYWRkQ29udHJvbChuZXcgQU1hcC5Ub29sQmFyKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgICBzZWxmLm1hcC5hZGRDb250cm9sKG5ldyBBTWFwLkdlb2xvY2F0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIEFNYXAuc2VydmljZSgnQU1hcC5QbGFjZVNlYXJjaCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5tYXAucGxhY2VTZWFyY2ggPSBuZXcgQU1hcC5QbGFjZVNlYXJjaCh7XG4gICAgICAgICAgY2l0eTogcGFyYW1zLnNlYXJjaC5jaXR5LFxuICAgICAgICAgIHR5cGU6IHBhcmFtcy5zZWFyY2gudHlwZSxcbiAgICAgICAgICBtYXA6IHRoaXMubWFwXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICAgIGFtYXBNYW5hZ2VyLmluaXRNYXAodGhpcy5tYXB3cmFwLmlkLCB0aGlzLm1hcCk7XG4gICAgfVxuICB9LFxuICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgIG1hcmtlck1hbmFnZS5yZW1vdmVNYWtlcihjaGlsZC5kYXRhKTtcbiAgfSxcbiAgaW5pdEV2ZW50cygpIHtcbiAgICBldmVudHMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgICBBTWFwLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFwLCBldmVudE5hbWUsICgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgYXR0ciA9IHtcbiAgY2VudGVyKHZhbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA9PT0gMikge1xuICAgICAgcGFyYW1zLmNlbnRlciA9IHZhbDtcbiAgICAgIGlmICh3aW5kb3cuQU1hcCkge1xuICAgICAgICB0aGlzLm1hcC5zZXRDZW50ZXIocGFyYW1zLmNlbnRlcik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgY29uc3QgZ2VvID0gbmV3IEFNYXAuR2VvbG9jYXRpb24oe1xuICAgICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBnZW8uZ2V0Q3VycmVudFBvc2l0aW9uKCk7XG4gICAgICBBTWFwLmV2ZW50LkFNYXAuZXZlbnQuYWRkTGlzdGVuZXIoZ2VvLCAnY29tcGxldGUnLCAoZGF0YSkgPT4ge1xuICAgICAgICBwYXJhbXMuY2VudGVyID0gW2RhdGEucG9zaXRpb24uZ2V0TG5nKCksIGRhdGEucG9zaXRpb24uZ2V0TGF0KCldO1xuICAgICAgICBzZWxmLm1hcC5zZXRDZW50ZXIocGFyYW1zLmNlbnRlcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHpvb20odmFsKSB7XG4gICAgaWYgKC9eWzAtOV0rJC8udGVzdCh2YWwpKSB7XG4gICAgICBwYXJhbXMuem9vbSA9IHZhbDtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5BTWFwKSB7XG4gICAgICB0aGlzLm1hcC5zZXRab29tKHBhcmFtcy56b29tKTtcbiAgICB9XG4gIH0sXG4gIHNjYWxlKHZhbCkge1xuICAgIHBhcmFtcy5zY2FsZSA9IHZhbDtcbiAgfSxcbiAgZ2VvbG9jYXRpb24odmFsKSB7XG4gICAgcGFyYW1zLmdlb2xvY2F0aW9uID0gdmFsO1xuICB9LFxuICBzZGtLZXkodmFsKSB7XG4gICAgbGV0IGtleSA9ICcnO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGtleSA9IHZhbC5oNTtcbiAgICB9XG4gICAgbWFwTG9hZGVyLmxvYWQoe1xuICAgICAga2V5OiBrZXlcbiAgICB9LCB0aGlzLm1hcHdyYXAsICgpID0+IHRoaXMucmVhZHkoKSk7XG4gIH0sXG4gIHNlYXJjaCh2YWwpIHtcbiAgICBwYXJhbXMuc2VhcmNoID0gdmFsO1xuICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgaWYgKHdpbmRvdy5BTWFwKSB7XG4gICAgICBpZiAodmFsLmNpdHkpIHtcbiAgICAgICAgdGhpcy5wbGFjZVNlYXJjaC5zZXRDaXR5KHZhbC5jaXR5KTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWwudHlwZSkge1xuICAgICAgICB0aGlzLnBsYWNlU2VhcmNoLnNldENpdHkodmFsLnR5cGUpO1xuICAgICAgfVxuICAgICAgaWYgKHZhbC5rZXl3b3JkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxhY2VTZWFyY2gpO1xuICAgICAgICB0aGlzLnBsYWNlU2VhcmNoLnNlYXJjaCh2YWwua2V5d29yZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBldmVudCA9IHtcbiAgem9vbWNoYW5nZToge1xuICAgIGV4dHJhKCkge1xuICAgICAgcmV0dXJuIHsgaXNTdWNjZXNzOiB0cnVlIH07XG4gICAgfVxuICB9LFxuICBkcmFnZW5kOiB7XG4gICAgZXh0cmEoKSB7XG4gICAgICByZXR1cm4geyBpc1N1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcChkYXRhKSB7XG4gICAgQ29tcG9uZW50LmNhbGwodGhpcywgZGF0YSk7XG4gIH1cbiAgQW1hcC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUpO1xuICBleHRlbmQoQW1hcC5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXAucHJvdG90eXBlLCB7IGF0dHIgfSk7XG4gIGV4dGVuZChBbWFwLnByb3RvdHlwZSwge1xuICAgIHN0eWxlOiBleHRlbmQoT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlLnN0eWxlKSwge30pXG4gIH0pO1xuICBleHRlbmQoQW1hcC5wcm90b3R5cGUsIHsgZXZlbnQgfSk7XG4gIFdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ3dlZXgtYW1hcCcsIEFtYXApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9jb21wb25lbnRzL2FtYXAuanMiLCIvLyBhIGxpYiB0byBtYW5hZ2UgYWxsIG1hcmtlclxuaW1wb3J0IGFtYXBNYW5hZ2VyIGZyb20gJy4vbWFwLW1hbmFnZXInO1xuaW1wb3J0IHZlbmRvciBmcm9tICcuL3ZlbmRvcic7XG5cbmNvbnN0IG1hcmtlcnMgPSB7fTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGFuZ2VNYXJrZXIoYXJyLCBtYXApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGF0YSA9IGFycltpXTtcbiAgICAgIGNvbnN0IG1hcmtlciA9IHRoaXMuZmluZE1hcmtlcihkYXRhKTtcbiAgICAgIGlmICghbWFya2VyKSB7XG4gICAgICAgIHRoaXMuYWRkTWFya2VyKGRhdGEsIG1hcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZU1hcmtlcihkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGFkZE1hcmtlcihkYXRhKSB7XG4gICAgY29uc3QgbWFwID0gYW1hcE1hbmFnZXIuZ2V0TWFwKCk7XG4gICAgaWYgKCFtYXApIHtcbiAgICAgIHJldHVybiBhbWFwTWFuYWdlci5hZGRSZWFkeUNhbGxiYWNrKChtYXBJbnMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRNYXJrZXIoZGF0YSwgbWFwSW5zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZXRNYXJrZXIoZGF0YSwgbWFwKTtcbiAgfSxcbiAgc2V0TWFya2VyKGRhdGEsIG1hcCkge1xuICAgIGxldCBpY29uID0gbnVsbDtcbiAgICBpZiAoZGF0YS5pY29uKSB7XG4gICAgICBpY29uID0gbmV3IEFNYXAuSWNvbih7XG4gICAgICAgIGltYWdlOiBkYXRhLmljb24sXG4gICAgICAgIHNpemU6IG5ldyBBTWFwLlNpemUoNjQsIDY0KVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBBTWFwLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogZGF0YS5wb3NpdGlvbixcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgaWNvbjogaWNvbixcbiAgICAgIG1hcDogbWFwLFxuICAgIH0pO1xuICAgIG1hcmtlcnNbdGhpcy5fX2dldE1pZChkYXRhKV0gPSBtYXJrZXI7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cyhkYXRhLmV2ZW50cywgbWFya2VyKTtcbiAgfSxcbiAgcmVtb3ZlTWFrZXIoZGF0YSkge1xuICAgIGNvbnN0IG1hcmtlciA9IHRoaXMuZmluZE1hcmtlcihkYXRhKTtcbiAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xuICB9LFxuICB1cGRhdGVNYXJrZXIoZGF0YSwgYXR0ciwgdmFsKSB7XG4gICAgY29uc3QgbWFya2VyID0gdGhpcy5maW5kTWFya2VyKGRhdGEpO1xuICAgIGlmICghbWFya2VyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IG1ldGhvZCA9IHZlbmRvci5zZXRGaXJzdExldHRlclRvVXBwZXJjYXNlKGF0dHIpO1xuICAgIG1hcmtlclsnc2V0JyArIG1ldGhvZF0odmFsKTtcbiAgfSxcbiAgcmVnaXN0ZXJFdmVudHMoZXZlbnRzLCBtYXJrZXIpIHtcbiAgICBpZiAodHlwZW9mIGV2ZW50cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGV2ZW50cykge1xuICAgICAgICBBTWFwLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwga2V5LCBldmVudHNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZW1vdmVNYXJrZXIoZGF0YSkge1xuICAgIGxldCBtYXJrZXIgPSB0aGlzLmZpbmRNYXJrZXIoZGF0YSk7XG4gICAgaWYgKG1hcmtlcikge1xuICAgICAgbWFya2VyLnZpc2libGUgPSB0cnVlO1xuICAgICAgbWFya2VyID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIGZpbmRNYXJrZXIoZGF0YSkge1xuICAgIGNvbnN0IG1pZCA9IHRoaXMuX19nZXRNaWQoZGF0YSk7XG4gICAgcmV0dXJuIG1hcmtlcnNbbWlkXTtcbiAgfSxcbiAgX19nZXRNaWQoZGF0YSkge1xuICAgIHJldHVybiAnbWlkLScgKyBkYXRhLnJlZiB8fCBkYXRhLnBvc2l0aW9uLmpvaW4oJy0nKTtcbiAgfSxcbiAgX19pc01ha2VyKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouQ0xBU1NfTkFNRSA9PT0gJ0FNYXAuTWFya2VyJztcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9zZXJ2aWNlL21hcmtlci5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBnZW5nZXJhdGVSYW5kb21JZChwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkudG9TdHJpbmcoKS5zdWJzdHJpbmcoOSwgMykpICsgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwMDAwLCAxMCk7XG4gIH0sXG4gIHNldEZpcnN0TGV0dGVyVG9VcHBlcmNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHJpbmcoMSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS92ZW5kb3IuanMiLCJjb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAga2V5OiAnJyxcbiAgdjogJzEuMycsXG4gIHVybDogJ2h0dHBzOi8vd2ViYXBpLmFtYXAuY29tL21hcHMnXG59O1xuIFxuY29uc3QgZ2VuZ2VyYXRlU2NyaXB0VXJsID0gZnVuY3Rpb24ob2JqKSB7XG4gIGxldCBwYXJhbUFyciA9IFtdO1xuICBmb3IobGV0IGtleSBpbiBvYmopIHtcbiAgICBpZihrZXkgIT09ICd1cmwnKSB7XG4gICAgICBwYXJhbUFyci5wdXNoKGVuY29kZVVSSShrZXkgKyAnPScgKyBvYmpba2V5XSkpOyAgXG4gICAgfVxuICB9XG4gIHJldHVybiBvYmoudXJsICs9ICc/JyArIHBhcmFtQXJyLmpvaW4oJyYnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBcbiAgbG9hZChjb25maWcsY29udGFpbmVyLGNhbGxiYWNrKSB7XG4gICAgbGV0IG5ld0NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sREVGQVVMVF9DT05GSUcsY29uZmlnKTtcbiAgICBsZXQgbGliID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgbGliLnNyYyA9IGdlbmdlcmF0ZVNjcmlwdFVybChuZXdDb25maWcpO1xuICAgIGNvbnNvbGUubG9nKGxpYi5zcmMpO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsaWIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cubWFwbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaWIpOyAgXG4gICAgdGhpcy5sb2FkVGltZW91dChjb250YWluZXIpO1xuICB9LFxuICBcbiAgbG9hZFRpbWVvdXQod3JhcCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYoIXdpbmRvdy5BbWFwKSB7XG4gICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgn6YeN5paw5Yqg6L29JykpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdyYXAuY2hpbGROb2Rlc1swXS5yZW1vdmUoKTtcbiAgICAgICAgd3JhcC5hcHBlbmRDaGlsZChlbCk7XG4gICAgICB9XG4gICAgfSwgMTAwMDApO1xuICB9XG5cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvbWFwLWxvYWRlci5qcyIsImltcG9ydCBtYXJrZXJNYW5hZ2VyIGZyb20gJy4uL3NlcnZpY2UvbWFya2VyJztcblxuY29uc3QgcGFyYW1zID0ge1xuICBwb2lzdGlvbjogW10sXG4gIHRpdGxlOiAnJyxcbiAgaWNvbjogJydcbn07XG5cbi8vIHByb3RvdHlwZSBtZXRob2RzLlxuY29uc3QgcHJvdG8gPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5hdHRyO1xuICAgIG1hcmtlck1hbmFnZXIuYWRkTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLFxuICAgICAgaWNvbjogZGF0YS5pY29uLFxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICByZWY6IHRoaXMuZGF0YS5yZWYsXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtYXA6IHdpbmRvdy5BbWFwXG4gICAgfSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIHVwZGF0ZUF0dHJzKGF0dHJzKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGF0dHJzKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgcmVmOiB0aGlzLmRhdGEucmVmXG4gICAgfTtcbiAgICBrZXlzLmZvckVhY2goKGspID0+IHtcbiAgICAgIG1hcmtlck1hbmFnZXIudXBkYXRlTWFya2VyKGRhdGEsIGssIGF0dHJzW2tdKTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgYXR0ciA9IHtcbiAgcG9zaXRpb24odmFsKSB7XG4gICAgY29uc29sZS5sb2codmFsKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGggPT09IDIpIHtcbiAgICAgIHBhcmFtcy5wb3NpdGlvbiA9IHZhbDtcbiAgICB9XG4gIH0sXG4gIGljb24odmFsKSB7XG4gICAgcGFyYW1zLmljb24gPSB2YWw7XG4gIH0sXG4gIHRpdGxlKHZhbCkge1xuICAgIHBhcmFtcy50aXRsZSA9IHZhbDtcbiAgfVxufTtcblxuY29uc3QgZXZlbnQgPSB7XG4gIGNsaWNrOiB7XG4gICAgZXh0cmEoKSB7XG4gICAgICByZXR1cm4geyBpc1N1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcE1ha2VyKGRhdGEpIHtcbiAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfVxuICBBbWFwTWFrZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlKTtcbiAgZXh0ZW5kKEFtYXBNYWtlci5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXBNYWtlci5wcm90b3R5cGUsIHsgYXR0ciB9KTtcbiAgZXh0ZW5kKEFtYXBNYWtlci5wcm90b3R5cGUsIHsgZXZlbnQgfSk7XG4gIFdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ3dlZXgtYW1hcC1tYXJrZXInLCBBbWFwTWFrZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9jb21wb25lbnRzL2FtYXAtbWFya2VyLmpzIiwiIC8qKlxuICAqIEluaXQgd2VleCBpbnN0YW5jZSBkZXBlbmRpbmcgb24gdGhlIHVybCBwYXJhbXMuXG4gICogVGhlcmUgYXJlIHRocmVlIHdheXMgdG8gbG9hZCB3ZWV4IGJ1bmRsZXMsIGRlcGVuZHMgb24gdGhlXG4gICogcGFyYW1ldGVyICdsb2FkZXInIGluIHRoZSB1cmw6XG4gICpcbiAgKiAgICsgeGhyOiB1c2UgWE1MSHR0cFJlcXVlc3QuIFBhcmFtZXRlciAncGFnZScgc2hvdWxkIGJlXG4gICogICB0aGUgYnVuZGxlJ3MgdXJsLlxuICAqICAgKyBzb3VyY2U6IHVzZSB0aGUgdHJhbnNmb3JtZWQgY29kZSBpdHNlbGYuICdwYWdlJyBzaG91bGRcbiAgKiAgIGJlIHRoZSB0cmFuc2Zvcm1lZCB3ZWV4IGJ1bmRsZS5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBidW5kbGUgLSBJdCBoYXMgZGlmZmVyZW50IG1lYW5pbmcgZGVwZW5kcyBvblxuICAqICAgdGhlIHR5cGUgb2YgbG9hZGVyLlxuICAqL1xuICBcblxuICBcbiAoZnVuY3Rpb24gKCkge1xuICAgZnVuY3Rpb24gZ2V0VXJsUGFyYW0oa2V5KSB7XG4gICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKCdbP3wmXScgKyBrZXkgKyAnPShbXiZdKyknKVxuICAgICB2YXIgbWF0Y2ggPSBsb2NhdGlvbi5zZWFyY2gubWF0Y2gocmVnKVxuICAgICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV1cbiAgIH1cbiAgIHZhciBsb2FkZXIgPSBnZXRVcmxQYXJhbSgnbG9hZGVyJykgfHwgJ3hocic7XG4gICB2YXIgcGFnZSA9IGdldFVybFBhcmFtKCdwYWdlJykgfHwgJy4uL2Rpc3QvaW5kZXguanMnO1xuICAgd2luZG93LndlZXguaW5pdCh7XG4gICAgIGFwcElkOiBsb2NhdGlvbi5ocmVmXG4gICAgICwgbG9hZGVyOiBsb2FkZXJcbiAgICAgLCBzb3VyY2U6IHBhZ2VcbiAgICAgLCByb290SWQ6ICd3ZWV4J1xuICAgfSlcbiB9KSgpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWIvanMvaW5pdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=