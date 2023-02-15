import "./App.css";
import "./style.css";
import data from "./data.js";
import { allNames, bornBefore90 } from "./data.js";
import Name from "./Name.js";
import Card from "./Card";

function App() {
    const names = allNames(data);
    const before90 = bornBefore90(data);
    return (
        <div>
            <div className="names">
                {names.map((name) => {
                    return <Name name={name} />;
                })}
            </div>

            <div className="information">
                {before90.map((person) => {
                    return <Card person={person} />;
                })}
            </div>
        </div>
    );
}

export default App;
