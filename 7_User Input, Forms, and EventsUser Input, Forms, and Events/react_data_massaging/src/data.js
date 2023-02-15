const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
];

// - Create a function that returns an array of all the names from the object.
function allNames(data) {
    return data.map((person) => {
        return person.name;
    });
}

// Create a function that returns all the objects that are born before 1990.
function bornBefore90(data) {
    return data.filter((person) => {
        return parseInt(person.birthday.slice(-4)) < 1990;
    });
}

export default data;
export { allNames, bornBefore90 };
