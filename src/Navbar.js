import React, {useState, useEffect} from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";



const Navbar = () =>
{
  const navRef = useRef();

  const showNavbar = () => {
    if(navRef.current.classList.contains("logo-header") == false)
    {
      navRef.current.classList.toggle(
        "responsive_nav"
      );
    }
  };

  const [isTablet, setIsTablet] = useState(window.innerWidth > 768);

  const [show, setShow] = useState(false);

  useEffect(() => 
    {
    window.addEventListener("resize", () => {
        const istablet = window.innerWidth > 768;
        if (istablet !== isTablet) setIsTablet(istablet);
    }, false);
    }, [isTablet]);

  return(
    <nav>
      <div className = "main-navbar">
        <div className="dummy">
          <img src="instalogo.png" className="resize" alt="instagram"/>
          <img src="tiktoklogo.png" className="resize" alt="titkok"/>
          <img src="facebooklogo.png" className="resize" alt="facebook"/>
        </div>
        
        
        <div id="hamburger-resize" className={show ? 'mobile-active' : ''}>
          { 
          show ? 
          null :
          <><button className="nav-btn" onClick={()=>setShow(true)}>
            <FaBars />
          </button></>
          }

          {
          show ? 
          <><button className="nav-btn nav-close-btn" onClick={()=>setShow(false)}>
            <FaTimes/>
          </button></>
          : null
          }

        </div>
         
        <ul className={`mobile-navbar ${show ? 'mobile-active' : ''} ${isTablet ? 'tablet-delete' : ''}`}>
          <li className = "mobile-link">Home</li>
          <li className = "mobile-link">About</li>
          <li className = "mobile-link">Menu</li>
          <li className = "mobile-link">Contact</li>
          <a href="https://www.instagram.com/spades.tealife.aurora/?hl=en"><img src="instalogo.png" className="resize" alt="instagram"/></a>
          <a href="https://www.tiktok.com/@spades.tealife.aurora"><img src="tiktoklogo.png" className="resize" alt="titkok"/></a>
          <img src="facebooklogo.png" className="resize" alt="facebook"/>
        </ul>

        <ul className = "navbar">
          <li className = "link">Home</li>
          <li className = "link">About</li>
          <img src="logo.png" className="logo-header"/>
          <li className = "link">Menu</li>
          <li className = "link">Contact</li>

          {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
          </button> */}

        </ul>
        <div className = "socials">
          <a href="https://www.instagram.com/spades.tealife.aurora/?hl=en"><img src="instalogo.png" className="resize" alt="instagram"/></a>
          <a href="https://www.tiktok.com/@spades.tealife.aurora"><img src="tiktoklogo.png" className="resize" alt="titkok"/></a>
          <img src="facebooklogo.png" className="resize"/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;