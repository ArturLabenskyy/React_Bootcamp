import React from "react";

// Create a Card component that you will pass via props the objects before 1990 and print them on the screen.
// - which includes their name, birthday, favorite meats, and favorite fish foods.
const Card = (props) => {
    return (
        <div>
            <h1>Name: {props.person.name}</h1>
            <h2>Birth Date: {props.person.birthday}</h2>
            <h2>
                Favorite meats:
                {props.person.favoriteFoods.meats.map((el) => {
                    return <> {el} </>;
                })}
            </h2>
            <h2>
                Favorite fish:
                {props.person.favoriteFoods.fish.map((el) => {
                    return <> {el} </>;
                })}
            </h2>
        </div>
    );
};

export default Card;
