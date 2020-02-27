module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Blocks.js":
/*!******************************!*\
  !*** ./components/Blocks.js ***!
  \******************************/
/*! exports provided: default, INDEX_PAGE_BLOCKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDEX_PAGE_BLOCKS", function() { return INDEX_PAGE_BLOCKS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_blocks_bodyCopyBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/blocks/bodyCopyBlock */ "./components/blocks/bodyCopyBlock.js");
/* harmony import */ var _components_blocks_headingBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/blocks/headingBlocks */ "./components/blocks/headingBlocks.js");
/* harmony import */ var _components_blocks_imageBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/blocks/imageBlock */ "./components/blocks/imageBlock.js");
var _jsxFileName = "/Users/kendallstrautman/Forestry/tina/tina-test-sites/open-author-demo/components/Blocks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Blocks(props) {
  const data = props.data.index_blocks;
  console.log(data);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_blocks_headingBlocks__WEBPACK_IMPORTED_MODULE_2__["H1"], {
    data: data[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_blocks_bodyCopyBlock__WEBPACK_IMPORTED_MODULE_1__["BodyCopy"], {
    data: data[1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_blocks_imageBlock__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    data: data[2],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_blocks_headingBlocks__WEBPACK_IMPORTED_MODULE_2__["H2"], {
    data: data[3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
}
const INDEX_PAGE_BLOCKS = {
  heading_1: {
    Component: _components_blocks_headingBlocks__WEBPACK_IMPORTED_MODULE_2__["H1"],
    template: _components_blocks_headingBlocks__WEBPACK_IMPORTED_MODULE_2__["heading_1_template"]
  },
  heading_2: {
    Component: _components_blocks_headingBlocks__WEBPACK_IMPORTED_MODULE_2__["H2"],
    template: _components_blocks_headingBlocks__WEBPACK_IMPORTED_MODULE_2__["heading_2_template"]
  },
  body_copy: {
    Component: _components_blocks_bodyCopyBlock__WEBPACK_IMPORTED_MODULE_1__["BodyCopy"],
    template: _components_blocks_bodyCopyBlock__WEBPACK_IMPORTED_MODULE_1__["body_copy_template"]
  },
  image: {
    Component: _components_blocks_imageBlock__WEBPACK_IMPORTED_MODULE_3__["Image"],
    template: _components_blocks_imageBlock__WEBPACK_IMPORTED_MODULE_3__["image_template"]
  }
};

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
var _jsxFileName = "/Users/kendallstrautman/Forestry/tina/tina-test-sites/open-author-demo/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Layout(props) {
  return __jsx("section", {
    className: "jsx-3502012908" + " " + 'layout',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(_Meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
    siteTitle: props.siteTitle,
    siteDescription: props.siteDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3502012908" + " " + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3502012908",
    __self: this
  }, ".layout.jsx-3502012908{overflow-x:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}@media (min-width:768px){.layout.jsx-3502012908{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5kYWxsc3RyYXV0bWFuL0ZvcmVzdHJ5L3RpbmEvdGluYS10ZXN0LXNpdGVzL29wZW4tYXV0aG9yLWRlbW8vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0ssQUFHeUIsQUFNSCxjQUNmLElBTmEsMEVBQ1MsOEVBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9rZW5kYWxsc3RyYXV0bWFuL0ZvcmVzdHJ5L3RpbmEvdGluYS10ZXN0LXNpdGVzL29wZW4tYXV0aG9yLWRlbW8vY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWV0YSBmcm9tICcuL01ldGEnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChwcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nbGF5b3V0Jz5cblx0XHRcdDxNZXRhXG5cdFx0XHRcdHNpdGVUaXRsZT17cHJvcHMuc2l0ZVRpdGxlfVxuXHRcdFx0XHRzaXRlRGVzY3JpcHRpb249e3Byb3BzLnNpdGVEZXNjcmlwdGlvbn1cblx0XHRcdC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHQubGF5b3V0IHtcblx0XHRcdFx0XHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0XHRcdC5sYXlvdXQge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KVxufVxuIl19 */\n/*@ sourceURL=/Users/kendallstrautman/Forestry/tina/tina-test-sites/open-author-demo/components/Layout.js */"));
}

/***/ }),

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Meta; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kendallstrautman/Forestry/tina/tina-test-sites/open-author-demo/components/Meta.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Meta(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-4210088078",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("meta", {
    charSet: "utf-8",
    className: "jsx-4210088078",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-4210088078",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.siteTitle), __jsx("meta", {
    name: "Description",
    content: props.description,
    className: "jsx-4210088078",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4210088078",
    __self: this
  }, "*{box-sizing:inherit;}html{box-sizing:border-box;overflow-y:scroll;}body{margin:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;overflow-x:hidden;color:#000;font-size:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}a{-webkit-text-decoration:none;text-decoration:none;color:inherit;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease;}a:hover{-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease;opacity:0.5;-webkit-text-decoration-color:inherit;text-decoration-color:inherit;}ul{list-style:none;margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;list-style-position:outside;list-style-image:none;}ol{margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;list-style-position:outside;list-style-image:none;}ul,ol,p{margin-bottom:1.45rem;}img{max-width:100%;}img,figure,table,fieldset{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}pre{margin-left:0;margin-right:0;margin-top:0;margin-bottom:1.45rem;font-size:0.85rem;line-height:1.42;background:hsla(0,0%,0%,0.04);border-radius:3px;overflow:auto;word-wrap:normal;padding:1.45rem;}table{font-size:1rem;line-height:1.45rem;border-collapse:collapse;width:100%;}blockquote{margin-left:1.45rem;margin-right:1.45rem;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}strong{font-weight:bold;}li{margin-bottom:calc(1.45rem / 2);}ol li{padding-left:0;}ul li{padding-left:0;}li>ol{margin-left:1.45rem;margin-bottom:calc(1.45rem / 2);margin-top:calc(1.45rem / 2);}li>ul{margin-left:1.45rem;margin-bottom:calc(1.45rem / 2);margin-top:calc(1.45rem / 2);}blockquote *:last-child{margin-bottom:0;}li *:last-child{margin-bottom:0;}p *:last-child{margin-bottom:0;}li>p{margin-bottom:calc(1.45rem / 2);}code{font-size:0.85rem;line-height:1.45rem;}h1,h2,h3,h4,h5,h6,p{font-family:'Work Sans','Helvetica Neue',Helvetica,sans-serif;margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;text-rendering:optimizeLegibility;}h1,h2{font-weight:normal;}h1{font-size:3.5rem;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;line-height:1;}h2{font-size:1.5rem;-webkit-letter-spacing:-0.75px;-moz-letter-spacing:-0.75px;-ms-letter-spacing:-0.75px;letter-spacing:-0.75px;line-height:1.1;}h3{font-size:1.2rem;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;line-height:1.1875;font-weight:normal;}p{font-size:1.125rem;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;line-height:1.2;}@media (min-width:1280px){h1{font-size:4.625rem;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;line-height:1.1875;}h2{font-size:2rem;-webkit-letter-spacing:-0.75px;-moz-letter-spacing:-0.75px;-ms-letter-spacing:-0.75px;letter-spacing:-0.75px;line-height:1.1667;}h3{font-size:1rem;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;line-height:1.1875;}p{font-size:1.25rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5kYWxsc3RyYXV0bWFuL0ZvcmVzdHJ5L3RpbmEvdGluYS10ZXN0LXNpdGVzL29wZW4tYXV0aG9yLWRlbW8vY29tcG9uZW50cy9NZXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlLLEFBRzBCLEFBR0csQUFJYixBQVNZLEFBS1EsQUFLYixBQVVQLEFBV2EsQUFHUCxBQU1ELEFBVUEsQUFhQyxBQU1LLEFBVUgsQUFHZSxBQUdqQixBQUdBLEFBR0ssQUFLQSxBQUtKLEFBR0EsQUFHQSxBQUdnQixBQUdkLEFBZStDLEFBZTlDLEFBSUYsQUFNQSxBQU1BLEFBT0UsQUFPQyxBQU1KLEFBTUEsQUFNRyxTQXZNc0MsQUE2QnhDLEtBb0JGLEFBVUEsQ0FoQmhCLEFBNkJxQixBQXNCckIsQUFHQSxBQTJGeUIsQUFNRCxDQS9LZCxBQTJGVixBQUdBLEFBR0EsQ0E1QkEsQUFvRXFCLEFBTUcsQUFNRCxDQTlDRixBQThFcEIsQ0EvTUQsQUErSkEsQUF1QnVCLEFBT0QsQ0F4R0EsQUFzQlcsQUFLQSxFQTdHZCxBQTRDbkIsR0FwQmtCLENBVUYsR0FvQkYsQUFVQSxHQStCZCxBQTRCQSxHQTlDMEIsR0FrRDFCLEVBOUhBLENBa0NpQixBQWdESCxDQTFERSxBQThCRSxBQVVLLFFBcERSLEVBNEZlLEFBS0EsRUExQlosR0ExREQsQUFVRixFQW9CQyxDQXNCSixFQStERyxDQXhJSSxDQVNXLEFBb0RYLEVBaEROLEtBbUJnQixBQTBDN0IsQUFNZ0IsRUExREQsQ0E4QkUsRUFxRkQsRUEzSGUsR0FibkIsQUFvR1osQUFLQSxDQTVDa0IsSUFtQkQsQ0ExRFksR0E4QmQsQ0FxRkQsQ0F4SUUsT0ErQk8sQUE4QlcsR0FtQm5CLEVBNUJRLEFBcUZMLEdBeElrQixPQXlKckIsQ0FwSVEsQ0EyREEsQUFtR0YsSUFZQSxDQWhLckIsQUEwR2dCLENBNEJJLEVBT0gsQUFhSSxFQXJJckIsQUEyR2lCLEVBTGpCLENBN0ZtQixDQXREbkIsS0E2S0MsQ0ExQ2dCLENBcEhqQixDQTJEQSxDQStHQyxDQW5CRCxDQVBvQixDQXJLZSxBQStKbkMsQ0EwQkMsR0E5S0QsQ0FrRGUsS0E2RUEsUUE0QmYsQ0F4R2tCLEtBNkVLLFVBMUl2QixFQThEaUIsVUE2RUYsTUE1RWYsUUE2RW1DLGtDQUNuQyIsImZpbGUiOiIvVXNlcnMva2VuZGFsbHN0cmF1dG1hbi9Gb3Jlc3RyeS90aW5hL3RpbmEtdGVzdC1zaXRlcy9vcGVuLWF1dGhvci1kZW1vL2NvbXBvbmVudHMvTWV0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWV0YShwcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cblx0XHRcdFx0PHRpdGxlPntwcm9wcy5zaXRlVGl0bGV9PC90aXRsZT5cblx0XHRcdFx0PG1ldGEgbmFtZT0nRGVzY3JpcHRpb24nIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9ufT48L21ldGE+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8c3R5bGUganN4IGdsb2JhbD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHQqIHtcblx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGluaGVyaXQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGh0bWwge1xuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdG92ZXJmbG93LXk6IHNjcm9sbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ym9keSB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0XHRvdmVyZmxvdy14OiBoaWRkZW47XG5cdFx0XHRcdFx0XHRjb2xvcjogIzAwMDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHRcdFx0XHRcdFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0XHRjb2xvcjogaW5oZXJpdDtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhOmhvdmVyIHtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMC41O1xuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBpbmhlcml0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR1bCB7XG5cdFx0XHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDA7XG5cdFx0XHRcdFx0XHRsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xuXHRcdFx0XHRcdFx0bGlzdC1zdHlsZS1pbWFnZTogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b2wge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDA7XG5cdFx0XHRcdFx0XHRsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xuXHRcdFx0XHRcdFx0bGlzdC1zdHlsZS1pbWFnZTogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dWwsXG5cdFx0XHRcdFx0b2wsXG5cdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxLjQ1cmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpbWcsXG5cdFx0XHRcdFx0ZmlndXJlLFxuXHRcdFx0XHRcdHRhYmxlLFxuXHRcdFx0XHRcdGZpZWxkc2V0IHtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAwO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogMDtcblx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMS40NXJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHJlIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEuNDVyZW07XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDAuODVyZW07XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS40Mjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDAlLCAwLjA0KTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBhdXRvO1xuXHRcdFx0XHRcdFx0d29yZC13cmFwOiBub3JtYWw7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxLjQ1cmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YWJsZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS40NXJlbTtcblx0XHRcdFx0XHRcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YmxvY2txdW90ZSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMS40NXJlbTtcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMS40NXJlbTtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMDtcblx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMDtcblx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMDtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEuNDVyZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0cm9uZyB7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogY2FsYygxLjQ1cmVtIC8gMik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG9sIGxpIHtcblx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dWwgbGkge1xuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsaSA+IG9sIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxLjQ1cmVtO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogY2FsYygxLjQ1cmVtIC8gMik7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiBjYWxjKDEuNDVyZW0gLyAyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGkgPiB1bCB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMS40NXJlbTtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IGNhbGMoMS40NXJlbSAvIDIpO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogY2FsYygxLjQ1cmVtIC8gMik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJsb2NrcXVvdGUgKjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxpICo6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwICo6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsaSA+IHAge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogY2FsYygxLjQ1cmVtIC8gMik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvZGUge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjg1cmVtO1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNDVyZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0IHtcblx0XHRcdFx0XHRcdC8qIC8vVFlQT0dSQVBIWS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoMSxcblx0XHRcdFx0XHRoMixcblx0XHRcdFx0XHRoMyxcblx0XHRcdFx0XHRoNCxcblx0XHRcdFx0XHRoNSxcblx0XHRcdFx0XHRoNixcblx0XHRcdFx0XHRwIHtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDA7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxLjQ1cmVtO1xuXHRcdFx0XHRcdFx0Y29sb3I6IGluaGVyaXQ7XG5cdFx0XHRcdFx0XHR0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGgxLFxuXHRcdFx0XHRcdGgyIHtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aDEge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzLjVyZW07XG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLTFweDtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGgyIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC0wLjc1cHg7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS4xO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjE4NzU7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHAge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcblx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS4yO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcblx0XHRcdFx0XHRcdGgxIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiA0LjYyNXJlbTtcblx0XHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC0xcHg7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjE4NzU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGgyIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAycmVtO1xuXHRcdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLTAuNzVweDtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMTY2Nztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjE4NzU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHAge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMjVyZW07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfVxuXHRcdFx0PC9zdHlsZT5cblx0XHQ8Lz5cblx0KVxufVxuIl19 */\n/*@ sourceURL=/Users/kendallstrautman/Forestry/tina/tina-test-sites/open-author-demo/components/Meta.js */"));
}

/***/ }),

/***/ "./components/blocks/bodyCopyBlock.js":
/*!********************************************!*\
  !*** ./components/blocks/bodyCopyBlock.js ***!
  \********************************************/
/*! exports provided: BodyCopy, body_copy_template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyCopy", function() { return BodyCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "body_copy_template", function() { return body_copy_template; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kendallstrautman/Forestry/tina/tina-test-sites/open-author-demo/components/blocks/bodyCopyBlock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function BodyCopy({
  data
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, data.text));
}
const body_copy_template = {
  type: 'body_copy',
  label: 'Body Copy',
  defaultItem: {
    _template: 'body_copy',
    text: 'What is a house but a sedes, a seat?—better if a country seat. I discovered many a site for a house not likely to be soon improved, which some might have thought too far from the village, but to my eyes the village was too far from it.',
    position: 'center',
    width: 'medium',
    'col-start': 2,
    'col-end': 3
  },
  key: undefined,
  // todo add fields here for position and width etc.
  fields: []
};

/***/ }),

/***/ "./components/blocks/headingBlocks.js":
/*!********************************************!*\
  !*** ./components/blocks/headingBlocks.js ***!
  \********************************************/
/*! exports provided: H1, heading_1_template, H2, heading_2_template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heading_1_template", function() { return heading_1_template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heading_2_template", function() { return heading_2_template; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kendallstrautman/Forestry/tina/tina-test-sites/open-author-demo/components/blocks/headingBlocks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function H1({
  data
}) {
  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, data.text);
}
const heading_1_template = {
  type: 'heading_1',
  label: 'Heading 1',
  defaultItem: {
    _template: 'heading_1',
    text: 'Wherever I sat, there I might live, and the landscape radiated from me accordingly.',
    position: 'left',
    width: 'large',
    'col-start': 1,
    'col-end': 3
  },
  key: undefined,
  // todo add fields here for position and width etc.
  fields: []
};
function H2({
  data
}) {
  console.log(data);
  return __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, data.text);
}
const heading_2_template = {
  type: 'heading_2',
  label: 'Heading 2',
  defaultItem: {
    _template: 'heading_2',
    text: 'Wherever I sat, there I might live, and the landscape radiated from me accordingly.',
    position: 'center',
    width: 'medium',
    'col-start': 2,
    'col-end': 3
  },
  key: undefined,
  // todo add fields here for position and width etc.
  fields: []
};

/***/ }),

/***/ "./components/blocks/imageBlock.js":
/*!*****************************************!*\
  !*** ./components/blocks/imageBlock.js ***!
  \*****************************************/
/*! exports provided: Image, image_template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "image_template", function() { return image_template; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kendallstrautman/Forestry/tina/tina-test-sites/open-author-demo/components/blocks/imageBlock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Image({
  data
}) {
  return __jsx("img", {
    src: data.src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  });
}
const image_template = {
  type: 'image',
  label: 'Image',
  defaultItem: {
    _template: 'image',
    src: '/img/tomas-robertson-tqe-NKrSXTw-unsplash.jpg',
    position: 'right',
    width: 'large',
    'col-start': 2,
    'col-end': 4
  },
  key: undefined,
  // todo add fields here for position and width etc.
  fields: []
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Blocks */ "./components/Blocks.js");
var _jsxFileName = "/Users/kendallstrautman/Forestry/tina/tina-test-sites/open-author-demo/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Index = props => {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pathname: "/",
    siteTitle: props.title,
    siteDescription: props.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_components_Blocks__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: props.blocks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

Index.getInitialProps = async function () {
  const configData = await __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../data/config.json */ "./data/config.json", 3));
  const blocksData = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../data/blocks.json */ "./data/blocks.json", 3));
  return _objectSpread({}, configData, {
    blocks: blocksData.default
  });
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kendallstrautman/Forestry/tina/tina-test-sites/open-author-demo/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map