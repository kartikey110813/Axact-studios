import React, { useEffect, useState } from 'react'
import "../App.css"
import { db } from '../Firebase'

const FlashSale = () => {

    const [image, setImage] = useState([]);

    useEffect(() => {
        db.collection("banner").onSnapshot((snapshot) => {
          setImage(
            snapshot.docs.map((doc) => ({
              item: doc.data(),
              id: doc.id,
            }))
          );
        });
      }, []);
    return (
        <div className="offer">
        <div className="small-container">
            <div className="row">
                <div className="col-2">
                     {image.map((img) => (

                         <img key={img.id} src={img.item.url} className="offer-img" alt="" />
                     ))}
                </div>
                <div className="col-2">
                    <p> "Exclusivly Available On RedStore" </p>
                    <h1>Smart Bank <br /> 60% OFF</h1>
                      <small>
                        Le lorem ipsum est, en imprimerie,
                        une suite de mots sans signification utilisée à 
                        titre provisoire pour calibrer une mise en page. 
                      </small> 
                      <br />
                      <div className="btn"> Buy Now</div>

                </div>

            </div>
        </div>
    </div>
    )
}

export default FlashSale
