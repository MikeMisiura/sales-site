import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack'
import { useParams } from 'react-router-dom';
import { ProductContext } from "./ContextProvider";

function ProductDetails() {
    let params = useParams();
    console.log(params)
    let id = parseInt(params.productId)
    console.log(id)

    let { deleteProduct } = useContext(ProductContext)


    function handleDelete(id) {
        deleteProduct(id)
        console.log("deleted product: " + id)
    }

    function mim(params) {
        console.log(params)
        if (params) {
            return (<Card.Text>Made in Montana</Card.Text>)
        } else {
            return
        } 
    }

    return (
        <ProductContext.Consumer>
            {
                function ({ getProduct }) {
                    let product = getProduct(id);
                    console.log(product)
                    return (
                        <>
                            {
                                product ?
                                    (
                                        <Card>
                                            <Card.Img variant="top" src={product.imageUrl} />

                                            <Card.Body>
                                                <Card.Title>{product.itemName}</Card.Title>
                                                <Card.Text>${product.price}</Card.Text>
                                                { mim(product.montana)}
                                                <Card.Text>{product.description}</Card.Text>
                                                <Stack gap={3}>
                                                    <Button href={`/products/edit/${product.id}`} variant="warning">Edit</Button>
                                                    <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
                                                </Stack>
                                            </Card.Body>
                                        </Card>

                                    )
                                    :
                                    (
                                        <p>Sorry, No Product Selected</p>
                                    )
                            }
                        </>
                    )
                }
            }
        </ProductContext.Consumer>
    );
}

export default ProductDetails;