exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const listingSheetsDataTypeDefs = `
    type listingSheetsData implements Node {
      title: String!
      subtitle: String
      description: String
      image: String
      actionUrl: String
      categories: String
      hide: String
    }
  `
  const SiteSheetsDataTypeDefs = `
    type siteSheetsData implements Node {
      siteName: String
      siteLogo: String
      sitePrimaryColor: String
      darkMode: String
      heroType: String
      heroTitle: String
      heroDescription: String
      heroButtonLabel: String
      heroButtonUrl: String
      socialShareButton: String
      listingCategoryType: String
      listingCardType: String
      listingCardSize: String
      listingDescriptionButtonLabel: String
      listingUrlButtonLabel: String
      footerLabel: String
      facebookUrl: String
      instagramUrl: String
      twitterUrl: String
    }
  `
  createTypes(listingSheetsDataTypeDefs)
}