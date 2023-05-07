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
                    Affrontez vos peurs dans vos cauchemars. <span>docteurs</span>
                </h1>
                <small>
                    Eiusmod cillum ut anim in reprehenderit esse ex aliquip sit officia. Esse deserunt nisi quis qui amet irure culpa aute. Consequat labore Lorem aliquip deserunt ut. Reprehenderit tempor ad aute anim minim laboris irure qui commodo pariatur.
                </small>


                <p className='bottom_message'>
                    Eiusmod cillum ut anim in reprehenderit esse ex aliquip sit officia. Esse deserunt nisi quis qui amet irure culpa aute.
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