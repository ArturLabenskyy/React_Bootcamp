import React from "react";

const Button = ({ toDo, setInput, setData }) => {
    const toDos = JSON.parse(localStorage.getItem(`todos`));

    const item = {
        id: toDos.length,
        text: toDo,
        isDone: "❌",
    };

    const addTodo = () => {
        toDos.push(item);
        localStorage.setItem("todos", JSON.stringify(toDos));
        setData(JSON.parse(localStorage.getItem("todos")));
        setInput("");
    };

    return <button onClick={addTodo}>Add</button>;
};

export default Button;
