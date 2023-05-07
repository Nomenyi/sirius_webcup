import React, { useEffect as effect} from 'react'
import { Link } from 'react-router-dom'

// AOS import
import Aos from 'aos'
import 'aos/dist/aos.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

// Components import
import Mainpage_navbar from './components/mainpage_navbar'
import Nightmare_popup from '../../components/nightmare_popup'


// Asset import
import banne_Illustration from '../../assets/image/gif/Meteor.gif'
import videoSource from '../../assets/video/cosmonote.mp4';


function mainPage() {

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
    opacity: 0.5,
    filter: 'blur(0.5)',
  };

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    overflow: 'hidden',
  };
  
  effect(()=>{
    Aos.init({duration: 2000})
  }, []);

  return (
    <div className='mainPage_container'>
      <Nightmare_popup/>
      <Parallax pages={5}>
        <ParallaxLayer
        offset={0}
        // sticky={{start: 0, end: 20}}
        >
          <Mainpage_navbar/>
        </ParallaxLayer>

        <ParallaxLayer
        offset={0.2}
        speed={1}
        factor={1}
        className='banner_item'
        >
          <div className='banner'>
            <div className='left'>
              <h1 data-aos="fade-up"
                  data-aos-duration="1000">
                "Ne laissez pas vos rêves être des rêves, faites-en une réalité." <span>Walt Disney</span></h1>
              <p
                  data-aos="fade-up"
                  data-aos-duration="2000">Bienvenue à l'Institut International des Rêves ! Nous sommes spécialisés dans l'étude des rêves et nous croyons en leur pouvoir et leur signification. Notre équipe d'experts travaille pour décoder les messages cachés derrière vos rêves.<br/>Nous sommes ravis de présenter notre nouvelle IA,"Orinix", un outil révolutionnaire qui prédit les rêves en utilisant l'intelligence artificielle. Rejoignez-nous pour explorer votre monde onirique et découvrir les trésors qu'il renferme. Avec l'Institut International des Rêves et Orinix, osez rêver et transformer votre vie grâce à la sagesse des rêves.</p>
                  <div className='banner-btn' data-aos="fade-up"
                  data-aos-duration="2000">
                    <Link to={'/onirix/bot'} className='try_onirix_btn'>Essayer maintenant</Link>
                    <Link to={'/onirix/bot'} className='learn_onirix_btn'>En savoir plus</Link>
                    
                  </div>
                  
            </div>

            <div className='right'>
              {/* <img src={banne_Illustration} alt='dream gif' width={'300px'} /> */}
            </div>
          </div>
          
        </ParallaxLayer>

        <ParallaxLayer className='service_item' offset={1}>
        <div className='service_content'>
          <h1>Les rêves sont le moteur de l'imagination, la clé de l'avenir.</h1>
          <small>Ce qu'on vous offres pour comprendre vos rêves</small>

          <div clasName='CardGroup'>
          <div className='card'>
            <h5>lorem ipsum</h5>
            <p>Les rêves sont les fenêtres de notre esprit, des voyages nocturnes à travers des paysages imaginaires et des scénarios inexplorés. Ils transcendent les limites de la réalité et nous transportent dans un royaume où tout devient possible.</p>   
          </div>
          <div className='card'>
            <h5>lorem ipsum</h5>
            <p>Les rêves sont les fenêtres de notre esprit, des voyages nocturnes à travers des paysages imaginaires et des scénarios inexplorés. Ils transcendent les limites de la réalité et nous transportent dans un royaume où tout devient possible.</p>   
          </div>
          </div>

          <div style={containerStyle}>
            <video style={videoStyle} autoPlay loop muted>
              <source src={videoSource} type="video/mp4" />
            </video>
          </div>
          </div>
        </ParallaxLayer> 
      </Parallax>

    </div>
  )
}

export default mainPage