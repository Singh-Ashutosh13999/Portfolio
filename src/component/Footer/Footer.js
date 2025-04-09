import React from 'react'
import './Footer.css' // Make sure to create this CSS file
// Update path
import LD from  '..//..//assest//LD.jpg';
import Git from  '..//..//assest//Git.png';
import Resume from  '..//..//assest//Resume.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='link'>
        <a 
          href='https://www.linkedin.com/in/ashutosh-kumar-singh-089091239/' 
          target='_blank' 
          rel='noopener noreferrer'
          className='icon'
        >
          <img src={LD} alt='LinkedIn' />
        </a>
        <a 
          href='https://github.com/Singh-Ashutosh13999' 
          target='_blank' 
          rel='noopener noreferrer'
          className='icon'
        >
          <img src={Git} alt='GitHub' />
        </a>
        <a 
          href='https://drive.google.com/file/d/1683vfVy97eqfMTxh6KnwZNxu8dnYTyIo/view?usp=drivesdk' 
          target='_blank' 
          rel='noopener noreferrer'
          className='icon'
        >
          <img src={Resume} alt='Resume' />
        </a>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Ashutosh Kumar Singh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;