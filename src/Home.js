import React from 'react';
import Navigate from "./Navigate";

function Home() {

    function threeProducts() {
        
        return (
            <p>display 3 products</p>
        )
    }

    return (
        <>
            <Navigate />
            <h1>
                <img src="https://source.unsplash.com/photos/645Xrtc0BKs" alt='CCC mock logo' width={100} id='logo' />
                Cast, Cut, and Crochet
            </h1>
            {threeProducts()}
        </>
    );
}

export default Home;