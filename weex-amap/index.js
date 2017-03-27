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
	module.exports = __webpack_require__(15);


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

	'use strict';
	
	var _amap = __webpack_require__(3);
	
	var _amap2 = _interopRequireDefault(_amap);
	
	var _amap3 = __webpack_require__(7);
	
	var _amap4 = _interopRequireDefault(_amap3);
	
	var _amapMarker = __webpack_require__(10);
	
	var _amapMarker2 = _interopRequireDefault(_amapMarker);
	
	var _amapCircle = __webpack_require__(11);
	
	var _amapCircle2 = _interopRequireDefault(_amapCircle);
	
	var _amapPolygon = __webpack_require__(12);
	
	var _amapPolygon2 = _interopRequireDefault(_amapPolygon);
	
	var _amapPolyline = __webpack_require__(13);
	
	var _amapPolyline2 = _interopRequireDefault(_amapPolyline);
	
	var _amapInfoWindow = __webpack_require__(14);
	
	var _amapInfoWindow2 = _interopRequireDefault(_amapInfoWindow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import VueAmap from './vue-amap/index';
	var components = [_amap4.default, _amapMarker2.default, _amapCircle2.default, _amapPolygon2.default, _amapPolyline2.default, _amapInfoWindow2.default];
	
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _components = __webpack_require__(4);
	
	var _components2 = _interopRequireDefault(_components);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	  },
	
	  /** get distance between two position
	  * @param coor1
	  * @param corr2
	  * @param callback
	  **/
	  getLineDistance: function getLineDistance(coor1, coor2, callback) {
	    var lnglat = new AMap.LngLat(coor1[0], coor1[1]);
	    var result = lnglat.distance(coor2);
	    console.log(result);
	    this.sender.performCallback(callback, {
	      result: !result ? 'fail' : 'success',
	      data: {
	        distance: result
	      }
	    });
	  },
	
	  /** tell if the marker in a polygon
	  * @param coor the marker position
	  * @param polygonRef
	  **/
	  polygonContainsMarker: function polygonContainsMarker(coor, polygonRef, callback) {
	    var polygonCom = _components2.default.getComponent(polygonRef);
	    var result = polygonCom.contains(coor);
	    this.sender.performCallback(callback, {
	      result: !result ? 'fail' : 'success',
	      data: result
	    });
	  }
	};
	
	var meta = {
	  amap: [{
	    name: 'getUserLocation',
	    args: ['string', 'function']
	  }, {
	    name: 'getLineDistance',
	    args: ['array', 'array', 'function']
	  }, {
	    name: 'polygonContainsMarker',
	    args: ['array', 'string']
	  }]
	};
	
	module.exports = function (Weex) {
	  Weex.registerApiModule('amap', amap, meta);
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mapManager = __webpack_require__(5);
	
	var _mapManager2 = _interopRequireDefault(_mapManager);
	
	var _vendor = __webpack_require__(6);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// manage components
	
	var components = {
	  registerComponent: function registerComponent(componentName, options, id, callback) {
	    var _this = this;
	
	    var opts = options || {};
	    if (!this._components) {
	      this._components = {};
	    }
	    _mapManager2.default.addReadyCallback(function (mapIns) {
	      opts.map = mapIns;
	      // options.center = new AMap.LngLat(options.center[0],options.center[1]);
	      var className = _vendor2.default.setFirstLetterToUppercase(componentName);
	      if (opts.offset) {
	        opts.offset = new AMap.Pixel(opts.offset[0], opts.offset[1]);
	      } else {
	        // this is a sdk bug polyfill
	        opts.offset = new AMap.Pixel(0, 0);
	      }
	      _this._components[id] = new AMap[className](opts);
	      if (typeof callback === 'function') {
	        callback(_this._components[id], mapIns);
	      }
	    });
	  },
	  getComponent: function getComponent(id) {
	    if (!this._components) {
	      return null;
	    }
	    if (!id) {
	      return _vendor2.default.getObjectFirstVal(this._components);
	    }
	    return this._components[id];
	  },
	  getComponentMap: function getComponentMap() {
	    return _mapManager2.default.getMap();
	  }
	};
	
	module.exports = components;

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
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = {
	  gengerateRandomId: function gengerateRandomId(prefix) {
	    return prefix + new Date().getTime().toString().substring(9, 3) + parseInt(Math.random() * 10000, 10);
	  },
	  setFirstLetterToUppercase: function setFirstLetterToUppercase(str) {
	    return str.substr(0, 1).toUpperCase() + str.substring(1);
	  },
	  getObjectFirstVal: function getObjectFirstVal(obj) {
	    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	      return obj[Object.keys(obj)[0]];
	    }
	    return null;
	  },
	
	  // offset polyfill
	  calcOffset: function calcOffset(x, y) {
	    var halfY = y / 2;
	    var newX = x - halfY;
	    return [newX, y];
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _marker = __webpack_require__(8);
	
	var _marker2 = _interopRequireDefault(_marker);
	
	var _mapLoader = __webpack_require__(9);
	
	var _mapLoader2 = _interopRequireDefault(_mapLoader);
	
	var _mapManager = __webpack_require__(5);
	
	var _mapManager2 = _interopRequireDefault(_mapManager);
	
	var _vendor = __webpack_require__(6);
	
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
	  search: false
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
	      if (params.search) {
	        AMap.service('AMap.PlaceSearch', function () {
	          _this.placeSearch = new AMap.PlaceSearch();
	        });
	      }
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
	    if (Array.isArray(val) && val.length === 2) {
	      params.center = val;
	      if (window.AMap) {
	        this.map.setCenter(params.center);
	      }
	    }
	    if (typeof val === 'number') {
	      var geo = new AMap.Geolocation({
	        enableHighAccuracy: true
	      });
	      var self = this;
	      geo.getCurrentPosition();
	      AMap.event.AMap.event.addListener(geo, 'complete', function (data) {
	        params.center = [data.position.getLng(), data.position.getLat()];
	        self.map.setCenter(params.center);
	      });
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
	  },
	  search: function search(val) {
	    params.search = val;
	    if (window.AMap) {}
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // a lib to manage all marker
	
	
	var _mapManager = __webpack_require__(5);
	
	var _mapManager2 = _interopRequireDefault(_mapManager);
	
	var _vendor = __webpack_require__(6);
	
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
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	// load map sdk
	var DEFAULT_CONFIG = {
	  key: '',
	  v: '1.3',
	  url: 'https://webapi.amap.com/maps',
	  callback: 'amapInitComponent'
	};
	var gengerateScriptUrl = function gengerateScriptUrl(obj) {
	  var paramArr = [];
	  for (var key in obj) {
	    if (key !== 'url') {
	      paramArr.push(encodeURI(key + '=' + obj[key]));
	    }
	  }
	  var url = obj.url += '?' + paramArr.join('&');
	  return url;
	};
	
	module.exports = {
	  load: function load(config, container, callback) {
	    var newConfig = Object.assign({}, DEFAULT_CONFIG, config);
	    var lib = document.createElement('script');
	    lib.async = true;
	    lib.defer = true;
	    lib.src = gengerateScriptUrl(newConfig);
	    console.log(lib.src);
	    window.amapInitComponent = function () {
	      window.maploaded = true;
	      callback();
	    };
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
	
	var _marker = __webpack_require__(8);
	
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _components = __webpack_require__(4);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _vendor = __webpack_require__(6);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var componentName = 'circle';
	// prototype methods.
	var proto = {
	  create: function create() {
	    var _this = this;
	
	    var node = document.createElement('div');
	    var data = this.data.attr;
	    var comId = data.ref || _vendor2.default.gengerateRandomId(componentName);
	    if (data.center && Array.isArray(data.center)) {
	      _components2.default.registerComponent(componentName, {
	        center: data.center,
	        radius: data.radius,
	        fillColor: data.fillColor,
	        filOpacity: data.fillOpacity,
	        strokeWeight: data.strokeWidth,
	        strokeOpacity: data.strokeOpacity,
	        strokeColor: data.strokeColor,
	        strokeStyle: data.strokeStyle,
	        events: {
	          click: function click() {
	            _this.dispatchEvent('click');
	          }
	        }
	      }, comId);
	    } else {
	      console.warn('attribute center must be an array.');
	    }
	    this._comId = comId;
	    return node;
	  }
	};
	
	var attr = {
	  center: function center(val) {
	    var com = _components2.default.getComponent(this._comId);
	    if (com) {
	      com.setCenter(val);
	    }
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
	
	  function AmapCircle(data) {
	    Component.call(this, data);
	  }
	  AmapCircle.prototype = Object.create(Component.prototype);
	  extend(AmapCircle.prototype, proto);
	  extend(AmapCircle.prototype, { attr: attr });
	  extend(AmapCircle.prototype, { event: event });
	  Weex.registerComponent('weex-amap-circle', AmapCircle);
	}
	
	exports.default = { init: init };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _components = __webpack_require__(4);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _vendor = __webpack_require__(6);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var componentName = 'polygon';
	// prototype methods.
	var proto = {
	  create: function create() {
	    var _this = this;
	
	    var node = document.createElement('div');
	    var data = this.data.attr;
	    var comId = this.data.ref || _vendor2.default.gengerateRandomId(componentName);
	    if (data.path && Array.isArray(data.path)) {
	      _components2.default.registerComponent(componentName, {
	        path: data.path,
	        fillColor: data.fillColor,
	        filOpacity: data.fillOpacity,
	        strokeWeight: data.strokeWidth,
	        strokeOpacity: data.strokeOpacity,
	        strokeColor: data.strokeColor,
	        strokeStyle: data.strokeStyle,
	        events: {
	          click: function click() {
	            _this.dispatchEvent('click');
	          }
	        }
	      }, comId);
	    } else {
	      console.warn('attribute path must be an array.');
	    }
	    this._comId = comId;
	    return node;
	  }
	};
	
	var attr = {};
	
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
	
	  function AmapPolygon(data) {
	    Component.call(this, data);
	  }
	  AmapPolygon.prototype = Object.create(Component.prototype);
	  extend(AmapPolygon.prototype, proto);
	  extend(AmapPolygon.prototype, { attr: attr });
	  extend(AmapPolygon.prototype, { event: event });
	  Weex.registerComponent('weex-amap-polygon', AmapPolygon);
	}
	
	exports.default = { init: init };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _components = __webpack_require__(4);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _vendor = __webpack_require__(6);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var componentName = 'polyline';
	// prototype methods.
	var proto = {
	  create: function create() {
	    var _this = this;
	
	    var node = document.createElement('div');
	    var data = this.data.attr;
	    var comId = data.ref || _vendor2.default.gengerateRandomId(componentName);
	    if (data.path && Array.isArray(data.path)) {
	      _components2.default.registerComponent(componentName, {
	        path: data.path,
	        strokeWeight: data.strokeWidth,
	        strokeOpacity: data.strokeOpacity,
	        strokeColor: data.strokeColor,
	        strokeStyle: data.strokeStyle,
	        events: {
	          click: function click() {
	            _this.dispatchEvent('click');
	          }
	        }
	      }, comId);
	    } else {
	      console.warn('attribute path must be an array.');
	    }
	    this._comId = comId;
	    return node;
	  }
	};
	
	var attr = {};
	
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
	
	  function AmapPolygon(data) {
	    Component.call(this, data);
	  }
	  AmapPolygon.prototype = Object.create(Component.prototype);
	  extend(AmapPolygon.prototype, proto);
	  extend(AmapPolygon.prototype, { attr: attr });
	  extend(AmapPolygon.prototype, { event: event });
	  Weex.registerComponent('weex-amap-polyline', AmapPolygon);
	}
	
	exports.default = { init: init };

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _components = __webpack_require__(4);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _vendor = __webpack_require__(6);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var componentName = 'InfoWindow';
	// prototype methods.
	var proto = {
	  create: function create() {
	    var _this = this;
	
	    var node = document.createElement('div');
	    node.style.opacity = 0;
	    var data = this.data.attr;
	    var comId = this.data.ref || _vendor2.default.gengerateRandomId(componentName);
	    this.addAppendHandler(function () {
	      if (data.position && Array.isArray(data.position)) {
	        _components2.default.registerComponent(componentName, {
	          position: data.position,
	          offset: data.offset,
	          isCustom: true
	        }, comId, function (com, map) {
	          var content = data.content;
	          if (_this.node.innerHTML.length > 0) {
	            content = _this.node.innerHTML;
	          }
	          if (content) {
	            com.setContent(content);
	          }
	          if (data.open && content) {
	            com.open(map, _this.data.attr.position);
	          } else {
	            com.close();
	          }
	        });
	      } else {
	        console.warn('attribute center must be an array.');
	      }
	    });
	    this._comId = comId;
	    return node;
	  }
	};
	
	var attr = {
	  open: function open(val) {
	    var com = _components2.default.getComponent(this.data.ref);
	    var map = _components2.default.getComponentMap();
	    if (com) {
	      if (val) {
	        com.open(map, this.data.attr.position);
	      } else {
	        com.close();
	      }
	    }
	  }
	};
	
	var event = {};
	
	function init(Weex) {
	  var Component = Weex.Component;
	  var extend = Weex.utils.extend;
	
	  function AmapInfoWindow(data) {
	    Component.call(this, data);
	  }
	  AmapInfoWindow.prototype = Object.create(Component.prototype);
	  extend(AmapInfoWindow.prototype, proto);
	  extend(AmapInfoWindow.prototype, { attr: attr });
	  extend(AmapInfoWindow.prototype, { event: event });
	  Weex.registerComponent('weex-amap-info-window', AmapInfoWindow);
	}
	
	exports.default = { init: init };

/***/ },
/* 15 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDNjZjQxMjY5YTNiZmVhY2ZiZDMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9wbHVnaW5fYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvbW9kdWxlL2FtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9tYXAtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS92ZW5kb3IuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvbWFwLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLW1hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLWNpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLXBvbHlnb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC1wb2x5bGluZS5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLWluZm8td2luZG93LmpzIiwid2VicGFjazovLy8uL3dlYi9qcy9pbml0LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIndlZXgiLCJpbnN0YWxsIiwiY29tcG9uZW50cyIsImluaXQiLCJXZWV4IiwiZm9yRWFjaCIsImNvbXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiYW1hcCIsImdldFVzZXJMb2NhdGlvbiIsIm1hcFJlZiIsImNhbGxiYWNrIiwic2VsZiIsImdlbyIsIkFNYXAiLCJHZW9sb2NhdGlvbiIsImVuYWJsZUhpZ2hBY2N1cmFjeSIsInRpbWVvdXQiLCJnZXRDdXJyZW50UG9zaXRpb24iLCJzdGF0dXMiLCJyZXMiLCJzZW5kZXIiLCJwZXJmb3JtQ2FsbGJhY2siLCJkYXRhIiwicG9zaXRpb24iLCJnZXRMbmciLCJnZXRMYXQiLCJyZXN1bHQiLCJjb25zb2xlIiwid2FybiIsIm1lc3NhZ2UiLCJnZXRMaW5lRGlzdGFuY2UiLCJjb29yMSIsImNvb3IyIiwibG5nbGF0IiwiTG5nTGF0IiwiZGlzdGFuY2UiLCJsb2ciLCJwb2x5Z29uQ29udGFpbnNNYXJrZXIiLCJjb29yIiwicG9seWdvblJlZiIsInBvbHlnb25Db20iLCJnZXRDb21wb25lbnQiLCJjb250YWlucyIsIm1ldGEiLCJuYW1lIiwiYXJncyIsInJlZ2lzdGVyQXBpTW9kdWxlIiwicmVnaXN0ZXJDb21wb25lbnQiLCJjb21wb25lbnROYW1lIiwib3B0aW9ucyIsImlkIiwib3B0cyIsIl9jb21wb25lbnRzIiwiYWRkUmVhZHlDYWxsYmFjayIsIm1hcElucyIsIm1hcCIsImNsYXNzTmFtZSIsInNldEZpcnN0TGV0dGVyVG9VcHBlcmNhc2UiLCJvZmZzZXQiLCJQaXhlbCIsImdldE9iamVjdEZpcnN0VmFsIiwiZ2V0Q29tcG9uZW50TWFwIiwiZ2V0TWFwIiwiY2FsbGJhY2tTdGFjayIsImluaXRNYXAiLCJfX21hcHMiLCJjYiIsIk9iamVjdCIsImtleXMiLCJwdXNoIiwiZ2VuZ2VyYXRlUmFuZG9tSWQiLCJwcmVmaXgiLCJEYXRlIiwiZ2V0VGltZSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwic3RyIiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJvYmoiLCJjYWxjT2Zmc2V0IiwieCIsInkiLCJoYWxmWSIsIm5ld1giLCJsb2FkaW5nR2lmIiwicGFyYW1zIiwiY2VudGVyIiwidW5kZWZpbmVkIiwiem9vbSIsInRvb2xiYXIiLCJzY2FsZSIsImdlb2xvY2F0aW9uIiwicmVzaXplRW5hYmxlIiwic2VhcmNoIiwiZXZlbnRzIiwicHJvdG8iLCJjcmVhdGUiLCJtYXB3cmFwIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kIiwicmVuZGVyTG9hZGluZ1NwaW5uZXIiLCJlbCIsInN0eWxlIiwiaGVpZ2h0IiwibWFyZ2luIiwidGV4dEFsaWduIiwiaW1hZ2UiLCJzcmMiLCJhcHBlbmRDaGlsZCIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsInJlYWR5IiwiTWFwIiwicGx1Z2luIiwiYWRkQ29udHJvbCIsIlRvb2xCYXIiLCJzZXJ2aWNlIiwicGxhY2VTZWFyY2giLCJQbGFjZVNlYXJjaCIsImluaXRFdmVudHMiLCJyZW1vdmVDaGlsZCIsImNoaWxkIiwicmVtb3ZlTWFrZXIiLCJldmVudE5hbWUiLCJldmVudCIsImFkZExpc3RlbmVyIiwiZGlzcGF0Y2hFdmVudCIsImF0dHIiLCJ2YWwiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJzZXRDZW50ZXIiLCJ0ZXN0Iiwic2V0Wm9vbSIsInNka0tleSIsImtleSIsImg1IiwibG9hZCIsInpvb21jaGFuZ2UiLCJleHRyYSIsImlzU3VjY2VzcyIsImRyYWdlbmQiLCJDb21wb25lbnQiLCJleHRlbmQiLCJ1dGlscyIsIkFtYXAiLCJjYWxsIiwicHJvdG90eXBlIiwibWFya2VycyIsImNoYW5nZU1hcmtlciIsImFyciIsImkiLCJtYXJrZXIiLCJmaW5kTWFya2VyIiwiYWRkTWFya2VyIiwicmVtb3ZlTWFya2VyIiwic2V0TWFya2VyIiwiaWNvbiIsIkljb24iLCJzaXplIiwiU2l6ZSIsIk1hcmtlciIsInRpdGxlIiwiX19nZXRNaWQiLCJyZWdpc3RlckV2ZW50cyIsInNldE1hcCIsInVwZGF0ZU1hcmtlciIsIm1ldGhvZCIsInZpc2libGUiLCJtaWQiLCJyZWYiLCJqb2luIiwiX19pc01ha2VyIiwiQ0xBU1NfTkFNRSIsIkRFRkFVTFRfQ09ORklHIiwidiIsInVybCIsImdlbmdlcmF0ZVNjcmlwdFVybCIsInBhcmFtQXJyIiwiZW5jb2RlVVJJIiwiY29uZmlnIiwiY29udGFpbmVyIiwibmV3Q29uZmlnIiwiYXNzaWduIiwibGliIiwiYXN5bmMiLCJkZWZlciIsImFtYXBJbml0Q29tcG9uZW50IiwibWFwbG9hZGVkIiwiaGVhZCIsImxvYWRUaW1lb3V0Iiwid3JhcCIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwibG9jYXRpb24iLCJyZWxvYWQiLCJjaGlsZE5vZGVzIiwicmVtb3ZlIiwicG9pc3Rpb24iLCJub2RlIiwiY2xpY2siLCJ1cGRhdGVBdHRycyIsImF0dHJzIiwiayIsIkFtYXBNYWtlciIsImNvbUlkIiwicmFkaXVzIiwiZmlsbENvbG9yIiwiZmlsT3BhY2l0eSIsImZpbGxPcGFjaXR5Iiwic3Ryb2tlV2VpZ2h0Iiwic3Ryb2tlV2lkdGgiLCJzdHJva2VPcGFjaXR5Iiwic3Ryb2tlQ29sb3IiLCJzdHJva2VTdHlsZSIsIl9jb21JZCIsImNvbSIsIkFtYXBDaXJjbGUiLCJwYXRoIiwiQW1hcFBvbHlnb24iLCJvcGFjaXR5IiwiYWRkQXBwZW5kSGFuZGxlciIsImlzQ3VzdG9tIiwiY29udGVudCIsImlubmVySFRNTCIsInNldENvbnRlbnQiLCJvcGVuIiwiY2xvc2UiLCJBbWFwSW5mb1dpbmRvdyIsImdldFVybFBhcmFtIiwicmVnIiwiUmVnRXhwIiwibWF0Y2giLCJsb2FkZXIiLCJwYWdlIiwiYXBwSWQiLCJocmVmIiwic291cmNlIiwicm9vdElkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtB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LEVBQUVyQixVQUFGLEVBQWpDO0FBQ0FpQixVQUFPcUYsZUFBZWpGLFNBQXRCLEVBQWlDLEVBQUV4QixZQUFGLEVBQWpDO0FBQ0EvSCxRQUFLNkMsaUJBQUwsQ0FBdUIsdUJBQXZCLEVBQWdEMkwsY0FBaEQ7QUFDRDs7bUJBRWMsRUFBRXpPLFVBQUYsRTs7Ozs7Ozs7QUN2RWQ7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLEVBQUMsWUFBWTtBQUNYLFlBQVMwTyxXQUFULENBQXFCOUYsR0FBckIsRUFBMEI7QUFDeEIsU0FBSStGLE1BQU0sSUFBSUMsTUFBSixDQUFXLFVBQVVoRyxHQUFWLEdBQWdCLFVBQTNCLENBQVY7QUFDQSxTQUFJaUcsUUFBUXRDLFNBQVN2RyxNQUFULENBQWdCNkksS0FBaEIsQ0FBc0JGLEdBQXRCLENBQVo7QUFDQSxZQUFPRSxTQUFTQSxNQUFNLENBQU4sQ0FBaEI7QUFDRDtBQUNELE9BQUlDLFNBQVNKLFlBQVksUUFBWixLQUF5QixLQUF0QztBQUNBLE9BQUlLLE9BQU9MLFlBQVksTUFBWixLQUF1QixrQkFBbEM7QUFDQTlPLFVBQU9DLElBQVAsQ0FBWUcsSUFBWixDQUFpQjtBQUNmZ1AsWUFBT3pDLFNBQVMwQyxJQUREO0FBRWJILGFBQVFBLE1BRks7QUFHYkksYUFBUUgsSUFISztBQUliSSxhQUFRO0FBSkssSUFBakI7QUFNRCxFQWRELEkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkM2NmNDEyNjlhM2JmZWFjZmJkMyIsImltcG9ydCBhbWFwIGZyb20gXCIvVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FtYXAtcnVubmluZy1hcHAvcGx1Z2lucy93ZWV4LWFtYXAvd2ViXCI7XHJcbndpbmRvdy53ZWV4ICYmIHdpbmRvdy53ZWV4Lmluc3RhbGwoYW1hcCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy9wbHVnaW5fYnVuZGxlLmpzIiwiaW1wb3J0IGFtYXBNb2R1bGVSZWcgZnJvbSAnLi9tb2R1bGUvYW1hcCc7XG5pbXBvcnQgQW1hcCBmcm9tICcuL2NvbXBvbmVudHMvYW1hcCc7XG5pbXBvcnQgQW1hcE1hcmtlciBmcm9tICcuL2NvbXBvbmVudHMvYW1hcC1tYXJrZXInO1xuaW1wb3J0IEFtYXBDaXJjbGUgZnJvbSAnLi9jb21wb25lbnRzL2FtYXAtY2lyY2xlJztcbmltcG9ydCBBbWFwUG9seWdvbiBmcm9tICcuL2NvbXBvbmVudHMvYW1hcC1wb2x5Z29uJztcbmltcG9ydCBBbWFwUG9seWxpbmUgZnJvbSAnLi9jb21wb25lbnRzL2FtYXAtcG9seWxpbmUnO1xuaW1wb3J0IEFtYXBJbmZvV2luZG93IGZyb20gJy4vY29tcG9uZW50cy9hbWFwLWluZm8td2luZG93Jztcbi8vIGltcG9ydCBWdWVBbWFwIGZyb20gJy4vdnVlLWFtYXAvaW5kZXgnO1xuY29uc3QgY29tcG9uZW50cyA9IFtcbiAgQW1hcCxcbiAgQW1hcE1hcmtlcixcbiAgQW1hcENpcmNsZSxcbiAgQW1hcFBvbHlnb24sXG4gIEFtYXBQb2x5bGluZSxcbiAgQW1hcEluZm9XaW5kb3dcbl07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb21wb25lbnRzLmZvckVhY2goKGNvbXApID0+IHtcbiAgICBjb21wLmluaXQoV2VleCk7XG4gIH0pO1xuICBhbWFwTW9kdWxlUmVnKFdlZXgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXRcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9pbmRleC5qcyIsImltcG9ydCBjb21wb25lbnRzIGZyb20gJy4uL3NlcnZpY2UvY29tcG9uZW50cyc7XG4vLyBBTWFwIG1vZHVsZVxuY29uc3QgYW1hcCA9IHtcbiAgLyoqIGdldCB1c2VyIGxvYWN0aW9uIGJ5IGJyb3dzZXIgYW5kIElQXG4gICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBlcnJvckNhbGxiYWNrXG4gICoqL1xuICBnZXRVc2VyTG9jYXRpb24obWFwUmVmLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IGdlbyA9IG5ldyBBTWFwLkdlb2xvY2F0aW9uKHtcbiAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSxcbiAgICAgIHRpbWVvdXQ6IDEwMDAwXG4gICAgfSk7XG4gICAgZ2VvLmdldEN1cnJlbnRQb3NpdGlvbigoc3RhdHVzLCByZXMpID0+IHtcbiAgICAgIGlmIChzdGF0dXMgIT09ICdlcnJvcicpIHtcbiAgICAgICAgc2VsZi5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrLCB7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcG9zaXRpb246IFtyZXMucG9zaXRpb24uZ2V0TG5nKCksIHJlcy5wb3NpdGlvbi5nZXRMYXQoKV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3VsdDogJ3N1Y2Nlc3MnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKHJlcy5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgLyoqIGdldCBkaXN0YW5jZSBiZXR3ZWVuIHR3byBwb3NpdGlvblxuICAqIEBwYXJhbSBjb29yMVxuICAqIEBwYXJhbSBjb3JyMlxuICAqIEBwYXJhbSBjYWxsYmFja1xuICAqKi9cbiAgZ2V0TGluZURpc3RhbmNlKGNvb3IxLCBjb29yMiwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBsbmdsYXQgPSBuZXcgQU1hcC5MbmdMYXQoY29vcjFbMF0sIGNvb3IxWzFdKTtcbiAgICBjb25zdCByZXN1bHQgPSBsbmdsYXQuZGlzdGFuY2UoY29vcjIpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgdGhpcy5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrLCB7XG4gICAgICByZXN1bHQ6ICFyZXN1bHQgPyAnZmFpbCcgOiAnc3VjY2VzcycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRpc3RhbmNlOiByZXN1bHRcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgLyoqIHRlbGwgaWYgdGhlIG1hcmtlciBpbiBhIHBvbHlnb25cbiAgKiBAcGFyYW0gY29vciB0aGUgbWFya2VyIHBvc2l0aW9uXG4gICogQHBhcmFtIHBvbHlnb25SZWZcbiAgKiovXG4gIHBvbHlnb25Db250YWluc01hcmtlcihjb29yLCBwb2x5Z29uUmVmLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHBvbHlnb25Db20gPSBjb21wb25lbnRzLmdldENvbXBvbmVudChwb2x5Z29uUmVmKTtcbiAgICBjb25zdCByZXN1bHQgPSBwb2x5Z29uQ29tLmNvbnRhaW5zKGNvb3IpO1xuICAgIHRoaXMuc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFjaywge1xuICAgICAgcmVzdWx0OiAhcmVzdWx0ID8gJ2ZhaWwnIDogJ3N1Y2Nlc3MnLFxuICAgICAgZGF0YTogcmVzdWx0XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IG1ldGEgPSB7XG4gIGFtYXA6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnZ2V0VXNlckxvY2F0aW9uJyxcbiAgICAgIGFyZ3M6IFsnc3RyaW5nJywgJ2Z1bmN0aW9uJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZ2V0TGluZURpc3RhbmNlJyxcbiAgICAgIGFyZ3M6IFsnYXJyYXknLCAnYXJyYXknLCAnZnVuY3Rpb24nXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3BvbHlnb25Db250YWluc01hcmtlcicsXG4gICAgICBhcmdzOiBbJ2FycmF5JywgJ3N0cmluZyddXG4gICAgfVxuICBdXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChXZWV4KSB7XG4gIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ2FtYXAnLCBhbWFwLCBtZXRhKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvbW9kdWxlL2FtYXAuanMiLCIvLyBtYW5hZ2UgY29tcG9uZW50c1xuXG5pbXBvcnQgYW1hcE1hbmFnZXIgZnJvbSAnLi9tYXAtbWFuYWdlcic7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4vdmVuZG9yJztcblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgcmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50TmFtZSwgb3B0aW9ucywgaWQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgb3B0cyA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKCF0aGlzLl9jb21wb25lbnRzKSB7XG4gICAgICB0aGlzLl9jb21wb25lbnRzID0ge307XG4gICAgfVxuICAgIGFtYXBNYW5hZ2VyLmFkZFJlYWR5Q2FsbGJhY2soKG1hcElucykgPT4ge1xuICAgICAgb3B0cy5tYXAgPSBtYXBJbnM7XG4gICAgICAvLyBvcHRpb25zLmNlbnRlciA9IG5ldyBBTWFwLkxuZ0xhdChvcHRpb25zLmNlbnRlclswXSxvcHRpb25zLmNlbnRlclsxXSk7XG4gICAgICBjb25zdCBjbGFzc05hbWUgPSB2ZW5kb3Iuc2V0Rmlyc3RMZXR0ZXJUb1VwcGVyY2FzZShjb21wb25lbnROYW1lKTtcbiAgICAgIGlmIChvcHRzLm9mZnNldCkge1xuICAgICAgICBvcHRzLm9mZnNldCA9IG5ldyBBTWFwLlBpeGVsKG9wdHMub2Zmc2V0WzBdLCBvcHRzLm9mZnNldFsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzIGlzIGEgc2RrIGJ1ZyBwb2x5ZmlsbFxuICAgICAgICBvcHRzLm9mZnNldCA9IG5ldyBBTWFwLlBpeGVsKDAsIDApO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29tcG9uZW50c1tpZF0gPSBuZXcgQU1hcFtjbGFzc05hbWVdKG9wdHMpO1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayh0aGlzLl9jb21wb25lbnRzW2lkXSwgbWFwSW5zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZ2V0Q29tcG9uZW50KGlkKSB7XG4gICAgaWYgKCF0aGlzLl9jb21wb25lbnRzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuIHZlbmRvci5nZXRPYmplY3RGaXJzdFZhbCh0aGlzLl9jb21wb25lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudHNbaWRdO1xuICB9LFxuICBnZXRDb21wb25lbnRNYXAoKSB7XG4gICAgcmV0dXJuIGFtYXBNYW5hZ2VyLmdldE1hcCgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBvbmVudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9jb21wb25lbnRzLmpzIiwiLyoqIG1hcCBpbnN0YW5jZSBtYW5hZ2VyXG4qIDIwMTcwMjA0XG4qKi9cbmxldCBjYWxsYmFja1N0YWNrID0gW107XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdE1hcChpZCwgbWFwKSB7XG4gICAgaWYgKCF0aGlzLl9fbWFwcykge1xuICAgICAgdGhpcy5fX21hcHMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5fX21hcHNbaWRdID0gbWFwO1xuICAgIGNhbGxiYWNrU3RhY2suZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgIGNiKG1hcCk7XG4gICAgfSk7XG4gICAgY2FsbGJhY2tTdGFjayA9IFtdO1xuICB9LFxuICBnZXRNYXAoaWQpIHtcbiAgICBpZiAoIXRoaXMuX19tYXBzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFpZCkge1xuICAgICAgaWQgPSBPYmplY3Qua2V5cyh0aGlzLl9fbWFwcylbMF07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9fbWFwc1tpZF07XG4gIH0sXG4gIGFkZFJlYWR5Q2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICBjYWxsYmFja1N0YWNrLnB1c2goY2FsbGJhY2spO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvbWFwLW1hbmFnZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2VuZ2VyYXRlUmFuZG9tSWQocHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCArICgobmV3IERhdGUoKSkuZ2V0VGltZSgpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDksIDMpKSArIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMDAwMCwgMTApO1xuICB9LFxuICBzZXRGaXJzdExldHRlclRvVXBwZXJjYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyaW5nKDEpO1xuICB9LFxuICBnZXRPYmplY3RGaXJzdFZhbChvYmopIHtcbiAgICBpZih0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG9ialtPYmplY3Qua2V5cyhvYmopWzBdXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgLy8gb2Zmc2V0IHBvbHlmaWxsXG4gIGNhbGNPZmZzZXQoeCwgeSkge1xuICAgIHZhciBoYWxmWSA9IHkgLyAyO1xuICAgIHZhciBuZXdYID0geCAtIGhhbGZZO1xuICAgIHJldHVybiBbbmV3WCwgeV07XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS92ZW5kb3IuanMiLCJpbXBvcnQgbWFya2VyTWFuYWdlIGZyb20gJy4uL3NlcnZpY2UvbWFya2VyJztcbmltcG9ydCBtYXBMb2FkZXIgZnJvbSAnLi4vc2VydmljZS9tYXAtbG9hZGVyJztcbmltcG9ydCBhbWFwTWFuYWdlciBmcm9tICcuLi9zZXJ2aWNlL21hcC1tYW5hZ2VyJztcbmltcG9ydCB2ZW5kb3IgZnJvbSAnLi4vc2VydmljZS92ZW5kb3InO1xuXG5cbmNvbnN0IGxvYWRpbmdHaWYgPSAnaHR0cDovL2ltZzEudnVlZC52YW50aGluay5jbi92dWVkMjExM2VhYTA2MmFiYmFlZTA0NDFkMTZhNzg0OGQyM2UuZ2lmJztcbmNvbnN0IHBhcmFtcyA9IHtcbiAgY2VudGVyOiB1bmRlZmluZWQsXG4gIHpvb206IDExLFxuICB0b29sYmFyOiB0cnVlLFxuICBzY2FsZTogZmFsc2UsXG4gIGdlb2xvY2F0aW9uOiBmYWxzZSxcbiAgcmVzaXplRW5hYmxlOiB0cnVlLFxuICBzZWFyY2g6IGZhbHNlXG59O1xuY29uc3QgZXZlbnRzID0gW1xuICAnem9vbWNoYW5nZScsXG4gICdkcmFnZW5kJ1xuXTtcbi8vIHByb3RvdHlwZSBtZXRob2RzLlxuY29uc3QgcHJvdG8gPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLm1hcHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLm1hcHdyYXAuaWQgPSB2ZW5kb3IuZ2VuZ2VyYXRlUmFuZG9tSWQoJ21hcCcpO1xuICAgIHRoaXMubWFwd3JhcC5hcHBlbmQodGhpcy5yZW5kZXJMb2FkaW5nU3Bpbm5lcigpKTtcbiAgICByZXR1cm4gdGhpcy5tYXB3cmFwO1xuICB9LFxuICByZW5kZXJMb2FkaW5nU3Bpbm5lcigpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IDYwO1xuICAgIGVsLnN0eWxlLm1hcmdpbiA9ICcyMCBhdXRvJztcbiAgICBlbC5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNyYyA9IGxvYWRpbmdHaWY7XG4gICAgZWwuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfpq5jlvrflnLDlm77liqDovb3kuK0uLi4uJykpO1xuICAgIGVsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIHJldHVybiBlbDtcbiAgfSxcbiAgcmVhZHkoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHdpbmRvdy5BTWFwKSB7XG4gICAgICB0aGlzLm1hcCA9IG5ldyBBTWFwLk1hcCh0aGlzLm1hcHdyYXAuaWQsIHBhcmFtcyk7XG4gICAgICBBTWFwLnBsdWdpbihbJ0FNYXAuVG9vbEJhcicsICdBTWFwLkdlb2xvY2F0aW9uJ10sICgpID0+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5zY2FsZSkge1xuICAgICAgICAgIHNlbGYubWFwLmFkZENvbnRyb2wobmV3IEFNYXAuVG9vbEJhcigpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgc2VsZi5tYXAuYWRkQ29udHJvbChuZXcgQU1hcC5HZW9sb2NhdGlvbigpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAocGFyYW1zLnNlYXJjaCkge1xuICAgICAgICBBTWFwLnNlcnZpY2UoJ0FNYXAuUGxhY2VTZWFyY2gnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbGFjZVNlYXJjaCA9IG5ldyBBTWFwLlBsYWNlU2VhcmNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgICBhbWFwTWFuYWdlci5pbml0TWFwKHRoaXMubWFwd3JhcC5pZCwgdGhpcy5tYXApO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICBtYXJrZXJNYW5hZ2UucmVtb3ZlTWFrZXIoY2hpbGQuZGF0YSk7XG4gIH0sXG4gIGluaXRFdmVudHMoKSB7XG4gICAgZXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xuICAgICAgQU1hcC5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcCwgZXZlbnROYW1lLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudE5hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGF0dHIgPSB7XG4gIGNlbnRlcih2YWwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGggPT09IDIpIHtcbiAgICAgIHBhcmFtcy5jZW50ZXIgPSB2YWw7XG4gICAgICBpZiAod2luZG93LkFNYXApIHtcbiAgICAgICAgdGhpcy5tYXAuc2V0Q2VudGVyKHBhcmFtcy5jZW50ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnN0IGdlbyA9IG5ldyBBTWFwLkdlb2xvY2F0aW9uKHtcbiAgICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgZ2VvLmdldEN1cnJlbnRQb3NpdGlvbigpO1xuICAgICAgQU1hcC5ldmVudC5BTWFwLmV2ZW50LmFkZExpc3RlbmVyKGdlbywgJ2NvbXBsZXRlJywgKGRhdGEpID0+IHtcbiAgICAgICAgcGFyYW1zLmNlbnRlciA9IFtkYXRhLnBvc2l0aW9uLmdldExuZygpLCBkYXRhLnBvc2l0aW9uLmdldExhdCgpXTtcbiAgICAgICAgc2VsZi5tYXAuc2V0Q2VudGVyKHBhcmFtcy5jZW50ZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICB6b29tKHZhbCkge1xuICAgIGlmICgvXlswLTldKyQvLnRlc3QodmFsKSkge1xuICAgICAgcGFyYW1zLnpvb20gPSB2YWw7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuQU1hcCkge1xuICAgICAgdGhpcy5tYXAuc2V0Wm9vbShwYXJhbXMuem9vbSk7XG4gICAgfVxuICB9LFxuICBzY2FsZSh2YWwpIHtcbiAgICBwYXJhbXMuc2NhbGUgPSB2YWw7XG4gIH0sXG4gIGdlb2xvY2F0aW9uKHZhbCkge1xuICAgIHBhcmFtcy5nZW9sb2NhdGlvbiA9IHZhbDtcbiAgfSxcbiAgc2RrS2V5KHZhbCkge1xuICAgIGxldCBrZXkgPSAnJztcbiAgICBpZiAodmFsKSB7XG4gICAgICBrZXkgPSB2YWwuaDU7XG4gICAgfVxuICAgIG1hcExvYWRlci5sb2FkKHtcbiAgICAgIGtleToga2V5XG4gICAgfSwgdGhpcy5tYXB3cmFwLCAoKSA9PiB0aGlzLnJlYWR5KCkpO1xuICB9LFxuICBzZWFyY2godmFsKSB7XG4gICAgcGFyYW1zLnNlYXJjaCA9IHZhbDtcbiAgICBpZiAod2luZG93LkFNYXApIHtcbiAgICAgICAgXG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBldmVudCA9IHtcbiAgem9vbWNoYW5nZToge1xuICAgIGV4dHJhKCkge1xuICAgICAgcmV0dXJuIHsgaXNTdWNjZXNzOiB0cnVlIH07XG4gICAgfVxuICB9LFxuICBkcmFnZW5kOiB7XG4gICAgZXh0cmEoKSB7XG4gICAgICByZXR1cm4geyBpc1N1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcChkYXRhKSB7XG4gICAgQ29tcG9uZW50LmNhbGwodGhpcywgZGF0YSk7XG4gIH1cbiAgQW1hcC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUpO1xuICBleHRlbmQoQW1hcC5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXAucHJvdG90eXBlLCB7IGF0dHIgfSk7XG4gIGV4dGVuZChBbWFwLnByb3RvdHlwZSwge1xuICAgIHN0eWxlOiBleHRlbmQoT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlLnN0eWxlKSwge30pXG4gIH0pO1xuICBleHRlbmQoQW1hcC5wcm90b3R5cGUsIHsgZXZlbnQgfSk7XG4gIFdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ3dlZXgtYW1hcCcsIEFtYXApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9jb21wb25lbnRzL2FtYXAuanMiLCIvLyBhIGxpYiB0byBtYW5hZ2UgYWxsIG1hcmtlclxuaW1wb3J0IGFtYXBNYW5hZ2VyIGZyb20gJy4vbWFwLW1hbmFnZXInO1xuaW1wb3J0IHZlbmRvciBmcm9tICcuL3ZlbmRvcic7XG5cbmNvbnN0IG1hcmtlcnMgPSB7fTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGFuZ2VNYXJrZXIoYXJyLCBtYXApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGF0YSA9IGFycltpXTtcbiAgICAgIGNvbnN0IG1hcmtlciA9IHRoaXMuZmluZE1hcmtlcihkYXRhKTtcbiAgICAgIGlmICghbWFya2VyKSB7XG4gICAgICAgIHRoaXMuYWRkTWFya2VyKGRhdGEsIG1hcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZU1hcmtlcihkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGFkZE1hcmtlcihkYXRhKSB7XG4gICAgY29uc3QgbWFwID0gYW1hcE1hbmFnZXIuZ2V0TWFwKCk7XG4gICAgaWYgKCFtYXApIHtcbiAgICAgIHJldHVybiBhbWFwTWFuYWdlci5hZGRSZWFkeUNhbGxiYWNrKChtYXBJbnMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRNYXJrZXIoZGF0YSwgbWFwSW5zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZXRNYXJrZXIoZGF0YSwgbWFwKTtcbiAgfSxcbiAgc2V0TWFya2VyKGRhdGEsIG1hcCkge1xuICAgIGxldCBpY29uID0gbnVsbDtcbiAgICBpZiAoZGF0YS5pY29uKSB7XG4gICAgICBpY29uID0gbmV3IEFNYXAuSWNvbih7XG4gICAgICAgIGltYWdlOiBkYXRhLmljb24sXG4gICAgICAgIHNpemU6IG5ldyBBTWFwLlNpemUoNjQsIDY0KVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBBTWFwLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogZGF0YS5wb3NpdGlvbixcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgaWNvbjogaWNvbixcbiAgICAgIG1hcDogbWFwLFxuICAgIH0pO1xuICAgIG1hcmtlcnNbdGhpcy5fX2dldE1pZChkYXRhKV0gPSBtYXJrZXI7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cyhkYXRhLmV2ZW50cywgbWFya2VyKTtcbiAgfSxcbiAgcmVtb3ZlTWFrZXIoZGF0YSkge1xuICAgIGNvbnN0IG1hcmtlciA9IHRoaXMuZmluZE1hcmtlcihkYXRhKTtcbiAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xuICB9LFxuICB1cGRhdGVNYXJrZXIoZGF0YSwgYXR0ciwgdmFsKSB7XG4gICAgY29uc3QgbWFya2VyID0gdGhpcy5maW5kTWFya2VyKGRhdGEpO1xuICAgIGlmICghbWFya2VyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IG1ldGhvZCA9IHZlbmRvci5zZXRGaXJzdExldHRlclRvVXBwZXJjYXNlKGF0dHIpO1xuICAgIG1hcmtlclsnc2V0JyArIG1ldGhvZF0odmFsKTtcbiAgfSxcbiAgcmVnaXN0ZXJFdmVudHMoZXZlbnRzLCBtYXJrZXIpIHtcbiAgICBpZiAodHlwZW9mIGV2ZW50cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGV2ZW50cykge1xuICAgICAgICBBTWFwLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwga2V5LCBldmVudHNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZW1vdmVNYXJrZXIoZGF0YSkge1xuICAgIGxldCBtYXJrZXIgPSB0aGlzLmZpbmRNYXJrZXIoZGF0YSk7XG4gICAgaWYgKG1hcmtlcikge1xuICAgICAgbWFya2VyLnZpc2libGUgPSB0cnVlO1xuICAgICAgbWFya2VyID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIGZpbmRNYXJrZXIoZGF0YSkge1xuICAgIGNvbnN0IG1pZCA9IHRoaXMuX19nZXRNaWQoZGF0YSk7XG4gICAgcmV0dXJuIG1hcmtlcnNbbWlkXTtcbiAgfSxcbiAgX19nZXRNaWQoZGF0YSkge1xuICAgIHJldHVybiAnbWlkLScgKyBkYXRhLnJlZiB8fCBkYXRhLnBvc2l0aW9uLmpvaW4oJy0nKTtcbiAgfSxcbiAgX19pc01ha2VyKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouQ0xBU1NfTkFNRSA9PT0gJ0FNYXAuTWFya2VyJztcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9zZXJ2aWNlL21hcmtlci5qcyIsIi8vIGxvYWQgbWFwIHNka1xuY29uc3QgREVGQVVMVF9DT05GSUcgPSB7XG4gIGtleTogJycsXG4gIHY6ICcxLjMnLFxuICB1cmw6ICdodHRwczovL3dlYmFwaS5hbWFwLmNvbS9tYXBzJyxcbiAgY2FsbGJhY2s6ICdhbWFwSW5pdENvbXBvbmVudCdcbn07XG5jb25zdCBnZW5nZXJhdGVTY3JpcHRVcmwgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGNvbnN0IHBhcmFtQXJyID0gW107XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChrZXkgIT09ICd1cmwnKSB7XG4gICAgICBwYXJhbUFyci5wdXNoKGVuY29kZVVSSShrZXkgKyAnPScgKyBvYmpba2V5XSkpO1xuICAgIH1cbiAgfVxuICBjb25zdCB1cmwgPSBvYmoudXJsICs9ICc/JyArIHBhcmFtQXJyLmpvaW4oJyYnKTtcbiAgcmV0dXJuIHVybDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsb2FkKGNvbmZpZywgY29udGFpbmVyLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IG5ld0NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfQ09ORklHLCBjb25maWcpO1xuICAgIGNvbnN0IGxpYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGxpYi5hc3luYyA9IHRydWU7XG4gICAgbGliLmRlZmVyID0gdHJ1ZTtcbiAgICBsaWIuc3JjID0gZ2VuZ2VyYXRlU2NyaXB0VXJsKG5ld0NvbmZpZyk7XG4gICAgY29uc29sZS5sb2cobGliLnNyYyk7XG4gICAgd2luZG93LmFtYXBJbml0Q29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93Lm1hcGxvYWRlZCA9IHRydWU7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaWIpO1xuICAgIHRoaXMubG9hZFRpbWVvdXQoY29udGFpbmVyKTtcbiAgfSxcbiAgbG9hZFRpbWVvdXQod3JhcCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF3aW5kb3cuQW1hcCkge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgn6YeN5paw5Yqg6L29JykpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdyYXAuY2hpbGROb2Rlc1swXS5yZW1vdmUoKTtcbiAgICAgICAgd3JhcC5hcHBlbmRDaGlsZChlbCk7XG4gICAgICB9XG4gICAgfSwgMTAwMDApO1xuICB9XG5cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9tYXAtbG9hZGVyLmpzIiwiaW1wb3J0IG1hcmtlck1hbmFnZXIgZnJvbSAnLi4vc2VydmljZS9tYXJrZXInO1xuXG5jb25zdCBwYXJhbXMgPSB7XG4gIHBvaXN0aW9uOiBbXSxcbiAgdGl0bGU6ICcnLFxuICBpY29uOiAnJ1xufTtcblxuLy8gcHJvdG90eXBlIG1ldGhvZHMuXG5jb25zdCBwcm90byA9IHtcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLmF0dHI7XG4gICAgbWFya2VyTWFuYWdlci5hZGRNYXJrZXIoe1xuICAgICAgcG9zaXRpb246IGRhdGEucG9zaXRpb24sXG4gICAgICBpY29uOiBkYXRhLmljb24sXG4gICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgIHJlZjogdGhpcy5kYXRhLnJlZixcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY2xpY2snKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1hcDogd2luZG93LkFtYXBcbiAgICB9KTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgdXBkYXRlQXR0cnMoYXR0cnMpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXR0cnMpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICByZWY6IHRoaXMuZGF0YS5yZWZcbiAgICB9O1xuICAgIGtleXMuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgbWFya2VyTWFuYWdlci51cGRhdGVNYXJrZXIoZGF0YSwgaywgYXR0cnNba10pO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBhdHRyID0ge1xuICBwb3NpdGlvbih2YWwpIHtcbiAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA9PT0gMikge1xuICAgICAgcGFyYW1zLnBvc2l0aW9uID0gdmFsO1xuICAgIH1cbiAgfSxcbiAgaWNvbih2YWwpIHtcbiAgICBwYXJhbXMuaWNvbiA9IHZhbDtcbiAgfSxcbiAgdGl0bGUodmFsKSB7XG4gICAgcGFyYW1zLnRpdGxlID0gdmFsO1xuICB9XG59O1xuXG5jb25zdCBldmVudCA9IHtcbiAgY2xpY2s6IHtcbiAgICBleHRyYSgpIHtcbiAgICAgIHJldHVybiB7IGlzU3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gaW5pdChXZWV4KSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IFdlZXguQ29tcG9uZW50O1xuICBjb25zdCBleHRlbmQgPSBXZWV4LnV0aWxzLmV4dGVuZDtcblxuICBmdW5jdGlvbiBBbWFwTWFrZXIoZGF0YSkge1xuICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9XG4gIEFtYXBNYWtlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUpO1xuICBleHRlbmQoQW1hcE1ha2VyLnByb3RvdHlwZSwgcHJvdG8pO1xuICBleHRlbmQoQW1hcE1ha2VyLnByb3RvdHlwZSwgeyBhdHRyIH0pO1xuICBleHRlbmQoQW1hcE1ha2VyLnByb3RvdHlwZSwgeyBldmVudCB9KTtcbiAgV2VleC5yZWdpc3RlckNvbXBvbmVudCgnd2VleC1hbWFwLW1hcmtlcicsIEFtYXBNYWtlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC1tYXJrZXIuanMiLCJpbXBvcnQgY29tcG9uZW50cyBmcm9tICcuLi9zZXJ2aWNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHZlbmRvciBmcm9tICcuLi9zZXJ2aWNlL3ZlbmRvcic7XG5cbmNvbnN0IGNvbXBvbmVudE5hbWUgPSAnY2lyY2xlJztcbi8vIHByb3RvdHlwZSBtZXRob2RzLlxuY29uc3QgcHJvdG8gPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5hdHRyO1xuICAgIGNvbnN0IGNvbUlkID0gZGF0YS5yZWYgfHwgdmVuZG9yLmdlbmdlcmF0ZVJhbmRvbUlkKGNvbXBvbmVudE5hbWUpO1xuICAgIGlmIChkYXRhLmNlbnRlciAmJiBBcnJheS5pc0FycmF5KGRhdGEuY2VudGVyKSkge1xuICAgICAgY29tcG9uZW50cy5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnROYW1lLCB7XG4gICAgICAgIGNlbnRlcjogZGF0YS5jZW50ZXIsXG4gICAgICAgIHJhZGl1czogZGF0YS5yYWRpdXMsXG4gICAgICAgIGZpbGxDb2xvcjogZGF0YS5maWxsQ29sb3IsXG4gICAgICAgIGZpbE9wYWNpdHk6IGRhdGEuZmlsbE9wYWNpdHksXG4gICAgICAgIHN0cm9rZVdlaWdodDogZGF0YS5zdHJva2VXaWR0aCxcbiAgICAgICAgc3Ryb2tlT3BhY2l0eTogZGF0YS5zdHJva2VPcGFjaXR5LFxuICAgICAgICBzdHJva2VDb2xvcjogZGF0YS5zdHJva2VDb2xvcixcbiAgICAgICAgc3Ryb2tlU3R5bGU6IGRhdGEuc3Ryb2tlU3R5bGUsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NsaWNrJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSwgY29tSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2F0dHJpYnV0ZSBjZW50ZXIgbXVzdCBiZSBhbiBhcnJheS4nKTtcbiAgICB9XG4gICAgdGhpcy5fY29tSWQgPSBjb21JZDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufTtcblxuY29uc3QgYXR0ciA9IHtcbiAgY2VudGVyKHZhbCkge1xuICAgIGNvbnN0IGNvbSA9IGNvbXBvbmVudHMuZ2V0Q29tcG9uZW50KHRoaXMuX2NvbUlkKTtcbiAgICBpZiAoY29tKSB7XG4gICAgICBjb20uc2V0Q2VudGVyKHZhbCk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBldmVudCA9IHtcbiAgY2xpY2s6IHtcbiAgICBleHRyYSgpIHtcbiAgICAgIHJldHVybiB7IGlzU3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gaW5pdChXZWV4KSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IFdlZXguQ29tcG9uZW50O1xuICBjb25zdCBleHRlbmQgPSBXZWV4LnV0aWxzLmV4dGVuZDtcblxuICBmdW5jdGlvbiBBbWFwQ2lyY2xlKGRhdGEpIHtcbiAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfVxuICBBbWFwQ2lyY2xlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChBbWFwQ2lyY2xlLnByb3RvdHlwZSwgcHJvdG8pO1xuICBleHRlbmQoQW1hcENpcmNsZS5wcm90b3R5cGUsIHsgYXR0ciB9KTtcbiAgZXh0ZW5kKEFtYXBDaXJjbGUucHJvdG90eXBlLCB7IGV2ZW50IH0pO1xuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWFtYXAtY2lyY2xlJywgQW1hcENpcmNsZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC1jaXJjbGUuanMiLCJpbXBvcnQgY29tcG9uZW50cyBmcm9tICcuLi9zZXJ2aWNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHZlbmRvciBmcm9tICcuLi9zZXJ2aWNlL3ZlbmRvcic7XG5cbmNvbnN0IGNvbXBvbmVudE5hbWUgPSAncG9seWdvbic7XG4vLyBwcm90b3R5cGUgbWV0aG9kcy5cbmNvbnN0IHByb3RvID0ge1xuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEuYXR0cjtcbiAgICBjb25zdCBjb21JZCA9IHRoaXMuZGF0YS5yZWYgfHwgdmVuZG9yLmdlbmdlcmF0ZVJhbmRvbUlkKGNvbXBvbmVudE5hbWUpO1xuICAgIGlmIChkYXRhLnBhdGggJiYgQXJyYXkuaXNBcnJheShkYXRhLnBhdGgpKSB7XG4gICAgICBjb21wb25lbnRzLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsIHtcbiAgICAgICAgcGF0aDogZGF0YS5wYXRoLFxuICAgICAgICBmaWxsQ29sb3I6IGRhdGEuZmlsbENvbG9yLFxuICAgICAgICBmaWxPcGFjaXR5OiBkYXRhLmZpbGxPcGFjaXR5LFxuICAgICAgICBzdHJva2VXZWlnaHQ6IGRhdGEuc3Ryb2tlV2lkdGgsXG4gICAgICAgIHN0cm9rZU9wYWNpdHk6IGRhdGEuc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgc3Ryb2tlQ29sb3I6IGRhdGEuc3Ryb2tlQ29sb3IsXG4gICAgICAgIHN0cm9rZVN0eWxlOiBkYXRhLnN0cm9rZVN0eWxlLFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjbGljaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sIGNvbUlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdhdHRyaWJ1dGUgcGF0aCBtdXN0IGJlIGFuIGFycmF5LicpO1xuICAgIH1cbiAgICB0aGlzLl9jb21JZCA9IGNvbUlkO1xuICAgIHJldHVybiBub2RlO1xuICB9XG59O1xuXG5jb25zdCBhdHRyID0ge1xuXG59O1xuXG5jb25zdCBldmVudCA9IHtcbiAgY2xpY2s6IHtcbiAgICBleHRyYSgpIHtcbiAgICAgIHJldHVybiB7IGlzU3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gaW5pdChXZWV4KSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IFdlZXguQ29tcG9uZW50O1xuICBjb25zdCBleHRlbmQgPSBXZWV4LnV0aWxzLmV4dGVuZDtcblxuICBmdW5jdGlvbiBBbWFwUG9seWdvbihkYXRhKSB7XG4gICAgQ29tcG9uZW50LmNhbGwodGhpcywgZGF0YSk7XG4gIH1cbiAgQW1hcFBvbHlnb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlKTtcbiAgZXh0ZW5kKEFtYXBQb2x5Z29uLnByb3RvdHlwZSwgcHJvdG8pO1xuICBleHRlbmQoQW1hcFBvbHlnb24ucHJvdG90eXBlLCB7IGF0dHIgfSk7XG4gIGV4dGVuZChBbWFwUG9seWdvbi5wcm90b3R5cGUsIHsgZXZlbnQgfSk7XG4gIFdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ3dlZXgtYW1hcC1wb2x5Z29uJywgQW1hcFBvbHlnb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9jb21wb25lbnRzL2FtYXAtcG9seWdvbi5qcyIsImltcG9ydCBjb21wb25lbnRzIGZyb20gJy4uL3NlcnZpY2UvY29tcG9uZW50cyc7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4uL3NlcnZpY2UvdmVuZG9yJztcblxuY29uc3QgY29tcG9uZW50TmFtZSA9ICdwb2x5bGluZSc7XG4vLyBwcm90b3R5cGUgbWV0aG9kcy5cbmNvbnN0IHByb3RvID0ge1xuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEuYXR0cjtcbiAgICBjb25zdCBjb21JZCA9IGRhdGEucmVmIHx8IHZlbmRvci5nZW5nZXJhdGVSYW5kb21JZChjb21wb25lbnROYW1lKTtcbiAgICBpZiAoZGF0YS5wYXRoICYmIEFycmF5LmlzQXJyYXkoZGF0YS5wYXRoKSkge1xuICAgICAgY29tcG9uZW50cy5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnROYW1lLCB7XG4gICAgICAgIHBhdGg6IGRhdGEucGF0aCxcbiAgICAgICAgc3Ryb2tlV2VpZ2h0OiBkYXRhLnN0cm9rZVdpZHRoLFxuICAgICAgICBzdHJva2VPcGFjaXR5OiBkYXRhLnN0cm9rZU9wYWNpdHksXG4gICAgICAgIHN0cm9rZUNvbG9yOiBkYXRhLnN0cm9rZUNvbG9yLFxuICAgICAgICBzdHJva2VTdHlsZTogZGF0YS5zdHJva2VTdHlsZSxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY2xpY2snKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LCBjb21JZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignYXR0cmlidXRlIHBhdGggbXVzdCBiZSBhbiBhcnJheS4nKTtcbiAgICB9XG4gICAgdGhpcy5fY29tSWQgPSBjb21JZDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufTtcblxuY29uc3QgYXR0ciA9IHtcblxufTtcblxuY29uc3QgZXZlbnQgPSB7XG4gIGNsaWNrOiB7XG4gICAgZXh0cmEoKSB7XG4gICAgICByZXR1cm4geyBpc1N1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcFBvbHlnb24oZGF0YSkge1xuICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9XG4gIEFtYXBQb2x5Z29uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChBbWFwUG9seWdvbi5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXBQb2x5Z29uLnByb3RvdHlwZSwgeyBhdHRyIH0pO1xuICBleHRlbmQoQW1hcFBvbHlnb24ucHJvdG90eXBlLCB7IGV2ZW50IH0pO1xuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWFtYXAtcG9seWxpbmUnLCBBbWFwUG9seWdvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC1wb2x5bGluZS5qcyIsImltcG9ydCBjb21wb25lbnRzIGZyb20gJy4uL3NlcnZpY2UvY29tcG9uZW50cyc7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4uL3NlcnZpY2UvdmVuZG9yJztcblxuY29uc3QgY29tcG9uZW50TmFtZSA9ICdJbmZvV2luZG93Jztcbi8vIHByb3RvdHlwZSBtZXRob2RzLlxuY29uc3QgcHJvdG8gPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm9kZS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLmF0dHI7XG4gICAgY29uc3QgY29tSWQgPSB0aGlzLmRhdGEucmVmIHx8IHZlbmRvci5nZW5nZXJhdGVSYW5kb21JZChjb21wb25lbnROYW1lKTtcbiAgICB0aGlzLmFkZEFwcGVuZEhhbmRsZXIoKCkgPT4ge1xuICAgICAgaWYgKGRhdGEucG9zaXRpb24gJiYgQXJyYXkuaXNBcnJheShkYXRhLnBvc2l0aW9uKSkge1xuICAgICAgICBjb21wb25lbnRzLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsIHtcbiAgICAgICAgICBwb3NpdGlvbjogZGF0YS5wb3NpdGlvbixcbiAgICAgICAgICBvZmZzZXQ6IGRhdGEub2Zmc2V0LFxuICAgICAgICAgIGlzQ3VzdG9tOiB0cnVlLFxuICAgICAgICB9LCBjb21JZCwgKGNvbSwgbWFwKSA9PiB7XG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZS5pbm5lckhUTUwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29udGVudCA9IHRoaXMubm9kZS5pbm5lckhUTUw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBjb20uc2V0Q29udGVudChjb250ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGRhdGEub3BlbiAmJiBjb250ZW50KSB7XG4gICAgICAgICAgICBjb20ub3BlbihtYXAsIHRoaXMuZGF0YS5hdHRyLnBvc2l0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tLmNsb3NlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignYXR0cmlidXRlIGNlbnRlciBtdXN0IGJlIGFuIGFycmF5LicpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX2NvbUlkID0gY29tSWQ7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn07XG5cbmNvbnN0IGF0dHIgPSB7XG4gIG9wZW4odmFsKSB7XG4gICAgY29uc3QgY29tID0gY29tcG9uZW50cy5nZXRDb21wb25lbnQodGhpcy5kYXRhLnJlZik7XG4gICAgY29uc3QgbWFwID0gY29tcG9uZW50cy5nZXRDb21wb25lbnRNYXAoKTtcbiAgICBpZiAoY29tKSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGNvbS5vcGVuKG1hcCwgdGhpcy5kYXRhLmF0dHIucG9zaXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBldmVudCA9IHtcbn07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcEluZm9XaW5kb3coZGF0YSkge1xuICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9XG4gIEFtYXBJbmZvV2luZG93LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChBbWFwSW5mb1dpbmRvdy5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXBJbmZvV2luZG93LnByb3RvdHlwZSwgeyBhdHRyIH0pO1xuICBleHRlbmQoQW1hcEluZm9XaW5kb3cucHJvdG90eXBlLCB7IGV2ZW50IH0pO1xuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWFtYXAtaW5mby13aW5kb3cnLCBBbWFwSW5mb1dpbmRvdyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC1pbmZvLXdpbmRvdy5qcyIsIiAvKipcbiAgKiBJbml0IHdlZXggaW5zdGFuY2UgZGVwZW5kaW5nIG9uIHRoZSB1cmwgcGFyYW1zLlxuICAqIFRoZXJlIGFyZSB0aHJlZSB3YXlzIHRvIGxvYWQgd2VleCBidW5kbGVzLCBkZXBlbmRzIG9uIHRoZVxuICAqIHBhcmFtZXRlciAnbG9hZGVyJyBpbiB0aGUgdXJsOlxuICAqXG4gICogICArIHhocjogdXNlIFhNTEh0dHBSZXF1ZXN0LiBQYXJhbWV0ZXIgJ3BhZ2UnIHNob3VsZCBiZVxuICAqICAgdGhlIGJ1bmRsZSdzIHVybC5cbiAgKiAgICsgc291cmNlOiB1c2UgdGhlIHRyYW5zZm9ybWVkIGNvZGUgaXRzZWxmLiAncGFnZScgc2hvdWxkXG4gICogICBiZSB0aGUgdHJhbnNmb3JtZWQgd2VleCBidW5kbGUuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gYnVuZGxlIC0gSXQgaGFzIGRpZmZlcmVudCBtZWFuaW5nIGRlcGVuZHMgb25cbiAgKiAgIHRoZSB0eXBlIG9mIGxvYWRlci5cbiAgKi9cbiAgXG5cbiAgXG4gKGZ1bmN0aW9uICgpIHtcbiAgIGZ1bmN0aW9uIGdldFVybFBhcmFtKGtleSkge1xuICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cCgnWz98Jl0nICsga2V5ICsgJz0oW14mXSspJylcbiAgICAgdmFyIG1hdGNoID0gbG9jYXRpb24uc2VhcmNoLm1hdGNoKHJlZylcbiAgICAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdXG4gICB9XG4gICB2YXIgbG9hZGVyID0gZ2V0VXJsUGFyYW0oJ2xvYWRlcicpIHx8ICd4aHInO1xuICAgdmFyIHBhZ2UgPSBnZXRVcmxQYXJhbSgncGFnZScpIHx8ICcuLi9kaXN0L2luZGV4LmpzJztcbiAgIHdpbmRvdy53ZWV4LmluaXQoe1xuICAgICBhcHBJZDogbG9jYXRpb24uaHJlZlxuICAgICAsIGxvYWRlcjogbG9hZGVyXG4gICAgICwgc291cmNlOiBwYWdlXG4gICAgICwgcm9vdElkOiAnd2VleCdcbiAgIH0pXG4gfSkoKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2ViL2pzL2luaXQuanMiXSwic291cmNlUm9vdCI6IiJ9