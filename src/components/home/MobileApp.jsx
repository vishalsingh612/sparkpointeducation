import React from "react"
import "../blog/blog.css"
import Heading from "../common/heading/Heading"
import "./mobileApp.css" // New CSS file
import mobileapp from "../../images/mobileapp.png"
const MobileApp = () => {
  return (
    <section className='mobile-app-section'>
      <div className='container'>
        <Heading
          subtitle='YOUR ULTIMATE PREP COMPANION'
          title='OUR MOBILE APPLICATION'
        />

        <div className='mobile-app-content'>
          <div className='mobile-app-image'>
            <img src={mobileapp} alt='Mobile App Preview' />
          </div>
          <div className='mobile-app-info'>
            <h2>Learn Anywhere, Anytime!</h2>
            <p>
              Get access to live classes, personalized tutoring, course materials,
              practice tests, and more — right from your mobile device. Designed
              to support students and professionals on the go.
            </p>
            <a
              href='https://play.google.com/store/apps/details?id=co.groot.prrke'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='download-btn'>
                DOWNLOAD THE APP <i className='fa fa-download'></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileApp
