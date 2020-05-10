import React, { useState } from 'react'
import ItemsList from './items-list'
import { useStaticQuery, graphql } from 'gatsby'
import { SiteData, ItemData, Theme } from '../../models'
import Fuse from 'fuse.js'
import useModal from 'use-react-modal'

interface Props {
  siteData: SiteData
  theme: Theme
}

const Main: React.FC<Props> = ({ siteData, theme }) => {
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

  const { primary, secondary, text, subtext, altText, altBackground } = theme

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

  const useModalOptions = {
    background: 'rgba(0, 0, 0, 0.8)',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onOpen: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClose: () => {},
  }

  const { isOpen, openModal, Modal } = useModal(useModalOptions)

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
              tag === currentTab ? `${altBackground} ${text}` : `${text}`
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
          <div
            className={`${altBackground} shadow-xl ${text} min-h-64 p-8 rounded-lg text-center w-screen md:max-w-screen-md`}
          >
            <img src={currentModalItem.image} className="h-32 mx-auto" />
            <h2 className="text-2xl">{currentModalItem.title}</h2>
            <p className={`${subtext}`}>{currentModalItem.subtitle}</p>
            <p className="mb-8 mt-4">
              {currentModalItem.description} wegipyuwer gerhguo; ero;gihr we;0g8hr ogher iogawroeighj awil;gh
              lwkhguoweag wehgljkwehvuilojhwer ogjhweruogh owerhg wrlhg uoh ergoiwhgljkwrh v uloiwehf owehf ou
            </p>
            <a
              href={currentModalItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-${primary} hover:bg-${secondary} mt-16 text-white font-bold py-3 px-4 shadow border-b-4 border-${secondary} hover:border-gray-800 rounded`}
            >
              View Details
            </a>
          </div>
        </Modal>
      )
    }
    return <></>
  }

  return (
    <div className="container mx-auto mt-16 mb-32 px-4" id="main">
      <h2 className={`font-bold text-2xl ml-1 ${text} text-center`}>{siteData.listLabel}</h2>
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
        handleOpenModal={handleOpenModal}
        theme={theme}
      />
      {renderModal()}
    </div>
  )
}

export default Main
