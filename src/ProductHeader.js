import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { ProductContext } from "./ContextProvider";
import './App.css';
import DisplayAllProducts from "./DisplayAllProducts";

function ProductHeader() {

    let { sortDescending, sortAscending } = useContext(ProductContext)

    function handleAsc() {
        sortAscending()
    }

    function handleDsc() {
        sortDescending()
    }

    return (
        <>
            <h1 className="margin">Products</h1>
            <Button href={`products/add`} variant="primary" className="margin">Add Product</Button>
            <Button onClick={() => handleAsc()} variant="primary" className="margin">Sort Ascending</Button>
            <Button onClick={() => handleDsc()} variant="primary" className="margin">Sort Descending</Button>
            <DisplayAllProducts />
        </>
    );
}

export default ProductHeader;