import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          NewsHunt
        </div>
        <div className="links">
          <Link to="/">Top Headings</Link>
          <Link to="/business">Business</Link>
          <Link to="/sports">Sports</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar