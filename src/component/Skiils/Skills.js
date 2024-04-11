import React from 'react'
import Skiils from "..//..//assest//Skiils.jpg"
import './Skills.css';
import App from "..//..//assest//App.jpg"
 const Skills = () => {
  return (
    <section className='Skill' id='Skills'>
    <span className='SkillsT'> What I do </span>
    <br/>
    <span className='SkillsDec'> I am Software Developer and very curious about my work.it is fun to create new things and fun to work with new tools.</span>
    <div className='SkillsBar'>
        <div className='Sbar'>
    <img src={Skiils} alt="Skills" className='SkillsBarImg' />
<div className='SbarText'>
     <h2>Web Developement</h2>
     <p> In web development, while creating a web project, I use HTML, CSS, JavaScript and ReactJs, due to which the project looks very beautiful and attractive.</p>
</div>
    </div>
    <div className='Sbar'>
    <img src={App} alt="AppImg" className='SkillsBarImg' />
<div className='SbarText'>
     <h2>App Developement</h2>
     <p> In App development, while creating a  project, I use HTML, CSS, JavaScript and React-Native, due to which the project looks very beautiful and attractive.</p>
</div>
    </div>
    </div>
    </section>
  )
}
export default Skills;
