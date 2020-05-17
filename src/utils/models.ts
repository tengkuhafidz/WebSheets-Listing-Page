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
  heroType: HeroType
  heroTitle: string
  heroDescription: string
  heroImage
  heroButtonLabel: string
  heroButtonUrl: string
  listingType: ListingType
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
  MODERN_3 = 'modern-3',
  MODERN_4 = 'modern-4',
  MODERN_5 = 'modern-5',
}

export enum HeroType {
  MINIMAL = 'minimal',
  MINIMAL_CENTER = 'minimal-center',
}
