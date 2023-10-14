(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["MPopover"] = factory(require("omi"));
	else
		root["MPopover"] = factory(root["Omi"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_omi__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/popover/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/popover/index.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./src/popover/index.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-popover {\n  width: auto;\n  height: auto;\n  position: absolute;\n  padding: 10px;\n  box-sizing: border-box;\n  z-index: 100;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); }\n\n.m-inner {\n  width: auto;\n  height: auto;\n  box-sizing: border-box;\n  z-index: 100; }\n\n._arrow {\n  box-sizing: border-box;\n  background: transparent;\n  width: 8.48528137px;\n  height: 8.48528137px;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n  position: absolute;\n  display: block;\n  border-width: 4.24264069px;\n  border-style: solid;\n  -webkit-box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.1);\n  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.1);\n  border-top-color: transparent;\n  border-right-color: #fff;\n  border-bottom-color: #fff;\n  border-left-color: transparent;\n  z-index: 10; }\n\n._top {\n  left: 50%;\n  top: 100%;\n  -webkit-transform: translateX(-50%) rotate(45deg);\n  -ms-transform: translateX(-50%) rotate(45deg);\n  transform: translateX(-50%) rotate(45deg);\n  margin-top: -4px; }\n\n._top-left {\n  left: 15%;\n  -webkit-transform: translateX(-50%) rotate(45deg);\n  -ms-transform: translateX(-50%) rotate(45deg);\n  transform: translateX(-50%) rotate(45deg);\n  top: 100%;\n  margin-top: -4px; }\n\n._top-right {\n  left: 85%;\n  -webkit-transform: translateX(-50%) rotate(45deg);\n  -ms-transform: translateX(-50%) rotate(45deg);\n  transform: translateX(-50%) rotate(45deg);\n  top: 100%;\n  margin-top: -4px; }\n\n._left {\n  left: 100%;\n  -webkit-transform: translateY(-50%) rotate(-45deg);\n  -ms-transform: translateY(-50%) rotate(-45deg);\n  transform: translateY(-50%) rotate(-45deg);\n  top: 50%;\n  margin-left: -4px; }\n\n._left-top {\n  left: 100%;\n  -webkit-transform: translateY(-50%) rotate(-45deg);\n  -ms-transform: translateY(-50%) rotate(-45deg);\n  transform: translateY(-50%) rotate(-45deg);\n  top: 15%;\n  margin-left: -4px; }\n\n._left-bottom {\n  left: 100%;\n  -webkit-transform: translateY(-50%) rotate(-45deg);\n  -ms-transform: translateY(-50%) rotate(-45deg);\n  transform: translateY(-50%) rotate(-45deg);\n  top: 85%;\n  margin-left: -4px; }\n\n._bottom {\n  left: 50%;\n  -webkit-transform: translateX(-50%) rotate(225deg);\n  -ms-transform: translateX(-50%) rotate(225deg);\n  transform: translateX(-50%) rotate(225deg);\n  margin-top: -13px; }\n\n._bottom-left {\n  left: 15%;\n  -webkit-transform: translateX(-50%) rotate(225deg);\n  -ms-transform: translateX(-50%) rotate(225deg);\n  transform: translateX(-50%) rotate(225deg);\n  margin-top: -13px; }\n\n._bottom-right {\n  left: 85%;\n  -webkit-transform: translateX(-50%) rotate(225deg);\n  -ms-transform: translateX(-50%) rotate(225deg);\n  transform: translateX(-50%) rotate(225deg);\n  margin-top: -13px; }\n\n._right {\n  -webkit-transform: translateY(-50%) rotate(-225deg);\n  -ms-transform: translateY(-50%) rotate(-225deg);\n  transform: translateY(-50%) rotate(-225deg);\n  top: 50%;\n  margin-left: -13px; }\n\n._right-top {\n  -webkit-transform: translateY(-50%) rotate(-225deg);\n  -ms-transform: translateY(-50%) rotate(-225deg);\n  transform: translateY(-50%) rotate(-225deg);\n  top: 15%;\n  margin-left: -13px; }\n\n._right-bottom {\n  -webkit-transform: translateY(-50%) rotate(-225deg);\n  -ms-transform: translateY(-50%) rotate(-225deg);\n  transform: translateY(-50%) rotate(-225deg);\n  top: 85%;\n  margin-left: -13px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./src/popover/index.scss":
/*!********************************!*\
  !*** ./src/popover/index.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/dist/cjs.js??ref--4-3!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/popover/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/popover/index.tsx":
/*!*******************************!*\
  !*** ./src/popover/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var css = __webpack_require__(/*! ./index.scss */ "./src/popover/index.scss");
//@ts-ignore
__webpack_require__(/*! ../theme.ts */ "./src/theme.ts");
var Popover = /** @class */ (function (_super) {
    __extends(Popover, _super);
    function Popover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.close = function () {
            _this.fire('close');
        };
        _this.confirm = function () {
            _this.fire('confirm');
        };
        _this.left = 0;
        _this.top = 0;
        _this._docClickHandler = function () {
            //omi mode
            if (_this['__omiattr_']) {
                _this.props.show = false;
                _this['__omiattr_'].show = false;
            }
            //html element mode
            _this.removeAttribute('show');
            _this.fire('close');
        };
        _this.mouseDownHandler = function (evt) {
            evt.stopPropagation();
        };
        return _this;
    }
    Popover.prototype.uninstall = function () {
        document.removeEventListener('mousedown', this._docClickHandler);
    };
    Popover.prototype.updated = function () {
        this._setPosition();
    };
    Popover.prototype.installed = function () {
        document.addEventListener('mousedown', this._docClickHandler);
        this._setPosition();
    };
    Popover.prototype.getScopeRoot = function (current) {
        while (true) {
            var p = current.parentNode;
            if (p) {
                current = p;
            }
            else {
                return current;
            }
        }
    };
    Popover.prototype._setPosition = function () {
        if (this.props.show) {
            var rectA = this.shadowRoot.querySelector('.m-popover').getBoundingClientRect();
            var rectB = (typeof this.props.target === 'string' ? this.getScopeRoot(this).querySelector(this.props.target) : this.props.target).getBoundingClientRect();
            var tempLeft = void 0, tempTop = void 0;
            var st = document.documentElement.scrollTop || document.body.scrollTop;
            var sl = document.documentElement.scrollLeft || document.body.scrollLeft;
            switch (this.props.direction) {
                case 'top-left':
                    tempLeft = rectB.left;
                    tempTop = (rectB.top - rectA.height - 10);
                    break;
                case 'top':
                    tempLeft = rectB.left + (rectB.width / 2 - rectA.width / 2);
                    tempTop = (rectB.top - rectA.height - 10);
                    break;
                case 'top-right':
                    tempLeft = rectB.left + rectB.width - rectA.width;
                    tempTop = (rectB.top - rectA.height - 10);
                    break;
                case 'left':
                    tempLeft = rectB.left - rectA.width - 10;
                    tempTop = rectB.top + (rectB.height - rectA.height) / 2;
                    break;
                case 'left-top':
                    tempLeft = rectB.left - rectA.width - 10;
                    tempTop = rectB.top;
                    break;
                case 'left-bottom':
                    tempLeft = rectB.left - rectA.width - 10;
                    tempTop = rectB.top + (rectB.height - rectA.height);
                    break;
                case 'bottom-left':
                    tempLeft = rectB.left;
                    tempTop = (rectB.top + rectB.height + 10);
                    break;
                case 'bottom':
                    tempLeft = rectB.left + (rectB.width / 2 - rectA.width / 2);
                    tempTop = (rectB.top + rectB.height + 10);
                    break;
                case 'bottom-right':
                    tempLeft = rectB.left + rectB.width - rectA.width;
                    tempTop = (rectB.top + rectB.height + 10);
                    break;
                case 'right':
                    tempLeft = rectB.left + rectB.width + 10;
                    tempTop = rectB.top + (rectB.height - rectA.height) / 2;
                    break;
                case 'right-top':
                    tempLeft = rectB.left + rectB.width + 10;
                    tempTop = rectB.top;
                    break;
                case 'right-bottom':
                    tempLeft = rectB.left + rectB.width + 10;
                    tempTop = rectB.top + (rectB.height - rectA.height);
                    break;
            }
            tempLeft = tempLeft + this.props.x + sl + 'px';
            tempTop = tempTop + this.props.y + st + 'px';
            if (this.left !== tempLeft || this.top !== tempTop) {
                this.left = tempLeft;
                this.top = tempTop;
                this.update();
            }
        }
    };
    Popover.prototype.render = function (props) {
        if (!props.show)
            return;
        var cls = omi_1.classNames('_arrow', '_' + props.direction);
        var style = props.style, other = __rest(props, ["style"]);
        return (omi_1.h("div", __assign({ class: "m-popover", onMouseDown: this.mouseDownHandler, style: __assign({ left: this.left, top: this.top }, style) }, other),
            omi_1.h("div", { class: cls }),
            omi_1.h("div", { class: "m-inner" },
                omi_1.h("slot", null))));
    };
    Popover.css = css;
    Popover.defaultProps = {
        x: 0,
        y: 0
    };
    Popover.propTypes = {
        show: Boolean,
        x: Number,
        y: Number,
        direction: String,
        target: String
    };
    Popover = __decorate([
        omi_1.tag('m-popover')
    ], Popover);
    return Popover;
}(omi_1.WeElement));
exports.default = Popover;


/***/ }),

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

theme();
document.addEventListener('DOMContentLoaded', function () {
    theme();
});
function theme() {
    if (document.body && !document.body.style.getPropertyValue('--mdc-theme-primary')) {
        document.body.style.setProperty('--mdc-theme-primary', '#0072d9');
        document.body.style.setProperty('--mdc-theme-secondary', '#2170b8');
        document.body.style.setProperty('--mdc-theme-error', '#f5222d');
        document.body.style.setProperty('--mdc-theme-surface', '#ffffff');
        document.body.style.setProperty('--mdc-theme-on-primary', '#ffffff');
        document.body.style.setProperty('--mdc-theme-on-secondary', '#ffffff');
        document.body.style.setProperty('--mdc-theme-on-error', '#ffffff');
        document.body.style.setProperty('--mdc-theme-on-surface', '#000000');
        document.body.style.setProperty('--mdc-theme-background', '#ffffff');
        document.body.style.setProperty('--mdc-shape-small-component-radius', '4px');
        document.body.style.setProperty('--mdc-shape-medium-component-radius', '4px');
        document.body.style.setProperty('--mdc-shape-large-component-radius', '0px');
        document.body.style.setProperty('--mdc-typography--font-family', 'Roboto, sans-serif');
    }
}


/***/ }),

/***/ "omi":
/*!******************************************************************************!*\
  !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=index.js.map