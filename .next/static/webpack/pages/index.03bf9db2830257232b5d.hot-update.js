webpackHotUpdate_N_E("pages/index",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_scrollchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollchor */ \"./node_modules/react-scrollchor/lib/scrollchor.js\");\n/* harmony import */ var react_scrollchor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollchor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/hook */ \"./utils/hook.js\");\nvar _jsxFileName = \"/Users/bozkurt/Desktop/deneme/WhoAmI/components/header.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Header(props) {\n  _s();\n\n  var size = Object(_utils_hook__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  var mobil = size.width <= 767;\n  var data = props.constants;\n\n  var closeMenu = function closeMenu() {\n    return props.setOpen(false);\n  };\n\n  return __jsx(\"header\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, mobil && !props.isOpen ? __jsx(\"div\", {\n    onClick: function onClick() {\n      return props.setOpen(true);\n    },\n    className: \"openMenu\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }) : mobil && __jsx(\"div\", {\n    onClick: function onClick() {\n      return props.setOpen(false);\n    },\n    className: \"closeMenu\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, console.log(data), __jsx(\"a\", {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, data.logo[0].text ? data.logo[0].text : \"Metin Akın\")), mobil && props.isOpen ? __jsx(\"nav\", {\n    className: \"mobil\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }\n  }, \"HOME\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 15\n    }\n  }, __jsx(react_scrollchor__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    to: \"#Specialties\",\n    beforeAnimate: closeMenu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, \"SPECIALTES\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 15\n    }\n  }, __jsx(react_scrollchor__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    to: \"#Testimonials\",\n    beforeAnimate: closeMenu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }, \"TESTIMONIALS\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 15\n    }\n  }, __jsx(react_scrollchor__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    to: \"#WhatIDid\",\n    beforeAnimate: closeMenu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, \"WHAT I DID\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 15\n    }\n  }, __jsx(react_scrollchor__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    to: \"#Articles\",\n    beforeAnimate: closeMenu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, \"BLOG\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }, __jsx(react_scrollchor__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    to: \"#Contact\",\n    beforeAnimate: closeMenu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, \"CONTACT ME\"))), __jsx(\"ul\", {\n    className: \"social\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    href: data ? data.facebook : _config__WEBPACK_IMPORTED_MODULE_2___default.a.facebook,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: \"/facebook.svg\",\n    alt: \"Facebook profile\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 19\n    }\n  }))), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    href: data ? data.twitter : _config__WEBPACK_IMPORTED_MODULE_2___default.a.twitter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: \"/twitter.svg\",\n    alt: \"Twitter profile\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 19\n    }\n  }))), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    href: data ? data.instagram : _config__WEBPACK_IMPORTED_MODULE_2___default.a.instagram,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: \"/instagram.svg\",\n    alt: \"Instagram profile\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 19\n    }\n  }))))) : __jsx(\"nav\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 17\n    }\n  }, \"HOME\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 15\n    }\n  }, __jsx(react_scrollchor__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    to: \"#Specialties\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }, \"SPECIALTES\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 15\n    }\n  }, __jsx(react_scrollchor__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    to: \"#Testimonials\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 17\n    }\n  }, \"TESTIMONIALS\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 15\n    }\n  }, __jsx(react_scrollchor__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    to: \"#WhatIDid\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 17\n    }\n  }, \"WHAT I DID\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 15\n    }\n  }, __jsx(react_scrollchor__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    to: \"#Articles\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 17\n    }\n  }, \"BLOG\")), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 15\n    }\n  }, __jsx(react_scrollchor__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    to: \"#Contact\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 17\n    }\n  }, \"CONTACT ME\"))), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, \".\"), __jsx(\"ul\", {\n    className: \"social\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 13\n    }\n  }, __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    href: data ? data.facebook : _config__WEBPACK_IMPORTED_MODULE_2___default.a.facebook,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: \"/facebook.svg\",\n    alt: \"Facebook profile\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 19\n    }\n  }))), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    href: data ? data.twitter : _config__WEBPACK_IMPORTED_MODULE_2___default.a.twitter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: \"/twitter.svg\",\n    alt: \"Twitter profile\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 19\n    }\n  }))), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    href: data ? data.instagram : _config__WEBPACK_IMPORTED_MODULE_2___default.a.instagram,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: \"/instagram.svg\",\n    alt: \"Instagram profile\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 19\n    }\n  })))))));\n}\n\n_s(Header, \"/dTDjnwlNGsRzu12Dr5t7HJe8sA=\", false, function () {\n  return [_utils_hook__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanM/NjQ3OCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwibW9iaWwiLCJ3aWR0aCIsImRhdGEiLCJjb25zdGFudHMiLCJjbG9zZU1lbnUiLCJzZXRPcGVuIiwiaXNPcGVuIiwiY29uc29sZSIsImxvZyIsImxvZ28iLCJ0ZXh0IiwiZmFjZWJvb2siLCJjb25maWciLCJ0d2l0dGVyIiwiaW5zdGFncmFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUNwQyxNQUFNQyxJQUFJLEdBQUdDLDJEQUFhLEVBQTFCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHRixJQUFJLENBQUNHLEtBQUwsSUFBYyxHQUE1QjtBQUVBLE1BQUlDLElBQUksR0FBR0wsS0FBSyxDQUFDTSxTQUFqQjs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFdBQU1QLEtBQUssQ0FBQ1EsT0FBTixDQUFjLEtBQWQsQ0FBTjtBQUFBLEdBQWxCOztBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxLQUFLLElBQUksQ0FBQ0gsS0FBSyxDQUFDUyxNQUFoQixHQUNDO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBTVQsS0FBSyxDQUFDUSxPQUFOLENBQWMsSUFBZCxDQUFOO0FBQUEsS0FBZDtBQUF5QyxhQUFTLEVBQUMsVUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEdBR0NMLEtBQUssSUFDSDtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU1ILEtBQUssQ0FBQ1EsT0FBTixDQUFjLEtBQWQs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QUFDWSxTQUFSLEdBQW9CRiw4Q0FBTSxDQUFDRSxTQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsT0FBRyxFQUFDLG1CQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQVhGLENBdEJGLENBbEVKLENBREYsQ0FERjtBQWdIRDs7R0F4SHVCbEIsTTtVQUNURyxtRDs7O0tBRFNILE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTY3JvbGxjaG9yIGZyb20gXCJyZWFjdC1zY3JvbGxjaG9yXCI7XG5cbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcIi4uL3V0aWxzL2hvb2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XG4gIGNvbnN0IG1vYmlsID0gc2l6ZS53aWR0aCA8PSA3Njc7XG5cbiAgdmFyIGRhdGEgPSBwcm9wcy5jb25zdGFudHM7XG5cbiAgY29uc3QgY2xvc2VNZW51ID0gKCkgPT4gcHJvcHMuc2V0T3BlbihmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAge21vYmlsICYmICFwcm9wcy5pc09wZW4gPyAoXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRPcGVuKHRydWUpfSBjbGFzc05hbWU9XCJvcGVuTWVudVwiPjwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIG1vYmlsICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuc2V0T3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlTWVudVwiXG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgICA8aDE+XG4gICAgICAgICAge2NvbnNvbGUubG9nKGRhdGEpfVxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+e2RhdGEubG9nb1swXS50ZXh0ID8gZGF0YS5sb2dvWzBdLnRleHQgOiBcIk1ldGluIEFrxLFuXCJ9PC9hPlxuICAgICAgICA8L2gxPlxuICAgICAgICB7bW9iaWwgJiYgcHJvcHMuaXNPcGVuID8gKFxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibW9iaWxcIj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+SE9NRTwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxTY3JvbGxjaG9yIHRvPVwiI1NwZWNpYWx0aWVzXCIgYmVmb3JlQW5pbWF0ZT17Y2xvc2VNZW51fT5cbiAgICAgICAgICAgICAgICAgIFNQRUNJQUxURVNcbiAgICAgICAgICAgICAgICA8L1Njcm9sbGNob3I+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8U2Nyb2xsY2hvciB0bz1cIiNUZXN0aW1vbmlhbHNcIiBiZWZvcmVBbmltYXRlPXtjbG9zZU1lbnV9PlxuICAgICAgICAgICAgICAgICAgVEVTVElNT05JQUxTXG4gICAgICAgICAgICAgICAgPC9TY3JvbGxjaG9yPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPFNjcm9sbGNob3IgdG89XCIjV2hhdElEaWRcIiBiZWZvcmVBbmltYXRlPXtjbG9zZU1lbnV9PlxuICAgICAgICAgICAgICAgICAgV0hBVCBJIERJRFxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsY2hvcj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxTY3JvbGxjaG9yIHRvPVwiI0FydGljbGVzXCIgYmVmb3JlQW5pbWF0ZT17Y2xvc2VNZW51fT5cbiAgICAgICAgICAgICAgICAgIEJMT0dcbiAgICAgICAgICAgICAgICA8L1Njcm9sbGNob3I+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8U2Nyb2xsY2hvciB0bz1cIiNDb250YWN0XCIgYmVmb3JlQW5pbWF0ZT17Y2xvc2VNZW51fT5cbiAgICAgICAgICAgICAgICAgIENPTlRBQ1QgTUVcbiAgICAgICAgICAgICAgICA8L1Njcm9sbGNob3I+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNvY2lhbFwiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17ZGF0YSA/IGRhdGEuZmFjZWJvb2sgOiBjb25maWcuZmFjZWJvb2t9PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZmFjZWJvb2suc3ZnXCIgYWx0PVwiRmFjZWJvb2sgcHJvZmlsZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17ZGF0YSA/IGRhdGEudHdpdHRlciA6IGNvbmZpZy50d2l0dGVyfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3R3aXR0ZXIuc3ZnXCIgYWx0PVwiVHdpdHRlciBwcm9maWxlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtkYXRhID8gZGF0YS5pbnN0YWdyYW0gOiBjb25maWcuaW5zdGFncmFtfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2luc3RhZ3JhbS5zdmdcIiBhbHQ9XCJJbnN0YWdyYW0gcHJvZmlsZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5IT01FPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPFNjcm9sbGNob3IgdG89XCIjU3BlY2lhbHRpZXNcIj5TUEVDSUFMVEVTPC9TY3JvbGxjaG9yPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPFNjcm9sbGNob3IgdG89XCIjVGVzdGltb25pYWxzXCI+VEVTVElNT05JQUxTPC9TY3JvbGxjaG9yPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPFNjcm9sbGNob3IgdG89XCIjV2hhdElEaWRcIj5XSEFUIEkgRElEPC9TY3JvbGxjaG9yPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPFNjcm9sbGNob3IgdG89XCIjQXJ0aWNsZXNcIj5CTE9HPC9TY3JvbGxjaG9yPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPFNjcm9sbGNob3IgdG89XCIjQ29udGFjdFwiPkNPTlRBQ1QgTUU8L1Njcm9sbGNob3I+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHNwYW4+Ljwvc3Bhbj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb2NpYWxcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2RhdGEgPyBkYXRhLmZhY2Vib29rIDogY29uZmlnLmZhY2Vib29rfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ZhY2Vib29rLnN2Z1wiIGFsdD1cIkZhY2Vib29rIHByb2ZpbGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2RhdGEgPyBkYXRhLnR3aXR0ZXIgOiBjb25maWcudHdpdHRlcn0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi90d2l0dGVyLnN2Z1wiIGFsdD1cIlR3aXR0ZXIgcHJvZmlsZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17ZGF0YSA/IGRhdGEuaW5zdGFncmFtIDogY29uZmlnLmluc3RhZ3JhbX0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbnN0YWdyYW0uc3ZnXCIgYWx0PVwiSW5zdGFncmFtIHByb2ZpbGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ })

})