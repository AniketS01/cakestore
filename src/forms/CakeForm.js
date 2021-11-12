import axios from 'axios';
import React, { useState, useRef } from 'react';
import { db } from '../firebase';
import './cakeform.css';
import { Line } from 'rc-progress';
//import ProgressBar from 'react-customizable-progressbar';

const CakeForm = ({
  birthdayCake,
  setBirthdayCake,
  festivalCake,
  setFestivalCake,
  DesignerCake,
  setDesignerCake,
}) => {
  const [cakeTypes, setCakeTypes] = useState([
    'Designer cake',
    'Festival cake',
    'Birthday Cake',
  ]);
  const Add = cakeTypes.map((Add) => Add);
  const name = useRef();
  const description = useRef();
  const price = useRef();
  const Category = useRef();

  const [cakeImg, setCakeImg] = useState();
  const [cakePreview, setCakePreview] = useState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setShowProgress(true);
    setDone(40);

    try {
      if (!cakePreview) return;
      const { data } = await axios.post('http://localhost:5000/api/upload', {
        data: cakePreview,
      });
      const detail = {
        image: data.secure_url,
        clourinary_id: data.public_id,
        name: name.current.value,
        description: description.current.value,
        Category: Category.current.value,
        price: price.current.value,
      };

      await db.collection('Cakes').add(detail);
      setDone(100);
      if (detail.Category === 'Designer cake') {
        setDesignerCake([detail, ...DesignerCake]);
      }
      if (detail.Category === 'Festival cake') {
        setFestivalCake([detail, ...festivalCake]);
      }
      if (detail.Category === 'Birthday Cake') {
        setBirthdayCake([detail, ...birthdayCake]);
      }
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        setSuccess(false);
        setDone(0);
        setShowProgress(false);
      }, 3000);
    } catch (error) {
      setError(true);
      setSuccess(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const preview = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCakePreview(reader.result);
    };
  };

  return (
    <div className="container contact-form shadow p-3 mb-5 bg-white rounded">
      {showProgress && (
        <div className="d-flex">
          <Line
            percent={done}
            strokeWidth="1"
            strokeColor="#50DBB4"
            trailColor="white"
          />
          <span>{done}%</span>
        </div>
      )}
      <form method="post" onSubmit={HandleSubmit}>
        {success && (
          <div className="alert alert-success" role="alert">
            success!
          </div>
        )}
        {error && (
          <div className="alert alert-danger" role="alert">
            something went wrong!
          </div>
        )}
        <h3>Add You Cakes Here</h3>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="file"
                className="form-control"
                placeholder="Select Image From here"
                onChange={(e) => preview(e.target.files[0])}
                value=""
              />
              {cakePreview && (
                <img
                  style={{ height: '120px' }}
                  alt="enter img"
                  src={cakePreview}
                />
              )}
            </div>

            <div className="form-group mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Product Name"
                ref={name}
              />
            </div>
            <div className="form-group mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Price"
                ref={price}
              />
            </div>
            <div className="form-group mt-2">
              <select
                className="form-control"
                placeholder="Select a Category"
                ref={Category}
              >
                {Add.map((address, key) => (
                  <option value={address}>{address}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-6 text-area ">
            <div className="form-group ">
              <textarea
                name="txtMsg"
                className="form-control"
                placeholder="Your Message *"
                style={{ width: '100%', height: '180px' }}
                ref={description}
              ></textarea>
            </div>
          </div>
          <div className="form-group mt-2">
            <input
              type="submit"
              name="btnSubmit"
              className="btnContact"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CakeForm;
