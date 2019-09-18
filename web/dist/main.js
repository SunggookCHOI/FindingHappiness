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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Style the video: 100% width and height to cover the entire window */\\n    /* #myVideo {\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n        width: 100%;\\n    } */\\n    video {\\n        position: absolute;\\n        left: 50%; /* % of surrounding element */\\n        top: 50%;\\n        transform: translate(-50%, -80%);\\n    }\\n\\n\\n  /* Add some content at the bottom of the video/page */\\n  .content {\\n    background-color: rgb(0,0,0); /* Fallback color */\\n    background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */\\n    color: white;\\n    font-weight: bold;\\n    border: 3px solid #f1f1f1;\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    z-index: 2;\\n    width: 80%;\\n    padding: 20px;\\n    text-align: center;\\n  }\\n  \\n  /* Style the button used to pause/play the video */\\n  #myBtn {\\n    width: 200px;\\n    font-size: 18px;\\n    padding: 10px;\\n    border: none;\\n    background: #000;\\n    color: #fff;\\n    cursor: pointer;\\n  }\\n  \\n  #myBtn:hover {\\n    background: #ddd;\\n    color: black;\\n  }\\n\\n  #vidioContain{\\n    width:100%; height : 400px;\\n    position:relative;\\n    display:inline-block;\\n    margin:10px;\\n  }\\n  #vidio {\\n    position: absolute; \\n    top: 0; left:0;\\n    width: 100%; height: 100%; \\n    z-index: -1;\\n  }\\n\\n  .container-fluid{\\n    padding: 20px;\\n    padding-right : 50px;\\n    padding-left : 20px;\\n  }\\n\\n  .row {\\n    padding-right : 50px;\\n    padding-left : 50px;\\n  }\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/js/drawChart.js":
/*!*****************************!*\
  !*** ./src/js/drawChart.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.onload=()=>{\r\n    google.charts.load('current', { 'packages': ['corechart'] });\r\n    google.charts.load('current', {packages: ['corechart', 'bar']});\r\n\r\n}\r\n\r\n\r\nfunction drawChart(category) {\r\n    if(category == 1){\r\n        command='getGreenRatio';\r\n    }else if(category == 2 || category==3){\r\n        command='getBudget';\r\n    }else if(category ==4){\r\n        command='getSidoAverage';\r\n    }\r\n\r\n    axios.post(\"http://localhost/Project_Happiness/happiness.do?command=\"+command)\r\n        .then(res => {\r\n            let chartData = eval(res.data);\r\n            if (category==4){\r\n                sidoMean(chartData);\r\n            }\r\n            for (let i in chartData) {\r\n                chartData[i][0] = parseFloat(chartData[i][0]);\r\n                chartData[i][1] = parseFloat(chartData[i][1]);\r\n            }\r\n            if (category == 1) {\r\n                drawGreen(chartData);\r\n            }else if(category ==2 ){\r\n                drawBudget(chartData);\r\n            }else if(category ==3){\r\n                drawFitBudget(chartData);\r\n            }\r\n\r\n        })\r\n        .catch(function (err) {\r\n            console.log('안돼...', err);\r\n        });\r\n}\r\n\r\nfunction drawGreen(chartData) {\r\n    var dataTable = new google.visualization.DataTable();\r\n    dataTable.addColumn('number', '녹지 비율 (%)');\r\n    dataTable.addColumn('number', '행복 지수 (10점 만점)');\r\n    dataTable.addColumn({ type: 'string', role: 'tooltip' });\r\n\r\n    dataTable.addRows(chartData);\r\n\r\n    var options = {\r\n        width: 600,\r\n        height: 400,\r\n        vAxis: { title: \"행복지수 (10점 만점)\" },\r\n        hAxis: { title: \"녹지비율 (%)\" },\r\n        legend: { position: \"none\" }\r\n      };\r\n\r\n    var chart = new google.visualization.ScatterChart(document.getElementById('dataView'));\r\n    chart.draw(dataTable, options);\r\n}\r\n\r\nfunction drawBudget(chartData) {\r\n    var dataTable = new google.visualization.DataTable();\r\n    dataTable.addColumn('number', '문화/관광 예산');\r\n    dataTable.addColumn('number', '행복 지수 (10점 만점)');\r\n    dataTable.addColumn({ type: 'string', role: 'tooltip' });\r\n\r\n    dataTable.addRows(chartData);\r\n\r\n    var options = {\r\n        width: 600,\r\n        height: 400,\r\n        vAxis: { title: \"행복지수 (10점 만점)\" },\r\n        hAxis: { title: \"문화/관광 예산\" },\r\n        legend: { position: \"none\" }\r\n      };\r\n\r\n    var chart = new google.visualization.ScatterChart(document.getElementById('dataView'));\r\n    chart.draw(dataTable, options);\r\n}\r\n\r\nfunction drawFitBudget(chartData) {\r\n    var dataTable = new google.visualization.DataTable();\r\n    dataTable.addColumn('number', '문화/관광 예산');\r\n    dataTable.addColumn('number', '행복 지수 (10점 만점)');\r\n    dataTable.addColumn({ type: 'string', role: 'tooltip' });\r\n    dataTable.addColumn('number', 'line')\r\n\r\n    \r\n\r\n    let x=[];\r\n    let y=[]\r\n    for (let i in chartData){\r\n        x.push(chartData[i][0]);\r\n        y.push(chartData[i][1]);\r\n    }\r\n\r\n    let xAverage = sum(x)/x.length;\r\n    let yAverage = sum(y)/y.length;\r\n\r\n    let tempD = 0;\r\n    let tempN = 0;\r\n    for (let i in x){\r\n        tempN+=(yAverage-y[i])*(xAverage-x[i])\r\n        tempD+=(xAverage-x[i])*(xAverage-x[i])\r\n    }\r\n    let a = tempN/tempD;\r\n    let b = yAverage-a*xAverage;\r\n\r\n\r\n    var max = x.reduce( function (previous, current) { \r\n        return previous > current ? previous:current;\r\n    });\r\n    \r\n    //최소값\r\n    var min = x.reduce( function (previous, current) { \r\n        return previous > current ? current:previous;\r\n    });\r\n\r\n    let fitData = [];\r\n    for(let i in chartData){\r\n        if(chartData[i][0]==min || chartData[i][0]==max){\r\n            fitData.push([chartData[i][0],chartData[i][1],chartData[i][2],a*chartData[i][0]+b]);\r\n        }else{\r\n            fitData.push([chartData[i][0],chartData[i][1],chartData[i][2], a*chartData[i][0]+b]);\r\n        }\r\n    }\r\n    console.log(fitData);\r\n\r\n    dataTable.addRows(fitData);\r\n\r\n    var options = {\r\n        width: 600,\r\n        height: 400,\r\n        vAxis: { title: \"행복지수 (10점 만점)\" },\r\n        hAxis: { title: \"문화/관광 예산\" },\r\n        legend: { position: \"none\" },\r\n        series: {\r\n            seriesType: 'line',\r\n            1: {\r\n                lineWidth: 3,\r\n                pointSize: 0,\r\n                curveType: 'function'\r\n            }\r\n          }\r\n      };\r\n\r\n    var chart = new google.visualization.ScatterChart(document.getElementById('dataView'));\r\n    chart.draw(dataTable, options);\r\n}\r\n\r\nfunction sum(list){\r\n    let result = 0;\r\n    for(let i in list){\r\n        result += list[i];\r\n    }\r\n    return result;\r\n}\r\n\r\nfunction sidoMean(chartData) {\r\n    \r\n    for (let i in chartData[0]){\r\n        chartData[0][i][1]=parseFloat(chartData[0][i][1])\r\n    }\r\n    \r\n    chartData[0].unshift(['지역명','행복지수'])\r\n    var data = new google.visualization.arrayToDataTable(chartData[0]);\r\n    console.log(data);\r\n    var options = {\r\n        width: 600,\r\n        height: 400,\r\n        vAxis: { \r\n            title: \"행복지수 (5점 만점)\",\r\n            viewWindow:{\r\n                min:2.9,\r\n                max:3.4\r\n            }\r\n        },\r\n        hAxis :{\r\n            title : 'place'\r\n        },\r\n        legend: { position: \"none\" }\r\n      };\r\n\r\n    var chart = new google.visualization.ColumnChart(document.getElementById('View'));\r\n    chart.draw(data, options);\r\n}\n\n//# sourceURL=webpack:///./src/js/drawChart.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_drawChart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/drawChart.js */ \"./src/js/drawChart.js\");\n/* harmony import */ var _js_drawChart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_drawChart_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });