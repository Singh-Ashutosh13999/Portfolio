import React, { useState } from 'react';
import '../navbar.css';
import images from '../../assest/images.jpg';
import contact from '../../assest/contact.jpg';
import MView from '../../assest/MView.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menu, setmenu] = useState(false);

  return (
    <nav className='navbar'>
      <img src={images} alt='LOGO' className='Logoname' />

      {/* ✅ Group middle links + contact together */}
      <div className='rightSection'>
        <div className='desktopMenu'>
          <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={500} className='Headmenu'>Home</Link>
          <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-100} duration={500} className='Headmenu'>About</Link>
          <Link activeClass='active' to='Works' spy={true} smooth={true} offset={-100} duration={500} className='Headmenu'>Works</Link>
          <Link activeClass='active' to='Education' spy={true} smooth={true} offset={-100} duration={500} className='Headmenu'>Education</Link>
        </div>

        <Link
          activeClass='active'
          to='feedback'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className='Menubuttom'
        >
          <img src={contact} alt='Contact' className='ContactImg' />
        </Link>
      </div>

      <img src={MView} alt='Menu' className='mobMenu' onClick={() => setmenu(!menu)} />

      <div className='NevMenu' style={{ display: menu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={500} className='Mmenu' onClick={() => setmenu(false)}>Home</Link>
        <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-100} duration={500} className='Mmenu' onClick={() => setmenu(false)}>About</Link>
        <Link activeClass='active' to='Works' spy={true} smooth={true} offset={-100} duration={500} className='Mmenu' onClick={() => setmenu(false)}>Works</Link>
        <Link activeClass='active' to='Education' spy={true} smooth={true} offset={-100} duration={500} className='Mmenu' onClick={() => setmenu(false)}>Education</Link>
        <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-100} duration={500} className='Mmenu' onClick={() => setmenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
