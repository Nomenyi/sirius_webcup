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
                <small>Lorem eu adipisicing velit consectetur magna ullamco cupidatat aute deserunt nostrud ut. Elit anim mollit ipsum sint ad anim ad deserunt veniam Lorem. Esse elit ipsum consectetur voluptate anim adipisicing laboris cillum reprehenderit commodo. Consequat adipisicing duis consequat duis aute consectetur eu Lorem duis.</small>
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