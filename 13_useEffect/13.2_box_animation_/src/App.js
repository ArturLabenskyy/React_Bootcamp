import React from "react";
import Box from "./Box";

import { useState, useEffect } from "react";
import "./style.css";

function App() {
    const [displayBox, setDisplay] = useState("none");

    useEffect(() => {
        setTimeout(() => {
            setDisplay("block");
        }, 1000);
        setTimeout(() => {
            setDisplay("none");
        }, 4000);
    }, []);

    return (
        <div style={{ display: displayBox }}>
            <Box size="3rem" />
            <Box size="2rem" />
            <Box size="1rem" />
        </div>
    );
}

export default App;
