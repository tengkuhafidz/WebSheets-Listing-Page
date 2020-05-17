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
  siteName: string
  siteLogo: string
  sitePrimaryColor: string
  heroType: string
  heroTitle: string
  heroDescription: string
  heroImage
  heroButtonLabel: string
  heroButtonUrl: string
  listingType: string
  listingDescriptionButtonLabel: string
  listingUrlButtonLabel: string
  footerLabel: string
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
  MODERN = 'modern',
}

export enum HeroType {
  MINIMAL = 'minimal',
  MINIMAL_CENTER = 'minimal-center',
}
