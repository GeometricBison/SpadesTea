import React, {useState, useEffect} from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom';
import {orderlink} from './App.js';
import {linkStyle} from './App.js';
import Home from './Home.js';
import Scroll from 'react-scroll'

const ScrollLink = Scroll.Link;

const Navbar = () =>
{
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
          <li className = "mobile-link"><Link to="/" style={linkStyle}>Home</Link></li>
          <li className = "mobile-link">Order</li>
          <li className = "mobile-link"><a href="spadesmenu.jpg" target="_blank" style={linkStyle}>Menu</a></li>
          <a href="https://www.instagram.com/spades.tealife.aurora/?hl=en"><img src="instalogo.png" className="resize" alt="instagram"/></a>
          <a href="https://www.tiktok.com/@spades.tealife.aurora"><img src="tiktoklogo.png" className="resize" alt="titkok"/></a>
          {/* <img src="facebooklogo.png" className="resize" alt="facebook"/> */}
        </ul>

        <ul className = "navbar">
          <li className = "link"><Link to="/" className="underline-anim" style={linkStyle}>Home</Link></li>
          <li className = "link"><a href={orderlink} className="underline-anim" target="_blank" style={linkStyle}>Order</a></li>
          <Link to="/" className="underline-anim"><img src="logo.png" className="logo-header"/></Link>
          <li className = "link"><a href="spadesmenu.jpg" className="underline-anim" target="_blank" style={linkStyle}>Menu</a></li>
          <li className = "link"><ScrollLink to="footer-scroll" smooth='easeInQuad' className="underline-anim">Contact</ScrollLink></li>
        </ul>

        <div className = "socials">
          <a href="https://www.instagram.com/spades.tealife.aurora/?hl=en"><img src="instalogo.png" className="resize" alt="instagram"/></a>
          <a href="https://www.tiktok.com/@spades.tealife.aurora"><img src="tiktoklogo.png" className="resize" alt="titkok"/></a>
          {/* <img src="facebooklogo.png" className="resize"/> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;