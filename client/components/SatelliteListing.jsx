//Contains dynamic data. Needs to be stored in State.
import React, { useEffect, useState } from 'react'
import { getSatellites } from '../apis/iss'


//This function provides a listing of satellites
const SatelliteListing = () => {

  const[satellites, setSatellites] = useState([])//creates state where dynamic data is stored

  const fetchSatellites = () => {//stores data returned from getsatellites function
    getSatellites()
      .then(fetchedSatellites => {
        setSatellites(fetchedSatellites)
      })
    }

  const fetchSatelliteById = (id) => {
    getSatelliteById()
      .then(fetchedSatellite => {
        console.log(fetchedSatellite)
      })
  }

  useEffect(() => {
    fetchSatellites()
  },[])
      
  return (
    <ul>
      {satellites.map(s => {
        return (
          <li key={s.id} onClick={() => fetchSatellite(s.id)}>{s.name}</li>
        )
      })}
    </ul>
  )
}

export default SatelliteListing
