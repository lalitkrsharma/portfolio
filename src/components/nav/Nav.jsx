import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {BiUserCircle} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiMessageLine} from 'react-icons/ri'
import {useState} from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#"?'active':''}><GoHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav === '#about'?'active':''}><BiUserCircle /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')}className={activeNav === '#experience'?'active':''}><BiBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')}className={activeNav === '#services'?'active':''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}className={activeNav === '#contact'?'active':''}><RiMessageLine /></a>
    </nav>
  )
}

export default Nav