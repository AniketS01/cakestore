import React from "react";
import img1 from "../../imgs/img1.svg";
import "./cakecards.css";
import { TrashFill } from "react-bootstrap-icons";
const Cakecards = ({ img, name, description, price }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6 ">
        <div className="card shadow  mb-5 bg-body rounded">
          <img className="img-fluid card-img-top card-image" src={img} />

          <div className="card-body p-1">
            <h1 className="card-heading">{name}</h1>
            <p className="card-text">{description}</p>
            <div
              className="card-text d-flex justify-content-between"
              style={{ fontWeight: 600 }}
            >
              Rs {price}/-
              <span className="trash">
                <TrashFill />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cakecards;
