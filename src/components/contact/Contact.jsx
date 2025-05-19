import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.22793675363!2d77.3693883!3d28.61931015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55cf4c46e87%3A0x9cf4c2d02cd3185c!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301%2C%20India!5e0!3m2!1sen!2sin!4v1716050627743!5m2!1sen!2sin';

  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
  <div className='box'>
    <h4>PHONE:</h4>
    <p>+91-93104 48417</p>
    <p>+91-92116 31407</p>
  </div>
  <div className='box'>
    <h4>ADDRESS:</h4>
    <p>Sec. 63, Noida, 201301,<br />Uttar Pradesh, India</p>
  </div>
  <div className='box'>
    <h4>EMAIL:</h4>
    <p>info@sparkpointeducation.com</p>
  </div>
</div>


            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

           
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
