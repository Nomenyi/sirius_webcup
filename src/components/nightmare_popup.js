import React, { useEffect as effect} from 'react'
import { Link } from 'react-router-dom'

// AOS import
import Aos from 'aos'
import 'aos/dist/aos.css'

function nightmare_popup() {
  return (
    <div className='nightmare_popup_container' data-aos="fade-in"
    data-aos-duration="3000">
        <div className='top'>

        </div>
        <div className='bottom'>
        <small>Surmontez vos cauchemars, embrassez votre courage. Transformez l'obscurité en croissance personnelle et devenez le héros de votre propre histoire.</small>
        <Link to={'/onirix/bot'} className='nightmare_shorcut'>En savoir plus...</Link>
        </div>
    </div>
  )
}

export default nightmare_popup