import React from 'react';
import web from "../src/Images/officegirl.jpg";
import Common from "./Common";
const Home=()=>{

    return(
        <div>
                    <Common name="Grow Your Bussiness with " 
                    imgsrc={web} 
                    visit="/service" 
                     btnname="Get Started"/>
        </div>
    );
};

export default Home;