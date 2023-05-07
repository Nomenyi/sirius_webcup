import React from 'react'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

// Pages import
import Mainpage_navbar from './components/mainpage_navbar'

// Asset import
// import 

function mainPage() {
  return (
    <div className='mainPage_container'>
      
      <Parallax pages={5}>
        <Mainpage_navbar/>

        <ParallaxLayer
        offset={0}
        speed={1}
        >
          <h1>TEST1</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <h1>TEST2</h1>
        </ParallaxLayer> 
      </Parallax>

    </div>
  )
}

export default mainPage