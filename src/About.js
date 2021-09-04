import React from 'react';
import web from "../src/Images/officeboy.jpg";
import Common from "./Common";
const About=()=> {
    return(
        <div>
                    <Common name="Welcome to about Page" 
                    imgsrc={web} 
                    visit="/contact" 
                     btnname="contact now"/>
        </div>
    )

}
export default About;