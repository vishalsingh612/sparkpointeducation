import React from "react"
import logo from "../../../images/logo.png"

const iconStyle = {
  color: '#7F3E99',
  fontSize: '18px',
  marginRight: '15px',
  textDecoration: 'none',
}
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <img src={logo} style={{width:"160px"}}/>
          </div>

          <div className='social' >
    <a href="https://www.facebook.com/share/18rUuTXobW/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
      <i className='fab fa-facebook-f icon'></i>
    </a>
    <a href="https://www.instagram.com/spark_point_education?igsh=Y2JpcnNyaGc2eDE1" target="_blank" rel="noopener noreferrer" style={iconStyle}>
      <i className='fab fa-instagram icon'></i>
    </a>
    <a href="https://www.linkedin.com/company/spark-point-education/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
  <i className='fab fa-linkedin-in icon'></i>
</a>
    <a href="https://www.youtube.com/@SparkPointEducation" target="_blank" rel="noopener noreferrer" style={iconStyle}>
      <i className='fab fa-youtube icon'></i>
    </a>
  </div>
  
        </div>
      </section>
    </>
  )
}

export default Head
