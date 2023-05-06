import React from 'react'

// Assets import
import videoSource from '../../assets/video/pexels-pachon-in-motion-15196839-2560x1440-30fps.mp4';


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
  };

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  };
  
  return (
    <div className='NotFound_container'>
    <div style={containerStyle}>
      <video style={videoStyle} autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>
      Test
    </div>
    </div>
  )
}

export default notFoundPage