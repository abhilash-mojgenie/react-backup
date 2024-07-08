import React from "react";
import { Link } from "react-router-dom";

function View({ content }) {
    console.log("content", content);
    return (
        <>
            <div>
                <h1>{content}</h1>
            </div>
            <button>
                <Link to="/">Back</Link>
            </button>
        </>
    );
}

export default View;
