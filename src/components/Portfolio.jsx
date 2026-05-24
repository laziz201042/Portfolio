import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>My Projects</h2>
      <div className="cards">
        <div className="card">
          <h3><b>Devloper Web</b></h3>
          <p>Dasturchi uchun terminal veb sayt,MATRIX animatsiya bilan.</p>
        </div>
        <div className="card">
          <h3><b>Todo List</b></h3>
          <p>Oddiy vazifalar ro‘yxati, CRUD funksiyalari bilan.</p>
        </div>
        <div className="card">
          <h3><b>Portfolio Website</b></h3>
          <p>Shaxsiy portfolio sahifasi, blur effekt bilan.</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;