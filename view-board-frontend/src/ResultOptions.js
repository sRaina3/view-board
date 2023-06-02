import "./ResultOptions.css"

const ResultOptions = ({options}) => {
  console.log(options)
  return (
    <div>
      {options.map((op) => (
        <div className="golden-text" key={op.name}>
          Available on: {op.name} 
          <p>View Type: {op.type} </p>
        </div>
      ))}
    </div>
  )
}

export default ResultOptions