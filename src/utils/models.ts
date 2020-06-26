export interface ItemData {
  itemId: string
  title: string
  subtitle: string
  description: string
  image: string
  actionUrl: string
  categories: string[]
}

export interface SiteData {
  siteName: string
  siteLogo: string
  sitePrimaryColor: string
  darkMode: boolean
  heroType: HeroType
  heroTitle: string
  heroDescription: string
  heroButtonLabel: string
  heroButtonUrl: string
  socialShareButton: boolean
  listingCategoryType: ListingCategoryType
  listingCardType: ListingCardType
  listingCardSize: ListingCardSize
  listingDescriptionButtonLabel: string
  listingUrlButtonLabel: string
  footerLabel: string
  facebookUrl: string
  instagramUrl: string
  twitterUrl: string
}

export interface SheetsData {
  siteData: SiteData
  listingData: ItemData[]
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

export enum ListingCategoryType {
  TabsView = 'tabs-view',
  SectionsView = 'sections-view',
}

export enum ListingCardType {
  BASIC = 'basic',
  COMPACT = 'compact',
  MINIMAL = 'minimal',
  PROFILES = 'profiles',
  MODERN = 'modern',
  PILL = 'pill',
  EVENTS = 'events',
}

export enum ListingCardSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum HeroType {
  MINIMAL = 'minimal',
  MINIMAL_CENTER = 'minimal-center',
  SIMPLE = 'simple',
  SIMPLE_CENTER = 'simple-center',
}
