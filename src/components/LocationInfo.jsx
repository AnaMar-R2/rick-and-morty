import React from 'react'
import './styles/locationInfo.css'

const LocationInfo = ({ location }) => {

  return (
    <article className='location'>
      <h2 className='location__name'>{location?.name}</h2>
      <ul className='location__items'>
        <li className='location__item'>
          <span className='location__label'>Type:</span>
          <span className='location__info'>{location?.type}</span>
        </li>
        <li className='location__item'>
          <span className='location__label'>Dimension:</span>
          <span className='location__info'>{location?.dimension}</span>
        </li>
        <li className='location__item'>
          <span className='location__label'>Population:</span>
          <span className='location__info'>{location?.residents.length}</span>
        </li>
      </ul>
    </article>
  )
}

export default LocationInfo