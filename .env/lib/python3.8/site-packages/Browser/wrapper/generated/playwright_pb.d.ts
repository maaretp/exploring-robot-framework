// package: 
// file: playwright.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Request extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
    export type AsObject = {
    }


    export class Empty extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Empty.AsObject;
        static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Empty;
        static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
    }

    export namespace Empty {
        export type AsObject = {
        }
    }

    export class ScreenshotPath extends jspb.Message { 
        getPath(): string;
        setPath(value: string): ScreenshotPath;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ScreenshotPath.AsObject;
        static toObject(includeInstance: boolean, msg: ScreenshotPath): ScreenshotPath.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ScreenshotPath, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ScreenshotPath;
        static deserializeBinaryFromReader(message: ScreenshotPath, reader: jspb.BinaryReader): ScreenshotPath;
    }

    export namespace ScreenshotPath {
        export type AsObject = {
            path: string,
        }
    }

    export class NewBrowser extends jspb.Message { 
        getBrowser(): string;
        setBrowser(value: string): NewBrowser;

        getHeadless(): boolean;
        setHeadless(value: boolean): NewBrowser;

        getRawoptions(): string;
        setRawoptions(value: string): NewBrowser;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NewBrowser.AsObject;
        static toObject(includeInstance: boolean, msg: NewBrowser): NewBrowser.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: NewBrowser, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NewBrowser;
        static deserializeBinaryFromReader(message: NewBrowser, reader: jspb.BinaryReader): NewBrowser;
    }

    export namespace NewBrowser {
        export type AsObject = {
            browser: string,
            headless: boolean,
            rawoptions: string,
        }
    }

    export class NewContext extends jspb.Message { 
        getRawoptions(): string;
        setRawoptions(value: string): NewContext;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NewContext.AsObject;
        static toObject(includeInstance: boolean, msg: NewContext): NewContext.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: NewContext, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NewContext;
        static deserializeBinaryFromReader(message: NewContext, reader: jspb.BinaryReader): NewContext;
    }

    export namespace NewContext {
        export type AsObject = {
            rawoptions: string,
        }
    }

    export class Url extends jspb.Message { 
        getUrl(): string;
        setUrl(value: string): Url;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Url.AsObject;
        static toObject(includeInstance: boolean, msg: Url): Url.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Url, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Url;
        static deserializeBinaryFromReader(message: Url, reader: jspb.BinaryReader): Url;
    }

    export namespace Url {
        export type AsObject = {
            url: string,
        }
    }

    export class TextInput extends jspb.Message { 
        getInput(): string;
        setInput(value: string): TextInput;

        getSelector(): string;
        setSelector(value: string): TextInput;

        getType(): boolean;
        setType(value: boolean): TextInput;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TextInput.AsObject;
        static toObject(includeInstance: boolean, msg: TextInput): TextInput.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TextInput, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TextInput;
        static deserializeBinaryFromReader(message: TextInput, reader: jspb.BinaryReader): TextInput;
    }

    export namespace TextInput {
        export type AsObject = {
            input: string,
            selector: string,
            type: boolean,
        }
    }

    export class ElementProperty extends jspb.Message { 
        getProperty(): string;
        setProperty(value: string): ElementProperty;

        getSelector(): string;
        setSelector(value: string): ElementProperty;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ElementProperty.AsObject;
        static toObject(includeInstance: boolean, msg: ElementProperty): ElementProperty.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ElementProperty, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ElementProperty;
        static deserializeBinaryFromReader(message: ElementProperty, reader: jspb.BinaryReader): ElementProperty;
    }

    export namespace ElementProperty {
        export type AsObject = {
            property: string,
            selector: string,
        }
    }

    export class TypeText extends jspb.Message { 
        getSelector(): string;
        setSelector(value: string): TypeText;

        getText(): string;
        setText(value: string): TypeText;

        getDelay(): number;
        setDelay(value: number): TypeText;

        getClear(): boolean;
        setClear(value: boolean): TypeText;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TypeText.AsObject;
        static toObject(includeInstance: boolean, msg: TypeText): TypeText.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TypeText, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TypeText;
        static deserializeBinaryFromReader(message: TypeText, reader: jspb.BinaryReader): TypeText;
    }

    export namespace TypeText {
        export type AsObject = {
            selector: string,
            text: string,
            delay: number,
            clear: boolean,
        }
    }

    export class FillText extends jspb.Message { 
        getSelector(): string;
        setSelector(value: string): FillText;

        getText(): string;
        setText(value: string): FillText;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FillText.AsObject;
        static toObject(includeInstance: boolean, msg: FillText): FillText.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FillText, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FillText;
        static deserializeBinaryFromReader(message: FillText, reader: jspb.BinaryReader): FillText;
    }

    export namespace FillText {
        export type AsObject = {
            selector: string,
            text: string,
        }
    }

    export class ClearText extends jspb.Message { 
        getSelector(): string;
        setSelector(value: string): ClearText;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ClearText.AsObject;
        static toObject(includeInstance: boolean, msg: ClearText): ClearText.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ClearText, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ClearText;
        static deserializeBinaryFromReader(message: ClearText, reader: jspb.BinaryReader): ClearText;
    }

    export namespace ClearText {
        export type AsObject = {
            selector: string,
        }
    }

    export class PressKeys extends jspb.Message { 
        getSelector(): string;
        setSelector(value: string): PressKeys;

        clearKeyList(): void;
        getKeyList(): Array<string>;
        setKeyList(value: Array<string>): PressKeys;
        addKey(value: string, index?: number): string;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PressKeys.AsObject;
        static toObject(includeInstance: boolean, msg: PressKeys): PressKeys.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PressKeys, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PressKeys;
        static deserializeBinaryFromReader(message: PressKeys, reader: jspb.BinaryReader): PressKeys;
    }

    export namespace PressKeys {
        export type AsObject = {
            selector: string,
            keyList: Array<string>,
        }
    }

    export class ElementSelector extends jspb.Message { 
        getSelector(): string;
        setSelector(value: string): ElementSelector;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ElementSelector.AsObject;
        static toObject(includeInstance: boolean, msg: ElementSelector): ElementSelector.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ElementSelector, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ElementSelector;
        static deserializeBinaryFromReader(message: ElementSelector, reader: jspb.BinaryReader): ElementSelector;
    }

    export namespace ElementSelector {
        export type AsObject = {
            selector: string,
        }
    }

    export class Timeout extends jspb.Message { 
        getTimeout(): number;
        setTimeout(value: number): Timeout;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Timeout.AsObject;
        static toObject(includeInstance: boolean, msg: Timeout): Timeout.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Timeout, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Timeout;
        static deserializeBinaryFromReader(message: Timeout, reader: jspb.BinaryReader): Timeout;
    }

    export namespace Timeout {
        export type AsObject = {
            timeout: number,
        }
    }

    export class Index extends jspb.Message { 
        getIndex(): number;
        setIndex(value: number): Index;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Index.AsObject;
        static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Index, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Index;
        static deserializeBinaryFromReader(message: Index, reader: jspb.BinaryReader): Index;
    }

    export namespace Index {
        export type AsObject = {
            index: number,
        }
    }

    export class StyleTag extends jspb.Message { 
        getContent(): string;
        setContent(value: string): StyleTag;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StyleTag.AsObject;
        static toObject(includeInstance: boolean, msg: StyleTag): StyleTag.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StyleTag, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StyleTag;
        static deserializeBinaryFromReader(message: StyleTag, reader: jspb.BinaryReader): StyleTag;
    }

    export namespace StyleTag {
        export type AsObject = {
            content: string,
        }
    }

    export class ElementSelectorWithOptions extends jspb.Message { 
        getSelector(): string;
        setSelector(value: string): ElementSelectorWithOptions;

        getOptions(): string;
        setOptions(value: string): ElementSelectorWithOptions;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ElementSelectorWithOptions.AsObject;
        static toObject(includeInstance: boolean, msg: ElementSelectorWithOptions): ElementSelectorWithOptions.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ElementSelectorWithOptions, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ElementSelectorWithOptions;
        static deserializeBinaryFromReader(message: ElementSelectorWithOptions, reader: jspb.BinaryReader): ElementSelectorWithOptions;
    }

    export namespace ElementSelectorWithOptions {
        export type AsObject = {
            selector: string,
            options: string,
        }
    }

    export class ElementSelectorWithDuration extends jspb.Message { 
        getSelector(): string;
        setSelector(value: string): ElementSelectorWithDuration;

        getDuration(): number;
        setDuration(value: number): ElementSelectorWithDuration;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ElementSelectorWithDuration.AsObject;
        static toObject(includeInstance: boolean, msg: ElementSelectorWithDuration): ElementSelectorWithDuration.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ElementSelectorWithDuration, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ElementSelectorWithDuration;
        static deserializeBinaryFromReader(message: ElementSelectorWithDuration, reader: jspb.BinaryReader): ElementSelectorWithDuration;
    }

    export namespace ElementSelectorWithDuration {
        export type AsObject = {
            selector: string,
            duration: number,
        }
    }

    export class SelectElementSelector extends jspb.Message { 
        getSelector(): string;
        setSelector(value: string): SelectElementSelector;

        getMatcherjson(): string;
        setMatcherjson(value: string): SelectElementSelector;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SelectElementSelector.AsObject;
        static toObject(includeInstance: boolean, msg: SelectElementSelector): SelectElementSelector.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SelectElementSelector, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SelectElementSelector;
        static deserializeBinaryFromReader(message: SelectElementSelector, reader: jspb.BinaryReader): SelectElementSelector;
    }

    export namespace SelectElementSelector {
        export type AsObject = {
            selector: string,
            matcherjson: string,
        }
    }

    export class JavascriptCode extends jspb.Message { 
        getScript(): string;
        setScript(value: string): JavascriptCode;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): JavascriptCode.AsObject;
        static toObject(includeInstance: boolean, msg: JavascriptCode): JavascriptCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: JavascriptCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): JavascriptCode;
        static deserializeBinaryFromReader(message: JavascriptCode, reader: jspb.BinaryReader): JavascriptCode;
    }

    export namespace JavascriptCode {
        export type AsObject = {
            script: string,
        }
    }

    export class RawJson extends jspb.Message { 
        getScript(): string;
        setScript(value: string): RawJson;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RawJson.AsObject;
        static toObject(includeInstance: boolean, msg: RawJson): RawJson.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RawJson, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RawJson;
        static deserializeBinaryFromReader(message: RawJson, reader: jspb.BinaryReader): RawJson;
    }

    export namespace RawJson {
        export type AsObject = {
            script: string,
        }
    }

}

export class SelectEntry extends jspb.Message { 
    getValue(): string;
    setValue(value: string): SelectEntry;

    getLabel(): string;
    setLabel(value: string): SelectEntry;

    getSelected(): boolean;
    setSelected(value: boolean): SelectEntry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelectEntry.AsObject;
    static toObject(includeInstance: boolean, msg: SelectEntry): SelectEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelectEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelectEntry;
    static deserializeBinaryFromReader(message: SelectEntry, reader: jspb.BinaryReader): SelectEntry;
}

export namespace SelectEntry {
    export type AsObject = {
        value: string,
        label: string,
        selected: boolean,
    }
}

export class Response extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
    export type AsObject = {
    }


    export class Empty extends jspb.Message { 
        getLog(): string;
        setLog(value: string): Empty;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Empty.AsObject;
        static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Empty;
        static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
    }

    export namespace Empty {
        export type AsObject = {
            log: string,
        }
    }

    export class String extends jspb.Message { 
        getLog(): string;
        setLog(value: string): String;

        getBody(): string;
        setBody(value: string): String;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): String.AsObject;
        static toObject(includeInstance: boolean, msg: String): String.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: String, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): String;
        static deserializeBinaryFromReader(message: String, reader: jspb.BinaryReader): String;
    }

    export namespace String {
        export type AsObject = {
            log: string,
            body: string,
        }
    }

    export class Bool extends jspb.Message { 
        getLog(): string;
        setLog(value: string): Bool;

        getBody(): boolean;
        setBody(value: boolean): Bool;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Bool.AsObject;
        static toObject(includeInstance: boolean, msg: Bool): Bool.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Bool, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Bool;
        static deserializeBinaryFromReader(message: Bool, reader: jspb.BinaryReader): Bool;
    }

    export namespace Bool {
        export type AsObject = {
            log: string,
            body: boolean,
        }
    }

    export class Int extends jspb.Message { 
        getLog(): string;
        setLog(value: string): Int;

        getBody(): number;
        setBody(value: number): Int;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Int.AsObject;
        static toObject(includeInstance: boolean, msg: Int): Int.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Int, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Int;
        static deserializeBinaryFromReader(message: Int, reader: jspb.BinaryReader): Int;
    }

    export namespace Int {
        export type AsObject = {
            log: string,
            body: number,
        }
    }

    export class Select extends jspb.Message { 
        clearEntryList(): void;
        getEntryList(): Array<SelectEntry>;
        setEntryList(value: Array<SelectEntry>): Select;
        addEntry(value?: SelectEntry, index?: number): SelectEntry;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Select.AsObject;
        static toObject(includeInstance: boolean, msg: Select): Select.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Select, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Select;
        static deserializeBinaryFromReader(message: Select, reader: jspb.BinaryReader): Select;
    }

    export namespace Select {
        export type AsObject = {
            entryList: Array<SelectEntry.AsObject>,
        }
    }

    export class JavascriptExecutionResult extends jspb.Message { 
        getLog(): string;
        setLog(value: string): JavascriptExecutionResult;

        getResult(): string;
        setResult(value: string): JavascriptExecutionResult;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): JavascriptExecutionResult.AsObject;
        static toObject(includeInstance: boolean, msg: JavascriptExecutionResult): JavascriptExecutionResult.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: JavascriptExecutionResult, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): JavascriptExecutionResult;
        static deserializeBinaryFromReader(message: JavascriptExecutionResult, reader: jspb.BinaryReader): JavascriptExecutionResult;
    }

    export namespace JavascriptExecutionResult {
        export type AsObject = {
            log: string,
            result: string,
        }
    }

}
