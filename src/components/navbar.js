import React from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { FaBars , FaTimes} from 'react-icons/fa'
import './navbar.css'

function Navbar() {
  const navRef = useRef()
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }
  return (
    <header>
      <div className="logo">
        <h3>NewsHunt</h3>
      </div>
      <nav ref={navRef}>
        <Link className='a' to='./'>HOME</Link>
        <Link className='a' to='./business'>BUSINESS</Link>
        <Link className='a' to='./sports'>SPORTS</Link>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars /> 
      </button>
    </header>
  )
}

export default Navbar