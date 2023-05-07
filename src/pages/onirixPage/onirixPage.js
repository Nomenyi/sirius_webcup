import React, { useEffect as effetc } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link } from 'react-router-dom'

import logo from '../../assets/image/logo/IIR_Logo/IIR_Logo_Large_transparent.png'
// AOS import
import Aos from 'aos'
import 'aos/dist/aos.css'

// Pages import
import Onirix_navbar from './components/onirix_navbar'

// Assets import
import videoSource from '../../assets/video/pinkmotion.mp4';
import testImage from '../../assets/image/logo/sirius/SiriusTeam_Logo.jpg';


function onirixPage() {

  const videoStyle = {
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    backgroundAttachment: 'fixed',
    transform: 'translate(-50%, -50%)',
    opacity: 0.7,
  };

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zindex: -1,
    overflow: 'hidden',
  };

  effetc(()=>{
    Aos.init({duration: 2000})
  }, []);
  

  return (
    <div className='onirix_container'>
      

      <Parallax pages={2}>
        <ParallaxLayer offset={0}>
        <div className='mainpage_Navbar'>
        <nav id="navbar" className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <img src={logo} alt='IIR Logo' width={'190px'}/>
                </div>


                <div>
                    <Link to={'/onirix/bot'} className='Onirix-Btn'>Commencer</Link>
                </div>

                
                
            </div>
        </nav>


            {/* <div className="overlay-menu">
            <ul id="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div> */}
    </div>
        </ParallaxLayer>

        <ParallaxLayer
        offset={0.1}
        className='IntroBanner'
        speed={0.01}
        factor={1}
        >
          <h1 data-aos="fade-up">Testez directement notre AI:Onirix... Raconte lui votre rêves</h1>
          <div>
                    <Link to={'/onirix/bot'} className='Onirix-Btn'>Commencer</Link>
                </div>
          <div style={containerStyle}>
            <video style={videoStyle} autoPlay loop muted>
              <source src={videoSource} type="video/mp4" />
            </video>
          </div>
        </ParallaxLayer>
      </Parallax>
  </div>
  )
}

export default onirixPage