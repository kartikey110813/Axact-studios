import React from 'react'
import '../App.css'
import Img1 from "../images/logo-godrej.png";
import Img2 from "../images/logo-oppo.png";
import Img3 from "../images/logo-coca-cola.png";
import Img4 from "../images/logo-paypal.png";
import Img5 from "../images/logo-philips.png";

const Brands = () => {
    return (
        <div className="brands">
        <div className="small-container">
            <div className="row">
                <div className="col-5">
                    <img src={Img1} alt="" />
                </div>
                <div className="col-5">
                    <img src={Img2} alt="" />
                </div>
                <div className="col-5">
                    <img src={Img3} alt="" />
                </div>
                <div className="col-5">
                    <img src={Img4} alt="" />
                </div>
                <div className="col-5">
                    <img src={Img5} alt="" />
                </div>
                
            </div>
        </div>
    </div>

    )
}

export default Brands
