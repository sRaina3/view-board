import { useState, useEffect } from 'react'
import userService from '../../services/UserService'

import './Upcoming.css'

const Upcoming = () => {
  const [upcomingResults, setUpcomingResults] = useState([])
  const [curUpcoming, setCurUpcoming] = useState(0)

  useEffect(() => {
    userService.getUpcoming()
      .then(response => {
        console.log(response.results)
        setUpcomingResults(response.results)
      })
  }, [])

  const handleNextImage = () => {
    if (curUpcoming < 9) {
      setCurUpcoming(curUpcoming + 1)
    } else {
      setCurUpcoming(0)
    }
  }

  return (
    <div>
      {upcomingResults.length > 0 ? 
        <div className="image-slider">
          <img className="upcoming-image" src={upcomingResults[curUpcoming].primaryImage.url} alt='upcoming'/>
          <button className="upcoming-button" onClick={handleNextImage}>Next</button>
        </div> :
        <div> </div>
      }
    </div>
  )
}

export default Upcoming