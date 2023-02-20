import "./style.css";

import Color from "./components/Color";

function App() {
    return (
        <div>
            <h1>
                My favorite color is <Color color={"green"} />
            </h1>
        </div>
    );
}

export default App;
