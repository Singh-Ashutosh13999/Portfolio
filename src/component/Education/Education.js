import React from 'react'
import "./Education.css"
 const Education = () => {
  return (
    <section className='ED' id='Education'>
        <div className='EHead'>
        <h1 className='EH'>Education Detail</h1>
        <span className='EDesc'>In this, I will explain our entire education journey from class 10 till now.</span>
        </div>
     <div className='Result'>
        <div className='R'>
            <ul >
            <li className='H1'>
                <h1> High School</h1>
                <h3>Udai Pratap Inter College</h3>
                <p>78%</p>
            </li>
            <li className='I'>
            <h1> Inter_mediate</h1>
                <h3>Udai Pratap Inter College</h3>
                <p>69.20%</p>
            </li>
            <li className='UG'>
              <h1> Under-Graduate</h1>
                <h3> M G K V P </h3>
                <p>62.75%</p>
                </li>
            <li className='PG'>
            <h1> Post-Graduate</h1>
                <h3>Institute of engineering and technology</h3>
                <p>7.86 CGPA</p>
            </li>
          </ul>
        </div>

     </div>

    </section>
  )
}
export default Education;
