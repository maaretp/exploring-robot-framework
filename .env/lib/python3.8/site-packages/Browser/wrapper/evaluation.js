"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.highlightElements = exports.addStyleTag = exports.waitForElementState = exports.getPageState = exports.executeJavascriptOnPage = void 0;
var playwirght_util_1 = require("./playwirght-util");
var response_util_1 = require("./response-util");
function executeJavascriptOnPage(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'evaluate', call.request.getScript())];
                case 1:
                    result = _a.sent();
                    callback(null, response_util_1.jsResponse(result));
                    return [2 /*return*/];
            }
        });
    });
}
exports.executeJavascriptOnPage = executeJavascriptOnPage;
function getPageState(callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'evaluate', function () { return window.__RFBROWSER__; })];
                case 1:
                    result = _a.sent();
                    callback(null, response_util_1.jsResponse(result));
                    return [2 /*return*/];
            }
        });
    });
}
exports.getPageState = getPageState;
function waitForElementState(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var selector, options;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selector = call.request.getSelector();
                    options = JSON.parse(call.request.getOptions());
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'waitForSelector', selector, options)];
                case 1:
                    _a.sent();
                    callback(null, response_util_1.emptyWithLog('Wait for Element with selector: ' + selector));
                    return [2 /*return*/];
            }
        });
    });
}
exports.waitForElementState = waitForElementState;
function addStyleTag(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    content = call.request.getContent();
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'addStyleTag', { content: content })];
                case 1:
                    _a.sent();
                    callback(null, response_util_1.emptyWithLog('added Style: ' + content));
                    return [2 /*return*/];
            }
        });
    });
}
exports.addStyleTag = addStyleTag;
function highlightElements(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var selector, duration, highlighter;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selector = call.request.getSelector();
                    duration = call.request.getDuration();
                    highlighter = function (elements, duration) {
                        elements.forEach(function (e) {
                            var d = document.createElement('div');
                            d.appendChild(document.createTextNode(''));
                            d.style.position = 'fixed';
                            var rect = e.getBoundingClientRect();
                            d.style.top = '' + rect.top + 'px';
                            d.style.left = '' + rect.left + 'px';
                            d.style.width = '' + rect.width + 'px';
                            d.style.height = '' + rect.height + 'px';
                            d.style.border = '1px solid red';
                            document.body.appendChild(d);
                            setTimeout(function () {
                                d.remove();
                            }, duration);
                        });
                    };
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, '$$eval', selector, highlighter, duration)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.highlightElements = highlightElements;
//# sourceMappingURL=evaluation.js.map