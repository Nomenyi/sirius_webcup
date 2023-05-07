import React, { useEffect as effect} from 'react'
import { Link } from 'react-router-dom'

// AOS import
import Aos from 'aos'
import 'aos/dist/aos.css'

// Assets import
import videoSource from '../../assets/video/pinkmotion.mp4';

// Components import
import NotFound_head from './components/notFound_head';
import NotFound_foot from './components/notFound_foot';


function notFoundPage() {
  const videoStyle = {
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0.4,
  };

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    overflow: 'hidden',
  };

    effect(()=>{
    Aos.init({duration: 2000})
  }, []);
  
  
  return (
    <div className='NotFound_container'>
      
      <div className='NotFound_content'>
        <NotFound_head/>
        <div className='NotFound_MiddleSection'>
          <h1
          data-aos="fade-up"
          data-aos-duration="1000">404</h1>
          <p 
            data-aos="fade-up"
            data-aos-duration="2000">Oops ! Il semblerait que vous vous soyez égaré(e). La page que vous recherchez est introuvable</p>
          <Link
            to={'/'}
            className='back_btn'
            data-aos="fade-up"
            data-aos-duration="1500"
            >retour à l'accueil</Link> 
        </div>
        <NotFound_foot/>
      </div>
      
      
    <div style={containerStyle}>
      <video style={videoStyle} autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
    </div>
  )
}

export default notFoundPage