import React from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <OnlineCourses />
        <div className='container' style={{ marginTop: "60px" }}>
          <Heading subtitle='featured courses' title='explore our popular online courses' />

          <div className='coursesCard'>
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val, index) => (
                <div className='items' key={index}>
                  <div className='img'>
                    <img src={val.cover} alt={val.coursesName} />
                  </div>
                  <h2 className='courseTitle'>{val.coursesName}</h2>
                  <ul className='courseDescription'>
                    <li>✅ Expert instructors</li>
                    <li>✅ Flexible schedule</li>
                    <li>✅ Comprehensive material</li>
                  </ul>
                  <div className='price'>
                    <h3>{val.priceAll} / {val.pricePer}</h3>
                  </div>
                  <button className='outline-btn'>ENROLL NOW</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HAbout
