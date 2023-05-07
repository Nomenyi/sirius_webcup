import React from 'react'

// Asset import
import night from '../../../assets/image/gif/nightmare.gif'
import medicalKit from '../../../assets/image/icon/png/Medical_Kit.png'
import scrolldown from '../../../assets/image/icon/png/blue_geometry.png'

function banner() {
  return (
    <div className='banner_container'>
        <div className='banner_content'>
            <div className='leftside'>
                <h1>
                    Comment surmonter vos cauchemars et devenir votre propre héros ? 
                    {/* <span>docteurs</span> */}
                </h1>
                <small>
                    Les cauchemars sont une expérience terrifiante qui peut causer des troubles du sommeil et de
                     l'anxiété. Mais ne vous inquiétez pas, 
                    il y a des moyens de surmonter vos cauchemars et devenir le héros de votre propre histoire.
                </small>


                <p className='bottom_message'>
                    Les cauchemars peuvent sembler insurmontables, mais avec un peu de pratique, vous pouvez devenir le héros de votre propre histoire et surmonter vos peurs.
                </p>
                
            </div>

            <div className='rightside'>
                {/* <img src={night} alt='EMIT logo' className='Illustration_Login' width='30%' /> */}
            </div>
        </div>
    </div>
  )
}

export default banner