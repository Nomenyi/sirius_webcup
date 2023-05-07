import { refresh } from 'aos'
import React, { useRef as ref, useState as state} from 'react'
import { Link } from 'react-router-dom'

// Asset import
import logo from '../../../assets/image/logo/IIR_Logo/IIR_Logo_Large_transparent.png'

function mainpage_navbar() {
    const [isMenuOpen, setIsMenuOpen] = state(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
  return (
    <div className='mainpage_Navbar'>
        <nav id="navbar" className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <img src={logo} alt='IIR Logo' width={'190px'}/>
                </div>

                <ul id="menu">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/nigntmare">Vous faites des cauchemars?</a></li>
                    
                </ul>

                <div>
                    <Link to={'/onirix'} className='Onirix-Btn'>En savoir plus sur Onirix</Link>
                </div>

                
                
            </div>
        </nav>

            <div className="menuIcon" onClick={toggleMenu}>
                <span className="icon icon-bars"></span>
                <span className="icon icon-bars overlay"></span>
            </div>

            <div className={`reponse_menu  ${isMenuOpen ? 'show' : 'close'}`}>
                <div className='menu_btn'>
                    <a href="#home" onClick={toggleMenu}>Home</a>
                    <a href="#home" onClick={toggleMenu}>Home</a>
                    <a href="#home" onClick={toggleMenu}>Home</a>
                    <a href="#home" onClick={toggleMenu}>Home</a>
                    <a href="#home" onClick={toggleMenu}>Home</a>
                    <a href="#home" onClick={toggleMenu}>Home</a>
                </div>
            </div>


            {/* <div className="overlay-menu">
            <ul id="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div> */}
    </div>
  )
}

export default mainpage_navbar