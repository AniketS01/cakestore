import React from "react";
import img1 from "../../imgs/img1.svg";
import "./cakecards.css";
const Cakecards = () => {
  return (
    <>
      <h1 className="text-center ">Festival cakes</h1>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col-md-3">
            <div className="card-sl">
              <div className="card-image">
                <img src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              </div>

              <div className="card-heading">Audi Q8</div>
              <div className="card-text">
                Audi Q8 is a full-size luxury crossover SUV coupé made by Audi
                that was launched in 2018.
              </div>
              <div className="card-text" style={{ fontWeight: 600 }}>
                Rs 67,400/-
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-sl">
              <div className="card-image">
                <img src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              </div>

              <div className="card-heading">Audi Q8</div>
              <div className="card-text">
                Audi Q8 is a full-size luxury crossover SUV coupé made by Audi
                that was launched in 2018.
              </div>
              <div className="card-text" style={{ fontWeight: 600 }}>
                Rs 67,400/-
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center mt-5">Birthday cakes</h1>
    </>
  );
};

export default Cakecards;
