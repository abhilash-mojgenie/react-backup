import React from "react";
import "../../src/styles/home.css";

const CustomUndo = () => (
    <svg
        width="28"
        height="39"
        viewBox="0 0 28 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        title="undo"
    >
        <path
            d="M16.5 11.0829H8.88438L11.1263 8.84164L10.25 7.95789L6.5 11.7079L10.25 15.4579L11.1263 14.5735L8.88625 12.3329H16.5C17.4946 12.3329 18.4484 12.728 19.1517 13.4312C19.8549 14.1345 20.25 15.0883 20.25 16.0829C20.25 17.0774 19.8549 18.0313 19.1517 18.7345C18.4484 19.4378 17.4946 19.8329 16.5 19.8329H11.5V21.0829H16.5C17.8261 21.0829 19.0979 20.5561 20.0355 19.6184C20.9732 18.6807 21.5 17.409 21.5 16.0829C21.5 14.7568 20.9732 13.485 20.0355 12.5474C19.0979 11.6097 17.8261 11.0829 16.5 11.0829Z"
            fill="#333333"
        />
    </svg>
);

const CustomRedo = () => (
    <svg
        width="28"
        height="29"
        viewBox="0 0 28 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M11.5 11.0829H19.1156L16.8737 8.84164L17.75 7.95789L21.5 11.7079L17.75 15.4579L16.8737 14.5735L19.1137 12.3329H11.5C10.5054 12.3329 9.55161 12.728 8.84835 13.4312C8.14509 14.1345 7.75 15.0883 7.75 16.0829C7.75 17.0774 8.14509 18.0313 8.84835 18.7345C9.55161 19.4378 10.5054 19.8329 11.5 19.8329H16.5V21.0829H11.5C10.1739 21.0829 8.90215 20.5561 7.96447 19.6184C7.02678 18.6807 6.5 17.409 6.5 16.0829C6.5 14.7568 7.02678 13.485 7.96447 12.5474C8.90215 11.6097 10.1739 11.0829 11.5 11.0829Z"
            fill="#333333"
        />
    </svg>
);

function undoChange() {
    this.quill.history.undo();
}
function redoChange() {
    this.quill.history.redo();
}
function insertNewLine() {
    const quill = this.quill;
    const cursorPosition = quill.getSelection().index || 0;
    quill.insertText(cursorPosition, "\n", "user");
    quill.setSelection(cursorPosition + 1, "user");
}

export const modules = {
    toolbar: {
        container: "#toolbar",
        handlers: {
            undo: undoChange,
            redo: redoChange,
            newline: insertNewLine,
        },
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
    },
};

export const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code-block",
    "new-line",
];

export const QuillToolbar = () => (
    <div id="toolbar">
        <span className="ql-formats" style={{ marginTop: "2px" }}>
            <button className="ql-undo" title="undo">
                <CustomUndo />
            </button>
            <button className="ql-redo" title="redo">
                <CustomRedo />
            </button>
        </span>
        <span className="ql-formats" style={{ display: "flex" }}>
            <select
                className="ql-header"
                defaultValue="3"
                title=" Heading Level"
            >
                <option value="1">Heading</option>
                <option value="2">Subheading</option>
                <option value="3">Normal Text </option>
            </select>

            <img src="/svg/dropdown.svg" alt="" style={{ marginTop: "10px" }} />
        </span>
        <span
            className="ql-formats"
            style={{ display: "flex", gap: "10px", marginTop: "5px" }}
        >
            <div style={{ display: "flex" }}>
                <select className="ql-align" title=" Alignment" />
                <img
                    style={{ marginTop: "4px" }}
                    src="/svg/dropdown.svg"
                    alt=""
                />
            </div>
            <div style={{ display: "flex" }}>
                <select className="ql-color" title=" Color" />
                <img
                    style={{ marginTop: "4px" }}
                    src="/svg/dropdown.svg"
                    alt=""
                />
            </div>
        </span>
        <span className="ql-formats" style={{ marginTop: "3px" }}>
            <button className="ql-bold" title="bold" />
            <button className="ql-italic" title="italic" />
            <button className="ql-underline" title="underline" />
            <button className="ql-strike" title="strike" />
        </span>
        <span className="ql-formats" style={{ marginTop: "3px" }}>
            <button className="ql-newline" title="newline" />
        </span>
        <span className="ql-formats" style={{ marginTop: "3px" }}>
            <button className="ql-clean" title="clear-formatting" />
        </span>
        <span className="ql-formats" style={{ marginTop: "3px" }}>
            <button className="ql-list" value="bullet" title="bullet" />
            <button className="ql-list" value="ordered" title="ordered" />
        </span>
        <span className="ql-formats" style={{ marginTop: "3px" }}>
            <button className="ql-link" title="link" />
            <button className="ql-image" title="image" />
        </span>
        <span className="ql-formats" style={{ marginTop: "3px" }}>
            <button className="ql-code-block" title="code-block" />
        </span>
        <span className="ql-formats" style={{ marginTop: "3px" }}>
            <button className="ql-blockquote" title="blockqoute" />
        </span>
        <span className="ql-formats" style={{ marginTop: "3px" }}>
            <button className="ql-hyphen" title="hyphen" />
        </span>
    </div>
);

export default QuillToolbar;
