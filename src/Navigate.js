import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import c from "./images/c.jpg"
import './App.css';

function Navigate() {
    return (
        <Navbar className='margin'>
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
        </Navbar>
    );
}

export default Navigate;