import './App.css'
import './ResultDisplay.css'

const ResultDisplay = ({result}) => {
  console.log(result)
  return (
    <div className="search-result">
      <img src={result.backdropURLs.original} alt={result.title} className="result-image" />
      <div className="result-name"> {result.title} ({result.type === 'series' ? result.firstAirYear : result.year}) </div>
    </div>
  )
}

export default ResultDisplay