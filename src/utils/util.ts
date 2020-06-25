import { ListingCardSize, ItemData } from './models'
import { gtagEventClick } from './gtag'

export const getHeightBasedOnCardSize = (listingCardSize: ListingCardSize): number => {
  switch (listingCardSize) {
    case ListingCardSize.SMALL:
      return 32
    case ListingCardSize.MEDIUM:
      return 48
    case ListingCardSize.LARGE:
      return 64
    default:
      return 48
  }
}

export const handleItemClick = (e, item: ItemData, handleOpenModal) => {
  if (!!item.description) {
    gtagEventClick('open_item_modal', item.title)
    handleOpenModal(e, item)
  } else if (!!item.actionUrl && window !== undefined) {
    gtagEventClick('click_item_action', item.actionUrl)
    window.open(item.actionUrl, '_blank')
  }
}
