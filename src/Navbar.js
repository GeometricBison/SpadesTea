import React, {useState} from 'react';

const Navbar = () =>
{
  return(
    <nav>
      <div className = "main-navbar">
        <div className="dummy">
          <img src="instalogo.png" className="resize"/>
          <img src="tiktoklogo.png" className="resize"/>
          <img src="facebooklogo.png" className="resize"/>
        </div>
        <ul className = "navbar">
          <li className = "link">Home</li>
          <li className = "link">About</li>
          <img src="logo.png" className="logo-header"/>
          <li className = "link">Menu</li>
          <li className = "link">Contact</li>
        </ul>
        <div className = "socials">
            <img src="instalogo.png" className="resize"/>
            <img src="tiktoklogo.png" className="resize"/>
            <img src="facebooklogo.png" className="resize"/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;