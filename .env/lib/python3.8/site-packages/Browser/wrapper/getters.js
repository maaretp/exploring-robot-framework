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
exports.getBoolProperty = exports.getDomProperty = exports.getSelectContent = exports.getTextContent = exports.getUrl = exports.getTitle = void 0;
var playwright_pb_1 = require("./generated/playwright_pb");
var playwirght_util_1 = require("./playwirght-util");
var response_util_1 = require("./response-util");
function getTitle(callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var title;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'title')];
                case 1:
                    title = _a.sent();
                    callback(null, response_util_1.stringResponse(title));
                    return [2 /*return*/];
            }
        });
    });
}
exports.getTitle = getTitle;
function getUrl(callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'url')];
                case 1:
                    url = _a.sent();
                    callback(null, response_util_1.stringResponse(url));
                    return [2 /*return*/];
            }
        });
    });
}
exports.getUrl = getUrl;
function getTextContent(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var selector, content;
        return __generator(this, function (_a) {
            selector = call.request.getSelector();
            content = playwirght_util_1.invokePlaywright(page, callback, 'textContent', selector);
            callback(null, response_util_1.stringResponse((content === null || content === void 0 ? void 0 : content.toString()) || ''));
            return [2 /*return*/];
        });
    });
}
exports.getTextContent = getTextContent;
function getSelectContent(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var selector, content, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selector = call.request.getSelector();
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, '$$eval', selector + ' option', function (elements) {
                            return elements.map(function (elem) { return [elem.label, elem.value, elem.selected]; });
                        })];
                case 1:
                    content = _a.sent();
                    response = new playwright_pb_1.Response.Select();
                    content.forEach(function (option) {
                        var _a = [option[0], option[1], option[2]], label = _a[0], value = _a[1], selected = _a[2];
                        var entry = new playwright_pb_1.SelectEntry();
                        entry.setLabel(label);
                        entry.setValue(value);
                        entry.setSelected(selected);
                        response.addEntry(entry);
                    });
                    callback(null, response);
                    return [2 /*return*/];
            }
        });
    });
}
exports.getSelectContent = getSelectContent;
function getDomProperty(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getProperty(call, callback, page)];
                case 1:
                    content = _a.sent();
                    callback(null, response_util_1.stringResponse(content));
                    return [2 /*return*/];
            }
        });
    });
}
exports.getDomProperty = getDomProperty;
function getBoolProperty(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getProperty(call, callback, page)];
                case 1:
                    content = _a.sent();
                    callback(null, response_util_1.boolResponse(content || false));
                    return [2 /*return*/];
            }
        });
    });
}
exports.getBoolProperty = getBoolProperty;
function getProperty(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var selector, element, propertyName, property, content, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selector = call.request.getSelector();
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, '$', selector)];
                case 1:
                    element = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    propertyName = call.request.getProperty();
                    return [4 /*yield*/, element.getProperty(propertyName)];
                case 3:
                    property = _a.sent();
                    return [4 /*yield*/, property.jsonValue()];
                case 4:
                    content = _a.sent();
                    console.log("Retrieved dom property for element " + selector + " containing " + content);
                    return [2 /*return*/, content];
                case 5:
                    e_1 = _a.sent();
                    callback(e_1, null);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=getters.js.map