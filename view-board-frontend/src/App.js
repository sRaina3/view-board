//API Used: https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability
import { useState } from 'react'
import './App.css';

import userService from './services/UserService'

const App = () => {
  const [searchEntity, setSearchEntity] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const updateSearch = (e) => {
    setSearchEntity(e.target.value)
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter' && searchEntity.length > 2) {
      console.log(searchEntity)
      userService.getTitleInfo(searchEntity)
        .then(response => {
          console.log(response.result)
          console.log(response.result[0].backdropURLs.original)
          setSearchResults(response.result)
        })
    }
  }

  return (
    <div className="container">
      <input className="input-field" placeholder={"Enter a title..."} value={searchEntity}
       onChange={updateSearch} onKeyDown={handleEnter}/>

      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result) => (
            <div key={result.imdbId} className="search-result">
              <img src={result.backdropURLs.original} alt={result.title} className="result-image" />
              <div className="result-name"> {result.title} </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
