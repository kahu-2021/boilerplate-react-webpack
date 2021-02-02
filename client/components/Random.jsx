import React, { useState, useEffect } from "react";
import { getRandom } from "../apis/bored";

const Random = () => {
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    fetchActivity();
  }, []);

  const [showInfo, setShowInfo] = useState(false);

  // const changeInfo = () => {
  //   setShowInfo(!showInfo);
  // };

  const fetchActivity = () => {
    getRandom().then((fetchedActivity) => {
      setActivities(fetchedActivity);
    });
  };

  const bigFunc = () => {
    if (!showInfo) {
      setShowInfo(true);
    }
    getRandom().then((fetchedActivity) => {
      setActivities(fetchedActivity);
    });
  };

  const displayActivity = () => {
    let properties = []
    for(const property in activities) {
      // console.log(property)
      properties.push(<p> {property}: {activities[property]}</p>)
    }
    return properties
  }

  return (
    <>
      <h1>Get a random activity</h1>
      <button onClick={bigFunc}>Get Random Activity</button>
      {showInfo &&  displayActivity()}
    </>
  );
};

export default Random;
