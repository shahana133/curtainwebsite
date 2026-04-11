import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-about">
          <h3>Curtain World</h3>
          <p>
            Premium Curtains & Blinds for modern interiors. Stylish, durable,
            and elegant solutions for your home and office.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📧 cwpattikkara@gmail.com</p>
          <p>📞 9526135102</p>
          <p>📞 9526135101 (Alt)</p>
          <p>📍 Pattikkara, Kerala</p>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">

            {/* Replace # with your real links */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Curtain World | Since 1986</p>
      </div>
    </footer>
  );
}

export default Footer;