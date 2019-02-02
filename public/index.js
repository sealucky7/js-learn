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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/app.js":
/*!*************************!*\
  !*** ./frontend/app.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_phone_page_phone_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/phone-page/phone-page */ \"./frontend/components/phone-page/phone-page.js\");\n\r\n\r\n\r\n\r\nnew _components_phone_page_phone_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n  el: document.querySelector('[data-component=\"phone-page\"]'),\r\n});\r\n\n\n//# sourceURL=webpack:///./frontend/app.js?");

/***/ }),

/***/ "./frontend/components/phone-catalogue/phone-catalogue.js":
/*!****************************************************************!*\
  !*** ./frontend/components/phone-catalogue/phone-catalogue.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhoneCatalogue; });\n\r\n\r\nclass PhoneCatalogue {\r\n  constructor(options) {\r\n    this._el = options.el;\r\n    this._phones = options.phones;\r\n    const template = document.querySelector('#phone-catalogue-template').innerHTML;\r\n    this._compiledFunction = _.template(template);\r\n    this._render();\r\n  }\r\n\r\n  _render() {\r\n\r\n    this._el.innerHTML = this._compiledFunction({\r\n      phones: this._phones,\r\n    });\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./frontend/components/phone-catalogue/phone-catalogue.js?");

/***/ }),

/***/ "./frontend/components/phone-page/phone-page.js":
/*!******************************************************!*\
  !*** ./frontend/components/phone-page/phone-page.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhonePage; });\n/* harmony import */ var _phone_catalogue_phone_catalogue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../phone-catalogue/phone-catalogue */ \"./frontend/components/phone-catalogue/phone-catalogue.js\");\n\r\n\r\n\r\n\r\nclass PhonePage {\r\n  constructor(options) {\r\n    this._el = options.el;\r\n    this._catalogue = new _phone_catalogue_phone_catalogue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n      el: this._el.querySelector('[data-component=\"phone-catalogue\"]'),\r\n      phones: phonesFromServer,\r\n    })\r\n  }\r\n\r\n}\r\n\r\nconst phonesFromServer = [\r\n  {\r\n    \"age\": 0,\r\n    \"id\": \"motorola-xoom-with-wi-fi\",\r\n    \"imageUrl\": \"img/phones/motorola-xoom-with-wi-fi.0.jpg\",\r\n    \"name\": \"Motorola XOOM\\u2122 with Wi-Fi\",\r\n    \"snippet\": \"The Next, Next Generation\\r\\n\\r\\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).\"\r\n  },\r\n  {\r\n    \"age\": 1,\r\n    \"id\": \"motorola-xoom\",\r\n    \"imageUrl\": \"img/phones/motorola-xoom.0.jpg\",\r\n    \"name\": \"MOTOROLA XOOM\\u2122\",\r\n    \"snippet\": \"The Next, Next Generation\\n\\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb).\"\r\n  },\r\n  {\r\n    \"age\": 2,\r\n    \"carrier\": \"AT&T\",\r\n    \"id\": \"motorola-atrix-4g\",\r\n    \"imageUrl\": \"img/phones/motorola-atrix-4g.0.jpg\",\r\n    \"name\": \"MOTOROLA ATRIX\\u2122 4G\",\r\n    \"snippet\": \"MOTOROLA ATRIX 4G the world's most powerful smartphone.\"\r\n  },\r\n  {\r\n    \"age\": 3,\r\n    \"id\": \"dell-streak-7\",\r\n    \"imageUrl\": \"img/phones/dell-streak-7.0.jpg\",\r\n    \"name\": \"Dell Streak 7\",\r\n    \"snippet\": \"Introducing Dell\\u2122 Streak 7. Share photos, videos and movies together. It\\u2019s small enough to carry around, big enough to gather around.\"\r\n  },\r\n  {\r\n    \"age\": 4,\r\n    \"carrier\": \"Cellular South\",\r\n    \"id\": \"samsung-gem\",\r\n    \"imageUrl\": \"img/phones/samsung-gem.0.jpg\",\r\n    \"name\": \"Samsung Gem\\u2122\",\r\n    \"snippet\": \"The Samsung Gem\\u2122 brings you everything that you would expect and more from a touch display smart phone \\u2013 more apps, more features and a more affordable price.\"\r\n  },\r\n  {\r\n    \"age\": 5,\r\n    \"carrier\": \"Dell\",\r\n    \"id\": \"dell-venue\",\r\n    \"imageUrl\": \"img/phones/dell-venue.0.jpg\",\r\n    \"name\": \"Dell Venue\",\r\n    \"snippet\": \"The Dell Venue; Your Personal Express Lane to Everything\"\r\n  },\r\n  {\r\n    \"age\": 6,\r\n    \"carrier\": \"Best Buy\",\r\n    \"id\": \"nexus-s\",\r\n    \"imageUrl\": \"img/phones/nexus-s.0.jpg\",\r\n    \"name\": \"Nexus S\",\r\n    \"snippet\": \"Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet.\"\r\n  },\r\n  {\r\n    \"age\": 7,\r\n    \"carrier\": \"Cellular South\",\r\n    \"id\": \"lg-axis\",\r\n    \"imageUrl\": \"img/phones/lg-axis.0.jpg\",\r\n    \"name\": \"LG Axis\",\r\n    \"snippet\": \"Android Powered, Google Maps Navigation, 5 Customizable Home Screens\"\r\n  },\r\n  {\r\n    \"age\": 8,\r\n    \"id\": \"samsung-galaxy-tab\",\r\n    \"imageUrl\": \"img/phones/samsung-galaxy-tab.0.jpg\",\r\n    \"name\": \"Samsung Galaxy Tab\\u2122\",\r\n    \"snippet\": \"Feel Free to Tab\\u2122. The Samsung Galaxy Tab\\u2122 brings you an ultra-mobile entertainment experience through its 7\\u201d display, high-power processor and Adobe\\u00ae Flash\\u00ae Player compatibility.\"\r\n  },\r\n  {\r\n    \"age\": 9,\r\n    \"carrier\": \"Cellular South\",\r\n    \"id\": \"samsung-showcase-a-galaxy-s-phone\",\r\n    \"imageUrl\": \"img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg\",\r\n    \"name\": \"Samsung Showcase\\u2122 a Galaxy S\\u2122 phone\",\r\n    \"snippet\": \"The Samsung Showcase\\u2122 delivers a cinema quality experience like you\\u2019ve never seen before. Its innovative 4\\u201d touch display technology provides rich picture brilliance, even outdoors\"\r\n  },\r\n  {\r\n    \"age\": 10,\r\n    \"carrier\": \"Verizon\",\r\n    \"id\": \"droid-2-global-by-motorola\",\r\n    \"imageUrl\": \"img/phones/droid-2-global-by-motorola.0.jpg\",\r\n    \"name\": \"DROID\\u2122 2 Global by Motorola\",\r\n    \"snippet\": \"The first smartphone with a 1.2 GHz processor and global capabilities.\"\r\n  },\r\n  {\r\n    \"age\": 11,\r\n    \"carrier\": \"Verizon\",\r\n    \"id\": \"droid-pro-by-motorola\",\r\n    \"imageUrl\": \"img/phones/droid-pro-by-motorola.0.jpg\",\r\n    \"name\": \"DROID\\u2122 Pro by Motorola\",\r\n    \"snippet\": \"The next generation of DOES.\"\r\n  },\r\n  {\r\n    \"age\": 12,\r\n    \"carrier\": \"AT&T\",\r\n    \"id\": \"motorola-bravo-with-motoblur\",\r\n    \"imageUrl\": \"img/phones/motorola-bravo-with-motoblur.0.jpg\",\r\n    \"name\": \"MOTOROLA BRAVO\\u2122 with MOTOBLUR\\u2122\",\r\n    \"snippet\": \"An experience to cheer about.\"\r\n  },\r\n  {\r\n    \"age\": 13,\r\n    \"carrier\": \"T-Mobile\",\r\n    \"id\": \"motorola-defy-with-motoblur\",\r\n    \"imageUrl\": \"img/phones/motorola-defy-with-motoblur.0.jpg\",\r\n    \"name\": \"Motorola DEFY\\u2122 with MOTOBLUR\\u2122\",\r\n    \"snippet\": \"Are you ready for everything life throws your way?\"\r\n  },\r\n  {\r\n    \"age\": 14,\r\n    \"carrier\": \"T-Mobile\",\r\n    \"id\": \"t-mobile-mytouch-4g\",\r\n    \"imageUrl\": \"img/phones/t-mobile-mytouch-4g.0.jpg\",\r\n    \"name\": \"T-Mobile myTouch 4G\",\r\n    \"snippet\": \"The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi.\"\r\n  },\r\n  {\r\n    \"age\": 15,\r\n    \"carrier\": \"US Cellular\",\r\n    \"id\": \"samsung-mesmerize-a-galaxy-s-phone\",\r\n    \"imageUrl\": \"img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg\",\r\n    \"name\": \"Samsung Mesmerize\\u2122 a Galaxy S\\u2122 phone\",\r\n    \"snippet\": \"The Samsung Mesmerize\\u2122 delivers a cinema quality experience like you\\u2019ve never seen before. Its innovative 4\\u201d touch display technology provides rich picture brilliance,even outdoors\"\r\n  },\r\n  {\r\n    \"age\": 16,\r\n    \"carrier\": \"Sprint\",\r\n    \"id\": \"sanyo-zio\",\r\n    \"imageUrl\": \"img/phones/sanyo-zio.0.jpg\",\r\n    \"name\": \"SANYO ZIO\",\r\n    \"snippet\": \"The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value.\"\r\n  },\r\n  {\r\n    \"age\": 17,\r\n    \"id\": \"samsung-transform\",\r\n    \"imageUrl\": \"img/phones/samsung-transform.0.jpg\",\r\n    \"name\": \"Samsung Transform\\u2122\",\r\n    \"snippet\": \"The Samsung Transform\\u2122 brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed \\u201cSprint ID Service Pack\\u201d.\"\r\n  },\r\n  {\r\n    \"age\": 18,\r\n    \"id\": \"t-mobile-g2\",\r\n    \"imageUrl\": \"img/phones/t-mobile-g2.0.jpg\",\r\n    \"name\": \"T-Mobile G2\",\r\n    \"snippet\": \"The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile's new network. Get the information you need, faster than you ever thought possible.\"\r\n  },\r\n  {\r\n    \"age\": 19,\r\n    \"id\": \"motorola-charm-with-motoblur\",\r\n    \"imageUrl\": \"img/phones/motorola-charm-with-motoblur.0.jpg\",\r\n    \"name\": \"Motorola CHARM\\u2122 with MOTOBLUR\\u2122\",\r\n    \"snippet\": \"Motorola CHARM fits easily in your pocket or palm.  Includes MOTOBLUR service.\"\r\n  }\r\n];\r\n\n\n//# sourceURL=webpack:///./frontend/components/phone-page/phone-page.js?");

/***/ })

/******/ });