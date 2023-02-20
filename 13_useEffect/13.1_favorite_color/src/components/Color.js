import React from "react";
import { useState, useEffect } from "react";

const Color = ({ color }) => {
    const [favoriteColor, setColor] = useState("green");
    useEffect(() => {
        setColor(color);
        setTimeout(() => {
            setColor("black");
        }, 1000);
    }, [color]);
    return <span>{favoriteColor}</span>;
};

export default Color;
