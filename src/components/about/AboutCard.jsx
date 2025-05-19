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
                    <option value="english">English</option>
  <option value="mathematics">Mathematics</option>
  <option value="science">Science</option>
  <option value="coding">Coding</option>
  <option value="robotics">Robotics</option>
  <option value="ielts">IELTS</option>
  <option value="ela">ELA</option>
  <option value="naplan">NAPLAN</option>
  <option value="staar">STAAR</option>
  <option value="icas">ICAS</option>
  <option value="acer">ACER</option>
  <option value="selective_test">Selective Test</option>
  <option value="psat">PSAT</option>
  <option value="sat">SAT</option>
  <option value="act">ACT</option>
  <option value="ap">AP</option>
  <option value="ssat">SSAT</option>
  <option value="ib">IB</option>
  <option value="ssat">IGCSE</option>

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
