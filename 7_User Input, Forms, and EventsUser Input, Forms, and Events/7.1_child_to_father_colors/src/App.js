import "./App.css";
import "./style.css";
import CustomButton from "./CustomButton";
import React, { useState } from "react";

function App() {
    const colors = ["blue", "red", "yellow"];
    const [color, setColor] = useState("");

    return (
        <div>
            {colors.map((el) => {
                return <CustomButton color={el} setColor={setColor} />;
            })}
            <h1>The selected color is: {color}</h1>
        </div>
    );
}

export default App;
