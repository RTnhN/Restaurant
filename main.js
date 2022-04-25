/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* basic */\\nbody{\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n*{\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n#content{\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: center;\\n  height:100vh;\\n  padding-left: calc(100vw - 100%);\\n\\n}\\n\\n/* header */\\n\\nheader{\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center;\\n  width: 100vw;\\n  background-color: #296e01;\\n  border-bottom: 2px solid black;\\n}\\n\\n#headerContainer{\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n  width: min(500px, 100vw);\\n  padding: 1em;\\n}\\n\\n#logo{\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n  color: white;\\n  font-size: 2em;\\n}\\n\\nnav ul{\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n  gap: 1em;\\n}\\n\\nnav a{\\n  text-decoration: none;\\n  color: white;\\n}\\n\\n.selected{\\n  border-bottom: 1px solid white;\\n}\\n\\n/* footer */\\n\\nfooter{\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center;\\n  width: 100vw;\\n  height: 5vh;\\n  background-color: #296e01;\\n  border-top: 2px solid black;\\n}\\n\\nfooter p{\\n  color: white;\\n  font-size: 0.8em;\\n}\\n\\n/* all content */\\n\\n#main{\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: flex-start;\\n  flex-grow:1;\\n}\\n\\nh1{\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n  font-size: 2em;\\n  margin-top: 1em;\\n}\\n\\nh2{\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n  font-size: 1.5em;\\n  margin-top: 1em;\\n  margin-bottom: 1em;\\n}\\n\\nh3{\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n  font-size: 1.2em;\\n  margin-top: 1em;\\n  margin-bottom: .2em;\\n}\\n\\n/* home */\\n\\n#description{\\n  width: 50vw;\\n  text-align: center;\\n  margin-top: 1em;\\n}\\n\\n#hours{\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n} \\n\\n/* menu */\\n\\n.foodContainer{\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  width: 50vw;\\n  border: 1px solid black;\\n  margin: .5em;\\n  padding: 3em;\\n  box-shadow: 2px 2px 10px black;\\n}\\n\\n.foodContainer img{\\n  width: 60%;\\n  margin-bottom: 1em;\\n}\\n\\n.menuSubtitle{\\n  font-size: 3em;\\n}\\n\\nh2.menuSubtitle:nth-of-type(n+2){\\n  margin-top: 2em;\\n}\\n\\n/* contact */\\n\\n#contactDescription{\\n  width: 50vw;\\n  text-align: center;\\n  margin-top: 1em;\\n}\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact/contact.js":
/*!********************************!*\
  !*** ./src/contact/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contactdata_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactdata.yaml */ \"./src/contact/contactdata.yaml\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page */ \"./src/page.js\");\n\n\n\nclass Contact extends _page__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(mainElement){\n    super(mainElement, _contactdata_yaml__WEBPACK_IMPORTED_MODULE_0__)\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n\n//# sourceURL=webpack://restaurant/./src/contact/contact.js?");

/***/ }),

/***/ "./src/footer/footer.js":
/*!******************************!*\
  !*** ./src/footer/footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _footerdata_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footerdata.yaml */ \"./src/footer/footerdata.yaml\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page */ \"./src/page.js\");\n\n\n\nclass Footer extends _page__WEBPACK_IMPORTED_MODULE_1__[\"default\"]{\n  constructor(mainElement){\n    super(mainElement, _footerdata_yaml__WEBPACK_IMPORTED_MODULE_0__)\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://restaurant/./src/footer/footer.js?");

/***/ }),

/***/ "./src/header/header.js":
/*!******************************!*\
  !*** ./src/header/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Header {\n  #headerElement;\n  links;\n  constructor(contentElement){\n    this.#headerElement = contentElement;\n    this.links = [\"Home\", \"Menu\", \"Contact\"];\n    \n  }\n  make(){\n    const headerContainer = document.createElement(\"div\");\n    headerContainer.id = \"headerContainer\";\n    this.#headerElement.appendChild(headerContainer);\n    headerContainer.appendChild(document.createElement(\"p\"));\n    headerContainer.lastChild.id = \"logo\";\n    headerContainer.lastChild.innerHTML = \"Byte&nbsp;Café\";\n    headerContainer.appendChild(document.createElement(\"nav\"));\n    headerContainer.lastChild.appendChild(document.createElement(\"ul\"));\n    const navList = headerContainer.lastChild.lastChild;\n    for (const link of this.links){\n      navList.appendChild(document.createElement(\"li\"));\n      navList.lastChild.id = link;\n      navList.lastChild.appendChild(document.createElement(\"a\"));\n      navList.lastChild.lastChild.textContent = link;\n      navList.lastChild.lastChild.id = `${link}Link`;\n    }\n  }\n  clear(){\n    while (this.#headerElement.firstChild) {\n      this.#headerElement.removeChild(this.#headerElement.firstChild);\n    }\n  }\n  styleActiveTabButton(tabName){\n    for (const link of this.links){\n      document.getElementById(`${link}Link`).classList.remove(\"selected\");\n    }\n    document.getElementById(tabName).classList.add(\"selected\");\n  }\n  returnButtonElements(){\n    return this.#headerElement.querySelectorAll(\"a\");\n  }\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://restaurant/./src/header/header.js?");

/***/ }),

/***/ "./src/home/home.js":
/*!**************************!*\
  !*** ./src/home/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homedata_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homedata.yaml */ \"./src/home/homedata.yaml\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page */ \"./src/page.js\");\n\n\n\nclass Home extends _page__WEBPACK_IMPORTED_MODULE_1__[\"default\"]{\n  constructor(mainElement){\n    super(mainElement, _homedata_yaml__WEBPACK_IMPORTED_MODULE_0__)\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://restaurant/./src/home/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header */ \"./src/header/header.js\");\n/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home */ \"./src/home/home.js\");\n/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu */ \"./src/menu/menu.js\");\n/* harmony import */ var _contact_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact */ \"./src/contact/contact.js\");\n/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer */ \"./src/footer/footer.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\nclass Main {\n  homePage;\n  menuPage;\n  constructor(){\n    //Hook element def\n    const contentElement = document.getElementById(\"content\");\n    const headerElement = document.createElement(\"header\");\n    const mainElement = document.createElement(\"div\");\n    const footerElement = document.createElement(\"footer\");\n    //Add id\n    headerElement.id = \"header\";\n    mainElement.id = \"main\";\n    footerElement.id = \"footer\";\n\n    //Rig to DOM\n    contentElement.appendChild(headerElement);\n    contentElement.appendChild(mainElement);\n    contentElement.appendChild(footerElement);\n\n    this.header = new _header_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"](headerElement);\n    this.homePage = new _home_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"](mainElement);\n    this.menuPage = new _menu_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"](mainElement);\n    this.contactPage = new _contact_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"](mainElement);\n    this.footer = new _footer_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"](footerElement);\n    this.header.make()\n    this.header.returnButtonElements().forEach(elem => elem.addEventListener(\"click\", this.switchTab.bind(this)))\n    this.homePage.make()\n    this.footer.make()\n  }\n  clear(){\n    this.homePage.clear()\n    this.menuPage.clear()\n    this.contactPage.clear()\n  }\n  switchTab(e) {\n    switch (e.target.id) {\n      case \"HomeLink\":\n        this.clear();\n        this.homePage.make();\n      break;\n  \n      case \"MenuLink\":\n        this.clear();\n        this.menuPage.make();\n      break;\n      \n      case \"ContactLink\":\n        this.clear();\n        this.contactPage.make()\n      break;\n\n    }\n    this.header.styleActiveTabButton(e.target.id);\n  }\n}\n\nconst mainObject = new Main();\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menudata_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menudata.yaml */ \"./src/menu/menudata.yaml\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page */ \"./src/page.js\");\n/* harmony import */ var _assets_EggToast_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/EggToast.jpg */ \"./src/menu/assets/EggToast.jpg\");\n/* harmony import */ var _assets_FrenchToast_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/FrenchToast.jpg */ \"./src/menu/assets/FrenchToast.jpg\");\n/* harmony import */ var _assets_Pancakes_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/Pancakes.jpg */ \"./src/menu/assets/Pancakes.jpg\");\n/* harmony import */ var _assets_Coffee_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/Coffee.jpg */ \"./src/menu/assets/Coffee.jpg\");\n/* harmony import */ var _assets_Latte_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/Latte.jpg */ \"./src/menu/assets/Latte.jpg\");\n/* harmony import */ var _assets_IceCoffee_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/IceCoffee.jpg */ \"./src/menu/assets/IceCoffee.jpg\");\n\n\n\n\n\n\n\n\nconst imageDict = {eggToast: _assets_EggToast_jpg__WEBPACK_IMPORTED_MODULE_2__, frenchToast: _assets_FrenchToast_jpg__WEBPACK_IMPORTED_MODULE_3__, pancakes: _assets_Pancakes_jpg__WEBPACK_IMPORTED_MODULE_4__, coffee: _assets_Coffee_jpg__WEBPACK_IMPORTED_MODULE_5__, latte: _assets_Latte_jpg__WEBPACK_IMPORTED_MODULE_6__, iceCoffee: _assets_IceCoffee_jpg__WEBPACK_IMPORTED_MODULE_7__}\n\nclass Menu extends _page__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(mainElement){\n    super(mainElement, _menudata_yaml__WEBPACK_IMPORTED_MODULE_0__, imageDict)\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://restaurant/./src/menu/menu.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Page{\n  #mainElement;\n  #data;\n  #targetElement;\n  #parentElement;\n  #imageSrcDict\n\n  constructor(mainElement, data, imageSrcDict){\n    this.#mainElement = mainElement;\n    this.#targetElement = mainElement;\n    this.#parentElement = mainElement.parentElement;\n    this.#data = data;\n    this.#imageSrcDict = imageSrcDict;\n  }\n\n  make(){\n    this.#data.forEach(this.renderTag.bind(this))\n  }\n  clear(){\n    while (this.#mainElement.firstChild) {\n      this.#mainElement.removeChild(this.#mainElement.firstChild);\n    }\n  }\n  renderTag(elem){\n    this.#targetElement.appendChild(document.createElement(elem.tag));\n    if (elem.text !== null && elem.text !== undefined){\n      this.#targetElement.lastChild.textContent = elem.text;\n    }\n    if (elem.id !== null && elem.id !== undefined){\n      this.#targetElement.lastChild.id = elem.id;\n    }\n    if (elem.className !== null && elem.className !== undefined){\n      this.#targetElement.lastChild.className = elem.className;\n    }\n    if (elem.src !== null && elem.src !== undefined){\n      this.#targetElement.lastChild.setAttribute(\"src\", this.#imageSrcDict[elem.src]);\n    }\n    if (\"content\" in elem){\n      this.#parentElement = this.#targetElement;\n      this.#targetElement = this.#targetElement.lastChild;\n      elem.content.forEach(this.renderTag.bind(this))\n      this.#targetElement = this.#parentElement;\n    }\n  }\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n\n//# sourceURL=webpack://restaurant/./src/page.js?");

/***/ }),

/***/ "./src/menu/assets/Coffee.jpg":
/*!************************************!*\
  !*** ./src/menu/assets/Coffee.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a81c75f18b6976266cf6.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu/assets/Coffee.jpg?");

/***/ }),

/***/ "./src/menu/assets/EggToast.jpg":
/*!**************************************!*\
  !*** ./src/menu/assets/EggToast.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd33712615e80b4f05a0.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu/assets/EggToast.jpg?");

/***/ }),

/***/ "./src/menu/assets/FrenchToast.jpg":
/*!*****************************************!*\
  !*** ./src/menu/assets/FrenchToast.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7bf32910deae4b759fb1.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu/assets/FrenchToast.jpg?");

/***/ }),

/***/ "./src/menu/assets/IceCoffee.jpg":
/*!***************************************!*\
  !*** ./src/menu/assets/IceCoffee.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ce9118e92c2c0a40e5b2.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu/assets/IceCoffee.jpg?");

/***/ }),

/***/ "./src/menu/assets/Latte.jpg":
/*!***********************************!*\
  !*** ./src/menu/assets/Latte.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"733fdd311dae135088a1.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu/assets/Latte.jpg?");

/***/ }),

/***/ "./src/menu/assets/Pancakes.jpg":
/*!**************************************!*\
  !*** ./src/menu/assets/Pancakes.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dbe5c7f26f7727f3c0f0.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu/assets/Pancakes.jpg?");

/***/ }),

/***/ "./src/contact/contactdata.yaml":
/*!**************************************!*\
  !*** ./src/contact/contactdata.yaml ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"tag\":\"h1\",\"text\":\"Contact\",\"id\":\"contactTitle\"},{\"tag\":\"p\",\"text\":\"In nostrud deserunt occaecat quis eu sint. Pariatur consequat consectetur duis elit est. Non sunt laborum do culpa veniam dolor dolore cupidatat tempor id commodo voluptate. Quis enim laboris cillum magna enim.\",\"id\":\"contactDescription\"},{\"tag\":\"h2\",\"text\":\"Event Contact\",\"id\":\"eventTitle\"},{\"tag\":\"p\",\"text\":\"Amet voluptate in sit aliquip aliquip nisi velit.\",\"id\":\"eventContact\"},{\"tag\":\"h2\",\"text\":\"Catering Contact\",\"id\":\"caterTitle\"},{\"tag\":\"p\",\"text\":\"Amet voluptate in sit aliquip aliquip nisi velit.\",\"id\":\"caterContact\"}]');\n\n//# sourceURL=webpack://restaurant/./src/contact/contactdata.yaml?");

/***/ }),

/***/ "./src/footer/footerdata.yaml":
/*!************************************!*\
  !*** ./src/footer/footerdata.yaml ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"tag\":\"p\",\"text\":\"Made with ☕️☕️☕️☕️☕️ in Texas\",\"id\":\"footer\"}]');\n\n//# sourceURL=webpack://restaurant/./src/footer/footerdata.yaml?");

/***/ }),

/***/ "./src/home/homedata.yaml":
/*!********************************!*\
  !*** ./src/home/homedata.yaml ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"tag\":\"h1\",\"text\":\"Byte Café\",\"id\":\"homeTitle\"},{\"tag\":\"p\",\"text\":\"Excepteur elit culpa sit incididunt duis occaecat officia qui dolor commodo deserunt aliquip dolor. Laborum excepteur anim et laborum aute sint ut aliquip est exercitation veniam laboris voluptate consectetur. In nostrud deserunt occaecat quis eu sint. Pariatur consequat consectetur duis elit est. Non sunt laborum do culpa veniam dolor dolore cupidatat tempor id commodo voluptate. Quis enim laboris cillum magna enim.\",\"id\":\"description\"},{\"tag\":\"h2\",\"text\":\"Hours\",\"id\":\"hoursTitle\"},{\"tag\":\"ul\",\"text\":null,\"id\":\"hours\",\"content\":[{\"tag\":\"li\",\"text\":\"Monday-Thursday: 10am - 10pm\",\"id\":null},{\"tag\":\"li\",\"text\":\"Friday-Saturday: 10am - 11pm\",\"id\":null},{\"tag\":\"li\",\"text\":\"Sunday: 1pm - 10pm\",\"id\":null}]},{\"tag\":\"h2\",\"text\":\"Location\",\"id\":\"locationTitle\"},{\"tag\":\"p\",\"text\":\"123 main street, anywhere, usa, 12345\",\"id\":\"location\"}]');\n\n//# sourceURL=webpack://restaurant/./src/home/homedata.yaml?");

/***/ }),

/***/ "./src/menu/menudata.yaml":
/*!********************************!*\
  !*** ./src/menu/menudata.yaml ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"tag\":\"h1\",\"text\":\"Menu\",\"id\":\"title\"},{\"tag\":\"h2\",\"text\":\"Breakfast\",\"id\":\"breakfast\",\"className\":\"menuSubtitle\"},{\"tag\":\"div\",\"className\":\"foodContainer\",\"content\":[{\"tag\":\"h3\",\"text\":\"Ipsum lorem\",\"className\":\"foodTitle\"},{\"tag\":\"img\",\"className\":\"foodImage\",\"src\":\"eggToast\"},{\"tag\":\"p\",\"text\":\"Labore aute id commodo est et ex est aliqua labore dolore dolore aliqua dolor.Veniam tempor officia sunt nisi sunt culpa ipsum deserunt aute elit sit incididunt.\",\"className\":\"foodDescription\"}]},{\"tag\":\"div\",\"className\":\"foodContainer\",\"content\":[{\"tag\":\"h3\",\"text\":\"Ipsum lorem\",\"className\":\"foodTitle\"},{\"tag\":\"img\",\"className\":\"foodImage\",\"src\":\"frenchToast\"},{\"tag\":\"p\",\"text\":\"Labore aute id commodo est et ex est aliqua labore dolore dolore aliqua dolor.Veniam tempor officia sunt nisi sunt culpa ipsum deserunt aute elit sit incididunt.\",\"className\":\"foodDescription\"}]},{\"tag\":\"div\",\"className\":\"foodContainer\",\"content\":[{\"tag\":\"h3\",\"text\":\"Ipsum lorem\",\"className\":\"foodTitle\"},{\"tag\":\"img\",\"className\":\"foodImage\",\"src\":\"pancakes\"},{\"tag\":\"p\",\"text\":\"Labore aute id commodo est et ex est aliqua labore dolore dolore aliqua dolor.Veniam tempor officia sunt nisi sunt culpa ipsum deserunt aute elit sit incididunt.\",\"className\":\"foodDescription\"}]},{\"tag\":\"h2\",\"text\":\"Drinks\",\"id\":\"Drinks\",\"className\":\"menuSubtitle\"},{\"tag\":\"div\",\"className\":\"foodContainer\",\"content\":[{\"tag\":\"h3\",\"text\":\"Ipsum lorem\",\"className\":\"foodTitle\"},{\"tag\":\"img\",\"className\":\"foodImage\",\"src\":\"coffee\"},{\"tag\":\"p\",\"text\":\"Labore aute id commodo est et ex est aliqua labore dolore dolore aliqua dolor.Veniam tempor officia sunt nisi sunt culpa ipsum deserunt aute elit sit incididunt.\",\"className\":\"foodDescription\"}]},{\"tag\":\"div\",\"className\":\"foodContainer\",\"content\":[{\"tag\":\"h3\",\"text\":\"Ipsum lorem\",\"className\":\"foodTitle\"},{\"tag\":\"img\",\"className\":\"foodImage\",\"src\":\"latte\"},{\"tag\":\"p\",\"text\":\"Labore aute id commodo est et ex est aliqua labore dolore dolore aliqua dolor.Veniam tempor officia sunt nisi sunt culpa ipsum deserunt aute elit sit incididunt.\",\"className\":\"foodDescription\"}]},{\"tag\":\"div\",\"className\":\"foodContainer\",\"content\":[{\"tag\":\"h3\",\"text\":\"Ipsum lorem\",\"className\":\"foodTitle\"},{\"tag\":\"img\",\"className\":\"foodImage\",\"src\":\"iceCoffee\"},{\"tag\":\"p\",\"text\":\"Labore aute id commodo est et ex est aliqua labore dolore dolore aliqua dolor.Veniam tempor officia sunt nisi sunt culpa ipsum deserunt aute elit sit incididunt.\",\"className\":\"foodDescription\"}]}]');\n\n//# sourceURL=webpack://restaurant/./src/menu/menudata.yaml?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;