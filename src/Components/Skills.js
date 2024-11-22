import React from 'react';
import './Skills.css';
import htmlLogoIcon from './images/html1.png';
// import cssLogoIcon from './images/css.png';

export default function Skills() {
  return (
    <>
    {/*Skills Parent Container*/}
    <div className="skills-main-container-title"><h1>My Expertise</h1></div>
      <div className="skills-main-container">
        {/*Skills Row 1*/}
        <div className="skills-row-1 skills-row">
          {/*Skills skill 1*/}
          <div className="skills-card skill-1">
            <div className="logo-and-title-container">
              <img src={htmlLogoIcon} alt="HTML Logo Icon" />
              <div className="skill-title-container">
                <h1>HTML</h1>
              </div>
            </div>
            <div className="text-container">
              <p>I excel in crafting clean, semantic, and well-structured HTML code, laying a robust foundation for responsive and user-centric web applications. With a focus on best practices and accessibility, I ensure every project meets professional standards and delivers seamless performance.</p>
            </div>
            <div className="buttons-container"></div>
          </div>
          {/*Skills skill 2*/}
          <div className="skills-card skill-2">
            <div className="logo-and-title-container"></div>
            <div className="text-container"></div>
            <div className="buttons-container"></div>
          </div>
        </div>
        {/*Skills Row 2*/}
        <div className="skills-row-2 skills-row">
          {/*Skills skill 3*/}
          <div className="skills-card skill-3">
            <div className="logo-and-title-container"></div>
            <div className="text-container"></div>
            <div className="buttons-container"></div>
          </div>
          {/*Skills skill 4*/}
          <div className="skills-card skill-4">
            <div className="logo-and-title-container"></div>
            <div className="text-container"></div>
            <div className="buttons-container"></div>
          </div>
        </div>
        {/*Skills Row 3*/}
        <div className="skills-row-3 skills-row">
          {/*Skills skill 5*/}
          <div className="skills-card skill-5">
            <div className="logo-and-title-container"></div>
            <div className="text-container"></div>
            <div className="buttons-container"></div>
          </div>
          {/*Skills skill 6*/}
          <div className="skills-card skill-6">
            <div className="logo-and-title-container"></div>
            <div className="text-container"></div>
            <div className="buttons-container"></div>
          </div>
        </div>
      </div>
    </>
  )
}
