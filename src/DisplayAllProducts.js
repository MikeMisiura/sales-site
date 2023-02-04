import React from "react";
import { ProductContext } from "./ContextProvider";
import Stack from 'react-bootstrap/Stack'
import ProductCard from "./ProductCard";
import './App.css';

function DisplayAllProducts() {
    return (
        <ProductContext.Consumer>
            {({ data }) => {
                return (
                    <Stack direction="horizontal" gap={3} className="flex-container" >
                        {data.map(product => {
                            return (
                                <ProductCard id={product.id} key={product.id} />
                            )
                        })}
                    </Stack>
                )
            }}
        </ProductContext.Consumer>
    )
}

export default DisplayAllProducts