import { useState } from 'react'
import './App.css';

import userService from './services/UserService'

const App = () => {
  const [searchEntity, setSearchEntity] = useState("")

  const updateSearch = (e) => {
    setSearchEntity(e.target.value)
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter' && searchEntity.length > 2) {
      console.log(searchEntity)
      userService.getTitleInfo(searchEntity)
        .then(response => {
          console.log(response)
        })
    }
  }

  return (
    <div className="container">
      <input className="input-field" placeholder={"Enter a title..."} value={searchEntity}
       onChange={updateSearch} onKeyDown={handleEnter}/>
    </div>
  );
}

export default App;
