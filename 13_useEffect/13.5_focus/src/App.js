import React, { useEffect, useRef } from "react";

import "./style.css";

function App() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="input">
            <input type="text" ref={inputRef} />
        </div>
    );
}

export default App;
