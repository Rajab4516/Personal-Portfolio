import React from 'react';
import './Skills.css';
import htmlLogoIcon from './images/html.png';
import cssLogoIcon from './images/css.png';
import javascriptLogoIcon from './images/javascript.png';
import reactLogoIcon from './images/react2.png';
import phpLogoIcon from './images/php1.png';
import mysqlLogoIcon from './images/mysql.png';

export default function Skills() {
  return (
    <>
    {/*Skills Parent Container Title*/}
    <div className="skills-main-container-title"><h1>My Expertise</h1></div>
    {/*Skills Parent Container*/}
    <div className="skills-main-container">
      <div className="row-1 row">
        {/*Skills COL-1*/}
        <div className="col-1 col">
          <div className="skill-logo-container">
            <img src={htmlLogoIcon} alt="" />
          </div>
          <div className="skill-text-and-button-container">
            <div className='skill-title'><h1>HTML5</h1></div>
            <div className="skill-description">
              <p>Proficient in crafting semantic, accessible, and SEO-friendly HTML structures. With a strong foundation in web standards, I excel at building responsive layouts that serve as the backbone for engaging and user-centric web experiences.</p>
            </div>
            <div className="skill-button">
              <button type="button">Read More</button>
            </div>
          </div>
        </div>
        {/*Skills COL-2*/}
        <div className="col-2 col">
          <div className="skill-logo-container">
            <img src={cssLogoIcon} alt="" />
          </div>
          <div className="skill-text-and-button-container">
            <div className='skill-title'><h1>CSS3</h1></div>
            <div className="skill-description">
              <p>Skilled in CSS3, specializing in creating visually appealing, responsive, and cross-browser-compatible designs. Proficient in leveraging modern features like Flexbox, Grid, and animations to craft dynamic and engaging user interfaces.</p>
            </div>
            <div className="skill-button">
              <button type="button">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row-2 row">
        {/*Skills COL-3*/}
        <div className="col-3 col">
          <div className="skill-logo-container">
            <img src={javascriptLogoIcon} alt="" />
          </div>
          <div className="skill-text-and-button-container">
            <div className='skill-title'><h1>Javascript</h1></div>
            <div className="skill-description">
              <p>Experienced in JavaScript, adept at building dynamic, interactive, and efficient web applications. Skilled in utilizing modern ES6+ features, DOM manipulation, and integrating APIs to deliver seamless user experiences.</p>
            </div>
            <div className="skill-button">
              <button type="button">Read More</button>
            </div>
          </div>
        </div>
        {/*Skills COL-4*/}
        <div className="col-4 col">
          <div className="skill-logo-container">
            <img src={reactLogoIcon} alt="" />
          </div>
          <div className="skill-text-and-button-container">
            <div className='skill-title'><h1>React</h1></div>
            <div className="skill-description">
              <p>Proficient in React, skilled at building fast, scalable, and component-based web applications. Experienced in state management, hooks, and creating reusable UI components for seamless user experiences.</p>
            </div>
            <div className="skill-button">
              <button type="button">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row-3 row">
        {/*Skills COL-5*/}
        <div className="col-5 col">
          <div className="skill-logo-container">
            <img src={phpLogoIcon} alt="" />
          </div>
          <div className="skill-text-and-button-container">
            <div className='skill-title'><h1>php</h1></div>
            <div className="skill-description">
              <p>Experienced in PHP, specializing in building robust server-side applications and dynamic websites. Proficient in integrating databases, handling APIs, and creating secure, scalable backend solutions.</p>
            </div>
            <div className="skill-button">
              <button type="button">Read More</button>
            </div>
          </div>
        </div>
        {/*Skills COL-6*/}
        <div className="col-6 col">
          <div className="skill-logo-container">
            <img src={mysqlLogoIcon} alt="" />
          </div>
          <div className="skill-text-and-button-container">
            <div className='skill-title'><h1>MySQL</h1></div>
            <div className="skill-description">
              <p>Skilled in MySQL, proficient in designing and managing relational databases. Experienced in writing optimized queries, ensuring data integrity, and creating scalable database architectures for web applications.</p>
            </div>
            <div className="skill-button">
              <button type="button">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
