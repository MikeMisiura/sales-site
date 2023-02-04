import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import { ProductContext } from "./ContextProvider";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack'


function DisplayThreeProducts() {

    let { deleteProduct } = useContext(ProductContext)


    function handleDelete(id) {
        deleteProduct(id)
        console.log("deleted product: " + id)
    }



    return (
        <>
            <h3>Check out these top products</h3>
            <ProductContext.Consumer>
                {({ data }) => {
                    if (data.length >= 3) {
                        let threeData = []
                        for (let i = 0; i < 3; i++) {
                            const element = data[i];
                            threeData.push(element)
                        }
                        return (
                            <Stack direction="horizontal" gap={3} margin={15} >
                                {
                                    threeData.map(data => {
                                        return (
                                            <Card style={{ width: '18rem' }} key={data.id}>
                                                <Card.Img variant="top" src={data.imageUrl} />
                                                <Card.Body>
                                                    <Card.Title>{data.itemName}</Card.Title>
                                                    <Card.Text>{data.price}</Card.Text>
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
                    } else {
                        return (
                            <Stack direction="horizontal" gap={3} margin={15} >
                                {
                                    data.map(data => {
                                        return (
                                            <Card style={{ width: '18rem' }} key={data.id}>
                                                <Card.Img variant="top" src={data.imageUrl} />
                                                <Card.Body>
                                                    <Card.Title>{data.itemName}</Card.Title>
                                                    <Card.Text>{data.price}</Card.Text>
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
                    }
                }}
            </ProductContext.Consumer>
        </>
    )
}

export default DisplayThreeProducts