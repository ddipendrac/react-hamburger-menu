import React, { useState } from 'react'
// import './nav.css'
import Hamburger from './Hamburger'

function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div>
      <div className='navigation'>
        <ul>
          <li>HOME</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
          <div className='hamburger' onClick={toggleHamburger}>
            <Hamburger  isOpen={hamburgerOpen} />
          </div>
      </div>

     <style jsx>{`
      .navigation {
        width: 100%;
        height: 50px;
        background: green;
      }
      
      
      .navigation ul {
        display: flex;
        flex-wrap: wrap;
        float: right;
        margin: 20 0px;
        padding: 0 25px;
      }
      
      .navigation ul li {
        list-style-type: none;
        padding-right: 10px;
      }
      
      @media (max-width: 767px) {
        .navigation {
          display: fixed;
          padding-top: 10px;
          margin-left: 10px;
          z-index: 10px;
        }
      
        .navigation ul{
          display: ${hamburgerOpen ? 'inline': 'none'};
          background-color: blue;
          height: 100vh;
          width: 50vw;
          margin-top: 50px;
          position: absolute;
        }
      }
    `}
    </style> 

    </div>
  )
}

export default Nav