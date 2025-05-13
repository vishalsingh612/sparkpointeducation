import React, { useState } from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    course: "",
    country: "",
    city: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`
      Name: ${formData.name}
      Phone Number: ${formData.number}
      Email: ${formData.email}
      Course: ${formData.course}
      Country: ${formData.country}
      City: ${formData.city}
    `)
  }

  return (
    <>
      <Awrapper />
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.webp' alt='about' />
          </div>
          <div className='right row'>
            <Heading subtitle='BOOK A DEMO' title='Reserve Your Spot for a Personalized Learning Session' />
            <div className='items'>
              <form className="demoForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="tel" name="number" placeholder="Enter your phone number" value={formData.number} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <select name="course" value={formData.course} onChange={handleChange} required>
                    <option value="">Select a course</option>
                    <option value="web">Web Development</option>
                    <option value="data">Data Science</option>
                    <option value="ai">AI & ML</option>
                    <option value="marketing">Digital Marketing</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="text" name="country" placeholder="Enter your country" value={formData.country} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="text" name="city" placeholder="Enter your city" value={formData.city} onChange={handleChange} required />
                </div>
                <button type="submit" className="form-btn">Book a Demo Session</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCard
