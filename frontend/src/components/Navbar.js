import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
<nav className="navbar navbar-light bg-light">
  <Link className="navbar-brand" href="/">Flex On Your Boo Space</Link>
  <div className="form-inline">
  <ul className="nav justify-content-end">
  <li className="nav-item">
    <Link className="nav-link active" href="/">Home</Link>
  </li>
  </ul>
  </div>
</nav>
    
    )
}

export default Navbar;