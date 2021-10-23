import axios from 'axios';
import React, { useState, useRef } from 'react';
import { db } from '../firebase';

const CakeForm = () => {
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

  const HandleSubmit = async (e) => {
    e.preventDefault();

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
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        setSuccess(false);
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
    <form onSubmit={HandleSubmit}>
      <div className="container d-flex flex-column">
        {success && (
          <div class="alert alert-success" role="alert">
            success!
          </div>
        )}
        {error && (
          <div class="alert alert-danger" role="alert">
            something went wrong!
          </div>
        )}
        <label htmlFor="" style={{ fontWeight: '600' }}>
          {' '}
          Image :
          <input
            type="file"
            onChange={(e) => preview(e.target.files[0])}
            className="mb-2"
          />
          {cakePreview && (
            <img
              style={{ height: '120px' }}
              alt="enter img"
              src={cakePreview}
            />
          )}
          {/* {cakeImg && console.log(URL.createObjectURL(cakeImg))} */}
        </label>
        <label htmlFor="" style={{ fontWeight: '600' }}>
          Name :{' '}
          <input
            type="text"
            placeholder="Enter Product name"
            className="mb-2"
            ref={name}
          />
        </label>
        <label htmlFor="" style={{ fontWeight: '600' }}>
          description :{' '}
        </label>
        <textarea
          name=""
          id=""
          cols="15"
          rows="5"
          placeholder="Enter a Description "
          className="mb-2"
          ref={description}
        ></textarea>
        <label htmlFor="" style={{ fontWeight: '600' }}>
          Price :{' '}
          <input
            type="text"
            placeholder="Enter price"
            className="mb-2"
            ref={price}
          />
        </label>

        <label htmlFor="" style={{ fontWeight: '600' }}>
          Category :{' '}
          <select name="" id="" className="mb-2" ref={Category}>
            {Add.map((address, key) => (
              <option value={address}>{address}</option>
            ))}
          </select>
        </label>

        <button type="submit" className="btn  btn-primary mt-3">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CakeForm;
