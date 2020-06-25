import React from 'react'
import { ItemData, Theme, SiteData } from '../../../utils/models'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { gtagEventClick } from '../../../utils/gtag'

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

  const renderActionButton = () => {
    if (!!currentModalItem.actionUrl) {
      return (
        <OutboundLink
          href={currentModalItem.actionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-${primary} hover:bg-${secondary} px-16 mt-16 mb-48 text-white font-bold py-3 px-4 shadow border-b-4 border-${secondary} hover:border-gray-800 rounded`}
          onClick={() => gtagEventClick('click_item_action', currentModalItem.actionUrl)}
        >
          {siteData.listingUrlButtonLabel}
        </OutboundLink>
      )
    }
    return <></>
  }

  const renderImage = () => {
    if (!!currentModalItem.image) {
      return <img src={currentModalItem.image} className="h-64 mx-auto rounded-lg" />
    }
    return <></>
  }

  return (
    <Modal>
      <div
        className={`${altBackground} shadow-xl ${text} min-h-64 b-8 p-8 rounded-lg text-center w-screen md:max-w-screen-md`}
      >
        {renderImage()}
        <h2 className="text-2xl mt-2">{currentModalItem.title}</h2>
        <p className={`${subtext} -mt-1`}>{currentModalItem.subtitle}</p>
        <p className="mb-8 mt-4">{currentModalItem.description}</p>
        {renderActionButton()}
      </div>
    </Modal>
  )
}

export default ListingModal
