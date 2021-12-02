import React from "react";
import img1 from "../../imgs/img1.svg";
import "./cakecards.css";
import { db } from "../../firebase";
import axios from "axios";
const Cakecards = ({
  id,
  img,
  img_id,
  name,
  description,
  price,
  removeData,
}) => {
  const deleteCake = async () => {
    try {
      console.log(img_id);
      await db.collection("Cakes").doc(id).delete();
      axios.post(`http://localhost:5000/api/delete`, {
        clid: img_id,
      });
      console.log("success");
      removeData(id);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className='col-md-3'>
        <div className='card-sl'>
          <div className='card-image'>
            <img className='img-fluid cardsize' src={img} />
          </div>

          <div className='card-heading'>{name}</div>
          <div className='card-text'>{description}</div>
          <div
            className='card-text d-flex align-items-center justify-content-between'
            style={{ fontWeight: "600" }}
          >
            Rs {price}/-
            <button className='btn btn-danger btn-sm' onClick={deleteCake}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cakecards;
