import React, { useEffect, useRef } from "react";
import Spinner from "./Spinner";

import "./style.css";

function App() {
    const spinner = useRef();

    useEffect(() => {
        setTimeout(() => {
            spinner.current.style.display = "none";
        }, 3500);
    }, []);

    return (
        <div ref={spinner} className="container">
            <Spinner />
        </div>
    );
}

export default App;
