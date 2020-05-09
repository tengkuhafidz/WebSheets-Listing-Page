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
  ctaButtonLabel: string
  heroDescription: string
  heroTitle: string
  listLabel: string
  siteLogo: string
  siteName: string
  footerLabel: string
  numOfColumns: number
  brandColor: string
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
