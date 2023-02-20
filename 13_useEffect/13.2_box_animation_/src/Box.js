import React from "react";
import "./style.css";

const Box = ({ size }) => {
    const style = {
        height: size,
        width: size,
        margin: "1rem",
        background: "green",
    };
    return <div style={style} className="box"></div>;
};

export default Box;
