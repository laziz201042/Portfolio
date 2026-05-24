import React from "react";
import "./About.css";

function About() {

  return (

    <section id="about" className="about">

      <h2>About Me</h2>

      {/* TOP CARDS */}
      <div className="top-gallery">

        <div className="top-card">
          <img src="./project1.jpg" alt="" />
          <div className="top-overlay">
            <h3>My Dream</h3>
          </div>
        </div>

        <div className="top-card">
          <img src="project2.jpg" alt="" />
          <div className="top-overlay">
            <h3>Cyuber Dev</h3>
          </div>
        </div>

        <div className="top-card">
          <img src="/project3.jpg" alt="" />
          <div className="top-overlay">
            <h3>Creative</h3>
          </div>
        </div>
         <div className="top-card">
          <img src="/project4.jpg" alt="" />
          <div className="top-overlay">
            <h3>UNKNOWN</h3>
          </div>
        </div>

      </div>

      {/* ABOUT CARDS */}
      <div className="about-container">

        <div className="about-card">
          <i className="fa-solid fa-code"></i>

          <h3>Frontend</h3>

          <p>
            Modern va responsive web saytlar yarataman.
          </p>
        </div>

        <div className="about-card">
          <i className="fa-solid fa-palette"></i>

          <h3>UI Design</h3>

          <p>
            Minimal va professional dizaynlar qilaman.
          </p>
        </div>

        <div className="about-card">
          <i className="fa-solid fa-user-secret"></i>

          <h3>My Features</h3>

          <p>
            Men ko‘proq kod yozish va saytlarning nozik joylarini topishga qiziqaman.
          </p>
        </div>

        <div className="about-card">
          <i className="fa-solid fa-laptop-code"></i>

          <h3>React Developer</h3>

          <p>
            React yordamida tezkor va zamonaviy web app yarataman.
          </p>
        </div>

      </div>

    </section>

  );
}

export default About;