import "./App.css";
import React, { useState } from "react";
import "./style.css";
function App() {
    const [count, setCount] = useState(0);
    const increaseValue = () => {
        setCount(count + 1);
    };
    return (
        <div className="app">
            <button onClick={increaseValue}>increment</button>
            <p>{count}</p>
        </div>
    );
}

export default App;
