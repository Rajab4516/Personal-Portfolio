import React from 'react';
import './MainBanner.css';
import Navbar from './Navbar';
import BannerImage from './images/image2.png'
export default function MainBanner() {
  return (
    <>
        <div className="navbar-main-container">
          <Navbar></Navbar>
        </div>
      <div className="main-banner-container">
        <div className="main-banner-container-col-2">
        <div className="main-banner-container-col-2-content">
          <h1>Your vision, brought to life online</h1>
          <p>I'm Rajab, a Web Developer devoted to creating intuitive, visually captivating, and responsive digital experiences. By blending modern technology with a user-first approach, I transform ideas into impactful web solutions.</p>
          <button id='hireMeButton' type='button'>Hire Me</button>
        </div>
        </div>
        <div className="main-banner-container-col-1">
          <div className="main-banner-container-col-1-content">
            <img src={BannerImage} alt="Banner-Image" id='banner-image'/>
          </div>
        </div>
      </div>
    </>
  )
}
