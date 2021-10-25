import React from 'react';
import img1 from '../../imgs/img1.svg';
import './cakecards.css';
const Cakecards = ({ img, name, description, price }) => {
  return (
    <>
      <div className="col-md-3">
        <div className="card-sl">
          <div className="card-image">
            <img className="img-fluid " src={img} />
          </div>

          <div className="card-heading">{name}</div>
          <div className="card-text">{description}</div>
          <div className="card-text" style={{ fontWeight: 600 }}>
            Rs {price}/-
          </div>
        </div>
      </div>
    </>
  );
};

export default Cakecards;
