import { SiteData, ListingType, HeroType } from './models'

export const transformSiteData = (rawSiteData): SiteData => {
  const {
    siteName,
    siteLogo,
    sitePrimaryColor,
    darkMode,
    heroType,
    heroTitle,
    heroDescription,
    heroButtonLabel,
    heroButtonUrl,
    socialShareButton,
    listingType,
    listingDescriptionButtonLabel,
    listingUrlButtonLabel,
    footerLabel,
    facebookUrl,
    instagramUrl,
    twitterUrl,
  } = rawSiteData

  return {
    siteName: siteName || 'SheetySite',
    siteLogo,
    sitePrimaryColor: sitePrimaryColor || 'teal',
    darkMode: darkMode === 'true',
    heroType: heroType || HeroType.SIMPLE,
    heroTitle: heroTitle || 'My List',
    heroDescription: heroDescription || 'Check out this curated list',
    heroButtonLabel: heroButtonLabel || 'Contact Me',
    heroButtonUrl,
    socialShareButton: socialShareButton !== null ? socialShareButton === 'show' : true,
    listingType: listingType || ListingType.BASIC_3,
    listingDescriptionButtonLabel: listingDescriptionButtonLabel || 'More Info',
    listingUrlButtonLabel: listingUrlButtonLabel || 'View Details',
    footerLabel,
    facebookUrl,
    instagramUrl,
    twitterUrl,
  }
}

export const transformListingData = (rawListingData) => {
  return rawListingData.map((rawItem, index) => {
    const { title, subtitle, description, image, actionUrl, tags } = rawItem

    return {
      itemId: index + 1,
      title,
      subtitle,
      description,
      image,
      actionUrl,
      tags: typeof tags === 'string' && tags.split(', '),
    }
  })
}
