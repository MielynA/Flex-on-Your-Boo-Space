import React from 'react'

const Navbar = () => {
    return (
<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="/">Flex On Your Boo Space</a>
  <form className="form-inline">
  <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" href="/">Home</a>
  </li>
  </ul>
  </form>
</nav>
    
    )
}

export default Navbar;