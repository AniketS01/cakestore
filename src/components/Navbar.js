import React from 'react';
import { PersonFill } from 'react-bootstrap-icons';

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style={{ height: '60px' }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            CakeStore
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                <PersonFill fontSize={25} style={{ marginRight: '5px' }} />
                Welcome Admin!
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
