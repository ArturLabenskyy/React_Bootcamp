import React from "react";
import Balloon from "./Balloon";

const Child = ({ kids }) => {
    return (
        <div className="child">
            {kids.map((kid) => (
                <div className="single-child">
                    <h3>{kid.name}</h3>
                    <Balloon color={kid.color}></Balloon>
                </div>
            ))}
        </div>
    );
};

export default Child;
