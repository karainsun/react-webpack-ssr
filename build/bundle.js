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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/router */ \"./src/router/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/store */ \"./src/store/index.js\");\n/* harmony import */ var _src_component_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/component/header */ \"./src/component/header/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_9__);\n\n\n // import proxy from \"http-proxy-middleware\";\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nvar port = 9090; // 设置静态资源地址\n\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a[\"static\"](\"public\"));\nvar store = Object(_src_store__WEBPACK_IMPORTED_MODULE_6__[\"getServerStore\"])();\n\nfunction csrRender(res) {\n  // 读取文件返回\n  var filename = path__WEBPACK_IMPORTED_MODULE_8___default.a.resolve(process.cwd(), \"public/src/index.html\");\n  var html = fs__WEBPACK_IMPORTED_MODULE_9___default.a.readFileSync(filename, \"utf-8\");\n  res.send(html);\n} // 匹配所有路由\n\n\napp.get(\"*\", function (req, res) {\n  if (req.query._mode == \"csr\") {\n    console.log(\"url参数开启csr降级\");\n    return csrRender(res);\n  } // 根据路由渲染出的组件，并且拿到loadData方法，获取数据，存储网络请求\n\n\n  var promises = [];\n  _src_router__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map(function (route) {\n    var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"matchPath\"])(req.path, route);\n\n    if (match) {\n      var loadData = route.component.loadData;\n\n      if (loadData) {\n        var promise = new Promise(function (resolve, reject) {\n          loadData(store).then(resolve)[\"catch\"](resolve);\n        });\n        promises.push(promise);\n      }\n    }\n  }); // allSettled\n\n  Promise.all(promises).then(function () {\n    var context = {\n      css: []\n    }; // 由于node不支持jsx，使用react-dom/server自带的renderToString进行转换\n\n    var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n      store: store\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"], {\n      location: req.url,\n      context: context\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_component_header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Switch\"], null, _src_router__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map(function (route) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], route);\n    })))));\n\n    if (context.statusCode) {\n      res.status(context.statusCode);\n    }\n\n    if (context.action === \"REPLACE\") {\n      res.redirect(301, context.url);\n    }\n\n    var css = context.css.join(\"\\n\"); // 返回一个html结构，并添加需要渲染的组件，并引入client中的JS进行数据操作。同构触发。\n\n    res.send(\"\\n    <html>\\n        <head>\\n            <meta charset=\\\"utf-8\\\" />\\n            <title>react ssr</title>\\n            <style>\\n              \".concat(css, \"\\n            </style>\\n        </head>\\n        <body>\\n            <div id=\\\"root\\\">\").concat(content, \"</div>\\n            <script>\\n              window.__context = \").concat(JSON.stringify(store.getState()), \"\\n            </script>\\n            <script src=\\\"/bundle.js\\\"></script>\\n        </body>\\n    </html>    \\n    \"));\n  })[\"catch\"](function () {\n    res.send(\"报错了500\");\n  });\n}); // 启动服务\n\napp.listen(port, function () {\n  console.log(\"\\u6253\\u5F00\\uFF1Ahttp://localhost:\".concat(port));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/component/header/index.js":
/*!***************************************!*\
  !*** ./src/component/header/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    style: {\n      margin: 'auto 5px'\n    },\n    to: \"/\"\n  }, \"\\u9996\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    style: {\n      margin: 'auto 5px'\n    },\n    to: \"/posts\"\n  }, \"\\u6587\\u7AE0\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    style: {\n      margin: 'auto 5px'\n    },\n    to: \"/about\"\n  }, \"\\u5173\\u4E8E\"));\n});\n\n//# sourceURL=webpack:///./src/component/header/index.js?");

/***/ }),

/***/ "./src/pages/about/index.js":
/*!**********************************!*\
  !*** ./src/pages/about/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions/index.js\");\n\n\n\n\n\nfunction About(props) {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!props.userInfo) {\n      props.getUserInfo();\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, props.userInfo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: props.userInfo.introduction\n    }\n  }) : null);\n}\n\nvar mapStateToProps = Object(immer__WEBPACK_IMPORTED_MODULE_2__[\"produce\"])(function (state) {\n  return {\n    userInfo: state.index.userInfo\n  };\n});\n\nAbout.loadData = function (store) {\n  return store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getUserInfo\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {\n  getUserInfo: _store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getUserInfo\"]\n})(About));\n\n//# sourceURL=webpack:///./src/pages/about/index.js?");

/***/ }),

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions/index.js\");\n\n\n\n\n\nvar Home = function Home(props) {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!props.banners) {\n      props.getBanners();\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, props.banners ? props.banners.map(function (post) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: post.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, post.desc));\n  }) : null));\n};\n\nvar mapStateToProps = Object(immer__WEBPACK_IMPORTED_MODULE_2__[\"produce\"])(function (state) {\n  return {\n    banners: state.index.banners\n  };\n});\n\nHome.loadData = function (store) {\n  return store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getBanners\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {\n  getBanners: _store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getBanners\"]\n})(Home));\n\n//# sourceURL=webpack:///./src/pages/home/index.js?");

/***/ }),

/***/ "./src/pages/posts/index.js":
/*!**********************************!*\
  !*** ./src/pages/posts/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions/index.js\");\n\n\n\n\n\nvar Post = function Post(props) {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!props.posts) {\n      props.getPosts();\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, props.posts ? props.posts.map(function (post) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: post.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, post.description));\n  }) : null));\n};\n\nvar mapStateToProps = Object(immer__WEBPACK_IMPORTED_MODULE_2__[\"produce\"])(function (state) {\n  return {\n    posts: state.index.posts\n  };\n});\n\nPost.loadData = function (store) {\n  return store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getPosts\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {\n  getPosts: _store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getPosts\"]\n})(Post));\n\n//# sourceURL=webpack:///./src/pages/posts/index.js?");

/***/ }),

/***/ "./src/request/config.js":
/*!*******************************!*\
  !*** ./src/request/config.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n // import { // message } from 'antd';\n\nvar ajax = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: 'https://www.kayrain.cn/api',\n  timeout: 3000\n});\najax.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //添加拦截\n\najax.interceptors.request.use(function (config) {\n  // 登录流程控制中，根据本地是否存在token判断用户的登录情况\n  // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token\n  // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码\n  // if (config.headers) {\n  //   const token = localStorage.getItem('k_token');\n  //   config.headers['Authorization'] = 'Bearer ' + token;\n  // }\n  return config;\n}, function (error) {\n  console.log(error);\n});\najax.interceptors.response.use(function (res) {\n  // if (res.headers.authorization) {\n  //   localStorage.setItem('k_token', res.headers.authorization);\n  // } else {\n  //   if (res.data.data && res.data.data.token) {\n  //     localStorage.setItem('k_token', res.data.data.token);\n  //   }\n  // }\n  if (res.status === 200) {\n    return Promise.resolve(res.data);\n  } else {\n    return Promise.reject(res.data);\n  }\n}, function (error) {\n  var response = error.response;\n\n  if (response) {\n    if (response.status === 401) {// message.success('请重新登陆', 1);\n      // localStorage.removeItem('k_token');\n      // return (window.location.hash = '/login');\n    } else {\n      return Promise.reject(response.data);\n    }\n  } else {\n    // 处理断网的情况\n    // eg:请求超时或断网时，更新state的network状态\n    // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏\n    // 关于断网组件中的刷新重新获取数据，会在断网组件中说明\n    // message.warning('网络连接异常,请稍后再试!');\n    throw '网络连接异常,请稍后再试!';\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ajax);\n\n//# sourceURL=webpack:///./src/request/config.js?");

/***/ }),

/***/ "./src/request/index.js":
/*!******************************!*\
  !*** ./src/request/index.js ***!
  \******************************/
/*! exports provided: bannerList, articleList, getClientUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bannerList\", function() { return bannerList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"articleList\", function() { return articleList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientUser\", function() { return getClientUser; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/request/config.js\");\n // Banner列表\n\nvar bannerList = function bannerList() {\n  return Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    method: 'GET',\n    url: '/banner/list'\n  });\n}; // 文章列表\n\nvar articleList = function articleList(params) {\n  return Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    method: 'GET',\n    url: '/post/list',\n    params: params\n  });\n}; // 获取前台用户\n\nvar getClientUser = function getClientUser() {\n  return Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    method: 'GET',\n    url: '/user/info'\n  });\n};\n\n//# sourceURL=webpack:///./src/request/index.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home */ \"./src/pages/home/index.js\");\n/* harmony import */ var _pages_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/posts */ \"./src/pages/posts/index.js\");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/about */ \"./src/pages/about/index.js\");\n\n\n\nvar routes = [{\n  path: '/',\n  name: '首页',\n  exact: true,\n  key: 'home',\n  component: _pages_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/posts',\n  name: '文章',\n  exact: true,\n  key: 'posts',\n  component: _pages_posts__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: '/about',\n  name: '关于',\n  exact: true,\n  key: 'about',\n  component: _pages_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/store/actionTypes/index.js":
/*!****************************************!*\
  !*** ./src/store/actionTypes/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * redux的 type常量\n * @param {name} string action 要 diapatch 的类型\n * @param {field} string action 要操作的字段名\n */\nvar actions = {\n  SET_BANNERS: 'SET_BANNERS',\n  SET_POSTS: 'SET_POSTS',\n  SET_USER_INFO: 'SET_USER_INFO'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (actions);\n\n//# sourceURL=webpack:///./src/store/actionTypes/index.js?");

/***/ }),

/***/ "./src/store/actions/index.js":
/*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
/*! exports provided: setBanners, setPosts, setUserInfo, getBanners, getPosts, getUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setBanners\", function() { return setBanners; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPosts\", function() { return setPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUserInfo\", function() { return setUserInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBanners\", function() { return getBanners; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPosts\", function() { return getPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserInfo\", function() { return getUserInfo; });\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request */ \"./src/request/index.js\");\n\nvar setBanners = function setBanners(banners) {\n  return {\n    type: 'SET_BANNERS',\n    banners: banners\n  };\n};\nvar setPosts = function setPosts(posts) {\n  return {\n    type: 'SET_POSTS',\n    posts: posts.list\n  };\n};\nvar setUserInfo = function setUserInfo(userInfo) {\n  return {\n    type: 'SET_USER_INFO',\n    userInfo: userInfo\n  };\n};\nvar getBanners = function getBanners() {\n  return function (dispatch) {\n    return Object(_request__WEBPACK_IMPORTED_MODULE_0__[\"bannerList\"])().then(function (res) {\n      dispatch(setBanners(res.data));\n    });\n  };\n};\nvar getPosts = function getPosts() {\n  return function (dispatch) {\n    return Object(_request__WEBPACK_IMPORTED_MODULE_0__[\"articleList\"])({\n      pageNo: 1,\n      pageSize: 1000,\n      title: '',\n      category: ''\n    }).then(function (res) {\n      dispatch(setPosts(res.data));\n    });\n  };\n};\nvar getUserInfo = function getUserInfo() {\n  return function (dispatch) {\n    return Object(_request__WEBPACK_IMPORTED_MODULE_0__[\"getClientUser\"])().then(function (res) {\n      dispatch(setUserInfo(res.data));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/store/actions/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: getServerStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerStore\", function() { return getServerStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./src/store/reducers/index.js\");\n\n\n\n\nvar reducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  index: _reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\nvar serverAxios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: 'https://www.kayrain.cn/api'\n});\nvar clientAxios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: '/'\n}); // 服务端使用\n\nvar getServerStore = function getServerStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a.withExtraArgument(serverAxios)));\n}; // 客户端使用\n\nvar getClientStore = function getClientStore() {\n  var defaultStore = window.__context ? window.__context : {};\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(reducer, defaultStore, Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a.withExtraArgument(clientAxios)));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ \"./src/store/state/index.js\");\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionTypes */ \"./src/store/actionTypes/index.js\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar storeData = Object(immer__WEBPACK_IMPORTED_MODULE_2__[\"produce\"])(function () {\n  var draft = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SET_BANNERS:\n      draft.banners = action.banners;\n      break;\n\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SET_POSTS:\n      draft.posts = action.posts;\n      break;\n\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SET_USER_INFO:\n      draft.userInfo = action.userInfo;\n      break;\n\n    default:\n      break;\n  }\n\n  return draft;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (storeData);\n\n//# sourceURL=webpack:///./src/store/reducers/index.js?");

/***/ }),

/***/ "./src/store/state/index.js":
/*!**********************************!*\
  !*** ./src/store/state/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initState = {\n  banners: null,\n  posts: null,\n  userInfo: null\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (initState);\n\n//# sourceURL=webpack:///./src/store/state/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

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

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"immer\");\n\n//# sourceURL=webpack:///external_%22immer%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });