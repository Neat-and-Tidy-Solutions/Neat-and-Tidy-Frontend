import React from "react";
import "../css/secondbody.css";
import my from "../assets/images/PNG/pics.png";
const Secondbody = () => {
  return (
    <div>
      <section class="home">
        <div class="intro">
          <h1>Discover the Future of Cleaning!</h1>
          <p>
            {" "}
            With just a few taps, you'll unlock a whole new level of cleanliness
            and efficiency.
          </p>
          <div class="cta">
            <button href="/projects" class="cta-back">
              BOOK NOW
            </button>
          </div>
        </div>
        <img src={my} alt="home image" class="hero-img" />
      </section>
    </div>
  );
};

export default Secondbody;
