import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import logo from "../../../images/logo.png"
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

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
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
