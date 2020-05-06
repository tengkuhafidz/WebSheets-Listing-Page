import React from 'react'

interface Props {
  footerLabel: string
}

const Footer: React.FC<Props> = ({ footerLabel }) => (
  <div className="py-4 bg-gray-800">
    <p className="text-center text-gray-400">{footerLabel}</p>
    <p className="text-center text-gray-400">Powered by SheetySite</p>
  </div>
)

export default Footer
