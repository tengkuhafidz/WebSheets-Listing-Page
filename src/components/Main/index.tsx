import React, { useState } from 'react'
import ItemsList from './items-list'
import { useStaticQuery, graphql } from 'gatsby'
import { SiteData } from '../../models'

interface Props {
  siteData: SiteData
}

const Main: React.FC<Props> = ({ siteData }) => {
  const { allGoogleItemsSheet } = useStaticQuery(graphql`
    query allGoogleItemsSheetQuery {
      allGoogleItemsSheet {
        nodes {
          id
          title
          url
          tags
          itemId
          description
          image
        }
        distinct(field: tags)
      }
    }
  `)

  const ALL = 'All'

  const getAllItems = () => {
    const allItems = allGoogleItemsSheet.nodes
    const formattedItems = allItems.map((item) => {
      if (typeof item.tags === 'string') {
        item.tags = item.tags.split(', ')
      }
      return item
    })
    return formattedItems
  }

  const allItems = getAllItems()

  const getDistinctTags = () => {
    const distinctTags = []
    allItems.forEach((item) => {
      item.tags.forEach((tag) => {
        !distinctTags.includes(tag) && distinctTags.push(tag)
      })
    })
    return distinctTags
  }

  const distinctTags = getDistinctTags()
  const tabs = [ALL, ...distinctTags]
  const [currentTab, setCurrentTab] = useState(tabs[0])

  const filteredItems = currentTab !== ALL ? allItems.filter((item) => item.tags.includes(currentTab)) : allItems

  const handleTabClick = (tab) => {
    setCurrentTab(tab)
  }

  const renderTabs = () => {
    if (distinctTags.length > 0) {
      return tabs.map((tag) => (
        <li className="mr-3" key={tag}>
          <a
            className={`inline-block rounded py-1 px-3 cursor-pointer ${
              tag === currentTab
                ? `bg-${siteData.brandColor}-800 text-gray-100`
                : `bg-gray-100 text-${siteData.brandColor}-800`
            }`}
            onClick={() => handleTabClick(tag)}
          >
            {tag}
          </a>
        </li>
      ))
    }
    return <></>
  }

  return (
    <div className="container mx-auto mt-16 mb-32 px-4" id="main">
      <h2 className="font-bold text-2xl ml-1 text-gray-800">{siteData.listLabel}</h2>
      <ul className="mt-4 flex">{renderTabs()}</ul>
      <ItemsList items={filteredItems} numOfColumns={siteData.numOfColumns} brandColor={siteData.brandColor} />
    </div>
  )
}

export default Main
