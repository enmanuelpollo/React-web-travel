import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import patalargaLogo from '../images/patalarga.png'

function Navbar() {
  const [click, setClick] = useState(false); // State to track the menu click
  const [button, setButton] = useState(true); // State to track the button display

  const handleClick = () => setClick(!click); // Toggle the menu click state
  const closeMobileMenu = () => setClick(false); // Close the mobile menu

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false); // Hide button when window width is less than or equal to 960px
    } else {
      setButton(true); // Show button when window width is greater than 960px
    }
  };

  useEffect(() => {
    showButton(); // Check button display on initial render
  }, []);

  window.addEventListener('resize', showButton); // Listen to window resize event and update button display

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={patalargaLogo}  width="160px"  height="45px" className='navbar-logo-img'/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {Button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;