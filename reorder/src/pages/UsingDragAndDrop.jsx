import React, { useState, useEffect } from "react";

const DraggableList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchDataFromAPI();
    }, []);

    const fetchDataFromAPI = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos?_limit=7"
            );
            const apiData = await response.json();
            console.log("API Data:", apiData);
            setData(apiData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData("text/plain", index);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, toIndex) => {
        e.preventDefault();
        const fromIndex = e.dataTransfer.getData("text/plain");
        const updatedData = [...data];
        const [draggedItem] = updatedData.splice(fromIndex, 1);
        updatedData.splice(toIndex, 0, draggedItem);
        setData(updatedData);
    };

    return (
        <div>
            {data.map((item, index) => (
                <div
                    key={item.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, index)}
                    style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        marginBottom: "4px",
                    }}
                >
                    {item.title}
                </div>
            ))}
        </div>
    );
};

export default DraggableList;
