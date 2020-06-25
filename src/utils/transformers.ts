import { HeroType, ListingCardType, SiteData, ListingCardSize } from '../utils/models'

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
    listingCardType,
    listingCardSize,
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
    listingCardType: listingCardType || ListingCardType.BASIC,
    listingCardSize: listingCardSize || ListingCardSize.MEDIUM,
    listingDescriptionButtonLabel: listingDescriptionButtonLabel || 'More Info',
    listingUrlButtonLabel: listingUrlButtonLabel || 'View Details',
    footerLabel,
    facebookUrl,
    instagramUrl,
    twitterUrl,
  }
}

export const transformListingData = (rawListingData) => {
  const activeListingData = rawListingData.filter((listingData) => listingData.hide !== 'TRUE')

  return activeListingData.map((rawItem, index) => {
    const { title, subtitle, description, image, actionUrl, tags } = rawItem

    const getTagsAsArray = () => {
      if (typeof tags === 'string') {
        return tags
          .trim()
          .split(',')
          .map(function (item) {
            return item.trim()
          })
      }
      return null
    }

    return {
      itemId: index + 1,
      title,
      subtitle,
      description,
      image,
      actionUrl,
      tags: getTagsAsArray(),
    }
  })
}
