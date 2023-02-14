import React from "react";
import "./style.css";

function ColorBox(props) {
    if (props.isHidden) return <div style={{ display: "none" }}></div>;
    else return <div className="color-box" style={{ display: "block" }}></div>;
}

export default ColorBox;
