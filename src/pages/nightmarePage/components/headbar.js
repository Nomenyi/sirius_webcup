import {React, useState as state} from 'react'
import { Link } from 'react-router-dom';

// Asset import
import logoCHU from '../../../assets/image/logo/CHU_Logo.png';
import moon_icon from '../../../assets/image/icon/svg/Moon_Icon.svg'
import sun_icon from '../../../assets/image/icon/svg/Sun_Icon.svg'


function headbar() {

  // States
  const [isThemeDark, setIsThemeDark] = state(false);
  const [Themeicon, setThemeicon] = state();
  const [BtnText, setBtnText] = state(true);

  const switch_mode = () =>{
      if(localStorage.getItem('Siriusmode')==="true"){
          localStorage.setItem('Siriusmode', "false");
          document.body.classList.remove('darktheme');
          setIsThemeDark(false);
          setThemeicon('usericon');
      }else{
          localStorage.setItem('Siriusmode', "true");
          document.body.classList.add('darktheme');
          setIsThemeDark(true);
          setThemeicon('moon_icon');
      }
  }

  return (
    <div className='headbar_content'>
        <div className='top_headbar'>
          <div className='top_headbar_content'>
            <span>chuandrainjato@gmail.com</span>
            <span>CHU, Andrainjato, Fianarantsoa</span>
            <Link to={"#"} className={"soscall"}>appel d'urgence: 234</Link>
          </div>
        </div>
        <div className='bottom_headbar'>
          <div className='bottom_headbar_content'>
           <div className='leftside'>
              <img src={logoCHU} alt="user-icon" width='100px' />
              <nav className='menu_list'>
                <a href='#' className={"menu_btn active"}>Accuiel</a>
                <a href='#service' className={"menu_btn"}>Service</a>
                <a href='#about' className={"menu_btn"}>A propos</a>
                <a href='#contact' className={"menu_btn"}>Contact</a>
              </nav>
            </div>

            <div className='rightside'>
              <Link to={"/authentification/signup"} className={"signUp_Btn"}>S'inscrire</Link>
              <Link to={"/authentification/login"} className={"signIn_Btn"}>Se connecter</Link>
              <img 
              src={localStorage.getItem('Siriusmode')==="true" ? sun_icon : moon_icon}
              alt='EMIT logo'
              className='switchmode_icon svgicon'
              width='35px'
              onClick={() => switch_mode()}
            />
            </div>
          </div>
        </div>
    </div>
  )
}

export default headbar