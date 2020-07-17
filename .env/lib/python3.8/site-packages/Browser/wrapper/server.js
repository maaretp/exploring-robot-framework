"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.PlaywrightServer = exports.BrowserState = void 0;
var playwright_1 = require("playwright");
var playwright_pb_1 = require("./generated/playwright_pb");
var browserControl = __importStar(require("./browser-control"));
var evaluation = __importStar(require("./evaluation"));
var getters = __importStar(require("./getters"));
var interaction = __importStar(require("./interaction"));
var response_util_1 = require("./response-util");
// Can't have an async constructor, this is a workaround
function createBrowserState(browserType, headless, hideRfBrowser) {
    return __awaiter(this, void 0, void 0, function () {
        var browser, context, page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(browserType === 'firefox')) return [3 /*break*/, 2];
                    return [4 /*yield*/, playwright_1.firefox.launch({ headless: headless })];
                case 1:
                    browser = _a.sent();
                    return [3 /*break*/, 7];
                case 2:
                    if (!(browserType === 'chromium')) return [3 /*break*/, 4];
                    return [4 /*yield*/, playwright_1.chromium.launch({ headless: headless })];
                case 3:
                    browser = _a.sent();
                    return [3 /*break*/, 7];
                case 4:
                    if (!(browserType === 'webkit')) return [3 /*break*/, 6];
                    return [4 /*yield*/, playwright_1.webkit.launch({ headless: headless })];
                case 5:
                    browser = _a.sent();
                    return [3 /*break*/, 7];
                case 6: throw new Error('unsupported browser');
                case 7: return [4 /*yield*/, browser.newContext()];
                case 8:
                    context = _a.sent();
                    if (!hideRfBrowser) {
                        context.addInitScript(function () {
                            window.__SET_RFBROWSER__ = function (state) {
                                window.__RFBROWSER__ = state;
                                return state;
                            };
                        });
                    }
                    context.setDefaultTimeout(parseFloat(process.env.TIMEOUT || '10000'));
                    return [4 /*yield*/, context.newPage()];
                case 9:
                    page = _a.sent();
                    return [2 /*return*/, new BrowserState(browser, context, page)];
            }
        });
    });
}
var BrowserState = /** @class */ (function () {
    function BrowserState(browser, context, page) {
        this.browser = browser;
        this.context = context;
        this.page = page;
    }
    return BrowserState;
}());
exports.BrowserState = BrowserState;
var PlaywrightServer = /** @class */ (function () {
    function PlaywrightServer() {
    }
    PlaywrightServer.prototype.closeBrowser = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                browserControl.closeBrowser(callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.browser);
                this.browserState = undefined;
                callback(null, response_util_1.emptyWithLog('Closed browser'));
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.openBrowser = function (call, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var browserType, url, headless, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        browserType = call.request.getBrowser();
                        url = call.request.getUrl();
                        headless = call.request.getHeadless();
                        console.log('Open browser: ' + browserType);
                        _a = this;
                        return [4 /*yield*/, createBrowserState(browserType, headless, false)];
                    case 1:
                        _a.browserState = _b.sent();
                        if (!url) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.browserState.page.goto(url).catch(function (e) { return callback(null, e); })];
                    case 2:
                        _b.sent();
                        callback(null, response_util_1.emptyWithLog("Successfully opened browser " + browserType + " to " + url + "."));
                        return [3 /*break*/, 4];
                    case 3:
                        callback(null, response_util_1.emptyWithLog("Successfully opened browser " + browserType + "."));
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PlaywrightServer.prototype.switchActivePage = function (call, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                browserControl.switchActivePage(call, callback, this.browserState);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.focusLatestPage = function (call, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                browserControl.focusLatestPage(call, callback, this.browserState);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.goTo = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                browserControl.goTo(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.goBack = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                browserControl.goBack(callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.goForward = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                browserControl.goForward(callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.takeScreenshot = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                browserControl.takeScreenshot(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.setTimeout = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                browserControl.setTimeout(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.context);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.getTitle = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                getters.getTitle(callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.getUrl = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                getters.getUrl(callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.getTextContent = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                getters.getTextContent(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.getSelectContent = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                getters.getSelectContent(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.getDomProperty = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                getters.getDomProperty(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.getBoolProperty = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                getters.getBoolProperty(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.selectOption = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                interaction.selectOption(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.deselectOption = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                interaction.deSelectOption(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.inputText = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                interaction.inputText(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.typeText = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                interaction.typeText(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.fillText = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                interaction.fillText(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.clearText = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                interaction.clearText(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.press = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                interaction.press(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.click = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                interaction.click(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.clickWithOptions = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                interaction.clickWithOptions(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.focus = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                interaction.focus(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.checkCheckbox = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                interaction.checkCheckbox(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.uncheckCheckbox = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                interaction.uncheckCheckbox(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.addStyleTag = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                evaluation.addStyleTag(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.waitForElementsState = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                evaluation.waitForElementState(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.executeJavascriptOnPage = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                evaluation.executeJavascriptOnPage(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.getPageState = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                evaluation.getPageState(callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.health = function (call, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                response = new playwright_pb_1.Response.String();
                response.setBody('OK');
                callback(null, response);
                return [2 /*return*/];
            });
        });
    };
    PlaywrightServer.prototype.highlightElements = function (call, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                evaluation.highlightElements(call, callback, (_a = this.browserState) === null || _a === void 0 ? void 0 : _a.page);
                return [2 /*return*/];
            });
        });
    };
    return PlaywrightServer;
}());
exports.PlaywrightServer = PlaywrightServer;
//# sourceMappingURL=server.js.map