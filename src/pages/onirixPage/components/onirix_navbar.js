import React from 'react'
import { Link } from 'react-router-dom'

function onirix_navbar() {
  return (
    <div className='onirix_navbar'>
        <div className='onirix_item'>
            <div className='logo'>
                Logo
            </div>

            <div>
                <Link to={'/'}>Contacts</Link>
                <Link to={'/onirix/bot'}>Commencer</Link>
            </div>
        </div>
    </div>
  )
}

export default onirix_navbar