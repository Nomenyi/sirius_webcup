import React, { useEffect as effect, useState} from 'react'
import { Link } from 'react-router-dom'

// AOS import
import Aos from 'aos'
import 'aos/dist/aos.css'

function Nightmare_popup() {
  const styles = {
    closeButton: {
      position: 'absolute',
      top: '5px',
      right: '5px',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: '#fff',
      color: '#000',
      fontSize: '14px',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      opacity: '0.4',
      transition: 'opacity 0.2s ease-in-out',
    },
    closeButtonHover: {
      opacity: '1',
    },
  }

  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="nightmare_popup_container" data-aos="fade-in" data-aos-duration="3000">
          <div className="top">
            <span style={styles.closeButton} onClick={handleClose}>X</span>
          </div>
          <div className="bottom">
            <small>
              Surmontez vos cauchemars, embrassez votre courage. Transformez l'obscurité en croissance personnelle et devenez
              le héros de votre propre histoire.
            </small>
            <Link to={'/nigntmare'} className="nightmare_shorcut">
              En savoir plus...
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Nightmare_popup