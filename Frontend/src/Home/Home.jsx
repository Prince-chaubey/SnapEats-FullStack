import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Hero/Hero'
import Menu from '../Menu/Menu'
import Foodlist from '../Foodlist/Foodlist'
import AppDownload from '../AppDownload/AppDownload'

const Home = () => {
  return (
    <div>
       
        <Hero/>
        <Menu/>
        <AppDownload/>
        
    </div>
  )
}

export default Home