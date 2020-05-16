import React from 'react'
import { ItemData, Theme } from '../../../utils/models'

interface Props {
  item: ItemData
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
}

const SingleItem: React.FC<Props> = ({ item, theme, handleOpenModal }) => {
  const hasProperty = (property) => property && property !== 'nil'
  const { altBackground, text, subtext, customShadow } = theme

  const renderImage = () => {
    if (hasProperty(item.image)) {
      return <img className="w-full rounded-t-lg h-64 object-cover" src={item.image} alt={`Image of ${item.title}`} />
    }
    return <></>
  }

  const renderTitle = () => {
    if (hasProperty(item.title)) {
      return <div className={`font-bold text-gray-800 text-xl truncate`}>{item.title}</div>
    }
    return <></>
  }

  const renderSubtitle = () => {
    if (hasProperty(item.subtitle)) {
      return <p className={`text-gray-600 font-light truncate`}>{item.subtitle}</p>
    }
    return <></>
  }

  const renderDescription = () => {
    if (hasProperty(item.subtitle)) {
      return (
        <p className={`text-gray-800 mt-4`}>
          {item.description} feqofh qeohgfqe o;igh eoqighe oqgh eqgh qeuhoeiqyhg oeqhgoqe guqe eqhg kejqhfiuqegc qegbi
          ue{' '}
        </p>
      )
    }
    return <></>
  }

  return (
    <div
      className={`max-w-sm rounded-lg shadow-lg bg-white ${
        hasProperty(item.url) && `hover:${customShadow} cursor-pointer`
      }`}
      onClick={(e) => handleOpenModal(e, item)}
    >
      {renderImage()}
      <div className="px-6 py-6">
        {renderTitle()}
        {renderSubtitle()}
        {renderDescription()}
      </div>
    </div>
  )
}

export default SingleItem
