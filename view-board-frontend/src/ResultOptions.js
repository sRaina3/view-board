import ResultService from './ResultService'
import "./ResultOptions.css"

const ResultOptions = ({options}) => {
  return (
    <div className='service-row'>
      {options.map((op) => (
        <div key={op.name}>
          <a className="href-tag" href={op.link} target="_blank" rel="noreferrer">
            <div className="service-info">
              <ResultService name={op.name}/>
              <div className="golden-text">{op.name}</div> 
              <div className="golden-text">
                ({op.type.toUpperCase() === "BUY" ? "PURCHARSE" : op.type.toUpperCase()})
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default ResultOptions