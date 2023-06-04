//API Used: https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability
import { useState } from 'react'
import './App.css';

import userService from './services/UserService'
import ResultDisplay from './ResultDisplay';

const App = () => {
  const [searchEntity, setSearchEntity] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const updateSearch = (e) => {
    setSearchEntity(e.target.value)
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter' && searchEntity.length > 2) {
      /*userService.getTitleInfo(searchEntity)
        .then(response => {
          setSearchResults(response.result)
        })*/
      userService.getServices()
        .then(response => {
          console.log(response)
        })
    }
  }

  return (
    <div className="container gradient__bg">
        <h1 className='gradient__text'>Find Streaming Availabilities</h1>
        <input className="input-field" placeholder={"Enter a title..."} value={searchEntity}
        onChange={updateSearch} onKeyDown={handleEnter}/>
        {searchResults.length > 0 ? 
          <div className="search-results">
            {searchResults.map((result) => 
              <div key={result.imdbId}> <ResultDisplay result={result} /> </div>
            )}
          </div> 
          : <div>
            <h1 className='initial-info-title'>Millions of movies and TV Shows to Explore</h1>
            <h1 className='stream-stats'>20+ Streaming Platforms Supported</h1>
            <div className="image-row">
              <img src='https://images.justwatch.com/icon/147638351/s100/icon.webp' alt="disney"/>
              <img src='https://images.justwatch.com/icon/207360008/s100/icon.webp' alt="netflix"/>
              <img src='https://images.justwatch.com/icon/52449539/s100/icon.webp' alt="amazon"/>
              <img src='https://images.justwatch.com/icon/190848813/s100/icon.webp' alt="apple tv"/>
              <img src='https://images.justwatch.com/icon/305458112/s100/icon.webp' alt="hbo max"/>
              <img src='https://images.justwatch.com/icon/194173871/s100/icon.webp' alt="peacock"/>
              <img src='https://images.justwatch.com/icon/116305230/s100/icon.webp' alt="hulu"/>
            </div>
          </div>
        }
        
    </div>
  );
}

export default App;
