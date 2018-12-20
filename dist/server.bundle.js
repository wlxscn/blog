/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../dist/asset-manifest.json":
/*!***********************************!*\
  !*** ../dist/asset-manifest.json ***!
  \***********************************/
/*! exports provided: app.css, app.js, avatar.jpeg, default */
/***/ (function(module) {

module.exports = {"app.css":"app.css","app.js":"app.bundle.js","avatar.jpeg":"dd012ac20e3b6822cdcb974cb8f366ef.jpeg"};

/***/ }),

/***/ "./App.js":
/*!****************!*\
  !*** ./App.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./App.scss */ "./App.scss");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _AboutMe = __webpack_require__(/*! ./component/AboutMe */ "./component/AboutMe.js");

var _AboutMe2 = _interopRequireDefault(_AboutMe);

var _Nav = __webpack_require__(/*! ./component/Nav */ "./component/Nav.js");

var _Nav2 = _interopRequireDefault(_Nav);

var _PersonCenter = __webpack_require__(/*! ./component/PersonCenter */ "./component/PersonCenter.js");

var _PersonCenter2 = _interopRequireDefault(_PersonCenter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Articles from './component/Articles'
// import ArticleEdit from './component/ArticleEdit'
// import Detail from './component/Detail'
// import { TransitionGroup, CSSTransition } from "react-transition-group"

// import Markdown from './component/Markdown'
var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      var location = this.props.location;

      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(
          'header',
          { className: 'App-header' },
          _react2.default.createElement(_PersonCenter2.default, null),
          _react2.default.createElement(_Nav2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'App-content' },
          _react2.default.createElement(
            _reactRouterDom.Switch,
            { location: location },
            _react2.default.createElement(_reactRouterDom.Route, { path: '/aboutMe', component: _AboutMe2.default })
          )
        )
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ "./App.scss":
/*!******************!*\
  !*** ./App.scss ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./component/AboutMe.js":
/*!******************************!*\
  !*** ./component/AboutMe.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import s from './AboutMe.css'
// import withStyles from 'isomorphic-style-loader/lib/withStyles'
var AboutMe = function (_Component) {
    (0, _inherits3.default)(AboutMe, _Component);

    function AboutMe(props) {
        (0, _classCallCheck3.default)(this, AboutMe);
        return (0, _possibleConstructorReturn3.default)(this, (AboutMe.__proto__ || (0, _getPrototypeOf2.default)(AboutMe)).call(this, props));
    }

    (0, _createClass3.default)(AboutMe, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'aboutMeContainer' },
                _react2.default.createElement(
                    'h1',
                    null,
                    '\u845B\u745E\u5175'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    '\u4E00\u4E2A\u5DE5\u4F5C\u5FEB\u4E24\u5E74\u7684\u524D\u7AEF\u5F69\u7B14\uFF0C\u642D\u8FD9\u4E2A\u535A\u5BA2\u5E0C\u671B\u81EA\u5DF1\u6446\u8131\u61D2\u764C\uFF01'
                )
            );
        }
    }]);
    return AboutMe;
}(_react.Component);

exports.default = AboutMe;

/***/ }),

/***/ "./component/Nav.js":
/*!**************************!*\
  !*** ./component/Nav.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _Nav = __webpack_require__(/*! ./Nav.scss */ "./component/Nav.scss");

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function (_Component) {
    (0, _inherits3.default)(Nav, _Component);

    function Nav(props) {
        (0, _classCallCheck3.default)(this, Nav);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).call(this, props));

        _this.navTabs = [{ name: '主页', path: '/' }, { name: '关于我', path: '/aboutMe' }, { name: '文章列表', path: '/articles' }];
        return _this;
    }

    (0, _createClass3.default)(Nav, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'navContainer' },
                this.navTabs.map(function (tab) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'navTab', key: tab.name },
                        _react2.default.createElement(
                            _reactRouterDom.NavLink,
                            { exact: true, to: tab.path },
                            tab.name
                        )
                    );
                })
            );
        }
    }]);
    return Nav;
}(_react.Component);

exports.default = Nav;

/***/ }),

/***/ "./component/Nav.scss":
/*!****************************!*\
  !*** ./component/Nav.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./component/PersonCenter.js":
/*!***********************************!*\
  !*** ./component/PersonCenter.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./PersonCenter.scss */ "./component/PersonCenter.scss");

var _avatar = __webpack_require__(/*! ../img/avatar.jpeg */ "./img/avatar.jpeg");

var _avatar2 = _interopRequireDefault(_avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('avatar:', _avatar2.default);

var PersonCenter = function (_Component) {
    (0, _inherits3.default)(PersonCenter, _Component);

    function PersonCenter(props) {
        (0, _classCallCheck3.default)(this, PersonCenter);
        return (0, _possibleConstructorReturn3.default)(this, (PersonCenter.__proto__ || (0, _getPrototypeOf2.default)(PersonCenter)).call(this, props));
    }

    (0, _createClass3.default)(PersonCenter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'personContainer' },
                _react2.default.createElement('div', { className: 'logoContainer' }),
                _react2.default.createElement('img', { src: _avatar2.default })
            );
        }
    }]);
    return PersonCenter;
}(_react.Component);

exports.default = PersonCenter;

/***/ }),

/***/ "./component/PersonCenter.scss":
/*!*************************************!*\
  !*** ./component/PersonCenter.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./img/avatar.jpeg":
/*!*************************!*\
  !*** ./img/avatar.jpeg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dd012ac20e3b6822cdcb974cb8f366ef.jpeg";

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _App = __webpack_require__(/*! ./App */ "./App.js");

var _App2 = _interopRequireDefault(_App);

var _assetManifest = __webpack_require__(/*! ../dist/asset-manifest.json */ "../dist/asset-manifest.json");

var _assetManifest2 = _interopRequireDefault(_assetManifest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static(_path2.default.resolve(__dirname, "../dist")));

app.get("/*", function (req, res) {
    var jsx = _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { context: {}, location: req.url },
        _react2.default.createElement(_reactRouterDom.Route, { path: "/", component: _App2.default })
    );
    var reactDom = (0, _server.renderToString)(jsx);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlTemplate(reactDom));
});

app.listen(2048);

function htmlTemplate(reactDom) {
    return "\n        <html>\n            <head>\n                <meta charset=\"utf-8\">\n                <title>\u535A\u5BA2</title>\n                <link rel=\"stylesheet\" type=\"text/css\" href=\"/" + _assetManifest2.default['app.css'] + "\">\n            </head>\n            <body>\n                <div id=\"root\">" + reactDom + "</div>\n                <script src=\"/" + _assetManifest2.default['app.js'] + "\"></script>\n            </body>\n        </html>\n    ";
}
/* WEBPACK VAR INJECTION */}.call(this, ""))

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });