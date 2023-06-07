import './ResultDisplay.css'

import ResultOptions from './ResultOptions'

const ResultDisplay = ({result}) => {
  console.log(result)
  const displayImage = () => {
    if (result.posterURLs.original) {
      return (
        <img src={result.posterURLs.original} alt={result.title} className="result-image" />
      )
    } else {
      return (
        <div className="no-image">No image available</div>
      )
    }
  }

  const displayStreamingInfo = (sites) => {
    console.log(result.title)
    console.log(sites)
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
      }
      return (
        <div>
          <ResultOptions options={options}/>
        </div>
      )
    } else {
      return (
        <div className='error-message'>
          Not Currently Available for Streaming
        </div>
      )
    }
  }
  return (
    <div className="search-result">
      {displayImage()}
      <div className="result-name">
        {result.title} ({result.type === 'series' ? result.firstAirYear : result.year})
        {Object.keys(result.streamingInfo).length === 1 || result.type === 'movie' ? 
          displayStreamingInfo(result.streamingInfo.us) : 
          displayStreamingInfo(result.seasons[0].streamingInfo.us)}
        <div className="result-overview">
          {result.overview.substring(0, 440)}{result.overview.length > 440 ? "..." : ""}
        </div>
        <a className="imdb-tag" href={`https://www.imdb.com/title/${result.imdbId}/`} target="_blank" rel="noreferrer">
          <div className="imdb-box">IMDb</div>
          <span className="imdb-text"> {result.imdbRating/10}</span>
        </a>
      </div>
    </div>
  )
}

export default ResultDisplay