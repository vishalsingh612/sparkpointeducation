import React from "react"
import { FaUserGraduate, FaChalkboardTeacher, FaBookOpen } from "react-icons/fa"
import "./Awrapper.css"

const Awrapper = () => {
  const statsData = [
    {
      icon: <FaUserGraduate />,
      data: "10,000+",
      title: "Students Enrolled",
    },
    {
      icon: <FaChalkboardTeacher />,
      data: "500+",
      title: "Expert Tutors",
    },
    {
      icon: <FaBookOpen />,
      data: "1,200+",
      title: "Courses Available",
    },
  ]

  return (
    <section className='stats-wrapper' style={{marginTop:"80px"}}>
      <div className='stats-container'>
        {statsData.map((item, index) => (
          <div key={index} className='stats-box'>
            <div className='stats-icon'>{item.icon}</div>
            <div className='stats-text'>
              <h1>{item.data}</h1>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Awrapper
