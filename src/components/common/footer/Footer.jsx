import React from "react"
import { Link } from "react-router-dom"
import { blog } from "../../../dummydata"
import "./footer.css"
import logo from "../../../images/logo.png"
const footerLinkStyle = {
  color: '#7F3E99',
  textDecoration: 'none',
  fontSize: '15px',
  display: 'block',
  marginBottom: '8px',
}
const iconStyle = {
  color: '#7F3E99',
  fontSize: '18px',
  marginRight: '15px',
  textDecoration: 'none',
}
const Footer = () => {
  return (
    <>
      {/* <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section> */}
      <footer>
        <div className='container padding'>
          <div className='box logo'>
          <div className='logo'>
            <img src={logo} style={{width:"180px"}}/>
          </div>
            <p>We offer expert-led SAT prep with personalized plans, quality materials, mock tests, and one-on-one mentoring to help students master concepts and boost their scores confidently.</p>

            <a href="https://www.facebook.com/share/18rUuTXobW/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
      <i className='fab fa-facebook-f icon'></i>
    </a>
    <a href="https://www.instagram.com/spark_point_education?igsh=Y2JpcnNyaGc2eDE1" target="_blank" rel="noopener noreferrer" style={iconStyle}>
      <i className='fab fa-instagram icon'></i>
    </a>
    <a href="https://www.linkedin.com/company/spark-point-education/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
  <i className='fab fa-linkedin-in icon'></i>
</a>
    <a href="https://www.youtube.com/@SparkPointEducation" target="_blank" rel="noopener noreferrer" style={iconStyle}>
      <i className='fab fa-youtube icon'></i>
    </a>
          </div>
          <div className='box link'>
  <h3>Explore</h3>
  <ul>
    <li><Link to="/about" style={footerLinkStyle}>About Us</Link></li>

    <li><Link to="/courses" style={footerLinkStyle}>Courses</Link></li>
    <li><Link to="/download" style={footerLinkStyle}>Download Our App</Link></li>
    <li><Link to="/journal"style={footerLinkStyle}>Blog</Link></li>
    <li><Link to="/contact"style={footerLinkStyle}>Contact Us</Link></li>
  </ul>
</div>

<div className='box link'>
  <h3>Quick Links</h3>
  <ul>
    <li><Link to="/contact" style={footerLinkStyle}>Contact Us</Link></li>
    <li><Link to="/terms-and-conditions"style={footerLinkStyle}>Terms & Conditions</Link></li>
    <li><Link to="/privacy" style={footerLinkStyle}>Privacy</Link></li>
  </ul>
</div>
          <div className='box last'>
            <h3>Reach to us</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Sec. 63, Noida, 201301, Uttar Pradesh, India
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 93104 48417<br/>
                +91 92116 31407
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@sparkpointeducation.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2025 All rights reserved | <i className='fa fa-heart'></i> SPARK POINT EDUCATION
        </p>
      </div>
    </>
  )
}

export default Footer
