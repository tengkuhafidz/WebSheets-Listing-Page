import React from 'react'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import Hero from '../components/hero'

const Home = () => (
  <div className="bg-gray-100 min-h-screen">
    <SEO />
    <Navbar />
    <Hero />
    <p>Hello Woorld</p>
  </div>
)

export default Home
