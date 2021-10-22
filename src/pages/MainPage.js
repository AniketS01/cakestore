import React, { useRef, useState } from 'react';
import CakeForm from '../forms/CakeForm';
import { PlusCircleDotted } from 'react-bootstrap-icons';
import Navbar from '../components/Navbar';
import { db } from '../firebase';

const MainPage = () => {
  const [showCakeForm, setShowCakeForm] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="d-flex flex-row align-items-center pt-4">
          <h3>Add cake</h3>{' '}
          <PlusCircleDotted
            fontSize={25}
            color="green"
            style={{ marginLeft: '5px' }}
            onClick={() => {
              if (showCakeForm) {
                setShowCakeForm(false);
              } else {
                setShowCakeForm(true);
              }
            }}
          />
        </div>
        {showCakeForm && (
          <div className="p-4">
            {' '}
            <CakeForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
