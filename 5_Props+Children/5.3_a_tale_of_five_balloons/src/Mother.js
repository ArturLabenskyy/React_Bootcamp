import React from "react";
import Child from "./Child";
import "./style.css";

const Mother = () => {
    const kids = [
        { name: "Ori", color: "red" },
        { name: "Ron", color: "blue" },
        { name: "Sigalit", color: "green" },
        { name: "Ruti", color: "yellow" },
        { name: "Alon", color: "purple" },
    ];
    return (
        <div className="wrapper">
            <h1>A Tale of Five Balloons</h1>
            <Child kids={kids}></Child>
        </div>
    );
};

export default Mother;
