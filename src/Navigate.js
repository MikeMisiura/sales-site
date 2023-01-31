import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function About() {
    return (
        <Navbar>
            <Container>

                <Navbar.Brand href='home'>
                <img src="https://source.unsplash.com/photos/645Xrtc0BKs" alt='CCC mock logo' width={100} id='logo' />
                {/* <img src="../src/images/c.jpg" alt='CCC mock logo' width={100} id='logo' /> */}
                    Cast, Cut, and Crochet
                </Navbar.Brand>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="products">Products</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default About;