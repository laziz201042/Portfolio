import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub
} from "react-icons/fa";

import "./Skills.css";


function Skills() {
  return (
   <section className="skills" id="skills">

  <div className="skills-content">

    <h2>My Skills</h2>

    <p>
      Frontend va zamonaviy web texnologiyalar
    </p>

    <div className="icons-grid">

      <FaHtml5 className="html" />
      <FaCss3Alt className="css" />
      <FaJs className="js" />
      <FaReact className="react" />
      <FaGithub className="github" />

    </div>

  </div>

</section>
  );
}

export default Skills;