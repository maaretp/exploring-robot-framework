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
exports.uncheckCheckbox = exports.checkCheckbox = exports.focus = exports.clickWithOptions = exports.click = exports.press = exports.clearText = exports.fillText = exports.typeText = exports.inputText = exports.deSelectOption = exports.selectOption = void 0;
var playwirght_util_1 = require("./playwirght-util");
var response_util_1 = require("./response-util");
function selectOption(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var selector, matcher, result, error, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selector = call.request.getSelector();
                    matcher = JSON.parse(call.request.getMatcherjson());
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'selectOption', selector, matcher)];
                case 1:
                    result = _a.sent();
                    if (result.length == 0) {
                        console.log("Couldn't select any options");
                        error = new Error("No options matched " + matcher);
                        callback(error, null);
                    }
                    response = response_util_1.emptyWithLog("Selected options " + result + " in element " + selector);
                    callback(null, response);
                    return [2 /*return*/];
            }
        });
    });
}
exports.selectOption = selectOption;
function deSelectOption(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var selector;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selector = call.request.getSelector();
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'selectOption', selector, [])];
                case 1:
                    _a.sent();
                    callback(null, response_util_1.emptyWithLog("Deselected options in element " + selector));
                    return [2 /*return*/];
            }
        });
    });
}
exports.deSelectOption = deSelectOption;
function inputText(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var inputText, selector, type, methodName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    inputText = call.request.getInput();
                    selector = call.request.getSelector();
                    type = call.request.getType();
                    methodName = type ? 'type' : 'fill';
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, methodName, selector, inputText)];
                case 1:
                    _a.sent();
                    callback(null, response_util_1.emptyWithLog('Input text: ' + inputText));
                    return [2 /*return*/];
            }
        });
    });
}
exports.inputText = inputText;
function typeText(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var selector, text, delay, clear;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selector = call.request.getSelector();
                    text = call.request.getText();
                    delay = call.request.getDelay();
                    clear = call.request.getClear();
                    if (!clear) return [3 /*break*/, 2];
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'fill', selector, '')];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'type', selector, text, { delay: delay })];
                case 3:
                    _a.sent();
                    callback(null, response_util_1.emptyWithLog('Typed text: ' + text));
                    return [2 /*return*/];
            }
        });
    });
}
exports.typeText = typeText;
function fillText(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var selector, text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selector = call.request.getSelector();
                    text = call.request.getText();
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'fill', selector, text)];
                case 1:
                    _a.sent();
                    callback(null, response_util_1.emptyWithLog('Fill text: ' + text));
                    return [2 /*return*/];
            }
        });
    });
}
exports.fillText = fillText;
function clearText(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var selector;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selector = call.request.getSelector();
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'fill', selector, '')];
                case 1:
                    _a.sent();
                    callback(null, response_util_1.emptyWithLog('Text field cleared.'));
                    return [2 /*return*/];
            }
        });
    });
}
exports.clearText = clearText;
function press(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var selector, keyList, _i, keyList_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selector = call.request.getSelector();
                    keyList = call.request.getKeyList();
                    _i = 0, keyList_1 = keyList;
                    _a.label = 1;
                case 1:
                    if (!(_i < keyList_1.length)) return [3 /*break*/, 4];
                    i = keyList_1[_i];
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'press', selector, i)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    callback(null, response_util_1.emptyWithLog('Pressed keys: ' + keyList));
                    return [2 /*return*/];
            }
        });
    });
}
exports.press = press;
function click(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var selector;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selector = call.request.getSelector();
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'click', selector)];
                case 1:
                    _a.sent();
                    callback(null, response_util_1.emptyWithLog('Clicked element: ' + selector));
                    return [2 /*return*/];
            }
        });
    });
}
exports.click = click;
function clickWithOptions(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var selector, options;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selector = call.request.getSelector();
                    options = call.request.getOptions();
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'click', selector, JSON.parse(options))];
                case 1:
                    _a.sent();
                    callback(null, response_util_1.emptyWithLog('Clicked element: ' + selector + ' \nWith options: ' + options));
                    return [2 /*return*/];
            }
        });
    });
}
exports.clickWithOptions = clickWithOptions;
function focus(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var selector;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selector = call.request.getSelector();
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'focus', selector)];
                case 1:
                    _a.sent();
                    callback(null, response_util_1.emptyWithLog('Focused element: ' + selector));
                    return [2 /*return*/];
            }
        });
    });
}
exports.focus = focus;
function checkCheckbox(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var selector;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selector = call.request.getSelector();
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'check', selector)];
                case 1:
                    _a.sent();
                    callback(null, response_util_1.emptyWithLog('Checked checkbox: ' + selector));
                    return [2 /*return*/];
            }
        });
    });
}
exports.checkCheckbox = checkCheckbox;
function uncheckCheckbox(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var selector;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selector = call.request.getSelector();
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'uncheck', selector)];
                case 1:
                    _a.sent();
                    callback(null, response_util_1.emptyWithLog('Unchecked checkbox: ' + selector));
                    return [2 /*return*/];
            }
        });
    });
}
exports.uncheckCheckbox = uncheckCheckbox;
//# sourceMappingURL=interaction.js.map