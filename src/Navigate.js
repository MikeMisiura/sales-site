import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import c from "./images/c.jpg"
import './App.css';

function Navigate() {
    // const handleSearchChange = (event) => {
    //     event.preventDefault()
    //     console.log(event.target.value)
    // }

    return (
        <Navbar>
            <div className='nav'>

                <Navbar.Brand href='/home'>
                    <img src={c} alt='CCC mock logo' height={100} id='logo' />
                    Cast, Cut, and Crochet
                </Navbar.Brand>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
            {/* <Form className='d-flex'>
                <FormControl
                    onChange={handleSearchChange}
                    type='search'
                    placeholder='Search'
                    className='me-4'
                    aria-label='Search'
                />

            </Form> */}
        </Navbar>
    );
}

export default Navigate;