import React from "react";
import Navbar from "./Navbar";
import "./portal.css";
import Tourists from "./Tourists";

function Portal() {
  return (
    <>
      <Navbar />
      <section className="portal-top">
        <div className="portal-heading">
          <div className="portal-heading-greetings">
            <h1>Welcome Back Nishan</h1>
            <p>Here are your trips and stats</p>
          </div>
          <div className="portal-heading-image">
            <img src="https://img.freepik.com/free-vector/decision-making-abstract-concept_335657-3039.jpg?w=996&t=st=1674370138~exp=1674370738~hmac=396f812ba11aa9811fa081b89aa9a1eb35ebf7b7379d476f358f65a7aa037ce3" />
          </div>
        </div>
      </section>
      <section className="portal-content">
        <div className="portal-content-sidebar">
          <div className="portal-content-sidebar-toogle">
            <label>Are You Available?</label>
            <input type="checkbox" />
          </div>
          <div className="portal-content-sidebar-location">
            <label>Preffered Location</label>
            <select name="location" id="location">
              <option value="Pimbahal">Pimbahal</option>
              <option value="Bag Bhairab">Bag Bhairab</option>
              <option value="Bauddha">Bauddha</option>
              <option value="Siddhapokhari">Siddhapokhari</option>
            </select>
          </div>
        </div>
        <div className="portal-content-main">
          <div className="portal-content-main-title">
            <h1>Available Trips</h1>
          </div>
          <div className="portal-content-main-trips">
            <Tourists />
          </div>
        </div>
      </section>
    </>
  );
}
export default Portal;
