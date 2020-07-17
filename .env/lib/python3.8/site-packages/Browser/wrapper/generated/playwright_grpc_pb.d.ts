// package: 
// file: playwright.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as playwright_pb from "./playwright_pb";

interface IPlaywrightService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    takeScreenshot: IPlaywrightService_ITakeScreenshot;
    closeBrowser: IPlaywrightService_ICloseBrowser;
    goTo: IPlaywrightService_IGoTo;
    goBack: IPlaywrightService_IGoBack;
    goForward: IPlaywrightService_IGoForward;
    getTitle: IPlaywrightService_IGetTitle;
    getElementCount: IPlaywrightService_IGetElementCount;
    inputText: IPlaywrightService_IInputText;
    typeText: IPlaywrightService_ITypeText;
    fillText: IPlaywrightService_IFillText;
    clearText: IPlaywrightService_IClearText;
    getDomProperty: IPlaywrightService_IGetDomProperty;
    getBoolProperty: IPlaywrightService_IGetBoolProperty;
    getTextContent: IPlaywrightService_IGetTextContent;
    getUrl: IPlaywrightService_IGetUrl;
    click: IPlaywrightService_IClick;
    press: IPlaywrightService_IPress;
    getSelectContent: IPlaywrightService_IGetSelectContent;
    selectOption: IPlaywrightService_ISelectOption;
    deselectOption: IPlaywrightService_IDeselectOption;
    checkCheckbox: IPlaywrightService_ICheckCheckbox;
    uncheckCheckbox: IPlaywrightService_IUncheckCheckbox;
    health: IPlaywrightService_IHealth;
    setTimeout: IPlaywrightService_ISetTimeout;
    addStyleTag: IPlaywrightService_IAddStyleTag;
    highlightElements: IPlaywrightService_IHighlightElements;
    clickWithOptions: IPlaywrightService_IClickWithOptions;
    focus: IPlaywrightService_IFocus;
    waitForElementsState: IPlaywrightService_IWaitForElementsState;
    executeJavascriptOnPage: IPlaywrightService_IExecuteJavascriptOnPage;
    getPageState: IPlaywrightService_IGetPageState;
    switchActivePage: IPlaywrightService_ISwitchActivePage;
    autoActivatePages: IPlaywrightService_IAutoActivatePages;
    switchContext: IPlaywrightService_ISwitchContext;
    newPage: IPlaywrightService_INewPage;
    newContext: IPlaywrightService_INewContext;
    newBrowser: IPlaywrightService_INewBrowser;
}

interface IPlaywrightService_ITakeScreenshot extends grpc.MethodDefinition<playwright_pb.Request.ScreenshotPath, playwright_pb.Response.String> {
    path: string; // "/.Playwright/TakeScreenshot"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.ScreenshotPath>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.ScreenshotPath>;
    responseSerialize: grpc.serialize<playwright_pb.Response.String>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.String>;
}
interface IPlaywrightService_ICloseBrowser extends grpc.MethodDefinition<playwright_pb.Request.Empty, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/CloseBrowser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.Empty>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.Empty>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IGoTo extends grpc.MethodDefinition<playwright_pb.Request.Url, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/GoTo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.Url>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.Url>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IGoBack extends grpc.MethodDefinition<playwright_pb.Request.Url, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/GoBack"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.Url>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.Url>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IGoForward extends grpc.MethodDefinition<playwright_pb.Request.Url, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/GoForward"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.Url>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.Url>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IGetTitle extends grpc.MethodDefinition<playwright_pb.Request.Empty, playwright_pb.Response.String> {
    path: string; // "/.Playwright/GetTitle"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.Empty>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.Empty>;
    responseSerialize: grpc.serialize<playwright_pb.Response.String>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.String>;
}
interface IPlaywrightService_IGetElementCount extends grpc.MethodDefinition<playwright_pb.Request.ElementSelector, playwright_pb.Response.Int> {
    path: string; // "/.Playwright/GetElementCount"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.ElementSelector>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.ElementSelector>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Int>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Int>;
}
interface IPlaywrightService_IInputText extends grpc.MethodDefinition<playwright_pb.Request.TextInput, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/InputText"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.TextInput>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.TextInput>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_ITypeText extends grpc.MethodDefinition<playwright_pb.Request.TypeText, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/TypeText"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.TypeText>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.TypeText>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IFillText extends grpc.MethodDefinition<playwright_pb.Request.FillText, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/FillText"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.FillText>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.FillText>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IClearText extends grpc.MethodDefinition<playwright_pb.Request.ClearText, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/ClearText"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.ClearText>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.ClearText>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IGetDomProperty extends grpc.MethodDefinition<playwright_pb.Request.ElementProperty, playwright_pb.Response.String> {
    path: string; // "/.Playwright/GetDomProperty"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.ElementProperty>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.ElementProperty>;
    responseSerialize: grpc.serialize<playwright_pb.Response.String>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.String>;
}
interface IPlaywrightService_IGetBoolProperty extends grpc.MethodDefinition<playwright_pb.Request.ElementProperty, playwright_pb.Response.Bool> {
    path: string; // "/.Playwright/GetBoolProperty"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.ElementProperty>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.ElementProperty>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Bool>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Bool>;
}
interface IPlaywrightService_IGetTextContent extends grpc.MethodDefinition<playwright_pb.Request.ElementSelector, playwright_pb.Response.String> {
    path: string; // "/.Playwright/GetTextContent"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.ElementSelector>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.ElementSelector>;
    responseSerialize: grpc.serialize<playwright_pb.Response.String>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.String>;
}
interface IPlaywrightService_IGetUrl extends grpc.MethodDefinition<playwright_pb.Request.Empty, playwright_pb.Response.String> {
    path: string; // "/.Playwright/GetUrl"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.Empty>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.Empty>;
    responseSerialize: grpc.serialize<playwright_pb.Response.String>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.String>;
}
interface IPlaywrightService_IClick extends grpc.MethodDefinition<playwright_pb.Request.ElementSelector, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/Click"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.ElementSelector>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.ElementSelector>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IPress extends grpc.MethodDefinition<playwright_pb.Request.PressKeys, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/Press"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.PressKeys>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.PressKeys>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IGetSelectContent extends grpc.MethodDefinition<playwright_pb.Request.ElementSelector, playwright_pb.Response.Select> {
    path: string; // "/.Playwright/GetSelectContent"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.ElementSelector>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.ElementSelector>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Select>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Select>;
}
interface IPlaywrightService_ISelectOption extends grpc.MethodDefinition<playwright_pb.Request.SelectElementSelector, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/SelectOption"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.SelectElementSelector>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.SelectElementSelector>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IDeselectOption extends grpc.MethodDefinition<playwright_pb.Request.ElementSelector, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/DeselectOption"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.ElementSelector>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.ElementSelector>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_ICheckCheckbox extends grpc.MethodDefinition<playwright_pb.Request.ElementSelector, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/CheckCheckbox"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.ElementSelector>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.ElementSelector>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IUncheckCheckbox extends grpc.MethodDefinition<playwright_pb.Request.ElementSelector, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/UncheckCheckbox"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.ElementSelector>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.ElementSelector>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IHealth extends grpc.MethodDefinition<playwright_pb.Request.Empty, playwright_pb.Response.String> {
    path: string; // "/.Playwright/Health"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.Empty>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.Empty>;
    responseSerialize: grpc.serialize<playwright_pb.Response.String>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.String>;
}
interface IPlaywrightService_ISetTimeout extends grpc.MethodDefinition<playwright_pb.Request.Timeout, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/SetTimeout"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.Timeout>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.Timeout>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IAddStyleTag extends grpc.MethodDefinition<playwright_pb.Request.StyleTag, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/AddStyleTag"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.StyleTag>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.StyleTag>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IHighlightElements extends grpc.MethodDefinition<playwright_pb.Request.ElementSelectorWithDuration, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/HighlightElements"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.ElementSelectorWithDuration>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.ElementSelectorWithDuration>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IClickWithOptions extends grpc.MethodDefinition<playwright_pb.Request.ElementSelectorWithOptions, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/ClickWithOptions"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.ElementSelectorWithOptions>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.ElementSelectorWithOptions>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IFocus extends grpc.MethodDefinition<playwright_pb.Request.ElementSelector, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/Focus"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.ElementSelector>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.ElementSelector>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IWaitForElementsState extends grpc.MethodDefinition<playwright_pb.Request.ElementSelectorWithOptions, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/WaitForElementsState"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.ElementSelectorWithOptions>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.ElementSelectorWithOptions>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IExecuteJavascriptOnPage extends grpc.MethodDefinition<playwright_pb.Request.JavascriptCode, playwright_pb.Response.JavascriptExecutionResult> {
    path: string; // "/.Playwright/ExecuteJavascriptOnPage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.JavascriptCode>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.JavascriptCode>;
    responseSerialize: grpc.serialize<playwright_pb.Response.JavascriptExecutionResult>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.JavascriptExecutionResult>;
}
interface IPlaywrightService_IGetPageState extends grpc.MethodDefinition<playwright_pb.Request.Empty, playwright_pb.Response.JavascriptExecutionResult> {
    path: string; // "/.Playwright/GetPageState"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.Empty>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.Empty>;
    responseSerialize: grpc.serialize<playwright_pb.Response.JavascriptExecutionResult>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.JavascriptExecutionResult>;
}
interface IPlaywrightService_ISwitchActivePage extends grpc.MethodDefinition<playwright_pb.Request.Index, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/SwitchActivePage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.Index>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.Index>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_IAutoActivatePages extends grpc.MethodDefinition<playwright_pb.Request.Empty, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/AutoActivatePages"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.Empty>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.Empty>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_ISwitchContext extends grpc.MethodDefinition<playwright_pb.Request.Index, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/SwitchContext"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.Index>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.Index>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_INewPage extends grpc.MethodDefinition<playwright_pb.Request.Url, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/NewPage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.Url>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.Url>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_INewContext extends grpc.MethodDefinition<playwright_pb.Request.NewContext, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/NewContext"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.NewContext>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.NewContext>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}
interface IPlaywrightService_INewBrowser extends grpc.MethodDefinition<playwright_pb.Request.NewBrowser, playwright_pb.Response.Empty> {
    path: string; // "/.Playwright/NewBrowser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<playwright_pb.Request.NewBrowser>;
    requestDeserialize: grpc.deserialize<playwright_pb.Request.NewBrowser>;
    responseSerialize: grpc.serialize<playwright_pb.Response.Empty>;
    responseDeserialize: grpc.deserialize<playwright_pb.Response.Empty>;
}

export const PlaywrightService: IPlaywrightService;

export interface IPlaywrightServer {
    takeScreenshot: grpc.handleUnaryCall<playwright_pb.Request.ScreenshotPath, playwright_pb.Response.String>;
    closeBrowser: grpc.handleUnaryCall<playwright_pb.Request.Empty, playwright_pb.Response.Empty>;
    goTo: grpc.handleUnaryCall<playwright_pb.Request.Url, playwright_pb.Response.Empty>;
    goBack: grpc.handleUnaryCall<playwright_pb.Request.Url, playwright_pb.Response.Empty>;
    goForward: grpc.handleUnaryCall<playwright_pb.Request.Url, playwright_pb.Response.Empty>;
    getTitle: grpc.handleUnaryCall<playwright_pb.Request.Empty, playwright_pb.Response.String>;
    getElementCount: grpc.handleUnaryCall<playwright_pb.Request.ElementSelector, playwright_pb.Response.Int>;
    inputText: grpc.handleUnaryCall<playwright_pb.Request.TextInput, playwright_pb.Response.Empty>;
    typeText: grpc.handleUnaryCall<playwright_pb.Request.TypeText, playwright_pb.Response.Empty>;
    fillText: grpc.handleUnaryCall<playwright_pb.Request.FillText, playwright_pb.Response.Empty>;
    clearText: grpc.handleUnaryCall<playwright_pb.Request.ClearText, playwright_pb.Response.Empty>;
    getDomProperty: grpc.handleUnaryCall<playwright_pb.Request.ElementProperty, playwright_pb.Response.String>;
    getBoolProperty: grpc.handleUnaryCall<playwright_pb.Request.ElementProperty, playwright_pb.Response.Bool>;
    getTextContent: grpc.handleUnaryCall<playwright_pb.Request.ElementSelector, playwright_pb.Response.String>;
    getUrl: grpc.handleUnaryCall<playwright_pb.Request.Empty, playwright_pb.Response.String>;
    click: grpc.handleUnaryCall<playwright_pb.Request.ElementSelector, playwright_pb.Response.Empty>;
    press: grpc.handleUnaryCall<playwright_pb.Request.PressKeys, playwright_pb.Response.Empty>;
    getSelectContent: grpc.handleUnaryCall<playwright_pb.Request.ElementSelector, playwright_pb.Response.Select>;
    selectOption: grpc.handleUnaryCall<playwright_pb.Request.SelectElementSelector, playwright_pb.Response.Empty>;
    deselectOption: grpc.handleUnaryCall<playwright_pb.Request.ElementSelector, playwright_pb.Response.Empty>;
    checkCheckbox: grpc.handleUnaryCall<playwright_pb.Request.ElementSelector, playwright_pb.Response.Empty>;
    uncheckCheckbox: grpc.handleUnaryCall<playwright_pb.Request.ElementSelector, playwright_pb.Response.Empty>;
    health: grpc.handleUnaryCall<playwright_pb.Request.Empty, playwright_pb.Response.String>;
    setTimeout: grpc.handleUnaryCall<playwright_pb.Request.Timeout, playwright_pb.Response.Empty>;
    addStyleTag: grpc.handleUnaryCall<playwright_pb.Request.StyleTag, playwright_pb.Response.Empty>;
    highlightElements: grpc.handleUnaryCall<playwright_pb.Request.ElementSelectorWithDuration, playwright_pb.Response.Empty>;
    clickWithOptions: grpc.handleUnaryCall<playwright_pb.Request.ElementSelectorWithOptions, playwright_pb.Response.Empty>;
    focus: grpc.handleUnaryCall<playwright_pb.Request.ElementSelector, playwright_pb.Response.Empty>;
    waitForElementsState: grpc.handleUnaryCall<playwright_pb.Request.ElementSelectorWithOptions, playwright_pb.Response.Empty>;
    executeJavascriptOnPage: grpc.handleUnaryCall<playwright_pb.Request.JavascriptCode, playwright_pb.Response.JavascriptExecutionResult>;
    getPageState: grpc.handleUnaryCall<playwright_pb.Request.Empty, playwright_pb.Response.JavascriptExecutionResult>;
    switchActivePage: grpc.handleUnaryCall<playwright_pb.Request.Index, playwright_pb.Response.Empty>;
    autoActivatePages: grpc.handleUnaryCall<playwright_pb.Request.Empty, playwright_pb.Response.Empty>;
    switchContext: grpc.handleUnaryCall<playwright_pb.Request.Index, playwright_pb.Response.Empty>;
    newPage: grpc.handleUnaryCall<playwright_pb.Request.Url, playwright_pb.Response.Empty>;
    newContext: grpc.handleUnaryCall<playwright_pb.Request.NewContext, playwright_pb.Response.Empty>;
    newBrowser: grpc.handleUnaryCall<playwright_pb.Request.NewBrowser, playwright_pb.Response.Empty>;
}

export interface IPlaywrightClient {
    takeScreenshot(request: playwright_pb.Request.ScreenshotPath, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    takeScreenshot(request: playwright_pb.Request.ScreenshotPath, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    takeScreenshot(request: playwright_pb.Request.ScreenshotPath, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    closeBrowser(request: playwright_pb.Request.Empty, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    closeBrowser(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    closeBrowser(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    goTo(request: playwright_pb.Request.Url, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    goTo(request: playwright_pb.Request.Url, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    goTo(request: playwright_pb.Request.Url, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    goBack(request: playwright_pb.Request.Url, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    goBack(request: playwright_pb.Request.Url, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    goBack(request: playwright_pb.Request.Url, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    goForward(request: playwright_pb.Request.Url, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    goForward(request: playwright_pb.Request.Url, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    goForward(request: playwright_pb.Request.Url, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    getTitle(request: playwright_pb.Request.Empty, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    getTitle(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    getTitle(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    getElementCount(request: playwright_pb.Request.ElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Int) => void): grpc.ClientUnaryCall;
    getElementCount(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Int) => void): grpc.ClientUnaryCall;
    getElementCount(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Int) => void): grpc.ClientUnaryCall;
    inputText(request: playwright_pb.Request.TextInput, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    inputText(request: playwright_pb.Request.TextInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    inputText(request: playwright_pb.Request.TextInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    typeText(request: playwright_pb.Request.TypeText, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    typeText(request: playwright_pb.Request.TypeText, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    typeText(request: playwright_pb.Request.TypeText, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    fillText(request: playwright_pb.Request.FillText, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    fillText(request: playwright_pb.Request.FillText, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    fillText(request: playwright_pb.Request.FillText, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    clearText(request: playwright_pb.Request.ClearText, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    clearText(request: playwright_pb.Request.ClearText, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    clearText(request: playwright_pb.Request.ClearText, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    getDomProperty(request: playwright_pb.Request.ElementProperty, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    getDomProperty(request: playwright_pb.Request.ElementProperty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    getDomProperty(request: playwright_pb.Request.ElementProperty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    getBoolProperty(request: playwright_pb.Request.ElementProperty, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Bool) => void): grpc.ClientUnaryCall;
    getBoolProperty(request: playwright_pb.Request.ElementProperty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Bool) => void): grpc.ClientUnaryCall;
    getBoolProperty(request: playwright_pb.Request.ElementProperty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Bool) => void): grpc.ClientUnaryCall;
    getTextContent(request: playwright_pb.Request.ElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    getTextContent(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    getTextContent(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    getUrl(request: playwright_pb.Request.Empty, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    getUrl(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    getUrl(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    click(request: playwright_pb.Request.ElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    click(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    click(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    press(request: playwright_pb.Request.PressKeys, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    press(request: playwright_pb.Request.PressKeys, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    press(request: playwright_pb.Request.PressKeys, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    getSelectContent(request: playwright_pb.Request.ElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Select) => void): grpc.ClientUnaryCall;
    getSelectContent(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Select) => void): grpc.ClientUnaryCall;
    getSelectContent(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Select) => void): grpc.ClientUnaryCall;
    selectOption(request: playwright_pb.Request.SelectElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    selectOption(request: playwright_pb.Request.SelectElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    selectOption(request: playwright_pb.Request.SelectElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    deselectOption(request: playwright_pb.Request.ElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    deselectOption(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    deselectOption(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    checkCheckbox(request: playwright_pb.Request.ElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    checkCheckbox(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    checkCheckbox(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    uncheckCheckbox(request: playwright_pb.Request.ElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    uncheckCheckbox(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    uncheckCheckbox(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    health(request: playwright_pb.Request.Empty, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    health(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    health(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    setTimeout(request: playwright_pb.Request.Timeout, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    setTimeout(request: playwright_pb.Request.Timeout, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    setTimeout(request: playwright_pb.Request.Timeout, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    addStyleTag(request: playwright_pb.Request.StyleTag, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    addStyleTag(request: playwright_pb.Request.StyleTag, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    addStyleTag(request: playwright_pb.Request.StyleTag, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    highlightElements(request: playwright_pb.Request.ElementSelectorWithDuration, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    highlightElements(request: playwright_pb.Request.ElementSelectorWithDuration, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    highlightElements(request: playwright_pb.Request.ElementSelectorWithDuration, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    clickWithOptions(request: playwright_pb.Request.ElementSelectorWithOptions, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    clickWithOptions(request: playwright_pb.Request.ElementSelectorWithOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    clickWithOptions(request: playwright_pb.Request.ElementSelectorWithOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    focus(request: playwright_pb.Request.ElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    focus(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    focus(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    waitForElementsState(request: playwright_pb.Request.ElementSelectorWithOptions, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    waitForElementsState(request: playwright_pb.Request.ElementSelectorWithOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    waitForElementsState(request: playwright_pb.Request.ElementSelectorWithOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    executeJavascriptOnPage(request: playwright_pb.Request.JavascriptCode, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.JavascriptExecutionResult) => void): grpc.ClientUnaryCall;
    executeJavascriptOnPage(request: playwright_pb.Request.JavascriptCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.JavascriptExecutionResult) => void): grpc.ClientUnaryCall;
    executeJavascriptOnPage(request: playwright_pb.Request.JavascriptCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.JavascriptExecutionResult) => void): grpc.ClientUnaryCall;
    getPageState(request: playwright_pb.Request.Empty, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.JavascriptExecutionResult) => void): grpc.ClientUnaryCall;
    getPageState(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.JavascriptExecutionResult) => void): grpc.ClientUnaryCall;
    getPageState(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.JavascriptExecutionResult) => void): grpc.ClientUnaryCall;
    switchActivePage(request: playwright_pb.Request.Index, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    switchActivePage(request: playwright_pb.Request.Index, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    switchActivePage(request: playwright_pb.Request.Index, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    autoActivatePages(request: playwright_pb.Request.Empty, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    autoActivatePages(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    autoActivatePages(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    switchContext(request: playwright_pb.Request.Index, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    switchContext(request: playwright_pb.Request.Index, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    switchContext(request: playwright_pb.Request.Index, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    newPage(request: playwright_pb.Request.Url, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    newPage(request: playwright_pb.Request.Url, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    newPage(request: playwright_pb.Request.Url, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    newContext(request: playwright_pb.Request.NewContext, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    newContext(request: playwright_pb.Request.NewContext, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    newContext(request: playwright_pb.Request.NewContext, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    newBrowser(request: playwright_pb.Request.NewBrowser, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    newBrowser(request: playwright_pb.Request.NewBrowser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    newBrowser(request: playwright_pb.Request.NewBrowser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
}

export class PlaywrightClient extends grpc.Client implements IPlaywrightClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public takeScreenshot(request: playwright_pb.Request.ScreenshotPath, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public takeScreenshot(request: playwright_pb.Request.ScreenshotPath, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public takeScreenshot(request: playwright_pb.Request.ScreenshotPath, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public closeBrowser(request: playwright_pb.Request.Empty, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public closeBrowser(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public closeBrowser(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public goTo(request: playwright_pb.Request.Url, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public goTo(request: playwright_pb.Request.Url, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public goTo(request: playwright_pb.Request.Url, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public goBack(request: playwright_pb.Request.Url, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public goBack(request: playwright_pb.Request.Url, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public goBack(request: playwright_pb.Request.Url, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public goForward(request: playwright_pb.Request.Url, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public goForward(request: playwright_pb.Request.Url, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public goForward(request: playwright_pb.Request.Url, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public getTitle(request: playwright_pb.Request.Empty, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public getTitle(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public getTitle(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public getElementCount(request: playwright_pb.Request.ElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Int) => void): grpc.ClientUnaryCall;
    public getElementCount(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Int) => void): grpc.ClientUnaryCall;
    public getElementCount(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Int) => void): grpc.ClientUnaryCall;
    public inputText(request: playwright_pb.Request.TextInput, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public inputText(request: playwright_pb.Request.TextInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public inputText(request: playwright_pb.Request.TextInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public typeText(request: playwright_pb.Request.TypeText, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public typeText(request: playwright_pb.Request.TypeText, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public typeText(request: playwright_pb.Request.TypeText, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public fillText(request: playwright_pb.Request.FillText, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public fillText(request: playwright_pb.Request.FillText, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public fillText(request: playwright_pb.Request.FillText, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public clearText(request: playwright_pb.Request.ClearText, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public clearText(request: playwright_pb.Request.ClearText, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public clearText(request: playwright_pb.Request.ClearText, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public getDomProperty(request: playwright_pb.Request.ElementProperty, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public getDomProperty(request: playwright_pb.Request.ElementProperty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public getDomProperty(request: playwright_pb.Request.ElementProperty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public getBoolProperty(request: playwright_pb.Request.ElementProperty, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Bool) => void): grpc.ClientUnaryCall;
    public getBoolProperty(request: playwright_pb.Request.ElementProperty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Bool) => void): grpc.ClientUnaryCall;
    public getBoolProperty(request: playwright_pb.Request.ElementProperty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Bool) => void): grpc.ClientUnaryCall;
    public getTextContent(request: playwright_pb.Request.ElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public getTextContent(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public getTextContent(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public getUrl(request: playwright_pb.Request.Empty, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public getUrl(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public getUrl(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public click(request: playwright_pb.Request.ElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public click(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public click(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public press(request: playwright_pb.Request.PressKeys, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public press(request: playwright_pb.Request.PressKeys, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public press(request: playwright_pb.Request.PressKeys, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public getSelectContent(request: playwright_pb.Request.ElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Select) => void): grpc.ClientUnaryCall;
    public getSelectContent(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Select) => void): grpc.ClientUnaryCall;
    public getSelectContent(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Select) => void): grpc.ClientUnaryCall;
    public selectOption(request: playwright_pb.Request.SelectElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public selectOption(request: playwright_pb.Request.SelectElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public selectOption(request: playwright_pb.Request.SelectElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public deselectOption(request: playwright_pb.Request.ElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public deselectOption(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public deselectOption(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public checkCheckbox(request: playwright_pb.Request.ElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public checkCheckbox(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public checkCheckbox(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public uncheckCheckbox(request: playwright_pb.Request.ElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public uncheckCheckbox(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public uncheckCheckbox(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public health(request: playwright_pb.Request.Empty, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public health(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public health(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.String) => void): grpc.ClientUnaryCall;
    public setTimeout(request: playwright_pb.Request.Timeout, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public setTimeout(request: playwright_pb.Request.Timeout, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public setTimeout(request: playwright_pb.Request.Timeout, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public addStyleTag(request: playwright_pb.Request.StyleTag, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public addStyleTag(request: playwright_pb.Request.StyleTag, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public addStyleTag(request: playwright_pb.Request.StyleTag, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public highlightElements(request: playwright_pb.Request.ElementSelectorWithDuration, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public highlightElements(request: playwright_pb.Request.ElementSelectorWithDuration, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public highlightElements(request: playwright_pb.Request.ElementSelectorWithDuration, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public clickWithOptions(request: playwright_pb.Request.ElementSelectorWithOptions, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public clickWithOptions(request: playwright_pb.Request.ElementSelectorWithOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public clickWithOptions(request: playwright_pb.Request.ElementSelectorWithOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public focus(request: playwright_pb.Request.ElementSelector, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public focus(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public focus(request: playwright_pb.Request.ElementSelector, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public waitForElementsState(request: playwright_pb.Request.ElementSelectorWithOptions, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public waitForElementsState(request: playwright_pb.Request.ElementSelectorWithOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public waitForElementsState(request: playwright_pb.Request.ElementSelectorWithOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public executeJavascriptOnPage(request: playwright_pb.Request.JavascriptCode, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.JavascriptExecutionResult) => void): grpc.ClientUnaryCall;
    public executeJavascriptOnPage(request: playwright_pb.Request.JavascriptCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.JavascriptExecutionResult) => void): grpc.ClientUnaryCall;
    public executeJavascriptOnPage(request: playwright_pb.Request.JavascriptCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.JavascriptExecutionResult) => void): grpc.ClientUnaryCall;
    public getPageState(request: playwright_pb.Request.Empty, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.JavascriptExecutionResult) => void): grpc.ClientUnaryCall;
    public getPageState(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.JavascriptExecutionResult) => void): grpc.ClientUnaryCall;
    public getPageState(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.JavascriptExecutionResult) => void): grpc.ClientUnaryCall;
    public switchActivePage(request: playwright_pb.Request.Index, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public switchActivePage(request: playwright_pb.Request.Index, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public switchActivePage(request: playwright_pb.Request.Index, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public autoActivatePages(request: playwright_pb.Request.Empty, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public autoActivatePages(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public autoActivatePages(request: playwright_pb.Request.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public switchContext(request: playwright_pb.Request.Index, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public switchContext(request: playwright_pb.Request.Index, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public switchContext(request: playwright_pb.Request.Index, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public newPage(request: playwright_pb.Request.Url, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public newPage(request: playwright_pb.Request.Url, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public newPage(request: playwright_pb.Request.Url, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public newContext(request: playwright_pb.Request.NewContext, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public newContext(request: playwright_pb.Request.NewContext, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public newContext(request: playwright_pb.Request.NewContext, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public newBrowser(request: playwright_pb.Request.NewBrowser, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public newBrowser(request: playwright_pb.Request.NewBrowser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
    public newBrowser(request: playwright_pb.Request.NewBrowser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playwright_pb.Response.Empty) => void): grpc.ClientUnaryCall;
}
