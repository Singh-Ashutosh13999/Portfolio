import React from 'react'
import './Intro.css'
import Ashu1 from '..//..//assest//Ashu1.jpg';
function Intro() {
  return (
    <>
    
    <section className='intro' id='Intro'>
      <div className='Introcontent'>
      <span className='A'  >Hello</span>
      <span className='B' >I'm <span  className='c'>Ashutosh Singh </span><br/> Software Developer</span>
      <p className='D'>My name is Ashutosh kumar singh.I have recently completed Master's
<br/>       in computer Application 2023 with grade of 7.86 cgpa.</p>
      
      <button className='Btn'>Hire Me</button>
        </div> 
     <img  src={Ashu1} alt='Ashutosh' className='BI' />
    </section>
    </>
  );
}

export default Intro;