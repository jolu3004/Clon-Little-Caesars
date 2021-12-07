import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";


function About() {
    return (
        <div className="about">
            <div className="aboutTop" 
            style={{backgroundImage: `url(${MultiplePizzas})`}}
            ></div>
            <div className="aboutBottom">
                <h1>Acerca de nosotros</h1>
                <p>Little Caesars Pizza was founded on May 8, 1959, by Mike Ilitch and his wife
                   Marian Ilitch. The first location was in a strip mall in Garden City, Michigan, 
                   a suburb of Detroit, and named "Little Caesar's Pizza Treat". The original store 
                   closed in October 2018.
                   The first Little Caesar's franchise location opened in 1962 in Warren, Michigan,
                   and at the time was still called Little Caesar's Pizza Treat. The same year the 
                   Little Caesar's logo became a 3D figure and was used in outdoor signage.
                </p>   
                
            </div>
            
        </div>
    )
}

export default About
