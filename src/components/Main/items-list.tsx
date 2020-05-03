import React from 'react'
import SingleItem from './single-item'

const ItemsList = () => {
  const renderItems = () => {
    const items = [
      {
        id: 1,
        title: 'Title 1',
        description: 'Description 1 description 1 description 1 description 1 description 1',
        image: 'https://via.placeholder.com/120x70/434190/F7FAFC?Text=test',
        url: 'https://fidz.dev',
      },
      {
        id: 2,
        title: 'Title 2',
        description: 'Description 2 description 2 description 2 description 2 description 2',
        image: 'https://via.placeholder.com/120x70/434190/F7FAFC?Text=Placeholder',
        url: 'https://fidz.dev',
      },
      {
        id: 3,
        title: 'Title 3',
        description: 'Description 3 description 3 description 3 description 3 description 3',
        image: 'https://via.placeholder.com/120x70/434190/F7FAFC?Text=Placeholder',
        url: 'https://fidz.dev',
      },
      {
        id: 4,
        title: 'Title 4',
        description: 'Description 4 description 4 description 4 description 4 description 4',
        image: 'https://via.placeholder.com/120x70/434190/F7FAFC?Text=Placeholder',
        url: 'https://fidz.dev',
      },
      {
        id: 5,
        title: 'Title 5',
        description: 'Description 5 description 5 description 5 description 5 description 5',
        image: 'https://via.placeholder.com/120x70/434190/F7FAFC?Text=Placeholder',
        url: 'https://fidz.dev',
      },
      {
        id: 6,
        title: 'Title 6',
        description: 'Description 6 description 6 description 6 description 6 description 6',
        image: 'https://via.placeholder.com/120x70/434190/F7FAFC?Text=Placeholder',
        url: 'https://fidz.dev',
      },
    ]
    return items.map((item) => <SingleItem item={item} key={item.id} />)
  }
  return <div className="grid grid-cols-3 gap-4">{renderItems()}</div>
}

export default ItemsList
