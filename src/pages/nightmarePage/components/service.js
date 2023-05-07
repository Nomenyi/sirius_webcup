import React from 'react'
import { Link } from 'react-router-dom'

// Asset import
import service1 from '../../../assets/image/icon/png/service1.png'
import service2 from '../../../assets/image/icon/png/service2.png'
import service3 from '../../../assets/image/icon/png/service3.png'

function service() {
  return (
    <div className='service_container' id='service'>
        <div className='service_content'>
            <div className='card-service'>
                <h2>La solution que nous offrons</h2>
                <p className='text'>
                    Découvrez l'art de déchiffrer les messages cachés de vos rêves avec nos experts en décodage de rêves.
                </p>
                <p className='text'>
                    Prenez soin de votre bien-être mental et physique en pratiquant régulièrement des activités de relaxation, comme la méditation ou le yoga.
                </p>
                <Link to={"/onirix"} className={"services-btn"} type={"submit"}>Testez Orinix</Link>
            </div>

            <div className='card-service active'>
                <img src={service1} alt='EMIT logo' className='Illustration_Login' width={'140px'}/>
                <span className='service-title'>Analyse</span>
                <small className='service-text'>Tout d'abord, prenez le temps d'analyser vos cauchemars. Quelles sont les situations qui vous font peur ? Essayez de trouver des motifs récurrents et notez-les.</small>
            </div>
            <div className='card-service interactive'>
            <img src={service2} alt='EMIT logo' className='Illustration_Login' width={'140px'}/>
                <span className='service-title'>Ayez confiance</span>
                <small className='service-text'>Faites face à vos peurs dans la vie réelle en pratiquant des activités qui vous mettent hors de votre zone de confort. Plus vous serez confiant dans la vie réelle, moins vos cauchemars auront d'emprise sur vous.</small>
            </div>
            <div className='card-service interactive'>
            <img src={service3} alt='EMIT logo' className='Illustration_Login' width={'140px'}/>
                <span className='service-title'>Voir nos experts</span>
                <small className='service-text'>Visitez notre institut pour explorer les profondeurs de votre subconscient et trouver des réponses cachées. Laissez-nous vous guider vers une meilleure compréhension de vous-même.</small>
            </div>
        </div>
    </div>
  )
}

export default service