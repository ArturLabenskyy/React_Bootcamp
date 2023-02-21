import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <button>
                <Link to="/">Home</Link>
            </button>
            <button>
                <Link to="/products">Products</Link>
            </button>
        </div>
    );
};

export default Navbar;
