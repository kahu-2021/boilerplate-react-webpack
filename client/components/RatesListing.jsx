import React, { useEffect, useState } from 'react'
import { getAllRates } from '../apis/currency'


const RatesListing = () => {
//Place to store retrieved rates
const[rates, setRates] = useState([])

const fetchRates = () => {
    getAllRates()
        .then(fetchedRates => {
            setRates(fetchedRates)
        })
}
//Initiate retrieval upon loading
useEffect(() => {
    fetchRates
},[])

  return (
      <ul>
          {rates.map(r => {
            return (
                <li>{rates.data}</li>
            )
          })}
      </ul>
    )
}

export default RatesListing
