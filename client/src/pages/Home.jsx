import React from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '../components/Home/Hero'
import HeroVideo from '../components/Home/HeroVideo'
import Footer from '../components/Home/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeroVideo/>
      <Footer/>
    </div>
  )
}

export default Home
