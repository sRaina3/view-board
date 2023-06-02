import './App.css'
import './ResultDisplay.css'

const ResultDisplay = ({result}) => {
  console.log(result)
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
      if (sites.us) {
        return (
          <div>
            No Sites Available
          </div>
        )
      }
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
      <div className="result-name"> {result.title} ({result.type === 'series' ? result.firstAirYear : result.year}) </div>
      <div className="result-availability"> 
        {result.type === 'movie' ? displayStreamingInfo(result.streamingInfo) : "not hi"}
      </div>
    </div>
  )
}

export default ResultDisplay