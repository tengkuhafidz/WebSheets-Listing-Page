import React from 'react'
import { ItemData } from '../../models'

interface Props {
  item: ItemData
}

const SingleItem: React.FC<Props> = ({ item }) => {
  const hasProperty = (property) => property && property !== 'nil'

  const renderImage = () => {
    if (hasProperty(item.image)) {
      console.log('item.image', item.image)
      return <img className="w-full rounded-t-lg" src={item.image} alt={`Image of ${item.title}`} />
    }
    return <></>
  }
  return (
    <div className={`max-w-sm rounded-lg shadow-lg mt-8 ${hasProperty(item.url) && 'hover:shadow-2xl cursor-pointer'}`}>
      {renderImage()}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
    </div>
  )
}

export default SingleItem
