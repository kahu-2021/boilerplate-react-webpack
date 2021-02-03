import React, { useEffect, useState } from 'react'
import { getPictureOfTheDay } from '../apis/nasa'
import PastAPOD from './PastAPOD'


const APOD = () => {

  const [pictureOfDay, setPictureOfDay] = useState(null)

  const getPicture = () => {
    getPictureOfTheDay()
    .then(picture => {
      setPictureOfDay(picture)
    })
  }

  useEffect(() => {
    getPicture()
  })

  return (
    <>
      <h2>Astronomy Picture Of The Day!</h2>
      {pictureOfDay && <h3>{pictureOfDay.title}</h3>}
      {pictureOfDay && <img src={pictureOfDay.url} alt={pictureOfDay.title}/>}
      {pictureOfDay && <p><strong>Copyright:</strong> {pictureOfDay.copyright}</p>}
      {pictureOfDay && <p><strong>About:</strong> {pictureOfDay.explanation}</p>}
     
    </>
  )
}

export default APOD
