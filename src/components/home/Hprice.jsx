import React from "react"
import Heading from "../common/heading/Heading"
import { FaBookOpen, FaFileAlt, FaUserFriends } from "react-icons/fa"
import "./price.css"
const offerings = [
  {
    icon: <FaUserFriends size={30} color="#5e3fa2" />,
    title: "One-on-One Live Sessions",
    desc: "Get personalized attention with expert tutors.",
  },
  {
    icon: <FaBookOpen size={30} color="#5e3fa2" />,
    title: "Complete Study Material",
    desc: "Access high-quality resources covering all topics.",
  },
  {
    icon: <FaFileAlt size={30} color="#5e3fa2" />,
    title: "Practice Tests & Sectional Tests",
    desc: "Sharpen your skills with focused tests.",
  },
  {
    icon: <FaFileAlt size={30} color="#5e3fa2" />,
    title: "Full-Length Mock Tests",
    desc: "Experience real exam conditions before the big day.",
  },
  {
    icon: <FaUserFriends size={30} color="#5e3fa2" />,
    title: "Personal Mentor Support",
    desc: "Every student will get a expert mentor for daily schedule tracking and guidance.",
  },
  
  
]

const Hprice = () => {
  return (
    <section className='hprice padding'>
      <Heading subtitle='OUR OFFERINGS' title='What to Expect' />

      <div className='offerings-grid'>
        {offerings.map((item, index) => (
          <div className='offering-card' key={index}>
            <div className='icon-circle'>{item.icon}</div>
            <h3 className='offering-title'>{item.title}</h3>
            <p className='offering-desc'>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hprice
