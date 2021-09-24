import React, { useState } from "react";
import { db, storage } from "../Firebase";

const AddBanner = () => {
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
            db.collection("banner")
              .doc("bannerID")
              .set({
                url: url,
              })
              .then(() => {
                alert("Details has been submitted");
              })
              .catch((error) => {
                alert(error.message);
              });
          });
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
        <h1>Add Banner </h1>
      </div>
      <br /> <br />
      <form className="container" onSubmit={submitHandler}>
        <div className="mb-3">
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

export default AddBanner;
