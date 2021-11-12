import React from 'react';
import img1 from '../../imgs/img1.svg';
import './cakecards.css';
import { db } from '../../firebase';
const Cakecards = ({ id, img, name, description, price, removeData }) => {
  const deleteCake = () => {
    db.collection('Cakes').doc(id).delete();
    removeData(id);
  };

  return (
    <>
      <div className="col-md-3">
        <div className="card-sl">
          <div className="card-image">
            <img className="img-fluid" src={img} />
          </div>

          <div className="card-heading">{name}</div>
          <div className="card-text">{description}</div>
          <div
            className="card-text d-flex align-items-center justify-content-between"
            style={{ fontWeight: '600' }}
          >
            Rs {price}/-
            <button className="btn btn-danger btn-sm" onClick={deleteCake}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cakecards;
