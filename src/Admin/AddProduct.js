import React, { useState } from "react";
import {db,storage} from "../Firebase"

const AddProduct = () => {

const [image, setImage] = useState("");
const [name, setName] = useState("");
const [price, setPrice] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("product-details")
              .add({
                url:url,
                name:name,
                price:price

              })
              .then(() => {
                alert("Details has been submitted");
              })
              .catch((error) => {
                alert(error.message);
              });
          });
          setName("");
          setPrice("");
          setImage("");
      }
    );
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="text-white">
      <div className="mt-4 mb-4 d-flex">
        <h1>Add product</h1>
      </div>
      <br /> <br />
      <form className="container" onSubmit={submitHandler}>
        <div className="mb-3">
          <input
            style={{
              padding: "1rem",
              background: "lightgray",
              width: "100%",
              borderRadius: "25px",
            }}
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>{" "}
          <br />
          <input
            style={{
              padding: "1rem",
              background: "lightgray",
              width: "100%",
              borderRadius: "25px",
              marginTop: "2rem",
            }}
            type="text"
            className="form-control"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <br />
          <br />
          <input
            type="file"
            id="upload"
            placeholder="Image Upload"
            required
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
