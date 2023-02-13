import React from "react";
import "./style.css";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.props.image} alt=""></img>
            <h1>{props.props.title}</h1>
            <p>{props.props.description}</p>
            <div className="links">
                <a href={props.props.links.share}>Share</a>
                <a href={props.props.links.explore}>Explore</a>
            </div>
        </div>
    );
};

export default Card;
