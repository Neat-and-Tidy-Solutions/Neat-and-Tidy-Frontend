import React from "react";
// import { Routes, Route, useNavigate, Link } from "react-router-dom";
import name from "../../assets/images/PNG/Neat And Tidy (3).png";
import "../../css/firstbody.css";
import Secondbody from "../Headers.jsx/Secondbody";
// import Login from "../Headers.jsx/Login";

function Heading() {
  return (
    <div>
      <div className="first">
        <nav>
          <a href="/">
            <img src={name} alt="" />
          </a>
          <h2>Neat & Tidy</h2>
          <a href="/">Home</a>
          <a href="/login">About</a>
          <a href="/carouselcomponent">Services</a>
          <a href="/">Contact</a>

          <button id="button-el">
            <a href="/signup">SIGNUP</a>
          </button>
        </nav>
      </div>
      <Secondbody />
    </div>
  );
}

export default Heading;
