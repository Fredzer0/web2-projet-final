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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/page-index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/chat-api.js":
/*!********************************!*\
  !*** ./client/src/chat-api.js ***!
  \********************************/
/*! exports provided: signin, signout, register, chatMessageLoop, membersLoop, sendMessage, registerCallbacks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signin\", function() { return signin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signout\", function() { return signout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"register\", function() { return register; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chatMessageLoop\", function() { return chatMessageLoop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"membersLoop\", function() { return membersLoop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendMessage\", function() { return sendMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerCallbacks\", function() { return registerCallbacks; });\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! md5 */ \"./node_modules/md5/md5.js\");\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nlet newMessageCallack = null;\r\nlet memberListUpdateCallback = null;\r\n\r\nconst BASE_API_URL = \"https://apps-de-cours.com/web-chat/server/api\";\r\n\r\nconst findGetParameter = parameterName => {\r\n    var result = null,\r\n        tmp = [];\r\n    location.search\r\n        .substr(1)\r\n        .split(\"&\")\r\n        .forEach(function (item) {\r\n          tmp = item.split(\"=\");\r\n          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);\r\n        });\r\n    return result;\r\n}\r\n\r\nlet k = findGetParameter(\"k\");\r\n\r\nif (k != null) {\r\n    localStorage[\"chat_key\"] = k;\r\n    localStorage[\"username\"] = findGetParameter(\"u\");\r\n    window.location.href = \"chat.html\";\r\n}\r\n\r\nconst signin = formNode => {\r\n    localStorage[\"username\"] = formNode.username.value;\r\n\r\n    let formData = new FormData();\r\n    formData.append('username', formNode.username.value);\r\n    formData.append('password', md5__WEBPACK_IMPORTED_MODULE_0___default()(formNode.password.value));\r\n\r\n    fetch(BASE_API_URL + \"/login\", {\r\n        method: \"POST\",\r\n        body: formData,\r\n    })\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        if (data.length == 32) {\r\n            localStorage[\"chat_key\"] = data;\r\n            window.location.href = \"chat.html?k=\" + localStorage[\"chat_key\"] + \"&u=\" + localStorage[\"username\"];\r\n        }\r\n        else {\r\n            document.querySelector(\"#api-message\").innerText = data;\r\n        }\r\n    });\r\n\r\n    return false;\r\n}\r\n\r\nconst signout = () => {\r\n    let formData = new FormData();\r\n    formData.append('key', localStorage[\"chat_key\"]);\r\n\r\n    fetch(BASE_API_URL + \"/logout\", {\r\n        method: \"POST\",\r\n        body: formData\r\n    })\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        localStorage.removeItem(\"chat_key\");\r\n        window.location.href = \"index.html\";\r\n    });\r\n\r\n    return false;\r\n}\r\n\r\nconst register = formNode => {\r\n    let formData = new FormData();\r\n    formData.append(\"username\", formNode.username.value);\r\n    formData.append(\"password\", md5__WEBPACK_IMPORTED_MODULE_0___default()(formNode.password.value));\r\n    formData.append(\"no\", formNode.no.value);\r\n    formData.append(\"welcomeText\", formNode.welcomeText.value);\r\n    formData.append(\"firstName\", formNode.firstName.value);\r\n    formData.append(\"lastName\", formNode.lastName.value);\r\n\r\n    fetch(BASE_API_URL + \"/register\", {\r\n        method: \"POST\",\r\n        body: formData\r\n    })\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        document.querySelector(\"#api-message\").innerText = data;\r\n    });\r\n\r\n    return false;\r\n}\r\n\r\nconst chatMessageLoop = () => {\r\n    let formData = new FormData();\r\n    formData.append('key', localStorage[\"chat_key\"]);\r\n\r\n    setTimeout(() => {\r\n        fetch(BASE_API_URL + \"/read-messages\", {\r\n            method: \"POST\",\r\n            body: formData\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            if (data instanceof Array) {\r\n                data.forEach(msg => {\r\n                    newMessageCallack(msg.nomUsager, msg.message, msg.prive === \"true\");\r\n                });\r\n\r\n                membersLoop();\r\n            }\r\n            else {\r\n                localStorage.removeItem(\"key\");\r\n                window.location.href = \"index.html\";\r\n            }\r\n        });\r\n    },  1000);\r\n}\r\n\r\nconst membersLoop = () => {\r\n    let formData = new FormData();\r\n    formData.append('key', localStorage[\"chat_key\"]);\r\n\r\n    setTimeout(() => {\r\n        fetch(BASE_API_URL + \"/read-members\", {\r\n            method: \"POST\",\r\n            body: formData\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            if (data instanceof Array) {\r\n                memberListUpdateCallback(data);\r\n                chatMessageLoop();\r\n            }\r\n            else {\r\n                localStorage.removeItem(\"chat_key\");\r\n                window.location.href = \"index.html\";\r\n            }\r\n        });\r\n    },  1000);\r\n}\r\n\r\nconst sendMessage = (event, fieldNode) => {\r\n    if (event.which === 13) {\r\n        let val = fieldNode.value;\r\n        fieldNode.value = \"\";\r\n\r\n        val = val.replace(/\\n+$/, \"\");\r\n\r\n        let formData = new FormData();\r\n        formData.append('key', localStorage[\"chat_key\"]);\r\n        formData.append('message', val);\r\n\r\n        fetch(BASE_API_URL + \"/write-message\", {\r\n            method: \"POST\",\r\n            body: formData\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            newMessageCallack(localStorage[\"username\"], val, val.indexOf(\"/w\") === 0);\r\n        });\r\n    }\r\n\r\n    return false;\r\n}\r\n\r\nconst registerCallbacks = (newMessage, memberListUpdate) => {\r\n    newMessageCallack = newMessage;\r\n    memberListUpdateCallback = memberListUpdate;\r\n}\n\n//# sourceURL=webpack:///./client/src/chat-api.js?");

/***/ }),

/***/ "./client/src/page-index.js":
/*!**********************************!*\
  !*** ./client/src/page-index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chat_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-api */ \"./client/src/chat-api.js\");\n \r\n\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    document.querySelector(\"form\").onsubmit = function () {\r\n        return Object(_chat_api__WEBPACK_IMPORTED_MODULE_0__[\"signin\"])(this);\r\n    }\r\n\r\n});\r\n\r\nvar characterList = [\"url(img/sprites/BinahSprite.png)\", \"url(img/sprites/RolandSprite.png)\", \"url(img/sprites/MalkuthSprite.png)\", \"url(img/sprites/YesodSprite.png)\", \"url(img/sprites/NetzachSprite.png)\",\"url(img/sprites/HodSprite.png)\",\"url(img/sprites/TiperethSprite.png)\",\"url(img/sprites/GeburaSprite.png)\",\"url(img/sprites/ChesedSprite.png)\", \"url(img/sprites/HokmaSprite.png)\"]\r\n\r\nvar Cid = 1;\r\nvar character1 = document.getElementById('background-character1');\r\nvar character2 = document.getElementById('select-character');\r\nvar character3 = document.getElementById('background-character2');\r\nvar node = document.getElementById(\"zone-character\");\r\nvar posX = node.style.marginRight;\r\nvar loop = 0;\r\n\r\nconst flecheGauche = () => {\r\n\r\n    posX += 21;\r\n    loop++;\r\n  \r\n    node.style.marginLeft = posX + \"px\";\r\n    if (loop <= 20 ){\r\n        character1.style.opacity = parseFloat(character1.style.opacity) + 0.03;\r\n        character2.style.opacity = parseFloat(character2.style.opacity) - 0.03;\r\n        character3.style.opacity = parseFloat(character3.style.opacity) - 0.05;\r\n        setTimeout(flecheGauche, 30);\r\n \r\n    }\r\n    else{\r\n        changeCharacterLeft();\r\n        node.style.marginLeft = 0 + \"px\";\r\n        character1.style.opacity = 0.35;\r\n        character2.style.opacity = 1;\r\n        character3.style.opacity = 0.35;\r\n        loop = 0;\r\n        posX = 0;\r\n    }\r\n\r\n}\r\n\r\nconst flecheDroite = () => {\r\n\r\n   \r\n    posX += 20;\r\n    loop++;\r\n  \r\n    node.style.marginRight = posX + \"px\";\r\n    if (loop <= 20 ){\r\n        character1.style.opacity = parseFloat(character1.style.opacity) - 0.05;\r\n        character2.style.opacity = parseFloat(character2.style.opacity) - 0.03;\r\n        character3.style.opacity = parseFloat(character3.style.opacity) + 0.03;\r\n        setTimeout(flecheDroite, 30);\r\n \r\n    }\r\n    else{\r\n        changeCharacterRight();\r\n        node.style.marginRight = 0 + \"px\";\r\n        character1.style.opacity = 0.35;\r\n        character2.style.opacity = 1;\r\n        character3.style.opacity = 0.35;\r\n        loop = 0;\r\n        posX = 0;\r\n    }\r\n}\r\n\r\n\r\nconst changeCharacterRight = () => {\r\n    Cid ++;\r\n\r\n\r\n    if (Cid == characterList.length - 1){\r\n        character1.style.backgroundImage = characterList[Cid -  1];\r\n        character2.style.backgroundImage = characterList[Cid];\r\n        character3.style.backgroundImage = characterList[0];\r\n\r\n    }\r\n    else if (Cid == characterList.length){\r\n        Cid = 0;\r\n        character1.style.backgroundImage = characterList[characterList.length - 1];\r\n        character2.style.backgroundImage = characterList[Cid];\r\n        character3.style.backgroundImage = characterList[Cid + 1];\r\n\r\n    }\r\n    else{\r\n        character1.style.backgroundImage = characterList[Cid - 1];\r\n        character2.style.backgroundImage = characterList[Cid];\r\n        character3.style.backgroundImage = characterList[Cid + 1];\r\n    }\r\n\r\n}\r\n\r\nconst changeCharacterLeft = () => {\r\n    Cid --;\r\n\r\n    if (Cid == 0){\r\n        character1.style.backgroundImage = characterList[characterList.length - 1];\r\n        character2.style.backgroundImage = characterList[Cid];\r\n        character3.style.backgroundImage = characterList[Cid + 1];\r\n\r\n    }\r\n    else if (Cid == -1){\r\n        Cid = characterList.length - 1;\r\n        character1.style.backgroundImage = characterList[Cid - 1];\r\n        character2.style.backgroundImage = characterList[Cid];\r\n        character3.style.backgroundImage = characterList[0];\r\n\r\n    }\r\n    else{\r\n        character1.style.backgroundImage = characterList[Cid - 1];\r\n        character2.style.backgroundImage = characterList[Cid];\r\n        character3.style.backgroundImage = characterList[Cid + 1];\r\n    }\r\n\r\n\r\n\r\n}\r\n\r\nstockage = window.localStorage;\r\n\r\nlocalStorage.setItem(\"character\", Cid);\r\nlocalStorage.setItem(\"background\", document.getElementById(\"background-list\"))\r\n\r\n/*\r\nvar cha\r\n\r\n*/\n\n//# sourceURL=webpack:///./client/src/page-index.js?");

/***/ }),

/***/ "./node_modules/charenc/charenc.js":
/*!*****************************************!*\
  !*** ./node_modules/charenc/charenc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var charenc = {\r\n  // UTF-8 encoding\r\n  utf8: {\r\n    // Convert a string to a byte array\r\n    stringToBytes: function(str) {\r\n      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));\r\n    },\r\n\r\n    // Convert a byte array to a string\r\n    bytesToString: function(bytes) {\r\n      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));\r\n    }\r\n  },\r\n\r\n  // Binary encoding\r\n  bin: {\r\n    // Convert a string to a byte array\r\n    stringToBytes: function(str) {\r\n      for (var bytes = [], i = 0; i < str.length; i++)\r\n        bytes.push(str.charCodeAt(i) & 0xFF);\r\n      return bytes;\r\n    },\r\n\r\n    // Convert a byte array to a string\r\n    bytesToString: function(bytes) {\r\n      for (var str = [], i = 0; i < bytes.length; i++)\r\n        str.push(String.fromCharCode(bytes[i]));\r\n      return str.join('');\r\n    }\r\n  }\r\n};\r\n\r\nmodule.exports = charenc;\r\n\n\n//# sourceURL=webpack:///./node_modules/charenc/charenc.js?");

/***/ }),

/***/ "./node_modules/crypt/crypt.js":
/*!*************************************!*\
  !*** ./node_modules/crypt/crypt.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() {\r\n  var base64map\r\n      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',\r\n\r\n  crypt = {\r\n    // Bit-wise rotation left\r\n    rotl: function(n, b) {\r\n      return (n << b) | (n >>> (32 - b));\r\n    },\r\n\r\n    // Bit-wise rotation right\r\n    rotr: function(n, b) {\r\n      return (n << (32 - b)) | (n >>> b);\r\n    },\r\n\r\n    // Swap big-endian to little-endian and vice versa\r\n    endian: function(n) {\r\n      // If number given, swap endian\r\n      if (n.constructor == Number) {\r\n        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;\r\n      }\r\n\r\n      // Else, assume array and swap all items\r\n      for (var i = 0; i < n.length; i++)\r\n        n[i] = crypt.endian(n[i]);\r\n      return n;\r\n    },\r\n\r\n    // Generate an array of any length of random bytes\r\n    randomBytes: function(n) {\r\n      for (var bytes = []; n > 0; n--)\r\n        bytes.push(Math.floor(Math.random() * 256));\r\n      return bytes;\r\n    },\r\n\r\n    // Convert a byte array to big-endian 32-bit words\r\n    bytesToWords: function(bytes) {\r\n      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)\r\n        words[b >>> 5] |= bytes[i] << (24 - b % 32);\r\n      return words;\r\n    },\r\n\r\n    // Convert big-endian 32-bit words to a byte array\r\n    wordsToBytes: function(words) {\r\n      for (var bytes = [], b = 0; b < words.length * 32; b += 8)\r\n        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);\r\n      return bytes;\r\n    },\r\n\r\n    // Convert a byte array to a hex string\r\n    bytesToHex: function(bytes) {\r\n      for (var hex = [], i = 0; i < bytes.length; i++) {\r\n        hex.push((bytes[i] >>> 4).toString(16));\r\n        hex.push((bytes[i] & 0xF).toString(16));\r\n      }\r\n      return hex.join('');\r\n    },\r\n\r\n    // Convert a hex string to a byte array\r\n    hexToBytes: function(hex) {\r\n      for (var bytes = [], c = 0; c < hex.length; c += 2)\r\n        bytes.push(parseInt(hex.substr(c, 2), 16));\r\n      return bytes;\r\n    },\r\n\r\n    // Convert a byte array to a base-64 string\r\n    bytesToBase64: function(bytes) {\r\n      for (var base64 = [], i = 0; i < bytes.length; i += 3) {\r\n        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];\r\n        for (var j = 0; j < 4; j++)\r\n          if (i * 8 + j * 6 <= bytes.length * 8)\r\n            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));\r\n          else\r\n            base64.push('=');\r\n      }\r\n      return base64.join('');\r\n    },\r\n\r\n    // Convert a base-64 string to a byte array\r\n    base64ToBytes: function(base64) {\r\n      // Remove non-base-64 characters\r\n      base64 = base64.replace(/[^A-Z0-9+\\/]/ig, '');\r\n\r\n      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;\r\n          imod4 = ++i % 4) {\r\n        if (imod4 == 0) continue;\r\n        bytes.push(((base64map.indexOf(base64.charAt(i - 1))\r\n            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))\r\n            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));\r\n      }\r\n      return bytes;\r\n    }\r\n  };\r\n\r\n  module.exports = crypt;\r\n})();\r\n\n\n//# sourceURL=webpack:///./node_modules/crypt/crypt.js?");

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\r\n * Determine if an object is a Buffer\r\n *\r\n * @author   Feross Aboukhadijeh <https://feross.org>\r\n * @license  MIT\r\n */\r\n\r\n// The _isBuffer check is for Safari 5-7 support, because it's missing\r\n// Object.prototype.constructor. Remove this eventually\r\nmodule.exports = function (obj) {\r\n  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)\r\n}\r\n\r\nfunction isBuffer (obj) {\r\n  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\r\n}\r\n\r\n// For Node v0.10 support. Remove this eventually.\r\nfunction isSlowBuffer (obj) {\r\n  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/is-buffer/index.js?");

/***/ }),

/***/ "./node_modules/md5/md5.js":
/*!*********************************!*\
  !*** ./node_modules/md5/md5.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function(){\r\n  var crypt = __webpack_require__(/*! crypt */ \"./node_modules/crypt/crypt.js\"),\r\n      utf8 = __webpack_require__(/*! charenc */ \"./node_modules/charenc/charenc.js\").utf8,\r\n      isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\"),\r\n      bin = __webpack_require__(/*! charenc */ \"./node_modules/charenc/charenc.js\").bin,\r\n\r\n  // The core\r\n  md5 = function (message, options) {\r\n    // Convert to byte array\r\n    if (message.constructor == String)\r\n      if (options && options.encoding === 'binary')\r\n        message = bin.stringToBytes(message);\r\n      else\r\n        message = utf8.stringToBytes(message);\r\n    else if (isBuffer(message))\r\n      message = Array.prototype.slice.call(message, 0);\r\n    else if (!Array.isArray(message) && message.constructor !== Uint8Array)\r\n      message = message.toString();\r\n    // else, assume byte array already\r\n\r\n    var m = crypt.bytesToWords(message),\r\n        l = message.length * 8,\r\n        a =  1732584193,\r\n        b = -271733879,\r\n        c = -1732584194,\r\n        d =  271733878;\r\n\r\n    // Swap endian\r\n    for (var i = 0; i < m.length; i++) {\r\n      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |\r\n             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;\r\n    }\r\n\r\n    // Padding\r\n    m[l >>> 5] |= 0x80 << (l % 32);\r\n    m[(((l + 64) >>> 9) << 4) + 14] = l;\r\n\r\n    // Method shortcuts\r\n    var FF = md5._ff,\r\n        GG = md5._gg,\r\n        HH = md5._hh,\r\n        II = md5._ii;\r\n\r\n    for (var i = 0; i < m.length; i += 16) {\r\n\r\n      var aa = a,\r\n          bb = b,\r\n          cc = c,\r\n          dd = d;\r\n\r\n      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);\r\n      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);\r\n      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);\r\n      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);\r\n      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);\r\n      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);\r\n      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);\r\n      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);\r\n      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);\r\n      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);\r\n      c = FF(c, d, a, b, m[i+10], 17, -42063);\r\n      b = FF(b, c, d, a, m[i+11], 22, -1990404162);\r\n      a = FF(a, b, c, d, m[i+12],  7,  1804603682);\r\n      d = FF(d, a, b, c, m[i+13], 12, -40341101);\r\n      c = FF(c, d, a, b, m[i+14], 17, -1502002290);\r\n      b = FF(b, c, d, a, m[i+15], 22,  1236535329);\r\n\r\n      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);\r\n      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);\r\n      c = GG(c, d, a, b, m[i+11], 14,  643717713);\r\n      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);\r\n      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);\r\n      d = GG(d, a, b, c, m[i+10],  9,  38016083);\r\n      c = GG(c, d, a, b, m[i+15], 14, -660478335);\r\n      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);\r\n      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);\r\n      d = GG(d, a, b, c, m[i+14],  9, -1019803690);\r\n      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);\r\n      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);\r\n      a = GG(a, b, c, d, m[i+13],  5, -1444681467);\r\n      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);\r\n      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);\r\n      b = GG(b, c, d, a, m[i+12], 20, -1926607734);\r\n\r\n      a = HH(a, b, c, d, m[i+ 5],  4, -378558);\r\n      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);\r\n      c = HH(c, d, a, b, m[i+11], 16,  1839030562);\r\n      b = HH(b, c, d, a, m[i+14], 23, -35309556);\r\n      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);\r\n      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);\r\n      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);\r\n      b = HH(b, c, d, a, m[i+10], 23, -1094730640);\r\n      a = HH(a, b, c, d, m[i+13],  4,  681279174);\r\n      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);\r\n      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);\r\n      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);\r\n      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);\r\n      d = HH(d, a, b, c, m[i+12], 11, -421815835);\r\n      c = HH(c, d, a, b, m[i+15], 16,  530742520);\r\n      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);\r\n\r\n      a = II(a, b, c, d, m[i+ 0],  6, -198630844);\r\n      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);\r\n      c = II(c, d, a, b, m[i+14], 15, -1416354905);\r\n      b = II(b, c, d, a, m[i+ 5], 21, -57434055);\r\n      a = II(a, b, c, d, m[i+12],  6,  1700485571);\r\n      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);\r\n      c = II(c, d, a, b, m[i+10], 15, -1051523);\r\n      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);\r\n      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);\r\n      d = II(d, a, b, c, m[i+15], 10, -30611744);\r\n      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);\r\n      b = II(b, c, d, a, m[i+13], 21,  1309151649);\r\n      a = II(a, b, c, d, m[i+ 4],  6, -145523070);\r\n      d = II(d, a, b, c, m[i+11], 10, -1120210379);\r\n      c = II(c, d, a, b, m[i+ 2], 15,  718787259);\r\n      b = II(b, c, d, a, m[i+ 9], 21, -343485551);\r\n\r\n      a = (a + aa) >>> 0;\r\n      b = (b + bb) >>> 0;\r\n      c = (c + cc) >>> 0;\r\n      d = (d + dd) >>> 0;\r\n    }\r\n\r\n    return crypt.endian([a, b, c, d]);\r\n  };\r\n\r\n  // Auxiliary functions\r\n  md5._ff  = function (a, b, c, d, x, s, t) {\r\n    var n = a + (b & c | ~b & d) + (x >>> 0) + t;\r\n    return ((n << s) | (n >>> (32 - s))) + b;\r\n  };\r\n  md5._gg  = function (a, b, c, d, x, s, t) {\r\n    var n = a + (b & d | c & ~d) + (x >>> 0) + t;\r\n    return ((n << s) | (n >>> (32 - s))) + b;\r\n  };\r\n  md5._hh  = function (a, b, c, d, x, s, t) {\r\n    var n = a + (b ^ c ^ d) + (x >>> 0) + t;\r\n    return ((n << s) | (n >>> (32 - s))) + b;\r\n  };\r\n  md5._ii  = function (a, b, c, d, x, s, t) {\r\n    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;\r\n    return ((n << s) | (n >>> (32 - s))) + b;\r\n  };\r\n\r\n  // Package private blocksize\r\n  md5._blocksize = 16;\r\n  md5._digestsize = 16;\r\n\r\n  module.exports = function (message, options) {\r\n    if (message === undefined || message === null)\r\n      throw new Error('Illegal argument ' + message);\r\n\r\n    var digestbytes = crypt.wordsToBytes(md5(message, options));\r\n    return options && options.asBytes ? digestbytes :\r\n        options && options.asString ? bin.bytesToString(digestbytes) :\r\n        crypt.bytesToHex(digestbytes);\r\n  };\r\n\r\n})();\r\n\n\n//# sourceURL=webpack:///./node_modules/md5/md5.js?");

/***/ })

/******/ });