import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import { useEffect, useState, useRef } from "react";

import "./style.css";

function App() {
    const colors = ["red", "green", "blue", "aqua", "black"];
    const [color, setColor] = useState("white");
    const box = useRef();
    const timer = (c, t) => {
        setTimeout(() => {
            setColor(c);
        }, t);
    };

    useEffect(() => {
        let t = 500;

        for (let i of colors) {
            timer(i, t);
            t += 500;
        }

        setTimeout(() => {
            box.current.style.borderRadius = "50%";
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="container">
            <div
                ref={box}
                className="box"
                style={{ backgroundColor: color }}
            ></div>
        </div>
    );
}

export default App;
