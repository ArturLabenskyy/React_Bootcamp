import React, { useState } from "react";

import Input from "./Input";
import ToDoItem from "./ToDoList";

import "./style.css";

function App() {
    if (!JSON.parse(localStorage.getItem("todos"))) {
        localStorage.setItem("todos", JSON.stringify([]));
    }
    const [data, setData] = useState(JSON.parse(localStorage.getItem("todos")));

    return (
        <div className="main">
            <h1>TODO's</h1>
            <h3>Local Storage CRUD App</h3>
            <h4>CRUD - Create Read Update Delete</h4>
            <Input setData={setData} />
            <ToDoItem data={data} setData={setData} />
        </div>
    );
}

export default App;
