import React from 'react';
import DisplayThreeProducts from './DisplayThreeProducts';
import Navigate from "./Navigate";
import c from "./images/c.jpg"

function Home() {


    return (
        <>
            <Navigate />
            <h1>
                <img
                //  src="https://source.unsplash.com/photos/645Xrtc0BKs" 
                 src={c}
                 alt='CCC mock logo' width={100} id='logo' />
                Welcome to Cast, Cut, and Crochet
            </h1>
            <DisplayThreeProducts />
        </>
    );
}

export default Home;