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

/***/ "(app-pages-browser)/./src/app/_component/clientQuestionaires.tsx":
/*!****************************************************!*\
  !*** ./src/app/_component/clientQuestionaires.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _QuestionGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionGrid */ \"(app-pages-browser)/./src/app/_component/QuestionGrid.tsx\");\n/* harmony import */ var _hooks_useQuestionsFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useQuestionsFilter */ \"(app-pages-browser)/./hooks/useQuestionsFilter.ts\");\n/* harmony import */ var _data_QuestionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/QuestionList */ \"(app-pages-browser)/./data/QuestionList.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst FilterTabs = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_app__component_filter_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./filter */ \"(app-pages-browser)/./src/app/_component/filter.tsx\")));\n_c = FilterTabs;\nconst ClientQuestionComponent = ()=>{\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    const { currentCategory, handleTabChange, filteredQuestions, categories } = (0,_hooks_useQuestionsFilter__WEBPACK_IMPORTED_MODULE_3__.useQuestionsFilter)(_data_QuestionList__WEBPACK_IMPORTED_MODULE_4__.QUESTIONS);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading Tabs...\"\n                }, void 0, false, {\n                    fileName: \"/Users/juyeonoh/Desktop/mobi/toyproject/randomQuestionaire/src/app/_component/clientQuestionaires.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 27\n                }, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterTabs, {\n                    categories: categories,\n                    currentCategory: currentCategory,\n                    handleTabChange: handleTabChange\n                }, void 0, false, {\n                    fileName: \"/Users/juyeonoh/Desktop/mobi/toyproject/randomQuestionaire/src/app/_component/clientQuestionaires.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/juyeonoh/Desktop/mobi/toyproject/randomQuestionaire/src/app/_component/clientQuestionaires.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_QuestionGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                QuestionList: filteredQuestions\n            }, void 0, false, {\n                fileName: \"/Users/juyeonoh/Desktop/mobi/toyproject/randomQuestionaire/src/app/_component/clientQuestionaires.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ClientQuestionComponent, \"341LADJ3ms4Crcp2D9yFrpD9aDY=\", false, function() {\n    return [\n        _hooks_useQuestionsFilter__WEBPACK_IMPORTED_MODULE_3__.useQuestionsFilter\n    ];\n});\n_c1 = ClientQuestionComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClientQuestionComponent);\nvar _c, _c1;\n$RefreshReg$(_c, \"FilterTabs\");\n$RefreshReg$(_c1, \"ClientQuestionComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudC9jbGllbnRRdWVzdGlvbmFpcmVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFNkQ7QUFDbkI7QUFDNkI7QUFDaEI7QUFDdkQsTUFBTU8sMkJBQWFQLGlEQUFVLENBQUMsSUFBTSxvTkFBa0I7S0FBaERPO0FBRU4sTUFBTUUsMEJBQTBCOztJQUM5QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekNELGdEQUFTQSxDQUFDO1FBQ1JTLFlBQVk7SUFDZCxHQUFHLEVBQUU7SUFFTCxNQUFNLEVBQUVDLGVBQWUsRUFBRUMsZUFBZSxFQUFFQyxpQkFBaUIsRUFBRUMsVUFBVSxFQUFFLEdBQ3ZFViw2RUFBa0JBLENBQUNDLHlEQUFTQTtJQUU5QixxQkFDRTs7MEJBQ0UsOERBQUNMLDJDQUFRQTtnQkFBQ2Usd0JBQVUsOERBQUNDOzhCQUFJOzs7Ozs7MEJBQ3ZCLDRFQUFDVjtvQkFDQ1EsWUFBWUE7b0JBQ1pILGlCQUFpQkE7b0JBQ2pCQyxpQkFBaUJBOzs7Ozs7Ozs7OzswQkFHckIsOERBQUNULHFEQUFZQTtnQkFBQ2MsY0FBY0o7Ozs7Ozs7O0FBR2xDO0dBckJNTDs7UUFPRkoseUVBQWtCQTs7O01BUGhCSTtBQXNCTiwrREFBZUEsdUJBQXVCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvX2NvbXBvbmVudC9jbGllbnRRdWVzdGlvbmFpcmVzLnRzeD9hMmNmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgU3VzcGVuc2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBRdWVzdGlvbkdyaWQgZnJvbSBcIi4vUXVlc3Rpb25HcmlkXCI7XG5pbXBvcnQgeyB1c2VRdWVzdGlvbnNGaWx0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlUXVlc3Rpb25zRmlsdGVyXCI7XG5pbXBvcnQgeyBRVUVTVElPTlMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9RdWVzdGlvbkxpc3RcIjtcbmNvbnN0IEZpbHRlclRhYnMgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vZmlsdGVyXCIpKTtcblxuY29uc3QgQ2xpZW50UXVlc3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0NsaWVudCwgc2V0SXNDbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzQ2xpZW50KHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgeyBjdXJyZW50Q2F0ZWdvcnksIGhhbmRsZVRhYkNoYW5nZSwgZmlsdGVyZWRRdWVzdGlvbnMsIGNhdGVnb3JpZXMgfSA9XG4gICAgdXNlUXVlc3Rpb25zRmlsdGVyKFFVRVNUSU9OUyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcgVGFicy4uLjwvZGl2Pn0+XG4gICAgICAgIDxGaWx0ZXJUYWJzXG4gICAgICAgICAgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc31cbiAgICAgICAgICBjdXJyZW50Q2F0ZWdvcnk9e2N1cnJlbnRDYXRlZ29yeX1cbiAgICAgICAgICBoYW5kbGVUYWJDaGFuZ2U9e2hhbmRsZVRhYkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgICA8UXVlc3Rpb25HcmlkIFF1ZXN0aW9uTGlzdD17ZmlsdGVyZWRRdWVzdGlvbnN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ2xpZW50UXVlc3Rpb25Db21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdXNwZW5zZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUXVlc3Rpb25HcmlkIiwidXNlUXVlc3Rpb25zRmlsdGVyIiwiUVVFU1RJT05TIiwiRmlsdGVyVGFicyIsImxhenkiLCJDbGllbnRRdWVzdGlvbkNvbXBvbmVudCIsImlzQ2xpZW50Iiwic2V0SXNDbGllbnQiLCJjdXJyZW50Q2F0ZWdvcnkiLCJoYW5kbGVUYWJDaGFuZ2UiLCJmaWx0ZXJlZFF1ZXN0aW9ucyIsImNhdGVnb3JpZXMiLCJmYWxsYmFjayIsImRpdiIsIlF1ZXN0aW9uTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_component/clientQuestionaires.tsx\n"));

/***/ })

});