import React from "react";

const Balloon = ({ color }) => {
    console.log(color);
    return <div className="balloon" style={{ backgroundColor: color }}></div>;
};

export default Balloon;
