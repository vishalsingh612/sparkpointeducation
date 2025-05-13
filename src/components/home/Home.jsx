import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./MobileApp"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      
      <Hblog />
      <Testimonal />
      <Hprice />
    </>
  )
}

export default Home
