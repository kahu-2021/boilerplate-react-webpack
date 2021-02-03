import React, { useState, useEffect } from 'react'
import {getActivityType} from '../apis/bored'


const ActivityType = () => {
  const [activities, setActivities] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  // let type = ""

  useEffect(() => {
    fetchActivity()
  },[])

  const fetchActivity = () => {
    getActivityType()
    .then((fetchedActivity) => {
      setActivities(fetchedActivity);
    });
  };

  const bigFunc = (type) => {
    if (!showInfo) {
      setShowInfo(true);
    }
    getActivityType(type)
    .then((fetchedActivity) => {
      setActivities(fetchedActivity);
    });
  };

  const displayActivity = () => {
    let properties = []
    for(const property in activities) {
      if (activities[property] === ""){
        console.log("it works")
        activities[property] = "No Link Available"
        }
      else if(property == 'link') {
        activities[property] = (<a href={activities[property]}>{activities[property]}</a>)
      }
       
      properties.push(<p> {property}: {activities[property]}</p>)
    }
    // console.log(properties[link])
    return properties
  }

  return (
    <div>
      <br></br>
      <button onClick={() => bigFunc('education')}>Get educational activity</button>
      <br></br>
      <button onClick={() => bigFunc('recreational')}>Get recreational activity</button>
      <br></br>
      <button onClick={() => bigFunc('social')}>Get social activity</button>
      <br></br>
      <button onClick={() => bigFunc('diy')}>Get DIY activity</button>
      <br></br>
      <button onClick={() => bigFunc('charity')}>Get charity activity</button>
      <br></br>
      <button onClick={() => bigFunc('cooking')}>Get cooking activity</button>
      <br></br>
      <button onClick={() => bigFunc('relaxation')}>Get relaxation activity</button>
      <br></br>
      <button onClick={() => bigFunc('music')}>Get music activity</button>
      <br></br>
      <button onClick={() => bigFunc('busywork')}>Get busywork activity</button>
      <br></br>
      {showInfo &&  displayActivity()}
    </div>
  )
}

export default ActivityType