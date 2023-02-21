import React from "react";

import Navbar from "./Navbar";

import "./style.css";
import { data } from "./data";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <>
            <Navbar />
            <div className="products">
                <div className="products-list">
                    {data.map((el) => {
                        const a = `/${el.id}`;
                        return (
                            <Link to={a} className="link" product={el}>
                                {" "}
                                {el.title}{" "}
                            </Link>
                        );
                    })}
                </div>
            </div>
            ;
        </>
    );
};

export default Products;
