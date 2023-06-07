import { Link } from 'react-router-dom'

import logo from '../../assets/viewboard-logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='vertical-navbar'>
        <Link to='/'> <img src={logo} alt="Logo"/> </Link>
        <Link to='/Upcoming'>
          <div>
            Upcoming
          </div>
        </Link>
        <Link to='/'>Placeholder</Link>
        <Link to='/'>Placeholder</Link>
    </nav>
  )
}

export default Navbar