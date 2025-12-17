import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, ChevronRight } from 'lucide-react';
import './Footer.css';

const  Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top Contact Bar */}
      <div className="contact-bar">
        <div className="contact-item">
          <div className="icon-circle"><MapPin size={20} /></div>
          <div>
            <p className="label">Address:</p>
            <p className="value">1925 Boggess Street</p>
          </div>
        </div>
        <div className="contact-item border-sides">
          <div className="icon-circle"><Phone size={20} /></div>
          <div>
            <p className="label">Phone:</p>
            <p className="value">(00) 875 784 568</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon-circle"><Mail size={20} /></div>
          <div>
            <p className="label">Email:</p>
            <p className="value">info@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="main-footer">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-col brand">
            <h2 className="logo">edunity</h2>
            <p className="description">
              Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt tortor aliqua mfacilisi cras fermentum odio eu.
            </p>
            <div className="social-links">
              <a href="#"><Facebook size={18} /></a>
              <a href="#"><Instagram size={18} /></a>
              <a href="#"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Services Section */}
          <div className="footer-col">
            <h3>Our Services:</h3>
            <ul className="links-list">
              <li><ChevronRight size={14} /> Web Development</li>
              <li><ChevronRight size={14} /> UI/UX Design</li>
              <li><ChevronRight size={14} /> Management</li>
              <li><ChevronRight size={14} /> Digital Marketing</li>
              <li><ChevronRight size={14} /> Blog News</li>
            </ul>
          </div>

          {/* Gallery Section */}
          <div className="footer-col">
            <h3>Gallery</h3>
            <div className="gallery-grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="gallery-item"></div>
              ))}
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="footer-col">
            <h3>Subscribe</h3>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your email:" />
              <button className="subscribe-btn">SUBSCRIBE NOW</button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright-bar">
        Copyright © 2024 <span className="highlight">edunity</span> || All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;