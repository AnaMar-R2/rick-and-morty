import React, { useRef } from 'react'
import getRandomNumber from '../utils/getRandomNumber'
import './styles/formSearch.css'

const FormSearch = ({ setIdLocation }) => {


  const idLocationValue = useRef()
  
  const handleSubmit = e => {
    const inputValue = idLocationValue.current.value.trim()
    e.preventDefault() 
      inputValue 
      ?setIdLocation(inputValue)
      :setIdLocation(getRandomNumber(126))
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input 
        className='form__input'
        placeholder='Enter id location' 
        type="text" 
        ref={idLocationValue}
      />
      <button className='form__btn'>Search</button>
    </form>
  )
}

export default FormSearch