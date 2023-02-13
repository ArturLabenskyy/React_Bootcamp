import React from "react";
import "./style.css";

const Button = (props) => {
    const name = props.name;
    const className = props.className;
    return (
        <div>
            <button className={className}>{name}</button>
        </div>
    );
};

export default Button;
