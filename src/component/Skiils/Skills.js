import React, { useRef, useEffect, useState } from 'react';
import "./Skills.css";

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className={`skills-section ${visible ? 'visible' : ''}`} ref={sectionRef} id="Skills">
      <h2 className="skills-title">Experience</h2>

      <div className="experience-wrapper">
        <div className="experience-card left">
          <h3>Frontend Developer — GeoGo Infotech</h3>
          <span className="duration">Oct 2024 - Present</span>
          <p className="tech-stack">
            <strong>Technologies:</strong> JavaScript, HTML/CSS, Bootstrap, SEO
          </p>
          <ul className="details">
            <li>Leading the development and management of the ChikuCab project, enhancing functionality and UX.</li>
            <li>Spearheaded on-page SEO, including meta descriptions and schema markup.</li>
            <li>Collaborated with teams for smooth project delivery and business alignment.</li>
            <li>Developed responsive, cross-browser web apps using HTML, CSS, JS.</li>
            <li>Contributed to documentation and UI/UX improvements.</li>
          </ul>
        </div>

        <div className="experience-card right">
          <h3>Key Roles & Achievements</h3>
          <span className="duration">Highlights</span>
          <ul className="details">
            <li>Enhanced site load time and improved Lighthouse scores for performance.</li>
            <li>Integrated SEO best practices resulting in increased organic traffic.</li>
            <li>Provided UI improvements that led to higher user engagement.</li>
            <li>Managed client feedback loops efficiently with agile delivery.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
