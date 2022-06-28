import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/hamburger.css'

function Hamburger() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }  
  
  return (
    <>
        <div 
          className='overlay'
          style={{
            visibility: hamburgerOpen ? 'visible': 'hidden'
          }}
        ></div>
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
          }} />
        </div>
        <div 
          className='hamburger-container'
          style= {{
            width: hamburgerOpen ? '350px' : '0'
          }}
          onClick={toggleHamburger}
         >
          <Link 
            to='/cart' 
            className='nav-item primary home'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.3s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '0.7s'
            }}
          >
            CART
          </Link>
          <Link
            to='/about'
            className='nav-item primary services'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.4s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '0.75s'
            }}
            
            >
            ABOUT
          </Link>
          <Link 
            to='/contact' className='nav-item primary shop'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.5s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '0.8s'
            }}
            >
            CONTACT
          </Link>
          <Link
            to='/services'
            className='nav-item primary about'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.6s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '0.85s'
            }}
            >
            SERVICES
          </Link>
          <Link 
            to='/shoes' className='nav-item primary contact'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.7s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '0.90s'
            }}
            
            >
            SHOES
          </Link>
          <Link 
            to='/shop' className='nav-item secondary contact'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.7s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '0.95s'
            }}
           
            >
            SHOP
          </Link>
          <Link 
            to='/men' className='nav-item secondary contact'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.7s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '1s'
            }}
            
            >
            MEN
          </Link>
          <Link 
            to='/women' className='nav-item secondary contact'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.7s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '1.10s'
            }}
            
            >
            WOMEN
          </Link>
          <Link 
            to='/glasses' className='nav-item secondary contact'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.7s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '1.15s'
            }}
            
            >
            GLASSES
          </Link>
          <Link 
            to='/homeappliances' className='nav-item secondary contact'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.7s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '1.20s'
            }}
            >
            HOME APPLIANCES
          </Link>
          <Link  
            to='electrics' className='nav-item secondary contact'
            style={{
              opacity: hamburgerOpen ? '1' : '0',
              visibility: hamburgerOpen ? '': 'hidden',
              transitionDelay: hamburgerOpen ? '0.7s' : '0s',
              animationName: hamburgerOpen ? 'animateNavLink' : '',
              animationDelay: '1.25s'
            }}
            >
            ELECTRICS
          </Link>
        </div>
        {/* Hide secondary nav-links for wide screen */}
        <style jsx>{`
          @media  (min-width: 945px){
            .secondary {
              visibility: hidden;
            }
          } 
         
          
 
        `}
        </style>
    </>


  )
}

export default Hamburger