import React from "react";
import "./style.css";

const CustomButton = (props) => {
    const click = () => {
        props.setColor(props.color);
    };
    return (
        <button style={{ backgroundColor: props.color }} onClick={click}>
            {props.color}
        </button>
    );
};

export default CustomButton;
