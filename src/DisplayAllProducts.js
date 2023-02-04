import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
import { ProductContext } from "./ContextProvider";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack'

function DisplayAllProducts() {

    let { deleteProduct } = useContext(ProductContext)


    function handleDelete(id) {
        deleteProduct(id)
        console.log("deleted product: " + id)
    }

    return (
        <>
            <ProductContext.Consumer>
                {({ data }) => {
                    return (
                        <Stack direction="horizontal" gap={3} margin={15} >
                            {
                                data.map(data => {
                                    return (
                                        <Card style={{ width: '18rem' }} key={data.id}>
                                            <Card.Img variant="top" src={data.imageUrl} />
                                            <Card.Body>
                                                <Card.Title>{data.itemName}</Card.Title>
                                                <Card.Text>${data.price}</Card.Text>
                                                <Stack gap={3}>
                                                    <Button href={`/products/${data.id}`} variant="primary">See Details</Button>
                                                    <Button href={`/products/edit/${data.id}`} variant="warning">Edit</Button>
                                                    <Button variant="danger" onClick={ () => handleDelete(data.id) }>Delete</Button>
                                                </Stack>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                            }
                        </Stack>
                    )
                }}
            </ProductContext.Consumer>
        </>
    )
}

export default DisplayAllProducts