import React, { useState } from 'react'
import getPictureOfTheDayOnCertainDay from '../apis/nasa'

const PastAPOD = () => {

  const [picture, setPicture] = useState(null)

  const handleSubmit = (evt) => {
    getPictureOfTheDayOnCertainDay(evt.target.date.value)
    .then(stuff => {
      setPicture(stuff)
    })
  }

  return (
    <>
    <h2>Past Astronomy Picture Of The Day!</h2>
    <form onSubmit={handleSubmit}>
      <label>Date: 
        <input type="text" placeholder="2021-02-01" name="date"></input>
      </label>
      <button>Go!</button>
      {picture && <img url={picture.url}/>}
    </form>
    </>
  )
}
export default PastAPOD