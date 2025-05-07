import React, { useRef, useEffect, useState } from 'react';
import './Works.css';
import cal from "../../assest/cal.jpg";
import landing from "../../assest/landing.png";
import testi from "../../assest/testi.png";
import snake from "../../assest/snake.png";
import BC from "../../assest/BC.jpg";
import Unit from "../../assest/Unit.jpg";

const projects = [
  { img: cal, title: 'Calculator Project', link: 'https://github.com/Singh-Ashutosh13999/-TreueTechnologies2' },
  { img: snake, title: 'Snake Game Project', link: 'https://github.com/Singh-Ashutosh13999/Snakegame' },
  { img: testi, title: 'Testimonial Project', link: 'https://github.com/Singh-Ashutosh13999/TreueTEchnologies4' },
  { img: landing, title: 'Landing Page Project', link: 'https://github.com/Singh-Ashutosh13999/-TreueTechnologies' },
  { img: BC, title: 'Color Generator', link: 'https://github.com/Singh-Ashutosh13999/Color_generator' },
  { img: Unit, title: 'Unit Converter', link: 'https://github.com/Singh-Ashutosh13999/-TreueTechnologies1/blob/main/U.js' }
];

const Works = () => {
  const worksRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = worksRef.current;              // ← capture once
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.4 }
    );

    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);         // ← unobserve same element
    };
  }, []); // no dependencies

  return (
    <section className='works' id='Works' ref={worksRef}>
      <div className={`works-container ${isVisible ? 'fade-in' : 'hidden'}`}>
        <h2 className='works-title'>My Projects</h2>
        <p className='works-description'>
          Here are some of the projects I've crafted with passion and precision.
        </p>

        <div className='works-grid'>
          {projects.map((project, index) => (
            <div className='work-card' key={index}>
              <a href={project.link} target='_blank' rel='noopener noreferrer'>
                <img src={project.img} alt={project.title} className='work-image' />
                <div className='work-content'>
                  <h3>{project.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
