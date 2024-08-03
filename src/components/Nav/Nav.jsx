import React from 'react'
import"./Nav.css"
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { LuBookLock } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { useState } from 'react';




const Nav = () => {
  const [activeNav,setactiveNav]=useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setactiveNav('#')}className={activeNav==='#'?'active':''}><IoHomeOutline/></a>
      <a href='#About' onClick={() => setactiveNav('#About')} className={activeNav==='#About'?'active':''}><CiUser/></a>
      <a href='#experiance' onClick={() => setactiveNav('#experiance')}className={activeNav==='#experiance'?'active':''}><LuBookLock/></a>
      <a href='#services' onClick={() => setactiveNav('#services')}className={activeNav==='#services'?'active':''}><RiServiceLine/></a>
      <a href='#contact'onClick={() => setactiveNav('#contact')}className={activeNav==='#contact'?'active':''}><BiMessageRoundedDetail/></a>

    </nav>
  )
}

export default Nav