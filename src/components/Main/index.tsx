import React, { useState } from 'react'
import ItemsList from './items-list'
import { useStaticQuery, graphql } from 'gatsby'
import { SiteData, ItemData } from '../../models'
import Fuse from 'fuse.js'
import useModal from 'use-react-modal'

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
          subtitle
          description
          image
        }
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
  const [searchTerm, setSearchTerm] = useState('')
  const [currentModalItem, setCurrentModalItem] = useState(allItems[0])

  const { isOpen, openModal, closeModal, Modal } = useModal()

  const getFuseSearchResult = (items: ItemData[], searchTerm: string): object[] => {
    const options = {
      isCaseSensitive: false,
      findAllMatches: false,
      includeMatches: false,
      includeScore: false,
      useExtendedSearch: false,
      minMatchCharLength: 1,
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      keys: ['title', 'subtitle', 'description'],
    }

    const fuse: Fuse<any, Fuse.IFuseOptions<any>> = new Fuse(items, options)
    const fuseSearchResult = fuse.search(searchTerm)
    return fuseSearchResult.map((result) => result.item)
  }

  const getItemsToDisplay = () => {
    const itemsInTab = currentTab !== ALL ? allItems.filter((item) => item.tags.includes(currentTab)) : allItems
    const searchResult = searchTerm ? getFuseSearchResult(itemsInTab, searchTerm) : itemsInTab
    return searchResult
  }

  const itemsToDisplay = getItemsToDisplay()

  const handleOpenModal = (e, item: ItemData) => {
    setCurrentModalItem(item)
    openModal(e)
  }

  const handleTabClick = (tab) => {
    setCurrentTab(tab)
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
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

  const renderModal = () => {
    if (isOpen) {
      return (
        <Modal>
          <div className="bg-gray-800 text-gray-100 h-64 w-64 p-8">
            <button onClick={closeModal}>close</button>
            {currentModalItem.title}
          </div>
        </Modal>
      )
    }
    return <></>
  }

  return (
    <div className="container mx-auto mt-16 mb-32 px-4" id="main">
      <h2 className="font-bold text-2xl ml-1 text-gray-800 text-center">{siteData.listLabel}</h2>
      <ul className="mt-4 flex justify-center">{renderTabs()}</ul>
      <input
        className={`focus:outline-none focus:shadow-lg border border-gray-300 shadow rounded-lg py-2 px-4 block mt-8 w-1/2 mx-auto`}
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearch(e)}
      />
      <ItemsList
        items={itemsToDisplay}
        numOfColumns={siteData.numOfColumns}
        brandColor={siteData.brandColor}
        handleOpenModal={handleOpenModal}
      />
      {renderModal()}
    </div>
  )
}

export default Main
