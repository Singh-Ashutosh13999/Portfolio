import React, { useEffect } from 'react';
import './Education.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaArrowDown } from 'react-icons/fa';

const educationData = [
  {
    level: 'High School',
    institute: 'Udai Pratap Inter College',
    result: '78%',
    icon: 'fa-school',
  },
  {
    level: 'Intermediate',
    institute: 'Udai Pratap Inter College',
    result: '69.20%',
    icon: 'fa-school',
  },
  {
    level: 'Under-Graduate',
    institute: 'M G K V P',
    result: '62.75%',
    icon: 'fa-graduation-cap',
  },
  {
    level: 'Post-Graduate',
    institute: 'Institute of Engineering and Technology',
    result: '7.86 CGPA',
    icon: 'fa-graduation-cap',
  }
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="education-section" id="Education">
      <h2 className="education-title">Education</h2>
      <p className="education-description">My academic journey from school to post-graduation.</p>

      <div className="education-list">
        {educationData.map((item, index) => (
          <div className="education-row" key={index} data-aos="fade-up">
            <div className="edu-top">
              <i className={`fas ${item.icon} edu-icon`}></i>
              <h3>{item.institute}</h3>
            </div>
            <div className="edu-arrow">
  <FaArrowDown className="edu-arrow-icon" />
</div>
            <div className="edu-bottom">
              <p className="level">{item.level}</p>
              <p className="result">{item.result}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
