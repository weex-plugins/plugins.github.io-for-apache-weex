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
	
	var _marker = __webpack_require__(4);
	
	var _marker2 = _interopRequireDefault(_marker);
	
	var _mapLoader = __webpack_require__(5);
	
	var _mapLoader2 = _interopRequireDefault(_mapLoader);
	
	var _vendor = __webpack_require__(6);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultAttr = {
	  zoom: 13,
	  resizeEnable: true
	};
	
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
	    var _this = this;
	
	    this.mapwrap = document.createElement('div');
	    this.mapwrap.id = _vendor2.default.gengerateRandomId('map');
	    this.mapwrap.append(document.createTextNode('高德地图加载中...'));
	    _mapLoader2.default.load({}, this.mapwrap, function () {
	      return _this.ready();
	    });
	    return this.mapwrap;
	  },
	  ready: function ready() {
	    var self = this;
	    if (window.AMap) {
	      console.log(this.mapwrap);
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
	    }
	    if (window.AMap) {
	      this.map.setCenter(params.center);
	    }
	  },
	  zoom: function zoom(val) {
	    if (/^[0-9]+$/.test(val)) {
	      params.zoom = val;
	    }
	    if (window.AMap) {
	      console.log(params.zoom);
	      this.map.setZoom(params.zoom);
	    }
	  },
	  points: function points(val) {
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
	    console.log(data);
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
	    container.append(lib);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzE1ZDA4YjVhYjJmOThmOWIxOWIiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9wbHVnaW5fYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1jaGFydC93ZWIvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1wbHVnaW4tYW1hcC93ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LXBsdWdpbi1hbWFwL3dlYi9zZXJ2aWNlL21hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViL3NlcnZpY2UvbWFwLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViL3NlcnZpY2UvdmVuZG9yLmpzIiwid2VicGFjazovLy8uL3dlYi9qcy9pbml0LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIndlZXgiLCJpbnN0YWxsIiwicHJvdG8iLCJjcmVhdGUiLCJub2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXIiLCJJbWFnZSIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwicGFkZGluZyIsInRleHRBbGlnbiIsImJvcmRlciIsImFwcGVuZENoaWxkIiwiYXR0ciIsInRleHQiLCJ2YWwiLCJjcmVhdGVUZXh0Tm9kZSIsImltZ3NyYyIsInNyYyIsInR4dENvbG9yIiwiY29sb3IiLCJldmVudCIsImNsaWNrIiwiZXh0cmEiLCJ2YWx1ZSIsInRleHRDb250ZW50IiwiaW5pdCIsIldlZXgiLCJDb21wb25lbnQiLCJleHRlbmQiLCJ1dGlscyIsIlBvbGFyb2lkUGhvdG8iLCJkYXRhIiwiY2FsbCIsInByb3RvdHlwZSIsIk9iamVjdCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiZGVmYXVsdEF0dHIiLCJ6b29tIiwicmVzaXplRW5hYmxlIiwicGFyYW1zIiwiY2VudGVyIiwidW5kZWZpbmVkIiwidG9vbGJhciIsInNjYWxlIiwiZ2VvbG9jYXRpb24iLCJtYXB3cmFwIiwiaWQiLCJnZW5nZXJhdGVSYW5kb21JZCIsImFwcGVuZCIsImxvYWQiLCJyZWFkeSIsInNlbGYiLCJBTWFwIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIk1hcCIsInBsdWdpbiIsImFkZENvbnRyb2wiLCJUb29sQmFyIiwiR2VvbG9jYXRpb24iLCJjaGFuZ2VNYXJrZXIiLCJtYXJrZXJzIiwibWFwSW5zdGFuY2UiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJzZXRDZW50ZXIiLCJ0ZXN0Iiwic2V0Wm9vbSIsInBvaW50cyIsIkFtYXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyIiwiaSIsIm1hcmtlciIsImZpbmRNYXJrZXIiLCJhZGRNYXJrZXIiLCJyZW1vdmVNYXJrZXIiLCJpY29uIiwiSWNvbiIsImltYWdlIiwic2l6ZSIsIlNpemUiLCJNYXJrZXIiLCJwb3NpdGlvbiIsInRpdGxlIiwiX19nZXRNaWQiLCJ2aXNpYmxlIiwibWlkIiwiam9pbiIsIl9faXNNYWtlciIsIm9iaiIsIkNMQVNTX05BTUUiLCJERUZBVUxUX0NPTkZJRyIsImtleSIsInYiLCJ1cmwiLCJnZW5nZXJhdGVTY3JpcHRVcmwiLCJwYXJhbUFyciIsInB1c2giLCJlbmNvZGVVUkkiLCJjb25maWciLCJjb250YWluZXIiLCJjYWxsYmFjayIsIm5ld0NvbmZpZyIsImFzc2lnbiIsImxpYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYXBsb2FkZWQiLCJwcmVmaXgiLCJEYXRlIiwiZ2V0VGltZSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiZ2V0VXJsUGFyYW0iLCJyZWciLCJSZWdFeHAiLCJtYXRjaCIsImxvY2F0aW9uIiwic2VhcmNoIiwibG9hZGVyIiwicGFnZSIsImFwcElkIiwiaHJlZiIsInNvdXJjZSIsInJvb3RJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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LElBQWpCO0FBTUQsRUFkRCxJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzE1ZDA4YjVhYjJmOThmOWIxOWIiLCJpbXBvcnQgY2hhcnQgZnJvbSBcIi9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL3BsdWdpbnMvd2VleC1jaGFydC93ZWJcIjtcclxud2luZG93LndlZXggJiYgd2luZG93LndlZXguaW5zdGFsbChjaGFydCk7XHJcbmltcG9ydCBwbHVnaW5BbWFwIGZyb20gXCIvVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViXCI7XHJcbndpbmRvdy53ZWV4ICYmIHdpbmRvdy53ZWV4Lmluc3RhbGwocGx1Z2luQW1hcCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy9wbHVnaW5fYnVuZGxlLmpzIiwiJ3VzZSBzdHJpY3QnXG5cblxuY29uc3QgcHJvdG8gPSB7XG4gIGNyZWF0ZSAoKSB7XG4gICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5pbm5lciA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW5uZXIuc3R5bGUubWFyZ2luQm90dG9tID0gJzEwcHgnO1xuICAgIHRoaXMubm9kZS5zdHlsZS5wYWRkaW5nID0gXCI1cHggNXB4IDEwcHggNXB4XCI7IFxuICAgIHRoaXMubm9kZS5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiOyBcbiAgICB0aGlzLm5vZGUuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjY2NjJztcbiAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5pbm5lcik7XG4gICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgXG4gICAgcmV0dXJuIHRoaXMubm9kZSBcbiAgfVxufVxuXG4vLyBhdHRyaWJ1dGUgc2V0dGVycy5cbmNvbnN0IGF0dHIgPSB7XG4gIHRleHQgKHZhbCkge1xuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsKTtcbiAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIH0sXG4gIFxuICBpbWdzcmModmFsKSB7XG4gICAgdGhpcy5pbm5lci5zcmMgPSB2YWw7XG4gIH1cbn1cblxuLy8gc3R5bGUgc2V0dGVycy5cbmNvbnN0IHN0eWxlID0ge1xuICB0eHRDb2xvciAodmFsKSB7XG4gICAgdGhpcy5pbm5lci5zdHlsZS5jb2xvciA9IHZhbFxuICB9XG59XG5cbi8vIGV2ZW50IGNvbmZpZy5cbmNvbnN0IGV2ZW50ID0ge1xuICBjbGljazoge1xuICAgIGV4dHJhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB0aGlzLmlubmVyLnRleHRDb250ZW50XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXQgKFdlZXgpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gV2VleC5Db21wb25lbnQ7XG4gIGNvbnN0IGV4dGVuZCA9IFdlZXgudXRpbHMuZXh0ZW5kO1xuXG4gIGZ1bmN0aW9uIFBvbGFyb2lkUGhvdG8gKGRhdGEpIHtcbiAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfVxuXG4gIFBvbGFyb2lkUGhvdG8ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlKTtcbiAgZXh0ZW5kKFBvbGFyb2lkUGhvdG8ucHJvdG90eXBlLCBwcm90byk7XG4gIGV4dGVuZChQb2xhcm9pZFBob3RvLnByb3RvdHlwZSwgeyBhdHRyIH0pO1xuICBleHRlbmQoUG9sYXJvaWRQaG90by5wcm90b3R5cGUsIHtcbiAgICBzdHlsZTogZXh0ZW5kKE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZS5zdHlsZSksIHN0eWxlKVxuICB9KTtcbiAgZXh0ZW5kKFBvbGFyb2lkUGhvdG8ucHJvdG90eXBlLCB7IGV2ZW50IH0pO1xuXG4gIFdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ3dlZXgtY2hhcnQnLCBQb2xhcm9pZFBob3RvKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtY2hhcnQvd2ViL3NyYy9pbmRleC5qcyIsImltcG9ydCBtYXJrZXJNYW5hZ2UgIGZyb20gJy4vc2VydmljZS9tYXJrZXInO1xuaW1wb3J0IG1hcExvYWRlciBmcm9tICcuL3NlcnZpY2UvbWFwLWxvYWRlcic7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4vc2VydmljZS92ZW5kb3InO1xuXG5jb25zdCBkZWZhdWx0QXR0ciA9IHtcbiAgem9vbTogMTMsXG4gIHJlc2l6ZUVuYWJsZTogdHJ1ZSxcbn07XG5cbmxldCBwYXJhbXMgPSB7XG4gIGNlbnRlcjogdW5kZWZpbmVkLFxuICB6b29tOjExLFxuICB0b29sYmFyOiB0cnVlLFxuICBzY2FsZTogZmFsc2UsXG4gIGdlb2xvY2F0aW9uOiBmYWxzZSxcbiAgcmVzaXplRW5hYmxlOiB0cnVlLFxufTtcbi8vIHByb3RvdHlwZSBtZXRob2RzLlxuY29uc3QgcHJvdG8gPSB7XG4gIFxuICBjcmVhdGUgKCkge1xuICAgIHRoaXMubWFwd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMubWFwd3JhcC5pZCA9IHZlbmRvci5nZW5nZXJhdGVSYW5kb21JZCgnbWFwJyk7XG4gICAgdGhpcy5tYXB3cmFwLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgn6auY5b635Zyw5Zu+5Yqg6L295LitLi4uJykpO1xuICAgIG1hcExvYWRlci5sb2FkKHt9LHRoaXMubWFwd3JhcCwoKSA9PiB0aGlzLnJlYWR5KCkpOyAgIFxuICAgIHJldHVybiB0aGlzLm1hcHdyYXA7XG4gIH0sXG4gIFxuICByZWFkeSAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgaWYod2luZG93LkFNYXApIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tYXB3cmFwKTtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgQU1hcC5NYXAodGhpcy5tYXB3cmFwLmlkLHBhcmFtcyk7XG4gICAgICAgIEFNYXAucGx1Z2luKFsnQU1hcC5Ub29sQmFyJywnQU1hcC5HZW9sb2NhdGlvbiddLCgpID0+IHtcbiAgICAgICAgICBpZihwYXJhbXMuc2NhbGUpIHtcbiAgICAgICAgICAgIHNlbGYubWFwLmFkZENvbnRyb2wobmV3IEFNYXAuVG9vbEJhcigpKTsgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihwYXJhbXMuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgICAgIHNlbGYubWFwLmFkZENvbnRyb2wobmV3IEFNYXAuR2VvbG9jYXRpb24oKSk7IFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1hcmtlck1hbmFnZS5jaGFuZ2VNYXJrZXIobWFya2Vycyx0aGlzLm1hcCk7XG4gICAgICAgIHRoaXMubWFwSW5zdGFuY2UgPSB0aGlzLm1hcDtcbiAgICAgIH0gICBcbiAgfVxuICBcbn07XG5cbmxldCBtYXJrZXJzID0gW107XG5cbmNvbnN0IGF0dHIgPSB7XG4gIGNlbnRlciAodmFsKSB7XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGg9PTIpe1xuICAgICAgcGFyYW1zLmNlbnRlciA9IHZhbDsgICBcbiAgICB9XG4gICAgaWYod2luZG93LkFNYXApIHtcbiAgICAgIHRoaXMubWFwLnNldENlbnRlcihwYXJhbXMuY2VudGVyKTtcbiAgICB9XG4gIH0sXG4gIHpvb20odmFsKSB7XG4gICAgaWYoL15bMC05XSskLy50ZXN0KHZhbCkpIHtcbiAgICAgIHBhcmFtcy56b29tID0gdmFsOyAgIFxuICAgIH1cbiAgICBpZih3aW5kb3cuQU1hcCkge1xuICAgICAgY29uc29sZS5sb2cocGFyYW1zLnpvb20pO1xuICAgICAgdGhpcy5tYXAuc2V0Wm9vbShwYXJhbXMuem9vbSk7XG4gICAgfVxuICB9LFxuICBwb2ludHModmFsKSB7XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2YWwpKSB7IFxuICAgICAgbWFya2VycyA9IHZhbDtcbiAgICAgIGlmKHdpbmRvdy5BTWFwKSB7XG4gICAgICAgIG1hcmtlck1hbmFnZS5jaGFuZ2VNYXJrZXIobWFya2Vycyx0aGlzLm1hcCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzY2FsZSh2YWwpIHtcbiAgICAgcGFyYW1zLnNjYWxlID0gdmFsOyBcbiAgfSxcbiAgZ2VvbG9jYXRpb24odmFsKSB7XG4gICAgIHBhcmFtcy5nZW9sb2NhdGlvbiA9IHZhbDsgXG4gIH0sXG4gIFxufTtcblxuZnVuY3Rpb24gaW5pdCAoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcCAoZGF0YSkge1xuICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9XG4gIFxuICBBbWFwLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChBbWFwLnByb3RvdHlwZSwgcHJvdG8pO1xuICBleHRlbmQoQW1hcC5wcm90b3R5cGUsIHsgYXR0ciB9KTtcbiAgZXh0ZW5kKEFtYXAucHJvdG90eXBlLCB7XG4gICAgc3R5bGU6IGV4dGVuZChPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUuc3R5bGUpLCB7fSlcbiAgfSk7XG4gIGV4dGVuZChBbWFwLnByb3RvdHlwZSwgeyBldmVudCB9KTtcblxuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWFtYXAnLCBBbWFwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LXBsdWdpbi1hbWFwL3dlYi9pbmRleC5qcyIsIi8vIGEgbGliIHRvIG1hbmFnZSBhbGwgbWFya2VyXG5sZXQgbWFya2VycyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgXG4gIGNoYW5nZU1hcmtlcihhcnIsIG1hcCkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhcnJbaV07XG4gICAgICBsZXQgbWFya2VyID0gdGhpcy5maW5kTWFya2VyKGRhdGEpO1xuICAgICAgaWYoIW1hcmtlcikge1xuICAgICAgICB0aGlzLmFkZE1hcmtlcihkYXRhLG1hcCk7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTWFya2VyKGRhdGEpO1xuICAgICAgfVxuICAgIH0gICAgICAgIFxuICB9LFxuICBcbiAgYWRkTWFya2VyKGRhdGEsIG1hcCkge1xuICAgIGxldCBpY29uID0gbnVsbDtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBpZihkYXRhLmljb24pIHtcbiAgICAgIGljb24gPSBuZXcgQU1hcC5JY29uKHtcbiAgICAgICAgaW1hZ2UgOiBkYXRhLmljb24sXG4gICAgICAgIHNpemUgOiBuZXcgQU1hcC5TaXplKDY0LDY0KVxuICAgICAgfSk7ICBcbiAgICB9XG4gICAgbGV0IG1hcmtlciA9IG5ldyBBTWFwLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogZGF0YS5wb3NpdGlvbixcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgaWNvbjogaWNvbixcbiAgICAgIG1hcDogbWFwLFxuICAgIH0pO1xuICAgIG1hcmtlcnNbdGhpcy5fX2dldE1pZChkYXRhKV0gPSBtYXJrZXI7XG4gIH0sXG4gIFxuICByZW1vdmVNYXJrZXIoZGF0YSkge1xuICAgIGxldCBtYXJrZXIgPSB0aGlzLmZpbmRNYXJrZXIoZGF0YSk7XG4gICAgaWYobWFya2VyKSB7XG4gICAgICBtYXJrZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICBtYXJrZXIgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgXG4gIGZpbmRNYXJrZXIoZGF0YSkge1xuICAgIGxldCBtaWQgPSB0aGlzLl9fZ2V0TWlkKGRhdGEpO1xuICAgIHJldHVybiBtYXJrZXJzW21pZF07XG4gIH0sXG4gIFxuICBfX2dldE1pZChkYXRhKSB7XG4gICAgcmV0dXJuICdtaWQtJyArIGRhdGEucG9zaXRpb24uam9pbignLScpO1xuICB9LFxuICBcbiAgX19pc01ha2VyKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIG9iai5DTEFTU19OQU1FID09ICdBTWFwLk1hcmtlcic7ICAgICBcbiAgfVxuICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtcGx1Z2luLWFtYXAvd2ViL3NlcnZpY2UvbWFya2VyLmpzIiwiY29uc3QgREVGQVVMVF9DT05GSUcgPSB7XG4gIGtleTogJycsXG4gIHY6ICcxLjMnLFxuICB1cmw6ICdodHRwczovL3dlYmFwaS5hbWFwLmNvbS9tYXBzJ1xufTtcbiBcbmNvbnN0IGdlbmdlcmF0ZVNjcmlwdFVybCA9IGZ1bmN0aW9uKG9iaikge1xuICBsZXQgcGFyYW1BcnIgPSBbXTtcbiAgZm9yKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgaWYoa2V5ICE9PSAndXJsJykge1xuICAgICAgcGFyYW1BcnIucHVzaChlbmNvZGVVUkkoa2V5ICsgJz0nICsgb2JqW2tleV0pKTsgIFxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqLnVybCArPSAnPycgKyBwYXJhbUFyci5qb2luKCcmJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgXG4gIGxvYWQoY29uZmlnLGNvbnRhaW5lcixjYWxsYmFjaykge1xuICAgIGxldCBuZXdDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LERFRkFVTFRfQ09ORklHLGNvbmZpZyk7XG4gICAgbGV0IGxpYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGxpYi5zcmMgPSBnZW5nZXJhdGVTY3JpcHRVcmwobmV3Q29uZmlnKTtcbiAgICBjb25zb2xlLmxvZyhsaWIuc3JjKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGliLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLGZ1bmN0aW9uKCkge1xuICAgICAgd2luZG93Lm1hcGxvYWRlZCA9IHRydWU7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0pO1xuICAgIGNvbnRhaW5lci5hcHBlbmQobGliKTsgIFxuICB9XG5cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LXBsdWdpbi1hbWFwL3dlYi9zZXJ2aWNlL21hcC1sb2FkZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2VuZ2VyYXRlUmFuZG9tSWQgKHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggKyAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKS50b1N0cmluZygpLnN1YnN0cmluZyg5LDMpKSArIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMDAwMCk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LXBsdWdpbi1hbWFwL3dlYi9zZXJ2aWNlL3ZlbmRvci5qcyIsIiAvKipcbiAgKiBJbml0IHdlZXggaW5zdGFuY2UgZGVwZW5kaW5nIG9uIHRoZSB1cmwgcGFyYW1zLlxuICAqIFRoZXJlIGFyZSB0aHJlZSB3YXlzIHRvIGxvYWQgd2VleCBidW5kbGVzLCBkZXBlbmRzIG9uIHRoZVxuICAqIHBhcmFtZXRlciAnbG9hZGVyJyBpbiB0aGUgdXJsOlxuICAqXG4gICogICArIHhocjogdXNlIFhNTEh0dHBSZXF1ZXN0LiBQYXJhbWV0ZXIgJ3BhZ2UnIHNob3VsZCBiZVxuICAqICAgdGhlIGJ1bmRsZSdzIHVybC5cbiAgKiAgICsgc291cmNlOiB1c2UgdGhlIHRyYW5zZm9ybWVkIGNvZGUgaXRzZWxmLiAncGFnZScgc2hvdWxkXG4gICogICBiZSB0aGUgdHJhbnNmb3JtZWQgd2VleCBidW5kbGUuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gYnVuZGxlIC0gSXQgaGFzIGRpZmZlcmVudCBtZWFuaW5nIGRlcGVuZHMgb25cbiAgKiAgIHRoZSB0eXBlIG9mIGxvYWRlci5cbiAgKi9cbiAgXG5cbiAgXG4gKGZ1bmN0aW9uICgpIHtcbiAgIGZ1bmN0aW9uIGdldFVybFBhcmFtKGtleSkge1xuICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cCgnWz98Jl0nICsga2V5ICsgJz0oW14mXSspJylcbiAgICAgdmFyIG1hdGNoID0gbG9jYXRpb24uc2VhcmNoLm1hdGNoKHJlZylcbiAgICAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdXG4gICB9XG4gICB2YXIgbG9hZGVyID0gZ2V0VXJsUGFyYW0oJ2xvYWRlcicpIHx8ICd4aHInO1xuICAgdmFyIHBhZ2UgPSBnZXRVcmxQYXJhbSgncGFnZScpIHx8ICcuLi9kaXN0L2luZGV4LmpzJztcbiAgIHdpbmRvdy53ZWV4LmluaXQoe1xuICAgICBhcHBJZDogbG9jYXRpb24uaHJlZlxuICAgICAsIGxvYWRlcjogbG9hZGVyXG4gICAgICwgc291cmNlOiBwYWdlXG4gICAgICwgcm9vdElkOiAnd2VleCdcbiAgIH0pXG4gfSkoKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2ViL2pzL2luaXQuanMiXSwic291cmNlUm9vdCI6IiJ9