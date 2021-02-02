import React, {useState, useEffect} from 'react'
import {getRandom} from '../apis/bored'





const Random = () => {
  const [activities, setActivities] = useState(null)

  useEffect( () => {
    fetchActivity ()

  } , [])

  const [showInfo, setShowInfo] = useState(false)

  const changeInfo = () => {
    setShowInfo (!showInfo)
  }


const fetchActivity = () => {
  getRandom()
  .then(fetchedActivity => {
    setActivities(fetchedActivity)
  })
}

  return (
    <>
    <h1>React development has begun!</h1>
    <button onClick={fetchActivity, changeInfo}>Get Activity</button>
    {(showInfo && activities.activity)}
    </>
  )
}

export default Random
