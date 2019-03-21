export interface FileReaderEventTarget extends EventTarget {
    result: string;
}

export interface FileReaderEvent extends FileReader {
    target: FileReaderEventTarget;
    getMessage(): string;

}
export var FileReaderEvent: {
    new(): FileReaderEvent;

};