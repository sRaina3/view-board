import "./ResultOptions.css"

const ResultOptions = ({options}) => {
  console.log(options)
  return (
    <div>
      {options.map((op) => (
        <div className="golden-text" key={op.name}>
          {op.name} 
          <div>View Type: {op.type} </div>
          <a href={op.link}>Click here to View</a>
        </div>
      ))}
    </div>
  )
}

export default ResultOptions