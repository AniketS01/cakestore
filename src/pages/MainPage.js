import React, { useEffect, useRef, useState } from 'react';
import CakeForm from '../forms/CakeForm';
import { PlusCircleDotted } from 'react-bootstrap-icons';
import Navbar from '../components/Navbar';
import { db } from '../firebase';
import Cakecards from '../components/cakecards/Cakecards';

const MainPage = () => {
  const [showCakeForm, setShowCakeForm] = useState(false);
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    db.collection('Cakes')
      .get()
      .then((snapshot) => {
        const cake = [];
        snapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            img_id: doc.data().clourinary_id,
            name: doc.data().name,
            image: doc.data().image,
            category: doc.data().Category,
            description: doc.data().description,
            price: doc.data().price,
          };
          cake.push(data);
        });
        console.log(cake);
        setCakes(cake);
        console.log(cakes);
      });
  }, []);

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
            <CakeForm cakes={cakes} setCakes={setCakes} />
          </div>
        )}
        <div>
          <div className="container" style={{ marginTop: '50px' }}>
            <div className="row">
              {cakes.map((cake) => (
                <Cakecards
                  img={cake.image}
                  name={cake.name}
                  description={cake.description}
                  price={cake.price}
                  category={cake.category}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
