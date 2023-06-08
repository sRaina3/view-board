import { useState, useEffect } from 'react'
import userService from '../../services/UserService'
import {SlideShow} from '../../components'

const Upcoming = () => {
  const [upcomingResults, setUpcomingResults] = useState([])

  useEffect(() => {
    userService.getUpcoming()
      .then(response => {
        setUpcomingResults(response.results.filter(result => 
          result.primaryImage && result.primaryImage.height <= 3000 && 
          result.primaryImage.height >= result.primaryImage.width))
      })
  }, [])

  console.log(upcomingResults)
  return (
    <div>
      {upcomingResults.length > 0 
        ? <SlideShow upcomingResults={upcomingResults}/>
        : <div> </div>
      }
    </div>
  )
}

export default Upcoming