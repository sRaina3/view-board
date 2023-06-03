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
      userService.getTitleInfo(searchEntity)
        .then(response => {
          setSearchResults(response.result)
        })
      /*userService.getServices()
        .then(response => {
          console.log(response)
        })*/
    }
  }

  return (
    <div className="container">
      <div className='title-text'>Find Streaming Availabilities</div>
      <input className="input-field" placeholder={"Enter a title..."} value={searchEntity}
       onChange={updateSearch} onKeyDown={handleEnter}/>

      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result) => 
            <div key={result.imdbId}>
              <ResultDisplay result={result} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/*<div key={result.imdbId} className="search-result">
              <img src={result.backdropURLs.original} alt={result.title} className="result-image" />
              <div className="result-name"> {result.title} ({result.type === 'series' ? result.firstAirYear : result.year}) </div>
            </div>*/
export default App;
