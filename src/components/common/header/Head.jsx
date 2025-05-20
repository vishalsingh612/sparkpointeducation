import React, { useState } from "react"
import axios from "axios"
import logo from "../../../images/logo.png"

const Head = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "" })

  const buttonStyle = {
    backgroundColor: '#7F3E99',
    color: '#fff',
    border: 'none',
    padding: '8px 14px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const iconButtonStyle = {
    ...buttonStyle,
    margin: "30px 10px 0 0",
    width: '40px',
    height: '30px',
    padding: 0,
    fontSize: '18px',
  }

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    padding: '30px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
    zIndex: 1000,
    width: '90%',
    maxWidth: '400px',
  }

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999,
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("https://sparkpointedu-backend.onrender.com/api/book-call", formData)
      alert("Thank you! We will contact you shortly.")
      setShowPopup(false)
      setFormData({ name: "", phone: "" }) // reset form
    } catch (error) {
      console.error("Error submitting call form:", error)
      alert("Submission failed. Please try again.")
    }
  }

  return (
    <>
      <section className='head'>
        <div className='container flexSB' style={{ alignItems: 'center' }}>
          <div className='logo'>
            <img src={logo} alt="Spark Point Logo" style={{ width: "160px" }} />
          </div>

          <div className='social' style={{ display: 'flex', alignItems: 'center' }}>
            <button style={buttonStyle} onClick={() => setShowPopup(true)}>Book a Call</button>
            <a
              href="https://wa.me/919310448417"
              target="_blank"
              rel="noopener noreferrer"
              style={iconButtonStyle}
              title="Chat on WhatsApp"
            >
              <i className='fab fa-whatsapp'></i>
            </a>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {showPopup && (
        <>
          <div style={overlayStyle} onClick={() => setShowPopup(false)} />
          <div style={popupStyle}>
            <h3 style={{ marginBottom: '10px', color: '#7F3E99', textAlign: 'center' }}>Book a Call</h3>
            <p style={{ marginBottom: '10px', color: 'grey', textAlign: 'center' }}>your first step to ace examination!</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              />
              <button type="submit" style={{ ...buttonStyle, width: '100%' }}>
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </>
  )
}

export default Head
