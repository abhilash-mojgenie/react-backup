import React, { useState, useEffect } from "react";
import { Draggable } from "react-drag-reorder";
import "../App.css";

function DraggableList() {
    const [data, setData] = useState([]);

    const fetchDataFromAPI = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos?_limit=7"
            );
            const apiData = await response.json();
            setData(apiData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const getChangedPos = (currentPos, newPos) => {
        console.log("Current Position:", currentPos);
        console.log("New Position:", newPos);
    };
    useEffect(() => {
        fetchDataFromAPI();
    }, []);
    return data.length > 0 ? (
        <Draggable onPosChange={getChangedPos}>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </Draggable>
    ) : null;
}

export default DraggableList;
