//APIs Used: 
//https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability
//https://rapidapi.com/SAdrian/api/moviesdatabase
import { useState } from 'react'
import './App.css';

import userService from './services/UserService'
import {ResultDisplay} from './containers';
import {StreamLogos} from './components';

const App = () => {
  const [searchEntity, setSearchEntity] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const updateSearch = (e) => {
    setSearchEntity(e.target.value)
    setSearchResults([])
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter' && searchEntity.length > 0) {
      userService.getTitleInfo(searchEntity)
        .then(response => {
          setSearchResults(response.result)
        })
    }
  }

  return (
    <div>
      <div className="container">
        <h1 className='gradient__text'>Find Streaming Availabilities</h1>
        <input className="input-field" placeholder={"Enter a title..."} value={searchEntity}
          onChange={updateSearch} onKeyDown={handleEnter}/>
      </div>
      {searchResults.length > 0 
        ? <div className="search-results">
            {searchResults.map((result) => <div key={result.imdbId}> <ResultDisplay result={result} /> </div>)}
          </div> 
        : <div>
            <div className="initial-info-container">
              <h1 className='initial-info-title'>Millions of movies and TV Shows to Explore</h1>
              <h1 className='stream-stats'>20+ Streaming Platforms Supported</h1>
            </div>
            <StreamLogos showAll={true} />
          </div>
      }
    </div>
  );
}

export default App;
