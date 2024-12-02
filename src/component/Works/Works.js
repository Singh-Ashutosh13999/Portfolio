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
     <h4 className='WorkT'>Experience</h4>
     <span className='WorkD'>During my work in Web Technology, I gained hands-on experience designing and developing responsive web applications using HTML, CSS, JavaScript, and ReactJS. I collaborated with teams to create user-friendly interfaces, deployed and maintained websites for optimal performance, and honed my skills with modern web development tools and frameworks, bridging theory and real-world practice.</span>
     <a
  href="https://example.com/certificate"
  target="_blank"
  rel="noopener noreferrer"
  className="certificate-button"
>
  View Certificate
</a>

     
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