import React from "react";
import { FaGithub, FaTelegram, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hi 👋, I am <br/> Laziz Abdimanabov</h1>
        <p>Front-end Developer / UI Designer</p>
        <div className="icons">
          <a href="mailto:abdimanbovl@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
          <a href="https://github.com/laziz201042" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://instagram.com/abdimanabov_" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://t.me/laziz201042" target="_blank" rel="noreferrer"><FaTelegram /></a>
        </div>
      </div>
    </section>
  );
}

export default Hero;