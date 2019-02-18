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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@2.0.1@css-loader/dist/cjs.js?!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/App.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.0.1@css-loader/dist/cjs.js??ref--5-1!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/App.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/_css-loader@2.0.1@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@2.0.1@css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "html, body {\n  margin: 0;\n  padding: 0;\n  height: 100%; }\n\n#root {\n  height: 100%; }\n\n.App {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.App-header {\n  text-align: left;\n  color: #000;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);\n  padding-left: 30px;\n  height: 68px;\n  flex-shrink: 0; }\n\n.App-content {\n  flex: 1;\n  padding: 10px 100px;\n  background: #fafafa;\n  overflow: hidden; }\n\n.fade-enter {\n  transform: translateX(-100%); }\n\n.fade-enter.fade-enter-active {\n  transform: translateX(0);\n  transition: all .5s ease; }\n\n.fade-appear {\n  transform: translateX(-100%); }\n\n.fade-appear.fade-appear-active {\n  transform: translateX(0);\n  transition: all .5s ease; }\n\n.fade-exit {\n  transform: translateX(0); }\n\n.fade-exit.fade-exit-active {\n  transform: translateX(100%);\n  transition: all .5s ease; }\n", "",{"version":3,"sources":["/Users/grb/my/blog/src/App.scss"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,WAAW;EACX,aAAa,EAAE;;AAEjB;EACE,aAAa,EAAE;;AAEjB;EACE,aAAa;EACb,cAAc;EACd,uBAAuB,EAAE;;AAE3B;EACE,iBAAiB;EACjB,YAAY;EACZ,cAAc;EACd,oBAAoB;EACpB,+BAA+B;EAC/B,wCAAwC;EACxC,mBAAmB;EACnB,aAAa;EACb,eAAe,EAAE;;AAEnB;EACE,QAAQ;EACR,oBAAoB;EACpB,oBAAoB;EACpB,iBAAiB,EAAE;;AAErB;EACE,6BAA6B,EAAE;;AAEjC;EACE,yBAAyB;EACzB,yBAAyB,EAAE;;AAE7B;EACE,6BAA6B,EAAE;;AAEjC;EACE,yBAAyB;EACzB,yBAAyB,EAAE;;AAE7B;EACE,yBAAyB,EAAE;;AAE7B;EACE,4BAA4B;EAC5B,yBAAyB,EAAE","file":"App.scss","sourcesContent":["html, body {\n  margin: 0;\n  padding: 0;\n  height: 100%; }\n\n#root {\n  height: 100%; }\n\n.App {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.App-header {\n  text-align: left;\n  color: #000;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);\n  padding-left: 30px;\n  height: 68px;\n  flex-shrink: 0; }\n\n.App-content {\n  flex: 1;\n  padding: 10px 100px;\n  background: #fafafa;\n  overflow: hidden; }\n\n.fade-enter {\n  transform: translateX(-100%); }\n\n.fade-enter.fade-enter-active {\n  transform: translateX(0);\n  transition: all .5s ease; }\n\n.fade-appear {\n  transform: translateX(-100%); }\n\n.fade-appear.fade-appear-active {\n  transform: translateX(0);\n  transition: all .5s ease; }\n\n.fade-exit {\n  transform: translateX(0); }\n\n.fade-exit.fade-exit-active {\n  transform: translateX(100%);\n  transition: all .5s ease; }\n"],"sourceRoot":""}]);



/***/ }),

/***/ "./node_modules/_css-loader@2.0.1@css-loader/dist/cjs.js?!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/component/Articles.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.0.1@css-loader/dist/cjs.js??ref--5-1!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/component/Articles.scss ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@2.0.1@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@2.0.1@css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".articlesContainer {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px; }\n\n.addArticle {\n  background: #e53935;\n  border: none;\n  width: 60px;\n  line-height: 60px;\n  padding: 0;\n  border-radius: 60px;\n  text-align: center;\n  outline: none;\n  position: fixed;\n  right: 1vw;\n  bottom: 5vh;\n  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.1);\n  transition: all .3s ease;\n  color: #fff;\n  font-size: 24px;\n  z-index: 999; }\n\n.articleItem {\n  padding: 15px;\n  background: #fff;\n  margin-bottom: 15px;\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);\n  transition: all .3s ease;\n  position: relative; }\n  .articleItem .fa-close {\n    position: absolute;\n    opacity: 0;\n    transition: all .5s ease;\n    top: 10px;\n    right: 10px;\n    cursor: pointer;\n    z-index: 10; }\n  .articleItem:hover .fa-close {\n    opacity: 1; }\n\n.continueIcon {\n  color: #0366d6;\n  font-size: 12px;\n  margin-left: 8px;\n  display: inline-block;\n  cursor: pointer; }\n", "",{"version":3,"sources":["/Users/grb/my/blog/src/component/Articles.scss"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,iBAAiB,EAAE;;AAErB;EACE,oBAAoB;EACpB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,oBAAoB;EACpB,mBAAmB;EACnB,cAAc;EACd,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,4CAA4C;EAC5C,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,aAAa,EAAE;;AAEjB;EACE,cAAc;EACd,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;EACjB,0CAA0C;EAC1C,yBAAyB;EACzB,mBAAmB,EAAE;EACrB;IACE,mBAAmB;IACnB,WAAW;IACX,yBAAyB;IACzB,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,YAAY,EAAE;EAChB;IACE,WAAW,EAAE;;AAEjB;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB,EAAE","file":"Articles.scss","sourcesContent":[".articlesContainer {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px; }\n\n.addArticle {\n  background: #e53935;\n  border: none;\n  width: 60px;\n  line-height: 60px;\n  padding: 0;\n  border-radius: 60px;\n  text-align: center;\n  outline: none;\n  position: fixed;\n  right: 1vw;\n  bottom: 5vh;\n  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.1);\n  transition: all .3s ease;\n  color: #fff;\n  font-size: 24px;\n  z-index: 999; }\n\n.articleItem {\n  padding: 15px;\n  background: #fff;\n  margin-bottom: 15px;\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);\n  transition: all .3s ease;\n  position: relative; }\n  .articleItem .fa-close {\n    position: absolute;\n    opacity: 0;\n    transition: all .5s ease;\n    top: 10px;\n    right: 10px;\n    cursor: pointer;\n    z-index: 10; }\n  .articleItem:hover .fa-close {\n    opacity: 1; }\n\n.continueIcon {\n  color: #0366d6;\n  font-size: 12px;\n  margin-left: 8px;\n  display: inline-block;\n  cursor: pointer; }\n"],"sourceRoot":""}]);



/***/ }),

/***/ "./node_modules/_css-loader@2.0.1@css-loader/dist/cjs.js?!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/component/Nav.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.0.1@css-loader/dist/cjs.js??ref--5-1!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/component/Nav.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@2.0.1@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@2.0.1@css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".navContainer {\n  line-height: 67px;\n  font-size: 20px;\n  display: flex;\n  justify-content: flex-end; }\n  .navContainer .navTab {\n    display: inline-block;\n    cursor: pointer;\n    margin-right: 30px; }\n  .navContainer .navTab a {\n    text-decoration: none;\n    color: #333; }\n  .navContainer .navTab a.active {\n    border-bottom: 3px solid #009a61; }\n", "",{"version":3,"sources":["/Users/grb/my/blog/src/component/Nav.scss"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,0BAA0B,EAAE;EAC5B;IACE,sBAAsB;IACtB,gBAAgB;IAChB,mBAAmB,EAAE;EACvB;IACE,sBAAsB;IACtB,YAAY,EAAE;EAChB;IACE,iCAAiC,EAAE","file":"Nav.scss","sourcesContent":[".navContainer {\n  line-height: 67px;\n  font-size: 20px;\n  display: flex;\n  justify-content: flex-end; }\n  .navContainer .navTab {\n    display: inline-block;\n    cursor: pointer;\n    margin-right: 30px; }\n  .navContainer .navTab a {\n    text-decoration: none;\n    color: #333; }\n  .navContainer .navTab a.active {\n    border-bottom: 3px solid #009a61; }\n"],"sourceRoot":""}]);



/***/ }),

/***/ "./node_modules/_css-loader@2.0.1@css-loader/dist/cjs.js?!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/component/PersonCenter.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.0.1@css-loader/dist/cjs.js??ref--5-1!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/component/PersonCenter.scss ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@2.0.1@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@2.0.1@css-loader/dist/runtime/api.js")(true);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/_css-loader@2.0.1@css-loader/dist/runtime/url-escape.js */ "./node_modules/_css-loader@2.0.1@css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../img/avatar.jpeg */ "./src/img/avatar.jpeg"));

// Module
exports.push([module.i, ".personContainer {\n  display: flex;\n  align-items: center; }\n\n.logoContainer {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: url(" + ___CSS_LOADER_URL___0___ + ") center center;\n  background-size: 40px 40px;\n  margin-right: 10px; }\n", "",{"version":3,"sources":["/Users/grb/my/blog/src/component/PersonCenter.scss"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,oBAAoB,EAAE;;AAExB;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,wDAAoD;EACpD,2BAA2B;EAC3B,mBAAmB,EAAE","file":"PersonCenter.scss","sourcesContent":[".personContainer {\n  display: flex;\n  align-items: center; }\n\n.logoContainer {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: url(\"../img/avatar.jpeg\") center center;\n  background-size: 40px 40px;\n  margin-right: 10px; }\n"],"sourceRoot":""}]);



/***/ }),

/***/ "./node_modules/_css-loader@2.0.1@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@2.0.1@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/_css-loader@2.0.1@css-loader/dist/runtime/url-escape.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_css-loader@2.0.1@css-loader/dist/runtime/url-escape.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url)) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(prefix + id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../node_modules/_css-loader@2.0.1@css-loader/dist/cjs.js??ref--5-1!../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./App.scss */ "./node_modules/_css-loader@2.0.1@css-loader/dist/cjs.js?!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/App.scss");
    var insertCss = __webpack_require__(/*! ../node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js */ "./node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/AppContent.js":
/*!***************************!*\
  !*** ./src/AppContent.js ***!
  \***************************/
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

var _dec, _class;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _Nav = __webpack_require__(/*! ./component/Nav */ "./src/component/Nav.js");

var _Nav2 = _interopRequireDefault(_Nav);

var _PersonCenter = __webpack_require__(/*! ./component/PersonCenter */ "./src/component/PersonCenter.js");

var _PersonCenter2 = _interopRequireDefault(_PersonCenter);

var _route = __webpack_require__(/*! ./route */ "./src/route/index.js");

var _App = __webpack_require__(/*! ./App.scss */ "./src/App.scss");

var _App2 = _interopRequireDefault(_App);

var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ "isomorphic-style-loader/lib/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppContent = (_dec = (0, _withStyles2.default)(_App2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(AppContent, _Component);

  function AppContent() {
    (0, _classCallCheck3.default)(this, AppContent);
    return (0, _possibleConstructorReturn3.default)(this, (AppContent.__proto__ || (0, _getPrototypeOf2.default)(AppContent)).apply(this, arguments));
  }

  (0, _createClass3.default)(AppContent, [{
    key: 'render',
    value: function render() {
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
            null,
            _route.routes.map(function (route) {
              return _react2.default.createElement(_reactRouterDom.Route, { key: route.path, path: route.path, exact: true, component: route.component });
            })
          )
        )
      );
    }
  }]);
  return AppContent;
}(_react.Component)) || _class);
exports.default = AppContent;

/***/ }),

/***/ "./src/AppProvider.js":
/*!****************************!*\
  !*** ./src/AppProvider.js ***!
  \****************************/
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

var _class, _temp;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppProvider = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(AppProvider, _React$Component);

  function AppProvider() {
    (0, _classCallCheck3.default)(this, AppProvider);
    return (0, _possibleConstructorReturn3.default)(this, (AppProvider.__proto__ || (0, _getPrototypeOf2.default)(AppProvider)).apply(this, arguments));
  }

  (0, _createClass3.default)(AppProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children || null;
    }
  }]);
  return AppProvider;
}(_react2.default.Component), _class.childContextTypes = {
  insertCss: _propTypes2.default.func.isRequired
}, _temp);
exports.default = AppProvider;

/***/ }),

/***/ "./src/ServerApp.js":
/*!**************************!*\
  !*** ./src/ServerApp.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _AppProvider = __webpack_require__(/*! ./AppProvider */ "./src/AppProvider.js");

var _AppProvider2 = _interopRequireDefault(_AppProvider);

var _AppContent = __webpack_require__(/*! ./AppContent */ "./src/AppContent.js");

var _AppContent2 = _interopRequireDefault(_AppContent);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ./src/server/bundle.tsx

exports.default = {
  render: function render(req, store) {
    var css = [];
    var context = {};
    var CssContext = { insertCss: function insertCss() {
        for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
          styles[_key] = arguments[_key];
        }

        return styles.forEach(function (s) {
          return css.push(s._getCss());
        });
      } };
    var reduxState = store.getState();
    var html = (0, _server.renderToString)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { context: context, location: req.url },
        _react2.default.createElement(
          _AppProvider2.default,
          { context: CssContext },
          _react2.default.createElement(_AppContent2.default, null)
        )
      )
    ));
    var style = css.join('');
    return {
      html: html,
      style: style,
      reduxState: reduxState
    };
  }
};

/***/ }),

/***/ "./src/api/article.js":
/*!****************************!*\
  !*** ./src/api/article.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios2.default.defaults.baseURL = 'http://localhost:3005';

exports.default = {
  createArticle: function createArticle(article) {
    return _axios2.default.post('/api/article/create', article);
  },
  updateArticle: function updateArticle(article) {
    return _axios2.default.put('/api/article/update', article);
  },
  getArticles: function getArticles() {
    return _axios2.default.get('/api/article');
  },
  getArticleDetail: function getArticleDetail(id) {
    return _axios2.default.get('/api/article/detail/' + id);
  },
  deleteArticle: function deleteArticle(id) {
    return _axios2.default.delete('/api/article/' + id);
  }
};

/***/ }),

/***/ "./src/component/AboutMe.js":
/*!**********************************!*\
  !*** ./src/component/AboutMe.js ***!
  \**********************************/
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
                )
            );
        }
    }]);
    return AboutMe;
}(_react.Component);

exports.default = AboutMe;

/***/ }),

/***/ "./src/component/Articles.js":
/*!***********************************!*\
  !*** ./src/component/Articles.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _dec, _class;
// import MarkdownEditor from './Markdown'
// import { md2Text } from '../utils'


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(/*! ./List */ "./src/component/List.js");

var _List2 = _interopRequireDefault(_List);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _store = __webpack_require__(/*! ../store */ "./src/store.js");

var _article = __webpack_require__(/*! ../api/article */ "./src/api/article.js");

var _article2 = _interopRequireDefault(_article);

var _Articles = __webpack_require__(/*! ./Articles.scss */ "./src/component/Articles.scss");

var _Articles2 = _interopRequireDefault(_Articles);

var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ "isomorphic-style-loader/lib/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Articles = (_dec = (0, _withStyles2.default)(_Articles2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Articles, _Component);

  function Articles(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Articles);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Articles.__proto__ || (0, _getPrototypeOf2.default)(Articles)).call(this, props));

    _this.state = {
      isEdit: false,
      showIcon: false
    };
    _this.mde = null;

    _this.renderItem = function (item, index) {
      return _react2.default.createElement(
        'div',
        { className: 'articleItem', key: index, onClick: _this.showContent.bind(_this, item) },
        _react2.default.createElement('i', { className: 'fa fa-close', onClick: function onClick(e) {
            _this.deleteActicle(e, index);
          } }),
        _react2.default.createElement(
          'h1',
          { className: 'articleItem__title' },
          item.title
        ),
        _react2.default.createElement(
          'h3',
          { className: 'articleItem__author' },
          item.summary,
          _react2.default.createElement(
            'span',
            { className: 'continueIcon' },
            '\u7EE7\u7EED\u9605\u8BFB...'
          )
        )
      );
    };

    _this.changeIsEdit = function () {
      _this.setState({
        isEdit: !_this.state.isEdit
      });
      if (_this.state.isEdit) {
        var article = {
          content: _this.mde.smde.value(),
          title: _this.mde.state.title,
          summary: _this.mde.state.summary
        };
        if (!article.content) {
          return;
        }
        _article2.default.createArticle(article).then(function (resp) {
          _this.getArticles();
        });
      }
    };

    _this.getArticles = function () {
      return new _promise2.default(function (resolve, reject) {
        _article2.default.getArticles().then(function (_ref) {
          var data = _ref.data;

          _this.setState({
            articles: data.articleArr
          });
          resolve();
        }).catch(function (err) {
          reject(err);
          console.log('err:', err);
        });
      });
    };

    _this.showContent = function (item) {
      _this.props.history.push({
        pathname: '/blog/detail/' + item._id
      });
    };

    _this.deleteActicle = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e, index) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.stopPropagation();
                _context.next = 3;
                return _article2.default.deleteArticle(_this.state.articles[index]._id);

              case 3:
                _this.getArticles();

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    return _this;
  }

  (0, _createClass3.default)(Articles, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      this.props.fetchData();
      setTimeout(function () {
        _this3.setState({
          showIcon: true
        });
      }, 2000);
    }
  }, {
    key: 'render',
    value: function render() {
      var articles = this.props.articles;

      return _react2.default.createElement(
        'div',
        { className: 'articlesContainer' },
        !this.state.isEdit ? _react2.default.createElement(_List2.default, { data: articles || [], renderItem: this.renderItem }) : null
        // <MarkdownEditor ref={(mde) => {this.mde= mde}}/>
        ,
        this.state.showIcon && _react2.default.createElement(
          'div',
          { className: 'addArticle', onClick: this.changeIsEdit },
          !this.state.isEdit ? _react2.default.createElement('i', { className: 'fa fa-plus' }) : _react2.default.createElement('i', { className: 'fa fa-book' })
        )
      );
    }
  }]);
  return Articles;
}(_react.Component)) || _class);


var mapStateToProps = function mapStateToProps(state) {
  return {
    articles: state
  };
};

var mapDispatchToProps = {
  fetchData: _store.fetchData
};

Articles.asyncData = _store.fetchData;

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Articles);

/***/ }),

/***/ "./src/component/Articles.scss":
/*!*************************************!*\
  !*** ./src/component/Articles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../../node_modules/_css-loader@2.0.1@css-loader/dist/cjs.js??ref--5-1!../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./Articles.scss */ "./node_modules/_css-loader@2.0.1@css-loader/dist/cjs.js?!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/component/Articles.scss");
    var insertCss = __webpack_require__(/*! ../../node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js */ "./node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/component/List.js":
/*!*******************************!*\
  !*** ./src/component/List.js ***!
  \*******************************/
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

/** 
 * props参数列表
 * data 列表数据
 * renderItem  列表每一项dom
*/
var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List(props) {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).call(this, props));
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'list-wrap' },
        this.props.data.map(function (item, index) {
          return _this2.props.renderItem(item, index);
        })
      );
    }
  }]);
  return List;
}(_react.Component);

exports.default = List;

/***/ }),

/***/ "./src/component/Nav.js":
/*!******************************!*\
  !*** ./src/component/Nav.js ***!
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

var _dec, _class;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _Nav = __webpack_require__(/*! ./Nav.scss */ "./src/component/Nav.scss");

var _Nav2 = _interopRequireDefault(_Nav);

var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ "isomorphic-style-loader/lib/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = (_dec = (0, _withStyles2.default)(_Nav2.default), _dec(_class = function (_Component) {
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
}(_react.Component)) || _class);
exports.default = Nav;

/***/ }),

/***/ "./src/component/Nav.scss":
/*!********************************!*\
  !*** ./src/component/Nav.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../../node_modules/_css-loader@2.0.1@css-loader/dist/cjs.js??ref--5-1!../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./Nav.scss */ "./node_modules/_css-loader@2.0.1@css-loader/dist/cjs.js?!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/component/Nav.scss");
    var insertCss = __webpack_require__(/*! ../../node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js */ "./node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/component/PersonCenter.js":
/*!***************************************!*\
  !*** ./src/component/PersonCenter.js ***!
  \***************************************/
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

var _dec, _class;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _PersonCenter = __webpack_require__(/*! ./PersonCenter.scss */ "./src/component/PersonCenter.scss");

var _PersonCenter2 = _interopRequireDefault(_PersonCenter);

var _avatar = __webpack_require__(/*! ../img/avatar.jpeg */ "./src/img/avatar.jpeg");

var _avatar2 = _interopRequireDefault(_avatar);

var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ "isomorphic-style-loader/lib/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PersonCenter = (_dec = (0, _withStyles2.default)(_PersonCenter2.default), _dec(_class = function (_Component) {
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
                _react2.default.createElement('img', { className: 'logoContainer', src: _avatar2.default })
            );
        }
    }]);
    return PersonCenter;
}(_react.Component)) || _class);
exports.default = PersonCenter;

/***/ }),

/***/ "./src/component/PersonCenter.scss":
/*!*****************************************!*\
  !*** ./src/component/PersonCenter.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../../node_modules/_css-loader@2.0.1@css-loader/dist/cjs.js??ref--5-1!../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./PersonCenter.scss */ "./node_modules/_css-loader@2.0.1@css-loader/dist/cjs.js?!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/component/PersonCenter.scss");
    var insertCss = __webpack_require__(/*! ../../node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js */ "./node_modules/_isomorphic-style-loader@4.0.0@isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/img/avatar.jpeg":
/*!*****************************!*\
  !*** ./src/img/avatar.jpeg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dd012ac20e3b6822cdcb974cb8f366ef.jpeg";

/***/ }),

/***/ "./src/route/index.js":
/*!****************************!*\
  !*** ./src/route/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _AboutMe = __webpack_require__(/*! ../component/AboutMe */ "./src/component/AboutMe.js");

var _AboutMe2 = _interopRequireDefault(_AboutMe);

var _Articles = __webpack_require__(/*! ../component/Articles */ "./src/component/Articles.js");

var _Articles2 = _interopRequireDefault(_Articles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ArticleEdit from '../component/ArticleEdit'
// import Detail from '../component/Detail'

var routes = exports.routes = [{
  path: '/',
  component: _Articles2.default
}, {
  path: '/aboutMe',
  component: _AboutMe2.default
}];

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _ServerApp = __webpack_require__(/*! ./ServerApp */ "./src/ServerApp.js");

var _ServerApp2 = _interopRequireDefault(_ServerApp);

var _route = __webpack_require__(/*! ./route */ "./src/route/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _store = __webpack_require__(/*! ./store */ "./src/store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static(_path2.default.resolve(__dirname, "../dist")));

app.get("/*", function (req, res) {
  var store = (0, _store2.default)();
  var dataRequirements = _route.routes.filter(function (route) {
    return (0, _reactRouterDom.matchPath)(req.url, route);
  }) // filter matching paths
  .map(function (route) {
    return route.component;
  }) // map to components
  .filter(function (comp) {
    return comp.asyncData;
  }) // check if components have data requirement
  .map(function (comp) {
    return store.dispatch(comp.asyncData());
  }); // dispatch data requirement

  _promise2.default.all(dataRequirements).then(function () {
    var _serverApp$render = _ServerApp2.default.render(req, store),
        _serverApp$render$htm = _serverApp$render.html,
        html = _serverApp$render$htm === undefined ? '' : _serverApp$render$htm,
        _serverApp$render$sty = _serverApp$render.style,
        style = _serverApp$render$sty === undefined ? '' : _serverApp$render$sty,
        reduxState = _serverApp$render.reduxState;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlTemplate(html, style, reduxState));
  });
});

app.listen(2048);

function htmlTemplate(html, style, reduxState) {
  return "\n        <html>\n            <head>\n                <meta charset=\"utf-8\">\n                <title>\u535A\u5BA2</title>\n                " + (style ? "<style>" + style + "</style>" : '') + "\n                <script>\n                  window.REDUX_DATA = " + (0, _stringify2.default)(reduxState) + "\n                </script>\n            </head>\n            <body>\n                <div id=\"root\">" + html + "</div>\n                <script src='/app.bundle.js'></script>\n            </body>\n        </html>\n    ";
}
/* WEBPACK VAR INJECTION */}.call(this, "src"))

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchData = undefined;

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _article = __webpack_require__(/*! ./api/article */ "./src/api/article.js");

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeData = function storeData(data) {
    return {
        type: "STORE_DATA",
        data: data
    };
};

var fetchData = exports.fetchData = function fetchData() {
    return function (dispatch) {
        return _article2.default.getArticles().then(function (_ref) {
            var data = _ref.data;
            return dispatch(storeData(data.articleArr));
        });
    };
};

var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case "STORE_DATA":
            return action.data;
        default:
            return state;
    }
};

exports.default = function () {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ "babel-runtime/core-js/promise":
/*!************************************************!*\
  !*** external "babel-runtime/core-js/promise" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

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

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "isomorphic-style-loader/lib/withStyles":
/*!*********************************************************!*\
  !*** external "isomorphic-style-loader/lib/withStyles" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });