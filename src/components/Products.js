import React, { useEffect, useState } from "react";
import '../App.css';
import { db } from "../Firebase";

const Products = () => {

  const [product, setProduct] = useState([]);

    useEffect(() => {
      db.collection("product-details").onSnapshot((snapshot) => {
        setProduct(
          snapshot.docs.map((doc) => ({
            item: doc.data(),
            id: doc.id,
          }))
        );
      });
    }, []);

  return (
    <div className="small-container">
      <h2 className="title">Featued Products</h2>
      <div className="row">
      {product.map((prod) => (

        <div className="col-4" key={prod.id}>
        <img src={prod.item.url} alt="" />
        <h4>{prod.item.name}</h4>
        <div className="rating">
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
        </div>
        <p>${prod.item.price}</p>
      </div>
      ))}
      
      

      </div>
    </div>
  );
};

export default Products;
