import React from "react";

import Navbar from "./Navbar";

const ErrorPage = () => {
    return (
        <div>
            <Navbar />
            <div className="error-page">
                <h1>ERROR THE PAGE NOT FOUND</h1>
            </div>
        </div>
    );
};

export default ErrorPage;
