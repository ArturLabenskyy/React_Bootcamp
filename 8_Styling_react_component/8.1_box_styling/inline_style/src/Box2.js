import React from "react";
import Box3 from "./Box3.js";
import "./style.css";

const Box2 = () => {
    const style = {
        height: "80%",
        width: "80%",
        backgroundColor: "blue",
    };
    return (
        <div className="box" style={style}>
            <Box3 />
        </div>
    );
};

export default Box2;
