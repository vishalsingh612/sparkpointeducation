import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard2 from "./AboutCard2"
import TeamCard from "../team/TeamCard"
import "../team/team.css"
import Heading from "../common/heading/Heading"
const About = () => {
  return (
    <>
      <Back title='About Us' />
      <AboutCard2 />
      <section className='team padding'>
      <Heading subtitle='MEET OUT TEAM' title='Our Experts Behind the Success' />
        <div className='container grid'>
        
          <TeamCard />
        </div>
      </section>
    </>
  )
}

export default About
