// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var playwright_pb = require('./playwright_pb.js');

function serialize_Request_ClearText(arg) {
  if (!(arg instanceof playwright_pb.Request.ClearText)) {
    throw new Error('Expected argument of type Request.ClearText');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_ClearText(buffer_arg) {
  return playwright_pb.Request.ClearText.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_ElementProperty(arg) {
  if (!(arg instanceof playwright_pb.Request.ElementProperty)) {
    throw new Error('Expected argument of type Request.ElementProperty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_ElementProperty(buffer_arg) {
  return playwright_pb.Request.ElementProperty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_ElementSelector(arg) {
  if (!(arg instanceof playwright_pb.Request.ElementSelector)) {
    throw new Error('Expected argument of type Request.ElementSelector');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_ElementSelector(buffer_arg) {
  return playwright_pb.Request.ElementSelector.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_ElementSelectorWithDuration(arg) {
  if (!(arg instanceof playwright_pb.Request.ElementSelectorWithDuration)) {
    throw new Error('Expected argument of type Request.ElementSelectorWithDuration');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_ElementSelectorWithDuration(buffer_arg) {
  return playwright_pb.Request.ElementSelectorWithDuration.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_ElementSelectorWithOptions(arg) {
  if (!(arg instanceof playwright_pb.Request.ElementSelectorWithOptions)) {
    throw new Error('Expected argument of type Request.ElementSelectorWithOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_ElementSelectorWithOptions(buffer_arg) {
  return playwright_pb.Request.ElementSelectorWithOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_Empty(arg) {
  if (!(arg instanceof playwright_pb.Request.Empty)) {
    throw new Error('Expected argument of type Request.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_Empty(buffer_arg) {
  return playwright_pb.Request.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_FillText(arg) {
  if (!(arg instanceof playwright_pb.Request.FillText)) {
    throw new Error('Expected argument of type Request.FillText');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_FillText(buffer_arg) {
  return playwright_pb.Request.FillText.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_Index(arg) {
  if (!(arg instanceof playwright_pb.Request.Index)) {
    throw new Error('Expected argument of type Request.Index');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_Index(buffer_arg) {
  return playwright_pb.Request.Index.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_JavascriptCode(arg) {
  if (!(arg instanceof playwright_pb.Request.JavascriptCode)) {
    throw new Error('Expected argument of type Request.JavascriptCode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_JavascriptCode(buffer_arg) {
  return playwright_pb.Request.JavascriptCode.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_NewBrowser(arg) {
  if (!(arg instanceof playwright_pb.Request.NewBrowser)) {
    throw new Error('Expected argument of type Request.NewBrowser');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_NewBrowser(buffer_arg) {
  return playwright_pb.Request.NewBrowser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_NewContext(arg) {
  if (!(arg instanceof playwright_pb.Request.NewContext)) {
    throw new Error('Expected argument of type Request.NewContext');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_NewContext(buffer_arg) {
  return playwright_pb.Request.NewContext.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_PressKeys(arg) {
  if (!(arg instanceof playwright_pb.Request.PressKeys)) {
    throw new Error('Expected argument of type Request.PressKeys');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_PressKeys(buffer_arg) {
  return playwright_pb.Request.PressKeys.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_ScreenshotPath(arg) {
  if (!(arg instanceof playwright_pb.Request.ScreenshotPath)) {
    throw new Error('Expected argument of type Request.ScreenshotPath');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_ScreenshotPath(buffer_arg) {
  return playwright_pb.Request.ScreenshotPath.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_SelectElementSelector(arg) {
  if (!(arg instanceof playwright_pb.Request.SelectElementSelector)) {
    throw new Error('Expected argument of type Request.SelectElementSelector');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_SelectElementSelector(buffer_arg) {
  return playwright_pb.Request.SelectElementSelector.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_StyleTag(arg) {
  if (!(arg instanceof playwright_pb.Request.StyleTag)) {
    throw new Error('Expected argument of type Request.StyleTag');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_StyleTag(buffer_arg) {
  return playwright_pb.Request.StyleTag.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_TextInput(arg) {
  if (!(arg instanceof playwright_pb.Request.TextInput)) {
    throw new Error('Expected argument of type Request.TextInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_TextInput(buffer_arg) {
  return playwright_pb.Request.TextInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_Timeout(arg) {
  if (!(arg instanceof playwright_pb.Request.Timeout)) {
    throw new Error('Expected argument of type Request.Timeout');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_Timeout(buffer_arg) {
  return playwright_pb.Request.Timeout.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_TypeText(arg) {
  if (!(arg instanceof playwright_pb.Request.TypeText)) {
    throw new Error('Expected argument of type Request.TypeText');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_TypeText(buffer_arg) {
  return playwright_pb.Request.TypeText.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request_Url(arg) {
  if (!(arg instanceof playwright_pb.Request.Url)) {
    throw new Error('Expected argument of type Request.Url');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request_Url(buffer_arg) {
  return playwright_pb.Request.Url.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Response_Bool(arg) {
  if (!(arg instanceof playwright_pb.Response.Bool)) {
    throw new Error('Expected argument of type Response.Bool');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Response_Bool(buffer_arg) {
  return playwright_pb.Response.Bool.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Response_Empty(arg) {
  if (!(arg instanceof playwright_pb.Response.Empty)) {
    throw new Error('Expected argument of type Response.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Response_Empty(buffer_arg) {
  return playwright_pb.Response.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Response_Int(arg) {
  if (!(arg instanceof playwright_pb.Response.Int)) {
    throw new Error('Expected argument of type Response.Int');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Response_Int(buffer_arg) {
  return playwright_pb.Response.Int.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Response_JavascriptExecutionResult(arg) {
  if (!(arg instanceof playwright_pb.Response.JavascriptExecutionResult)) {
    throw new Error('Expected argument of type Response.JavascriptExecutionResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Response_JavascriptExecutionResult(buffer_arg) {
  return playwright_pb.Response.JavascriptExecutionResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Response_Select(arg) {
  if (!(arg instanceof playwright_pb.Response.Select)) {
    throw new Error('Expected argument of type Response.Select');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Response_Select(buffer_arg) {
  return playwright_pb.Response.Select.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Response_String(arg) {
  if (!(arg instanceof playwright_pb.Response.String)) {
    throw new Error('Expected argument of type Response.String');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Response_String(buffer_arg) {
  return playwright_pb.Response.String.deserializeBinary(new Uint8Array(buffer_arg));
}


var PlaywrightService = exports.PlaywrightService = {
  takeScreenshot: {
    path: '/Playwright/TakeScreenshot',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.ScreenshotPath,
    responseType: playwright_pb.Response.String,
    requestSerialize: serialize_Request_ScreenshotPath,
    requestDeserialize: deserialize_Request_ScreenshotPath,
    responseSerialize: serialize_Response_String,
    responseDeserialize: deserialize_Response_String,
  },
  closeBrowser: {
    path: '/Playwright/CloseBrowser',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.Empty,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_Empty,
    requestDeserialize: deserialize_Request_Empty,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Opens the url in currently open Playwright page 
goTo: {
    path: '/Playwright/GoTo',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.Url,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_Url,
    requestDeserialize: deserialize_Request_Url,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Navigate to the next page in history 
goBack: {
    path: '/Playwright/GoBack',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.Url,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_Url,
    requestDeserialize: deserialize_Request_Url,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Navigate to the previous page in history. 
goForward: {
    path: '/Playwright/GoForward',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.Url,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_Url,
    requestDeserialize: deserialize_Request_Url,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Gets title of currently open Playwright page 
getTitle: {
    path: '/Playwright/GetTitle',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.Empty,
    responseType: playwright_pb.Response.String,
    requestSerialize: serialize_Request_Empty,
    requestDeserialize: deserialize_Request_Empty,
    responseSerialize: serialize_Response_String,
    responseDeserialize: deserialize_Response_String,
  },
  // Returns the count of elements found with selector 
getElementCount: {
    path: '/Playwright/GetElementCount',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.ElementSelector,
    responseType: playwright_pb.Response.Int,
    requestSerialize: serialize_Request_ElementSelector,
    requestDeserialize: deserialize_Request_ElementSelector,
    responseSerialize: serialize_Response_Int,
    responseDeserialize: deserialize_Response_Int,
  },
  // Wraps playwrights page.fill to input text into input specified with selector 
inputText: {
    path: '/Playwright/InputText',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.TextInput,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_TextInput,
    requestDeserialize: deserialize_Request_TextInput,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Wraps playwrights page.type to type text into input specified with selector 
typeText: {
    path: '/Playwright/TypeText',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.TypeText,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_TypeText,
    requestDeserialize: deserialize_Request_TypeText,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Wraps playwrights page.fill to fill text of input specified with selector 
fillText: {
    path: '/Playwright/FillText',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.FillText,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_FillText,
    requestDeserialize: deserialize_Request_FillText,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Wraps playwrights page.fill with empty text to clear input specified with selector 
clearText: {
    path: '/Playwright/ClearText',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.ClearText,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_ClearText,
    requestDeserialize: deserialize_Request_ClearText,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Gets the DOM property 'property' of selector specified element 
getDomProperty: {
    path: '/Playwright/GetDomProperty',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.ElementProperty,
    responseType: playwright_pb.Response.String,
    requestSerialize: serialize_Request_ElementProperty,
    requestDeserialize: deserialize_Request_ElementProperty,
    responseSerialize: serialize_Response_String,
    responseDeserialize: deserialize_Response_String,
  },
  // Gets the boolean DOM property 'property' of selector specified element 
getBoolProperty: {
    path: '/Playwright/GetBoolProperty',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.ElementProperty,
    responseType: playwright_pb.Response.Bool,
    requestSerialize: serialize_Request_ElementProperty,
    requestDeserialize: deserialize_Request_ElementProperty,
    responseSerialize: serialize_Response_Bool,
    responseDeserialize: deserialize_Response_Bool,
  },
  // Wraps playwrights page.textContent, returns textcontent of element by selector 
getTextContent: {
    path: '/Playwright/GetTextContent',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.ElementSelector,
    responseType: playwright_pb.Response.String,
    requestSerialize: serialize_Request_ElementSelector,
    requestDeserialize: deserialize_Request_ElementSelector,
    responseSerialize: serialize_Response_String,
    responseDeserialize: deserialize_Response_String,
  },
  // *Returns current playwright page url
getUrl: {
    path: '/Playwright/GetUrl',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.Empty,
    responseType: playwright_pb.Response.String,
    requestSerialize: serialize_Request_Empty,
    requestDeserialize: deserialize_Request_Empty,
    responseSerialize: serialize_Response_String,
    responseDeserialize: deserialize_Response_String,
  },
  // Clicks element specified by selector 
click: {
    path: '/Playwright/Click',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.ElementSelector,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_ElementSelector,
    requestDeserialize: deserialize_Request_ElementSelector,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Inputs a list of keypresses to element specified by selector 
press: {
    path: '/Playwright/Press',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.PressKeys,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_PressKeys,
    requestDeserialize: deserialize_Request_PressKeys,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Gets the Select element specified by selector and returns the contents 
getSelectContent: {
    path: '/Playwright/GetSelectContent',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.ElementSelector,
    responseType: playwright_pb.Response.Select,
    requestSerialize: serialize_Request_ElementSelector,
    requestDeserialize: deserialize_Request_ElementSelector,
    responseSerialize: serialize_Response_Select,
    responseDeserialize: deserialize_Response_Select,
  },
  // Selects option matching matcher in Select element matching selector 
selectOption: {
    path: '/Playwright/SelectOption',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.SelectElementSelector,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_SelectElementSelector,
    requestDeserialize: deserialize_Request_SelectElementSelector,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Deselects options in Select element matching selector 
deselectOption: {
    path: '/Playwright/DeselectOption',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.ElementSelector,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_ElementSelector,
    requestDeserialize: deserialize_Request_ElementSelector,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Checks checkbox specified by selector 
checkCheckbox: {
    path: '/Playwright/CheckCheckbox',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.ElementSelector,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_ElementSelector,
    requestDeserialize: deserialize_Request_ElementSelector,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Unchecks checkbox specified by selector 
uncheckCheckbox: {
    path: '/Playwright/UncheckCheckbox',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.ElementSelector,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_ElementSelector,
    requestDeserialize: deserialize_Request_ElementSelector,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Health check endpoint for the service 
health: {
    path: '/Playwright/Health',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.Empty,
    responseType: playwright_pb.Response.String,
    requestSerialize: serialize_Request_Empty,
    requestDeserialize: deserialize_Request_Empty,
    responseSerialize: serialize_Response_String,
    responseDeserialize: deserialize_Response_String,
  },
  // Set's  playwright timeout 
setTimeout: {
    path: '/Playwright/SetTimeout',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.Timeout,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_Timeout,
    requestDeserialize: deserialize_Request_Timeout,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Adds a <style> to head of site. 
addStyleTag: {
    path: '/Playwright/AddStyleTag',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.StyleTag,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_StyleTag,
    requestDeserialize: deserialize_Request_StyleTag,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Highlights elements matching selector for duration 
highlightElements: {
    path: '/Playwright/HighlightElements',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.ElementSelectorWithDuration,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_ElementSelectorWithDuration,
    requestDeserialize: deserialize_Request_ElementSelectorWithDuration,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Clicks element specified by selector and options 
clickWithOptions: {
    path: '/Playwright/ClickWithOptions',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.ElementSelectorWithOptions,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_ElementSelectorWithOptions,
    requestDeserialize: deserialize_Request_ElementSelectorWithOptions,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Focuses element specified by selector 
focus: {
    path: '/Playwright/Focus',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.ElementSelector,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_ElementSelector,
    requestDeserialize: deserialize_Request_ElementSelector,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Waits for element be in a specific state
waitForElementsState: {
    path: '/Playwright/WaitForElementsState',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.ElementSelectorWithOptions,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_ElementSelectorWithOptions,
    requestDeserialize: deserialize_Request_ElementSelectorWithOptions,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  // Executes javascript on the active page 
executeJavascriptOnPage: {
    path: '/Playwright/ExecuteJavascriptOnPage',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.JavascriptCode,
    responseType: playwright_pb.Response.JavascriptExecutionResult,
    requestSerialize: serialize_Request_JavascriptCode,
    requestDeserialize: deserialize_Request_JavascriptCode,
    responseSerialize: serialize_Response_JavascriptExecutionResult,
    responseDeserialize: deserialize_Response_JavascriptExecutionResult,
  },
  // Get Page State JSON 
getPageState: {
    path: '/Playwright/GetPageState',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.Empty,
    responseType: playwright_pb.Response.JavascriptExecutionResult,
    requestSerialize: serialize_Request_Empty,
    requestDeserialize: deserialize_Request_Empty,
    responseSerialize: serialize_Response_JavascriptExecutionResult,
    responseDeserialize: deserialize_Response_JavascriptExecutionResult,
  },
  switchActivePage: {
    path: '/Playwright/SwitchActivePage',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.Index,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_Index,
    requestDeserialize: deserialize_Request_Index,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  autoActivatePages: {
    path: '/Playwright/AutoActivatePages',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.Empty,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_Empty,
    requestDeserialize: deserialize_Request_Empty,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  switchContext: {
    path: '/Playwright/SwitchContext',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.Index,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_Index,
    requestDeserialize: deserialize_Request_Index,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  newPage: {
    path: '/Playwright/NewPage',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.Url,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_Url,
    requestDeserialize: deserialize_Request_Url,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  newContext: {
    path: '/Playwright/NewContext',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.NewContext,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_NewContext,
    requestDeserialize: deserialize_Request_NewContext,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
  newBrowser: {
    path: '/Playwright/NewBrowser',
    requestStream: false,
    responseStream: false,
    requestType: playwright_pb.Request.NewBrowser,
    responseType: playwright_pb.Response.Empty,
    requestSerialize: serialize_Request_NewBrowser,
    requestDeserialize: deserialize_Request_NewBrowser,
    responseSerialize: serialize_Response_Empty,
    responseDeserialize: deserialize_Response_Empty,
  },
};

exports.PlaywrightClient = grpc.makeGenericClientConstructor(PlaywrightService);
