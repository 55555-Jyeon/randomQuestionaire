"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./utils/filterQuestions.utils.ts":
/*!****************************************!*\
  !*** ./utils/filterQuestions.utils.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useQuestionsFilter: function() { return /* binding */ useQuestionsFilter; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * 질문 필터링을 위한 커스텀 훅\n * @param randomQuestions - 랜덤하게 섞인 질문 목록\n * @param QUESTIONS - 모든 카테고리의 질문 목록\n * @returns - 현재 카테고리, 카테고리 변경 핸들러, 필터링된 질문 목록, 카테고리 목록\n */ const useQuestionsFilter = (randomQuestions)=>{\n    const [currentCategory, setCurrentCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"all\");\n    /**\n   * 탭 클릭 핸들러\n   * @param event - 클릭 이벤트\n   * @param newValue - 새로운 카테고리 값\n   */ const handleTabChange = (event, newValue)=>{\n        setCurrentCategory(newValue);\n    };\n    /**\n   * 현재 카테고리에 따라 필터링된 질문 목록을 반환합니다.\n   * @returns - 필터링된 질문 목록\n   */ const filteredQuestions = currentCategory === \"all\" ? randomQuestions : randomQuestions.filter((question)=>question.category === currentCategory);\n    const categories = [\n        \"all\",\n        ...Object.keys(randomQuestions)\n    ];\n    return {\n        currentCategory,\n        handleTabChange,\n        filteredQuestions,\n        categories\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL2ZpbHRlclF1ZXN0aW9ucy51dGlscy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFJakM7Ozs7O0NBS0MsR0FDTSxNQUFNQyxxQkFBcUIsQ0FBQ0M7SUFDakMsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHSiwrQ0FBUUEsQ0FBUztJQUUvRDs7OztHQUlDLEdBQ0QsTUFBTUssa0JBQWtCLENBQUNDLE9BQTZCQztRQUNwREgsbUJBQW1CRztJQUNyQjtJQUVBOzs7R0FHQyxHQUNELE1BQU1DLG9CQUNKTCxvQkFBb0IsUUFDaEJELGtCQUNBQSxnQkFBZ0JPLE1BQU0sQ0FDcEIsQ0FBQ0MsV0FBYUEsU0FBU0MsUUFBUSxLQUFLUjtJQUc1QyxNQUFNUyxhQUFhO1FBQUM7V0FBVUMsT0FBT0MsSUFBSSxDQUFDWjtLQUFpQjtJQUUzRCxPQUFPO1FBQ0xDO1FBQ0FFO1FBQ0FHO1FBQ0FJO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2ZpbHRlclF1ZXN0aW9ucy51dGlscy50cz9hMmY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFF1ZXN0aW9uSXRlbSB9IGZyb20gXCIuLi90eXBlcy90eXBlXCI7XG5cbi8qKlxuICog7KeI66y4IO2VhO2EsOungeydhCDsnITtlZwg7Luk7Iqk7YWAIO2bhVxuICogQHBhcmFtIHJhbmRvbVF1ZXN0aW9ucyAtIOuenOuNpO2VmOqyjCDshJ7snbgg7KeI66y4IOuqqeuhnVxuICogQHBhcmFtIFFVRVNUSU9OUyAtIOuqqOuToCDsubTthYzqs6DrpqzsnZgg7KeI66y4IOuqqeuhnVxuICogQHJldHVybnMgLSDtmITsnqwg7Lm07YWM6rOg66asLCDsubTthYzqs6Drpqwg67OA6rK9IO2VuOuTpOufrCwg7ZWE7YSw66eB65CcIOyniOusuCDrqqnroZ0sIOy5tO2FjOqzoOumrCDrqqnroZ1cbiAqL1xuZXhwb3J0IGNvbnN0IHVzZVF1ZXN0aW9uc0ZpbHRlciA9IChyYW5kb21RdWVzdGlvbnM6IFF1ZXN0aW9uSXRlbVtdKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50Q2F0ZWdvcnksIHNldEN1cnJlbnRDYXRlZ29yeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiYWxsXCIpO1xuXG4gIC8qKlxuICAgKiDtg60g7YG066atIO2VuOuTpOufrFxuICAgKiBAcGFyYW0gZXZlbnQgLSDtgbTrpq0g7J2067Kk7Yq4XG4gICAqIEBwYXJhbSBuZXdWYWx1ZSAtIOyDiOuhnOyatCDsubTthYzqs6Drpqwg6rCSXG4gICAqL1xuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50LCBuZXdWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0Q3VycmVudENhdGVnb3J5KG5ld1ZhbHVlKTtcbiAgfTtcblxuICAvKipcbiAgICog7ZiE7J6sIOy5tO2FjOqzoOumrOyXkCDrlLDrnbwg7ZWE7YSw66eB65CcIOyniOusuCDrqqnroZ3snYQg67CY7ZmY7ZWp64uI64ukLlxuICAgKiBAcmV0dXJucyAtIO2VhO2EsOungeuQnCDsp4jrrLgg66qp66GdXG4gICAqL1xuICBjb25zdCBmaWx0ZXJlZFF1ZXN0aW9uczogUXVlc3Rpb25JdGVtW10gPVxuICAgIGN1cnJlbnRDYXRlZ29yeSA9PT0gXCJhbGxcIlxuICAgICAgPyByYW5kb21RdWVzdGlvbnNcbiAgICAgIDogcmFuZG9tUXVlc3Rpb25zLmZpbHRlcihcbiAgICAgICAgICAocXVlc3Rpb24pID0+IHF1ZXN0aW9uLmNhdGVnb3J5ID09PSBjdXJyZW50Q2F0ZWdvcnlcbiAgICAgICAgKTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gW1wiYWxsXCIsIC4uLk9iamVjdC5rZXlzKHJhbmRvbVF1ZXN0aW9ucyldO1xuXG4gIHJldHVybiB7XG4gICAgY3VycmVudENhdGVnb3J5LFxuICAgIGhhbmRsZVRhYkNoYW5nZSxcbiAgICBmaWx0ZXJlZFF1ZXN0aW9ucyxcbiAgICBjYXRlZ29yaWVzLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVF1ZXN0aW9uc0ZpbHRlciIsInJhbmRvbVF1ZXN0aW9ucyIsImN1cnJlbnRDYXRlZ29yeSIsInNldEN1cnJlbnRDYXRlZ29yeSIsImhhbmRsZVRhYkNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJmaWx0ZXJlZFF1ZXN0aW9ucyIsImZpbHRlciIsInF1ZXN0aW9uIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiT2JqZWN0Iiwia2V5cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/filterQuestions.utils.ts\n"));

/***/ })

});