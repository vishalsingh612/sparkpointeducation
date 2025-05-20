import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard2 from "./AboutCard2"
import TeamCard from "../team/TeamCard"
import "../team/team.css"
import Heading from "../common/heading/Heading"
const containerStyle = {
    maxWidth: '80%',
    margin: '0 auto',
    padding: '0px 20px',
    fontFamily: 'sans-serif',
    color: '#444',
    lineHeight: 1.7,
  }

  const headingStyle = {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  }

  const listStyle = {
    paddingLeft: '20px',
    fontSize: '16px',
    marginBottom: '10px',
  }

  const itemTitleStyle = {
    fontWeight: '600',
    color: '#7F3E99',
  }
const About = () => {
  return (
    <>
      <Back title='About Us' />
      <AboutCard2 />
      <section className='team padding'>
      <Heading subtitle='Our Experts
' title='Why Our Faculty Stands Out' />
        {/* <div className='container grid'>
        
          <TeamCard />
        </div> */}
         <div style={containerStyle}>

      <ul style={{ padding: 0, listStyle: 'none' }}>
        <li style={listStyle}>
          <span style={itemTitleStyle}>Highly Qualified Teachers:</span> All our educators hold a <strong>Master’s degree</strong> in their respective subjects, ensuring strong academic foundations.
        </li>
        <li style={listStyle}>
          <span style={itemTitleStyle}>Experienced Professionals:</span> Each teacher brings <strong>years of classroom experience</strong>, with a deep understanding of student learning styles.
        </li>
        <li style={listStyle}>
          <span style={itemTitleStyle}>Subject Matter Experts:</span> Our faculty possess <strong>in-depth subject knowledge</strong> and stay up to date with academic trends and syllabus changes.
        </li>
        <li style={listStyle}>
          <span style={itemTitleStyle}>Passionate Educators:</span> Driven by a genuine <strong>passion for teaching</strong>, our instructors are approachable, motivating, and student-focused.
        </li>
        <li style={listStyle}>
          <span style={itemTitleStyle}>Personalized Support:</span> We ensure <strong>individual attention</strong> and tailored guidance to help every student overcome challenges and succeed.
        </li>
        <li style={listStyle}>
          <span style={itemTitleStyle}>Track Record of Excellence:</span> Our teachers have consistently helped students <strong>achieve top academic results</strong> and excel in competitive exams.
        </li>
      </ul>
    </div>
      </section>
    </>
  )
}

export default About
