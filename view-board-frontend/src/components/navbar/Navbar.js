import { Link } from 'react-router-dom'

import logo from '../../assets/viewboard-logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='vertical-navbar'>
        <Link to='/'> <img src={logo} alt="Logo"/> </Link>
        <Link to='/Upcoming'>Upcoming</Link>
    </nav>
  )
}

export default Navbar