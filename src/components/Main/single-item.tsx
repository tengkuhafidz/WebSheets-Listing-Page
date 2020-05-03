import React from 'react'
import { ItemData } from '../../models'

interface Props {
  item: ItemData
}

const SingleItem: React.FC<Props> = ({ item }) => {
  const hasProperty = (property) => property && property !== 'nil'

  const renderImage = () => {
    if (hasProperty(item.image)) {
      return <img className="w-full rounded-t-lg" src={item.image} alt={`Image of ${item.title}`} />
    }
    return <></>
  }

  const renderTitle = () => {
    if (hasProperty(item.title)) {
      return <div className="font-bold text-gray-100 text-xl mb-2">{item.title}</div>
    }
    return <></>
  }

  const renderDescription = () => {
    if (hasProperty(item.description)) {
      return <p className="text-gray-400 font-light text-base">{item.description}</p>
    }
    return <></>
  }
  return (
    <a href={item.url}>
      <div
        className={`max-w-sm rounded-lg shadow-lg mt-8 bg-indigo-800 ${
          hasProperty(item.url) && 'hover:shadow-2xl cursor-pointer'
        }`}
      >
        {renderImage()}
        <div className="px-6 py-4">
          {renderTitle()}
          {renderDescription()}
        </div>
      </div>
    </a>
  )
}

export default SingleItem
