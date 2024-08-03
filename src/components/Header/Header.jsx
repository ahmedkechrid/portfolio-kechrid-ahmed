import React from 'react'
import"./Header.css"
import CTA from './CTA'
import AhmedImg from '../../assests/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>
      <div className="container header__container">
        <h5>hello I'm</h5>
        <h1>Kechrid Ahmed</h1>
        <h5 className='text-light'>FullStack developer</h5>
        <h5 className='text-light'>Datascientist</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={AhmedImg} alt="me"/>

        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
   </header>
    
  )
}

export default Header