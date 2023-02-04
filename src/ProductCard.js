import React
// , { useContext }
 from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ProductContext } from "./ContextProvider";

function ProductCard(props) {
    // const { data } = useContext(ProductContext);

    // let thisId = props.key + 1

    return (
        <>this is the product card</>
        // <ProductContext.Consumer>
        //         {(data[thisId]) => {
        //             return (
        //     <Card style={{ width: '18rem' }}>
        //         <Card.Img variant="top" src="holder.js/100px180" />
        //         <Card.Body>
        //             <Card.Title>{data.itemName}</Card.Title>
        //             <Card.Text>
        //                 Some quick example text to build on the 
        //                 card title and make up the
        //                 bulk of the card's content.
        //             </Card.Text>
        //             <Button variant="primary">Go somewhere</Button>
        //         </Card.Body>
        //     </Card>
        //             )}}
        // </ProductContext.Consumer>

    );
}

export default ProductCard;