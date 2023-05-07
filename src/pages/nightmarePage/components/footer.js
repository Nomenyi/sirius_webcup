import React from 'react'

// Asset import
import logo from '../../../assets/image/logo/IIR_Logo/IIR_Logo_Minimize_transparent.png';
function footer() {
  return (
    <div className='foot_container'>
        <div className='foot_content'>
            <div className='leftside'>
              <img src={logo} alt="user-icon" width='200px' />
              <p>Nos méthodes innovantes de recherche nous permettent d'analyser en détail 
                les rêves de nos participants et d'extraire des données précieuses sur les événements futurs.
                 Grâce à notre expertise en matière d'interprétation des rêves, nous pouvons vous aider à mieux 
                 comprendre les messages de votre subconscient et à prendre des décisions plus éclairées pour votre
                  avenir.</p>
              <small className='jurid_message'>Tous droit reservés à l'Institut International des rêves</small>
            </div>

            <div className='rightside'>
              
            </div>
        </div>
    </div>
  )
} 

export default footer