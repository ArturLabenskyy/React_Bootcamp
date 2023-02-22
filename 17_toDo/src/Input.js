import React, { useState } from "react";
import Button from "./Button";

const Input = ({ setData }) => {
    const [inputValue, setInput] = useState("");

    const handlerToDoText = (e) => {
        setInput(e.target.value);
    };

    return (
        <div className="input">
            <input
                value={inputValue}
                type="text"
                placeholder="Add todo"
                onChange={handlerToDoText}
            />
            <Button toDo={inputValue} setInput={setInput} setData={setData} />
        </div>
    );
};

export default Input;
