import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <p className='LOGO'>BigBites.</p>
          {/* <img src={assets.logo} alt="" /> */}
          <p>Thank you for visiting BigBites. We’re passionate about crafting unforgettable dining experiences. Our commitment to using fresh, high-quality ingredients and exceptional service sets us apart. Whether you're craving a cozy dinner or celebrating a special occasion, we're here to delight your taste buds. Join our culinary journey and discover why we're your go-to destination for your cravings.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@BigBites.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 © BigBites.com - All Right Reserved.</p>
      
    </div>
  )
}

export default Footer
