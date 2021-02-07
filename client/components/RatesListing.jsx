import React, { useEffect, useState } from 'react'
import { getAllRates } from '../apis/currency'


const RatesListing = () => {
//3=store data
const[ratesData, setRatesData] = useState([])
console.log(ratesData)

//2=get data
const fetchRates = () => {
    getAllRates()
        .then(fetchedRates => {
            console.log(fetchedRates)
            console.log("rates are fetched!")
            setRatesData(fetchedRates)   
        })
}
//1=Initiate retrieval upon loading of page
useEffect(() => {
    //console.log("Inside use effect function")
    fetchRates()
    //console.log("After fetch rates function called inside use effects")
},[])



//Json data is an object containing other objects. I want to generate jsx from array of objects. I want to reformat it as an array then map over to get NZD, AUD and USD values.  Object values function.

let ratesArray = Object.values(ratesData)
console.log(ratesArray)

  return (
      <>
      <p>Show cost of 1 Bitcoin in NZD</p>
         <ul>
            {ratesArray.map(r => {
             return (
                 <li>{r.rates['NZD']}</li>
             )
           })}
          </ul>
      </>
    )
}

export default RatesListing

