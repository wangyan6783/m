import React from 'react';

const NavBar = () => {
  return (
    <div className="container">
      <nav>
        <input type="checkbox" id="nav" className="hidden"/>
        <label htmlFor="nav" className="nav-btn">
          <i></i>
          <i></i>
          <i></i>
        </label>
        <div className="logo">
          <a href="#">MyWebNow</a>
        </div>
        <div className="nav-wrapper">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#service">Why Us</a></li>
            <li><a href="#service">Contact Us</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
