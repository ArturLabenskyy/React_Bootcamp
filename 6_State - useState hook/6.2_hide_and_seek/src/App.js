import "./App.css";
import React, { useState } from "react";
import "./style.css";
import ColorBox from "./ColorBox.js";

function App() {
    let [isHidden, setVision] = useState(false);
    function showHide() {
        isHidden = isHidden ? false : true;
        setVision(isHidden);
    }
    return (
        <div className="box">
            <button onClick={showHide}>Show / Hide</button>
            <ColorBox isHidden={isHidden} />
        </div>
    );
}

export default App;
