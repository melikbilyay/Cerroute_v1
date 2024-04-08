import React, { useState,useEffect } from "react"
import { Link } from 'react-router-dom';
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50)
    })
  }, [])


  return (
    <>
      <Head />
      <header className={scroll ? "header-scroll" : ""}>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <div className='logo'>
              <Link to="/">
                <h1>CeRRoute</h1>
              </Link>
            </div>
            <li>
              <select name="courses" id="courses">
                <option value="">Categories</option>
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
                <option value="course3">Course 3</option>
              </select>
            </li>
            <li>
              <input type="search" placeholder="Search..."/>
            </li>
            <li>
              <a href='/login' rel='noopener noreferrer'>Sign In</a>
            </li>
            <li>
              <a href='/register' rel='noopener noreferrer'>Sign Up</a>
            </li>
            <li>
              <i className="fa fa-shopping-cart"></i>
            </li>
          </ul>
          <div className='start'>
            <select name="languages" id="languages">
              <option value="en">EN</option>
              <option value="tr">TR</option>
              {/* Diğer dilleri buraya ekleyin */}
            </select>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
