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
	      if (opts.offset) {
	        var newOffset = _vendor2.default.calcOffset(opts.offset[0], opts.offset[1]);
	        opts.offset = new AMap.Pixel(newOffset[0], newOffset[1]);
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
	  },
	
	  // offset polyfill
	  calcOffset: function calcOffset(x, y) {
	    var halfY = y / 2;
	    var newX = x - halfY;
	    return [newX, y];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWY3OTg2N2E0Y2NkNzViYzE4N2YiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9wbHVnaW5fYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1jaGFydC93ZWIvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvbW9kdWxlL2FtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9tYXAtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS92ZW5kb3IuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvbWFwLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLW1hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLWNpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLXBvbHlnb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC1wb2x5bGluZS5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLWluZm8td2luZG93LmpzIiwid2VicGFjazovLy8uL3dlYi9qcy9pbml0LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIndlZXgiLCJpbnN0YWxsIiwicHJvdG8iLCJjcmVhdGUiLCJub2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXIiLCJJbWFnZSIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwicGFkZGluZyIsInRleHRBbGlnbiIsImJvcmRlciIsImFwcGVuZENoaWxkIiwiYXR0ciIsInRleHQiLCJ2YWwiLCJjcmVhdGVUZXh0Tm9kZSIsImltZ3NyYyIsInNyYyIsInR4dENvbG9yIiwiY29sb3IiLCJldmVudCIsImNsaWNrIiwiZXh0cmEiLCJ2YWx1ZSIsInRleHRDb250ZW50IiwiaW5pdCIsIldlZXgiLCJDb21wb25lbnQiLCJleHRlbmQiLCJ1dGlscyIsIlBvbGFyb2lkUGhvdG8iLCJkYXRhIiwiY2FsbCIsInByb3RvdHlwZSIsIk9iamVjdCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiY29tcG9uZW50cyIsImZvckVhY2giLCJjb21wIiwibW9kdWxlIiwiZXhwb3J0cyIsImFtYXAiLCJnZXRVc2VyTG9jYXRpb24iLCJtYXBSZWYiLCJjYWxsYmFjayIsInNlbGYiLCJnZW8iLCJBTWFwIiwiR2VvbG9jYXRpb24iLCJlbmFibGVIaWdoQWNjdXJhY3kiLCJ0aW1lb3V0IiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic3RhdHVzIiwicmVzIiwic2VuZGVyIiwicGVyZm9ybUNhbGxiYWNrIiwicG9zaXRpb24iLCJnZXRMbmciLCJnZXRMYXQiLCJyZXN1bHQiLCJjb25zb2xlIiwid2FybiIsIm1lc3NhZ2UiLCJnZXRMaW5lRGlzdGFuY2UiLCJjb29yMSIsImNvb3IyIiwibG5nbGF0IiwiTG5nTGF0IiwiZGlzdGFuY2UiLCJwb2x5Z29uQ29udGFpbnNNYXJrZXIiLCJjb29yIiwicG9seWdvblJlZiIsInBvbHlnb25Db20iLCJnZXRDb21wb25lbnQiLCJjb250YWlucyIsIm1ldGEiLCJuYW1lIiwiYXJncyIsInJlZ2lzdGVyQXBpTW9kdWxlIiwiY29tcG9uZW50TmFtZSIsIm9wdGlvbnMiLCJpZCIsIm9wdHMiLCJfY29tcG9uZW50cyIsImFkZFJlYWR5Q2FsbGJhY2siLCJtYXBJbnMiLCJtYXAiLCJjbGFzc05hbWUiLCJzZXRGaXJzdExldHRlclRvVXBwZXJjYXNlIiwib2Zmc2V0IiwibmV3T2Zmc2V0IiwiY2FsY09mZnNldCIsIlBpeGVsIiwiZ2V0T2JqZWN0Rmlyc3RWYWwiLCJnZXRDb21wb25lbnRNYXAiLCJnZXRNYXAiLCJjYWxsYmFja1N0YWNrIiwiaW5pdE1hcCIsIl9fbWFwcyIsImNiIiwia2V5cyIsInB1c2giLCJnZW5nZXJhdGVSYW5kb21JZCIsInByZWZpeCIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJzdHIiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsIm9iaiIsIngiLCJ5IiwiaGFsZlkiLCJuZXdYIiwibG9hZGluZ0dpZiIsInBhcmFtcyIsImNlbnRlciIsInVuZGVmaW5lZCIsInpvb20iLCJ0b29sYmFyIiwic2NhbGUiLCJnZW9sb2NhdGlvbiIsInJlc2l6ZUVuYWJsZSIsInNlYXJjaCIsImV2ZW50cyIsIm1hcHdyYXAiLCJhcHBlbmQiLCJyZW5kZXJMb2FkaW5nU3Bpbm5lciIsImVsIiwiaGVpZ2h0IiwibWFyZ2luIiwiaW1hZ2UiLCJyZWFkeSIsIk1hcCIsInBsdWdpbiIsImFkZENvbnRyb2wiLCJUb29sQmFyIiwic2VydmljZSIsInBsYWNlU2VhcmNoIiwiUGxhY2VTZWFyY2giLCJpbml0RXZlbnRzIiwicmVtb3ZlQ2hpbGQiLCJjaGlsZCIsInJlbW92ZU1ha2VyIiwiZXZlbnROYW1lIiwiYWRkTGlzdGVuZXIiLCJkaXNwYXRjaEV2ZW50IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwic2V0Q2VudGVyIiwidGVzdCIsInNldFpvb20iLCJzZGtLZXkiLCJrZXkiLCJoNSIsImxvYWQiLCJ6b29tY2hhbmdlIiwiaXNTdWNjZXNzIiwiZHJhZ2VuZCIsIkFtYXAiLCJtYXJrZXJzIiwiY2hhbmdlTWFya2VyIiwiYXJyIiwiaSIsIm1hcmtlciIsImZpbmRNYXJrZXIiLCJhZGRNYXJrZXIiLCJyZW1vdmVNYXJrZXIiLCJzZXRNYXJrZXIiLCJpY29uIiwiSWNvbiIsInNpemUiLCJTaXplIiwiTWFya2VyIiwidGl0bGUiLCJfX2dldE1pZCIsInJlZ2lzdGVyRXZlbnRzIiwic2V0TWFwIiwidXBkYXRlTWFya2VyIiwibWV0aG9kIiwidmlzaWJsZSIsIm1pZCIsInJlZiIsImpvaW4iLCJfX2lzTWFrZXIiLCJDTEFTU19OQU1FIiwiREVGQVVMVF9DT05GSUciLCJ2IiwidXJsIiwiZ2VuZ2VyYXRlU2NyaXB0VXJsIiwicGFyYW1BcnIiLCJlbmNvZGVVUkkiLCJjb25maWciLCJjb250YWluZXIiLCJuZXdDb25maWciLCJhc3NpZ24iLCJsaWIiLCJhc3luYyIsImRlZmVyIiwibG9nIiwiYW1hcEluaXRDb21wb25lbnQiLCJtYXBsb2FkZWQiLCJoZWFkIiwibG9hZFRpbWVvdXQiLCJ3cmFwIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNoaWxkTm9kZXMiLCJyZW1vdmUiLCJwb2lzdGlvbiIsInVwZGF0ZUF0dHJzIiwiYXR0cnMiLCJrIiwiQW1hcE1ha2VyIiwiY29tSWQiLCJyYWRpdXMiLCJmaWxsQ29sb3IiLCJmaWxPcGFjaXR5IiwiZmlsbE9wYWNpdHkiLCJzdHJva2VXZWlnaHQiLCJzdHJva2VXaWR0aCIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VDb2xvciIsInN0cm9rZVN0eWxlIiwiX2NvbUlkIiwiY29tIiwiQW1hcENpcmNsZSIsInBhdGgiLCJBbWFwUG9seWdvbiIsIm9wYWNpdHkiLCJhZGRBcHBlbmRIYW5kbGVyIiwiaXNDdXN0b20iLCJjb250ZW50IiwiaW5uZXJIVE1MIiwic2V0Q29udGVudCIsIm9wZW4iLCJjbG9zZSIsIkFtYXBJbmZvV2luZG93IiwiZ2V0VXJsUGFyYW0iLCJyZWciLCJSZWdFeHAiLCJtYXRjaCIsImxvYWRlciIsInBhZ2UiLCJhcHBJZCIsImhyZWYiLCJzb3VyY2UiLCJyb290SWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7Ozs7QUFEQUEsUUFBT0MsSUFBUCxJQUFlRCxPQUFPQyxJQUFQLENBQVlDLE9BQVosZUFBZjs7QUFFQUYsUUFBT0MsSUFBUCxJQUFlRCxPQUFPQyxJQUFQLENBQVlDLE9BQVosZUFBZixDOzs7Ozs7QUNIQTs7Ozs7QUFHQSxLQUFNQyxRQUFRO0FBQ1pDLFNBRFksb0JBQ0Y7QUFDUixVQUFLQyxJQUFMLEdBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxJQUFJQyxLQUFKLEVBQWI7QUFDQSxVQUFLRCxLQUFMLENBQVdFLEtBQVgsQ0FBaUJDLFlBQWpCLEdBQWdDLE1BQWhDO0FBQ0EsVUFBS04sSUFBTCxDQUFVSyxLQUFWLENBQWdCRSxPQUFoQixHQUEwQixrQkFBMUI7QUFDQSxVQUFLUCxJQUFMLENBQVVLLEtBQVYsQ0FBZ0JHLFNBQWhCLEdBQTRCLFFBQTVCO0FBQ0EsVUFBS1IsSUFBTCxDQUFVSyxLQUFWLENBQWdCSSxNQUFoQixHQUF5QixnQkFBekI7QUFDQSxVQUFLVCxJQUFMLENBQVVVLFdBQVYsQ0FBc0IsS0FBS1AsS0FBM0I7QUFDQSxVQUFLSCxJQUFMLENBQVVVLFdBQVYsQ0FBc0JULFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdEI7O0FBRUEsWUFBTyxLQUFLRixJQUFaO0FBQ0Q7QUFaVyxFQUFkOztB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dEIsRUFBaUNsQyxLQUFqQztBQUNBNkIsVUFBT3lOLGVBQWVwTixTQUF0QixFQUFpQyxFQUFFckIsVUFBRixFQUFqQztBQUNBZ0IsVUFBT3lOLGVBQWVwTixTQUF0QixFQUFpQyxFQUFFYixZQUFGLEVBQWpDO0FBQ0FNLFFBQUtTLGlCQUFMLENBQXVCLHVCQUF2QixFQUFnRGtOLGNBQWhEO0FBQ0Q7O21CQUVjLEVBQUU1TixVQUFGLEU7Ozs7Ozs7O0FDdkVkOzs7Ozs7Ozs7Ozs7OztBQWdCQSxFQUFDLFlBQVk7QUFDWCxZQUFTNk4sV0FBVCxDQUFxQnZGLEdBQXJCLEVBQTBCO0FBQ3hCLFNBQUl3RixNQUFNLElBQUlDLE1BQUosQ0FBVyxVQUFVekYsR0FBVixHQUFnQixVQUEzQixDQUFWO0FBQ0EsU0FBSTBGLFFBQVFwQyxTQUFTckYsTUFBVCxDQUFnQnlILEtBQWhCLENBQXNCRixHQUF0QixDQUFaO0FBQ0EsWUFBT0UsU0FBU0EsTUFBTSxDQUFOLENBQWhCO0FBQ0Q7QUFDRCxPQUFJQyxTQUFTSixZQUFZLFFBQVosS0FBeUIsS0FBdEM7QUFDQSxPQUFJSyxPQUFPTCxZQUFZLE1BQVosS0FBdUIsa0JBQWxDO0FBQ0ExUCxVQUFPQyxJQUFQLENBQVk0QixJQUFaLENBQWlCO0FBQ2ZtTyxZQUFPdkMsU0FBU3dDLElBREQ7QUFFYkgsYUFBUUEsTUFGSztBQUdiSSxhQUFRSCxJQUhLO0FBSWJJLGFBQVE7QUFKSyxJQUFqQjtBQU1ELEVBZEQsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVmNzk4NjdhNGNjZDc1YmMxODdmIiwiaW1wb3J0IGNoYXJ0IGZyb20gXCIvVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9wbHVnaW5zL3dlZXgtY2hhcnQvd2ViXCI7XHJcbndpbmRvdy53ZWV4ICYmIHdpbmRvdy53ZWV4Lmluc3RhbGwoY2hhcnQpO1xyXG5pbXBvcnQgYW1hcCBmcm9tIFwiL1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hcHAvcGx1Z2lucy93ZWV4LWFtYXAvd2ViXCI7XHJcbndpbmRvdy53ZWV4ICYmIHdpbmRvdy53ZWV4Lmluc3RhbGwoYW1hcCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy9wbHVnaW5fYnVuZGxlLmpzIiwiJ3VzZSBzdHJpY3QnXG5cblxuY29uc3QgcHJvdG8gPSB7XG4gIGNyZWF0ZSAoKSB7XG4gICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5pbm5lciA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW5uZXIuc3R5bGUubWFyZ2luQm90dG9tID0gJzEwcHgnO1xuICAgIHRoaXMubm9kZS5zdHlsZS5wYWRkaW5nID0gXCI1cHggNXB4IDEwcHggNXB4XCI7IFxuICAgIHRoaXMubm9kZS5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiOyBcbiAgICB0aGlzLm5vZGUuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjY2NjJztcbiAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5pbm5lcik7XG4gICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgXG4gICAgcmV0dXJuIHRoaXMubm9kZSBcbiAgfVxufVxuXG4vLyBhdHRyaWJ1dGUgc2V0dGVycy5cbmNvbnN0IGF0dHIgPSB7XG4gIHRleHQgKHZhbCkge1xuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsKTtcbiAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIH0sXG4gIFxuICBpbWdzcmModmFsKSB7XG4gICAgdGhpcy5pbm5lci5zcmMgPSB2YWw7XG4gIH1cbn1cblxuLy8gc3R5bGUgc2V0dGVycy5cbmNvbnN0IHN0eWxlID0ge1xuICB0eHRDb2xvciAodmFsKSB7XG4gICAgdGhpcy5pbm5lci5zdHlsZS5jb2xvciA9IHZhbFxuICB9XG59XG5cbi8vIGV2ZW50IGNvbmZpZy5cbmNvbnN0IGV2ZW50ID0ge1xuICBjbGljazoge1xuICAgIGV4dHJhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB0aGlzLmlubmVyLnRleHRDb250ZW50XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXQgKFdlZXgpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gV2VleC5Db21wb25lbnQ7XG4gIGNvbnN0IGV4dGVuZCA9IFdlZXgudXRpbHMuZXh0ZW5kO1xuXG4gIGZ1bmN0aW9uIFBvbGFyb2lkUGhvdG8gKGRhdGEpIHtcbiAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfVxuXG4gIFBvbGFyb2lkUGhvdG8ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlKTtcbiAgZXh0ZW5kKFBvbGFyb2lkUGhvdG8ucHJvdG90eXBlLCBwcm90byk7XG4gIGV4dGVuZChQb2xhcm9pZFBob3RvLnByb3RvdHlwZSwgeyBhdHRyIH0pO1xuICBleHRlbmQoUG9sYXJvaWRQaG90by5wcm90b3R5cGUsIHtcbiAgICBzdHlsZTogZXh0ZW5kKE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZS5zdHlsZSksIHN0eWxlKVxuICB9KTtcbiAgZXh0ZW5kKFBvbGFyb2lkUGhvdG8ucHJvdG90eXBlLCB7IGV2ZW50IH0pO1xuXG4gIFdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ3dlZXgtY2hhcnQnLCBQb2xhcm9pZFBob3RvKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtY2hhcnQvd2ViL3NyYy9pbmRleC5qcyIsImltcG9ydCBhbWFwTW9kdWxlUmVnIGZyb20gJy4vbW9kdWxlL2FtYXAnO1xuaW1wb3J0IEFtYXAgZnJvbSAnLi9jb21wb25lbnRzL2FtYXAnO1xuaW1wb3J0IEFtYXBNYXJrZXIgZnJvbSAnLi9jb21wb25lbnRzL2FtYXAtbWFya2VyJztcbmltcG9ydCBBbWFwQ2lyY2xlIGZyb20gJy4vY29tcG9uZW50cy9hbWFwLWNpcmNsZSc7XG5pbXBvcnQgQW1hcFBvbHlnb24gZnJvbSAnLi9jb21wb25lbnRzL2FtYXAtcG9seWdvbic7XG5pbXBvcnQgQW1hcFBvbHlsaW5lIGZyb20gJy4vY29tcG9uZW50cy9hbWFwLXBvbHlsaW5lJztcbmltcG9ydCBBbWFwSW5mb1dpbmRvdyBmcm9tICcuL2NvbXBvbmVudHMvYW1hcC1pbmZvLXdpbmRvdyc7XG4vLyBpbXBvcnQgVnVlQW1hcCBmcm9tICcuL3Z1ZS1hbWFwL2luZGV4JztcbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIEFtYXAsXG4gIEFtYXBNYXJrZXIsXG4gIEFtYXBDaXJjbGUsXG4gIEFtYXBQb2x5Z29uLFxuICBBbWFwUG9seWxpbmUsXG4gIEFtYXBJbmZvV2luZG93XG5dO1xuXG5mdW5jdGlvbiBpbml0KFdlZXgpIHtcbiAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wKSA9PiB7XG4gICAgY29tcC5pbml0KFdlZXgpO1xuICB9KTtcbiAgYW1hcE1vZHVsZVJlZyhXZWV4KTtcbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvaW5kZXguanMiLCJpbXBvcnQgY29tcG9uZW50cyBmcm9tICcuLi9zZXJ2aWNlL2NvbXBvbmVudHMnO1xuLy8gQU1hcCBtb2R1bGVcbmNvbnN0IGFtYXAgPSB7XG4gIC8qKiBnZXQgdXNlciBsb2FjdGlvbiBieSBicm93c2VyIGFuZCBJUFxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICogQHBhcmFtIHtmdW5jdGlvbn0gZXJyb3JDYWxsYmFja1xuICAqKi9cbiAgZ2V0VXNlckxvY2F0aW9uKG1hcFJlZiwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBnZW8gPSBuZXcgQU1hcC5HZW9sb2NhdGlvbih7XG4gICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUsXG4gICAgICB0aW1lb3V0OiAxMDAwMFxuICAgIH0pO1xuICAgIGdlby5nZXRDdXJyZW50UG9zaXRpb24oKHN0YXR1cywgcmVzKSA9PiB7XG4gICAgICBpZiAoc3RhdHVzICE9PSAnZXJyb3InKSB7XG4gICAgICAgIHNlbGYuc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFjaywge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbcmVzLnBvc2l0aW9uLmdldExuZygpLCByZXMucG9zaXRpb24uZ2V0TGF0KCldXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXN1bHQ6ICdzdWNjZXNzJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihyZXMubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIC8qKiBnZXQgZGlzdGFuY2UgYmV0d2VlbiB0d28gcG9zaXRpb25cbiAgKiBAcGFyYW0gY29vcjFcbiAgKiBAcGFyYW0gY29ycjJcbiAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgKiovXG4gIGdldExpbmVEaXN0YW5jZShjb29yMSwgY29vcjIsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbG5nbGF0ID0gbmV3IEFNYXAuTG5nTGF0KGNvb3IxWzBdLCBjb29yMVsxXSk7XG4gICAgY29uc3QgcmVzdWx0ID0gbG5nbGF0LmRpc3RhbmNlKGNvb3IyKTtcbiAgICB0aGlzLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2ssIHtcbiAgICAgIHJlc3VsdDogIXJlc3VsdCA/ICdmYWlsJyA6ICdzdWNjZXNzJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZGlzdGFuY2U6IHJlc3VsdFxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICAvKiogdGVsbCBpZiB0aGUgbWFya2VyIGluIGEgcG9seWdvblxuICAqIEBwYXJhbSBjb29yIHRoZSBtYXJrZXIgcG9zaXRpb25cbiAgKiBAcGFyYW0gcG9seWdvblJlZlxuICAqKi9cbiAgcG9seWdvbkNvbnRhaW5zTWFya2VyKGNvb3IsIHBvbHlnb25SZWYsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcG9seWdvbkNvbSA9IGNvbXBvbmVudHMuZ2V0Q29tcG9uZW50KHBvbHlnb25SZWYpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHBvbHlnb25Db20uY29udGFpbnMoY29vcik7XG4gICAgdGhpcy5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrLCB7XG4gICAgICByZXN1bHQ6ICFyZXN1bHQgPyAnZmFpbCcgOiAnc3VjY2VzcycsXG4gICAgICBkYXRhOiByZXN1bHRcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgbWV0YSA9IHtcbiAgYW1hcDogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdnZXRVc2VyTG9jYXRpb24nLFxuICAgICAgYXJnczogWydzdHJpbmcnLCAnZnVuY3Rpb24nXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdnZXRMaW5lRGlzdGFuY2UnLFxuICAgICAgYXJnczogWydhcnJheScsICdhcnJheScsICdmdW5jdGlvbiddXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAncG9seWdvbkNvbnRhaW5zTWFya2VyJyxcbiAgICAgIGFyZ3M6IFsnYXJyYXknLCAnc3RyaW5nJ11cbiAgICB9XG4gIF1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFdlZXgpIHtcbiAgV2VleC5yZWdpc3RlckFwaU1vZHVsZSgnYW1hcCcsIGFtYXAsIG1ldGEpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9tb2R1bGUvYW1hcC5qcyIsIi8vIG1hbmFnZSBjb21wb25lbnRzXG5cbmltcG9ydCBhbWFwTWFuYWdlciBmcm9tICcuL21hcC1tYW5hZ2VyJztcbmltcG9ydCB2ZW5kb3IgZnJvbSAnLi92ZW5kb3InO1xuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICByZWdpc3RlckNvbXBvbmVudChjb21wb25lbnROYW1lLCBvcHRpb25zLCBpZCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIXRoaXMuX2NvbXBvbmVudHMpIHtcbiAgICAgIHRoaXMuX2NvbXBvbmVudHMgPSB7fTtcbiAgICB9XG4gICAgYW1hcE1hbmFnZXIuYWRkUmVhZHlDYWxsYmFjaygobWFwSW5zKSA9PiB7XG4gICAgICBvcHRzLm1hcCA9IG1hcElucztcbiAgICAgIC8vIG9wdGlvbnMuY2VudGVyID0gbmV3IEFNYXAuTG5nTGF0KG9wdGlvbnMuY2VudGVyWzBdLG9wdGlvbnMuY2VudGVyWzFdKTtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHZlbmRvci5zZXRGaXJzdExldHRlclRvVXBwZXJjYXNlKGNvbXBvbmVudE5hbWUpO1xuICAgICAgaWYgKG9wdHMub2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IG5ld09mZnNldCA9IHZlbmRvci5jYWxjT2Zmc2V0KG9wdHMub2Zmc2V0WzBdLCBvcHRzLm9mZnNldFsxXSk7XG4gICAgICAgIG9wdHMub2Zmc2V0ID0gbmV3IEFNYXAuUGl4ZWwobmV3T2Zmc2V0WzBdLCBuZXdPZmZzZXRbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcyBpcyBhIHNkayBidWcgcG9seWZpbGxcbiAgICAgICAgb3B0cy5vZmZzZXQgPSBuZXcgQU1hcC5QaXhlbCgwLCAwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbXBvbmVudHNbaWRdID0gbmV3IEFNYXBbY2xhc3NOYW1lXShvcHRzKTtcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sodGhpcy5fY29tcG9uZW50c1tpZF0sIG1hcElucyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGdldENvbXBvbmVudChpZCkge1xuICAgIGlmICghdGhpcy5fY29tcG9uZW50cykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiB2ZW5kb3IuZ2V0T2JqZWN0Rmlyc3RWYWwodGhpcy5fY29tcG9uZW50cyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRzW2lkXTtcbiAgfSxcbiAgZ2V0Q29tcG9uZW50TWFwKCkge1xuICAgIHJldHVybiBhbWFwTWFuYWdlci5nZXRNYXAoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb21wb25lbnRzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvY29tcG9uZW50cy5qcyIsIi8qKiBtYXAgaW5zdGFuY2UgbWFuYWdlclxuKiAyMDE3MDIwNFxuKiovXG5sZXQgY2FsbGJhY2tTdGFjayA9IFtdO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXRNYXAoaWQsIG1hcCkge1xuICAgIGlmICghdGhpcy5fX21hcHMpIHtcbiAgICAgIHRoaXMuX19tYXBzID0ge307XG4gICAgfVxuICAgIHRoaXMuX19tYXBzW2lkXSA9IG1hcDtcbiAgICBjYWxsYmFja1N0YWNrLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICBjYihtYXApO1xuICAgIH0pO1xuICAgIGNhbGxiYWNrU3RhY2sgPSBbXTtcbiAgfSxcbiAgZ2V0TWFwKGlkKSB7XG4gICAgaWYgKCF0aGlzLl9fbWFwcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICghaWQpIHtcbiAgICAgIGlkID0gT2JqZWN0LmtleXModGhpcy5fX21hcHMpWzBdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fX21hcHNbaWRdO1xuICB9LFxuICBhZGRSZWFkeUNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2tTdGFjay5wdXNoKGNhbGxiYWNrKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9zZXJ2aWNlL21hcC1tYW5hZ2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdlbmdlcmF0ZVJhbmRvbUlkKHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggKyAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKS50b1N0cmluZygpLnN1YnN0cmluZyg5LCAzKSkgKyBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMTAwMDAsIDEwKTtcbiAgfSxcbiAgc2V0Rmlyc3RMZXR0ZXJUb1VwcGVyY2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnN1YnN0cigwLCAxKS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cmluZygxKTtcbiAgfSxcbiAgZ2V0T2JqZWN0Rmlyc3RWYWwob2JqKSB7XG4gICAgaWYodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvYmpbT2JqZWN0LmtleXMob2JqKVswXV1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIC8vIG9mZnNldCBwb2x5ZmlsbFxuICBjYWxjT2Zmc2V0KHgsIHkpIHtcbiAgICB2YXIgaGFsZlkgPSB5IC8gMjtcbiAgICB2YXIgbmV3WCA9IHggLSBoYWxmWTtcbiAgICByZXR1cm4gW25ld1gsIHldO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvdmVuZG9yLmpzIiwiaW1wb3J0IG1hcmtlck1hbmFnZSBmcm9tICcuLi9zZXJ2aWNlL21hcmtlcic7XG5pbXBvcnQgbWFwTG9hZGVyIGZyb20gJy4uL3NlcnZpY2UvbWFwLWxvYWRlcic7XG5pbXBvcnQgYW1hcE1hbmFnZXIgZnJvbSAnLi4vc2VydmljZS9tYXAtbWFuYWdlcic7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4uL3NlcnZpY2UvdmVuZG9yJztcblxuXG5jb25zdCBsb2FkaW5nR2lmID0gJ2h0dHA6Ly9pbWcxLnZ1ZWQudmFudGhpbmsuY24vdnVlZDIxMTNlYWEwNjJhYmJhZWUwNDQxZDE2YTc4NDhkMjNlLmdpZic7XG5jb25zdCBwYXJhbXMgPSB7XG4gIGNlbnRlcjogdW5kZWZpbmVkLFxuICB6b29tOiAxMSxcbiAgdG9vbGJhcjogdHJ1ZSxcbiAgc2NhbGU6IGZhbHNlLFxuICBnZW9sb2NhdGlvbjogZmFsc2UsXG4gIHJlc2l6ZUVuYWJsZTogdHJ1ZSxcbiAgc2VhcmNoOiBmYWxzZVxufTtcbmNvbnN0IGV2ZW50cyA9IFtcbiAgJ3pvb21jaGFuZ2UnLFxuICAnZHJhZ2VuZCdcbl07XG4vLyBwcm90b3R5cGUgbWV0aG9kcy5cbmNvbnN0IHByb3RvID0ge1xuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5tYXB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5tYXB3cmFwLmlkID0gdmVuZG9yLmdlbmdlcmF0ZVJhbmRvbUlkKCdtYXAnKTtcbiAgICB0aGlzLm1hcHdyYXAuYXBwZW5kKHRoaXMucmVuZGVyTG9hZGluZ1NwaW5uZXIoKSk7XG4gICAgcmV0dXJuIHRoaXMubWFwd3JhcDtcbiAgfSxcbiAgcmVuZGVyTG9hZGluZ1NwaW5uZXIoKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSA2MDtcbiAgICBlbC5zdHlsZS5tYXJnaW4gPSAnMjAgYXV0byc7XG4gICAgZWwuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSBsb2FkaW5nR2lmO1xuICAgIGVsLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgn6auY5b635Zyw5Zu+5Yqg6L295LitLi4uLicpKTtcbiAgICBlbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICByZXR1cm4gZWw7XG4gIH0sXG4gIHJlYWR5KCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICh3aW5kb3cuQU1hcCkge1xuICAgICAgdGhpcy5tYXAgPSBuZXcgQU1hcC5NYXAodGhpcy5tYXB3cmFwLmlkLCBwYXJhbXMpO1xuICAgICAgQU1hcC5wbHVnaW4oWydBTWFwLlRvb2xCYXInLCAnQU1hcC5HZW9sb2NhdGlvbiddLCAoKSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXMuc2NhbGUpIHtcbiAgICAgICAgICBzZWxmLm1hcC5hZGRDb250cm9sKG5ldyBBTWFwLlRvb2xCYXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5nZW9sb2NhdGlvbikge1xuICAgICAgICAgIHNlbGYubWFwLmFkZENvbnRyb2wobmV3IEFNYXAuR2VvbG9jYXRpb24oKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHBhcmFtcy5zZWFyY2gpIHtcbiAgICAgICAgQU1hcC5zZXJ2aWNlKCdBTWFwLlBsYWNlU2VhcmNoJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGxhY2VTZWFyY2ggPSBuZXcgQU1hcC5QbGFjZVNlYXJjaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgICAgYW1hcE1hbmFnZXIuaW5pdE1hcCh0aGlzLm1hcHdyYXAuaWQsIHRoaXMubWFwKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgbWFya2VyTWFuYWdlLnJlbW92ZU1ha2VyKGNoaWxkLmRhdGEpO1xuICB9LFxuICBpbml0RXZlbnRzKCkge1xuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudE5hbWUpID0+IHtcbiAgICAgIEFNYXAuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXAsIGV2ZW50TmFtZSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnROYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBhdHRyID0ge1xuICBjZW50ZXIodmFsKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoID09PSAyKSB7XG4gICAgICBwYXJhbXMuY2VudGVyID0gdmFsO1xuICAgICAgaWYgKHdpbmRvdy5BTWFwKSB7XG4gICAgICAgIHRoaXMubWFwLnNldENlbnRlcihwYXJhbXMuY2VudGVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25zdCBnZW8gPSBuZXcgQU1hcC5HZW9sb2NhdGlvbih7XG4gICAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgIGdlby5nZXRDdXJyZW50UG9zaXRpb24oKTtcbiAgICAgIEFNYXAuZXZlbnQuQU1hcC5ldmVudC5hZGRMaXN0ZW5lcihnZW8sICdjb21wbGV0ZScsIChkYXRhKSA9PiB7XG4gICAgICAgIHBhcmFtcy5jZW50ZXIgPSBbZGF0YS5wb3NpdGlvbi5nZXRMbmcoKSwgZGF0YS5wb3NpdGlvbi5nZXRMYXQoKV07XG4gICAgICAgIHNlbGYubWFwLnNldENlbnRlcihwYXJhbXMuY2VudGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgem9vbSh2YWwpIHtcbiAgICBpZiAoL15bMC05XSskLy50ZXN0KHZhbCkpIHtcbiAgICAgIHBhcmFtcy56b29tID0gdmFsO1xuICAgIH1cbiAgICBpZiAod2luZG93LkFNYXApIHtcbiAgICAgIHRoaXMubWFwLnNldFpvb20ocGFyYW1zLnpvb20pO1xuICAgIH1cbiAgfSxcbiAgc2NhbGUodmFsKSB7XG4gICAgcGFyYW1zLnNjYWxlID0gdmFsO1xuICB9LFxuICBnZW9sb2NhdGlvbih2YWwpIHtcbiAgICBwYXJhbXMuZ2VvbG9jYXRpb24gPSB2YWw7XG4gIH0sXG4gIHNka0tleSh2YWwpIHtcbiAgICBsZXQga2V5ID0gJyc7XG4gICAgaWYgKHZhbCkge1xuICAgICAga2V5ID0gdmFsLmg1O1xuICAgIH1cbiAgICBtYXBMb2FkZXIubG9hZCh7XG4gICAgICBrZXk6IGtleVxuICAgIH0sIHRoaXMubWFwd3JhcCwgKCkgPT4gdGhpcy5yZWFkeSgpKTtcbiAgfSxcbiAgc2VhcmNoKHZhbCkge1xuICAgIHBhcmFtcy5zZWFyY2ggPSB2YWw7XG4gICAgaWYgKHdpbmRvdy5BTWFwKSB7XG4gICAgICAgIFxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZXZlbnQgPSB7XG4gIHpvb21jaGFuZ2U6IHtcbiAgICBleHRyYSgpIHtcbiAgICAgIHJldHVybiB7IGlzU3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cbiAgfSxcbiAgZHJhZ2VuZDoge1xuICAgIGV4dHJhKCkge1xuICAgICAgcmV0dXJuIHsgaXNTdWNjZXNzOiB0cnVlIH07XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0KFdlZXgpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gV2VleC5Db21wb25lbnQ7XG4gIGNvbnN0IGV4dGVuZCA9IFdlZXgudXRpbHMuZXh0ZW5kO1xuXG4gIGZ1bmN0aW9uIEFtYXAoZGF0YSkge1xuICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9XG4gIEFtYXAucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlKTtcbiAgZXh0ZW5kKEFtYXAucHJvdG90eXBlLCBwcm90byk7XG4gIGV4dGVuZChBbWFwLnByb3RvdHlwZSwgeyBhdHRyIH0pO1xuICBleHRlbmQoQW1hcC5wcm90b3R5cGUsIHtcbiAgICBzdHlsZTogZXh0ZW5kKE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZS5zdHlsZSksIHt9KVxuICB9KTtcbiAgZXh0ZW5kKEFtYXAucHJvdG90eXBlLCB7IGV2ZW50IH0pO1xuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWFtYXAnLCBBbWFwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLmpzIiwiLy8gYSBsaWIgdG8gbWFuYWdlIGFsbCBtYXJrZXJcbmltcG9ydCBhbWFwTWFuYWdlciBmcm9tICcuL21hcC1tYW5hZ2VyJztcbmltcG9ydCB2ZW5kb3IgZnJvbSAnLi92ZW5kb3InO1xuXG5jb25zdCBtYXJrZXJzID0ge307XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hhbmdlTWFya2VyKGFyciwgbWFwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhcnJbaV07XG4gICAgICBjb25zdCBtYXJrZXIgPSB0aGlzLmZpbmRNYXJrZXIoZGF0YSk7XG4gICAgICBpZiAoIW1hcmtlcikge1xuICAgICAgICB0aGlzLmFkZE1hcmtlcihkYXRhLCBtYXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVNYXJrZXIoZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBhZGRNYXJrZXIoZGF0YSkge1xuICAgIGNvbnN0IG1hcCA9IGFtYXBNYW5hZ2VyLmdldE1hcCgpO1xuICAgIGlmICghbWFwKSB7XG4gICAgICByZXR1cm4gYW1hcE1hbmFnZXIuYWRkUmVhZHlDYWxsYmFjaygobWFwSW5zKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0TWFya2VyKGRhdGEsIG1hcElucyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2V0TWFya2VyKGRhdGEsIG1hcCk7XG4gIH0sXG4gIHNldE1hcmtlcihkYXRhLCBtYXApIHtcbiAgICBsZXQgaWNvbiA9IG51bGw7XG4gICAgaWYgKGRhdGEuaWNvbikge1xuICAgICAgaWNvbiA9IG5ldyBBTWFwLkljb24oe1xuICAgICAgICBpbWFnZTogZGF0YS5pY29uLFxuICAgICAgICBzaXplOiBuZXcgQU1hcC5TaXplKDY0LCA2NClcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBtYXJrZXIgPSBuZXcgQU1hcC5NYXJrZXIoe1xuICAgICAgcG9zaXRpb246IGRhdGEucG9zaXRpb24sXG4gICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgIGljb246IGljb24sXG4gICAgICBtYXA6IG1hcCxcbiAgICB9KTtcbiAgICBtYXJrZXJzW3RoaXMuX19nZXRNaWQoZGF0YSldID0gbWFya2VyO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoZGF0YS5ldmVudHMsIG1hcmtlcik7XG4gIH0sXG4gIHJlbW92ZU1ha2VyKGRhdGEpIHtcbiAgICBjb25zdCBtYXJrZXIgPSB0aGlzLmZpbmRNYXJrZXIoZGF0YSk7XG4gICAgbWFya2VyLnNldE1hcChudWxsKTtcbiAgfSxcbiAgdXBkYXRlTWFya2VyKGRhdGEsIGF0dHIsIHZhbCkge1xuICAgIGNvbnN0IG1hcmtlciA9IHRoaXMuZmluZE1hcmtlcihkYXRhKTtcbiAgICBpZiAoIW1hcmtlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBtZXRob2QgPSB2ZW5kb3Iuc2V0Rmlyc3RMZXR0ZXJUb1VwcGVyY2FzZShhdHRyKTtcbiAgICBtYXJrZXJbJ3NldCcgKyBtZXRob2RdKHZhbCk7XG4gIH0sXG4gIHJlZ2lzdGVyRXZlbnRzKGV2ZW50cywgbWFya2VyKSB7XG4gICAgaWYgKHR5cGVvZiBldmVudHMgPT09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBldmVudHMpIHtcbiAgICAgICAgQU1hcC5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsIGtleSwgZXZlbnRzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcmVtb3ZlTWFya2VyKGRhdGEpIHtcbiAgICBsZXQgbWFya2VyID0gdGhpcy5maW5kTWFya2VyKGRhdGEpO1xuICAgIGlmIChtYXJrZXIpIHtcbiAgICAgIG1hcmtlci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgIG1hcmtlciA9IG51bGw7XG4gICAgfVxuICB9LFxuICBmaW5kTWFya2VyKGRhdGEpIHtcbiAgICBjb25zdCBtaWQgPSB0aGlzLl9fZ2V0TWlkKGRhdGEpO1xuICAgIHJldHVybiBtYXJrZXJzW21pZF07XG4gIH0sXG4gIF9fZ2V0TWlkKGRhdGEpIHtcbiAgICByZXR1cm4gJ21pZC0nICsgZGF0YS5yZWYgfHwgZGF0YS5wb3NpdGlvbi5qb2luKCctJyk7XG4gIH0sXG4gIF9faXNNYWtlcihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqLkNMQVNTX05BTUUgPT09ICdBTWFwLk1hcmtlcic7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9tYXJrZXIuanMiLCIvLyBsb2FkIG1hcCBzZGtcbmNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICBrZXk6ICcnLFxuICB2OiAnMS4zJyxcbiAgdXJsOiAnaHR0cHM6Ly93ZWJhcGkuYW1hcC5jb20vbWFwcycsXG4gIGNhbGxiYWNrOiAnYW1hcEluaXRDb21wb25lbnQnXG59O1xuY29uc3QgZ2VuZ2VyYXRlU2NyaXB0VXJsID0gZnVuY3Rpb24gKG9iaikge1xuICBjb25zdCBwYXJhbUFyciA9IFtdO1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAoa2V5ICE9PSAndXJsJykge1xuICAgICAgcGFyYW1BcnIucHVzaChlbmNvZGVVUkkoa2V5ICsgJz0nICsgb2JqW2tleV0pKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgdXJsID0gb2JqLnVybCArPSAnPycgKyBwYXJhbUFyci5qb2luKCcmJyk7XG4gIHJldHVybiB1cmw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbG9hZChjb25maWcsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBuZXdDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX0NPTkZJRywgY29uZmlnKTtcbiAgICBjb25zdCBsaWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBsaWIuYXN5bmMgPSB0cnVlO1xuICAgIGxpYi5kZWZlciA9IHRydWU7XG4gICAgbGliLnNyYyA9IGdlbmdlcmF0ZVNjcmlwdFVybChuZXdDb25maWcpO1xuICAgIGNvbnNvbGUubG9nKGxpYi5zcmMpO1xuICAgIHdpbmRvdy5hbWFwSW5pdENvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5tYXBsb2FkZWQgPSB0cnVlO1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGliKTtcbiAgICB0aGlzLmxvYWRUaW1lb3V0KGNvbnRhaW5lcik7XG4gIH0sXG4gIGxvYWRUaW1lb3V0KHdyYXApIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghd2luZG93LkFtYXApIHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ+mHjeaWsOWKoOi9vScpKTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB3cmFwLmNoaWxkTm9kZXNbMF0ucmVtb3ZlKCk7XG4gICAgICAgIHdyYXAuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgfVxuICAgIH0sIDEwMDAwKTtcbiAgfVxuXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvbWFwLWxvYWRlci5qcyIsImltcG9ydCBtYXJrZXJNYW5hZ2VyIGZyb20gJy4uL3NlcnZpY2UvbWFya2VyJztcblxuY29uc3QgcGFyYW1zID0ge1xuICBwb2lzdGlvbjogW10sXG4gIHRpdGxlOiAnJyxcbiAgaWNvbjogJydcbn07XG5cbi8vIHByb3RvdHlwZSBtZXRob2RzLlxuY29uc3QgcHJvdG8gPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5hdHRyO1xuICAgIG1hcmtlck1hbmFnZXIuYWRkTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLFxuICAgICAgaWNvbjogZGF0YS5pY29uLFxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICByZWY6IHRoaXMuZGF0YS5yZWYsXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtYXA6IHdpbmRvdy5BbWFwXG4gICAgfSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIHVwZGF0ZUF0dHJzKGF0dHJzKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGF0dHJzKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgcmVmOiB0aGlzLmRhdGEucmVmXG4gICAgfTtcbiAgICBrZXlzLmZvckVhY2goKGspID0+IHtcbiAgICAgIG1hcmtlck1hbmFnZXIudXBkYXRlTWFya2VyKGRhdGEsIGssIGF0dHJzW2tdKTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgYXR0ciA9IHtcbiAgcG9zaXRpb24odmFsKSB7XG4gICAgY29uc29sZS5sb2codmFsKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGggPT09IDIpIHtcbiAgICAgIHBhcmFtcy5wb3NpdGlvbiA9IHZhbDtcbiAgICB9XG4gIH0sXG4gIGljb24odmFsKSB7XG4gICAgcGFyYW1zLmljb24gPSB2YWw7XG4gIH0sXG4gIHRpdGxlKHZhbCkge1xuICAgIHBhcmFtcy50aXRsZSA9IHZhbDtcbiAgfVxufTtcblxuY29uc3QgZXZlbnQgPSB7XG4gIGNsaWNrOiB7XG4gICAgZXh0cmEoKSB7XG4gICAgICByZXR1cm4geyBpc1N1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcE1ha2VyKGRhdGEpIHtcbiAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfVxuICBBbWFwTWFrZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlKTtcbiAgZXh0ZW5kKEFtYXBNYWtlci5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXBNYWtlci5wcm90b3R5cGUsIHsgYXR0ciB9KTtcbiAgZXh0ZW5kKEFtYXBNYWtlci5wcm90b3R5cGUsIHsgZXZlbnQgfSk7XG4gIFdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ3dlZXgtYW1hcC1tYXJrZXInLCBBbWFwTWFrZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9jb21wb25lbnRzL2FtYXAtbWFya2VyLmpzIiwiaW1wb3J0IGNvbXBvbmVudHMgZnJvbSAnLi4vc2VydmljZS9jb21wb25lbnRzJztcbmltcG9ydCB2ZW5kb3IgZnJvbSAnLi4vc2VydmljZS92ZW5kb3InO1xuXG5jb25zdCBjb21wb25lbnROYW1lID0gJ2NpcmNsZSc7XG4vLyBwcm90b3R5cGUgbWV0aG9kcy5cbmNvbnN0IHByb3RvID0ge1xuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEuYXR0cjtcbiAgICBjb25zdCBjb21JZCA9IGRhdGEucmVmIHx8IHZlbmRvci5nZW5nZXJhdGVSYW5kb21JZChjb21wb25lbnROYW1lKTtcbiAgICBpZiAoZGF0YS5jZW50ZXIgJiYgQXJyYXkuaXNBcnJheShkYXRhLmNlbnRlcikpIHtcbiAgICAgIGNvbXBvbmVudHMucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50TmFtZSwge1xuICAgICAgICBjZW50ZXI6IGRhdGEuY2VudGVyLFxuICAgICAgICByYWRpdXM6IGRhdGEucmFkaXVzLFxuICAgICAgICBmaWxsQ29sb3I6IGRhdGEuZmlsbENvbG9yLFxuICAgICAgICBmaWxPcGFjaXR5OiBkYXRhLmZpbGxPcGFjaXR5LFxuICAgICAgICBzdHJva2VXZWlnaHQ6IGRhdGEuc3Ryb2tlV2lkdGgsXG4gICAgICAgIHN0cm9rZU9wYWNpdHk6IGRhdGEuc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgc3Ryb2tlQ29sb3I6IGRhdGEuc3Ryb2tlQ29sb3IsXG4gICAgICAgIHN0cm9rZVN0eWxlOiBkYXRhLnN0cm9rZVN0eWxlLFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjbGljaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sIGNvbUlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdhdHRyaWJ1dGUgY2VudGVyIG11c3QgYmUgYW4gYXJyYXkuJyk7XG4gICAgfVxuICAgIHRoaXMuX2NvbUlkID0gY29tSWQ7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn07XG5cbmNvbnN0IGF0dHIgPSB7XG4gIGNlbnRlcih2YWwpIHtcbiAgICBjb25zdCBjb20gPSBjb21wb25lbnRzLmdldENvbXBvbmVudCh0aGlzLl9jb21JZCk7XG4gICAgaWYgKGNvbSkge1xuICAgICAgY29tLnNldENlbnRlcih2YWwpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZXZlbnQgPSB7XG4gIGNsaWNrOiB7XG4gICAgZXh0cmEoKSB7XG4gICAgICByZXR1cm4geyBpc1N1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcENpcmNsZShkYXRhKSB7XG4gICAgQ29tcG9uZW50LmNhbGwodGhpcywgZGF0YSk7XG4gIH1cbiAgQW1hcENpcmNsZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUpO1xuICBleHRlbmQoQW1hcENpcmNsZS5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXBDaXJjbGUucHJvdG90eXBlLCB7IGF0dHIgfSk7XG4gIGV4dGVuZChBbWFwQ2lyY2xlLnByb3RvdHlwZSwgeyBldmVudCB9KTtcbiAgV2VleC5yZWdpc3RlckNvbXBvbmVudCgnd2VleC1hbWFwLWNpcmNsZScsIEFtYXBDaXJjbGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9jb21wb25lbnRzL2FtYXAtY2lyY2xlLmpzIiwiaW1wb3J0IGNvbXBvbmVudHMgZnJvbSAnLi4vc2VydmljZS9jb21wb25lbnRzJztcbmltcG9ydCB2ZW5kb3IgZnJvbSAnLi4vc2VydmljZS92ZW5kb3InO1xuXG5jb25zdCBjb21wb25lbnROYW1lID0gJ3BvbHlnb24nO1xuLy8gcHJvdG90eXBlIG1ldGhvZHMuXG5jb25zdCBwcm90byA9IHtcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLmF0dHI7XG4gICAgY29uc3QgY29tSWQgPSB0aGlzLmRhdGEucmVmIHx8IHZlbmRvci5nZW5nZXJhdGVSYW5kb21JZChjb21wb25lbnROYW1lKTtcbiAgICBpZiAoZGF0YS5wYXRoICYmIEFycmF5LmlzQXJyYXkoZGF0YS5wYXRoKSkge1xuICAgICAgY29tcG9uZW50cy5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnROYW1lLCB7XG4gICAgICAgIHBhdGg6IGRhdGEucGF0aCxcbiAgICAgICAgZmlsbENvbG9yOiBkYXRhLmZpbGxDb2xvcixcbiAgICAgICAgZmlsT3BhY2l0eTogZGF0YS5maWxsT3BhY2l0eSxcbiAgICAgICAgc3Ryb2tlV2VpZ2h0OiBkYXRhLnN0cm9rZVdpZHRoLFxuICAgICAgICBzdHJva2VPcGFjaXR5OiBkYXRhLnN0cm9rZU9wYWNpdHksXG4gICAgICAgIHN0cm9rZUNvbG9yOiBkYXRhLnN0cm9rZUNvbG9yLFxuICAgICAgICBzdHJva2VTdHlsZTogZGF0YS5zdHJva2VTdHlsZSxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY2xpY2snKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LCBjb21JZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignYXR0cmlidXRlIHBhdGggbXVzdCBiZSBhbiBhcnJheS4nKTtcbiAgICB9XG4gICAgdGhpcy5fY29tSWQgPSBjb21JZDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufTtcblxuY29uc3QgYXR0ciA9IHtcblxufTtcblxuY29uc3QgZXZlbnQgPSB7XG4gIGNsaWNrOiB7XG4gICAgZXh0cmEoKSB7XG4gICAgICByZXR1cm4geyBpc1N1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcFBvbHlnb24oZGF0YSkge1xuICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9XG4gIEFtYXBQb2x5Z29uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChBbWFwUG9seWdvbi5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXBQb2x5Z29uLnByb3RvdHlwZSwgeyBhdHRyIH0pO1xuICBleHRlbmQoQW1hcFBvbHlnb24ucHJvdG90eXBlLCB7IGV2ZW50IH0pO1xuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWFtYXAtcG9seWdvbicsIEFtYXBQb2x5Z29uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLXBvbHlnb24uanMiLCJpbXBvcnQgY29tcG9uZW50cyBmcm9tICcuLi9zZXJ2aWNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHZlbmRvciBmcm9tICcuLi9zZXJ2aWNlL3ZlbmRvcic7XG5cbmNvbnN0IGNvbXBvbmVudE5hbWUgPSAncG9seWxpbmUnO1xuLy8gcHJvdG90eXBlIG1ldGhvZHMuXG5jb25zdCBwcm90byA9IHtcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLmF0dHI7XG4gICAgY29uc3QgY29tSWQgPSBkYXRhLnJlZiB8fCB2ZW5kb3IuZ2VuZ2VyYXRlUmFuZG9tSWQoY29tcG9uZW50TmFtZSk7XG4gICAgaWYgKGRhdGEucGF0aCAmJiBBcnJheS5pc0FycmF5KGRhdGEucGF0aCkpIHtcbiAgICAgIGNvbXBvbmVudHMucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50TmFtZSwge1xuICAgICAgICBwYXRoOiBkYXRhLnBhdGgsXG4gICAgICAgIHN0cm9rZVdlaWdodDogZGF0YS5zdHJva2VXaWR0aCxcbiAgICAgICAgc3Ryb2tlT3BhY2l0eTogZGF0YS5zdHJva2VPcGFjaXR5LFxuICAgICAgICBzdHJva2VDb2xvcjogZGF0YS5zdHJva2VDb2xvcixcbiAgICAgICAgc3Ryb2tlU3R5bGU6IGRhdGEuc3Ryb2tlU3R5bGUsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NsaWNrJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSwgY29tSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2F0dHJpYnV0ZSBwYXRoIG11c3QgYmUgYW4gYXJyYXkuJyk7XG4gICAgfVxuICAgIHRoaXMuX2NvbUlkID0gY29tSWQ7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn07XG5cbmNvbnN0IGF0dHIgPSB7XG5cbn07XG5cbmNvbnN0IGV2ZW50ID0ge1xuICBjbGljazoge1xuICAgIGV4dHJhKCkge1xuICAgICAgcmV0dXJuIHsgaXNTdWNjZXNzOiB0cnVlIH07XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0KFdlZXgpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gV2VleC5Db21wb25lbnQ7XG4gIGNvbnN0IGV4dGVuZCA9IFdlZXgudXRpbHMuZXh0ZW5kO1xuXG4gIGZ1bmN0aW9uIEFtYXBQb2x5Z29uKGRhdGEpIHtcbiAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfVxuICBBbWFwUG9seWdvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUpO1xuICBleHRlbmQoQW1hcFBvbHlnb24ucHJvdG90eXBlLCBwcm90byk7XG4gIGV4dGVuZChBbWFwUG9seWdvbi5wcm90b3R5cGUsIHsgYXR0ciB9KTtcbiAgZXh0ZW5kKEFtYXBQb2x5Z29uLnByb3RvdHlwZSwgeyBldmVudCB9KTtcbiAgV2VleC5yZWdpc3RlckNvbXBvbmVudCgnd2VleC1hbWFwLXBvbHlsaW5lJywgQW1hcFBvbHlnb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9jb21wb25lbnRzL2FtYXAtcG9seWxpbmUuanMiLCJpbXBvcnQgY29tcG9uZW50cyBmcm9tICcuLi9zZXJ2aWNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHZlbmRvciBmcm9tICcuLi9zZXJ2aWNlL3ZlbmRvcic7XG5cbmNvbnN0IGNvbXBvbmVudE5hbWUgPSAnSW5mb1dpbmRvdyc7XG4vLyBwcm90b3R5cGUgbWV0aG9kcy5cbmNvbnN0IHByb3RvID0ge1xuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vZGUuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5hdHRyO1xuICAgIGNvbnN0IGNvbUlkID0gdGhpcy5kYXRhLnJlZiB8fCB2ZW5kb3IuZ2VuZ2VyYXRlUmFuZG9tSWQoY29tcG9uZW50TmFtZSk7XG4gICAgdGhpcy5hZGRBcHBlbmRIYW5kbGVyKCgpID0+IHtcbiAgICAgIGlmIChkYXRhLnBvc2l0aW9uICYmIEFycmF5LmlzQXJyYXkoZGF0YS5wb3NpdGlvbikpIHtcbiAgICAgICAgY29tcG9uZW50cy5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnROYW1lLCB7XG4gICAgICAgICAgcG9zaXRpb246IGRhdGEucG9zaXRpb24sXG4gICAgICAgICAgb2Zmc2V0OiBkYXRhLm9mZnNldCxcbiAgICAgICAgICBpc0N1c3RvbTogdHJ1ZSxcbiAgICAgICAgfSwgY29tSWQsIChjb20sIG1hcCkgPT4ge1xuICAgICAgICAgIGxldCBjb250ZW50ID0gZGF0YS5jb250ZW50O1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUuaW5uZXJIVE1MLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLm5vZGUuaW5uZXJIVE1MO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgY29tLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChkYXRhLm9wZW4gJiYgY29udGVudCkge1xuICAgICAgICAgICAgY29tLm9wZW4obWFwLCB0aGlzLmRhdGEuYXR0ci5wb3NpdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbS5jbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2F0dHJpYnV0ZSBjZW50ZXIgbXVzdCBiZSBhbiBhcnJheS4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9jb21JZCA9IGNvbUlkO1xuICAgIHJldHVybiBub2RlO1xuICB9XG59O1xuXG5jb25zdCBhdHRyID0ge1xuICBvcGVuKHZhbCkge1xuICAgIGNvbnN0IGNvbSA9IGNvbXBvbmVudHMuZ2V0Q29tcG9uZW50KHRoaXMuZGF0YS5yZWYpO1xuICAgIGNvbnN0IG1hcCA9IGNvbXBvbmVudHMuZ2V0Q29tcG9uZW50TWFwKCk7XG4gICAgaWYgKGNvbSkge1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBjb20ub3BlbihtYXAsIHRoaXMuZGF0YS5hdHRyLnBvc2l0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbS5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZXZlbnQgPSB7XG59O1xuXG5mdW5jdGlvbiBpbml0KFdlZXgpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gV2VleC5Db21wb25lbnQ7XG4gIGNvbnN0IGV4dGVuZCA9IFdlZXgudXRpbHMuZXh0ZW5kO1xuXG4gIGZ1bmN0aW9uIEFtYXBJbmZvV2luZG93KGRhdGEpIHtcbiAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfVxuICBBbWFwSW5mb1dpbmRvdy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUpO1xuICBleHRlbmQoQW1hcEluZm9XaW5kb3cucHJvdG90eXBlLCBwcm90byk7XG4gIGV4dGVuZChBbWFwSW5mb1dpbmRvdy5wcm90b3R5cGUsIHsgYXR0ciB9KTtcbiAgZXh0ZW5kKEFtYXBJbmZvV2luZG93LnByb3RvdHlwZSwgeyBldmVudCB9KTtcbiAgV2VleC5yZWdpc3RlckNvbXBvbmVudCgnd2VleC1hbWFwLWluZm8td2luZG93JywgQW1hcEluZm9XaW5kb3cpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9jb21wb25lbnRzL2FtYXAtaW5mby13aW5kb3cuanMiLCIgLyoqXG4gICogSW5pdCB3ZWV4IGluc3RhbmNlIGRlcGVuZGluZyBvbiB0aGUgdXJsIHBhcmFtcy5cbiAgKiBUaGVyZSBhcmUgdGhyZWUgd2F5cyB0byBsb2FkIHdlZXggYnVuZGxlcywgZGVwZW5kcyBvbiB0aGVcbiAgKiBwYXJhbWV0ZXIgJ2xvYWRlcicgaW4gdGhlIHVybDpcbiAgKlxuICAqICAgKyB4aHI6IHVzZSBYTUxIdHRwUmVxdWVzdC4gUGFyYW1ldGVyICdwYWdlJyBzaG91bGQgYmVcbiAgKiAgIHRoZSBidW5kbGUncyB1cmwuXG4gICogICArIHNvdXJjZTogdXNlIHRoZSB0cmFuc2Zvcm1lZCBjb2RlIGl0c2VsZi4gJ3BhZ2UnIHNob3VsZFxuICAqICAgYmUgdGhlIHRyYW5zZm9ybWVkIHdlZXggYnVuZGxlLlxuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IGJ1bmRsZSAtIEl0IGhhcyBkaWZmZXJlbnQgbWVhbmluZyBkZXBlbmRzIG9uXG4gICogICB0aGUgdHlwZSBvZiBsb2FkZXIuXG4gICovXG4gIFxuXG4gIFxuIChmdW5jdGlvbiAoKSB7XG4gICBmdW5jdGlvbiBnZXRVcmxQYXJhbShrZXkpIHtcbiAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoJ1s/fCZdJyArIGtleSArICc9KFteJl0rKScpXG4gICAgIHZhciBtYXRjaCA9IGxvY2F0aW9uLnNlYXJjaC5tYXRjaChyZWcpXG4gICAgIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXVxuICAgfVxuICAgdmFyIGxvYWRlciA9IGdldFVybFBhcmFtKCdsb2FkZXInKSB8fCAneGhyJztcbiAgIHZhciBwYWdlID0gZ2V0VXJsUGFyYW0oJ3BhZ2UnKSB8fCAnLi4vZGlzdC9pbmRleC5qcyc7XG4gICB3aW5kb3cud2VleC5pbml0KHtcbiAgICAgYXBwSWQ6IGxvY2F0aW9uLmhyZWZcbiAgICAgLCBsb2FkZXI6IGxvYWRlclxuICAgICAsIHNvdXJjZTogcGFnZVxuICAgICAsIHJvb3RJZDogJ3dlZXgnXG4gICB9KVxuIH0pKCk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYi9qcy9pbml0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==