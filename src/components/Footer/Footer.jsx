import React from 'react'
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";




const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>AHMED KECHRID</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#experiance'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#Portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://instagram.com'><FaInstagram/></a>
        <a href='https://linkedin .com'><FaLinkedin/></a>

      </div>
      <div className="footer__copyright">
        <small>&copy;Ahmed_Kechrid. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer