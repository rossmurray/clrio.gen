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
	
	var _timeKeeper = __webpack_require__(9);
	
	var timeKeeper = _interopRequireWildcard(_timeKeeper);
	
	var _settings = __webpack_require__(4);
	
	var _settings2 = _interopRequireDefault(_settings);
	
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
	
	    screen = new _screen2.default(canvas, context);
	    scene = new _scene2.default(screen);
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
	    //screen.clear(settings.bgColor);
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
	    function Screen(canvas, context) {
	        _classCallCheck(this, Screen);
	
	        this.canvas = canvas;
	        this.context = context;
	        this.width = canvas.width;
	        this.height = canvas.height;
	    }
	
	    _createClass(Screen, [{
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
	                this.context.shadowColor = "#000";
	                this.context.shadowBlur = 10;
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
	
	var _panels = __webpack_require__(5);
	
	var _panels2 = _interopRequireDefault(_panels);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Scene = function () {
	    function Scene(screen) {
	        _classCallCheck(this, Scene);
	
	        this.panels = new _panels2.default(_settings2.default.numPanels, screen);
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
	    bgColor: "#222222",
	    numPanels: 55,
	    panelXMarginFactor: 0.05,
	    panelYMarginFactor: 0.05,
	    panelMinWidthFactorOfMargin: 0.4,
	    panelMaxWidthFactorOfMin: 2.4,
	    panelMinHeightRatio: 0.9,
	    panelMaxHeightRatio: 2.6,
	    panelMinTTL: 4700,
	    panelMaxTTL: 8133,
	    panelShadowSize: 10
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
	
	var _panel = __webpack_require__(6);
	
	var _panel2 = _interopRequireDefault(_panel);
	
	var _panelMotion = __webpack_require__(7);
	
	var _panelMotion2 = _interopRequireDefault(_panelMotion);
	
	var _utility = __webpack_require__(10);
	
	var utility = _interopRequireWildcard(_utility);
	
	var _husl = __webpack_require__(11);
	
	var husl = _interopRequireWildcard(_husl);
	
	var _wave = __webpack_require__(8);
	
	var _wave2 = _interopRequireDefault(_wave);
	
	var _timeKeeper = __webpack_require__(9);
	
	var timeKeeper = _interopRequireWildcard(_timeKeeper);
	
	var _settings = __webpack_require__(4);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Panels = function () {
	    function Panels(n, screen) {
	        _classCallCheck(this, Panels);
	
	        this.boundary = determineBoundary(screen.width, screen.height);
	        var initialPanels = randomPanels(n, this.boundary);
	        this.panelData = initialPanels.data;
	        this.panelMotion = initialPanels.motion;
	        //this.panelData = Array.from(Array(n)).map(() => new Panel());
	        this.screen = screen;
	    }
	
	    _createClass(Panels, [{
	        key: "update",
	        value: function update() {
	            var _this = this;
	
	            determineBoundary(this.screen.width, this.screen.height);
	            var n = this.panelData.length;
	            var now = timeKeeper.getTotalTimeMs();
	
	            var _loop = function _loop(i) {
	                var panel = _this.panelData[i];
	                var motion = _this.panelMotion[i];
	                if (now >= motion.arrivalTotalMs) {
	                    var ttl = utility.randomInt(_settings2.default.panelMinTTL, _settings2.default.panelMaxTTL);
	                    motion.arrivalTotalMs = now + ttl;
	                    motion.embarkTotalMs = now;
	                    motion.motion = function (t) {
	                        return _wave2.default.smooth(_wave2.default.smooth((t - motion.embarkTotalMs) / (motion.arrivalTotalMs - motion.embarkTotalMs)));
	                    };
	                    motion.origin.x = panel.x;
	                    motion.origin.y = panel.y;
	                    motion.target = randomPosition(_this.boundary, panel.height);
	                } else {
	                    var percentageToTarget = motion.motion(now);
	                    panel.x = percentageToTarget * (motion.target.x - motion.origin.x) + motion.origin.x;
	                    panel.y = percentageToTarget * (motion.target.y - motion.origin.y) + motion.origin.y;
	                    //panel.color = husl.toHex(percentageToTarget * 360, 100, 55);
	                }
	                //update color?
	                //update dimensions?
	            };
	
	            for (var i = 0; i < n; i++) {
	                _loop(i);
	            }
	        }
	    }, {
	        key: "draw",
	        value: function draw() {
	            this.screen.drawRectangles(this.panelData, _settings2.default.panelShadowSize);
	        }
	    }]);
	
	    return Panels;
	}();
	
	function randomPanels(n, boundary) {
	    var data = Array.apply(null, Array(n)).map(function () {
	        return new _panel2.default();
	    });
	    var motion = Array.apply(null, Array(n)).map(function () {
	        return new _panelMotion2.default();
	    });
	    var minWidth = (boundary.x1 + boundary.y1) * _settings2.default.panelMinWidthFactorOfMargin;
	    var maxWidth = minWidth * _settings2.default.panelMaxWidthFactorOfMin;
	    var minHeightRatio = _settings2.default.panelMinHeightRatio;
	    var maxHeightRatio = _settings2.default.panelMaxHeightRatio;
	    var now = timeKeeper.getTotalTimeMs();
	
	    var _loop2 = function _loop2(i) {
	        var d = data[i];
	        var m = motion[i];
	        d.width = utility.randomNumber(minWidth, maxWidth);
	        d.height = d.width * utility.randomNumber(minHeightRatio, maxHeightRatio);
	        var position = randomPosition(boundary, d.height);
	        d.x = position.x;
	        d.y = position.y;
	        m.origin = { x: position.x, y: position.y };
	        var ttl = utility.randomInt(_settings2.default.panelMinTTL, _settings2.default.panelMaxTTL);
	        m.arrivalTotalMs = now + ttl;
	        m.embarkTotalMs = now;
	        m.motion = function (t) {
	            return _wave2.default.smooth(_wave2.default.smooth((t - m.embarkTotalMs) / (m.arrivalTotalMs - m.embarkTotalMs)));
	        };
	        m.target = randomPosition(boundary, d.height);
	        var h = utility.randomNumber(70, 90);
	        var s = 100;
	        var l = utility.randomNumber(70, 90);
	        d.color = husl.toHex(h, s, l);
	    };
	
	    for (var i = 0; i < n; i++) {
	        _loop2(i);
	    }
	    return { data: data, motion: motion };
	}
	
	function determineBoundary(width, height) {
	    var marginX = width * _settings2.default.panelXMarginFactor;
	    var marginY = height * _settings2.default.panelYMarginFactor;
	    var maxX = width - marginX;
	    var maxY = height - marginY;
	    return {
	        x1: marginX,
	        y1: marginY,
	        x2: maxX,
	        y2: maxY
	    };
	}
	
	function randomPosition(boundary, panelHeight) {
	    return {
	        x: utility.randomInt(boundary.x1, boundary.x2),
	        y: utility.randomInt(boundary.y1, boundary.y2 - panelHeight)
	    };
	}
	
	function makeArrivalTime() {
	    return timeKeeper.getTotalTimeMs() + utility.randomInt(_settings2.default.panelMinTTL, _settings2.default.panelMaxTTL);
	}
	
	exports.default = Panels;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Panel = function Panel() {
	    _classCallCheck(this, Panel);
	
	    this.x = 0;
	    this.y = 0;
	    this.width = 70;
	    this.height = 135;
	    this.color = "#f4f131";
	};
	
	exports.default = Panel;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _wave = __webpack_require__(8);
	
	var _wave2 = _interopRequireDefault(_wave);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PanelMotion = function PanelMotion() {
	    _classCallCheck(this, PanelMotion);
	
	    this.target = { x: 0, y: 0 };
	    this.origin = { x: 0, y: 0 };
	    this.motion = defaultMotion;
	    this.arrivalTotalMs = 0;
	    this.embarkTotalMs = 0;
	};
	
	function defaultMotion() {
	    return _wave2.default.time(1 / 5);
	}
	
	exports.default = PanelMotion;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _timeKeeper = __webpack_require__(9);
	
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
	    var D = targetMin - (A - carrierMin);
	
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
	    var rad = Math.PI / 2;
	    var down = 3 * rad;
	    var turn = x * rad;
	    return 1 + Math.sin(down + turn);
	}
	
	//linear from 1 (exclusive) down to 0 (inclusive)
	function reverse(x) {
	    return 1 - Number.EPSILON - x;
	}
	
	function smoothStep(x) {
	    return x * x * (3 - 2 * x);
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.updateTime = updateTime;
	exports.getTimeProgress = getTimeProgress;
	exports.getTotalTimeMs = getTotalTimeMs;
	var totalTimeMs = 0;
	
	function updateTime(deltaMs) {
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

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.randomInt = randomInt;
	exports.randomNumber = randomNumber;
	exports.distance = distance;
	function randomInt(min, max) {
	    return Math.floor(Math.random() * (max - min)) + min;
	}
	
	function randomNumber(min, max) {
	    return Math.random() * (max - min) + min;
	}
	
	function distance(a, b) {
	    return Math.hypot(b.x - a.x, b.y - a.y);
	}

/***/ },
/* 11 */
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
	
	  if ((typeof requirejs !== "undefined" && requirejs !== null) && ("function" !== "undefined" && __webpack_require__(13) !== null)) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (root), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },
/* 12 */
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
/* 13 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map