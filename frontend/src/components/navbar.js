import React from 'react'
import { Link } from 'react-router-dom'
import '../app.css'

const Navbar = () => {
    return (
<nav className="navbar navbar-light navColor">
  <Link className="navbar-brand" to="/">Flex On Your Boo Space</Link>
  <div className="form-inline">
  <ul className="nav justify-content-end">
  <li className="nav-item">
  <Link className="nav-link active" to="/">Home</Link>
  </li>
  </ul>
  </div>
</nav>
    
    )
}

export default Navbar;