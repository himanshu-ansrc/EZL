module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar _default = {\n  env: \"development\" || false,\n  port: process.env.PORT || 3000,\n  API_URL: \"http://localhost:3000\",\n  ACCESS_TOKEN: \"0z6v8b4uua\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Himanshu\\\\EZT\\\\config\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\nvar compile = function compile(app) {\n  if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var jsontoxml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsontoxml */ \"jsontoxml\");\n/* harmony import */ var jsontoxml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsontoxml__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var xml_formatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xml-formatter */ \"xml-formatter\");\n/* harmony import */ var xml_formatter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xml_formatter__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../template.js */ \"./template.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({\n  extended: false\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());\nvar CURRENT_WORKING_DIR = process.cwd();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'public'))); //comment out before building for production\n\n //comment out before building for production\n\n_devBundle__WEBPACK_IMPORTED_MODULE_9__[\"default\"].compile(app);\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist')));\napp.get('/list-wrksheets', function (req, res) {\n  res.send(JSON.parse(fs__WEBPACK_IMPORTED_MODULE_5___default.a.readFileSync('public/xmls/worksheets.json')));\n});\napp.get('*', function (req, res) {\n  res.send(Object(_template_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])());\n});\n\nfunction tutelageTempalte(references) {\n  var params = [];\n\n  if (references.paramsArr.length > 0) {\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = references.paramsArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var x = _step.value;\n        params.push({\n          name: 'param',\n          attrs: {\n            name: x.key,\n            type: x.type\n          }\n        });\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator.return != null) {\n          _iterator.return();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n  }\n\n  return {\n    name: 'tutelage_tmpl',\n    attrs: {\n      'name': references.work_tmp_name\n    },\n    children: [{\n      name: 'params',\n      children: params\n    }]\n  };\n}\n\nfunction worksheetTempalte(references) {\n  var prob_refs = [];\n\n  if (references.paramsArr.length > 0) {\n    var _iteratorNormalCompletion2 = true;\n    var _didIteratorError2 = false;\n    var _iteratorError2 = undefined;\n\n    try {\n      for (var _iterator2 = references.paramsArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n        var x = _step2.value;\n        prob_refs.push({\n          name: 'bind',\n          attrs: {\n            name: x.key,\n            val: x.value\n          }\n        });\n      }\n    } catch (err) {\n      _didIteratorError2 = true;\n      _iteratorError2 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {\n          _iterator2.return();\n        }\n      } finally {\n        if (_didIteratorError2) {\n          throw _iteratorError2;\n        }\n      }\n    }\n  }\n\n  return {\n    name: 'worksheet_tmpl',\n    attrs: {\n      'name': references.work_tmp_name\n    },\n    children: [{\n      name: 'problem_ref',\n      attrs: {\n        'name': references.prob_tmp_name\n      },\n      children: prob_refs\n    }]\n  };\n}\n\nfunction problemRefTemplate(references) {\n  var prob_refs = [];\n\n  if (references.paramsArr.length > 0) {\n    var _iteratorNormalCompletion3 = true;\n    var _didIteratorError3 = false;\n    var _iteratorError3 = undefined;\n\n    try {\n      for (var _iterator3 = references.paramsArr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n        var x = _step3.value;\n        prob_refs.push({\n          name: 'bind',\n          attrs: {\n            name: x.key,\n            val: x.value\n          }\n        });\n      }\n    } catch (err) {\n      _didIteratorError3 = true;\n      _iteratorError3 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {\n          _iterator3.return();\n        }\n      } finally {\n        if (_didIteratorError3) {\n          throw _iteratorError3;\n        }\n      }\n    }\n  }\n\n  return {\n    name: 'problem_ref',\n    attrs: {\n      'name': references.prob_tmp_name\n    },\n    children: prob_refs\n  };\n}\n\nfunction solutionTemplate(references) {\n  if (references.ques_type === \"normal\") {\n    return normalSolutionTemplate();\n  } else if (references.ques_type === \"mcq\") {\n    return multipleChoiseSolutionTemplate(references);\n  } else if (references.ques_type === \"fib\") {\n    return fibSolutionTemplate(references);\n  }\n}\n\nfunction problemTemplate(references) {\n  var params = [];\n  var multiQuesText = '';\n\n  if (references.paramsArr.length > 0) {\n    var _iteratorNormalCompletion4 = true;\n    var _didIteratorError4 = false;\n    var _iteratorError4 = undefined;\n\n    try {\n      for (var _iterator4 = references.paramsArr[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n        var x = _step4.value;\n        params.push({\n          name: 'param',\n          attrs: {\n            name: x.key,\n            type: x.type\n          }\n        });\n      }\n    } catch (err) {\n      _didIteratorError4 = true;\n      _iteratorError4 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {\n          _iterator4.return();\n        }\n      } finally {\n        if (_didIteratorError4) {\n          throw _iteratorError4;\n        }\n      }\n    }\n  }\n\n  var text = \"<p>\".concat(references.ques_txt, \"</p>\");\n\n  if (references.ques_type === \"fib\") {\n    var ques_txt = references.ques_txt.replace('___', '<fib type=\"int\" name=\"AA\"/>');\n    text = \"<group><p>\".concat(ques_txt, \"</p>\");\n  }\n\n  if (references.ques_type === \"mcq\") {\n    var options = references.ans_txt.split(\"\\n\");\n    var optionsWrapper = '';\n    var c = 0,\n        sol = '';\n\n    for (var _x = 0; _x < options.length; _x++) {\n      var k = options[_x].split('##');\n\n      var opt = k[1] == 1 ? \"AA\" : \"c\" + c;\n      optionsWrapper += '<choice name=\"' + opt + '\">' + k[0] + '</choice>';\n      ++c;\n    }\n\n    if (references.ques_img !== '') {\n      var imgData = references.ques_img.split(\"##\");\n      var src = imgData[0].trim(),\n          width = imgData[1].trim(),\n          height = imgData[2].trim();\n      imgData = \"<img src=\".concat(src, \" width=\").concat(width, \" height=\").concat(height, \" />\");\n      text = \"<group><p>\".concat(references.ques_txt, \"</p><p>\").concat(imgData, \"</p>\").concat(optionsWrapper);\n    } else text = \"<group><p>\".concat(references.ques_txt, \"</p>\").concat(optionsWrapper);\n  }\n\n  if (references.ques_img !== '' && references.ques_type !== \"mcq\") {\n    var _imgData = references.ques_img.split(\"##\");\n\n    console.log(_imgData);\n\n    var _src = _imgData[0].replace(\"\\n\", \"\").trim(),\n        _width = _imgData[1].replace(\"\\n\", \"\").trim(),\n        _height = _imgData[2].replace(\"\\n\", \"\").trim();\n\n    _imgData = \"<img src=\".concat(_src, \" width=\").concat(_width, \" height=\").concat(_height, \" />\");\n    text += _imgData;\n  }\n\n  return {\n    name: \"problem_tmpl\",\n    attrs: {\n      'name': references.prob_tmp_name,\n      width: '400'\n    },\n    text: text,\n    children: [{\n      name: 'params',\n      children: params\n    }, {\n      name: 'solutions',\n      text: solutionTemplate(references)\n    }]\n  };\n}\n\nfunction multipleChoiseSolutionTemplate(references) {\n  var options = references.ans_txt.split(\"\\n\");\n  var optionsWrapper = '';\n  var c = 0,\n      sol = '';\n\n  for (var x = 0; x < options.length; x++) {\n    var k = options[x].split('##');\n    var opt = k[1] == 1 ? \"AA\" : \"c\" + c;\n    optionsWrapper += '<cond><choice_ref name=\"' + opt + '\"/>== ' + k[1] + '</cond>';\n    ++c;\n  }\n\n  return \"<solution><grid columns=\\\"150px\\\" gap=\\\"5px\\\">\".concat(optionsWrapper, \"</grid></solution></group>\");\n}\n\nfunction fibSolutionTemplate(references) {\n  var ans_txt = references.ans_txt;\n  return \"<solution><cond><fib_ref name=\\\"AA\\\"/>==\".concat(ans_txt, \"</cond></solution></group>\");\n}\n\nfunction normalSolutionTemplate() {\n  return \"<solution></solution>\";\n}\n\nfunction worksheetRefTempalte(references) {\n  return {\n    name: 'worksheet_ref',\n    attrs: {\n      'name': references.work_tmp_name\n    }\n  };\n}\n\nfunction SB(question) {\n  return \"<sectionBreak><stem><![CDATA[<p>\" + question + \"</p>]]></stem></sectionBreak>\";\n}\n\nfunction TF(question) {\n  return \"<trueFalse>\\n\\t\\t      <stem><![CDATA[<p>\".concat(question.ques_txt, \"</p>]]></stem>\\n\\t\\t      <commonFeedback><![CDATA[<p>\").concat(question.tf_ques_feed, \"</p>]]></commonFeedback>\\n\\t\\t      <trueInfo>\\n\\t\\t        <credit>1</credit>\\n\\t\\t        <feedback><![CDATA[<p>\").concat(question.tf_true_feed, \"</p>]]></feedback>\\n\\t\\t      </trueInfo>\\n\\t\\t      <falseInfo>\\n\\t\\t        <credit>0</credit>\\n\\t\\t        <feedback><![CDATA[<p>\").concat(question.tf_false_feed, \"</p>]]></feedback>\\n\\t\\t      </falseInfo>\\n            </trueFalse>\");\n}\n\nfunction CA(question) {\n  return \"<checkAll>\\n\\t\\t      <stem><![CDATA[<p>cata&nbsp; question</p>]]></stem>\\n\\t\\t      <commonFeedback><![CDATA[<p>CATA feedback</p>]]></commonFeedback>\\n\\t\\t      <choices>\\n\\t\\t        <choice>\\n\\t\\t          <distractor><![CDATA[<p>dist 1</p>]]></distractor>\\n\\t\\t          <creditChecked>1</creditChecked>\\n\\t\\t          <creditUnchecked>0</creditUnchecked>\\n\\t\\t          <feedbackChecked></feedbackChecked>\\n\\t\\t          <feedbackUnchecked></feedbackUnchecked>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t \\n\\t\\t        </choice>\\n\\t\\t        <choice>\\n\\t\\t          <distractor><![CDATA[<p>dist 2</p>]]></distractor>\\n\\t\\t          <creditChecked>1</creditChecked>\\n\\t\\t          <creditUnchecked>0</creditUnchecked>\\n\\t\\t          <feedbackChecked></feedbackChecked>\\n\\t\\t          <feedbackUnchecked></feedbackUnchecked>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t \\n\\t\\t        </choice>\\n\\t\\t        <choice>\\n\\t\\t          <distractor><![CDATA[<p>dist 3</p>]]></distractor>\\n\\t\\t          <creditChecked>0</creditChecked>\\n\\t\\t          <creditUnchecked>1</creditUnchecked>\\n\\t\\t          <feedbackChecked></feedbackChecked>\\n\\t\\t          <feedbackUnchecked></feedbackUnchecked>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t \\n\\t\\t        </choice>\\n\\t\\t      </choices>\\n\\t\\t    </checkAll>\";\n} // function imageData(imgData){\n// \tlet {imgName, imgSize, imgMime, imgBase64} = \n// \treturn `<media_set>\n//               <internal_media>\n//                   <name>${imgName}</name>\n// \t\t          <mediaData>\n// \t\t           <size>${imgSize}</size>\n// \t\t           <mime_type>${imgMime}</mime_type>\n// \t\t           <creation>1544473323754</creation>\n// \t\t           <modified>1544473323754</modified>\n// \t\t           <height>0</height>\n// \t\t           <width>0</width>\n// \t\t           <data>${imgBase64}</data>\n// \t\t          </mediaData>\n//                </internal_media>\n//             </media_set>`;\n// }\n\n\napp.post('/image-data', function (req, res) {\n  var _req$body = req.body,\n      imgName = _req$body.imgName,\n      imgSize = _req$body.imgSize,\n      imgMime = _req$body.imgMime,\n      imgBase64 = _req$body.imgBase64;\n  imgBase64 = imgBase64.split(',')[1];\n  res.send({\n    data: \"<media_set>\\n          <internal_media>\\n              <name>\".concat(imgName, \"</name>\\n\\t          <mediaData>\\n\\t           <size>\").concat(imgSize, \"</size>\\n\\t           <mime_type>\").concat(imgMime, \"</mime_type>\\n\\t           <creation>1544473323754</creation>\\n\\t           <modified>1544473323754</modified>\\n\\t           <height>0</height>\\n\\t           <width>0</width>\\n\\t           <data>\").concat(imgBase64, \"</data>\\n\\t          </mediaData>\\n           </internal_media>\\n        </media_set>\")\n  });\n});\napp.post('/random-variables', function (req, res) {\n  var randomList = req.body.random_info.split('#');\n  var allVariables = '';\n  var _iteratorNormalCompletion5 = true;\n  var _didIteratorError5 = false;\n  var _iteratorError5 = undefined;\n\n  try {\n    for (var _iterator5 = randomList[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {\n      var x = _step5.value;\n      var varible = x.split('\\n');\n      console.log(varible);\n      var listData = '';\n      varible = varible.filter(function (el) {\n        return el != '';\n      });\n      console.log(varible);\n\n      for (var y = 1; y < varible.length; y++) {\n        listData += \"<row><![CDATA[\".concat(varible[y], \"]]></row>\");\n      }\n\n      var data = \"<pooledRandom>\\n                      <name>\".concat(varible[0].trim(), \"</name>\\n                      <arrayed>true</arrayed>\\n                      <rows>\").concat(listData, \"</rows>\\n                     </pooledRandom>\");\n      allVariables += data;\n    }\n  } catch (err) {\n    _didIteratorError5 = true;\n    _iteratorError5 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion5 && _iterator5.return != null) {\n        _iterator5.return();\n      }\n    } finally {\n      if (_didIteratorError5) {\n        throw _iteratorError5;\n      }\n    }\n  }\n\n  res.send(\"<randomVariables>\".concat(allVariables, \"</randomVariables>\"));\n});\n\nfunction categories(ques_type, level) {\n  return \"<categories>\\n\\t\\t      <internal_category>\\n\\t\\t        <catid>13570164620437362</catid>\\n\\t\\t        <title><![CDATA[Learning Objective: 01-01 \".concat(ques_type, \" Questions]]></title>\\n\\t\\t      </internal_category>\\n\\t\\t      <internal_category>\\n\\t\\t        <catid>13570164620437396</catid>\\n\\t\\t        <title><![CDATA[Topic: 01-01 \").concat(ques_type, \"]]></title>\\n\\t\\t      </internal_category>\\n\\t\\t      <internal_category>\\n\\t\\t        <catid>1136040701596</catid>\\n\\t\\t        <title><![CDATA[Difficulty: \").concat(level, \"]]></title>\\n\\t\\t      </internal_category>\\n\\t\\t      <internal_category>\\n\\t\\t        <catid>1136040746617</catid>\\n\\t\\t        <title><![CDATA[Bloom's: Remember]]></title>\\n\\t\\t      </internal_category>\\n\\t\\t    </categories>\");\n}\n\nfunction questionProperties() {\n  return \"<questionProperties>\\n\\t\\t        <property name=\\\"layout\\\" type=\\\"string\\\" value=\\\"vertical\\\" />\\n\\t\\t        <property name=\\\"pageTag\\\" type=\\\"string\\\" value=\\\"\\\" />\\n\\t\\t        <property name=\\\"completeIncompleteGrading\\\" type=\\\"string\\\" value=\\\"false\\\" />\\n\\t\\t        <property name=\\\"instructor_info\\\" type=\\\"string\\\" value=\\\"\\\" />\\n\\t\\t        <property name=\\\"forceManualScoring\\\" type=\\\"string\\\" value=\\\"automatic\\\" />\\n\\t\\t        <property name=\\\"commonFeedback\\\" type=\\\"string\\\" value=\\\"&lt;p&gt;Feedback test - answer is B. There is an image below.&lt;/p&gt;\\n\\t\\t        &lt;p&gt;%media:mgh_logo_rgb_57_96dpi_jpg.ext%&lt;/p&gt;\\\" />\\n\\t\\t        <property name=\\\"problemSolution\\\" type=\\\"string\\\" value=\\\"\\\" />\\n\\t\\t        <property name=\\\"audioPlayerPosition\\\" type=\\\"string\\\" value=\\\"above\\\" />\\n\\t\\t        <property name=\\\"otherItem\\\" type=\\\"string\\\" value=\\\"\\\" />\\n\\t\\t        <property name=\\\"useCommonFeedback\\\" type=\\\"boolean\\\" value=\\\"false\\\" />\\n\\t\\t        <property name=\\\"order\\\" type=\\\"string\\\" value=\\\"as listed\\\" />\\n\\t        </questionProperties>\";\n}\n\nfunction MC(ques_items) {\n  var count = ques_items.mc_answer.split(\"#\")[0];\n  var answer = ques_items.mc_answer.split(\"#\")[1];\n  var data = \"\";\n  var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];\n\n  for (var x = 1; x <= count; x++) {\n    var a = x == answer ? 1 : 0;\n    data += \"<choice>\\n\\t              <distractor><![CDATA[\".concat(alpha[x - 1], \"]]></distractor>\\n\\t                <credit>\").concat(a, \"</credit>\\n\\t              <feedback></feedback>\\n\\t             </choice>\");\n  }\n\n  return \"<multipleChoice>\\n\\t\\t        <stem><![CDATA[<p>\".concat(ques_items.ques_txt, \"</p>\\n\\t\\t        </stem>\\n\\t\\t         <commonFeedback><![CDATA[<p>Feedback test - \").concat(ques_items.mc_ques_feed, \"</p>]]>\\n\\t\\t         </commonFeedback>\\n\\t\\t\\t        <choices>\\n\\t\\t\\t        \").concat(data, \"\\n\\t\\t\\t        </choices>\\n\\t\\t      </multipleChoice>\");\n}\n\nfunction WK(ques_items) {\n  var answer = \"\";\n\n  if (ques_items.ans_type = '0') {\n    answer = \"<booleanAnswer>\\n\\t\\t\\t\\t          <name><![CDATA[A]]></name>\\n\\t\\t\\t\\t          <weight>100</weight>\\n\\t\\t\\t\\t          <answerProperties>\\n\\t\\t\\t\\t            <property name=\\\"completeIncompleteGrading\\\" type=\\\"string\\\" value=\\\"false\\\" />\\n\\t\\t\\t\\t          </answerProperties>\\n\\t\\t\\t\\t          <correctAnswer>true</correctAnswer>\\n\\t\\t\\t         </booleanAnswer>\";\n  } else if (ques_items.ans_type = '1') {\n    answer = \"<numberAnswer>\\n\\t\\t\\t\\t          <name><![CDATA[B]]></name>\\n\\t\\t\\t\\t          <weight>100</weight>\\n\\t\\t\\t\\t          <answerProperties>\\n\\t\\t\\t\\t            <property name=\\\"completeIncompleteGrading\\\" type=\\\"string\\\" value=\\\"false\\\" />\\n\\t\\t\\t\\t          </answerProperties>\\n\\t\\t\\t\\t          <fieldWidth>7</fieldWidth>\\n\\t\\t\\t\\t          <correctAnswer><![CDATA[[A(3)]]]></correctAnswer>\\n\\t\\t\\t\\t          <formatString><![CDATA[#.####]]></formatString>\\n\\t\\t\\t\\t          <precisionString><![CDATA[2]]></precisionString>\\n\\t\\t\\t\\t          <units></units>\\n\\t\\t\\t\\t          <precisionType>2</precisionType>\\n\\t\\t\\t\\t          <engineeringUnits>false</engineeringUnits>\\n\\t\\t\\t\\t          <currency>false</currency>\\n\\t\\t\\t\\t       </numberAnswer>\";\n  } else if (ques_items.ans_type = '2') {\n    answer = \"<multipleChoiceAnswer>\\n\\t\\t\\t          <name><![CDATA[C]]></name>\\n\\t\\t\\t          <weight>100</weight>\\n\\t\\t\\t          <answerProperties>\\n\\t\\t\\t            <property name=\\\"presentation\\\" type=\\\"string\\\" value=\\\"dropDown\\\" />\\n\\t\\t\\t            <property name=\\\"completeIncompleteGrading\\\" type=\\\"string\\\" value=\\\"false\\\" />\\n\\t\\t\\t            <property name=\\\"width\\\" type=\\\"string\\\" value=\\\"\\\" />\\n\\t\\t\\t            <property name=\\\"prompt\\\" type=\\\"string\\\" value=\\\"\\\" />\\n\\t\\t\\t            <property name=\\\"scramble\\\" type=\\\"string\\\" value=\\\"true\\\" />\\n\\t\\t\\t          </answerProperties>\\n\\t\\t\\t          <choices>\\n\\t\\t\\t            <choice>\\n\\t\\t\\t              <distractor><![CDATA[&#8598;]]></distractor>\\n\\t\\t\\t              <correct>false</correct>\\n\\t\\t\\t            </choice>\\n\\t\\t\\t            <choice>\\n\\t\\t\\t              <distractor><![CDATA[&#8599;]]></distractor>\\n\\t\\t\\t              <correct>false</correct>\\n\\t\\t\\t            </choice>\\n\\t\\t\\t            <choice>\\n\\t\\t\\t              <distractor><![CDATA[&#8601;]]></distractor>\\n\\t\\t\\t              <correct>false</correct>\\n\\t\\t\\t            </choice>\\n\\t\\t\\t            <choice>\\n\\t\\t\\t              <distractor><![CDATA[&#8600;]]></distractor>\\n\\t\\t\\t              <correct>true</correct>\\n\\t\\t\\t            </choice>\\n\\t\\t\\t          </choices>\\n\\t\\t\\t        </multipleChoiceAnswer>\";\n  }\n\n  var data = \"<worksheet>\\n\\t                  <stem><![CDATA[<p>\".concat(ques_items.ques_txt, \"</p></stem>\\n\\t\\t\\t          <commonFeedback><![CDATA[<p>Feedback test - \").concat(ques_items.mc_ques_feed, \"</p>]]>\\n\\t\\t\\t          </commonFeedback>\\n\\t\\t\\t          <answers>\").concat(answer, \"</answers>\\n                  </worksheet>\");\n  return data;\n}\n\napp.post('/', function (req, res) {\n  var text = null;\n  var question = \"<question>\\n                          <title><![CDATA[I am a section break]]></title>\\n                          <multipart>\".concat(req.body.ques_id, \"</multipart>\\n                          <type>\").concat(req.body.ques_type, \"</type>\");\n  req.body.ques_txt = req.body.ques_txt.replace(/<media>.+<\\/media>/ig, function (match) {\n    match = match.replace('<media>', '');\n    match = match.replace('</media>', '');\n    var k = match.split('.');\n    var a = k.pop();\n    var b = k.join('');\n\n    if (a == 'mml') {\n      return \"%\" + \"media:\" + b + \"_\" + a + \"%\";\n    } else return \"%\" + \"media:\" + b + \"_\" + a + \".ext\" + \"%\";\n  });\n\n  if (req.body.ques_type == \"SB\") {\n    question += SB(req.body.ques_txt);\n  }\n\n  if (req.body.ques_type == \"TF\") {\n    question += TF(req.body);\n  }\n\n  if (req.body.ques_type == \"CA\") {\n    question += CA(req.body);\n  }\n\n  if (req.body.ques_type == \"MC\") {\n    question += categories(\"Multiple Choice\", req.body.ques_level);\n    question += questionProperties();\n    question += MC(req.body);\n  }\n\n  if (req.body.ques_type == \"WK\") {\n    question += categories(\"Multiple Choice\", req.body.ques_level);\n    question += questionProperties();\n    question += WK(req.body);\n  }\n\n  text = \"\".concat(question, \"\\n               </question>\");\n  var xml = \"<questionSet>\\n                     \".concat(text, \"\\n                  </questionSet>\"); // let xml = jsontoxml([{\n  // \t name: 'questionSet',\n  // \t text: text\n  // }]);\n\n  res.send(xml.toString()); //console.log(`<?xml version=\"1.0\" encoding=\"UTF-8\"?>${xml}`)\n  // const wrksheetName = (req.body.work_tmp_name).trim();\n  // const newwrksheetName = req.body.new_work_tmp_name ? (req.body.new_work_tmp_name).trim() : '';\n  //    if(newwrksheetName.length>0){\n  //    \treq.body.work_tmp_name = newwrksheetName;\n  //    }\n  // const workSheets = JSON.parse(fs.readFileSync('public/xmls/worksheets.json'));\n  // if(workSheets[wrksheetName]){\n  //       let problemTemp = problemTemplate(req.body),\n  //           preWrkTemplate = JSON.parse(fs.readFileSync('public/xmls/'+wrksheetName+'.txt'));\n  //           //ADD PROBLEM TO TEMPLATE \n  //           preWrkTemplate.unshift(problemTemp);\n  //           //ADD PROBLEM REF TO TEMPLATE\n  //           for(let x=0; x<preWrkTemplate.length; x++){\n  //           \t   if(preWrkTemplate[x]['name']=='worksheet_tmpl'){\n  //           \t   \t  preWrkTemplate[x]['children'].unshift(problemRefTemplate(req.body))\n  //           \t   }\n  //           }\n  //           //STORE NEW TEMPALTE \n  //           fs.writeFileSync('public/xmls/'+wrksheetName+'.txt', JSON.stringify(preWrkTemplate))               \n  //           let d = jsontoxml(\n  //               preWrkTemplate\n  //           )\n  //           res.send(XMLFormatter(`<xml>${d}</xml>`))\n  // }else{\n  //         let data = [\n  //  \t tutelageTempalte(req.body),\n  //       problemTemplate(req.body),\n  //       worksheetTempalte(req.body),\n  //       worksheetRefTempalte(req.body)\n  //  ]\n  //     let xml = jsontoxml(data);\n  //     workSheets[newwrksheetName] = newwrksheetName;\n  //     fs.writeFileSync('public/xmls/worksheets.json', JSON.stringify(workSheets))\n  //     fs.writeFileSync('public/xmls/'+newwrksheetName+'.txt', JSON.stringify(data))\n  //     res.send(XMLFormatter(`<xml>${xml}</xml>`))\n  // }\n});\napp.listen(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port);\n});\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(tutelageTempalte, \"tutelageTempalte\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(worksheetTempalte, \"worksheetTempalte\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(problemRefTemplate, \"problemRefTemplate\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(solutionTemplate, \"solutionTemplate\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(problemTemplate, \"problemTemplate\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(multipleChoiseSolutionTemplate, \"multipleChoiseSolutionTemplate\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(fibSolutionTemplate, \"fibSolutionTemplate\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(normalSolutionTemplate, \"normalSolutionTemplate\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(worksheetRefTempalte, \"worksheetRefTempalte\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(SB, \"SB\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(TF, \"TF\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(CA, \"CA\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(categories, \"categories\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(questionProperties, \"questionProperties\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(MC, \"MC\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n  reactHotLoader.register(WK, \"WK\", \"E:\\\\Himanshu\\\\EZT\\\\server\\\\server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar _default = function _default() {\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n            <title>EZL</title>\\n            <meta name=\\\"viewport\\\"  content=\\\"width=device-width initial-scale=1\\\"/>\\n            <link rel=\\\"stylesheet\\\" href=\\\"https://s3.amazonaws.com/assessts-book/css/impactwebfont.css\\\"> \\n            <link href=\\\"https://fonts.googleapis.com/css?family=Roboto\\\" rel=\\\"stylesheet\\\">\\n            <link rel=\\\"stylesheet\\\" href=\\\"/css/web-icons.css\\\">\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\"></div>\\n          <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n          <script type=\\\"text/javascript\\\" src=\\\"/js/sortable.js\\\"></script>\\n<script>\\n    new Sortable(document.getElementById('example1'), {\\n      animation: 150,\\n      ghostClass: 'blue-background-class'\\n    });\\n  </script>\\n          <script type=\\\"text/javascript\\\" src=\\\"/js/vkbeauty.js\\\"></script>\\n        </body>\\n      </html>\";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Himanshu\\\\EZT\\\\template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['babel-polyfill', 'react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader'],\n      resolve: {\n        extensions: [\".js\", \".jsx\"]\n      }\n    }, {\n      test: /.css$/,\n      use: [{\n        loader: 'style-loader'\n      }, {\n        loader: 'css-loader'\n      }]\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"E:\\\\Himanshu\\\\EZT\\\\webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"E:\\\\Himanshu\\\\EZT\\\\webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi babel-polyfill ./server/server.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! E:\\Himanshu\\EZT\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./server/server.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "jsontoxml":
/*!****************************!*\
  !*** external "jsontoxml" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsontoxml\");\n\n//# sourceURL=webpack:///external_%22jsontoxml%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "xml-formatter":
/*!********************************!*\
  !*** external "xml-formatter" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"xml-formatter\");\n\n//# sourceURL=webpack:///external_%22xml-formatter%22?");

/***/ })

/******/ });