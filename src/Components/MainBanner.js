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
        <div className="main-banner-container-col-1">
          <div className="main-banner-container-col-1-content">
            <img src={BannerImage} alt="Banner-Image" id='banner-image'/>
          </div>
        </div>
        <div className="main-banner-container-col-2">
        <div className="main-banner-container-col-2-content">
          <p><span id='rajab-name'>&lt;Hello! I'm Rajab/&gt;</span> a passionate Web Developer. I create sleek, functional, and user-focused websites that bring ideas to life online. With expertise in modern web technologies, I focus on building dynamic, responsive sites that make an impact. Let’s make something great together!</p>
        </div>
        </div>
      </div>
    </>
  )
}
