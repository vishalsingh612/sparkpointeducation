import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { useNavigate } from "react-router-dom"

const Hero = () => {
  const navigate = useNavigate()

  const handleViewCourses = () => {
    navigate("/courses")
  }

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading
              subtitle='Empowering Future Innovators,'
              title='Live 1-on-1 Tutoring with Top Global Experts'
            />
            <p>
              Master Math, Science, Coding & more with personalized sessions,
              flexible timing, and expert guidance tailored to your goals.
            </p>
            <div className='hero-buttons'>
              <a
                href='https://meetpro.club/Spark.Point'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='primary-btn'>
                  BOOK A FREE DEMO <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </a>
              <button className='secondary-btn' onClick={handleViewCourses}>
                VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
