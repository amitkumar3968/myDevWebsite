webpackHotUpdate("static/development/pages/index.js",{

/***/ "./comps/Home.js":
/*!***********************!*\
  !*** ./comps/Home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _comps_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comps/Header */ "./comps/Header.js");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-plx */ "./node_modules/react-plx/lib/index.js");
/* harmony import */ var react_plx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_plx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");





var _jsxFileName = "/Users/prashanttyagi/Documents/hello-next/comps/Home.js";







var parallaxData = [{
  start: 0,
  end: 700,
  properties: [{
    startValue: 1,
    endValue: 0,
    property: 'opacity'
  }]
}];

var Home =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  function Home(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    // alert(props);
    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // super.componentDidMount();
      // alert(userdata.Home.title);
      react_ga__WEBPACK_IMPORTED_MODULE_11__["default"].initialize('UA-136327063-1');
      react_ga__WEBPACK_IMPORTED_MODULE_11__["default"].pageview('/Home');
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__["Pane"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__["Pane"], {
        display: "flex",
        padding: 5,
        background: "white",
        borderRadius: 3,
        flex: 1,
        justifyContent: "flex-end",
        elevation: 4,
        position: "fixed",
        width: "98%",
        zIndex: 9999,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__["Pane"], {
        flex: 1,
        alignItems: "center",
        display: "flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__["Text"], {
        fontSize: 18,
        marginLeft: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, this.props.data.Home.UserName)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__["Pane"], {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        opacity: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#Home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        appearance: "minimal",
        margin: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "\uD83C\uDFE0Home")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#Skills",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        appearance: "minimal",
        margin: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Skills")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#WorkExperience",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        appearance: "minimal",
        margin: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "WorkExperience")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#Services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        appearance: "minimal",
        margin: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Services")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#Contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        appearance: "minimal",
        margin: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Contact")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__["Pane"], {
        display: "flex",
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__["Pane"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__["Pane"], {
        display: "flex",
        justifyContent: "center",
        flex: 1,
        padding: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__["Text"], {
        fontSize: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, this.props.data.Home.title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__["Pane"], {
        display: "flex",
        justifyContent: "center",
        flex: 1,
        padding: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        fontSize: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, this.props.data.Home.Subtitle)))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]); // function onClickHandler (href) {
//   return e => {
//     alert(href);
//      e.preventDefault()
//      Router.push(href)
//   }
// }
// const Link = ({ children, href }) => (
//   <a href={href} onClick={onClickHandler(href)}>
//     {children}
//     <style jsx>{`
//       a {
//         margin-right: 10px;
//       }
//     `}</style>
//   </a>
// )


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.2ab3a9bb2f7e70c17a14.hot-update.js.map