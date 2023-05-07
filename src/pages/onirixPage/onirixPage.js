import React, { useEffect as effetc } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

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
      

      <Parallax pages={5}>
        <ParallaxLayer offset={0}>
          <Onirix_navbar/>
        </ParallaxLayer>

        <ParallaxLayer
        offset={0.1}
        className='IntroBanner'
        speed={0.01}
        factor={1}
        >
          <h1 data-aos="fade-up">TEST1</h1>
          <div style={containerStyle}>
            <video style={videoStyle} autoPlay loop muted>
              <source src={videoSource} type="video/mp4" />
            </video>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          className='IntroBanner'
        >

          <h1 data-aos="fade-down">TEST2</h1>
          <div data-aos="zoom-in">Test2</div>
        </ParallaxLayer> 
      </Parallax>
  </div>
  )
}

export default onirixPage