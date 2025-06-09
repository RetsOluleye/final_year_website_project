import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veniam laboriosam optio a qui nemo natus voluptate molestias ab dolor!</p>
                <div className="footer-social-icons">
                    <Link to='http://facebook.com/samuel.oluleye.39' target="_blank"><img src={assets.facebook_icon} alt="" /></Link>
                    <Link to='https://x.com/RetsOluleye' target="_blank"><img src={assets.twitter_icon} alt="" /></Link>
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>RETSKITCHEN</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+234-903-960-1559</li>
                        <li>contact@retskitchen.com</li>
                    </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright"> &copy;2025 @retskitchen.com -All Rights Reserved.</p>
    </div>
  )
}

export default Footer