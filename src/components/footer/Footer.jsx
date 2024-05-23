
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-brand">
          <h2>Arelan</h2>
          <p>High level experience in web design and development knowledge, producing quality work.</p>
          <p>© 2024 All Rights Reserved</p>
        </div>
        <div className="footer-follow">
          <h3>Follow us</h3>
          <div className="social-icons">
            <a href="#"><img src="../images/fb.png" alt="Facebook" /></a>
            <a href="#"><img src="../images/tele.png" alt="Telegram" /></a>
            <a href="#"><img src="../images/insta.png" alt="Instagram" /></a>
            <a href="#"><img src="../images/figma.png" alt="Pinterest" /></a>
          </div>
          <h3>Call us</h3>
          <p>+1 800 854-36-80</p>
        </div>
        <div className="footer-links">
          <div>
            <h3>Customer Care</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Delivery & Returns</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Product Return</a></li>
              <li><a href="#">Wholesale Policy</a></li>
            </ul>
          </div>
          <div>
            <h3>Quick Shop</h3>
            <ul>
              <li><a href="#">Pagination</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Address Store</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Receivers</a></li>
              <li><a href="#">Store Locations</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
