import React from 'react'

interface ExternalLinkType {
  link: any
  icon: any
}

const ExternalLinkIcon: React.FC<ExternalLinkType> = ({ link, icon }) => {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon