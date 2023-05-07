import React from 'react'

//assest
import done_icon from '../../../assets/image/icon/svg/done_icon.svg';

function contact() {
  return (
    <div className='contact_container'>
        <div className='contact_content'>
            <div className='leftside'>
                <h1>Donnez votre <span>avis</span></h1>
                <div>
                    CHU, Andraijato, Fianarantsoa
                </div>
                <div>
                    +261 34 85 009 92
                </div>
                <div>
                    chuandrainjato@gmail.com
                </div>
            </div>

            <div className='rightside'>
                <h1>Contactez-nous</h1>
                <form>
                    <div className="input-section">
                        <img src={done_icon} alt="user-icon" width='20px' />
                        <input
                        type="text"
                        name={"email"}
                        placeholder={"Nom, prénom"} />
                    </div>
                    <div className="input-section">
                        <img src={done_icon} alt="user-icon" width='20px' />
                        <input
                        type="phone"
                        name={"email"}
                        placeholder={"Numéro téléphone"} />
                    </div>
                    <div className="input-section">
                        <img src={done_icon} alt="user-icon" width='20px' />
                        <input
                        type="phone"
                        name={"email"}
                        placeholder={"Mail"} />
                    </div>
                    <div className="input-section">
                        <textarea
                        type="phone"
                        name={"email"}
                        placeholder={"Mail"}>Message</textarea>
                    </div>

                    <button className={"contact-btn"} type={"submit"}>Envoyer</button>
                </form>
            </div>
        </div>    
    </div>
  )
}

export default contact