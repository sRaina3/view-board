//APIs Used: 
//https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability
//https://rapidapi.com/SAdrian/api/moviesdatabase
import { useState } from 'react'
import './App.css';

import userService from './services/UserService'
import ResultDisplay from './ResultDisplay';
import ResultService from './ResultService';

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
      userService.getUpcoming()
        .then(response => {
          console.log(response)
        })
    }
  }

  const handleHomePage = (e) => {
    setSearchResults([])
  }

  return (
    <div>
      <div className="container">
        <img onClick={handleHomePage} src="/viewboard-logo.png" alt="Logo" className="logo" />
        <h1 className='gradient__text'>Find Streaming Availabilities</h1>
        <input className="input-field" placeholder={"Enter a title..."} value={searchEntity}
          onChange={updateSearch} onKeyDown={handleEnter}/>
      </div>
      {searchResults.length > 0 ? 
        <div className="search-results">
          {searchResults.map((result) => 
            <div key={result.imdbId}> <ResultDisplay result={result} /> </div>
          )}
        </div> 
        : <div>
          <div className="initial-info-container">
            <h1 className='initial-info-title'>Millions of movies and TV Shows to Explore</h1>
            <h1 className='stream-stats'>20+ Streaming Platforms Supported</h1>
          </div>
          <div className="image-column-one">
              <ResultService name='ALL4'/>
              <ResultService name='APPLE'/>
              <ResultService name='BRITBOX'/>
              <ResultService name='CRAVE'/>
              <ResultService name='CURIOSITY'/>
              <ResultService name='DISNEY'/>
              <ResultService name='HBO'/>
              <ResultService name='HOTSTAR'/>
              <ResultService name='HULU'/>
              <ResultService name='IPLAYER'/>
              <ResultService name='MUBI'/>
              <ResultService name='NETFLIX'/>
              <ResultService name='NOW'/>
              <ResultService name='PARAMOUNT'/>
              <ResultService name='PEACOCK'/>
              <ResultService name='PRIME'/>
              <ResultService name='SHOWTIME'/>
              <ResultService name='ZEE5'/>
          </div>
        </div>
      }
      <div className='footer'>
        <div className='footer-text'>My GitHub: &nbsp;
        <span className="shake-animation">
          <a className="gradient__text-small" href='https://github.com/sRaina3' target="_blank" rel="noreferrer">
            Saransh Raina
          </a>
        </span>
        </div>
      </div>
    </div>
  );
}

export default App;
