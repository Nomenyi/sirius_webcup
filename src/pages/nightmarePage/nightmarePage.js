import React, { useRef as ref, useState as state} from 'react'
import { Link } from 'react-router-dom'

// page section import
import Headbar from '../mainPage/components/mainpage_navbar'
import Banner from './components/banner'
import Service from './components/service'
import CallToAction1 from './components/callToAction1'
import Contact from './components/contact'
import Footer from './components/footer'

// Asset
import scrolldown from '../../assets/image/icon/png/arrow_ScroolTop.png'
import logo from '../../assets/image/logo/IIR_Logo/IIR_Logo_Large_transparent.png'

function nightmarePage() {
    const [isMenuOpen, setIsMenuOpen] = state(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
  // let totop = document.querySelector(".ScroolTop");

  // window.addEventListener("scroll", () => {
  //   if (window.pageYOffset > 300) {
  //       totop.classList.add("active");
  //   } else {
  //       totop.classList.remove("active");
  //   }
  // });

  return (
    <div classname='main_container'>
      <div className='main_content'>
        <div class="ScroolTop card-black">
            <a href="#"><img src={scrolldown} width="30px" height="30px"/></a>
        </div>
        {/* <Headbar/>
         */}
         <div className='mainpage_Navbar'>
        <nav id="navbar" className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <img src={logo} alt='IIR Logo' width={'190px'}/>
                </div>

                <ul id="menu">
                    <li><Link to={'/'}>Retour</Link></li>
                    
                </ul>

                <div>
                    <Link to={'/onirix'} className='Onirix-Btn'>Testez Onirix</Link>
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
        <Banner/>
        <Service/>
        <CallToAction1/>
        <Footer/>
        
      </div>
    </div>
  )
}

export default nightmarePage