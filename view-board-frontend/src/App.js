import { useState } from 'react'
import './App.css';

const App = () => {
  const [searchEntity, setSearchEntity] = useState("")

  const updateSearch = (e) => {
    setSearchEntity(e.target.value)
  }

  return (
    <div className="container">
      <input className="input-field" placeHolder={"Enter a title..."} value={searchEntity} onChange={updateSearch}/>
    </div>
  );
}

export default App;
