import React from 'react'
import './DataCard.css'

const DataCard = ({title,data}) => {
  return (
    <div className='data-card'>
        <h4>{title}</h4>
        <h2>{data}</h2>
    </div>
  )
}

export default DataCard