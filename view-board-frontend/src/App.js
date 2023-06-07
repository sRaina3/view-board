//APIs Used: 
//https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability
//https://rapidapi.com/SAdrian/api/moviesdatabase
import { useState, useEffect } from 'react'
import './App.css';
import logo from './assets/viewboard-logo.png'

import userService from './services/UserService'
import ResultDisplay from './ResultDisplay';
import { StreamLogos } from './components';

const App = () => {
  const [searchEntity, setSearchEntity] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [upcomingResults, setUpcomingResults] = useState([])
  const [curUpcoming, setCurUpcoming] = useState(0)

  useEffect(() => {
    userService.getUpcoming()
      .then(response => {
        console.log(response.results)
        setUpcomingResults(response.results)
      })
  }, [])

  const updateSearch = (e) => {
    setSearchEntity(e.target.value)
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter' && searchEntity.length > 0) {
      userService.getTitleInfo(searchEntity)
        .then(response => {
          setSearchResults(response.result)
        })
    }
  }

  const handleHomePage = (e) => {
    setSearchResults([])
  }

  const handleNextImage = () => {
    if (curUpcoming < 9) {
      setCurUpcoming(curUpcoming + 1)
    } else {
      setCurUpcoming(0)
    }
  }

  return (
    <div>
      <div className="container">
        <img onClick={handleHomePage} src={logo} alt="Logo" className="logo" />
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
            {upcomingResults.length > 0 ? 
              <div className="image-slider">
                <img className="upcoming-image" src={upcomingResults[curUpcoming].primaryImage.url} alt='upcoming'/>
                <button className="upcoming-button" onClick={handleNextImage}>Next</button>
              </div> :
              <div> </div>
            }
          </div>
      }
    </div>
  );
}

export default App;
