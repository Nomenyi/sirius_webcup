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
                    Excepteur nostrud incididunt aute fugiat enim deserunt dolor cillum ea. Adipisicing et enim nostrud laborum ex pariatur magna. 
                </p>
                <p className='text'>
                    Excepteur nostrud incididunt aute fugiat enim deserunt dolor cillum ea. 
                </p>
                <Link to={"/onirix"} className={"services-btn"} type={"submit"}>Testez Orinix</Link>
            </div>

            <div className='card-service active'>
                <img src={service1} alt='EMIT logo' className='Illustration_Login' width={'140px'}/>
                <span className='service-title'>Solution 1</span>
                <small className='service-text'>Dolore dolore culpa tempor labore mollit mollit incididunt id ut laboris. Nulla ipsum tempor est officia incididunt deserunt incididunt dolore velit dolore cupidatat fugiat aute.r.</small>
            </div>
            <div className='card-service interactive'>
            <img src={service2} alt='EMIT logo' className='Illustration_Login' width={'140px'}/>
                <span className='service-title'>Solution 2</span>
                <small className='service-text'>Dolore dolore culpa tempor labore mollit mollit incididunt id ut laboris. Nulla ipsum tempor est officia incididunt deserunt incididunt dolore velit dolore cupidatat fugiat aute.r.</small>
            </div>
            <div className='card-service interactive'>
            <img src={service3} alt='EMIT logo' className='Illustration_Login' width={'140px'}/>
                <span className='service-title'>Solution 3</span>
                <small className='service-text'>Dolore dolore culpa tempor labore mollit mollit incididunt id ut laboris. Nulla ipsum tempor est officia incididunt deserunt incididunt dolore velit dolore cupidatat fugiat aute.r.</small>
            </div>
        </div>
    </div>
  )
}

export default service