import React from "react";
// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
import { ProductContext } from "./ContextProvider";
// import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack'
import ProductCard from "./ProductCard";

function DisplayAllProducts() {
    return (
        <ProductContext.Consumer>
            {({ data }) => {
                return (
                    <Stack direction="horizontal" gap={3} margin={15} >
                        {
                            data.map(product => {
                                return (
                                    <ProductCard id={product.id} key={product.id} />
                                )
                            })
                        }
                    </Stack>
                )
            }}
        </ProductContext.Consumer>
    )
}

export default DisplayAllProducts