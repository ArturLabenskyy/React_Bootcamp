import React from "react";

import Item from "./Item";

import "./style.css";

const ToDoItem = ({ data, setData }) => {
    return (
        <div className="todo-list">
            {data.map((el) => {
                return <Item item={el} key={el.id} setData={setData} />;
            })}
        </div>
    );
};

export default ToDoItem;
