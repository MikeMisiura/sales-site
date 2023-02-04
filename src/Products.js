import React, { useContext } from "react";
import Navigate from "./Navigate";
import { Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ProductContext } from "./ContextProvider";
import './App.css';

function Products() {

    let { sortDescending, sortAscending } = useContext(ProductContext)


    function handleAsc() {
        console.log("a")
        sortAscending()
    }

    function handleDsc() {
        console.log("b")
        sortDescending()
    }

    return (
        <>
            <Navigate />
            <h1>Products</h1>
            <Button href={`products/add`} variant="primary" className="prodBtn">Add Product</Button>
            <Button onClick={ () => handleAsc() } variant="primary" className="prodBtn">Sort Ascending</Button>
            <Button onClick={ () => handleDsc() } variant="primary" className="prodBtn">Sort Descending</Button>
            
            <Outlet />
        </>
    );
}

export default Products;