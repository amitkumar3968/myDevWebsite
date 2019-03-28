webpackHotUpdate("static/development/pages/index.js",{

/***/ "./comps/WorkExperience.js":
/*!*********************************!*\
  !*** ./comps/WorkExperience.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var evergreen_ui_commonjs_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! evergreen-ui/commonjs/typography */ "./node_modules/evergreen-ui/commonjs/typography/index.js");
/* harmony import */ var evergreen_ui_commonjs_typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui_commonjs_typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");






var _jsxFileName = "/Users/prashanttyagi/Documents/hello-next/comps/WorkExperience.js";




var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js"); // import { List } from 'semantic-ui-react'




var WorkExperience =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WorkExperience, _Component);

  function WorkExperience(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WorkExperience);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(WorkExperience).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(WorkExperience, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      react_ga__WEBPACK_IMPORTED_MODULE_9__["default"].pageview('/Skills');
    }
  }, {
    key: "gettimeDuration",
    value: function gettimeDuration(startingdate) {
      // assuming startingdate is of format -- dd/MM/YYYY
      // alert(startingdate);
      // console.log(typeof (startingdate));
      var parts = startingdate.split('/'); // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
      // January - 0, February - 1, etc.

      var mydate = new Date(parts[2], parts[1] - 1, parts[0]); // console.log(mydate.getTime());

      var currentDate = new Date(); // console.log(currentDate.getTime());
      // console.log(moment.duration(currentDate - mydate).years()); // This should returns 5
      // console.log(moment.duration(currentDate - mydate).months());

      var totalExp = moment.duration(currentDate - mydate).years().toString() + '.' + moment.duration(currentDate - mydate).months().toString() + ' Yrs';
      return totalExp;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], {
        width: "100vw",
        height: "100vh",
        paddingTop: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], {
        flex: 1,
        alignItems: "center",
        display: "flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Label"], {
        color: "#789ff3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Total Work Experience - ", this.gettimeDuration(this.props.data.WorkExperience.firstJobStartingdate), " ")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Summary ->  iOS - 6+ yrs , ReactNative - 1+ yrs, ReactJS - 1+ yrs ")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], {
        margin: 10,
        alignself: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, " \uD83D\uDCBC Current Company"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, " ", this.props.data.WorkExperience.currentCompanydetails.companyname))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui_commonjs_typography__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Position- ", this.props.data.WorkExperience.currentCompanydetails.Position), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui_commonjs_typography__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Time Served - ", this.props.data.WorkExperience.currentCompanydetails.JoiningYear), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui_commonjs_typography__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Responsibilites-")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], {
        marginLeft: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(this.props.data.WorkExperience.currentCompanydetails.rolesandResponsibilty) && this.props.data.WorkExperience.currentCompanydetails.rolesandResponsibilty.map(function (value, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui_commonjs_typography__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, value);
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], {
        margin: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, " \uD83D\uDCBC Last Company "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, this.props.data.WorkExperience.secondCompanydetails.companyname, " "))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui_commonjs_typography__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Position- ", this.props.data.WorkExperience.secondCompanydetails.Position), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui_commonjs_typography__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Time Served- ", this.props.data.WorkExperience.secondCompanydetails.JoiningYear), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui_commonjs_typography__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Responsibilites-")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], {
        marginLeft: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(this.props.data.WorkExperience.secondCompanydetails.rolesandResponsibilty) && this.props.data.WorkExperience.secondCompanydetails.rolesandResponsibilty.map(function (value, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui_commonjs_typography__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, value);
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], {
        margin: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, " \uD83D\uDCBC First Company"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "  ", this.props.data.WorkExperience.firstCompanydetails.companyname, " "))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui_commonjs_typography__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Position- ", this.props.data.WorkExperience.firstCompanydetails.Position), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui_commonjs_typography__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Time Served- ", this.props.data.WorkExperience.firstCompanydetails.JoiningYear), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui_commonjs_typography__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Responsibilites-")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__["Pane"], {
        marginLeft: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(this.props.data.WorkExperience.firstCompanydetails.rolesandResponsibilty) && this.props.data.WorkExperience.firstCompanydetails.rolesandResponsibilty.map(function (value, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(evergreen_ui_commonjs_typography__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, value);
      })))));
    }
  }]);

  return WorkExperience;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WorkExperience);

/***/ })

})
//# sourceMappingURL=index.js.79fb6255c2db97b66872.hot-update.js.map