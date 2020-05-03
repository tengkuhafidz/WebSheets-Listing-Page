import React from 'react'

interface Props {
  item: {
    id: number
    title: string
    description: string
    image: string
    url: string
  }
}

const SingleItem: React.FC<Props> = ({ item }) => (
  <div className="max-w-sm rounded-lg shadow-lg mt-8 hover:shadow-2xl">
    <img className="w-full rounded-t-lg" src={item.image} alt={`Image of ${item.title}`} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{item.title}</div>
      <p className="text-gray-700 text-base">{item.description}</p>
    </div>
  </div>
)

export default SingleItem
