import React from 'react'

// Asset import
import logo from '../../../assets/image/logo/IIR_Logo/IIR_Logo_Minimize_transparent.png';
function footer() {
  return (
    <div className='foot_container'>
        <div className='foot_content'>
            <div className='leftside'>
              <img src={logo} alt="user-icon" width='200px' />
              <p>Officia magna excepteur duis culpa ea laboris est officia duis elit. Enim aliqua exercitation in ex non adipisicing dolor anim ea duis. Proident aute proident magna incididunt consectetur. Aute id nostrud qui irure. Ipsum ipsum ex ad officia exercitation veniam Lorem aliquip.</p>
              <small className='jurid_message'>Tous droit reservés à l'Institut International des rêves</small>
            </div>

            <div className='rightside'>
              
            </div>
        </div>
    </div>
  )
} 

export default footer