import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

enum TwitterCard {
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image',
}

interface Props {
  title?: string
  description?: string
  image?: string
  twitterCard?: TwitterCard
}

const SEO: React.FC<Props> = ({ title, description, image, twitterCard }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            author
            defaultImage: image
            url
            twitterUsername
          }
        }
      }
    `,
  )

  const { defaultTitle, titleTemplate, defaultDescription, defaultImage, url, twitterUsername } = site.siteMetadata

  const metaTitle = title || defaultTitle
  const metaDescription = description || defaultDescription
  const metaImage = image || defaultImage
  const metaTwitterCard = twitterCard || TwitterCard.SummaryLargeImage

  return (
    <div>
      <Helmet title={metaTitle} titleTemplate={titleTemplate} defer={false}>
        <meta name="description" content={metaDescription} />
        <meta name="image" content={metaImage} />
        <meta name="og:title" content={metaTitle} />
        <meta name="og:description" content={metaDescription} />
        <meta name="og:image" content={metaImage} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content={metaTwitterCard} />
        <meta name="twitter:creator" content={twitterUsername} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
      </Helmet>
    </div>
  )
}

export default SEO
