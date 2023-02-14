import "./App.css";
import Label from "./Label.js";
import "./style.css";
import React, { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const increase = () => {
        if (counter === 10) setCounter(counter + 0);
        else setCounter(counter + 1);
    };
    const decrease = () => {
        if (counter === -10) setCounter(counter + 0);
        else setCounter(counter - 1);
    };
    return (
        <div className="container">
            <button onClick={increase}>Increase</button>
            <Label value={counter} />
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}

export default App;
