import React from 'react'
import { Link } from 'react-router-dom'

const LeftNav = ({ open, setOpen }) => {
  return (
    <div className={open ? 'leftnav slide-open' : 'leftnav slide-closed'}>

      <Link to='/' className='link'onClick={setOpen}>
        <li>Home</li>
      </Link>

      <Link to='/gallery' className='link'onClick={setOpen}>
        <li>Gallery</li>
      </Link>

      <Link to='/about' className='link'onClick={setOpen}>
        <li>About</li>
      </Link>

      <Link to='/signin' className='link'onClick={setOpen}>
        <li>Sign In</li>
      </Link>

      <Link to='/register' className='link'onClick={setOpen}>
        <li>Register</li>
      </Link>
    </div>
  )
}

export default LeftNav
