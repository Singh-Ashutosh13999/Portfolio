import React, { useState } from 'react';
import '../navbar.css'
import images from '../../assest/images.jpg';
import contact from '../../assest//contact.jpg'
import MView from '..//..//assest//MView.png'
import {Link} from 'react-scroll';

const Navbar = () => {
  const [menu,setmenu]=useState(false);
  return (
    <nav className='navbar'>
   <img src={images} alt='LOGO' className='Logoname'/>
   <div className='desktopMenu'>
     <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={500} className='Headmenu'>Home</Link>
     <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-100} duration={500} className='Headmenu'>About</Link>
     <Link activeClass='active' to='Works' spy={true} smooth={true} offset={-100} duration={500} className='Headmenu'>Works</Link>
     <Link activeClass='active' to='Education' spy={true} smooth={true} offset={-100} duration={500} className='Headmenu'>Education</Link>
   </div>
   <button className='Menubuttom' onClick={()=>{
document.getElementById('Contact').scrollIntoView({behavior: "smooth", inline: 'nearest'});
   }}>
    <img src={contact} alt='Contact' className='ContactImg' />
   </button>
   <img src={MView} alt='Menu' className='mobMenu' onClick={()=>setmenu(!false)}/>
   <div className='NevMenu' style={{display:menu?'flex':'none'}}>
     <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={500} className='Mmenu' onClick={()=>setmenu(false)}>Home</Link>
     <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-100} duration={500} className='Mmenu' onClick={()=>setmenu(false)}>About</Link>
     <Link activeClass='active' to='Works' spy={true} smooth={true} offset={-100} duration={500} className='Mmenu' onClick={()=>setmenu(false)}>Works</Link>
     <Link activeClass='active' to='Education' spy={true} smooth={true} offset={-100} duration={500} className='Mmenu' onClick={()=>setmenu(false)}>Education</Link>
     <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-100} duration={500} className='Mmenu' onClick={()=>setmenu(false)}>Contact</Link>
   </div>

    </nav>
  )
}

export default Navbar;