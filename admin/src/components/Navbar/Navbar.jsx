import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <p className='tag-color'>SnapEats</p>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
