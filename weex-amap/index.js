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
	module.exports = __webpack_require__(16);


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
	
	var _amap3 = __webpack_require__(8);
	
	var _amap4 = _interopRequireDefault(_amap3);
	
	var _amapMarker = __webpack_require__(11);
	
	var _amapMarker2 = _interopRequireDefault(_amapMarker);
	
	var _amapCircle = __webpack_require__(12);
	
	var _amapCircle2 = _interopRequireDefault(_amapCircle);
	
	var _amapPolygon = __webpack_require__(13);
	
	var _amapPolygon2 = _interopRequireDefault(_amapPolygon);
	
	var _amapPolyline = __webpack_require__(14);
	
	var _amapPolyline2 = _interopRequireDefault(_amapPolyline);
	
	var _amapInfoWindow = __webpack_require__(15);
	
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _components = __webpack_require__(5);
	
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mapManager = __webpack_require__(6);
	
	var _mapManager2 = _interopRequireDefault(_mapManager);
	
	var _vendor = __webpack_require__(7);
	
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
	      console.log(opts.offset);
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
/* 6 */
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
/* 7 */
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
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _marker = __webpack_require__(9);
	
	var _marker2 = _interopRequireDefault(_marker);
	
	var _mapLoader = __webpack_require__(10);
	
	var _mapLoader2 = _interopRequireDefault(_mapLoader);
	
	var _mapManager = __webpack_require__(6);
	
	var _mapManager2 = _interopRequireDefault(_mapManager);
	
	var _vendor = __webpack_require__(7);
	
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // a lib to manage all marker
	
	
	var _mapManager = __webpack_require__(6);
	
	var _mapManager2 = _interopRequireDefault(_mapManager);
	
	var _vendor = __webpack_require__(7);
	
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _marker = __webpack_require__(9);
	
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _components = __webpack_require__(5);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _vendor = __webpack_require__(7);
	
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _components = __webpack_require__(5);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _vendor = __webpack_require__(7);
	
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _components = __webpack_require__(5);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _vendor = __webpack_require__(7);
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _components = __webpack_require__(5);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _vendor = __webpack_require__(7);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var componentName = 'infoWindow';
	// prototype methods.
	var proto = {
	  create: function create() {
	    var _this = this;
	
	    var node = document.createElement('div');
	    node.style.opacity = 0;
	    var data = this.data.attr;
	    var comId = data.ref || _vendor2.default.gengerateRandomId(componentName);
	    this.addAppendHandler(function () {
	      if (data.position && Array.isArray(data.position)) {
	        _components2.default.registerComponent(componentName, {
	          position: data.position,
	          offset: data.offset,
	          open: data.open,
	          isCustom: true
	        }, comId, function (com, map) {
	          var content = data.content;
	          if (_this.node.innerHTML.length > 0) {
	            content = _this.node.innerHTML;
	          }
	          if (content) {
	            com.setContent(content);
	          }
	          if (data.open) {
	            com.open(map, data.position);
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
	    var com = _components2.default.getComponent(this._comId);
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
/* 16 */
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
	  var page = getUrlParam('page') || '../dist/index.js';
	  window.weex.init({
	    appId: location.href,
	    loader: loader,
	    source: page,
	    rootId: 'weex'
	  });
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWY1YmM4YjJiMDdmYmJkMDMxMDkiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9wbHVnaW5fYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1jaGFydC93ZWIvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvbW9kdWxlL2FtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9tYXAtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS92ZW5kb3IuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvbWFwLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLW1hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLWNpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLXBvbHlnb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC1wb2x5bGluZS5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLWluZm8td2luZG93LmpzIiwid2VicGFjazovLy8uL3dlYi9qcy9pbml0LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIndlZXgiLCJpbnN0YWxsIiwicHJvdG8iLCJjcmVhdGUiLCJub2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXIiLCJJbWFnZSIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwicGFkZGluZyIsInRleHRBbGlnbiIsImJvcmRlciIsImFwcGVuZENoaWxkIiwiYXR0ciIsInRleHQiLCJ2YWwiLCJjcmVhdGVUZXh0Tm9kZSIsImltZ3NyYyIsInNyYyIsInR4dENvbG9yIiwiY29sb3IiLCJldmVudCIsImNsaWNrIiwiZXh0cmEiLCJ2YWx1ZSIsInRleHRDb250ZW50IiwiaW5pdCIsIldlZXgiLCJDb21wb25lbnQiLCJleHRlbmQiLCJ1dGlscyIsIlBvbGFyb2lkUGhvdG8iLCJkYXRhIiwiY2FsbCIsInByb3RvdHlwZSIsIk9iamVjdCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiY29tcG9uZW50cyIsImZvckVhY2giLCJjb21wIiwibW9kdWxlIiwiZXhwb3J0cyIsImFtYXAiLCJnZXRVc2VyTG9jYXRpb24iLCJtYXBSZWYiLCJjYWxsYmFjayIsInNlbGYiLCJnZW8iLCJBTWFwIiwiR2VvbG9jYXRpb24iLCJlbmFibGVIaWdoQWNjdXJhY3kiLCJ0aW1lb3V0IiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic3RhdHVzIiwicmVzIiwic2VuZGVyIiwicGVyZm9ybUNhbGxiYWNrIiwicG9zaXRpb24iLCJnZXRMbmciLCJnZXRMYXQiLCJyZXN1bHQiLCJjb25zb2xlIiwid2FybiIsIm1lc3NhZ2UiLCJnZXRMaW5lRGlzdGFuY2UiLCJjb29yMSIsImNvb3IyIiwibG5nbGF0IiwiTG5nTGF0IiwiZGlzdGFuY2UiLCJwb2x5Z29uQ29udGFpbnNNYXJrZXIiLCJjb29yIiwicG9seWdvblJlZiIsInBvbHlnb25Db20iLCJnZXRDb21wb25lbnQiLCJjb250YWlucyIsIm1ldGEiLCJuYW1lIiwiYXJncyIsInJlZ2lzdGVyQXBpTW9kdWxlIiwiY29tcG9uZW50TmFtZSIsIm9wdGlvbnMiLCJpZCIsIm9wdHMiLCJfY29tcG9uZW50cyIsImFkZFJlYWR5Q2FsbGJhY2siLCJtYXBJbnMiLCJtYXAiLCJjbGFzc05hbWUiLCJzZXRGaXJzdExldHRlclRvVXBwZXJjYXNlIiwibG9nIiwib2Zmc2V0IiwiUGl4ZWwiLCJnZXRPYmplY3RGaXJzdFZhbCIsImdldENvbXBvbmVudE1hcCIsImdldE1hcCIsImNhbGxiYWNrU3RhY2siLCJpbml0TWFwIiwiX19tYXBzIiwiY2IiLCJrZXlzIiwicHVzaCIsImdlbmdlcmF0ZVJhbmRvbUlkIiwicHJlZml4IiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsInN0ciIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwib2JqIiwibG9hZGluZ0dpZiIsInBhcmFtcyIsImNlbnRlciIsInVuZGVmaW5lZCIsInpvb20iLCJ0b29sYmFyIiwic2NhbGUiLCJnZW9sb2NhdGlvbiIsInJlc2l6ZUVuYWJsZSIsInNlYXJjaCIsImV2ZW50cyIsIm1hcHdyYXAiLCJhcHBlbmQiLCJyZW5kZXJMb2FkaW5nU3Bpbm5lciIsImVsIiwiaGVpZ2h0IiwibWFyZ2luIiwiaW1hZ2UiLCJyZWFkeSIsIk1hcCIsInBsdWdpbiIsImFkZENvbnRyb2wiLCJUb29sQmFyIiwic2VydmljZSIsInBsYWNlU2VhcmNoIiwiUGxhY2VTZWFyY2giLCJpbml0RXZlbnRzIiwicmVtb3ZlQ2hpbGQiLCJjaGlsZCIsInJlbW92ZU1ha2VyIiwiZXZlbnROYW1lIiwiYWRkTGlzdGVuZXIiLCJkaXNwYXRjaEV2ZW50IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwic2V0Q2VudGVyIiwidGVzdCIsInNldFpvb20iLCJzZGtLZXkiLCJrZXkiLCJoNSIsImxvYWQiLCJ6b29tY2hhbmdlIiwiaXNTdWNjZXNzIiwiZHJhZ2VuZCIsIkFtYXAiLCJtYXJrZXJzIiwiY2hhbmdlTWFya2VyIiwiYXJyIiwiaSIsIm1hcmtlciIsImZpbmRNYXJrZXIiLCJhZGRNYXJrZXIiLCJyZW1vdmVNYXJrZXIiLCJzZXRNYXJrZXIiLCJpY29uIiwiSWNvbiIsInNpemUiLCJTaXplIiwiTWFya2VyIiwidGl0bGUiLCJfX2dldE1pZCIsInJlZ2lzdGVyRXZlbnRzIiwic2V0TWFwIiwidXBkYXRlTWFya2VyIiwibWV0aG9kIiwidmlzaWJsZSIsIm1pZCIsInJlZiIsImpvaW4iLCJfX2lzTWFrZXIiLCJDTEFTU19OQU1FIiwiREVGQVVMVF9DT05GSUciLCJ2IiwidXJsIiwiZ2VuZ2VyYXRlU2NyaXB0VXJsIiwicGFyYW1BcnIiLCJlbmNvZGVVUkkiLCJjb25maWciLCJjb250YWluZXIiLCJuZXdDb25maWciLCJhc3NpZ24iLCJsaWIiLCJhc3luYyIsImRlZmVyIiwiYW1hcEluaXRDb21wb25lbnQiLCJtYXBsb2FkZWQiLCJoZWFkIiwibG9hZFRpbWVvdXQiLCJ3cmFwIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNoaWxkTm9kZXMiLCJyZW1vdmUiLCJwb2lzdGlvbiIsInVwZGF0ZUF0dHJzIiwiYXR0cnMiLCJrIiwiQW1hcE1ha2VyIiwiY29tSWQiLCJyYWRpdXMiLCJmaWxsQ29sb3IiLCJmaWxPcGFjaXR5IiwiZmlsbE9wYWNpdHkiLCJzdHJva2VXZWlnaHQiLCJzdHJva2VXaWR0aCIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VDb2xvciIsInN0cm9rZVN0eWxlIiwiX2NvbUlkIiwiY29tIiwiQW1hcENpcmNsZSIsInBhdGgiLCJBbWFwUG9seWdvbiIsIm9wYWNpdHkiLCJhZGRBcHBlbmRIYW5kbGVyIiwib3BlbiIsImlzQ3VzdG9tIiwiY29udGVudCIsImlubmVySFRNTCIsInNldENvbnRlbnQiLCJjbG9zZSIsIkFtYXBJbmZvV2luZG93IiwiZ2V0VXJsUGFyYW0iLCJyZWciLCJSZWdFeHAiLCJtYXRj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LEdBQVYsR0FBZ0IsVUFBM0IsQ0FBVjtBQUNBLFNBQUl5RixRQUFRcEMsU0FBU3BGLE1BQVQsQ0FBZ0J3SCxLQUFoQixDQUFzQkYsR0FBdEIsQ0FBWjtBQUNBLFlBQU9FLFNBQVNBLE1BQU0sQ0FBTixDQUFoQjtBQUNEO0FBQ0QsT0FBSUMsU0FBU0osWUFBWSxRQUFaLEtBQXlCLEtBQXRDO0FBQ0EsT0FBSUssT0FBT0wsWUFBWSxNQUFaLEtBQXVCLGtCQUFsQztBQUNBcFAsVUFBT0MsSUFBUCxDQUFZNEIsSUFBWixDQUFpQjtBQUNmNk4sWUFBT3ZDLFNBQVN3QyxJQUREO0FBRWJILGFBQVFBLE1BRks7QUFHYkksYUFBUUgsSUFISztBQUliSSxhQUFRO0FBSkssSUFBakI7QUFNRCxFQWRELEkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5ZjViYzhiMmIwN2ZiYmQwMzEwOSIsImltcG9ydCBjaGFydCBmcm9tIFwiL1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hcHAvcGx1Z2lucy93ZWV4LWNoYXJ0L3dlYlwiO1xyXG53aW5kb3cud2VleCAmJiB3aW5kb3cud2VleC5pbnN0YWxsKGNoYXJ0KTtcclxuaW1wb3J0IGFtYXAgZnJvbSBcIi9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL3BsdWdpbnMvd2VleC1hbWFwL3dlYlwiO1xyXG53aW5kb3cud2VleCAmJiB3aW5kb3cud2VleC5pbnN0YWxsKGFtYXApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvcGx1Z2luX2J1bmRsZS5qcyIsIid1c2Ugc3RyaWN0J1xuXG5cbmNvbnN0IHByb3RvID0ge1xuICBjcmVhdGUgKCkge1xuICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuaW5uZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmlubmVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxMHB4JztcbiAgICB0aGlzLm5vZGUuc3R5bGUucGFkZGluZyA9IFwiNXB4IDVweCAxMHB4IDVweFwiOyBcbiAgICB0aGlzLm5vZGUuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG4gICAgdGhpcy5ub2RlLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgI2NjYyc7XG4gICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuaW5uZXIpO1xuICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gIFxuICAgIHJldHVybiB0aGlzLm5vZGUgXG4gIH1cbn1cblxuLy8gYXR0cmlidXRlIHNldHRlcnMuXG5jb25zdCBhdHRyID0ge1xuICB0ZXh0ICh2YWwpIHtcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbCk7XG4gICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRleHQpO1xuICB9LFxuICBcbiAgaW1nc3JjKHZhbCkge1xuICAgIHRoaXMuaW5uZXIuc3JjID0gdmFsO1xuICB9XG59XG5cbi8vIHN0eWxlIHNldHRlcnMuXG5jb25zdCBzdHlsZSA9IHtcbiAgdHh0Q29sb3IgKHZhbCkge1xuICAgIHRoaXMuaW5uZXIuc3R5bGUuY29sb3IgPSB2YWxcbiAgfVxufVxuXG4vLyBldmVudCBjb25maWcuXG5jb25zdCBldmVudCA9IHtcbiAgY2xpY2s6IHtcbiAgICBleHRyYSAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdGhpcy5pbm5lci50ZXh0Q29udGVudFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0IChXZWV4KSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IFdlZXguQ29tcG9uZW50O1xuICBjb25zdCBleHRlbmQgPSBXZWV4LnV0aWxzLmV4dGVuZDtcblxuICBmdW5jdGlvbiBQb2xhcm9pZFBob3RvIChkYXRhKSB7XG4gICAgQ29tcG9uZW50LmNhbGwodGhpcywgZGF0YSk7XG4gIH1cblxuICBQb2xhcm9pZFBob3RvLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChQb2xhcm9pZFBob3RvLnByb3RvdHlwZSwgcHJvdG8pO1xuICBleHRlbmQoUG9sYXJvaWRQaG90by5wcm90b3R5cGUsIHsgYXR0ciB9KTtcbiAgZXh0ZW5kKFBvbGFyb2lkUGhvdG8ucHJvdG90eXBlLCB7XG4gICAgc3R5bGU6IGV4dGVuZChPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUuc3R5bGUpLCBzdHlsZSlcbiAgfSk7XG4gIGV4dGVuZChQb2xhcm9pZFBob3RvLnByb3RvdHlwZSwgeyBldmVudCB9KTtcblxuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWNoYXJ0JywgUG9sYXJvaWRQaG90byk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWNoYXJ0L3dlYi9zcmMvaW5kZXguanMiLCJpbXBvcnQgYW1hcE1vZHVsZVJlZyBmcm9tICcuL21vZHVsZS9hbWFwJztcbmltcG9ydCBBbWFwIGZyb20gJy4vY29tcG9uZW50cy9hbWFwJztcbmltcG9ydCBBbWFwTWFya2VyIGZyb20gJy4vY29tcG9uZW50cy9hbWFwLW1hcmtlcic7XG5pbXBvcnQgQW1hcENpcmNsZSBmcm9tICcuL2NvbXBvbmVudHMvYW1hcC1jaXJjbGUnO1xuaW1wb3J0IEFtYXBQb2x5Z29uIGZyb20gJy4vY29tcG9uZW50cy9hbWFwLXBvbHlnb24nO1xuaW1wb3J0IEFtYXBQb2x5bGluZSBmcm9tICcuL2NvbXBvbmVudHMvYW1hcC1wb2x5bGluZSc7XG5pbXBvcnQgQW1hcEluZm9XaW5kb3cgZnJvbSAnLi9jb21wb25lbnRzL2FtYXAtaW5mby13aW5kb3cnO1xuLy8gaW1wb3J0IFZ1ZUFtYXAgZnJvbSAnLi92dWUtYW1hcC9pbmRleCc7XG5jb25zdCBjb21wb25lbnRzID0gW1xuICBBbWFwLFxuICBBbWFwTWFya2VyLFxuICBBbWFwQ2lyY2xlLFxuICBBbWFwUG9seWdvbixcbiAgQW1hcFBvbHlsaW5lLFxuICBBbWFwSW5mb1dpbmRvd1xuXTtcblxuZnVuY3Rpb24gaW5pdChXZWV4KSB7XG4gIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcCkgPT4ge1xuICAgIGNvbXAuaW5pdChXZWV4KTtcbiAgfSk7XG4gIGFtYXBNb2R1bGVSZWcoV2VleCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdFxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2luZGV4LmpzIiwiaW1wb3J0IGNvbXBvbmVudHMgZnJvbSAnLi4vc2VydmljZS9jb21wb25lbnRzJztcbi8vIEFNYXAgbW9kdWxlXG5jb25zdCBhbWFwID0ge1xuICAvKiogZ2V0IHVzZXIgbG9hY3Rpb24gYnkgYnJvd3NlciBhbmQgSVBcbiAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAqIEBwYXJhbSB7ZnVuY3Rpb259IGVycm9yQ2FsbGJhY2tcbiAgKiovXG4gIGdldFVzZXJMb2NhdGlvbihtYXBSZWYsIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgZ2VvID0gbmV3IEFNYXAuR2VvbG9jYXRpb24oe1xuICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlLFxuICAgICAgdGltZW91dDogMTAwMDBcbiAgICB9KTtcbiAgICBnZW8uZ2V0Q3VycmVudFBvc2l0aW9uKChzdGF0dXMsIHJlcykgPT4ge1xuICAgICAgaWYgKHN0YXR1cyAhPT0gJ2Vycm9yJykge1xuICAgICAgICBzZWxmLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2ssIHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogW3Jlcy5wb3NpdGlvbi5nZXRMbmcoKSwgcmVzLnBvc2l0aW9uLmdldExhdCgpXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzdWx0OiAnc3VjY2VzcydcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4ocmVzLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICAvKiogZ2V0IGRpc3RhbmNlIGJldHdlZW4gdHdvIHBvc2l0aW9uXG4gICogQHBhcmFtIGNvb3IxXG4gICogQHBhcmFtIGNvcnIyXG4gICogQHBhcmFtIGNhbGxiYWNrXG4gICoqL1xuICBnZXRMaW5lRGlzdGFuY2UoY29vcjEsIGNvb3IyLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGxuZ2xhdCA9IG5ldyBBTWFwLkxuZ0xhdChjb29yMVswXSwgY29vcjFbMV0pO1xuICAgIGNvbnN0IHJlc3VsdCA9IGxuZ2xhdC5kaXN0YW5jZShjb29yMik7XG4gICAgdGhpcy5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrLCB7XG4gICAgICByZXN1bHQ6ICFyZXN1bHQgPyAnZmFpbCcgOiAnc3VjY2VzcycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRpc3RhbmNlOiByZXN1bHRcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgLyoqIHRlbGwgaWYgdGhlIG1hcmtlciBpbiBhIHBvbHlnb25cbiAgKiBAcGFyYW0gY29vciB0aGUgbWFya2VyIHBvc2l0aW9uXG4gICogQHBhcmFtIHBvbHlnb25SZWZcbiAgKiovXG4gIHBvbHlnb25Db250YWluc01hcmtlcihjb29yLCBwb2x5Z29uUmVmLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHBvbHlnb25Db20gPSBjb21wb25lbnRzLmdldENvbXBvbmVudChwb2x5Z29uUmVmKTtcbiAgICBjb25zdCByZXN1bHQgPSBwb2x5Z29uQ29tLmNvbnRhaW5zKGNvb3IpO1xuICAgIHRoaXMuc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFjaywge1xuICAgICAgcmVzdWx0OiAhcmVzdWx0ID8gJ2ZhaWwnIDogJ3N1Y2Nlc3MnLFxuICAgICAgZGF0YTogcmVzdWx0XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IG1ldGEgPSB7XG4gIGFtYXA6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnZ2V0VXNlckxvY2F0aW9uJyxcbiAgICAgIGFyZ3M6IFsnc3RyaW5nJywgJ2Z1bmN0aW9uJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZ2V0TGluZURpc3RhbmNlJyxcbiAgICAgIGFyZ3M6IFsnYXJyYXknLCAnYXJyYXknLCAnZnVuY3Rpb24nXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3BvbHlnb25Db250YWluc01hcmtlcicsXG4gICAgICBhcmdzOiBbJ2FycmF5JywgJ3N0cmluZyddXG4gICAgfVxuICBdXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChXZWV4KSB7XG4gIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ2FtYXAnLCBhbWFwLCBtZXRhKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvbW9kdWxlL2FtYXAuanMiLCIvLyBtYW5hZ2UgY29tcG9uZW50c1xuXG5pbXBvcnQgYW1hcE1hbmFnZXIgZnJvbSAnLi9tYXAtbWFuYWdlcic7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4vdmVuZG9yJztcblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgcmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50TmFtZSwgb3B0aW9ucywgaWQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgb3B0cyA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKCF0aGlzLl9jb21wb25lbnRzKSB7XG4gICAgICB0aGlzLl9jb21wb25lbnRzID0ge307XG4gICAgfVxuICAgIGFtYXBNYW5hZ2VyLmFkZFJlYWR5Q2FsbGJhY2soKG1hcElucykgPT4ge1xuICAgICAgb3B0cy5tYXAgPSBtYXBJbnM7XG4gICAgICAvLyBvcHRpb25zLmNlbnRlciA9IG5ldyBBTWFwLkxuZ0xhdChvcHRpb25zLmNlbnRlclswXSxvcHRpb25zLmNlbnRlclsxXSk7XG4gICAgICBjb25zdCBjbGFzc05hbWUgPSB2ZW5kb3Iuc2V0Rmlyc3RMZXR0ZXJUb1VwcGVyY2FzZShjb21wb25lbnROYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKG9wdHMub2Zmc2V0KTtcbiAgICAgIGlmIChvcHRzLm9mZnNldCkge1xuICAgICAgICBvcHRzLm9mZnNldCA9IG5ldyBBTWFwLlBpeGVsKG9wdHMub2Zmc2V0WzBdLCBvcHRzLm9mZnNldFsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzIGlzIGEgc2RrIGJ1ZyBwb2x5ZmlsbFxuICAgICAgICBvcHRzLm9mZnNldCA9IG5ldyBBTWFwLlBpeGVsKDAsIDApO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29tcG9uZW50c1tpZF0gPSBuZXcgQU1hcFtjbGFzc05hbWVdKG9wdHMpO1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayh0aGlzLl9jb21wb25lbnRzW2lkXSwgbWFwSW5zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZ2V0Q29tcG9uZW50KGlkKSB7XG4gICAgaWYgKCF0aGlzLl9jb21wb25lbnRzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuIHZlbmRvci5nZXRPYmplY3RGaXJzdFZhbCh0aGlzLl9jb21wb25lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudHNbaWRdO1xuICB9LFxuICBnZXRDb21wb25lbnRNYXAoKSB7XG4gICAgcmV0dXJuIGFtYXBNYW5hZ2VyLmdldE1hcCgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBvbmVudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9jb21wb25lbnRzLmpzIiwiLyoqIG1hcCBpbnN0YW5jZSBtYW5hZ2VyXG4qIDIwMTcwMjA0XG4qKi9cbmxldCBjYWxsYmFja1N0YWNrID0gW107XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdE1hcChpZCwgbWFwKSB7XG4gICAgaWYgKCF0aGlzLl9fbWFwcykge1xuICAgICAgdGhpcy5fX21hcHMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5fX21hcHNbaWRdID0gbWFwO1xuICAgIGNhbGxiYWNrU3RhY2suZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgIGNiKG1hcCk7XG4gICAgfSk7XG4gICAgY2FsbGJhY2tTdGFjayA9IFtdO1xuICB9LFxuICBnZXRNYXAoaWQpIHtcbiAgICBpZiAoIXRoaXMuX19tYXBzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFpZCkge1xuICAgICAgaWQgPSBPYmplY3Qua2V5cyh0aGlzLl9fbWFwcylbMF07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9fbWFwc1tpZF07XG4gIH0sXG4gIGFkZFJlYWR5Q2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICBjYWxsYmFja1N0YWNrLnB1c2goY2FsbGJhY2spO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvbWFwLW1hbmFnZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2VuZ2VyYXRlUmFuZG9tSWQocHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCArICgobmV3IERhdGUoKSkuZ2V0VGltZSgpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDksIDMpKSArIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMDAwMCwgMTApO1xuICB9LFxuICBzZXRGaXJzdExldHRlclRvVXBwZXJjYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyaW5nKDEpO1xuICB9LFxuICBnZXRPYmplY3RGaXJzdFZhbChvYmopIHtcbiAgICBpZih0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG9ialtPYmplY3Qua2V5cyhvYmopWzBdXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9zZXJ2aWNlL3ZlbmRvci5qcyIsImltcG9ydCBtYXJrZXJNYW5hZ2UgZnJvbSAnLi4vc2VydmljZS9tYXJrZXInO1xuaW1wb3J0IG1hcExvYWRlciBmcm9tICcuLi9zZXJ2aWNlL21hcC1sb2FkZXInO1xuaW1wb3J0IGFtYXBNYW5hZ2VyIGZyb20gJy4uL3NlcnZpY2UvbWFwLW1hbmFnZXInO1xuaW1wb3J0IHZlbmRvciBmcm9tICcuLi9zZXJ2aWNlL3ZlbmRvcic7XG5cblxuY29uc3QgbG9hZGluZ0dpZiA9ICdodHRwOi8vaW1nMS52dWVkLnZhbnRoaW5rLmNuL3Z1ZWQyMTEzZWFhMDYyYWJiYWVlMDQ0MWQxNmE3ODQ4ZDIzZS5naWYnO1xuY29uc3QgcGFyYW1zID0ge1xuICBjZW50ZXI6IHVuZGVmaW5lZCxcbiAgem9vbTogMTEsXG4gIHRvb2xiYXI6IHRydWUsXG4gIHNjYWxlOiBmYWxzZSxcbiAgZ2VvbG9jYXRpb246IGZhbHNlLFxuICByZXNpemVFbmFibGU6IHRydWUsXG4gIHNlYXJjaDogZmFsc2Vcbn07XG5jb25zdCBldmVudHMgPSBbXG4gICd6b29tY2hhbmdlJyxcbiAgJ2RyYWdlbmQnXG5dO1xuLy8gcHJvdG90eXBlIG1ldGhvZHMuXG5jb25zdCBwcm90byA9IHtcbiAgY3JlYXRlKCkge1xuICAgIHRoaXMubWFwd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMubWFwd3JhcC5pZCA9IHZlbmRvci5nZW5nZXJhdGVSYW5kb21JZCgnbWFwJyk7XG4gICAgdGhpcy5tYXB3cmFwLmFwcGVuZCh0aGlzLnJlbmRlckxvYWRpbmdTcGlubmVyKCkpO1xuICAgIHJldHVybiB0aGlzLm1hcHdyYXA7XG4gIH0sXG4gIHJlbmRlckxvYWRpbmdTcGlubmVyKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gNjA7XG4gICAgZWwuc3R5bGUubWFyZ2luID0gJzIwIGF1dG8nO1xuICAgIGVsLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gbG9hZGluZ0dpZjtcbiAgICBlbC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ+mrmOW+t+WcsOWbvuWKoOi9veS4rS4uLi4nKSk7XG4gICAgZWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcmV0dXJuIGVsO1xuICB9LFxuICByZWFkeSgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAod2luZG93LkFNYXApIHtcbiAgICAgIHRoaXMubWFwID0gbmV3IEFNYXAuTWFwKHRoaXMubWFwd3JhcC5pZCwgcGFyYW1zKTtcbiAgICAgIEFNYXAucGx1Z2luKFsnQU1hcC5Ub29sQmFyJywgJ0FNYXAuR2VvbG9jYXRpb24nXSwgKCkgPT4ge1xuICAgICAgICBpZiAocGFyYW1zLnNjYWxlKSB7XG4gICAgICAgICAgc2VsZi5tYXAuYWRkQ29udHJvbChuZXcgQU1hcC5Ub29sQmFyKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgICBzZWxmLm1hcC5hZGRDb250cm9sKG5ldyBBTWFwLkdlb2xvY2F0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChwYXJhbXMuc2VhcmNoKSB7XG4gICAgICAgIEFNYXAuc2VydmljZSgnQU1hcC5QbGFjZVNlYXJjaCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnBsYWNlU2VhcmNoID0gbmV3IEFNYXAuUGxhY2VTZWFyY2goKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICAgIGFtYXBNYW5hZ2VyLmluaXRNYXAodGhpcy5tYXB3cmFwLmlkLCB0aGlzLm1hcCk7XG4gICAgfVxuICB9LFxuICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgIG1hcmtlck1hbmFnZS5yZW1vdmVNYWtlcihjaGlsZC5kYXRhKTtcbiAgfSxcbiAgaW5pdEV2ZW50cygpIHtcbiAgICBldmVudHMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgICBBTWFwLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFwLCBldmVudE5hbWUsICgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgYXR0ciA9IHtcbiAgY2VudGVyKHZhbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA9PT0gMikge1xuICAgICAgcGFyYW1zLmNlbnRlciA9IHZhbDtcbiAgICAgIGlmICh3aW5kb3cuQU1hcCkge1xuICAgICAgICB0aGlzLm1hcC5zZXRDZW50ZXIocGFyYW1zLmNlbnRlcik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgY29uc3QgZ2VvID0gbmV3IEFNYXAuR2VvbG9jYXRpb24oe1xuICAgICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBnZW8uZ2V0Q3VycmVudFBvc2l0aW9uKCk7XG4gICAgICBBTWFwLmV2ZW50LkFNYXAuZXZlbnQuYWRkTGlzdGVuZXIoZ2VvLCAnY29tcGxldGUnLCAoZGF0YSkgPT4ge1xuICAgICAgICBwYXJhbXMuY2VudGVyID0gW2RhdGEucG9zaXRpb24uZ2V0TG5nKCksIGRhdGEucG9zaXRpb24uZ2V0TGF0KCldO1xuICAgICAgICBzZWxmLm1hcC5zZXRDZW50ZXIocGFyYW1zLmNlbnRlcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHpvb20odmFsKSB7XG4gICAgaWYgKC9eWzAtOV0rJC8udGVzdCh2YWwpKSB7XG4gICAgICBwYXJhbXMuem9vbSA9IHZhbDtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5BTWFwKSB7XG4gICAgICB0aGlzLm1hcC5zZXRab29tKHBhcmFtcy56b29tKTtcbiAgICB9XG4gIH0sXG4gIHNjYWxlKHZhbCkge1xuICAgIHBhcmFtcy5zY2FsZSA9IHZhbDtcbiAgfSxcbiAgZ2VvbG9jYXRpb24odmFsKSB7XG4gICAgcGFyYW1zLmdlb2xvY2F0aW9uID0gdmFsO1xuICB9LFxuICBzZGtLZXkodmFsKSB7XG4gICAgbGV0IGtleSA9ICcnO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGtleSA9IHZhbC5oNTtcbiAgICB9XG4gICAgbWFwTG9hZGVyLmxvYWQoe1xuICAgICAga2V5OiBrZXlcbiAgICB9LCB0aGlzLm1hcHdyYXAsICgpID0+IHRoaXMucmVhZHkoKSk7XG4gIH0sXG4gIHNlYXJjaCh2YWwpIHtcbiAgICBwYXJhbXMuc2VhcmNoID0gdmFsO1xuICAgIGlmICh3aW5kb3cuQU1hcCkge1xuICAgICAgICBcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGV2ZW50ID0ge1xuICB6b29tY2hhbmdlOiB7XG4gICAgZXh0cmEoKSB7XG4gICAgICByZXR1cm4geyBpc1N1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG4gIH0sXG4gIGRyYWdlbmQ6IHtcbiAgICBleHRyYSgpIHtcbiAgICAgIHJldHVybiB7IGlzU3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gaW5pdChXZWV4KSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IFdlZXguQ29tcG9uZW50O1xuICBjb25zdCBleHRlbmQgPSBXZWV4LnV0aWxzLmV4dGVuZDtcblxuICBmdW5jdGlvbiBBbWFwKGRhdGEpIHtcbiAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfVxuICBBbWFwLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChBbWFwLnByb3RvdHlwZSwgcHJvdG8pO1xuICBleHRlbmQoQW1hcC5wcm90b3R5cGUsIHsgYXR0ciB9KTtcbiAgZXh0ZW5kKEFtYXAucHJvdG90eXBlLCB7XG4gICAgc3R5bGU6IGV4dGVuZChPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUuc3R5bGUpLCB7fSlcbiAgfSk7XG4gIGV4dGVuZChBbWFwLnByb3RvdHlwZSwgeyBldmVudCB9KTtcbiAgV2VleC5yZWdpc3RlckNvbXBvbmVudCgnd2VleC1hbWFwJywgQW1hcCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC5qcyIsIi8vIGEgbGliIHRvIG1hbmFnZSBhbGwgbWFya2VyXG5pbXBvcnQgYW1hcE1hbmFnZXIgZnJvbSAnLi9tYXAtbWFuYWdlcic7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4vdmVuZG9yJztcblxuY29uc3QgbWFya2VycyA9IHt9O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoYW5nZU1hcmtlcihhcnIsIG1hcCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXJyW2ldO1xuICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5maW5kTWFya2VyKGRhdGEpO1xuICAgICAgaWYgKCFtYXJrZXIpIHtcbiAgICAgICAgdGhpcy5hZGRNYXJrZXIoZGF0YSwgbWFwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTWFya2VyKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgYWRkTWFya2VyKGRhdGEpIHtcbiAgICBjb25zdCBtYXAgPSBhbWFwTWFuYWdlci5nZXRNYXAoKTtcbiAgICBpZiAoIW1hcCkge1xuICAgICAgcmV0dXJuIGFtYXBNYW5hZ2VyLmFkZFJlYWR5Q2FsbGJhY2soKG1hcElucykgPT4ge1xuICAgICAgICB0aGlzLnNldE1hcmtlcihkYXRhLCBtYXBJbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNldE1hcmtlcihkYXRhLCBtYXApO1xuICB9LFxuICBzZXRNYXJrZXIoZGF0YSwgbWFwKSB7XG4gICAgbGV0IGljb24gPSBudWxsO1xuICAgIGlmIChkYXRhLmljb24pIHtcbiAgICAgIGljb24gPSBuZXcgQU1hcC5JY29uKHtcbiAgICAgICAgaW1hZ2U6IGRhdGEuaWNvbixcbiAgICAgICAgc2l6ZTogbmV3IEFNYXAuU2l6ZSg2NCwgNjQpXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgbWFya2VyID0gbmV3IEFNYXAuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLFxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICBpY29uOiBpY29uLFxuICAgICAgbWFwOiBtYXAsXG4gICAgfSk7XG4gICAgbWFya2Vyc1t0aGlzLl9fZ2V0TWlkKGRhdGEpXSA9IG1hcmtlcjtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKGRhdGEuZXZlbnRzLCBtYXJrZXIpO1xuICB9LFxuICByZW1vdmVNYWtlcihkYXRhKSB7XG4gICAgY29uc3QgbWFya2VyID0gdGhpcy5maW5kTWFya2VyKGRhdGEpO1xuICAgIG1hcmtlci5zZXRNYXAobnVsbCk7XG4gIH0sXG4gIHVwZGF0ZU1hcmtlcihkYXRhLCBhdHRyLCB2YWwpIHtcbiAgICBjb25zdCBtYXJrZXIgPSB0aGlzLmZpbmRNYXJrZXIoZGF0YSk7XG4gICAgaWYgKCFtYXJrZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgbWV0aG9kID0gdmVuZG9yLnNldEZpcnN0TGV0dGVyVG9VcHBlcmNhc2UoYXR0cik7XG4gICAgbWFya2VyWydzZXQnICsgbWV0aG9kXSh2YWwpO1xuICB9LFxuICByZWdpc3RlckV2ZW50cyhldmVudHMsIG1hcmtlcikge1xuICAgIGlmICh0eXBlb2YgZXZlbnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXZlbnRzKSB7XG4gICAgICAgIEFNYXAuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCBrZXksIGV2ZW50c1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlbW92ZU1hcmtlcihkYXRhKSB7XG4gICAgbGV0IG1hcmtlciA9IHRoaXMuZmluZE1hcmtlcihkYXRhKTtcbiAgICBpZiAobWFya2VyKSB7XG4gICAgICBtYXJrZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICBtYXJrZXIgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgZmluZE1hcmtlcihkYXRhKSB7XG4gICAgY29uc3QgbWlkID0gdGhpcy5fX2dldE1pZChkYXRhKTtcbiAgICByZXR1cm4gbWFya2Vyc1ttaWRdO1xuICB9LFxuICBfX2dldE1pZChkYXRhKSB7XG4gICAgcmV0dXJuICdtaWQtJyArIGRhdGEucmVmIHx8IGRhdGEucG9zaXRpb24uam9pbignLScpO1xuICB9LFxuICBfX2lzTWFrZXIob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iai5DTEFTU19OQU1FID09PSAnQU1hcC5NYXJrZXInO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvbWFya2VyLmpzIiwiLy8gbG9hZCBtYXAgc2RrXG5jb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAga2V5OiAnJyxcbiAgdjogJzEuMycsXG4gIHVybDogJ2h0dHBzOi8vd2ViYXBpLmFtYXAuY29tL21hcHMnLFxuICBjYWxsYmFjazogJ2FtYXBJbml0Q29tcG9uZW50J1xufTtcbmNvbnN0IGdlbmdlcmF0ZVNjcmlwdFVybCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgY29uc3QgcGFyYW1BcnIgPSBbXTtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGtleSAhPT0gJ3VybCcpIHtcbiAgICAgIHBhcmFtQXJyLnB1c2goZW5jb2RlVVJJKGtleSArICc9JyArIG9ialtrZXldKSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHVybCA9IG9iai51cmwgKz0gJz8nICsgcGFyYW1BcnIuam9pbignJicpO1xuICByZXR1cm4gdXJsO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvYWQoY29uZmlnLCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbmV3Q29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9DT05GSUcsIGNvbmZpZyk7XG4gICAgY29uc3QgbGliID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgbGliLmFzeW5jID0gdHJ1ZTtcbiAgICBsaWIuZGVmZXIgPSB0cnVlO1xuICAgIGxpYi5zcmMgPSBnZW5nZXJhdGVTY3JpcHRVcmwobmV3Q29uZmlnKTtcbiAgICBjb25zb2xlLmxvZyhsaWIuc3JjKTtcbiAgICB3aW5kb3cuYW1hcEluaXRDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cubWFwbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpYik7XG4gICAgdGhpcy5sb2FkVGltZW91dChjb250YWluZXIpO1xuICB9LFxuICBsb2FkVGltZW91dCh3cmFwKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXdpbmRvdy5BbWFwKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfph43mlrDliqDovb0nKSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgd3JhcC5jaGlsZE5vZGVzWzBdLnJlbW92ZSgpO1xuICAgICAgICB3cmFwLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwMCk7XG4gIH1cblxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9zZXJ2aWNlL21hcC1sb2FkZXIuanMiLCJpbXBvcnQgbWFya2VyTWFuYWdlciBmcm9tICcuLi9zZXJ2aWNlL21hcmtlcic7XG5cbmNvbnN0IHBhcmFtcyA9IHtcbiAgcG9pc3Rpb246IFtdLFxuICB0aXRsZTogJycsXG4gIGljb246ICcnXG59O1xuXG4vLyBwcm90b3R5cGUgbWV0aG9kcy5cbmNvbnN0IHByb3RvID0ge1xuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEuYXR0cjtcbiAgICBtYXJrZXJNYW5hZ2VyLmFkZE1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogZGF0YS5wb3NpdGlvbixcbiAgICAgIGljb246IGRhdGEuaWNvbixcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgcmVmOiB0aGlzLmRhdGEucmVmLFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjbGljaycpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWFwOiB3aW5kb3cuQW1hcFxuICAgIH0pO1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICB1cGRhdGVBdHRycyhhdHRycykge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhdHRycyk7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHJlZjogdGhpcy5kYXRhLnJlZlxuICAgIH07XG4gICAga2V5cy5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBtYXJrZXJNYW5hZ2VyLnVwZGF0ZU1hcmtlcihkYXRhLCBrLCBhdHRyc1trXSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGF0dHIgPSB7XG4gIHBvc2l0aW9uKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoID09PSAyKSB7XG4gICAgICBwYXJhbXMucG9zaXRpb24gPSB2YWw7XG4gICAgfVxuICB9LFxuICBpY29uKHZhbCkge1xuICAgIHBhcmFtcy5pY29uID0gdmFsO1xuICB9LFxuICB0aXRsZSh2YWwpIHtcbiAgICBwYXJhbXMudGl0bGUgPSB2YWw7XG4gIH1cbn07XG5cbmNvbnN0IGV2ZW50ID0ge1xuICBjbGljazoge1xuICAgIGV4dHJhKCkge1xuICAgICAgcmV0dXJuIHsgaXNTdWNjZXNzOiB0cnVlIH07XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0KFdlZXgpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gV2VleC5Db21wb25lbnQ7XG4gIGNvbnN0IGV4dGVuZCA9IFdlZXgudXRpbHMuZXh0ZW5kO1xuXG4gIGZ1bmN0aW9uIEFtYXBNYWtlcihkYXRhKSB7XG4gICAgQ29tcG9uZW50LmNhbGwodGhpcywgZGF0YSk7XG4gIH1cbiAgQW1hcE1ha2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChBbWFwTWFrZXIucHJvdG90eXBlLCBwcm90byk7XG4gIGV4dGVuZChBbWFwTWFrZXIucHJvdG90eXBlLCB7IGF0dHIgfSk7XG4gIGV4dGVuZChBbWFwTWFrZXIucHJvdG90eXBlLCB7IGV2ZW50IH0pO1xuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWFtYXAtbWFya2VyJywgQW1hcE1ha2VyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLW1hcmtlci5qcyIsImltcG9ydCBjb21wb25lbnRzIGZyb20gJy4uL3NlcnZpY2UvY29tcG9uZW50cyc7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4uL3NlcnZpY2UvdmVuZG9yJztcblxuY29uc3QgY29tcG9uZW50TmFtZSA9ICdjaXJjbGUnO1xuLy8gcHJvdG90eXBlIG1ldGhvZHMuXG5jb25zdCBwcm90byA9IHtcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLmF0dHI7XG4gICAgY29uc3QgY29tSWQgPSBkYXRhLnJlZiB8fCB2ZW5kb3IuZ2VuZ2VyYXRlUmFuZG9tSWQoY29tcG9uZW50TmFtZSk7XG4gICAgaWYgKGRhdGEuY2VudGVyICYmIEFycmF5LmlzQXJyYXkoZGF0YS5jZW50ZXIpKSB7XG4gICAgICBjb21wb25lbnRzLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsIHtcbiAgICAgICAgY2VudGVyOiBkYXRhLmNlbnRlcixcbiAgICAgICAgcmFkaXVzOiBkYXRhLnJhZGl1cyxcbiAgICAgICAgZmlsbENvbG9yOiBkYXRhLmZpbGxDb2xvcixcbiAgICAgICAgZmlsT3BhY2l0eTogZGF0YS5maWxsT3BhY2l0eSxcbiAgICAgICAgc3Ryb2tlV2VpZ2h0OiBkYXRhLnN0cm9rZVdpZHRoLFxuICAgICAgICBzdHJva2VPcGFjaXR5OiBkYXRhLnN0cm9rZU9wYWNpdHksXG4gICAgICAgIHN0cm9rZUNvbG9yOiBkYXRhLnN0cm9rZUNvbG9yLFxuICAgICAgICBzdHJva2VTdHlsZTogZGF0YS5zdHJva2VTdHlsZSxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY2xpY2snKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LCBjb21JZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignYXR0cmlidXRlIGNlbnRlciBtdXN0IGJlIGFuIGFycmF5LicpO1xuICAgIH1cbiAgICB0aGlzLl9jb21JZCA9IGNvbUlkO1xuICAgIHJldHVybiBub2RlO1xuICB9XG59O1xuXG5jb25zdCBhdHRyID0ge1xuICBjZW50ZXIodmFsKSB7XG4gICAgY29uc3QgY29tID0gY29tcG9uZW50cy5nZXRDb21wb25lbnQodGhpcy5fY29tSWQpO1xuICAgIGlmIChjb20pIHtcbiAgICAgIGNvbS5zZXRDZW50ZXIodmFsKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGV2ZW50ID0ge1xuICBjbGljazoge1xuICAgIGV4dHJhKCkge1xuICAgICAgcmV0dXJuIHsgaXNTdWNjZXNzOiB0cnVlIH07XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0KFdlZXgpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gV2VleC5Db21wb25lbnQ7XG4gIGNvbnN0IGV4dGVuZCA9IFdlZXgudXRpbHMuZXh0ZW5kO1xuXG4gIGZ1bmN0aW9uIEFtYXBDaXJjbGUoZGF0YSkge1xuICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9XG4gIEFtYXBDaXJjbGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlKTtcbiAgZXh0ZW5kKEFtYXBDaXJjbGUucHJvdG90eXBlLCBwcm90byk7XG4gIGV4dGVuZChBbWFwQ2lyY2xlLnByb3RvdHlwZSwgeyBhdHRyIH0pO1xuICBleHRlbmQoQW1hcENpcmNsZS5wcm90b3R5cGUsIHsgZXZlbnQgfSk7XG4gIFdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ3dlZXgtYW1hcC1jaXJjbGUnLCBBbWFwQ2lyY2xlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLWNpcmNsZS5qcyIsImltcG9ydCBjb21wb25lbnRzIGZyb20gJy4uL3NlcnZpY2UvY29tcG9uZW50cyc7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4uL3NlcnZpY2UvdmVuZG9yJztcblxuY29uc3QgY29tcG9uZW50TmFtZSA9ICdwb2x5Z29uJztcbi8vIHByb3RvdHlwZSBtZXRob2RzLlxuY29uc3QgcHJvdG8gPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5hdHRyO1xuICAgIGNvbnN0IGNvbUlkID0gdGhpcy5kYXRhLnJlZiB8fCB2ZW5kb3IuZ2VuZ2VyYXRlUmFuZG9tSWQoY29tcG9uZW50TmFtZSk7XG4gICAgaWYgKGRhdGEucGF0aCAmJiBBcnJheS5pc0FycmF5KGRhdGEucGF0aCkpIHtcbiAgICAgIGNvbXBvbmVudHMucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50TmFtZSwge1xuICAgICAgICBwYXRoOiBkYXRhLnBhdGgsXG4gICAgICAgIGZpbGxDb2xvcjogZGF0YS5maWxsQ29sb3IsXG4gICAgICAgIGZpbE9wYWNpdHk6IGRhdGEuZmlsbE9wYWNpdHksXG4gICAgICAgIHN0cm9rZVdlaWdodDogZGF0YS5zdHJva2VXaWR0aCxcbiAgICAgICAgc3Ryb2tlT3BhY2l0eTogZGF0YS5zdHJva2VPcGFjaXR5LFxuICAgICAgICBzdHJva2VDb2xvcjogZGF0YS5zdHJva2VDb2xvcixcbiAgICAgICAgc3Ryb2tlU3R5bGU6IGRhdGEuc3Ryb2tlU3R5bGUsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NsaWNrJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSwgY29tSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2F0dHJpYnV0ZSBwYXRoIG11c3QgYmUgYW4gYXJyYXkuJyk7XG4gICAgfVxuICAgIHRoaXMuX2NvbUlkID0gY29tSWQ7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn07XG5cbmNvbnN0IGF0dHIgPSB7XG5cbn07XG5cbmNvbnN0IGV2ZW50ID0ge1xuICBjbGljazoge1xuICAgIGV4dHJhKCkge1xuICAgICAgcmV0dXJuIHsgaXNTdWNjZXNzOiB0cnVlIH07XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0KFdlZXgpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gV2VleC5Db21wb25lbnQ7XG4gIGNvbnN0IGV4dGVuZCA9IFdlZXgudXRpbHMuZXh0ZW5kO1xuXG4gIGZ1bmN0aW9uIEFtYXBQb2x5Z29uKGRhdGEpIHtcbiAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfVxuICBBbWFwUG9seWdvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUpO1xuICBleHRlbmQoQW1hcFBvbHlnb24ucHJvdG90eXBlLCBwcm90byk7XG4gIGV4dGVuZChBbWFwUG9seWdvbi5wcm90b3R5cGUsIHsgYXR0ciB9KTtcbiAgZXh0ZW5kKEFtYXBQb2x5Z29uLnByb3RvdHlwZSwgeyBldmVudCB9KTtcbiAgV2VleC5yZWdpc3RlckNvbXBvbmVudCgnd2VleC1hbWFwLXBvbHlnb24nLCBBbWFwUG9seWdvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC1wb2x5Z29uLmpzIiwiaW1wb3J0IGNvbXBvbmVudHMgZnJvbSAnLi4vc2VydmljZS9jb21wb25lbnRzJztcbmltcG9ydCB2ZW5kb3IgZnJvbSAnLi4vc2VydmljZS92ZW5kb3InO1xuXG5jb25zdCBjb21wb25lbnROYW1lID0gJ3BvbHlsaW5lJztcbi8vIHByb3RvdHlwZSBtZXRob2RzLlxuY29uc3QgcHJvdG8gPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5hdHRyO1xuICAgIGNvbnN0IGNvbUlkID0gZGF0YS5yZWYgfHwgdmVuZG9yLmdlbmdlcmF0ZVJhbmRvbUlkKGNvbXBvbmVudE5hbWUpO1xuICAgIGlmIChkYXRhLnBhdGggJiYgQXJyYXkuaXNBcnJheShkYXRhLnBhdGgpKSB7XG4gICAgICBjb21wb25lbnRzLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsIHtcbiAgICAgICAgcGF0aDogZGF0YS5wYXRoLFxuICAgICAgICBzdHJva2VXZWlnaHQ6IGRhdGEuc3Ryb2tlV2lkdGgsXG4gICAgICAgIHN0cm9rZU9wYWNpdHk6IGRhdGEuc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgc3Ryb2tlQ29sb3I6IGRhdGEuc3Ryb2tlQ29sb3IsXG4gICAgICAgIHN0cm9rZVN0eWxlOiBkYXRhLnN0cm9rZVN0eWxlLFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjbGljaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sIGNvbUlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdhdHRyaWJ1dGUgcGF0aCBtdXN0IGJlIGFuIGFycmF5LicpO1xuICAgIH1cbiAgICB0aGlzLl9jb21JZCA9IGNvbUlkO1xuICAgIHJldHVybiBub2RlO1xuICB9XG59O1xuXG5jb25zdCBhdHRyID0ge1xuXG59O1xuXG5jb25zdCBldmVudCA9IHtcbiAgY2xpY2s6IHtcbiAgICBleHRyYSgpIHtcbiAgICAgIHJldHVybiB7IGlzU3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gaW5pdChXZWV4KSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IFdlZXguQ29tcG9uZW50O1xuICBjb25zdCBleHRlbmQgPSBXZWV4LnV0aWxzLmV4dGVuZDtcblxuICBmdW5jdGlvbiBBbWFwUG9seWdvbihkYXRhKSB7XG4gICAgQ29tcG9uZW50LmNhbGwodGhpcywgZGF0YSk7XG4gIH1cbiAgQW1hcFBvbHlnb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlKTtcbiAgZXh0ZW5kKEFtYXBQb2x5Z29uLnByb3RvdHlwZSwgcHJvdG8pO1xuICBleHRlbmQoQW1hcFBvbHlnb24ucHJvdG90eXBlLCB7IGF0dHIgfSk7XG4gIGV4dGVuZChBbWFwUG9seWdvbi5wcm90b3R5cGUsIHsgZXZlbnQgfSk7XG4gIFdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ3dlZXgtYW1hcC1wb2x5bGluZScsIEFtYXBQb2x5Z29uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLXBvbHlsaW5lLmpzIiwiaW1wb3J0IGNvbXBvbmVudHMgZnJvbSAnLi4vc2VydmljZS9jb21wb25lbnRzJztcbmltcG9ydCB2ZW5kb3IgZnJvbSAnLi4vc2VydmljZS92ZW5kb3InO1xuXG5jb25zdCBjb21wb25lbnROYW1lID0gJ2luZm9XaW5kb3cnO1xuLy8gcHJvdG90eXBlIG1ldGhvZHMuXG5jb25zdCBwcm90byA9IHtcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub2RlLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEuYXR0cjtcbiAgICBjb25zdCBjb21JZCA9IGRhdGEucmVmIHx8IHZlbmRvci5nZW5nZXJhdGVSYW5kb21JZChjb21wb25lbnROYW1lKTtcbiAgICB0aGlzLmFkZEFwcGVuZEhhbmRsZXIoKCkgPT4ge1xuICAgICAgaWYgKGRhdGEucG9zaXRpb24gJiYgQXJyYXkuaXNBcnJheShkYXRhLnBvc2l0aW9uKSkge1xuICAgICAgICBjb21wb25lbnRzLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsIHtcbiAgICAgICAgICBwb3NpdGlvbjogZGF0YS5wb3NpdGlvbixcbiAgICAgICAgICBvZmZzZXQ6IGRhdGEub2Zmc2V0LFxuICAgICAgICAgIG9wZW46IGRhdGEub3BlbixcbiAgICAgICAgICBpc0N1c3RvbTogdHJ1ZVxuICAgICAgICB9LCBjb21JZCwgKGNvbSwgbWFwKSA9PiB7XG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZS5pbm5lckhUTUwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29udGVudCA9IHRoaXMubm9kZS5pbm5lckhUTUw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBjb20uc2V0Q29udGVudChjb250ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGRhdGEub3Blbikge1xuICAgICAgICAgICAgY29tLm9wZW4obWFwLCBkYXRhLnBvc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdhdHRyaWJ1dGUgY2VudGVyIG11c3QgYmUgYW4gYXJyYXkuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fY29tSWQgPSBjb21JZDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufTtcblxuY29uc3QgYXR0ciA9IHtcbiAgb3Blbih2YWwpIHtcbiAgICBjb25zdCBjb20gPSBjb21wb25lbnRzLmdldENvbXBvbmVudCh0aGlzLl9jb21JZCk7XG4gICAgY29uc3QgbWFwID0gY29tcG9uZW50cy5nZXRDb21wb25lbnRNYXAoKTtcbiAgICBpZiAoY29tKSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGNvbS5vcGVuKG1hcCwgdGhpcy5kYXRhLmF0dHIucG9zaXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBldmVudCA9IHtcbn07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcEluZm9XaW5kb3coZGF0YSkge1xuICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9XG4gIEFtYXBJbmZvV2luZG93LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChBbWFwSW5mb1dpbmRvdy5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXBJbmZvV2luZG93LnByb3RvdHlwZSwgeyBhdHRyIH0pO1xuICBleHRlbmQoQW1hcEluZm9XaW5kb3cucHJvdG90eXBlLCB7IGV2ZW50IH0pO1xuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWFtYXAtaW5mby13aW5kb3cnLCBBbWFwSW5mb1dpbmRvdyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC1pbmZvLXdpbmRvdy5qcyIsIiAvKipcbiAgKiBJbml0IHdlZXggaW5zdGFuY2UgZGVwZW5kaW5nIG9uIHRoZSB1cmwgcGFyYW1zLlxuICAqIFRoZXJlIGFyZSB0aHJlZSB3YXlzIHRvIGxvYWQgd2VleCBidW5kbGVzLCBkZXBlbmRzIG9uIHRoZVxuICAqIHBhcmFtZXRlciAnbG9hZGVyJyBpbiB0aGUgdXJsOlxuICAqXG4gICogICArIHhocjogdXNlIFhNTEh0dHBSZXF1ZXN0LiBQYXJhbWV0ZXIgJ3BhZ2UnIHNob3VsZCBiZVxuICAqICAgdGhlIGJ1bmRsZSdzIHVybC5cbiAgKiAgICsgc291cmNlOiB1c2UgdGhlIHRyYW5zZm9ybWVkIGNvZGUgaXRzZWxmLiAncGFnZScgc2hvdWxkXG4gICogICBiZSB0aGUgdHJhbnNmb3JtZWQgd2VleCBidW5kbGUuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gYnVuZGxlIC0gSXQgaGFzIGRpZmZlcmVudCBtZWFuaW5nIGRlcGVuZHMgb25cbiAgKiAgIHRoZSB0eXBlIG9mIGxvYWRlci5cbiAgKi9cbiAgXG5cbiAgXG4gKGZ1bmN0aW9uICgpIHtcbiAgIGZ1bmN0aW9uIGdldFVybFBhcmFtKGtleSkge1xuICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cCgnWz98Jl0nICsga2V5ICsgJz0oW14mXSspJylcbiAgICAgdmFyIG1hdGNoID0gbG9jYXRpb24uc2VhcmNoLm1hdGNoKHJlZylcbiAgICAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdXG4gICB9XG4gICB2YXIgbG9hZGVyID0gZ2V0VXJsUGFyYW0oJ2xvYWRlcicpIHx8ICd4aHInO1xuICAgdmFyIHBhZ2UgPSBnZXRVcmxQYXJhbSgncGFnZScpIHx8ICcuLi9kaXN0L2luZGV4LmpzJztcbiAgIHdpbmRvdy53ZWV4LmluaXQoe1xuICAgICBhcHBJZDogbG9jYXRpb24uaHJlZlxuICAgICAsIGxvYWRlcjogbG9hZGVyXG4gICAgICwgc291cmNlOiBwYWdlXG4gICAgICwgcm9vdElkOiAnd2VleCdcbiAgIH0pXG4gfSkoKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2ViL2pzL2luaXQuanMiXSwic291cmNlUm9vdCI6IiJ9