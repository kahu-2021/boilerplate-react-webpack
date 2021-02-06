import React, { useEffect, useState } from 'react'
import { getAllRates } from '../apis/currency'


const RatesListing = () => {

const[rates, setRates] = useState([])

const fetchRates = () => {
    getAllRates()
        .then(fetchedRates => {
            setRates(fetchedRates)
        })
}

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
