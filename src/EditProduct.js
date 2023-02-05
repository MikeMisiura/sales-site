import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from './ContextProvider';
import './App.css';

function EditProduct() {

    const [product, setProduct] = useState(
        {
            itemName: "",
            price: "",
            montana: false,
            description: "",
            imageUrl: "https://source.unsplash.com/random"
        }
    )

    let navigate = useNavigate()
    let params = useParams()
    let pId = params.productId
    let id = parseInt(pId)
    let { editProduct, getProduct } = useContext(ProductContext)
    let globalProduct = getProduct(id)
    let { itemName, price, montana, description, imageUrl } = product

    useEffect(() => {
        async function handleGetProduct() {
            globalProduct = getProduct(id)
            if (globalProduct) {
                setProduct({
                    itemName: globalProduct.itemName,
                    price: globalProduct.price,
                    montana: globalProduct.madeInMontana,
                    description: globalProduct.description,
                    imageUrl: globalProduct.imageUrl
                })
            } else {
                globalProduct = getProduct(id)
            }
        }
        handleGetProduct()
    }, [globalProduct]);

    function handleChange(event) {
        if (event.target.name === "montana") {
            setProduct((preValue) => {
                return { ...preValue, montana: event.target.checked }
            })
        } else {
            setProduct((preValue) => {
                return { ...preValue, [event.target.name]: event.target.value }
            })
        }
    }

    function handleSubmit(event) {
        event.preventDefault()

        editProduct(product, pId)
            .then(() =>
                navigate('/products'))
    }

    return (
        <Form onSubmit={handleSubmit} className="margin">
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
                    type="number"
                    name="price"
                    placeholder="Enter Price"
                    value={price}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Check
                type="checkbox"
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
    );
}

export default EditProduct;