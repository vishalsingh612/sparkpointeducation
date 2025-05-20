import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./MobileApp"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import PriceCard from "../pricing/PriceCard"
import Heading from "../common/heading/Heading"
import BenefitsSection from "./BenefitsSection"
const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <section className='price padding'>
      <Heading 
              subtitle='Empowering Educators to Inspire Excellence'
              title='Our Comprehensive Tutor Training Module'
            />
        <div >
          <PriceCard />
        </div>
      </section>
      <Hblog />
      <Hprice />
      <BenefitsSection />
      <Testimonal />
      
    </>
  )
}

export default Home
