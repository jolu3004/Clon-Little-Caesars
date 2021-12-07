import React from 'react'
import  Instagram  from '@material-ui/icons/Instagram';
import  Facebook  from '@material-ui/icons/Facebook';
import  LinkedIn  from '@material-ui/icons/LinkedIn';
import  Twitter  from '@material-ui/icons/Twitter';
import "../styles/Footer.css";


function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia" >
                <Instagram/>
                <Facebook/>
                <LinkedIn/>
                <Twitter/>
            </div>
            <p>&copy; 2001 JoanPizza.com</p>
        </div>
    )
}

export default Footer
