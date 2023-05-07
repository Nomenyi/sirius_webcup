import React from 'react'
import { Link } from 'react-router-dom'

// Assets import
import videoSource from '../../assets/video/pexels-pachon-in-motion-15196839-2560x1440-30fps.mp4';

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
  
  return (
    <div className='NotFound_container'>
      
      <div className='NotFound_content'>
        <NotFound_head/>
        <div className='NotFound_MiddleSection'>
          <h1>404</h1>
          <p>Oops ! Il semblerait que vous vous soyez égaré(e). La page que vous recherchez est introuvable</p>
          <Link to={'/'} className='back_btn'>retour à l'accueil</Link> 
        </div>
        <NotFound_foot/>
      </div>
      
      
    <div style={containerStyle}>
      <video style={videoStyle} autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className='NotFound_content'>
        
      </div>
    </div>
    </div>
  )
}

export default notFoundPage