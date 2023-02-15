import React from "react";
import Box2 from "./Box2.js";
import "./style.css";

const Box1 = () => {
    const style = {
        height: "500px",
        width: "500px",
        backgroundColor: "Green",
    };
    return (
        <div className="box" style={style}>
            <Box2 />
        </div>
    );
};

export default Box1;
