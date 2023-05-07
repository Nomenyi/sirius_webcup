import React from 'react'
import { Link } from 'react-router-dom'

function notFound_head() {
  return (
    <div className='NotFound_Header'>
        <p>Logo</p>
        <Link to={'/'} className='Orinix_btn'>Testez Orinix</Link>
    </div>
  )
}

export default notFound_head