import React from 'react'
import './styles//hasError.css'

const HasError = () => {



  return (

    <div className='error'>
      <div className='error__h2-container'>
        <h2 className='error__h2'>❌ Hey! you must provide <br /> an id from 1 to 126 😢</h2>
      </div>
    </div>
  )
}

export default HasError