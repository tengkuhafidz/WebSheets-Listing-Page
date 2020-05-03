import React from 'react'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Main from '../components/Main'
import Footer from '../components/footer'

const Home = () => (
  <div className="bg-gray-100 min-h-screen">
    <SEO />
    <Navbar />
    <Hero />
    <Main />
    <Footer />
  </div>
)

export default Home
