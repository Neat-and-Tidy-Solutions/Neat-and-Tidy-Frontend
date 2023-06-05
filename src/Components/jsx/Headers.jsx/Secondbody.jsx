import React from "react";
import "../../css/secondbody.css";
import my from "../../assets/images/PNG/pics.png";


function Secondbody () {
  return (
    <div>
      <section className="home">
        <div className="intro">
          <h1>Discover the Future of Cleaning!</h1>
          <p>
            {" "}
            With just a few taps, you'll unlock a whole new level of cleanliness
            and efficiency.
          </p>
          <div className="cta">
            <button href="/projects" className="cta-back">
              BOOK NOW
            </button>
          </div>
        </div>
        <img src={my} alt="homeImage" className="hero-img" />
      </section>
    </div>
  );
};

export default Secondbody;
