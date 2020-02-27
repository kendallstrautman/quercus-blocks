webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_blocks_bodyCopyBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/blocks/bodyCopyBlock */ "./components/blocks/bodyCopyBlock.js");
/* harmony import */ var _components_blocks_headingBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/blocks/headingBlocks */ "./components/blocks/headingBlocks.js");
/* harmony import */ var _components_blocks_imageBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/blocks/imageBlock */ "./components/blocks/imageBlock.js");
var _jsxFileName = "/Users/kendallstrautman/Forestry/tina/tina-test-sites/open-author-demo/components/Blocks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Blocks(props) {
  var data = props.data.index_blocks;
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
var INDEX_PAGE_BLOCKS = {
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

/***/ })

})
//# sourceMappingURL=index.js.2d3b0cafdf3d6c04953e.hot-update.js.map