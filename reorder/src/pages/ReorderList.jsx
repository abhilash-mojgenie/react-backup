import React, { useRef, useState } from "react";
import Reorder, { reorder } from "react-reorder";

function ReorderList() {
    const [list, setList] = useState([1, 2, 3, 4, 5]);
    const ref = useRef();

    const onReorder = (event, previousIndex, nextIndex) => {
        setList(reorder(list, previousIndex, nextIndex));
    };

    return (
        <div>
            <Reorder
                reorderId="my-list"
                reorderGroup="reorder-group"
                getRef={ref}
                component="ul"
                placeholderClassName="placeholder"
                draggedClassName="dragged"
                lock="horizontal"
                holdTime={500}
                touchHoldTime={500}
                mouseHoldTime={200}
                onReorder={onReorder}
                autoScroll={true}
                disabled={false}
                disableContextMenus={true}
                placeholder={<div className="custom-placeholder" />}
            >
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </Reorder>
        </div>
    );
}

export default ReorderList;
