const Footer = () =>
{
  return(
  <div className="footer-section" id="footer-scroll">
    <iframe src="https://snazzymaps.com/embed/497696" width="100%" height="100%" style={{border: 0}} className="spades-map" title="tea-map"></iframe>
    <div className="hours-section footer-content">
      <div className="hours-center"> 
        <h2>STORE HOURS</h2>
        <div className="hours-wrapper footer-wrapper">
          <h3>Monday-Friday</h3>
          <p>11:30AM-8PM</p>
        </div>
        <div className="hours-wrapper footer-wrapper">
          <h3>Weekends</h3>
          <p>11AM-8PM</p>
        </div>
      </div>
    </div> 
    <div className="contact-section footer-content">
      <h2>CONTACT</h2>
      <h3>Phone</h3>
      <p>630-486-1055</p>
    </div>
  </div>
  )
}

export default Footer;