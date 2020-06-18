import React from 'react'
import { ItemData, Theme } from '../../../../utils/models'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { gtagEventClick } from '../../../../utils/gtag'

interface Props {
  item: ItemData
  theme: Theme
}

const ProfileItem: React.FC<Props> = ({ item, theme }) => {
  const { customShadow } = theme

  const renderImage = () => {
    if (!!item.image) {
      return (
        <img
          className="w-full rounded-t-lg object-cover"
          style={{ height: 300 }}
          src={item.image}
          alt={`Image of ${item.title}`}
        />
      )
    }
    return <></>
  }

  const renderSubtitle = () => {
    if (!!item.subtitle) {
      return <p className={`text-gray-600 font-light truncate`}>{item.subtitle}</p>
    }
    return <></>
  }

  const renderDescription = () => {
    if (!!item.description) {
      return <p className={`text-gray-800 mt-4`}>{item.description}</p>
    }
    return <></>
  }

  return (
    <OutboundLink
      className={`max-w-sm rounded-lg shadow-lg bg-white mb-8 ${
        !!item.actionUrl && `hover:${customShadow} cursor-pointer`
      }`}
      href={item.actionUrl}
      target="_blank"
      rel="noreferrer"
      onClick={() => gtagEventClick('click_item_action', item.actionUrl)}
    >
      {renderImage()}
      <div className="px-6 py-6">
        <div className={`font-bold text-gray-800 text-xl truncate`}>{item.title}</div>
        {renderSubtitle()}
        {renderDescription()}
      </div>
    </OutboundLink>
  )
}

export default ProfileItem
