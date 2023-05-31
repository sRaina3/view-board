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
            <div key={result.imdbId}>{result.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
