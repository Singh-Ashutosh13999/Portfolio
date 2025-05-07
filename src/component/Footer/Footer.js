import React, { useState, useEffect } from 'react';
import './Footer.css';
import LD from '../../assest/LD.jpg';
import Git from '../../assest/Git.png';
import Resume from '../../assest/Resume.png';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // adjust threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>↑</button>
      )}

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/ashutosh-kumar-singh-089091239/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <img src={LD} alt="LinkedIn" />
            </a>
            <a href="https://github.com/Singh-Ashutosh13999" target="_blank" rel="noopener noreferrer" title="GitHub">
              <img src={Git} alt="GitHub" />
            </a>
            <a href="https://drive.google.com/file/d/1683vfVy97eqfMTxh6KnwZNxu8dnYTyIo/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" title="Resume">
              <img src={Resume} alt="Resume" />
            </a>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Ashutosh Kumar Singh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
  