import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [barsButton, setBarsButton] = useState({
    left: '-90%',
    // borderBottomRightRadius: '0%'
  });

  const [closeButton] = useState();
  
  const handleNavbarOpenButton = () =>{
    if (barsButton.left === '-90%') {
      setBarsButton({
        left: '0%',
        // borderBottomRightRadius: '100%'
      })
      // console.log("Bars Button Clicked!");
    }
  }

  const handleNavbarCloseButton = () =>{
    if (barsButton.left === '0%') {
      setBarsButton({
        left: '-90%',
        // borderBottomRightRadius: '100%'
      })
      // console.log("Close Button Clicked!");
    }
  }
  
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
            <h4>CWR</h4>
        </div>
        <div className="navbar-links-container" style={{...barsButton, ...closeButton}}>
            <ul>
                <li><a href="/" className='active'>Home</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">About Me</a></li>
                <li><a href="/">Contact Me</a></li>
                <li id='crossIcon'><i className="fa-solid fa-xmark" onClick={handleNavbarCloseButton}></i></li>
            </ul>
        </div>
            <div id='barsIcon'><i className="fa-solid fa-bars" onClick={handleNavbarOpenButton}></i></div>
      </div>
    </>
  )
}
