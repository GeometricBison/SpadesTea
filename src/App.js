import React, {useState} from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';

const App = () => 
{
  return(
    <div className = 'App'> 
      <>
        <div className = "main-wrapper">
          <Navbar/>
          <Home/>
        </div>
      </>
    </div>
  );
}

export default App;

