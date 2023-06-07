import { useState, useEffect } from 'react'
import userService from '../../services/UserService'
import {SlideShow} from '../../components'

import './Upcoming.css'

const Upcoming = () => {
  const [upcomingResults, setUpcomingResults] = useState([])

  useEffect(() => {
    userService.getUpcoming()
      .then(response => {
        setUpcomingResults(response.results.filter(result => result.primaryImage))
      })
  }, [])

  return (
    <div>
      {upcomingResults.length > 0 
        ? 
        <SlideShow upcomingResults={upcomingResults}/>
        :
        <div> </div>
      }
    </div>
  )
}

export default Upcoming