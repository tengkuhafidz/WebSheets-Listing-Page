const { getSheetsData } = require('./sheets')

// constants for your GraphQL Post and Author types
exports.sourceNodes = async ({ actions, createContentDigest, createNodeId }, options) => {
  const { createNode } = actions

  const data = await getSheetsData(options)
  // loop through data and create Gatsby nodes
  data.forEach((datum) =>
    createNode({
      ...datum,
      id: createNodeId(`${options.tabName}-${datum.id}`),
      parent: null,
      children: [],
      internal: {
        type: options.tabName + 'SheetsData',
        content: JSON.stringify(datum),
        contentDigest: createContentDigest(datum),
      },
    }),
  )
  return
}
