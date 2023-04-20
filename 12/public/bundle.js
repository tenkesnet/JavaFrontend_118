/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Program.ts":
/*!************************!*\
  !*** ./src/Program.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Program": () => (/* binding */ Program)
/* harmony export */ });
class Program {
    constructor(nev, logger) {
        this.programName = "RobotWarrior";
        this.logger = logger;
        this.programName = nev;
        this.currentVerzio = Program.nextVersion;
        this.nextVersion();
        this.logger.logDebug(`Létrejött a ${this.programName} program ${this.currentVerzio} verziója`);
    }
    toString() {
        return `${this.programName}, verzio: ${this.currentVerzio}`;
    }
    nextVersion() {
        Program.nextVersion++;
    }
    log(msg) {
        this.logger.logInfo(msg);
    }
    setLogger(logger) {
        this.logger = logger;
    }
}
Program.nextVersion = 1;



/***/ }),

/***/ "./src/helpers/Logger.ts":
/*!*******************************!*\
  !*** ./src/helpers/Logger.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logger": () => (/* binding */ Logger)
/* harmony export */ });
class Logger {
    constructor(selector) {
        this.logDiv = document.querySelector(`#${selector}`);
    }
    logInfo(msg) {
        var _a;
        const logrender = document.createElement("div");
        logrender.classList.add("info");
        logrender.textContent = this.createMessage(msg);
        (_a = this.logDiv) === null || _a === void 0 ? void 0 : _a.appendChild(logrender);
    }
    logError(msg) {
        var _a;
        const logrender = document.createElement("div");
        logrender.classList.add("error");
        logrender.textContent = this.createMessage(msg);
        (_a = this.logDiv) === null || _a === void 0 ? void 0 : _a.appendChild(logrender);
    }
    logDebug(msg) {
        var _a;
        const logrender = document.createElement("div");
        logrender.classList.add("debug");
        logrender.textContent = this.createMessage(msg);
        (_a = this.logDiv) === null || _a === void 0 ? void 0 : _a.appendChild(logrender);
    }
    createMessage(msg) {
        const now = new Date();
        return `[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}]: ${msg}`;
    }
}


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Program */ "./src/Program.ts");
/* harmony import */ var _helpers_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/Logger */ "./src/helpers/Logger.ts");


console.log("Hello 12. óra");
let mainProgram = new _Program__WEBPACK_IMPORTED_MODULE_0__.Program("RobotWarrior", new _helpers_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger("left"));
let mainProgram2 = new _Program__WEBPACK_IMPORTED_MODULE_0__.Program("MásodikWarrior", new _helpers_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger("body"));
let mellekProgram = new _Program__WEBPACK_IMPORTED_MODULE_0__.Program("MásodikWarrior", new _helpers_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger("log"));
let logInfo = new _helpers_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger("log");
mainProgram.setLogger(logInfo);
mainProgram2.setLogger(logInfo);
mellekProgram.setLogger(logInfo);
mainProgram.log("mainProgram");
mainProgram2.log("másodikProgram");
mellekProgram.log("mellékProgram");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map