import React from "react";
import { PersonFill } from "react-bootstrap-icons";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark "
        style={{ height: "60px" ,backgroundColor:"#C3404E",}}
      >
        <div class="container-fluid" >
          <a className="navbar-brand ms-4" href="#">
            VIRSHMANI &nbsp; CAKES 
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
              <a class="nav-link active me-4" aria-current="page" href="#">
                <PersonFill fontSize={25} style={{ marginRight: "5px" }} />
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
