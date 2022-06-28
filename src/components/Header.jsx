import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'


function Nav() {
  return (
    <div className='header'>
      <div className='logo'>
        BurgerMenu
      </div>
      <div className='nav-links'>
        <Link to='/' className='nav-link btn-underline'>
          SHOP
        </Link>
        <Link to='/men' className='nav-link btn-underline'>
          MEN
        </Link>
        <Link to='/women' className='nav-link btn-underline'>
          WOMEN
        </Link>
        <Link to='/glasses' className='nav-link btn-underline'>
          GLASSES
        </Link>
        <Link to='/homeappliances' className='nav-link btn-underline'>
          HOMEAPPLIANCES
        </Link>
        <Link to='/electrics' className='nav-link btn-underline'>
          ELECTRICS
        </Link>
      </div>
    </div>
  )
}

export default Nav