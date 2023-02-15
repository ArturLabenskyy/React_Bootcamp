import React from "react";
import Box4 from "./Box4";
import "./style.css";

const Box3 = () => {
    const style = {
        width: "80%",
        height: "80%",
        backgroundColor: "purple",
        justifyContent: "space-around",
    };
    return (
        <div className="box" style={style}>
            <Box4 />
            <Box4 />
        </div>
    );
};

export default Box3;
