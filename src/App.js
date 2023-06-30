import React, {useRef, useState} from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Footer from './Footer.js';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

const orderlink = "https://food.google.com/chooseprovider?restaurantId=/g/11ht3890q2&g2lbs=ADZRdktUJ73qNT-9BrAql0NEq3bfC5LTEiNT_STGczvf5erqPyTUWMmG3l7_7KMa6huNbxpf9e9qAGWYoHPbhFpCbNhRcb22RdpR0F2eMuHx3gGZ_wzCY0A%3D&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=y_WZZMmvBdSpptQPge-t8AY&ei=y_WZZMmvBdSpptQPge-t8AY&fo_s=OA&orderType=2&sei=CexY_2f0xxuREaiipqGa0n6_&utm_campaign&utm_source=search";

const linkStyle = {
  textDecoration: "none",
  color: "black"
};

const scrollDown = (ref) => {
  ref?.current?.scrollIntoView({ behavior: 'smooth' });
};

const App = () => 
{

  return(
    <BrowserRouter>
      <div className = 'App'> 
        <div className = "main-wrapper">
            <Navbar/>
            <Routes>
              <Route index element = {<><Home/> <Footer/></>}/>
              <Route path="/home" element = {<><Home/> <Footer/></>}/>
              <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export {orderlink as orderlink};
export {linkStyle as linkStyle};
export default App;

