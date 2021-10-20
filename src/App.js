import React, { useState } from "react";
import img from "./imgs/img1.svg";
import "./App.css";
const App = () => {
  const [cakeImg, setCakeImg] = useState();

  return (
    <>
      <div className="row maindiv">
        <h1 className="text-center mb-5">Add a New Cake</h1>
        {/* leftside Image */}
        <div className="col-lg-6">
          <img src={img} className="img-fluid" alt="" />
        </div>
        {/* The product div */}
        <div className=" col-lg-6  d-flex flex-column">
          <label htmlFor="" style={{ fontWeight: "600" }}>
            {" "}
            Product Image :
            <input
              type="file"
              onChange={(e) => setCakeImg(e.target.files[0])}
              className="mb-2"
            />
            {cakeImg && (
              <img
                style={{ height: "80px", width: "80px" }}
                alt="enter img"
                src={URL.createObjectURL(cakeImg)}
              />
            )}
          </label>
          <label htmlFor="" style={{ fontWeight: "600" }}>
            Product Name :{" "}
            <input
              type="text"
              placeholder="Enter Product name"
              className="mb-2"
            />
          </label>
          <label htmlFor="" style={{ fontWeight: "600" }}>
            Product description :{" "}
          </label>
          <textarea
            name=""
            id=""
            cols="15"
            rows="5"
            placeholder="Enter a Description "
            className="mb-2"
          ></textarea>
          <label htmlFor="" style={{ fontWeight: "600" }}>
            Product Price :{" "}
            <input type="text" placeholder="Enter price" className="mb-2" />
          </label>

          <label htmlFor="" style={{ fontWeight: "600" }}>
            Category :{" "}
            <select name="" id="" className="mb-2">
              <option value="">Designer cake</option>
              <option value="">Festival cake</option>
              <option value="">bla bla cake</option>
            </select>
          </label>
          <label htmlFor="" style={{ fontWeight: "600" }}>
            Offer or Coupons :{" "}
            <input type="text" placeholder="Enter offers or coupon" />
          </label>

          <button className="btn btn-md btn-primary mt-3 ">Submit</button>
        </div>
      </div>
    </>
  );
};

export default App;
