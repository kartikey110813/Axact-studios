import React, { useState } from 'react'
import { db, storage } from '../Firebase';

const AddFlashSaleCard = () => {

    const [names, setNames] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

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
            db.collection("flash-sale")
              .add({
                url:url,
                name:names,
                price:description

              })
              .then(() => {
                alert("Details has been submitted");
              })
              .catch((error) => {
                alert(error.message);
              });
          });
          setNames("");
          setDescription("");
          setImage("");
      }
    );

   }

   const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

    return (
        <div className="text-white">
        <div className="mt-4 mb-4 d-flex">
          <h1>Add Flash sale card</h1>
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
              value={names}
              onChange={(e) => setNames(e.target.value)}
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
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
    )
}

export default AddFlashSaleCard
