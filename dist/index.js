(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(3);

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = __webpack_require__(5);

var _typeof3 = _interopRequireDefault(_typeof2);

var _getIterator2 = __webpack_require__(6);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = __webpack_require__(7);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var hubspotFormSubmit = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(hubspotId, formId, data) {
    var hutk, result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, pageName, formQueryString, url, options, res;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Get hubspot cookie. Without it, form submission fails
            hutk = _jsCookie2.default.get('hubspotutk');

            if (hutk) {
              _context.next = 4;
              break;
            }

            console.log('hubspotutk cookie not found');
            return _context.abrupt('return', false);

          case 4:

            //  If the data is an Element object, convert it to FormData
            if (data instanceof Element) {
              data = new FormData(data);
            }

            // If the the data is a FormData object, convert it to a plain Object

            if (!(data instanceof FormData)) {
              _context.next = 27;
              break;
            }

            result = {};
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 10;

            for (_iterator = (0, _getIterator3.default)(data.entries()); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              entry = _step.value;

              result[entry[0]] = entry[1];
            }
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context['catch'](10);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 18:
            _context.prev = 18;
            _context.prev = 19;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 21:
            _context.prev = 21;

            if (!_didIteratorError) {
              _context.next = 24;
              break;
            }

            throw _iteratorError;

          case 24:
            return _context.finish(21);

          case 25:
            return _context.finish(18);

          case 26:
            data = result;

          case 27:
            if (!((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) !== 'object')) {
              _context.next = 30;
              break;
            }

            console.log('Input data must be an Element, FormData, or Object');
            return _context.abrupt('return', false);

          case 30:

            // Create querystring
            pageName = document.querySelector('title');

            pageName = pageName ? pageName.textContent : '';
            data = (0, _extends3.default)({}, data, {
              hs_context: (0, _stringify2.default)({
                hutk: hutk,
                pageUrl: window.location.href,
                pageName: pageName
              })
            });
            formQueryString = (0, _querystring.stringify)(data);

            // Send form

            url = 'https://forms.hubspot.com/uploads/form/v2/' + hubspotId + '/' + formId;
            options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': formQueryString.length
              },
              mode: 'no-cors',
              body: formQueryString
            };
            _context.prev = 36;
            _context.next = 39;
            return (0, _isomorphicFetch2.default)(url, options);

          case 39:
            res = _context.sent;

            console.debug('Hubspot form submitted', res);
            _context.next = 46;
            break;

          case 43:
            _context.prev = 43;
            _context.t1 = _context['catch'](36);

            console.log(_context.t1);

          case 46:
            return _context.abrupt('return', true);

          case 47:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[10, 14, 18, 26], [19,, 21, 25], [36, 43]]);
  }));

  return function hubspotFormSubmit(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _isomorphicFetch = __webpack_require__(8);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _querystring = __webpack_require__(9);

var _jsCookie = __webpack_require__(10);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = hubspotFormSubmit;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ })
/******/ ]);
});