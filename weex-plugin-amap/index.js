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
	module.exports = __webpack_require__(7);


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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _marker = __webpack_require__(3);
	
	var _marker2 = _interopRequireDefault(_marker);
	
	var _mapLoader = __webpack_require__(4);
	
	var _mapLoader2 = _interopRequireDefault(_mapLoader);
	
	var _vendor = __webpack_require__(5);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	var _amap = __webpack_require__(6);
	
	var _amap2 = _interopRequireDefault(_amap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultAttr = {
	  zoom: 13,
	  resizeEnable: true
	};
	var loadingGif = 'http://img1.vued.vanthink.cn/vued2113eaa062abbaee0441d16a7848d23e.gif';
	var params = {
	  center: undefined,
	  zoom: 11,
	  toolbar: true,
	  scale: false,
	  geolocation: false,
	  resizeEnable: true
	};
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
	      _marker2.default.changeMarker(markers, this.map);
	      this.mapInstance = this.map;
	    }
	  }
	};
	
	var markers = [];
	
	var attr = {
	  center: function center(val) {
	    if (Array.isArray(val) && val.length == 2) {
	      params.center = val;
	      if (window.AMap) {
	        this.map.setCenter(params.center);
	      }
	    }
	
	    if (typeof val == 'number') {
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
	    var _this = this;
	
	    var key = '';
	    if (val) {
	      key = val.h5;
	    }
	    _mapLoader2.default.load({
	      key: key
	    }, this.mapwrap, function () {
	      return _this.ready();
	    });
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
/* 3 */
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
	    markers[this.__getMid(data)] = marker;
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
	    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object' && obj.CLASS_NAME == 'AMap.Marker';
	  }
	};

/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  gengerateRandomId: function gengerateRandomId(prefix) {
	    return prefix + new Date().getTime().toString().substring(9, 3) + parseInt(Math.random() * 10000);
	  }
	};

/***/ },
/* 6 */
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
/* 7 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTk1ODk1MWNmMGQ1OGEyOWQ5Y2UiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9wbHVnaW5fYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1wbHVnaW4tYW1hcC93ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LXBsdWdpbi1hbWFwL3dlYi9zZXJ2aWNlL21hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViL3NlcnZpY2UvbWFwLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViL3NlcnZpY2UvdmVuZG9yLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1wbHVnaW4tYW1hcC93ZWIvbW9kdWxlL2FtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2pzL2luaXQuanMiXSwibmFtZXMiOlsid2luZG93Iiwid2VleCIsImluc3RhbGwiLCJkZWZhdWx0QXR0ciIsInpvb20iLCJyZXNpemVFbmFibGUiLCJsb2FkaW5nR2lmIiwicGFyYW1zIiwiY2VudGVyIiwidW5kZWZpbmVkIiwidG9vbGJhciIsInNjYWxlIiwiZ2VvbG9jYXRpb24iLCJwcm90byIsImNyZWF0ZSIsIm1hcHdyYXAiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImdlbmdlcmF0ZVJhbmRvbUlkIiwiYXBwZW5kIiwicmVuZGVyTG9hZGluZ1NwaW5uZXIiLCJlbCIsInN0eWxlIiwiaGVpZ2h0IiwibWFyZ2luIiwidGV4dEFsaWduIiwiaW1hZ2UiLCJzcmMiLCJhcHBlbmRDaGlsZCIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsInJlYWR5Iiwic2VsZiIsIkFNYXAiLCJtYXAiLCJNYXAiLCJwbHVnaW4iLCJhZGRDb250cm9sIiwiVG9vbEJhciIsIkdlb2xvY2F0aW9uIiwiY2hhbmdlTWFya2VyIiwibWFya2VycyIsIm1hcEluc3RhbmNlIiwiYXR0ciIsInZhbCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInNldENlbnRlciIsImdlbyIsImVuYWJsZUhpZ2hBY2N1cmFjeSIsImdldEN1cnJlbnRQb3NpdGlvbiIsImV2ZW50IiwiYWRkTGlzdGVuZXIiLCJkYXRhIiwicG9zaXRpb24iLCJnZXRMbmciLCJnZXRMYXQiLCJ0ZXN0Iiwic2V0Wm9vbSIsIm1hcmtlciIsInNka0tleSIsImtleSIsImg1IiwibG9hZCIsImluaXQiLCJXZWV4IiwiQ29tcG9uZW50IiwiZXh0ZW5kIiwidXRpbHMiLCJBbWFwIiwiY2FsbCIsInByb3RvdHlwZSIsIk9iamVjdCIsInJlZ2lzdGVyQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsImFyciIsImkiLCJmaW5kTWFya2VyIiwiYWRkTWFya2VyIiwicmVtb3ZlTWFya2VyIiwiaWNvbiIsIkljb24iLCJzaXplIiwiU2l6ZSIsIk1hcmtlciIsInRpdGxlIiwiX19nZXRNaWQiLCJ2aXNpYmxlIiwibWlkIiwiam9pbiIsIl9faXNNYWtlciIsIm9iaiIsIkNMQVNTX05BTUUiLCJERUZBVUxUX0NPTkZJRyIsInYiLCJ1cmwiLCJnZW5nZXJhdGVTY3JpcHRVcmwiLCJwYXJhbUFyciIsInB1c2giLCJlbmNvZGVVUkkiLCJjb25maWciLCJjb250YWluZXIiLCJjYWxsYmFjayIsIm5ld0NvbmZpZyIsImFzc2lnbiIsImxpYiIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwibWFwbG9hZGVkIiwiaGVhZCIsImxvYWRUaW1lb3V0Iiwid3JhcCIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNoaWxkTm9kZXMiLCJyZW1vdmUiLCJwcmVmaXgiLCJEYXRlIiwiZ2V0VGltZSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiYW1hcCIsImdldFVzZXJMb2NhdGlvbiIsIm1hcFJlZiIsInRpbWVvdXQiLCJzdGF0dXMiLCJyZXMiLCJzZW5kZXIiLCJwZXJmb3JtQ2FsbGJhY2siLCJyZXN1bHQiLCJ3YXJuIiwibWVzc2FnZSIsIm1ldGEiLCJuYW1lIiwiYXJncyIsInJlZ2lzdGVyQXBpTW9kdWxlIiwiZ2V0VXJsUGFyYW0iLCJyZWciLCJSZWdFeHAiLCJtYXRjaCIsInNlYXJjaCIsImxvYWRlciIsInBhZ2UiLCJhcHBJZCIsImhyZWYiLCJzb3VyY2UiLCJyb290SWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7O0FBQ0FBLFFBQU9DLElBQVAsSUFBZUQsT0FBT0MsSUFBUCxDQUFZQyxPQUFaLGVBQWYsQzs7Ozs7Ozs7Ozs7O0FDREE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1DLGNBQWM7QUFDbEJDLFNBQU0sRUFEWTtBQUVsQkMsaUJBQWM7QUFGSSxFQUFwQjtBQUlBLEtBQU1DLGFBQWEsdUVBQW5CO0FBQ0EsS0FBSUMsU0FBUztBQUNYQyxXQUFRQyxTQURHO0FBRVhMLFNBQUssRUFGTTtBQUdYTSxZQUFTLElBSEU7QUFJWEMsVUFBTyxLQUpJO0FBS1hDLGdCQUFhLEtBTEY7QUFNWFAsaUJBQWM7QUFOSCxFQUFiO0FBUUE7QUFDQSxLQUFNUSxRQUFRO0FBRVpDLFNBRlksb0JBRUY7QUFDUixVQUFLQyxPQUFMLEdBQWVDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZjtBQUNBLFVBQUtGLE9BQUwsQ0FBYUcsRUFBYixHQUFrQixpQkFBT0MsaUJBQVAsQ0FBeUIsS0FBekIsQ0FBbEI7QUFDQSxVQUFLSixPQUFMLENBQWFLLE1BQWIsQ0FBb0IsS0FBS0Msb0JBQUwsRUFBcEI7O0FB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QUFJckMrRSxtQkFBUTtBQUo2QixVQUF0QztBQU1GLFFBUEQsTUFPTztBQUNMNUIsaUJBQVE2QixJQUFSLENBQWFKLElBQUlLLE9BQWpCO0FBQ0Q7QUFFRixNQVpEO0FBYUQ7QUF4QlUsRUFBYjs7QUE0QkEsS0FBTUMsT0FBTztBQUNYWCxTQUFNLENBQUM7QUFDTFksV0FBTSxpQkFERDtBQUVMQyxXQUFNLENBQUMsUUFBRCxFQUFVLFVBQVY7QUFGRCxJQUFEO0FBREssRUFBYjs7QUFPQWxFLFFBQU9DLE9BQVAsR0FBaUIsVUFBVVYsSUFBVixFQUFnQjtBQUMvQkEsUUFBSzRFLGlCQUFMLENBQXVCLE1BQXZCLEVBQStCZCxJQUEvQixFQUFxQ1csSUFBckM7QUFDRCxFQUZELEM7Ozs7Ozs7O0FDcENDOzs7Ozs7Ozs7Ozs7OztBQWdCQSxFQUFDLFlBQVk7QUFDWCxZQUFTSSxXQUFULENBQXFCakYsR0FBckIsRUFBMEI7QUFDeEIsU0FBSWtGLE1BQU0sSUFBSUMsTUFBSixDQUFXLFVBQVVuRixHQUFWLEdBQWdCLFVBQTNCLENBQVY7QUFDQSxTQUFJb0YsUUFBUTlCLFNBQVMrQixNQUFULENBQWdCRCxLQUFoQixDQUFzQkYsR0FBdEIsQ0FBWjtBQUNBLFlBQU9FLFNBQVNBLE1BQU0sQ0FBTixDQUFoQjtBQUNEO0FBQ0QsT0FBSUUsU0FBU0wsWUFBWSxRQUFaLEtBQXlCLEtBQXRDO0FBQ0EsT0FBSU0sT0FBT04sWUFBWSxNQUFaLEtBQXVCLGtCQUFsQztBQUNBaEosVUFBT0MsSUFBUCxDQUFZaUUsSUFBWixDQUFpQjtBQUNmcUYsWUFBT2xDLFNBQVNtQyxJQUREO0FBRWJILGFBQVFBLE1BRks7QUFHYkksYUFBUUgsSUFISztBQUliSSxhQUFRO0FBSkssSUFBakI7QUFNRCxFQWRELEkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlOTU4OTUxY2YwZDU4YTI5ZDljZSIsImltcG9ydCBwbHVnaW5BbWFwIGZyb20gXCIvVXNlcnMvYWxpLTEzMDI1N24vd3d3L2hlbC9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViXCI7XHJcbndpbmRvdy53ZWV4ICYmIHdpbmRvdy53ZWV4Lmluc3RhbGwocGx1Z2luQW1hcCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy9wbHVnaW5fYnVuZGxlLmpzIiwiaW1wb3J0IG1hcmtlck1hbmFnZSAgZnJvbSAnLi9zZXJ2aWNlL21hcmtlcic7XG5pbXBvcnQgbWFwTG9hZGVyIGZyb20gJy4vc2VydmljZS9tYXAtbG9hZGVyJztcbmltcG9ydCB2ZW5kb3IgZnJvbSAnLi9zZXJ2aWNlL3ZlbmRvcic7XG5pbXBvcnQgYW1hcE1vZHVsZVJlZyBmcm9tICcuL21vZHVsZS9hbWFwJztcblxuY29uc3QgZGVmYXVsdEF0dHIgPSB7XG4gIHpvb206IDEzLFxuICByZXNpemVFbmFibGU6IHRydWUsXG59O1xuY29uc3QgbG9hZGluZ0dpZiA9ICdodHRwOi8vaW1nMS52dWVkLnZhbnRoaW5rLmNuL3Z1ZWQyMTEzZWFhMDYyYWJiYWVlMDQ0MWQxNmE3ODQ4ZDIzZS5naWYnO1xubGV0IHBhcmFtcyA9IHtcbiAgY2VudGVyOiB1bmRlZmluZWQsXG4gIHpvb206MTEsXG4gIHRvb2xiYXI6IHRydWUsXG4gIHNjYWxlOiBmYWxzZSxcbiAgZ2VvbG9jYXRpb246IGZhbHNlLFxuICByZXNpemVFbmFibGU6IHRydWUsXG59O1xuLy8gcHJvdG90eXBlIG1ldGhvZHMuXG5jb25zdCBwcm90byA9IHtcbiAgXG4gIGNyZWF0ZSAoKSB7XG4gICAgdGhpcy5tYXB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5tYXB3cmFwLmlkID0gdmVuZG9yLmdlbmdlcmF0ZVJhbmRvbUlkKCdtYXAnKTtcbiAgICB0aGlzLm1hcHdyYXAuYXBwZW5kKHRoaXMucmVuZGVyTG9hZGluZ1NwaW5uZXIoKSk7XG4gICBcbiAgICByZXR1cm4gdGhpcy5tYXB3cmFwO1xuICB9LFxuICBcbiAgcmVuZGVyTG9hZGluZ1NwaW5uZXIoKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gNjA7XG4gICAgZWwuc3R5bGUubWFyZ2luID0gJzIwIGF1dG8nO1xuICAgIGVsLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNyYyA9IGxvYWRpbmdHaWY7XG4gICAgZWwuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgn6auY5b635Zyw5Zu+5Yqg6L295LitLi4uLicpKTtcbiAgICBlbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICByZXR1cm4gZWw7XG4gIH0sXG4gIFxuICByZWFkeSAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgaWYod2luZG93LkFNYXApIHtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgQU1hcC5NYXAodGhpcy5tYXB3cmFwLmlkLHBhcmFtcyk7XG4gICAgICAgIEFNYXAucGx1Z2luKFsnQU1hcC5Ub29sQmFyJywnQU1hcC5HZW9sb2NhdGlvbiddLCgpID0+IHtcbiAgICAgICAgICBpZihwYXJhbXMuc2NhbGUpIHtcbiAgICAgICAgICAgIHNlbGYubWFwLmFkZENvbnRyb2wobmV3IEFNYXAuVG9vbEJhcigpKTsgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihwYXJhbXMuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgICAgIHNlbGYubWFwLmFkZENvbnRyb2wobmV3IEFNYXAuR2VvbG9jYXRpb24oKSk7IFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1hcmtlck1hbmFnZS5jaGFuZ2VNYXJrZXIobWFya2Vycyx0aGlzLm1hcCk7XG4gICAgICAgIHRoaXMubWFwSW5zdGFuY2UgPSB0aGlzLm1hcDtcbiAgICAgIH0gICBcbiAgfVxuICBcbn07XG5cbmxldCBtYXJrZXJzID0gW107XG5cbmNvbnN0IGF0dHIgPSB7XG4gIGNlbnRlciAodmFsKSB7XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGg9PTIpe1xuICAgICAgcGFyYW1zLmNlbnRlciA9IHZhbDsgXG4gICAgICBpZih3aW5kb3cuQU1hcCkge1xuICAgICAgICB0aGlzLm1hcC5zZXRDZW50ZXIocGFyYW1zLmNlbnRlcik7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgXG4gICAgaWYodHlwZW9mIHZhbCA9PSAnbnVtYmVyJykge1xuICAgICAgdmFyIGdlbyA9IG5ldyBBTWFwLkdlb2xvY2F0aW9uKHtcbiAgICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIGdlby5nZXRDdXJyZW50UG9zaXRpb24oKTtcbiAgICAgIEFNYXAuZXZlbnQuQU1hcC5ldmVudC5hZGRMaXN0ZW5lcihnZW8sJ2NvbXBsZXRlJyxmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHBhcmFtcy5jZW50ZXIgPSBbZGF0YS5wb3NpdGlvbi5nZXRMbmcoKSxkYXRhLnBvc2l0aW9uLmdldExhdCgpXTtcbiAgICAgICAgc2VsZi5tYXAuc2V0Q2VudGVyKHBhcmFtcy5jZW50ZXIpOyAgXG4gICAgICB9KTsgXG4gICAgfVxuICB9LFxuICB6b29tKHZhbCkge1xuICAgIGlmKC9eWzAtOV0rJC8udGVzdCh2YWwpKSB7XG4gICAgICBwYXJhbXMuem9vbSA9IHZhbDsgICBcbiAgICB9XG4gICAgaWYod2luZG93LkFNYXApIHtcbiAgICAgIHRoaXMubWFwLnNldFpvb20ocGFyYW1zLnpvb20pO1xuICAgIH1cbiAgfSxcbiAgbWFya2VyKHZhbCkge1xuICAgIGlmKEFycmF5LmlzQXJyYXkodmFsKSkgeyBcbiAgICAgIG1hcmtlcnMgPSB2YWw7XG4gICAgICBpZih3aW5kb3cuQU1hcCkge1xuICAgICAgICBtYXJrZXJNYW5hZ2UuY2hhbmdlTWFya2VyKG1hcmtlcnMsdGhpcy5tYXApO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2NhbGUodmFsKSB7XG4gICAgIHBhcmFtcy5zY2FsZSA9IHZhbDsgXG4gIH0sXG4gIGdlb2xvY2F0aW9uKHZhbCkge1xuICAgICBwYXJhbXMuZ2VvbG9jYXRpb24gPSB2YWw7IFxuICB9LFxuICBzZGtLZXkodmFsKSB7XG4gICAgbGV0IGtleSA9ICcnO1xuICAgIGlmKHZhbCkgeyBcbiAgICAgIGtleSA9IHZhbC5oNTtcbiAgICB9IFxuICAgIG1hcExvYWRlci5sb2FkKHtcbiAgICAgIGtleToga2V5XG4gICAgfSwgdGhpcy5tYXB3cmFwLCgpID0+IHRoaXMucmVhZHkoKSk7ICBcbiAgfVxuICBcbn07XG5cbmZ1bmN0aW9uIGluaXQgKFdlZXgpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gV2VleC5Db21wb25lbnQ7XG4gIGNvbnN0IGV4dGVuZCA9IFdlZXgudXRpbHMuZXh0ZW5kO1xuXG4gIGZ1bmN0aW9uIEFtYXAgKGRhdGEpIHtcbiAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfVxuICBcbiAgQW1hcC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUpO1xuICBleHRlbmQoQW1hcC5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXAucHJvdG90eXBlLCB7IGF0dHIgfSk7XG4gIGV4dGVuZChBbWFwLnByb3RvdHlwZSwge1xuICAgIHN0eWxlOiBleHRlbmQoT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlLnN0eWxlKSwge30pXG4gIH0pO1xuICBleHRlbmQoQW1hcC5wcm90b3R5cGUsIHsgZXZlbnQgfSk7XG5cbiAgV2VleC5yZWdpc3RlckNvbXBvbmVudCgnd2VleC1hbWFwJywgQW1hcCk7XG4gIGFtYXBNb2R1bGVSZWcoV2VleCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1wbHVnaW4tYW1hcC93ZWIvaW5kZXguanMiLCIvLyBhIGxpYiB0byBtYW5hZ2UgYWxsIG1hcmtlclxubGV0IG1hcmtlcnMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFxuICBjaGFuZ2VNYXJrZXIoYXJyLCBtYXApIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXJyW2ldO1xuICAgICAgbGV0IG1hcmtlciA9IHRoaXMuZmluZE1hcmtlcihkYXRhKTtcbiAgICAgIGlmKCFtYXJrZXIpIHtcbiAgICAgICAgdGhpcy5hZGRNYXJrZXIoZGF0YSxtYXApO1xuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZU1hcmtlcihkYXRhKTtcbiAgICAgIH1cbiAgICB9ICAgICAgICBcbiAgfSxcbiAgXG4gIGFkZE1hcmtlcihkYXRhLCBtYXApIHtcbiAgICBsZXQgaWNvbiA9IG51bGw7XG4gICAgaWYoZGF0YS5pY29uKSB7XG4gICAgICBpY29uID0gbmV3IEFNYXAuSWNvbih7XG4gICAgICAgIGltYWdlIDogZGF0YS5pY29uLFxuICAgICAgICBzaXplIDogbmV3IEFNYXAuU2l6ZSg2NCw2NClcbiAgICAgIH0pOyAgXG4gICAgfVxuICAgIGxldCBtYXJrZXIgPSBuZXcgQU1hcC5NYXJrZXIoe1xuICAgICAgcG9zaXRpb246IGRhdGEucG9zaXRpb24sXG4gICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgIGljb246IGljb24sXG4gICAgICBtYXA6IG1hcCxcbiAgICB9KTtcbiAgICBtYXJrZXJzW3RoaXMuX19nZXRNaWQoZGF0YSldID0gbWFya2VyO1xuICB9LFxuICBcbiAgcmVtb3ZlTWFya2VyKGRhdGEpIHtcbiAgICBsZXQgbWFya2VyID0gdGhpcy5maW5kTWFya2VyKGRhdGEpO1xuICAgIGlmKG1hcmtlcikge1xuICAgICAgbWFya2VyLnZpc2libGUgPSB0cnVlO1xuICAgICAgbWFya2VyID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIFxuICBmaW5kTWFya2VyKGRhdGEpIHtcbiAgICBsZXQgbWlkID0gdGhpcy5fX2dldE1pZChkYXRhKTtcbiAgICByZXR1cm4gbWFya2Vyc1ttaWRdO1xuICB9LFxuICBcbiAgX19nZXRNaWQoZGF0YSkge1xuICAgIHJldHVybiAnbWlkLScgKyBkYXRhLnBvc2l0aW9uLmpvaW4oJy0nKTtcbiAgfSxcbiAgXG4gIF9faXNNYWtlcihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiBvYmouQ0xBU1NfTkFNRSA9PSAnQU1hcC5NYXJrZXInOyAgICAgXG4gIH1cbiAgXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LXBsdWdpbi1hbWFwL3dlYi9zZXJ2aWNlL21hcmtlci5qcyIsImNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICBrZXk6ICcnLFxuICB2OiAnMS4zJyxcbiAgdXJsOiAnaHR0cHM6Ly93ZWJhcGkuYW1hcC5jb20vbWFwcydcbn07XG4gXG5jb25zdCBnZW5nZXJhdGVTY3JpcHRVcmwgPSBmdW5jdGlvbihvYmopIHtcbiAgbGV0IHBhcmFtQXJyID0gW107XG4gIGZvcihsZXQga2V5IGluIG9iaikge1xuICAgIGlmKGtleSAhPT0gJ3VybCcpIHtcbiAgICAgIHBhcmFtQXJyLnB1c2goZW5jb2RlVVJJKGtleSArICc9JyArIG9ialtrZXldKSk7ICBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iai51cmwgKz0gJz8nICsgcGFyYW1BcnIuam9pbignJicpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFxuICBsb2FkKGNvbmZpZyxjb250YWluZXIsY2FsbGJhY2spIHtcbiAgICBsZXQgbmV3Q29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSxERUZBVUxUX0NPTkZJRyxjb25maWcpO1xuICAgIGxldCBsaWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBsaWIuc3JjID0gZ2VuZ2VyYXRlU2NyaXB0VXJsKG5ld0NvbmZpZyk7XG4gICAgY29uc29sZS5sb2cobGliLnNyYyk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxpYi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJyxmdW5jdGlvbigpIHtcbiAgICAgIHdpbmRvdy5tYXBsb2FkZWQgPSB0cnVlO1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpYik7ICBcbiAgICB0aGlzLmxvYWRUaW1lb3V0KGNvbnRhaW5lcik7XG4gIH0sXG4gIFxuICBsb2FkVGltZW91dCh3cmFwKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZighd2luZG93LkFtYXApIHtcbiAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfph43mlrDliqDovb0nKSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgd3JhcC5jaGlsZE5vZGVzWzBdLnJlbW92ZSgpO1xuICAgICAgICB3cmFwLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwMCk7XG4gIH1cblxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViL3NlcnZpY2UvbWFwLWxvYWRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBnZW5nZXJhdGVSYW5kb21JZCAocHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCArICgobmV3IERhdGUoKSkuZ2V0VGltZSgpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDksMykpICsgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwMDAwKTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViL3NlcnZpY2UvdmVuZG9yLmpzIiwiLy8gQU1hcCBtb2R1bGVcbmNvbnN0IGFtYXAgPSB7XG4gIC8qKiBnZXQgdXNlciBsb2FjdGlvbiBieSBicm93c2VyIGFuZCBJUFxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IGVycm9yQ2FsbGJhY2tcbiAgKiovXG4gIGdldFVzZXJMb2NhdGlvbihtYXBSZWYsY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGdlbyA9IG5ldyBBTWFwLkdlb2xvY2F0aW9uKHtcbiAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSxcbiAgICAgIHRpbWVvdXQ6IDEwMDAwICAgICBcbiAgICB9KTtcbiAgICBnZW8uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHN0YXR1cywgcmVzKSB7XG4gICAgICBpZihzdGF0dXMgIT09ICdlcnJvcicpIHtcbiAgICAgICAgIHNlbGYuc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFjaywge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbcmVzLnBvc2l0aW9uLmdldExuZygpLHJlcy5wb3NpdGlvbi5nZXRMYXQoKV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3VsdDogJ3N1Y2Nlc3MnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKHJlcy5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgXG4gICAgfSk7XG4gIH1cbiAgXG59O1xuXG5jb25zdCBtZXRhID0ge1xuICBhbWFwOiBbe1xuICAgIG5hbWU6ICdnZXRVc2VyTG9jYXRpb24nLFxuICAgIGFyZ3M6IFsnc3RyaW5nJywnZnVuY3Rpb24nXVxuICB9XVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoV2VleCkge1xuICBXZWV4LnJlZ2lzdGVyQXBpTW9kdWxlKCdhbWFwJywgYW1hcCwgbWV0YSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1wbHVnaW4tYW1hcC93ZWIvbW9kdWxlL2FtYXAuanMiLCIgLyoqXG4gICogSW5pdCB3ZWV4IGluc3RhbmNlIGRlcGVuZGluZyBvbiB0aGUgdXJsIHBhcmFtcy5cbiAgKiBUaGVyZSBhcmUgdGhyZWUgd2F5cyB0byBsb2FkIHdlZXggYnVuZGxlcywgZGVwZW5kcyBvbiB0aGVcbiAgKiBwYXJhbWV0ZXIgJ2xvYWRlcicgaW4gdGhlIHVybDpcbiAgKlxuICAqICAgKyB4aHI6IHVzZSBYTUxIdHRwUmVxdWVzdC4gUGFyYW1ldGVyICdwYWdlJyBzaG91bGQgYmVcbiAgKiAgIHRoZSBidW5kbGUncyB1cmwuXG4gICogICArIHNvdXJjZTogdXNlIHRoZSB0cmFuc2Zvcm1lZCBjb2RlIGl0c2VsZi4gJ3BhZ2UnIHNob3VsZFxuICAqICAgYmUgdGhlIHRyYW5zZm9ybWVkIHdlZXggYnVuZGxlLlxuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IGJ1bmRsZSAtIEl0IGhhcyBkaWZmZXJlbnQgbWVhbmluZyBkZXBlbmRzIG9uXG4gICogICB0aGUgdHlwZSBvZiBsb2FkZXIuXG4gICovXG4gIFxuXG4gIFxuIChmdW5jdGlvbiAoKSB7XG4gICBmdW5jdGlvbiBnZXRVcmxQYXJhbShrZXkpIHtcbiAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoJ1s/fCZdJyArIGtleSArICc9KFteJl0rKScpXG4gICAgIHZhciBtYXRjaCA9IGxvY2F0aW9uLnNlYXJjaC5tYXRjaChyZWcpXG4gICAgIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXVxuICAgfVxuICAgdmFyIGxvYWRlciA9IGdldFVybFBhcmFtKCdsb2FkZXInKSB8fCAneGhyJztcbiAgIHZhciBwYWdlID0gZ2V0VXJsUGFyYW0oJ3BhZ2UnKSB8fCAnLi4vZGlzdC9pbmRleC5qcyc7XG4gICB3aW5kb3cud2VleC5pbml0KHtcbiAgICAgYXBwSWQ6IGxvY2F0aW9uLmhyZWZcbiAgICAgLCBsb2FkZXI6IGxvYWRlclxuICAgICAsIHNvdXJjZTogcGFnZVxuICAgICAsIHJvb3RJZDogJ3dlZXgnXG4gICB9KVxuIH0pKCk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYi9qcy9pbml0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==