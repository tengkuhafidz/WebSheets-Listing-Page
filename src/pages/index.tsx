import React from 'react'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Main from '../components/Main'
import Footer from '../components/footer'
import { graphql } from 'gatsby'

const Home = ({ data }) => {
  const siteData = data.allGoogleSiteSheet.nodes[0]

  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO />
      <Navbar title={siteData.siteName} brandColor={siteData.brandColor} />
      <Hero siteData={siteData} />
      <Main siteData={siteData} />
      <Footer />
    </div>
  )
}

export default Home

export const siteData = graphql`
  query SiteSheetQuery {
    allGoogleSiteSheet {
      nodes {
        ctaButtonLabel
        heroDescription
        heroTitle
        listLabel
        siteLogo
        siteName
        numOfColumns
        brandColor
      }
    }
  }
`
