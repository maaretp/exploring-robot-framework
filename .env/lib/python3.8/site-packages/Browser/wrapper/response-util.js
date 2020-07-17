"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsResponse = exports.boolResponse = exports.stringResponse = exports.emptyWithLog = void 0;
var playwright_pb_1 = require("./generated/playwright_pb");
function emptyWithLog(text) {
    var response = new playwright_pb_1.Response.Empty();
    response.setLog(text);
    return response;
}
exports.emptyWithLog = emptyWithLog;
function stringResponse(body) {
    var response = new playwright_pb_1.Response.String();
    response.setBody(body);
    return response;
}
exports.stringResponse = stringResponse;
function boolResponse(value) {
    var response = new playwright_pb_1.Response.Bool();
    response.setBody(value);
    return response;
}
exports.boolResponse = boolResponse;
function jsResponse(result) {
    var response = new playwright_pb_1.Response.JavascriptExecutionResult();
    response.setResult(JSON.stringify(result));
    return response;
}
exports.jsResponse = jsResponse;
//# sourceMappingURL=response-util.js.map