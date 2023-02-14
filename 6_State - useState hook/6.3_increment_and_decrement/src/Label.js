import React from "react";
import "./style.css";

const Label = (props) => {
    const value = props.value;
    const myStyle = {
        backgroundColor: "black",
        font: "white",
    };
    if (value > 0) {
        myStyle.backgroundColor = "green";
    } else if (value < 0) {
        myStyle.backgroundColor = "red";
    } else {
        myStyle.backgroundColor = "black";
    }
    return (
        <div>
            <label>Current Value</label>
            <input
                type="number"
                value={value}
                min="-10"
                max="10"
                style={myStyle}
            />
        </div>
    );
};

export default Label;
