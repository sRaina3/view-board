import "./ResultOptions.css"

const ResultOptions = ({options}) => {
  return (
    <div>
      {options.map((op) => (
        <div className="golden-text" key={op.name}>
          {op.name} 
          <div>View Type: {op.type} </div>
          <a href={op.link} target="_blank" rel="noreferrer">Click here to View</a>
        </div>
      ))}
    </div>
  )
}

export default ResultOptions