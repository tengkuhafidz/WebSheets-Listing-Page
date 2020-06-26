import React, { useEffect, useState } from 'react'

const BackToTop: React.FC<{}> = () => {
  const [visible, setVisible] = useState(false)

  const listener: EventListener = () => {
    if (window.pageYOffset > 0) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)
    return (): void => {
      window.removeEventListener('scroll', listener)
    }
  })

  const scrollToTop = (): void => {
    window.scrollTo(0, 0)
  }

  return (
    <div
      onClick={scrollToTop}
      className={`transition-opacity fixed bottom-0 right-0 z-50 p-6 duration-500 ${
        visible ? 'opacity-50 hover:opacity-100 cursor-pointer' : 'opacity-0'
      }`}
    >
      <button aria-label="Back to top" className="rounded-lg bg-gray-500 hover:bg-gray-700">
        <i className="fas fa-arrow-up text-3xl text-white p-2"></i>
      </button>
    </div>
  )
}

export default BackToTop
