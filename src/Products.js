import React from "react";
import Navigate from "./Navigate";
import { Outlet } from "react-router-dom";

function Products() {

    return (
        <>
            <Navigate />
            <Outlet />
        </>
    );
}

export default Products;