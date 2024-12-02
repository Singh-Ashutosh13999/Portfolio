import React from 'react';
import './Intro.css';
import Ashu1 from '../../assest/Ashu1.jpg';

function Intro() {
  return (
    <section className="intro" id="Intro">
    <div className="Introcontent">
      <span className="A">Welcome!</span>
      <span className="B">
        I'm <span className="c">Ashutosh Singh</span>,
        <br />
        Your Next Software Developer.
      </span>
      <p className="D">
        Passionate about crafting elegant solutions to complex problems. 
        <br />
        I hold a Master's in Computer Applications (2023) with a stellar 
        7.86 CGPA and a drive to innovate.
      </p>
      <button className="Btn">Let's Collaborate</button>
    </div>
    <img src={Ashu1} alt="Ashutosh" className="BI" />
  </section>
  
  );
}

export default Intro;
