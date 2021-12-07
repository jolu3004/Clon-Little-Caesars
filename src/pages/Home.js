import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/pizza.jpg";
import "../styles/Home.css";

function Home() {
    return (
        <div className ="home" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer" >
                <h1>Little Caesars</h1>
                <p>THE BEST PIZZA IN THE WORLD!!!!</p>
                <Link to="/menu">
                <button> ORDENA AQUI </button>
                </Link>

            </div>
        </div>
    )
}

export default Home
