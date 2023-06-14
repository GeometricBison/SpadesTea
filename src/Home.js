import React, {useState} from 'react';

const ReviewImage = (props) => {
  const image = <img src={props.source + ".png"} className={props.source}></img>
  return(image)
}

const ReviewSection = (props) =>{
  const review = 
  <>
    <div className="review-section">
      <div className="review-header">
        <div className="service-img-size">
          <ReviewImage source={props.source}/>
        </div>
        <h2>{props.name}</h2>
      </div>
      <p><b>"</b>omg so good, so smaple textsmaple textsmaple textsmaple textsmaple textsmaple textsmaple text<b>"</b></p>
      <p id="star">★★★★★</p>
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
          <p>Try our new boba drinks at park to bruh</p>
          <div className="button-container">
            <div className="style-button"><h3>MENU</h3></div>
            <div className="style-button order-button"><h3>ORDER</h3></div>
          </div>
        </div>
      </div>

      <div className="gallery-container">
        <h1>GALLERY</h1>
        <div className="gallery-grid">
          <img className="gallery-img" src="orange.png"></img>
          <img className="gallery-img" src="mint.png"></img>
          <img className="gallery-img" src="strawberry.png"></img>
        </div>
      </div>

      <div className="main-review-section">
        <h1>OUR CUSTOMERS SAY</h1>
        <ReviewSection source="yelp" review="1" name="Mei Fong"/>
        <ReviewSection source="doordash" review="2" name="Mei Fong"/>
        <ReviewSection source="google" review="4" name="Mei Fong"/>
      </div>

      <div className="footer-section">
        <iframe src="https://snazzymaps.com/embed/497696" width="100%" height="100%" style={{border: 0}} className="spades-map" title="tea-map"></iframe>
        <div className="hours-section">
          <h2>STORE HOURS</h2>
        </div>
        <div className="contact-section">
          <h2>STORE HOURS</h2>
        </div>
      </div>
    </div>
  )
}

//<iframe src="https://snazzymaps.com/embed/497696" width="50%" height="100%" style={{border: 0}} className="spades-map" title="tea-map"></iframe>

export default Home;