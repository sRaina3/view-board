import './App.css'
import './ResultDisplay.css'

import ResultOptions from './ResultOptions'

const ResultDisplay = ({result}) => {
  if (result.title === "Return of the Jedi") {
    console.log(result)
  }
  const displayImage = () => {
    if (result.backdropURLs.original) {
      return (
        <img src={result.backdropURLs.original} alt={result.title} className="result-image" />
      )
    } else {
      return (
        <img src={result.posterURLs.original} alt={result.title} className="result-image" />
      )
    }
  }

  const displayStreamingInfo = (sites) => {
    if (sites) {
      let options = []
      const serviceNames = Object.keys(sites)
      for (let i = 0; i < serviceNames.length; i++) {
        const curService = Object.values(sites)[i]
        const curOption = {
          name: serviceNames[i].toUpperCase(),
          type: curService[0].type,
          link: curService[0].link
        }
        options.push(curOption)
        if (result.title === "Amongus") {
          console.log(curService)
        }

      }
      return (
        <div>
          <ResultOptions options={options}/>
        </div>
      )
    } else {
      return (
        <div>
          No Sites Available
        </div>
      )
    }
  }
  return (
    <div className="search-result">
      {displayImage()}
      <div className="result-name"> {result.title} ({result.type === 'series' ? result.firstAirYear : result.year}) 
        {result.type === 'movie' ? displayStreamingInfo(result.streamingInfo.us) : <div> Currently not Working for Series</div>}
      </div>
    </div>
  )
}

export default ResultDisplay