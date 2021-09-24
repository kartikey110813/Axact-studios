import React from 'react'
import "../App.css"
import Img1 from "../images/play-store.png"


const Footer = () => {
    return (
        <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col-1">
                    <h3>Download Our App</h3>
                    <p>Download App for Android and ios mobile phone.</p>
                    <div className="app-logo">
                       <img src={Img1} alt="" />
                       <img src={Img1} alt="" />
                        
                    </div>
                </div>

                <div className="footer-col-2">
                    <h1>LOGO</h1>
                    <p>Download App for Android and ios mobile phone.</p>
                </div>
                <div className="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog </li>
                        <li>Return Plicy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>
                <div className="footer-col-4">
                    <h3>Follow us </h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instaram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p>Copyright 2020 - AXACT STUDIOS INTERNSHIP TEST</p>
        </div>
    </div>
    )
}

export default Footer
