webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

var _jsxFileName = "/home/connor/Development/code/udemy/react/nextjs/onwards-to-a-bigger-project-starting-project/pages/index.js";



var DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'A First Meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
  address: 'Some address 1, 12345 Some City',
  description: 'This is a first meetup!'
}, {
  id: 'm2',
  title: 'A Second Meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
  address: 'Some address 2, 23456 Some Other City',
  description: 'This is a second meetup!'
}];

function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
} // export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//  Fetch Data from an API here!
// return {
//     props: {
//         meetups: API Data (aka DUMMY_MEETUPS)
//     }
// }
// }


_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDbEI7QUFDSUMsSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLGdCQUZYO0FBR0lDLE9BQUssRUFBRSx3SEFIWDtBQUlJQyxTQUFPLEVBQUUsaUNBSmI7QUFLSUMsYUFBVyxFQUFFO0FBTGpCLENBRGtCLEVBUWxCO0FBQ0lKLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBRSxpQkFGWDtBQUdJQyxPQUFLLEVBQUUsd0hBSFg7QUFJSUMsU0FBTyxFQUFFLHVDQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQVJrQixDQUF0Qjs7QUFpQkEsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFFckIsc0JBQ0kscUVBQUMsOENBQUQ7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0o7OztLQW5CU0YsUTs7QUE0Q01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJhMDZlNjMwYzlmNzAyYTQwNmNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcblxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAnbTEnLFxuICAgICAgICB0aXRsZTogJ0EgRmlyc3QgTWVldHVwJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnJyxcbiAgICAgICAgYWRkcmVzczogJ1NvbWUgYWRkcmVzcyAxLCAxMjM0NSBTb21lIENpdHknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBmaXJzdCBtZWV0dXAhJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ20yJyxcbiAgICAgICAgdGl0bGU6ICdBIFNlY29uZCBNZWV0dXAnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxuICAgICAgICBhZGRyZXNzOiAnU29tZSBhZGRyZXNzIDIsIDIzNDU2IFNvbWUgT3RoZXIgQ2l0eScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIHNlY29uZCBtZWV0dXAhJ1xuICAgIH1cbl1cblxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxIZWFkPjwvSGVhZD5cbiAgICAgICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbi8vICAgICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcbi8vICAgICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcbi8vICBGZXRjaCBEYXRhIGZyb20gYW4gQVBJIGhlcmUhXG4gICAgLy8gcmV0dXJuIHtcbiAgICAvLyAgICAgcHJvcHM6IHtcbiAgICAvLyAgICAgICAgIG1lZXR1cHM6IEFQSSBEYXRhIChha2EgRFVNTVlfTUVFVFVQUylcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbi8vIH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIC8vICogZmV0Y2ggZGF0YSBmcm9tIEFQSSBoZXJlXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9jb25ub3Jrb3Jtb3M5NzpVRXVVTDNxazE0eEx4dnphQG1lZXR1cHMuNzlreTFjZS5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgICBcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcblxuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xuXG4gICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgbWVldHVwczogbWVldHVwcy5tYXAobWVldHVwID0+ICh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxuICAgICAgICAgICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==