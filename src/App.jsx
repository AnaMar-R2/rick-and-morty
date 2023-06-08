import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch'
import HasError from './components/HasError'

function App() {

  const randomId = getRandomNumber(126)

  const [idLocation, setIdLocation] = useState(randomId)

  const url = `https://rickandmortyapi.com/api/location/${idLocation}`

  const [ location, getApiLocation, hasError] = useFetch(url)

  useEffect(() => {
    getApiLocation()
  }, [url])

  return (
    <div className='app'>
      <div className='app__title-container'>
        <img src="../rick-and-morty.png" alt="" />
      </div>

      <FormSearch 
        setIdLocation={setIdLocation}
      />
      {
        hasError 
          ? <HasError/>
          : (
              <>
                <LocationInfo
                  location={location}
                />
                <div className='resident-container'>
                  {
                    location?.residents.map(url => (
                      <ResidentCard
                        url={url}
                        key={url}
                      />
                    ))
                  }
                </div>
              </>
          )
      }
    </div>
  )
}

export default App
