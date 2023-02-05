import React from "react";
import { ProductContext } from "./ContextProvider";
import Stack from 'react-bootstrap/Stack'
import ProductCard from "./ProductCard";
import DisplayAllProducts from "./DisplayAllProducts";

function DisplayThreeProducts() {
    return (
        <ProductContext.Consumer>
            {({ data }) => {
                if (data.length >= 3) {
                    let threeData = []
                    for (let i = 0; i < 3; i++) {
                        const element = data[i];
                        threeData.push(element)
                    }
                    return (
                        <Stack direction="horizontal" gap={3} margin={15} className="flex-container"  >
                            {
                                threeData.map(product => {
                                    return (
                                        <ProductCard id={product.id} key={product.id} />
                                    )
                                })
                            }
                        </Stack>
                    )
                } else {
                    return (
                        <DisplayAllProducts />
                    )
                }
            }}
        </ProductContext.Consumer>
    )
}

export default DisplayThreeProducts