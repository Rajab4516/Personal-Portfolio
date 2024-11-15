import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
            <h4>CWR</h4>
        </div>
        <div className="navbar-links-container">
            <ul>
                <li><a href="#" className='active'>Home</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Contact Me</a></li>
                <li></li>
            </ul>
        </div>
      </div>
    </>
  )
}
