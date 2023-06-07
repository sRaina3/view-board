import { useState, useEffect } from 'react'

import './SlideShow.css'


const SlideShow = ({upcomingResults}) => {
  const [curUpcoming, setCurUpcoming] = useState(0)
  const delay = 5000

  useEffect(() => {
    setTimeout(
      () => {
        if (curUpcoming === 8 - 1) {
          setCurUpcoming(0)
        } else {
          setCurUpcoming(curUpcoming + 1)
        }
      },
      delay
    );
  }, [curUpcoming]);

  console.log(upcomingResults)
  console.log(curUpcoming)
  return (
    <div>
      <div className="upcoming-slideshow">
        <div className="upcoming-slider" style={{ transform: `translate3d(${-curUpcoming * 100}%, 0, 0)` }}>
          {upcomingResults.map((result) => (
            <div className='upcoming-image' key={result.id}>
              <img className="upcoming-image" src={result.primaryImage.url} alt='upcoming'/>
            </div>
          ))}
        </div>

        <div className="slideshow-dots">
          {upcomingResults.map((_, idx) => (
            <div 
              key={idx} 
              className={`slideshow-dot${curUpcoming === idx ? " active" : ""}`}
              onClick={() => setCurUpcoming(idx)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SlideShow