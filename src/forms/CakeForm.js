import React, { useState } from 'react';

const CakeForm = () => {
  const [cakeImg, setCakeImg] = useState();

  return (
    <div className="container d-flex flex-column">
      <label htmlFor="" style={{ fontWeight: '600' }}>
        {' '}
        Image :
        <input
          type="file"
          onChange={(e) => setCakeImg(e.target.files[0])}
          className="mb-2"
        />
        {cakeImg && (
          <img
            style={{ height: '120px' }}
            alt="enter img"
            src={URL.createObjectURL(cakeImg)}
          />
        )}
      </label>
      <label htmlFor="" style={{ fontWeight: '600' }}>
        Name :{' '}
        <input type="text" placeholder="Enter Product name" className="mb-2" />
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
      ></textarea>
      <label htmlFor="" style={{ fontWeight: '600' }}>
        Price : <input type="text" placeholder="Enter price" className="mb-2" />
      </label>

      <label htmlFor="" style={{ fontWeight: '600' }}>
        Category :{' '}
        <select name="" id="" className="mb-2">
          <option value="">Designer cake</option>
          <option value="">Festival cake</option>
          <option value="">birthday cake</option>
        </select>
      </label>

      <button className="btn  btn-primary mt-3 ">Submit</button>
    </div>
  );
};

export default CakeForm;
