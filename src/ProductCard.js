import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ProductContext } from "./ContextProvider";
import Stack from 'react-bootstrap/Stack'


function ProductCard(props) {
    const { getProduct, deleteProduct } = useContext(ProductContext);
    const product = getProduct(props.id)

    // let thisId = props.key + 1

    function handleDelete(id) {
        deleteProduct(id)
        console.log("deleted product: " + id)
    }

    return (
        <>
            <Card style={{ width: '18rem' }} key={product.id}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                    <Card.Title>{product.itemName}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Stack gap={3}>
                        <Button href={`/products/${product.id}`} variant="primary">See Details</Button>
                        <Button href={`/products/edit/${product.id}`} variant="warning">Edit</Button>
                        <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
                    </Stack>
                </Card.Body>
            </Card>
        </>

    );
}

export default ProductCard;