import React from "react";

import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import "./style.css";

const ProductBox = ({ product }) => {
    return (
        <>
            <Navbar />
            <div className="box">
                <h1>{product.title}</h1>
                <h3>{product.size}</h3>
                <img src={product.imageUrl} alt={product.title} />
                <h3>{product.price}</h3>
                <Link to="/products">Back</Link>
            </div>
        </>
    );
};

export default ProductBox;
