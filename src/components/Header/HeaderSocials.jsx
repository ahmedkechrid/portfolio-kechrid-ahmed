import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/ahemd-kechrid-87a28a228/' target='_blank'><BsLinkedin/></a>
        <a href='https://www.facebook.com/profile.php?id=100012394171686' target='_blank'><FaFacebookSquare/></a>
        <a href='https://www.instagram.com/kechridahmed/' target='_blank'><FaInstagramSquare/></a>


    </div>
  )
}

export default HeaderSocials