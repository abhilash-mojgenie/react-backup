import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "../../src/styles/home.css";
export const Editor = () => {
    const [state, setState] = React.useState({ value: null });
    const handleChange = (value) => {
        setState({ value });
    };
    return (
        <div className="text-editor">
            <EditorToolbar />
            <ReactQuill
                theme="snow"
                value={state.value}
                onChange={handleChange}
                placeholder={"Type Article Content"}
                modules={modules}
                formats={formats}
            />
        </div>
    );
};

export default Editor;
