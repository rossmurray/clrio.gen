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

	"use strict";
	
	var _mainloop = __webpack_require__(1);
	
	var mainLoop = _interopRequireWildcard(_mainloop);
	
	var _screen = __webpack_require__(2);
	
	var _screen2 = _interopRequireDefault(_screen);
	
	var _scene = __webpack_require__(3);
	
	var _scene2 = _interopRequireDefault(_scene);
	
	var _timeKeeper = __webpack_require__(11);
	
	var timeKeeper = _interopRequireWildcard(_timeKeeper);
	
	var _settings = __webpack_require__(4);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _scratchpadScene = __webpack_require__(51);
	
	var _scratchpadScene2 = _interopRequireDefault(_scratchpadScene);
	
	var _simplexNoise = __webpack_require__(12);
	
	var _simplexNoise2 = _interopRequireDefault(_simplexNoise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var scene;
	var screen;
	
	function main() {
	    var canvas = document.getElementById("canvas");
	    var context = canvas.getContext("2d");
	    var width = canvas.clientWidth;
	    var height = canvas.clientHeight;
	    canvas.width = width;
	    canvas.height = height;
	
	    screen = new _screen2.default(context);
	    scene = new _scene2.default(screen);
	    //scene = new ScratchpadScene(screen);
	    mainLoop.setUpdate(mainUpdate);
	    mainLoop.setDraw(mainDraw);
	    mainLoop.setEnd(mainEnd);
	    mainLoop.start();
	}
	
	function mainUpdate(deltaMs) {
	    timeKeeper.updateTime(deltaMs);
	    scene.update();
	}
	
	function mainDraw(interpolationPercentage) {
	    screen.resize();
	    screen.clear();
	    scene.draw();
	}
	
	function mainEnd(fps, panic) {
	    if (panic) {
	        var discardedTime = Math.round(mainLoop.resetFrameDelta());
	        console.warn("Main loop panicked, probably because the browser tab was put in the background. Discarding " + discardedTime + "ms");
	    }
	}
	
	main();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * mainloop.js 1.0.3-20160320
	 *
	 * @author Isaac Sukin (http://www.isaacsukin.com/)
	 * @license MIT
	 */
	
	!function(a){function b(a){if(v=o(b),!(e+j>a)){for(d+=a-e,e=a,r(a,d),a>g+1e3&&(f=.25*h+.75*f,g=a,h=0),h++,i=0;d>=c;)if(s(c),d-=c,++i>=240){m=!0;break}t(d/c),u(f,m),m=!1}}var c=1e3/60,d=0,e=0,f=60,g=0,h=0,i=0,j=0,k=!1,l=!1,m=!1,n="object"==typeof window?window:a,o=n.requestAnimationFrame||function(){var a=Date.now(),b,d;return function(e){return b=Date.now(),d=Math.max(0,c-(b-a)),a=b+d,setTimeout(function(){e(b+d)},d)}}(),p=n.cancelAnimationFrame||clearTimeout,q=function(){},r=q,s=q,t=q,u=q,v;a.MainLoop={getSimulationTimestep:function(){return c},setSimulationTimestep:function(a){return c=a,this},getFPS:function(){return f},getMaxAllowedFPS:function(){return 1e3/j},setMaxAllowedFPS:function(a){return"undefined"==typeof a&&(a=1/0),0===a?this.stop():j=1e3/a,this},resetFrameDelta:function(){var a=d;return d=0,a},setBegin:function(a){return r=a||r,this},setUpdate:function(a){return s=a||s,this},setDraw:function(a){return t=a||t,this},setEnd:function(a){return u=a||u,this},start:function(){return l||(l=!0,v=o(function(a){t(1),k=!0,e=a,g=a,h=0,v=o(b)})),this},stop:function(){return k=!1,l=!1,p(v),this},isRunning:function(){return k}}, true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (a.MainLoop), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&null!==module&&"object"==typeof module.exports&&(module.exports=a.MainLoop)}(this);
	//# sourceMappingURL=mainloop.min.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Screen = function () {
	    function Screen(context) {
	        _classCallCheck(this, Screen);
	
	        var canvas = context.canvas;
	        this.canvas = canvas;
	        this.context = context;
	        this.width = canvas.width;
	        this.height = canvas.height;
	    }
	
	    _createClass(Screen, [{
	        key: "makeImageData",
	        value: function makeImageData(width, height) {
	            var w = width || this.width;
	            var h = height || this.height;
	            var imageData = this.context.createImageData(w, h);
	            return imageData;
	        }
	    }, {
	        key: "clear",
	        value: function clear(color) {
	            this.context.shadowBlur = 0;
	            if (!color) {
	                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	                return;
	            }
	            this.context.fillStyle = color;
	            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	        }
	    }, {
	        key: "resize",
	        value: function resize() {
	            var width = this.canvas.clientWidth;
	            var height = this.canvas.clientHeight;
	            if (this.canvas.width != width || this.canvas.height != height) {
	                this.canvas.width = width;
	                this.canvas.height = height;
	                this.width = width;
	                this.height = height;
	            }
	        }
	    }, {
	        key: "drawCircles",
	        value: function drawCircles(circles) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = circles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var circle = _step.value;
	
	                    drawCircle(this.context, circle.x, circle.y, circle.r, circle.color);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "drawLines",
	        value: function drawLines(lines) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = lines[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var line = _step2.value;
	
	                    drawLine(this.context, line.x, line.y, line.radians, line.length);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "drawRectangles",
	        value: function drawRectangles(rectangles, shadowSize) {
	            if (shadowSize) {
	                this.context.shadowColor = "#322";
	                this.context.shadowBlur = shadowSize;
	                this.context.shadowOffsetX = 13;
	                this.context.shadowOffsetY = 14;
	            }
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = rectangles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var rect = _step3.value;
	
	                    this.context.fillStyle = rect.color;
	                    this.context.fillRect(rect.x, rect.y, rect.width, rect.height);
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "drawImageStretch",
	        value: function drawImageStretch(imageElement) {
	            var width = this.canvas.width;
	            var height = this.canvas.height;
	            this.context.drawImage(imageElement, 0, 0, width, height);
	        }
	    }], [{
	        key: "virtualContext",
	        value: function virtualContext(width, height) {
	            var canvas = document.createElement("canvas");
	            canvas.width = width;
	            canvas.height = height;
	            var context = canvas.getContext("2d");
	            return context;
	        }
	    }]);
	
	    return Screen;
	}();
	
	function drawCircle(context, x, y, r, fillStyle) {
	    context.beginPath();
	    context.arc(x, y, r, 0, 2 * Math.PI, false);
	    if (fillStyle) {
	        context.fillStyle = fillStyle;
	    }
	    context.fill();
	}
	
	function drawLine(context, x, y, length, radians, strokeStyle, lineWidth) {
	    var x2 = x + length * Math.cos(radians);
	    var y2 = y + length * Math.sin(radians);
	    context.beginPath();
	    context.moveTo(x, y);
	    context.lineTo(x2, y2);
	    if (strokeStyle) {
	        context.strokeStyle = strokeStyle;
	    }
	    if (lineWidth) {
	        context.lineWidth = lineWidth;
	    }
	    context.stroke();
	}
	
	exports.default = Screen;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _settings = __webpack_require__(4);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _newPanels = __webpack_require__(5);
	
	var _newPanels2 = _interopRequireDefault(_newPanels);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Scene = function () {
	    function Scene(screen) {
	        _classCallCheck(this, Scene);
	
	        this.panels = new _newPanels2.default(screen);
	        this.screen = screen;
	    }
	
	    _createClass(Scene, [{
	        key: "update",
	        value: function update() {
	            this.panels.update();
	        }
	    }, {
	        key: "draw",
	        value: function draw() {
	            this.panels.draw();
	        }
	    }]);
	
	    return Scene;
	}();
	
	exports.default = Scene;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var settings = {
	    bgColor: "#bdad9e",
	    numPanels: 55,
	    panelXMarginFactor: 0.05,
	    panelYMarginFactor: 0.05,
	    panelMinWidthFactorOfMargin: 0.4,
	    panelMaxWidthFactorOfMin: 2.4,
	    panelMinHeightRatio: 0.9,
	    panelMaxHeightRatio: 2.6,
	    panelMinTTL: 4700,
	    panelMaxTTL: 8133,
	    panelShadowSize: 10,
	    //---------------
	    marginPercent: 0.05,
	    panels: {
	        sizeVariation: 1.7, //higher = smallest and largest panels are more different. 2 = the largest panel will be double the smallest.
	        maxRatioSkew: 0, //maximum difference in ratio between widest and tallest panels. ex: 0.2 means ratios can range from 0.9 to 1.1
	        maxSpeed: { min: 0.08, max: 0.65 }, //fastest a panel can move, varying on panel value. 0 = cannot move. 1 = can travel the screen in 1 second.
	        acceleration: { min: 0, max: 0 }, //something
	        minIdle: { min: 9000, max: 15000 }, //shortest idle time (ms) before moving again, varying with panel value.
	        maxIdle: { min: 24000, max: 135000 }, //longest idle time (ms) before moving again, varying with panel value.
	        //sway?
	        marginPercent: 0.05,
	        count: 68,
	        visualDensityPercent: 1.05, //percentage of total area matched by area of panels (assuming no overlap)
	        emptyGridPercent: 0.012, //what percentage of slots are not occupied by panels at any given time
	        color1: "#c20a02", //red
	        color2: "#f48102", //orange
	        color3: "#eccc07", //yellow
	        color4: "#e7d9ac" //light pale yellow
	    }
	};
	
	exports.default = settings;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utility = __webpack_require__(6);
	
	var utility = _interopRequireWildcard(_utility);
	
	var _husl = __webpack_require__(7);
	
	var husl = _interopRequireWildcard(_husl);
	
	var _wave = __webpack_require__(10);
	
	var _wave2 = _interopRequireDefault(_wave);
	
	var _timeKeeper = __webpack_require__(11);
	
	var timeKeeper = _interopRequireWildcard(_timeKeeper);
	
	var _simplexNoise = __webpack_require__(12);
	
	var _simplexNoise2 = _interopRequireDefault(_simplexNoise);
	
	var _settings = __webpack_require__(4);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _panel = __webpack_require__(14);
	
	var _panel2 = _interopRequireDefault(_panel);
	
	var _panelLayer = __webpack_require__(16);
	
	var _panelLayer2 = _interopRequireDefault(_panelLayer);
	
	var _gridLayout = __webpack_require__(17);
	
	var _gridLayout2 = _interopRequireDefault(_gridLayout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NewPanels = function () {
	    function NewPanels(screen) {
	        _classCallCheck(this, NewPanels);
	
	        var width = screen.width;
	        var height = screen.height;
	        var margin = calculateMargin(width, height);
	        var fieldWidth = margin.x2 - margin.x1;
	        var fieldHeight = margin.y2 - margin.y1;
	        var bounds = { x: margin.x1, y: margin.y1, width: fieldWidth, height: fieldHeight };
	        var noiseGen = new _simplexNoise2.default({
	            octaves: 1,
	            min: 0,
	            max: 1,
	            frequency: 1 / 29
	        });
	        var layer1 = new _panelLayer2.default(bounds);
	
	        this.screen = screen;
	        this.margin = margin;
	        this.noise = noiseGen;
	        this.layers = [layer1];
	    }
	
	    _createClass(NewPanels, [{
	        key: "update",
	        value: function update() {
	            //const now = timeKeeper.getTotalTimeMs();
	            for (var i = 0; i < this.layers.length; i++) {
	                var layer = this.layers[i];
	                layer.update();
	            }
	        }
	    }, {
	        key: "draw",
	        value: function draw() {
	            var panels = this.layers.reduce(function (a, b) {
	                return a.concat(b.getPanelsForDraw());
	            }, []);
	            this.screen.drawRectangles(panels, 22);
	            //this.screen.drawCircles(this.grid.empty.map(x => { return {x: x.x, y: x.y, r: 20, color: "#0ff"}; }));
	        }
	    }]);
	
	    return NewPanels;
	}();
	
	function calculateMargin(width, height) {
	    var marginX = width * _settings2.default.panels.marginPercent;
	    var marginY = height * _settings2.default.panels.marginPercent;
	    var maxX = width - marginX;
	    var maxY = height - marginY;
	    return {
	        x1: marginX,
	        y1: marginY,
	        x2: maxX,
	        y2: maxY
	    };
	}
	
	exports.default = NewPanels;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.randomInt = randomInt;
	exports.randomNumber = randomNumber;
	exports.distance = distance;
	exports.clamp = clamp;
	exports.scale = scale;
	exports.scaleFrom = scaleFrom;
	function randomInt(min, max) {
	    return Math.floor(Math.random() * (max - min)) + min;
	}
	
	function randomNumber(min, max) {
	    return Math.random() * (max - min) + min;
	}
	
	function distance(a, b) {
	    return Math.hypot(b.x - a.x, b.y - a.y);
	}
	
	function clamp(value, min, max) {
	    return Math.min(Math.max(value, min), max);
	}
	
	function scale(value, min, max) {
	    var delta = max - min;
	    var result = value * delta + min;
	    return result;
	}
	
	function scaleFrom(value, valueMin, valueMax, newMin, newMax) {
	    var oldDelta = valueMax - valueMin;
	    var newDelta = newMax - newMin;
	    //difference in scale between old range and new range
	    var ratio = newDelta / oldDelta;
	    //shift the value so zero is the min, then scale by the ratio, then shift to the new min.
	    var result = (value - valueMin) * ratio + newMin;
	    return result;
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {// Generated by CoffeeScript 1.9.3
	(function() {
	  var L_to_Y, Y_to_L, conv, distanceFromPole, dotProduct, epsilon, fromLinear, getBounds, intersectLineLine, kappa, lengthOfRayUntilIntersect, m, m_inv, maxChromaForLH, maxSafeChromaForL, refU, refV, root, toLinear;
	
	  m = {
	    R: [3.2409699419045214, -1.5373831775700935, -0.49861076029300328],
	    G: [-0.96924363628087983, 1.8759675015077207, 0.041555057407175613],
	    B: [0.055630079696993609, -0.20397695888897657, 1.0569715142428786]
	  };
	
	  m_inv = {
	    X: [0.41239079926595948, 0.35758433938387796, 0.18048078840183429],
	    Y: [0.21263900587151036, 0.71516867876775593, 0.072192315360733715],
	    Z: [0.019330818715591851, 0.11919477979462599, 0.95053215224966058]
	  };
	
	  refU = 0.19783000664283681;
	
	  refV = 0.468319994938791;
	
	  kappa = 903.2962962962963;
	
	  epsilon = 0.0088564516790356308;
	
	  getBounds = function(L) {
	    var bottom, channel, j, k, len1, len2, m1, m2, m3, ref, ref1, ref2, ret, sub1, sub2, t, top1, top2;
	    sub1 = Math.pow(L + 16, 3) / 1560896;
	    sub2 = sub1 > epsilon ? sub1 : L / kappa;
	    ret = [];
	    ref = ['R', 'G', 'B'];
	    for (j = 0, len1 = ref.length; j < len1; j++) {
	      channel = ref[j];
	      ref1 = m[channel], m1 = ref1[0], m2 = ref1[1], m3 = ref1[2];
	      ref2 = [0, 1];
	      for (k = 0, len2 = ref2.length; k < len2; k++) {
	        t = ref2[k];
	        top1 = (284517 * m1 - 94839 * m3) * sub2;
	        top2 = (838422 * m3 + 769860 * m2 + 731718 * m1) * L * sub2 - 769860 * t * L;
	        bottom = (632260 * m3 - 126452 * m2) * sub2 + 126452 * t;
	        ret.push([top1 / bottom, top2 / bottom]);
	      }
	    }
	    return ret;
	  };
	
	  intersectLineLine = function(line1, line2) {
	    return (line1[1] - line2[1]) / (line2[0] - line1[0]);
	  };
	
	  distanceFromPole = function(point) {
	    return Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
	  };
	
	  lengthOfRayUntilIntersect = function(theta, line) {
	    var b1, len, m1;
	    m1 = line[0], b1 = line[1];
	    len = b1 / (Math.sin(theta) - m1 * Math.cos(theta));
	    if (len < 0) {
	      return null;
	    }
	    return len;
	  };
	
	  maxSafeChromaForL = function(L) {
	    var b1, j, len1, lengths, m1, ref, ref1, x;
	    lengths = [];
	    ref = getBounds(L);
	    for (j = 0, len1 = ref.length; j < len1; j++) {
	      ref1 = ref[j], m1 = ref1[0], b1 = ref1[1];
	      x = intersectLineLine([m1, b1], [-1 / m1, 0]);
	      lengths.push(distanceFromPole([x, b1 + x * m1]));
	    }
	    return Math.min.apply(Math, lengths);
	  };
	
	  maxChromaForLH = function(L, H) {
	    var hrad, j, l, len1, lengths, line, ref;
	    hrad = H / 360 * Math.PI * 2;
	    lengths = [];
	    ref = getBounds(L);
	    for (j = 0, len1 = ref.length; j < len1; j++) {
	      line = ref[j];
	      l = lengthOfRayUntilIntersect(hrad, line);
	      if (l !== null) {
	        lengths.push(l);
	      }
	    }
	    return Math.min.apply(Math, lengths);
	  };
	
	  dotProduct = function(a, b) {
	    var i, j, ref, ret;
	    ret = 0;
	    for (i = j = 0, ref = a.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
	      ret += a[i] * b[i];
	    }
	    return ret;
	  };
	
	  fromLinear = function(c) {
	    if (c <= 0.0031308) {
	      return 12.92 * c;
	    } else {
	      return 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
	    }
	  };
	
	  toLinear = function(c) {
	    var a;
	    a = 0.055;
	    if (c > 0.04045) {
	      return Math.pow((c + a) / (1 + a), 2.4);
	    } else {
	      return c / 12.92;
	    }
	  };
	
	  conv = {
	    'xyz': {},
	    'luv': {},
	    'lch': {},
	    'husl': {},
	    'huslp': {},
	    'rgb': {},
	    'hex': {}
	  };
	
	  conv.xyz.rgb = function(tuple) {
	    var B, G, R;
	    R = fromLinear(dotProduct(m.R, tuple));
	    G = fromLinear(dotProduct(m.G, tuple));
	    B = fromLinear(dotProduct(m.B, tuple));
	    return [R, G, B];
	  };
	
	  conv.rgb.xyz = function(tuple) {
	    var B, G, R, X, Y, Z, rgbl;
	    R = tuple[0], G = tuple[1], B = tuple[2];
	    rgbl = [toLinear(R), toLinear(G), toLinear(B)];
	    X = dotProduct(m_inv.X, rgbl);
	    Y = dotProduct(m_inv.Y, rgbl);
	    Z = dotProduct(m_inv.Z, rgbl);
	    return [X, Y, Z];
	  };
	
	  Y_to_L = function(Y) {
	    if (Y <= epsilon) {
	      return Y * kappa;
	    } else {
	      return 116 * Math.pow(Y, 1 / 3) - 16;
	    }
	  };
	
	  L_to_Y = function(L) {
	    if (L <= 8) {
	      return L / kappa;
	    } else {
	      return Math.pow((L + 16) / 116, 3);
	    }
	  };
	
	  conv.xyz.luv = function(tuple) {
	    var L, U, V, X, Y, Z, varU, varV;
	    X = tuple[0], Y = tuple[1], Z = tuple[2];
	    if (Y === 0) {
	      return [0, 0, 0];
	    }
	    L = Y_to_L(Y);
	    varU = (4 * X) / (X + (15 * Y) + (3 * Z));
	    varV = (9 * Y) / (X + (15 * Y) + (3 * Z));
	    U = 13 * L * (varU - refU);
	    V = 13 * L * (varV - refV);
	    return [L, U, V];
	  };
	
	  conv.luv.xyz = function(tuple) {
	    var L, U, V, X, Y, Z, varU, varV;
	    L = tuple[0], U = tuple[1], V = tuple[2];
	    if (L === 0) {
	      return [0, 0, 0];
	    }
	    varU = U / (13 * L) + refU;
	    varV = V / (13 * L) + refV;
	    Y = L_to_Y(L);
	    X = 0 - (9 * Y * varU) / ((varU - 4) * varV - varU * varV);
	    Z = (9 * Y - (15 * varV * Y) - (varV * X)) / (3 * varV);
	    return [X, Y, Z];
	  };
	
	  conv.luv.lch = function(tuple) {
	    var C, H, Hrad, L, U, V;
	    L = tuple[0], U = tuple[1], V = tuple[2];
	    C = Math.sqrt(Math.pow(U, 2) + Math.pow(V, 2));
	    if (C < 0.00000001) {
	      H = 0;
	    } else {
	      Hrad = Math.atan2(V, U);
	      H = Hrad * 360 / 2 / Math.PI;
	      if (H < 0) {
	        H = 360 + H;
	      }
	    }
	    return [L, C, H];
	  };
	
	  conv.lch.luv = function(tuple) {
	    var C, H, Hrad, L, U, V;
	    L = tuple[0], C = tuple[1], H = tuple[2];
	    Hrad = H / 360 * 2 * Math.PI;
	    U = Math.cos(Hrad) * C;
	    V = Math.sin(Hrad) * C;
	    return [L, U, V];
	  };
	
	  conv.husl.lch = function(tuple) {
	    var C, H, L, S, max;
	    H = tuple[0], S = tuple[1], L = tuple[2];
	    if (L > 99.9999999 || L < 0.00000001) {
	      C = 0;
	    } else {
	      max = maxChromaForLH(L, H);
	      C = max / 100 * S;
	    }
	    return [L, C, H];
	  };
	
	  conv.lch.husl = function(tuple) {
	    var C, H, L, S, max;
	    L = tuple[0], C = tuple[1], H = tuple[2];
	    if (L > 99.9999999 || L < 0.00000001) {
	      S = 0;
	    } else {
	      max = maxChromaForLH(L, H);
	      S = C / max * 100;
	    }
	    return [H, S, L];
	  };
	
	  conv.huslp.lch = function(tuple) {
	    var C, H, L, S, max;
	    H = tuple[0], S = tuple[1], L = tuple[2];
	    if (L > 99.9999999 || L < 0.00000001) {
	      C = 0;
	    } else {
	      max = maxSafeChromaForL(L);
	      C = max / 100 * S;
	    }
	    return [L, C, H];
	  };
	
	  conv.lch.huslp = function(tuple) {
	    var C, H, L, S, max;
	    L = tuple[0], C = tuple[1], H = tuple[2];
	    if (L > 99.9999999 || L < 0.00000001) {
	      S = 0;
	    } else {
	      max = maxSafeChromaForL(L);
	      S = C / max * 100;
	    }
	    return [H, S, L];
	  };
	
	  conv.rgb.hex = function(tuple) {
	    var ch, hex, j, len1;
	    hex = "#";
	    for (j = 0, len1 = tuple.length; j < len1; j++) {
	      ch = tuple[j];
	      ch = Math.round(ch * 1e6) / 1e6;
	      if (ch < 0 || ch > 1) {
	        throw new Error("Illegal rgb value: " + ch);
	      }
	      ch = Math.round(ch * 255).toString(16);
	      if (ch.length === 1) {
	        ch = "0" + ch;
	      }
	      hex += ch;
	    }
	    return hex;
	  };
	
	  conv.hex.rgb = function(hex) {
	    var b, g, j, len1, n, r, ref, results;
	    if (hex.charAt(0) === "#") {
	      hex = hex.substring(1, 7);
	    }
	    r = hex.substring(0, 2);
	    g = hex.substring(2, 4);
	    b = hex.substring(4, 6);
	    ref = [r, g, b];
	    results = [];
	    for (j = 0, len1 = ref.length; j < len1; j++) {
	      n = ref[j];
	      results.push(parseInt(n, 16) / 255);
	    }
	    return results;
	  };
	
	  conv.lch.rgb = function(tuple) {
	    return conv.xyz.rgb(conv.luv.xyz(conv.lch.luv(tuple)));
	  };
	
	  conv.rgb.lch = function(tuple) {
	    return conv.luv.lch(conv.xyz.luv(conv.rgb.xyz(tuple)));
	  };
	
	  conv.husl.rgb = function(tuple) {
	    return conv.lch.rgb(conv.husl.lch(tuple));
	  };
	
	  conv.rgb.husl = function(tuple) {
	    return conv.lch.husl(conv.rgb.lch(tuple));
	  };
	
	  conv.huslp.rgb = function(tuple) {
	    return conv.lch.rgb(conv.huslp.lch(tuple));
	  };
	
	  conv.rgb.huslp = function(tuple) {
	    return conv.lch.huslp(conv.rgb.lch(tuple));
	  };
	
	  root = {};
	
	  root.fromRGB = function(R, G, B) {
	    return conv.rgb.husl([R, G, B]);
	  };
	
	  root.fromHex = function(hex) {
	    return conv.rgb.husl(conv.hex.rgb(hex));
	  };
	
	  root.toRGB = function(H, S, L) {
	    return conv.husl.rgb([H, S, L]);
	  };
	
	  root.toHex = function(H, S, L) {
	    return conv.rgb.hex(conv.husl.rgb([H, S, L]));
	  };
	
	  root.p = {};
	
	  root.p.toRGB = function(H, S, L) {
	    return conv.xyz.rgb(conv.luv.xyz(conv.lch.luv(conv.huslp.lch([H, S, L]))));
	  };
	
	  root.p.toHex = function(H, S, L) {
	    return conv.rgb.hex(conv.xyz.rgb(conv.luv.xyz(conv.lch.luv(conv.huslp.lch([H, S, L])))));
	  };
	
	  root.p.fromRGB = function(R, G, B) {
	    return conv.lch.huslp(conv.luv.lch(conv.xyz.luv(conv.rgb.xyz([R, G, B]))));
	  };
	
	  root.p.fromHex = function(hex) {
	    return conv.lch.huslp(conv.luv.lch(conv.xyz.luv(conv.rgb.xyz(conv.hex.rgb(hex)))));
	  };
	
	  root._conv = conv;
	
	  root._getBounds = getBounds;
	
	  root._maxChromaForLH = maxChromaForLH;
	
	  root._maxSafeChromaForL = maxSafeChromaForL;
	
	  if (!((typeof module !== "undefined" && module !== null) || (typeof jQuery !== "undefined" && jQuery !== null) || (typeof requirejs !== "undefined" && requirejs !== null))) {
	    this.HUSL = root;
	  }
	
	  if (typeof module !== "undefined" && module !== null) {
	    module.exports = root;
	  }
	
	  if (typeof jQuery !== "undefined" && jQuery !== null) {
	    jQuery.husl = root;
	  }
	
	  if ((typeof requirejs !== "undefined" && requirejs !== null) && ("function" !== "undefined" && __webpack_require__(9) !== null)) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (root), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 8 */
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
/* 9 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _timeKeeper = __webpack_require__(11);
	
	var timeKeeper = _interopRequireWildcard(_timeKeeper);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var wave = build;
	wave.linear = linear;
	wave.sawtooth = sawtooth;
	wave.sine = sine;
	wave.triangle = triangle;
	wave.square = square;
	wave.round = round;
	wave.reverse = reverse;
	wave.time = time;
	wave.timePeriod = timePeriod;
	wave.smooth = smoothStep;
	exports.default = wave;
	
	/**
	 * config options:
	 * frequency
	 * shift
	 * min
	 * max
	 * frequencyMod
	 * phaseMod
	 * carrierMin
	 * carrierMax
	 * carrierFrequency
	 */
	
	function build(carrier, config) {
	    if (!carrier || typeof carrier !== "function") {
	        return function (x) {
	            return carrier;
	        };
	    }
	    if (!config) {
	        return carrier;
	    }
	    var carrierFrequency = config.carrierFrequency || 1;
	    var carrierMin = config.carrierMin || 0;
	    var carrierMax = config.carrierMax || 1;
	    var targetMin = config.min || 0;
	    var targetMax = config.max || 1;
	    var frequency = config.frequency || 1;
	    var shift = config.shift || 0;
	    var frequencyMod = config.frequencyMod || function (x) {
	        return 1;
	    };
	    var phaseMod = config.phaseMod || function (x) {
	        return 0;
	    };
	    var targetDelta = targetMax - targetMin;
	    var carrierDelta = carrierMax - carrierMin;
	
	    var A = carrierDelta != 0 ? targetDelta / carrierDelta : 0;
	    var B = carrierFrequency != 0 ? frequency / carrierFrequency : 0;
	    var C = -shift;
	    var D = targetMin - carrierMin;
	
	    var result = function result(x) {
	        var a = A;
	        var b = B * frequencyMod(x);
	        var c = C + phaseMod(x);
	        var d = D;
	        var func = carrier;
	        return a * func(b * (x + c)) + d;
	    };
	    return result;
	}
	
	function time(x) {
	    return timeKeeper.getTimeProgress(x);
	}
	
	function timePeriod(x) {
	    var totalTimeMs = timeKeeper.getTotalTimeMs();
	    return totalTimeMs % x / x;
	}
	
	function linear(x) {
	    return x % 1;
	}
	
	//todo improve this. generate using fft?
	function sawtooth(x) {
	    return linear(x);
	}
	
	function sine(x) {
	    return Math.sin(x * Math.PI * 2) * 0.5 + 0.5;
	}
	
	function triangle(x) {
	    return Math.abs((0.5 + x) % 1 - 0.5) * 2;
	}
	
	//todo this looks wrong. test
	function square(x) {
	    Math.sign(sine(x));
	}
	
	//todo: make this periodic
	function round(x) {
	    var y = x % 1;
	    var rad = Math.PI / 2;
	    var down = 3 * rad;
	    var turn = y * rad;
	    return 1 + Math.sin(down + turn);
	}
	
	//linear from 1 (exclusive) down to 0 (inclusive)
	function reverse(x) {
	    return 1 - Number.EPSILON - x;
	}
	
	function smoothStep(x) {
	    var y = x % 1;
	    return y * y * (3 - 2 * y);
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.updateTime = updateTime;
	exports.getTimeProgress = getTimeProgress;
	exports.getTotalTimeMs = getTotalTimeMs;
	exports.getLastDeltaMs = getLastDeltaMs;
	var totalTimeMs = 0;
	var lastDeltaMs = 0;
	
	function updateTime(deltaMs) {
	    lastDeltaMs = deltaMs;
	    totalTimeMs += deltaMs;
	}
	
	//todo: can this be shuffled around to improve the performance?
	function getTimeProgress(frequencyHz) {
	    var periodMs = 1000 / frequencyHz;
	    return totalTimeMs % periodMs / periodMs;
	}
	
	function getTotalTimeMs() {
	    return totalTimeMs;
	}
	
	function getLastDeltaMs() {
	    return lastDeltaMs;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _fastSimplexNoise = __webpack_require__(13);
	
	var _fastSimplexNoise2 = _interopRequireDefault(_fastSimplexNoise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SimplexNoise = function () {
	    function SimplexNoise(config) {
	        _classCallCheck(this, SimplexNoise);
	
	        var min = config.min || 0;
	        var max = config.max || 1;
	        var octaves = config.octaves || 1;
	        var frequency = config.frequency || 1;
	        var gen = new _fastSimplexNoise2.default({
	            octaves: octaves,
	            min: min,
	            max: max,
	            frequency: frequency
	        });
	        this.generator = gen;
	    }
	
	    _createClass(SimplexNoise, [{
	        key: "in2D",
	        value: function in2D(x, y) {
	            return this.generator.in2D(x, y);
	        }
	
	        /**
	         * pixelFunc is function(x, y, value) and should return an array of 3 integers (0-255) (rgb)
	         */
	
	    }, {
	        key: "getFilledImageData",
	        value: function getFilledImageData(screen, pixelFunc) {
	            var imageData = screen.makeImageData();
	            var data = imageData.data;
	            var width = screen.width;
	            for (var i = 0; i < data.length; i += 4) {
	                var x = i / 4 % width;
	                var y = Math.floor(i / 4 / width);
	                var tone = this.generator.in2D(x, y);
	                var userPixel = pixelFunc(x, y, tone);
	                data[i] = Math.floor(userPixel[0] * 255);
	                data[i + 1] = Math.floor(userPixel[1] * 255);
	                data[i + 2] = Math.floor(userPixel[2] * 255);
	                data[i + 3] = 255; //alpha
	            }
	            return imageData;
	        }
	    }]);
	
	    return SimplexNoise;
	}();
	
	exports.default = SimplexNoise;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A speed-improved simplex noise algorithm for 2D, 3D and 4D in JavaScript.
	 *
	 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
	 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
	 * Better rank ordering method by Stefan Gustavson in 2012.
	 *
	 * This code was placed in the public domain by its original author,
	 * Stefan Gustavson. You may use it as you see fit, but
	 * attribution is appreciated.
	 */
	
	// Data ------------------------------------------------------------------------
	
	var G2 = (3.0 - Math.sqrt(3.0)) / 6.0
	var G3 = 1.0 / 6.0
	var G4 = (5.0 - Math.sqrt(5.0)) / 20.0
	
	var GRAD3 = [
	  [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
	  [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
	  [0, 1, 1], [0, -1, -1], [0, 1, -1], [0, -1, -1]
	]
	
	var GRAD4 = [
	  [0, 1, 1, 1], [0, 1, 1, -1], [0, 1, -1, 1], [0, 1, -1, -1],
	  [0, -1, 1, 1], [0, -1, 1, -1], [0, -1, -1, 1], [0, -1, -1, -1],
	  [1, 0, 1, 1], [1, 0, 1, -1], [1, 0, -1, 1], [1, 0, -1, -1],
	  [-1, 0, 1, 1], [-1, 0, 1, -1], [-1, 0, -1, 1], [-1, 0, -1, -1],
	  [1, 1, 0, 1], [1, 1, 0, -1], [1, -1, 0, 1], [1, -1, 0, -1],
	  [-1, 1, 0, 1], [-1, 1, 0, -1], [-1, -1, 0, 1], [-1, -1, 0, -1],
	  [1, 1, 1, 0], [1, 1, -1, 0], [1, -1, 1, 0], [1, -1, -1, 0],
	  [-1, 1, 1, 0], [-1, 1, -1, 0], [-1, -1, 1, 0], [-1, -1, -1, 0]
	]
	
	// Exports ---------------------------------------------------------------------
	
	if (true) module.exports = FastSimplexNoise
	
	// Functions -------------------------------------------------------------------
	
	function FastSimplexNoise (options) {
	  if (!options) options = {}
	
	  this.amplitude = options.amplitude || 1.0
	  this.frequency = options.frequency || 1.0
	  this.octaves = parseInt(options.octaves || 1)
	  this.persistence = options.persistence || 0.5
	  this.random = options.random || Math.random
	
	  if (typeof options.min === 'number' && typeof options.max === 'number') {
	    if (options.min >= options.max) {
	      console.error('options.min must be less than options.max')
	    } else {
	      var min = parseFloat(options.min)
	      var max = parseFloat(options.max)
	      var range = max - min
	      this.scale = function (value) {
	        return min + ((value + 1) / 2) * range
	      }
	    }
	  } else {
	    this.scale = function (value) {
	      return value
	    }
	  }
	
	  var i
	  var p = new Uint8Array(256)
	  for (i = 0; i < 256; i++) {
	    p[i] = i
	  }
	
	  var n, q
	  for (i = 255; i > 0; i--) {
	    n = Math.floor((i + 1) * this.random())
	    q = p[i]
	    p[i] = p[n]
	    p[n] = q
	  }
	
	  // To remove the need for index wrapping, double the permutation table length
	  this.perm = new Uint8Array(512)
	  this.permMod12 = new Uint8Array(512)
	  for (i = 0; i < 512; i++) {
	    this.perm[i] = p[i & 255]
	    this.permMod12[i] = this.perm[i] % 12
	  }
	}
	
	FastSimplexNoise.prototype.cylindrical2D = function (c, x, y) {
	  var nx = x / c
	  var r = c / (2 * Math.PI)
	  var rdx = nx * 2 * Math.PI
	  var a = r * Math.sin(rdx)
	  var b = r * Math.cos(rdx)
	
	  return this.in3D(a, b, y)
	}
	
	FastSimplexNoise.prototype.cylindrical3D = function (c, x, y, z) {
	  var nx = x / c
	  var r = c / (2 * Math.PI)
	  var rdx = nx * 2 * Math.PI
	  var a = r * Math.sin(rdx)
	  var b = r * Math.cos(rdx)
	
	  return this.in4D(a, b, y, z)
	}
	
	FastSimplexNoise.prototype.in2D = function (x, y) {
	  var amplitude = this.amplitude
	  var frequency = this.frequency
	  var maxAmplitude = 0
	  var noise = 0
	  var persistence = this.persistence
	
	  for (var i = 0; i < this.octaves; i++) {
	    noise += this.raw2D(x * frequency, y * frequency) * amplitude
	    maxAmplitude += amplitude
	    amplitude *= persistence
	    frequency *= 2
	  }
	
	  var value = noise / maxAmplitude
	  return this.scale(value)
	}
	
	FastSimplexNoise.prototype.in3D = function (x, y, z) {
	  var amplitude = this.amplitude
	  var frequency = this.frequency
	  var maxAmplitude = 0
	  var noise = 0
	  var persistence = this.persistence
	
	  for (var i = 0; i < this.octaves; i++) {
	    noise += this.raw3D(x * frequency, y * frequency, z * frequency) * amplitude
	    maxAmplitude += amplitude
	    amplitude *= persistence
	    frequency *= 2
	  }
	
	  var value = noise / maxAmplitude
	  return this.scale(value)
	}
	
	FastSimplexNoise.prototype.in4D = function (x, y, z, w) {
	  var amplitude = this.amplitude
	  var frequency = this.frequency
	  var maxAmplitude = 0
	  var noise = 0
	  var persistence = this.persistence
	
	  for (var i = 0; i < this.octaves; i++) {
	    noise += this.raw4D(x * frequency, y * frequency, z * frequency, w * frequency) * amplitude
	    maxAmplitude += amplitude
	    amplitude *= persistence
	    frequency *= 2
	  }
	
	  var value = noise / maxAmplitude
	  return this.scale(value)
	}
	
	FastSimplexNoise.prototype.raw2D = function (x, y) {
	  var perm = this.perm
	  var permMod12 = this.permMod12
	
	  var n0, n1, n2 // Noise contributions from the three corners
	
	  // Skew the input space to determine which simplex cell we're in
	  var s = (x + y) * 0.5 * (Math.sqrt(3.0) - 1.0) // Hairy factor for 2D
	  var i = Math.floor(x + s)
	  var j = Math.floor(y + s)
	  var t = (i + j) * G2
	  var X0 = i - t // Unskew the cell origin back to (x,y) space
	  var Y0 = j - t
	  var x0 = x - X0 // The x,y distances from the cell origin
	  var y0 = y - Y0
	
	  // For the 2D case, the simplex shape is an equilateral triangle.
	  // Determine which simplex we are in.
	  var i1, j1 // Offsets for second (middle) corner of simplex in (i,j) coords
	  if (x0 > y0) { // Lower triangle, XY order: (0,0)->(1,0)->(1,1)
	    i1 = 1
	    j1 = 0
	  } else { // Upper triangle, YX order: (0,0)->(0,1)->(1,1)
	    i1 = 0
	    j1 = 1
	  }
	
	  // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
	  // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
	  // c = (3 - sqrt(3)) / 6
	
	  var x1 = x0 - i1 + G2 // Offsets for middle corner in (x,y) unskewed coords
	  var y1 = y0 - j1 + G2
	  var x2 = x0 - 1.0 + 2.0 * G2 // Offsets for last corner in (x,y) unskewed coords
	  var y2 = y0 - 1.0 + 2.0 * G2
	
	  // Work out the hashed gradient indices of the three simplex corners
	  var ii = i & 255
	  var jj = j & 255
	  var gi0 = permMod12[ii + perm[jj]]
	  var gi1 = permMod12[ii + i1 + perm[jj + j1]]
	  var gi2 = permMod12[ii + 1 + perm[jj + 1]]
	
	  // Calculate the contribution from the three corners
	  var t0 = 0.5 - x0 * x0 - y0 * y0
	  if (t0 < 0) {
	    n0 = 0.0
	  } else {
	    t0 *= t0
	    // (x,y) of 3D gradient used for 2D gradient
	    n0 = t0 * t0 * dot2D(GRAD3[gi0], x0, y0)
	  }
	  var t1 = 0.5 - x1 * x1 - y1 * y1
	  if (t1 < 0) {
	    n1 = 0.0
	  } else {
	    t1 *= t1
	    n1 = t1 * t1 * dot2D(GRAD3[gi1], x1, y1)
	  }
	  var t2 = 0.5 - x2 * x2 - y2 * y2
	  if (t2 < 0) {
	    n2 = 0.0
	  } else {
	    t2 *= t2
	    n2 = t2 * t2 * dot2D(GRAD3[gi2], x2, y2)
	  }
	
	  // Add contributions from each corner to get the final noise value.
	  // The result is scaled to return values in the interval [-1, 1]
	  return 70.14805770654148 * (n0 + n1 + n2)
	}
	
	FastSimplexNoise.prototype.raw3D = function (x, y, z) {
	  var perm = this.perm
	  var permMod12 = this.permMod12
	
	  var n0, n1, n2, n3 // Noise contributions from the four corners
	
	  // Skew the input space to determine which simplex cell we're in
	  var s = (x + y + z) / 3.0 // Very nice and simple skew factor for 3D
	  var i = Math.floor(x + s)
	  var j = Math.floor(y + s)
	  var k = Math.floor(z + s)
	  var t = (i + j + k) * G3
	  var X0 = i - t // Unskew the cell origin back to (x,y,z) space
	  var Y0 = j - t
	  var Z0 = k - t
	  var x0 = x - X0 // The x,y,z distances from the cell origin
	  var y0 = y - Y0
	  var z0 = z - Z0
	
	  // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
	  // Determine which simplex we are in.
	  var i1, j1, k1 // Offsets for second corner of simplex in (i,j,k) coords
	  var i2, j2, k2 // Offsets for third corner of simplex in (i,j,k) coords
	  if (x0 >= y0) {
	    if (y0 >= z0) { // X Y Z order
	      i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0
	    } else if (x0 >= z0) { // X Z Y order
	      i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1
	    } else { // Z X Y order
	      i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1
	    }
	  } else { // x0 < y0
	    if (y0 < z0) { // Z Y X order
	      i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1
	    } else if (x0 < z0) { // Y Z X order
	      i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1
	    } else { // Y X Z order
	      i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0
	    }
	  }
	
	  // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
	  // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
	  // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
	  // c = 1/6.
	  var x1 = x0 - i1 + G3 // Offsets for second corner in (x,y,z) coords
	  var y1 = y0 - j1 + G3
	  var z1 = z0 - k1 + G3
	  var x2 = x0 - i2 + 2.0 * G3 // Offsets for third corner in (x,y,z) coords
	  var y2 = y0 - j2 + 2.0 * G3
	  var z2 = z0 - k2 + 2.0 * G3
	  var x3 = x0 - 1.0 + 3.0 * G3 // Offsets for last corner in (x,y,z) coords
	  var y3 = y0 - 1.0 + 3.0 * G3
	  var z3 = z0 - 1.0 + 3.0 * G3
	
	  // Work out the hashed gradient indices of the four simplex corners
	  var ii = i & 255
	  var jj = j & 255
	  var kk = k & 255
	  var gi0 = permMod12[ii + perm[jj + perm[kk]]]
	  var gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]]
	  var gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]]
	  var gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]]
	
	  // Calculate the contribution from the four corners
	  var t0 = 0.5 - x0 * x0 - y0 * y0 - z0 * z0
	  if (t0 < 0) {
	    n0 = 0.0
	  } else {
	    t0 *= t0
	    n0 = t0 * t0 * dot3D(GRAD3[gi0], x0, y0, z0)
	  }
	  var t1 = 0.5 - x1 * x1 - y1 * y1 - z1 * z1
	  if (t1 < 0) {
	    n1 = 0.0
	  } else {
	    t1 *= t1
	    n1 = t1 * t1 * dot3D(GRAD3[gi1], x1, y1, z1)
	  }
	  var t2 = 0.5 - x2 * x2 - y2 * y2 - z2 * z2
	  if (t2 < 0) {
	    n2 = 0.0
	  } else {
	    t2 *= t2
	    n2 = t2 * t2 * dot3D(GRAD3[gi2], x2, y2, z2)
	  }
	  var t3 = 0.5 - x3 * x3 - y3 * y3 - z3 * z3
	  if (t3 < 0) {
	    n3 = 0.0
	  } else {
	    t3 *= t3
	    n3 = t3 * t3 * dot3D(GRAD3[gi3], x3, y3, z3)
	  }
	
	  // Add contributions from each corner to get the final noise value.
	  // The result is scaled to stay just inside [-1,1]
	  return 94.68493150681972 * (n0 + n1 + n2 + n3)
	}
	
	FastSimplexNoise.prototype.raw4D = function (x, y, z, w) {
	  var perm = this.perm
	
	  var n0, n1, n2, n3, n4 // Noise contributions from the five corners
	
	  // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in
	  var s = (x + y + z + w) * (Math.sqrt(5.0) - 1.0) / 4.0 // Factor for 4D skewing
	  var i = Math.floor(x + s)
	  var j = Math.floor(y + s)
	  var k = Math.floor(z + s)
	  var l = Math.floor(w + s)
	  var t = (i + j + k + l) * G4 // Factor for 4D unskewing
	  var X0 = i - t // Unskew the cell origin back to (x,y,z,w) space
	  var Y0 = j - t
	  var Z0 = k - t
	  var W0 = l - t
	  var x0 = x - X0  // The x,y,z,w distances from the cell origin
	  var y0 = y - Y0
	  var z0 = z - Z0
	  var w0 = w - W0
	
	  // For the 4D case, the simplex is a 4D shape I won't even try to describe.
	  // To find out which of the 24 possible simplices we're in, we need to
	  // determine the magnitude ordering of x0, y0, z0 and w0.
	  // Six pair-wise comparisons are performed between each possible pair
	  // of the four coordinates, and the results are used to rank the numbers.
	  var rankx = 0
	  var ranky = 0
	  var rankz = 0
	  var rankw = 0
	  if (x0 > y0) {
	    rankx++
	  } else {
	    ranky++
	  }
	  if (x0 > z0) {
	    rankx++
	  } else {
	    rankz++
	  }
	  if (x0 > w0) {
	    rankx++
	  } else {
	    rankw++
	  }
	  if (y0 > z0) {
	    ranky++
	  } else {
	    rankz++
	  }
	  if (y0 > w0) {
	    ranky++
	  } else {
	    rankw++
	  }
	  if (z0 > w0) {
	    rankz++
	  } else {
	    rankw++
	  }
	  var i1, j1, k1, l1 // The integer offsets for the second simplex corner
	  var i2, j2, k2, l2 // The integer offsets for the third simplex corner
	  var i3, j3, k3, l3 // The integer offsets for the fourth simplex corner
	
	  // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
	  // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
	  // impossible. Only the 24 indices which have non-zero entries make any sense.
	  // We use a thresholding to set the coordinates in turn from the largest magnitude.
	  // Rank 3 denotes the largest coordinate.
	  i1 = rankx >= 3 ? 1 : 0
	  j1 = ranky >= 3 ? 1 : 0
	  k1 = rankz >= 3 ? 1 : 0
	  l1 = rankw >= 3 ? 1 : 0
	  // Rank 2 denotes the second largest coordinate.
	  i2 = rankx >= 2 ? 1 : 0
	  j2 = ranky >= 2 ? 1 : 0
	  k2 = rankz >= 2 ? 1 : 0
	  l2 = rankw >= 2 ? 1 : 0
	  // Rank 1 denotes the second smallest coordinate.
	  i3 = rankx >= 1 ? 1 : 0
	  j3 = ranky >= 1 ? 1 : 0
	  k3 = rankz >= 1 ? 1 : 0
	  l3 = rankw >= 1 ? 1 : 0
	
	  // The fifth corner has all coordinate offsets = 1, so no need to compute that.
	  var x1 = x0 - i1 + G4 // Offsets for second corner in (x,y,z,w) coords
	  var y1 = y0 - j1 + G4
	  var z1 = z0 - k1 + G4
	  var w1 = w0 - l1 + G4
	  var x2 = x0 - i2 + 2.0 * G4 // Offsets for third corner in (x,y,z,w) coords
	  var y2 = y0 - j2 + 2.0 * G4
	  var z2 = z0 - k2 + 2.0 * G4
	  var w2 = w0 - l2 + 2.0 * G4
	  var x3 = x0 - i3 + 3.0 * G4 // Offsets for fourth corner in (x,y,z,w) coords
	  var y3 = y0 - j3 + 3.0 * G4
	  var z3 = z0 - k3 + 3.0 * G4
	  var w3 = w0 - l3 + 3.0 * G4
	  var x4 = x0 - 1.0 + 4.0 * G4 // Offsets for last corner in (x,y,z,w) coords
	  var y4 = y0 - 1.0 + 4.0 * G4
	  var z4 = z0 - 1.0 + 4.0 * G4
	  var w4 = w0 - 1.0 + 4.0 * G4
	
	  // Work out the hashed gradient indices of the five simplex corners
	  var ii = i & 255
	  var jj = j & 255
	  var kk = k & 255
	  var ll = l & 255
	  var gi0 = perm[ii + perm[jj + perm[kk + perm[ll]]]] % 32
	  var gi1 = perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]] % 32
	  var gi2 = perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]] % 32
	  var gi3 = perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]] % 32
	  var gi4 = perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]] % 32
	
	  // Calculate the contribution from the five corners
	  var t0 = 0.5 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0
	  if (t0 < 0) {
	    n0 = 0.0
	  } else {
	    t0 *= t0
	    n0 = t0 * t0 * dot4D(GRAD4[gi0], x0, y0, z0, w0)
	  }
	  var t1 = 0.5 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1
	  if (t1 < 0) {
	    n1 = 0.0
	  } else {
	    t1 *= t1
	    n1 = t1 * t1 * dot4D(GRAD4[gi1], x1, y1, z1, w1)
	  }
	  var t2 = 0.5 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2
	  if (t2 < 0) {
	    n2 = 0.0
	  } else {
	    t2 *= t2
	    n2 = t2 * t2 * dot4D(GRAD4[gi2], x2, y2, z2, w2)
	  }
	  var t3 = 0.5 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3
	  if (t3 < 0) {
	    n3 = 0.0
	  } else {
	    t3 *= t3
	    n3 = t3 * t3 * dot4D(GRAD4[gi3], x3, y3, z3, w3)
	  }
	  var t4 = 0.5 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4
	  if (t4 < 0) {
	    n4 = 0.0
	  } else {
	    t4 *= t4
	    n4 = t4 * t4 * dot4D(GRAD4[gi4], x4, y4, z4, w4)
	  }
	
	  // Sum up and scale the result to cover the range [-1,1]
	  return 72.37857097679466 * (n0 + n1 + n2 + n3 + n4)
	}
	
	FastSimplexNoise.prototype.spherical2D = function (c, x, y) {
	  var nx = x / c
	  var ny = y / c
	  var rdx = nx * 2 * Math.PI
	  var rdy = ny * Math.PI
	  var sinY = Math.sin(rdy + Math.PI)
	  var sinRds = 2 * Math.PI
	  var a = sinRds * Math.sin(rdx) * sinY
	  var b = sinRds * Math.cos(rdx) * sinY
	  var d = sinRds * Math.cos(rdy)
	
	  return this.in3D(a, b, d)
	}
	
	FastSimplexNoise.prototype.spherical3D = function (c, x, y, z) {
	  var nx = x / c
	  var ny = y / c
	  var rdx = nx * 2 * Math.PI
	  var rdy = ny * Math.PI
	  var sinY = Math.sin(rdy + Math.PI)
	  var sinRds = 2 * Math.PI
	  var a = sinRds * Math.sin(rdx) * sinY
	  var b = sinRds * Math.cos(rdx) * sinY
	  var d = sinRds * Math.cos(rdy)
	
	  return this.in4D(a, b, d, z)
	}
	
	function dot2D (g, x, y) {
	  return g[0] * x + g[1] * y
	}
	
	function dot3D (g, x, y, z) {
	  return g[0] * x + g[1] * y + g[2] * z
	}
	
	function dot4D (g, x, y, z, w) {
	  return g[0] * x + g[1] * y + g[2] * z + g[3] * w
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _wave = __webpack_require__(10);
	
	var _wave2 = _interopRequireDefault(_wave);
	
	var _settings = __webpack_require__(4);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _utility = __webpack_require__(6);
	
	var utility = _interopRequireWildcard(_utility);
	
	var _motionComponent = __webpack_require__(15);
	
	var _motionComponent2 = _interopRequireDefault(_motionComponent);
	
	var _timeKeeper = __webpack_require__(11);
	
	var timeKeeper = _interopRequireWildcard(_timeKeeper);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Panel =
	//seedValue is from 0 (large, slow panel) to 1 (small, fast panel)
	//position is its starting position according to the pre-computed layout
	//midPanelSize is the length of one side of a square panel with seedValue 0.5
	function Panel(seedValue, position, midPanelSize, fieldDiameter) {
	    _classCallCheck(this, Panel);
	
	    var now = timeKeeper.getTotalTimeMs();
	    var maxVelocity = fieldDiameter / 1000 * utility.scale(seedValue, _settings2.default.panels.maxSpeed.min, _settings2.default.panels.maxSpeed.max);
	    var sizeVariation = _settings2.default.panels.sizeVariation;
	    var sizeMax = midPanelSize * sizeVariation;
	    var sizeMin = midPanelSize * (1 / sizeVariation);
	    var squareSide = utility.scale(1 - seedValue, sizeMin, sizeMax);
	    var halfSkew = _settings2.default.panels.maxRatioSkew / 2;
	    var skew = 1 + utility.randomNumber(-halfSkew, halfSkew);
	    var width = squareSide * skew;
	    var height = squareSide * (1 / skew);
	    var minIdle = utility.scale(1 - seedValue, _settings2.default.panels.minIdle.min, _settings2.default.panels.minIdle.max);
	    var maxIdle = utility.scale(1 - seedValue, _settings2.default.panels.maxIdle.min, _settings2.default.panels.maxIdle.max);
	    var departAtMs = now + utility.randomInt(0, maxIdle);
	    var motion = new _motionComponent2.default({ position: position, maxVelocity: maxVelocity });
	    motion.idleSince = now - utility.randomInt(500, 5000);
	    //todo: also needs mass, and acceleration
	
	    this.x = Math.round(position.x);
	    this.y = Math.round(position.y);
	    this.width = Math.round(width);
	    this.height = Math.round(height);
	    this.layoutNode = position;
	    this.seed = seedValue;
	    this.minIdle = minIdle;
	    this.maxIdle = maxIdle;
	    this.changeAtTotalMs = departAtMs;
	    this.motion = motion;
	    // this.texture = undefined;
	
	    //const colorLightness = Math.floor(utility.scale(seedValue, 50, 230));
	    //this.color = "rgb(" + colorLightness + "," + colorLightness + "," + colorLightness + ")";
	    this.color = seedValue < 0.15 ? _settings2.default.panels.color1 : seedValue < 0.4 ? _settings2.default.panels.color2 : seedValue < 0.94 ? _settings2.default.panels.color3 : _settings2.default.panels.color4;
	};
	
	exports.default = Panel;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _timeKeeper = __webpack_require__(11);
	
	var timeKeeper = _interopRequireWildcard(_timeKeeper);
	
	var _wave = __webpack_require__(10);
	
	var _wave2 = _interopRequireDefault(_wave);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MotionComponent = function () {
	    function MotionComponent(config) {
	        _classCallCheck(this, MotionComponent);
	
	        if (!config) {
	            config = {};
	        }
	        //todo: error if position doesn't exist
	        var xpos = config.position.x || 0;
	        var ypos = config.position.y || 0;
	        var mass = config.mass || 100;
	        var maxVelocity = config.maxVelocity || 10;
	        var maxAcceleration = config.maxAcceleration || 1;
	
	        this.xpos = xpos;
	        this.ypos = ypos;
	        this.xvel = 0;
	        this.yvel = 0;
	        this.targetX = xpos;
	        this.targetY = ypos;
	        this.moving = false;
	        this.idleSince = 0;
	
	        this.mass = mass;
	        this.maxVelocity = maxVelocity;
	        this.maxAcceleration = maxAcceleration;
	        this.move = nullMovement;
	    }
	
	    _createClass(MotionComponent, [{
	        key: "update",
	        value: function update() {
	            this.move();
	        }
	
	        /**
	         * successive updates will move from current position, straight to destination,
	         * arriving in tripLengthMs milliseconds. At each time step, position will be a linear
	         * interpolation between the start and end points, according to time passed.
	         * A motion function x => y can be supplied, which maps the constant linear movement
	         * to some other curve (eg smoothstep). motion does not affect the path to the
	         * destination, only the movement upon it. For example, passing a triangle function to
	         * motion would result in a constant-speed, round-trip to the destination and back.
	         * After tripLengthMs has passed, movement will cease.
	         */
	
	    }, {
	        key: "fixedAnimateToward",
	        value: function fixedAnimateToward(destination, tripLengthMs, motion) {
	            var _this = this;
	
	            if (tripLengthMs <= 0) {
	                this.moving = false;
	                this.move = nullMovement;
	            }
	            var moveMap = motion || _wave2.default.linear;
	            var xorigin = this.xpos;
	            var yorigin = this.ypos;
	            var xtarget = destination.x;
	            var ytarget = destination.y;
	            var beginTime = timeKeeper.getTotalTimeMs();
	            var moveFunc = function moveFunc() {
	                var now = timeKeeper.getTotalTimeMs();
	                var percentDone = (now - beginTime) / tripLengthMs;
	                if (percentDone >= 1.0) {
	                    _this.xpos = xtarget;
	                    _this.ypos = ytarget;
	                    _this.move = nullMovement;
	                    _this.moving = false;
	                    _this.idleSince = now;
	                } else {
	                    var value = moveMap(percentDone);
	                    var newX = xorigin + (xtarget - xorigin) * value;
	                    var newY = yorigin + (ytarget - yorigin) * value;
	                    _this.xpos = newX;
	                    _this.ypos = newY;
	                }
	            };
	            this.move = moveFunc;
	            this.moving = true;
	            this.idleSince = 0;
	        }
	
	        /**
	         * successive updates will accelerate toward the supplied destination.
	         * acceleration amount is defined by maxAcceleration.
	         */
	
	    }, {
	        key: "followPoint",
	        value: function followPoint(destination) {}
	
	        /**
	         * update position according to supplied acceleration, and this object's velocity.
	         */
	
	    }, {
	        key: "accelerateInDirection",
	        value: function accelerateInDirection(acceleration) {}
	    }]);
	
	    return MotionComponent;
	}();
	
	function nullMovement() {}
	
	exports.default = MotionComponent;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utility = __webpack_require__(6);
	
	var utility = _interopRequireWildcard(_utility);
	
	var _wave = __webpack_require__(10);
	
	var _wave2 = _interopRequireDefault(_wave);
	
	var _timeKeeper = __webpack_require__(11);
	
	var timeKeeper = _interopRequireWildcard(_timeKeeper);
	
	var _settings = __webpack_require__(4);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _panel = __webpack_require__(14);
	
	var _panel2 = _interopRequireDefault(_panel);
	
	var _gridLayout = __webpack_require__(17);
	
	var _gridLayout2 = _interopRequireDefault(_gridLayout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PanelLayer1 = function () {
	    function PanelLayer1(bounds) {
	        _classCallCheck(this, PanelLayer1);
	
	        var panelCount = _settings2.default.panels.count;
	        var width = bounds.width;
	        var height = bounds.height;
	        //grid positions are relative to bounds x and y
	        var grid = makeGrid(panelCount, bounds);
	        var area = width * height;
	        var fauxDiameter = (width + height) / 2;
	        var panels = makePanels(panelCount, grid, area, fauxDiameter);
	
	        this.bounds = bounds;
	        this.grid = grid;
	        this.panels = panels;
	    }
	
	    _createClass(PanelLayer1, [{
	        key: "update",
	        value: function update() {
	            var screenSize = (this.bounds.width + this.bounds.height) / 2;
	            var now = timeKeeper.getTotalTimeMs();
	            var swayPauseMs = utility.randomInt(500, 5000);
	            for (var i = 0; i < this.panels.length; i++) {
	                var panel = this.panels[i];
	                if (!panel.motion.moving) {
	                    if (panel.changeAtTotalMs <= now) {
	                        var nodeSpot = panel.layoutNode;
	                        this.grid.changePosition(nodeSpot);
	                        var distanceToTarget = utility.distance(nodeSpot, { x: panel.x, y: panel.y });
	                        var tripLengthMs = distanceToTarget / panel.motion.maxVelocity;
	                        var idleAfter = utility.randomNumber(panel.minIdle, panel.maxIdle);
	                        panel.changeAtTotalMs = now + tripLengthMs + idleAfter;
	                        panel.motion.fixedAnimateToward(nodeSpot, tripLengthMs, _wave2.default.smooth);
	                    } else if (now - panel.motion.idleSince > swayPauseMs) {
	                        var xscale = panel.width / 12;
	                        var yscale = panel.height / 20;
	                        // const xShift = utility.randomNumber(-xscale, xscale);
	                        // const yShift = utility.randomNumber(-yscale, yscale);
	                        var xShift = utility.randomNumber(-12, 12);
	                        var yShift = utility.randomNumber(-6, 6);
	                        var destination = { x: panel.layoutNode.x + xShift, y: panel.layoutNode.y + yShift };
	                        var timeScale = utility.scale(panel.seed, 4500, 2000);
	                        var _tripLengthMs = utility.randomNumber(timeScale - timeScale / 4, timeScale + timeScale / 4);
	                        panel.motion.fixedAnimateToward(destination, _tripLengthMs, _wave2.default.smooth);
	                    }
	                }
	                panel.motion.update();
	                panel.x = Math.round(panel.motion.xpos + this.bounds.x - panel.width / 2);
	                panel.y = Math.round(panel.motion.ypos + this.bounds.y - panel.height / 2);
	            }
	        }
	    }, {
	        key: "getPanelsForDraw",
	        value: function getPanelsForDraw() {
	            return this.panels;
	        }
	    }]);
	
	    return PanelLayer1;
	}();
	
	function makeGrid(panelCount, bounds) {
	    var emptyGridPercent = _settings2.default.panels.emptyGridPercent;
	    var totalSlots = Math.ceil(panelCount * (1 + emptyGridPercent));
	    var result = new _gridLayout2.default(totalSlots, bounds.width, bounds.height);
	    return result;
	}
	
	function makePanels(count, grid, fieldArea, fieldDiameter) {
	    var positions = grid.getNewPositions(count);
	    //let's make 1/4 of the panel values uniformly distributed, and the rest random.
	    var uniformPortion = Math.floor(count / 4);
	    var slice = 1 / uniformPortion;
	    var offset = slice / 2;
	    var midPanelSize = calculateMidPanelSize(count, fieldArea);
	    var result = Array.from({ length: count }, function (v, k) {
	        var position = positions[k];
	        if (k < uniformPortion) {
	            var _value = offset + slice * k; //uniform values
	            return new _panel2.default(_value, position, midPanelSize, fieldDiameter);
	        }
	        var value = utility.randomNumber(0.1, 0.99); //random values
	        return new _panel2.default(value, position, midPanelSize, fieldDiameter);
	    });
	    result.sort(function (a, b) {
	        return a.seed - b.seed;
	    });
	    calculatePanelTextures(result); //todo: move this to inside map also
	    return result;
	}
	
	function calculateMidPanelSize(panelCount, fieldArea) {
	    var midSize = Math.sqrt(fieldArea * _settings2.default.panels.visualDensityPercent / panelCount);
	    return midSize;
	}
	
	function calculatePanelTextures(panels) {}
	
	exports.default = PanelLayer1;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _wave = __webpack_require__(10);
	
	var _wave2 = _interopRequireDefault(_wave);
	
	var _shuffle = __webpack_require__(18);
	
	var _shuffle2 = _interopRequireDefault(_shuffle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GridLayout = function () {
	    function GridLayout(slotCount, width, height) {
	        _classCallCheck(this, GridLayout);
	
	        var positions = createPositions(slotCount, width, height);
	        var empties = (0, _shuffle2.default)(positions);
	        this.empty = empties;
	    }
	
	    _createClass(GridLayout, [{
	        key: "getNewPositions",
	        value: function getNewPositions(n) {
	            var take = this.empty.slice(0, n);
	            var rest = this.empty.slice(n);
	            this.empty = rest;
	            return take;
	        }
	
	        //changes parameter in-place to a new position, and returns it
	        //could change this to a counter that says which empty is next, instead of modifying the array every time.
	
	    }, {
	        key: "changePosition",
	        value: function changePosition(oldPosition) {
	            var next = this.empty.shift();
	            //swap
	            var a = oldPosition;
	            var b = next;
	            var _ref = [b.x, a.x];
	            a.x = _ref[0];
	            b.x = _ref[1];
	            var _ref2 = [b.y, a.y];
	            a.y = _ref2[0];
	            b.y = _ref2[1];
	
	            this.empty.push(next);
	            return oldPosition;
	        }
	    }]);
	
	    return GridLayout;
	}();
	
	function createPositions(slotCount, width, height) {
	    var half = Math.sqrt(slotCount);
	    var screenRatio = width / height;
	    var columns = Math.floor(half * screenRatio);
	    //const rows = Math.floor((1 / screenRatio) * half);
	    var rows = slotCount / columns;
	    var result = [];
	    var rise = height / rows;
	    var run = width / columns;
	    for (var i = 0; i < columns; i++) {
	        for (var j = 0; j < rows; j++) {
	            var x = run * (i + 0.5);
	            var y = rise * (j + 0.5);
	            var newPosition = { x: x, y: y };
	            result.push(newPosition);
	        }
	    }
	    return result;
	}
	
	exports.default = GridLayout;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var arrayShuffle = __webpack_require__(19),
	    baseShuffle = __webpack_require__(23),
	    isArray = __webpack_require__(33);
	
	/**
	 * Creates an array of shuffled values, using a version of the
	 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to shuffle.
	 * @returns {Array} Returns the new shuffled array.
	 * @example
	 *
	 * _.shuffle([1, 2, 3, 4]);
	 * // => [4, 1, 3, 2]
	 */
	function shuffle(collection) {
	  var func = isArray(collection) ? arrayShuffle : baseShuffle;
	  return func(collection);
	}
	
	module.exports = shuffle;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var copyArray = __webpack_require__(20),
	    shuffleSelf = __webpack_require__(21);
	
	/**
	 * A specialized version of `_.shuffle` for arrays.
	 *
	 * @private
	 * @param {Array} array The array to shuffle.
	 * @returns {Array} Returns the new shuffled array.
	 */
	function arrayShuffle(array) {
	  return shuffleSelf(copyArray(array));
	}
	
	module.exports = arrayShuffle;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = copyArray;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var baseRandom = __webpack_require__(22);
	
	/**
	 * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
	 *
	 * @private
	 * @param {Array} array The array to shuffle.
	 * @param {number} [size=array.length] The size of `array`.
	 * @returns {Array} Returns `array`.
	 */
	function shuffleSelf(array, size) {
	  var index = -1,
	      length = array.length,
	      lastIndex = length - 1;
	
	  size = size === undefined ? length : size;
	  while (++index < size) {
	    var rand = baseRandom(index, lastIndex),
	        value = array[rand];
	
	    array[rand] = array[index];
	    array[index] = value;
	  }
	  array.length = size;
	  return array;
	}
	
	module.exports = shuffleSelf;


/***/ },
/* 22 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeFloor = Math.floor,
	    nativeRandom = Math.random;
	
	/**
	 * The base implementation of `_.random` without support for returning
	 * floating-point numbers.
	 *
	 * @private
	 * @param {number} lower The lower bound.
	 * @param {number} upper The upper bound.
	 * @returns {number} Returns the random number.
	 */
	function baseRandom(lower, upper) {
	  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
	}
	
	module.exports = baseRandom;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var shuffleSelf = __webpack_require__(21),
	    values = __webpack_require__(24);
	
	/**
	 * The base implementation of `_.shuffle`.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to shuffle.
	 * @returns {Array} Returns the new shuffled array.
	 */
	function baseShuffle(collection) {
	  return shuffleSelf(values(collection));
	}
	
	module.exports = baseShuffle;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(25),
	    keys = __webpack_require__(27);
	
	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object ? baseValues(object, keys(object)) : [];
	}
	
	module.exports = values;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(26);
	
	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return arrayMap(props, function(key) {
	    return object[key];
	  });
	}
	
	module.exports = baseValues;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(28),
	    baseKeys = __webpack_require__(44),
	    isArrayLike = __webpack_require__(48);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(29),
	    isArguments = __webpack_require__(30),
	    isArray = __webpack_require__(33),
	    isBuffer = __webpack_require__(34),
	    isIndex = __webpack_require__(38),
	    isTypedArray = __webpack_require__(39);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(31),
	    isObjectLike = __webpack_require__(32);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(32);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && objectToString.call(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(35),
	    stubFalse = __webpack_require__(37);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(36);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 37 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(40),
	    baseUnary = __webpack_require__(42),
	    nodeUtil = __webpack_require__(43);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(41),
	    isObjectLike = __webpack_require__(32);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ },
/* 41 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(36);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(45),
	    nativeKeys = __webpack_require__(46);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ },
/* 45 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(47);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(49),
	    isLength = __webpack_require__(41);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(50);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _settings = __webpack_require__(4);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _textureGen = __webpack_require__(52);
	
	var textureGen = _interopRequireWildcard(_textureGen);
	
	var _screen = __webpack_require__(2);
	
	var _screen2 = _interopRequireDefault(_screen);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScratchpadScene = function () {
	    function ScratchpadScene(screen) {
	        _classCallCheck(this, ScratchpadScene);
	
	        this.screen = screen;
	        var canvas = screen.canvas;
	        var width = canvas.width;
	        var height = canvas.height;
	        var context = _screen2.default.virtualContext(300, 300 * (height / width));
	        this.buffer = context.canvas;
	        var virtualScreen = new _screen2.default(context);
	        textureGen.draw(virtualScreen);
	    }
	
	    _createClass(ScratchpadScene, [{
	        key: "update",
	        value: function update() {}
	    }, {
	        key: "draw",
	        value: function draw() {
	            this.screen.drawImageStretch(this.buffer);
	        }
	    }]);
	
	    return ScratchpadScene;
	}();
	
	exports.default = ScratchpadScene;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.draw = draw;
	
	var _husl = __webpack_require__(7);
	
	var husl = _interopRequireWildcard(_husl);
	
	var _simplexNoise = __webpack_require__(12);
	
	var _simplexNoise2 = _interopRequireDefault(_simplexNoise);
	
	var _utility = __webpack_require__(6);
	
	var utility = _interopRequireWildcard(_utility);
	
	var _wave = __webpack_require__(10);
	
	var _wave2 = _interopRequireDefault(_wave);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function draw(screen) {
	    var width = screen.width;
	    var height = screen.height;
	    var noiseGen = new _simplexNoise2.default({
	        octaves: 8,
	        min: 0,
	        max: 1,
	        frequency: 1 / 29
	    });
	    var distance = distanceFromCenter(width, height);
	    var fmod = (0, _wave2.default)(function (x) {
	        return _wave2.default.sine(x);
	    }, { frequency: 5 });
	    var ripple = (0, _wave2.default)(function (x) {
	        return _wave2.default.triangle(_wave2.default.sine(x));
	    }, { frequency: 1 / 4 });
	    var imageData = noiseGen.getFilledImageData(screen, function (x, y, value) {
	        //const d = distance(x,y);
	        var hue = value < 0 ? value - value / 2 : value;
	        var h = ripple(hue) * (103 - 11) + 11;
	        var s = 100;
	        var light = value < 0
	        //? (value * 0.65 + ripple(value) * 0.35)
	        ? value - value / 3 : value;
	        var l = ripple(light) * (73 - 31) + 31;
	        var rgb = husl.toRGB(h, s, l);
	        var bytes = rgb;
	        return bytes;
	    });
	    screen.context.putImageData(imageData, 0, 0);
	}
	
	function distanceFromCenter(width, height) {
	    var centerX = width / 2;
	    var centerY = height / 2;
	    var radius = Math.hypot(centerX, centerY);
	    var distance = function distance(x, y) {
	        return Math.hypot(x - centerX, y - centerY) / radius;
	    };
	    return distance;
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map