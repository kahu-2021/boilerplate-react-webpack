import React, { useState } from 'react'
import {getPictureOfTheDayOnCertainDay} from '../apis/nasa'

const PastAPOD = () => {

  const [picture, setPicture] = useState(null)

  const handleSubmit = (evt) => {
    evt.preventDefault()
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
      {/* {console.log(picture)} */}
    </form>
      {picture && <img src={picture.url}/>}
    </>
  )
}
export default PastAPOD