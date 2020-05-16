export interface ItemData {
  id: string
  title: string
  url: string
  tags: string
  itemId: string
  subtitle: string
  description: string
  image: string
}

export interface SiteData {
  heroButtonLabel: string
  heroButtonUrl: string
  heroDescription: string
  heroTitle: string
  listingType: string
  listingDescriptionButtonLabel: string
  listingUrlButtonLabel: string
  siteLogo: string
  siteName: string
  footerLabel: string
  sitePrimaryColor: string
  facebookUrl: string
  instagramUrl: string
  twitterUrl: string
}

export interface Theme {
  primary: string
  secondary: string
  text: string
  subtext: string
  altText: string
  altSubtext: string
  background: string
  altBackground: string
  customShadow: string
}

export enum ListingType {
  COMPACT = 'compact',
  BASIC = 'basic',
  EVENTS = 'events',
  PROFILES = 'profiles',
  ACCORDION = 'accordion',
  MODERN = 'modern',
}
