import { useState, useEffect, useRef } from 'react'

import './SlideShow.css'


const SlideShow = ({upcomingResults}) => {
  const [curUpcoming, setCurUpcoming] = useState(0)
  const timeoutRef = useRef(null);
  const delay = 6000

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => {
        if (curUpcoming === upcomingResults.length - 1) {
          setCurUpcoming(0)
        } else {
          setCurUpcoming(curUpcoming + 1)
        }
      },
      delay
    );
  }, [curUpcoming, upcomingResults.length]);

  return (
    <div>
      <div className="upcoming-slideshow">
        <div className="upcoming-slider" style={{ transform: `translate3d(${-curUpcoming * 100}%, 0, 0)` }}>
          {upcomingResults.map((result) => (
            <div className='upcoming-slide' key={result.id}>
              <img className="upcoming-image" src={result.primaryImage.url} alt='upcoming'/>
              <div className="upcoming-title"> 
                {result.originalTitleText.text}
                <div className="release-date">
                  {result.releaseDate.month}/{result.releaseDate.day}/{result.releaseDate.year}
                </div>
                <div className="release-date">
                  {result.titleType.text}
                </div>
              </div>
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