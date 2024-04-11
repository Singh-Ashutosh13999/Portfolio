import React from 'react'
import LD from '..//..//assest//LD.jpg'
import Git from '..//..//assest//Git.png'
import Resume from '..//..//assest//Resume.png'
import './Contact.css'

 const Contact = () => {
  return (
    <section className='Contact' id='Contact'>
      <div className='head'>
        <h1 className='H'>
          Contact
        </h1>
        <p className='Dsc'>Please fill the form below to discuss any work.</p>
        <form className='Info'>
          <input type='text' placeholder='Name' className='NAME' />
          <input type='email' placeholder='Email' className='Email' />
          <textarea  placeholder='Description' rows='5' className='Desc'/>
          <input type='number' placeholder='Mobile-No' maxLength="10" pattern="\d{10}" className='Mobile' />
          <button type='submit' value='Send' className='Submit'>Submit</button>
          <div className='link'>
           <a href='https://www.linkedin.com/in/ashutosh-kumar-singh-089091239/'> <img src={LD} alt='Linkedin' className='link1'/></a>
           <a href='https://github.com/Singh-Ashutosh13999'><img src={Git} alt='Github' className='link2'/></a>
            <a href='https://drive.google.com/file/d/166ZKypTJjOgjhzPHCbujqGOSDJ8Uo4yM/view?usp=drivesdk' ><img src={Resume} alt='Resume' className='link3'/></a>
            

          </div>
        </form>
        

      </div>

    </section>
  )
}
export default Contact;
