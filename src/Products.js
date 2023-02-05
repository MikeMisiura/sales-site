import React from "react";
import Navigate from "./Navigate";
import { Outlet } from "react-router-dom";
import './App.css';

function Products() {

    return (
        <>
            <Navigate />
            <Outlet />
        </>
    );
}

export default Products;