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
exports.switchActivePage = exports.focusLatestPage = exports.setTimeout = exports.takeScreenshot = exports.goForward = exports.goBack = exports.goTo = exports.closeBrowser = void 0;
var playwirght_util_1 = require("./playwirght-util");
var response_util_1 = require("./response-util");
function closeBrowser(callback, browser) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    playwirght_util_1.exists(browser, callback, 'Tried to close browser but none was open');
                    return [4 /*yield*/, browser.close()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.closeBrowser = closeBrowser;
function goTo(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = call.request.getUrl();
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'goto', url)];
                case 1:
                    _a.sent();
                    callback(null, response_util_1.emptyWithLog("Succesfully opened URL " + url));
                    return [2 /*return*/];
            }
        });
    });
}
exports.goTo = goTo;
function goBack(callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'goBack')];
                case 1:
                    _a.sent();
                    callback(null, response_util_1.emptyWithLog('Did Go Back'));
                    return [2 /*return*/];
            }
        });
    });
}
exports.goBack = goBack;
function goForward(callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'goForward')];
                case 1:
                    _a.sent();
                    callback(null, response_util_1.emptyWithLog('Did Go Forward'));
                    return [2 /*return*/];
            }
        });
    });
}
exports.goForward = goForward;
function takeScreenshot(call, callback, page) {
    return __awaiter(this, void 0, void 0, function () {
        var path;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    path = call.request.getPath() + '.png';
                    return [4 /*yield*/, playwirght_util_1.invokePlaywright(page, callback, 'screenshot', { path: path })];
                case 1:
                    _a.sent();
                    callback(null, response_util_1.emptyWithLog('Succesfully took screenshot'));
                    return [2 /*return*/];
            }
        });
    });
}
exports.takeScreenshot = takeScreenshot;
function setTimeout(call, callback, context) {
    playwirght_util_1.exists(context, callback, 'Tried to set timeout, no open browser');
    var timeout = call.request.getTimeout();
    context.setDefaultTimeout(timeout);
    callback(null, response_util_1.emptyWithLog("Set timeout to: " + timeout));
}
exports.setTimeout = setTimeout;
function switchPage(browserState, pages, index, callback) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log("Changing active page to " + index);
            try {
                browserState.page = pages[index];
            }
            catch (e) {
                callback(e, null);
            }
            return [2 /*return*/];
        });
    });
}
function focusLatestPage(call, callback, browserState) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            playwirght_util_1.exists(browserState, callback, 'Tried to set automatical page focusing, no open browser');
            browserState.context.on('page', function (page) {
                browserState.page = page;
            });
            return [2 /*return*/];
        });
    });
}
exports.focusLatestPage = focusLatestPage;
function switchActivePage(call, callback, browserState) {
    return __awaiter(this, void 0, void 0, function () {
        var index, pages, e_1, mapped, pageList, message, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    playwirght_util_1.exists(browserState, callback, "Tried to switch active page but browser wasn't open");
                    index = call.request.getIndex();
                    pages = browserState.context.pages();
                    if (!pages[index]) return [3 /*break*/, 1];
                    switchPage(browserState, pages, index, callback);
                    return [3 /*break*/, 4];
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, browserState.context.waitForEvent('page')];
                case 2:
                    _a.sent();
                    switchPage(browserState, pages, index, callback);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    // TODO: remove before merging or put behind --debug flag, debug prints
                    console.log("Existing contexts: " + browserState.browser.contexts().length);
                    console.log("Existing pages: " + pages.length);
                    mapped = pages.map(function (p) { return p.url(); });
                    pageList = "Pages in current context: " + mapped.join(',');
                    message = "No page for index " + index + ". \n " + pageList;
                    error = new Error(message);
                    callback(error, null);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.switchActivePage = switchActivePage;
//# sourceMappingURL=browser-control.js.map