import "./App.css";
import Card from "./Card";
import "./style.css";

function App() {
    const card1 = {
        image: `https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1038&q=80`,
        title: `First random title`,
        description: `First random description`,
        links: {
            share: `#`,
            explore: `# `,
        },
    };
    const card2 = {
        image: `https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80`,
        title: `Second random title`,
        description: `Second random description`,
        links: {
            share: `#`,
            explore: `# `,
        },
    };
    const card3 = {
        image: `https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80`,
        title: `Third random title`,
        description: `Third random description`,
        links: {
            share: `#`,
            explore: `# `,
        },
    };
    return (
        <div className="card-holder">
            <Card props={card1}></Card>
            <Card props={card2}></Card>
            <Card props={card3}></Card>
        </div>
    );
}

export default App;
