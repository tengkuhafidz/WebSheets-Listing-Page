import React from 'react'
import { ItemData, Theme, SiteData } from '../../utils/models'

interface Props {
  theme: Theme
  currentModalItem: ItemData
  Modal: (props) => JSX.Element
  isOpen: boolean
  siteData: SiteData
}

const ListingModal: React.FC<Props> = ({ theme, Modal, currentModalItem, isOpen, siteData }) => {
  const { text, subtext, primary, secondary, altBackground } = theme

  if (!isOpen) {
    return <></>
  }

  return (
    <Modal>
      <div
        className={`${altBackground} shadow-xl ${text} min-h-64 p-8 rounded-lg text-center w-screen md:max-w-screen-md`}
      >
        <img src={currentModalItem.image} className="h-32 mx-auto" />
        <h2 className="text-2xl">{currentModalItem.title}</h2>
        <p className={`${subtext}`}>{currentModalItem.subtitle}</p>
        <p className="mb-8 mt-4">{currentModalItem.description}</p>
        <a
          href={currentModalItem.actionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-${primary} hover:bg-${secondary} px-16 mt-16 text-white font-bold py-3 px-4 shadow border-b-4 border-${secondary} hover:border-gray-800 rounded`}
        >
          {siteData.listingUrlButtonLabel}
        </a>
      </div>
    </Modal>
  )
}

export default ListingModal
