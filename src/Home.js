import React, {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import {orderlink} from './App.js';
import {linkStyle} from './App.js';

const ReviewImage = (props) => {
  const image = <img src={props.source + ".png"} className={props.source}></img>
  return(image)
}

const ReviewSection = (props) =>{
  const review = 
  <>
    <div className="review-section">
      <div className="review-wrapper">
        <div className="review-header">
          <div className="service-img-size">
            <ReviewImage source={props.source}/>
          </div>
          <h2>{props.name}</h2>
        </div>
        <p class="review-desc"><b>"</b>{props.reviewcontent}<b>"</b></p>
        <p id="star">★★★★★</p>
      </div>
      <div className="review-img-size">
        <img src={"review" + props.review + ".jpg"} className="review-image"></img>
      </div>
    </div>
  </>
  return(review)
}

const Home = () =>
{
  return(
    <div className="body">
      <div className = "slideshow"> 
        <div className = "welcome">
          <h1>NOW OPEN!</h1>
          <p>Try our new boba drinks at park to shop!</p>
          <div className="button-container">
            <div className="style-button"><a href="spadesmenu.jpg" className="button-link" target="_blank" style={linkStyle}><h3>MENU</h3></a></div>
            <div className="style-button order-button"><a href={orderlink} className="button-link" target="_blank" style={linkStyle}><h3>ORDER</h3></a></div>
          </div>
        </div>
      </div>

      <div className="gallery-container">
        <h1>GALLERY</h1>
        <div className="gallery-grid">
          <img className="gallery-img" src="orange.png"></img>
          <img className="gallery-img" src="mint.png"></img>
          <img className="gallery-img" src="strawberry.png"></img>
          <img className="gallery-img" src="peach.png"></img>
          <img className="gallery-img" src="lemon.png"></img>
          <img className="gallery-img" src="mango.png"></img>
        </div>
      </div>

      <div className="main-review-section">
        <h1>OUR CUSTOMERS SAY</h1>
        <ReviewSection source="yelp" review="1" name="Mei Fong" reviewcontent="So good! The staff was friendly and they're drinks are delicious! Not too sweet which is what I like!"/>
        <ReviewSection source="doordash" review="2" name="Mei Fong" reviewcontent="Tasty! Drinks tasted even better they looked! The strawberry flavor is amazing!"/>
        <ReviewSection source="google" review="4" name="Mei Fong" reviewcontent="Our group enjoyed all of our drinks! The favorites were peach oolong and classic milk tea!"/>
      </div>


    </div>
  )
}

//<iframe src="https://snazzymaps.com/embed/497696" width="50%" height="100%" style={{border: 0}} className="spades-map" title="tea-map"></iframe>

export default Home;
