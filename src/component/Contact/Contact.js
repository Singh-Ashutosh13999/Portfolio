import React from 'react'
import LD from '..//..//assest//LD.jpg'
import Git from '..//..//assest//Git.png'
import Resume from '..//..//assest//Resume.png'
import './Contact.css'

 const Contact = () => {
  return (
    <section className='Contact' id='Contact'>
  <div className='head'>
    <h1 className='H'>Contact</h1>
    <p className='Dsc'>Please fill the form below to discuss any work.</p>
    <form className='Info'>
      <input type='text' placeholder='Name' className='NAME' required />
      <input type='email' placeholder='Email' className='Email' required />
      <textarea placeholder='Description' rows='5' className='Desc' required />
      <input type='tel' placeholder='Mobile-No' maxLength='10' pattern='\d{10}' className='Mobile' required />
      <button type='submit' className='Submit'>Submit</button>
   
    </form>
  </div>
</section>

  )
}
export default Contact;
