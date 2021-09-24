import React, { useEffect, useState } from "react";
import "../App.css";
import { db } from "../Firebase";

const OfferLine = () => {
  const [saleCard, setSaleCard] = useState([]);

  useEffect(() => {
    db.collection("flash-sale").onSnapshot((snapshot) => {
      setSaleCard(
        snapshot.docs.map((doc) => ({
          item: doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);

  return (
    <div className="testimonial">
      <div className="small-container">
        <div className="row">
          {saleCard.map((card) => (
            <div className="col-3" key={card.id}>
              <i className="fa fa-quote-left" aria-hidden="true"></i>
              <p>{card.item.price}</p>
              <div className="rating">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
              <img src={card.item.url} alt="" />
              <h3>{card.item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferLine;
