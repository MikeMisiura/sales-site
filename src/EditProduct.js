import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from './ContextProvider';

function EditProduct() {
    let params = useParams()
    let pId = params.productId

    let { editProduct } = useContext(ProductContext)

    // let globalProduct = getProduct(pId)

    // console.log(globalProduct)
    let navigate = useNavigate()

    const [product, setProduct] = useState(
        {
            itemName: "",
            price: "",
            montana: false,
            description: "",
            imageUrl: "https://source.unsplash.com/random"
        }
    )

    let { itemName, price, montana, description, imageUrl } = product

    function handleChange(event) {
        setProduct((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        editProduct(product, pId)
            .then(() =>
                navigate('/products'))
    }

    return (
        <>

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                    type="text"
                    name="itemName"
                    placeholder="Enter Product Name"
                    value={itemName}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="text"
                    name="price"
                    placeholder="Enter Price"
                    value={price}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Check
                type="switch"
                name="montana"
                id="formMadeInMontana"
                label="Made in Montana"
                checked={montana}
                onChange={handleChange}
            />
            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    name="description"
                    rows={3}
                    value={description}
                    onChange={handleChange}
                    placeholder="Enter Product Description"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImageUrl">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                    type="text"
                    name="imageUrl"
                    placeholder="Enter Image URL"
                    value={imageUrl}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    );
}

export default EditProduct;