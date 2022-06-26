import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './hamburger.css'

function Hamburger({ isOpen }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <>
        <div className='hamburger' onClick={toggleHamburger}>
          <div 
            className='burger' 
            style={{
              transform: hamburgerOpen ? 'rotate(45deg)' : 'rotate(0)'
          }} />
          <div className='burger burger2' 
            style={{
              opacity: hamburgerOpen ? '0' : '1'
            }}
            />
          <div 
            className='burger' 
            style={{
              transform: hamburgerOpen ? 'rotate(-45deg)' : 'rotate(0)'
          }}  />
        </div>
        <div 
          className='hamburger-container'
          style={{
            transform: hamburgerOpen ? 'translateX(-350px)' : 'translateX(0px)'
          }}
         >
          <a href='#' className='hamburger-link'>
            HOME
          </a>
          <a href='#' className='hamburger-link'>
            SERVICES
          </a>
          <a href='#' className='hamburger-link'>
            SHOP
          </a>
          <a href='#' className='hamburger-link'>
            ABOUT
          </a>
          <a href='#' className='hamburger-link'>
            CONTACT
          </a>
          
          

        </div>
    </>


  )
}

export default Hamburger