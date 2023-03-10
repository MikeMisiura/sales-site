import React from 'react';
import DisplayThreeProducts from './DisplayThreeProducts';
import Navigate from "./Navigate";
import c from "./images/c.jpg"
import './App.css';

function Home() {
    return (
        <>
            <Navigate />
            <div className='margin' >
                <h1>
                    <img
                        src={c}
                        alt='CCC mock logo' width={100} id='logo' />
                    Welcome to Cast, Cut, and Crochet
                </h1>
                <h3>Check out these top products</h3>
            </div>
            <DisplayThreeProducts />
        </>
    );
}

export default Home;