import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <div className="header-main">
  
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            {/* <li>
              <Link to='/team'>Team</Link>
            </li> */}
            <li>
              <Link to='/download'>Our Application</Link>
            </li>
            <li>
              <Link to='/journal'>Blogs</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <a href="https://web.classplusapp.com/login?orgCode=jpvnyg" style={{textDecoration:"none" , color:"white"}}>
            <div className='button'>LOGIN / SIGNUP</div>
            </a>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>

    </ div>
  )
}

export default Header
