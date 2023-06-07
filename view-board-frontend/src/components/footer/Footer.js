import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-text'>My GitHub: &nbsp;
      <span className="shake-animation">
        <a className="gradient__text-small" href='https://github.com/sRaina3' target="_blank" rel="noreferrer">
          Saransh Raina
        </a>
      </span>
      </div>
    </div>
  )
}

export default Footer