import React, { useEffect, useRef, useState } from 'react';
import CakeForm from '../forms/CakeForm';
import { PlusCircleDotted } from 'react-bootstrap-icons';
import Navbar from '../components/Navbar';
import { db } from '../firebase';
import Cakecards from '../components/cakecards/Cakecards';

const MainPage = () => {
  const [showCakeForm, setShowCakeForm] = useState(false);
  const [cakes, setCakes] = useState([]);
  const [DesignerCake, setDesignerCake] = useState([]);
  const [festivalCake, setFestivalCake] = useState([]);
  const [birthdayCake, setBirthdayCake] = useState([]);

  useEffect(() => {
    db.collection('Cakes')
      .get()
      .then((snapshot) => {
        const Dcake = [];
        const Fcake = [];
        const Bcakes = [];
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
          if (data.category === 'Designer cake') {
            Dcake.push(data);
          }
          if (data.category === 'Festival cake') {
            Fcake.push(data);
          }
          if (data.category === 'Birthday Cake') {
            Bcakes.push(data);
          }
        });
        setDesignerCake(Dcake);
        setFestivalCake(Fcake);
        setBirthdayCake(Bcakes);
      });
    console.log(DesignerCake);
  }, []);

  const removeDesignerCake = (id) => {
    setDesignerCake(DesignerCake.filter((cake) => cake.id !== id));
  };

  const removeFestivalCake = (id) => {
    setFestivalCake(festivalCake.filter((cake) => cake.id !== id));
  };

  const removeBirthdayCake = (id) => {
    setBirthdayCake(birthdayCake.filter((cake) => cake.id !== id));
  };

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
            <CakeForm
              birthdayCake={birthdayCake}
              setBirthdayCake={setBirthdayCake}
              festivalCake={festivalCake}
              setFestivalCake={setFestivalCake}
              DesignerCake={DesignerCake}
              setDesignerCake={setDesignerCake}
            />
          </div>
        )}
        <div>
          <div className="container" style={{ marginTop: '50px' }}>
            <h1> Designer Cake </h1>
            <div className="row">
              {DesignerCake.map((cake) => (
                <Cakecards
                  id={cake.id}
                  img={cake.image}
                  name={cake.name}
                  description={cake.description}
                  price={cake.price}
                  category={cake.category}
                  removeData={(id) => removeDesignerCake(id)}
                />
              ))}
            </div>
          </div>
          <div className="container" style={{ marginTop: '50px' }}>
            <h1>Festival cake</h1>
            <div className="row">
              {festivalCake.map((cake) => (
                <Cakecards
                  id={cake.id}
                  img={cake.image}
                  name={cake.name}
                  description={cake.description}
                  price={cake.price}
                  category={cake.category}
                  removeData={(id) => removeFestivalCake(id)}
                />
              ))}
            </div>
          </div>
          <div className="container" style={{ marginTop: '50px' }}>
            <h1> Birthday Cake</h1>
            <div className="row">
              {birthdayCake.map((cake) => (
                <Cakecards
                  id={cake.id}
                  img={cake.image}
                  name={cake.name}
                  description={cake.description}
                  price={cake.price}
                  category={cake.category}
                  removeData={(id) => removeBirthdayCake(id)}
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
