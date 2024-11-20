import React from 'react';
import './Skills.css';
import htmlLogoIcon from './images/html1.png';

export default function Skills() {
  return (
    <>
      <div className="skill-main-container">
        <div className="skill-main-container-heading"><h1>My Skills</h1></div>
        <div className="skill-container-1">
          <div className="skill-1-logo-container">
            <img src={htmlLogoIcon} alt="" />
            <div className="skill-1-heading"><h1>HTML</h1></div>
          </div>
          <div className="skill-1-text-container">
            <p>Highly skilled in HTML, I specialize in crafting clean, semantic, and accessible code to build the structural foundation of responsive and user-friendly web interfaces.</p>
            <progress id="file" max="100" value="90"></progress>
            <span>Experience Level: 90%</span>
          </div>
          <div className="skill-1-buttons-container">
            <button type="button">See HTML Projects</button>
            <button type="button">About My HTML Path</button>
          </div>
        </div>
      </div>
    </>
  )
}
