import React from 'react'
import { gtagEventClick } from '../../../../utils/gtag'
import { ItemData, Theme } from '../../../../utils/models'

interface Props {
  item: ItemData
  theme: Theme
}

const ProfilesItem: React.FC<Props> = ({ item, theme }) => {
  const { customShadow, altBackground, text, subtext } = theme

  const renderImage = () => {
    if (!!item.image) {
      return (
        <img
          className={`w-full md:h-full bg-gray-900 rounded-t-lg md:rounded-t-none md:rounded-l-lg object-cover col-span-2`}
          src={item.image}
          alt={`Image of ${item.title}`}
        />
      )
    }
    return <></>
  }

  const renderSubtitle = () => {
    if (!!item.subtitle) {
      return <p className={`${subtext} font-light`}>{item.subtitle}</p>
    }
  }

  const renderDescription = () => {
    if (!!item.description) {
      return <p className={`${text} font-light my-4`}>{item.description}</p>
    }
    return <></>
  }

  const handleActionClick = (item) => {
    if (!!item.actionUrl && window !== undefined) {
      gtagEventClick('click_item_action', item.actionUrl)
      window.open(item.actionUrl, '_blank')
    }
  }

  const contentColSpan = !!item.image ? `md:col-span-3` : `md:col-span-5`

  return (
    <div
      className={`rounded-lg shadow-lg ${altBackground} grid md:grid-cols-5 h-full ${
        !!item.actionUrl && `hover:${customShadow} cursor-pointer`
      }`}
      onClick={() => handleActionClick(item)}
    >
      {renderImage()}
      <div className={`p-6 ${contentColSpan}`}>
        <div className={`font-bold ${text} text-xl`}>{item.title}</div>
        {renderSubtitle()}
        {renderDescription()}
      </div>
    </div>
  )
}

export default ProfilesItem
