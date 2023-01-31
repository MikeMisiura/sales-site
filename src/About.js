import React from 'react';
import Navigate from "./Navigate";
import Stack from 'react-bootstrap/Stack'

function About() {
    return (
        <>
            <Navigate />
            <h1>About Us</h1>
            <Stack direction="horizontal" gap={3} margin={15} >
                <div>
                    {/* placeholder description from ChatGPT. chat.openai.com*/}
                    A small crafting company based in Montana specializes in handmade, 
                    unique and high-quality wooden products. 
                    Using locally sourced materials and traditional techniques, 
                    the company creates a range of items such as 
                    furniture, home decor, and functional objects with a rustic charm 
                    that embodies the beauty of the Montana landscape. 
                    Each piece is carefully crafted with attention to 
                    detail and a commitment to sustainability, 
                    making it a perfect fit for those who value natural materials 
                    and handmade goods.
                </div>
                <div>
                    <img 
                        src="https://source.unsplash.com/random" 
                        alt='about photo' 
                        width={300} 
                        id='logo' 
                    />
                </div>
            </Stack>
        </>
    );
}

export default About;