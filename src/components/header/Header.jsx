import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">
          <img src="../images/logo.png" alt="logo" />
        </div>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="icons">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 21L16.65 16.65" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 0C11.3524 0 10.7115 0.132365 10.1143 0.389032C9.51706 0.645679 8.97564 1.02133 8.52042 1.49361C8.06524 1.96585 7.7051 2.52548 7.45971 3.14012C7.28982 3.56563 7.17712 4.012 7.12385 4.46681H4C2.89543 4.46681 2 5.36224 2 6.46681V21.9957C2 23.1003 2.89543 23.9957 4 23.9957H20C21.1046 23.9957 22 23.1003 22 21.9957V6.46681C22 5.36225 21.1046 4.46681 20 4.46681H16.8762C16.8229 4.012 16.7102 3.56563 16.5403 3.14012C16.2949 2.52548 15.9348 1.96584 15.4796 1.49361C15.0244 1.02133 14.4829 0.645678 13.8857 0.389032C13.2885 0.132365 12.6476 0 12 0ZM15.8677 4.46681C15.8201 4.13913 15.7342 3.81808 15.6116 3.51091C15.4136 3.01491 15.1238 2.5654 14.7596 2.18759C14.3955 1.80982 13.9642 1.51118 13.4909 1.30779C13.0176 1.10441 12.5111 1 12 1C11.4889 1 10.9824 1.10441 10.5091 1.30779C10.0358 1.51118 9.60453 1.80982 9.24041 2.18759C8.87625 2.5654 8.58645 3.01491 8.38842 3.51091C8.26579 3.81808 8.17992 4.13913 8.13232 4.46681H15.8677ZM4 5.46681H20C20.5523 5.46681 21 5.91453 21 6.46681V21.9957C21 22.548 20.5523 22.9957 20 22.9957H4C3.44772 22.9957 3 22.548 3 21.9957V6.46681C3 5.91453 3.44771 5.46681 4 5.46681Z" fill="black" />
            </svg>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </nav>
        <button className="menu-button" onClick={toggleMenu}>
          <div className="hamburger-icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
