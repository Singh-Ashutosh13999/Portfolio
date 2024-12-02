import React from 'react'
import Skiils from "..//..//assest//Skiils.jpg"
import './Skills.css';
import App from "..//..//assest//App.jpg"
 const Skills = () => {
  return (
    <section className='Skill' id='Skills'>
    <span className='SkillsT'> What I Do </span>
    <br/>
    <span className='SkillsDec'> 
        I am a passionate Software Developer who loves building innovative solutions. 
        Turning ideas into reality with modern tools and technologies is what drives me.
    </span>
    <div className='SkillsBar'>
        <div className='Sbar'>
            <img src={Skiils} alt="Skills" className='SkillsBarImg' />
            <div className='SbarText'>
                <h2>Web Development</h2>
                <p>
                    Crafting visually stunning and user-friendly web applications 
                    using technologies like HTML, CSS, JavaScript, and ReactJS. 
                    I ensure each project is both functional and aesthetically appealing.
                </p>
            </div>
        </div>
        <div className='Sbar'>
            <img src={App} alt="AppImg" className='SkillsBarImg' />
            <div className='SbarText'>
                <h2>App Development</h2>
                <p>
                    Building sleek and interactive mobile applications with technologies 
                    like HTML, CSS, JavaScript, and React Native. My focus is on creating 
                    seamless user experiences that captivate and engage.
                </p>
            </div>
        </div>
    </div>
</section>

  )
}
export default Skills;
