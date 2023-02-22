import React, { useState } from "react";

const Item = ({ item, setData }) => {
    const [status, setStatus] = useState(item.isDone);

    function taskDone() {
        let localData = JSON.parse(localStorage.getItem("todos"));
        localData.forEach((el) => {
            if (el.id === item.id) el.isDone = "✔";
        });
        localStorage.setItem("todos", JSON.stringify(localData));
        setStatus("✔");
    }

    function deleteItem() {
        const newList = JSON.parse(localStorage.getItem(`todos`)).filter(
            (el) => el.id !== item.id
        );
        localStorage.setItem("todos", JSON.stringify(newList));
        setData(JSON.parse(localStorage.getItem(`todos`)));
    }

    return (
        <div className="todo-item">
            <div className="text-content" onClick={taskDone}>
                <h5>{status}</h5>
                <h4>{item.text}</h4>
            </div>
            <button onClick={deleteItem}>Delete</button>
        </div>
    );
};

export default Item;
