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
     <h4 className='WorkT'>My Portfolio</h4>
     <span className='WorkD'>During my works in "Web technology", I gained practical experience in designing and
      developing web applications. I collaborated with cross-functional teams to implement responsive and user-friendly
       interfaces, utilizing HTML, CSS, JavaScript and ReactJs. I contributed to the deployment and maintenance of websites,
        ensuring optimal performance and usability. Additionally, I acquired hands-on experience with various web
         development frameworks and tools, enhancing my skills in front-end and back-end technologies.My skills allowed me
          to apply theoretical knowledge in a real-world setting, fostering a deep understanding of web development
           best practices and trends</span>
           <div className='WorkImgs'>
            <ol>
           <li><a href='https://github.com/Singh-Ashutosh13999/-TreueTechnologies2'> <img src={cal} alt="Calculator" /></a></li>
           <li><a href='https://github.com/Singh-Ashutosh13999/Snakegame'> <img src={snake} alt="Snake" /></a></li>
           <li><a href='https://github.com/Singh-Ashutosh13999/TreueTEchnologies4'><img src={testi} alt="Testimonial"/></a></li>
           <li><a href='https://github.com/Singh-Ashutosh13999/-TreueTechnologies'><img src={landing} alt="Landing" /></a></li>
           <li><a href='https://github.com/Singh-Ashutosh13999/Color_generator'><img src={BC} alt="Color-Changer" /></a></li>
           <li><a href='https://github.com/Singh-Ashutosh13999/-TreueTechnologies1/blob/main/U.js'><img src={Unit} alt="Color-Changer" /></a></li>
            </ol>
            </div>
            
             
     </section>
     
  )
}
export default Works;