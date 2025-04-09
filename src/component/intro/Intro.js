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
        A highly motivated and detail-oriented Frontend Developer with hands-on experience in building responsive and user-friendly
 web applications using HTML, CSS, JavaScript, React. Passionate about creating seamless UI/UX experiences, optimizing
 performance, and ensuring cross-browser compatibility.Enthusiastic about continuous learning and contributing to innovative
 web solutions
      </p>
      <button className="Btn">Let's Collaborate</button>
    </div>
    <img src={Ashu1} alt="Ashutosh" className="BI" />
  </section>
  
  );
}

export default Intro;
