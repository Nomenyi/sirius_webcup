import React from 'react'
import { Link } from 'react-router-dom'

// Asset import
import illustrationgif from '../../../assets/image/gif/Sleep.gif'

function callToAction1() {
  return (
    <div className='about_container' id='about'>
        <div className='about_content'>
            <div className='leftside'>
                <h1>La meilleure solution pour avoir une bonne sommeil</h1>
                <small>Fatigué de passer des nuits blanches? Laissez-nous vous aider à retrouver un sommeil réparateur. Notre équipe d'experts en sommeil vous guidera à travers une variété de techniques éprouvées pour vous aider à vous endormir rapidement et à rester endormi toute la nuit. Réservez dès maintenant votre consultation pour retrouver un sommeil paisible.</small>
                {/* <Link to={"/authentification"} className={"about-btn"} type={"submit"}>Se connecter à mon compte</Link> */}
            </div>

            <div className='rightside'>
                <img src={illustrationgif} alt='EMIT logo' className='Illustrationgif' width={'100%'}/>
            </div>
        </div>
    </div>
  )
}

export default callToAction1