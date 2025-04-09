import React from 'react'
import './Works.css'
import cal from "..//..//assest//cal.jpg";
import landing from "..//..//assest//landing.png"
import testi from "..//..//assest//testi.png"
import snake from "..//..//assest//snake.png"
import BC from "..//..//assest//BC.jpg"
import Unit from "..//..//assest//Unit.jpg"

const Works = () => {
  return ( 
     <section className='Work' id='Works'>

     
           <div className='Work'>
  <h2 className='WorkT'>My Projects</h2>
  <p className='WorkD'>Here are some of the projects I've worked on recently.</p>
  
  <div className='WorkImgs'>
    <div className='WorkImg'>
      <a href='https://github.com/Singh-Ashutosh13999/-TreueTechnologies2'>
        <img src={cal} alt="Calculator" />
        <div className='WorkImgContent'>Calculator Project</div>
      </a>
    </div>
    
    <div className='WorkImg'>
      <a href='https://github.com/Singh-Ashutosh13999/Snakegame'>
        <img src={snake} alt="Snake Game" />
        <div className='WorkImgContent'>Snake Game Project</div>
      </a>
    </div>
    
    <div className='WorkImg'>
      <a href='https://github.com/Singh-Ashutosh13999/TreueTEchnologies4'>
        <img src={testi} alt="Testimonial" />
        <div className='WorkImgContent'>Testimonial Project</div>
      </a>
    </div>
    
    <div className='WorkImg'>
      <a href='https://github.com/Singh-Ashutosh13999/-TreueTechnologies'>
        <img src={landing} alt="Landing Page" />
        <div className='WorkImgContent'>Landing Page Project</div>
      </a>
    </div>
    
    <div className='WorkImg'>
      <a href='https://github.com/Singh-Ashutosh13999/Color_generator'>
        <img src={BC} alt="Color Generator" />
        <div className='WorkImgContent'>Color Generator</div>
      </a>
    </div>
    
    <div className='WorkImg'>
      <a href='https://github.com/Singh-Ashutosh13999/-TreueTechnologies1/blob/main/U.js'>
        <img src={Unit} alt="Unit Converter" />
        <div className='WorkImgContent'>Unit Converter</div>
      </a>
    </div>
  </div>
</div>

            
             
     </section>
     
  )
}
export default Works;