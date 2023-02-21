import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import ProductBox from "./ProductBox";
import ErrorPage from "./ErrorPage";
import { data } from "./data";

import "./style.css";

const linksArray = [
    { path: "/", element: <Home />, errorElement: <ErrorPage /> },
    { path: "/products", element: <Products /> },
];
data.forEach((el) => {
    const productPage = {
        path: `/${el.id}`,
        element: <ProductBox product={el} />,
    };
    linksArray.push(productPage);
});

const router = createBrowserRouter(linksArray);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
