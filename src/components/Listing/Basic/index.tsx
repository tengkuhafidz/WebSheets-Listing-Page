import React, { useState } from 'react'
import useModal from 'use-react-modal'
import { ItemData, Theme } from '../../../utils/models'
import ItemsList from './items-list'
import ListingModal from '../listing-modal'

interface Props {
  theme: Theme
  items: ItemData[]
}

const Basic: React.FC<Props> = ({ theme, items }) => {
  const [currentModalItem, setCurrentModalItem] = useState(items[0])

  const useModalOptions = {
    background: 'rgba(0, 0, 0, 0.8)',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onOpen: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClose: () => {},
  }

  const { isOpen, openModal, Modal } = useModal(useModalOptions)

  const handleOpenModal = (e, item: ItemData) => {
    setCurrentModalItem(item)
    openModal(e)
  }

  return (
    <div className="container mx-auto mt-16 mb-32 px-4" id="main">
      <ItemsList items={items} handleOpenModal={handleOpenModal} theme={theme} />
      <ListingModal theme={theme} Modal={Modal} currentModalItem={currentModalItem} isOpen={isOpen} />
    </div>
  )
}

export default Basic
