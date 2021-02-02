import React, {useEffect, useState} from 'react'
import {getChuckNorris, getChuckNorrisById, getChuckNorrisByCategory} from '../apis/chuckNorris'

const JokesByCategory = () => {

  const [category, setCategory] = useState([])

  const [chosenCat, setChosenCat] = useState([])

  const getCategory = () => {
    getChuckNorrisByCategory()
    .then(gottedCategory => {
      setCategory(gottedCategory)
    })
  }

  useEffect(() => {
    getCategory()
  }, [])

  return(
    <>
      <h3>Here are the possible catergories</h3>
      <ul>
      {category.map(c => {
        console.log(c)
        return (
          <li key={c}>
            {c}
            </li>
        )
      })}
      </ul>
      <a href='/'>Home</a>
    </>
  )
}


// {for (i = 0; i <category.length; i++)


export default JokesByCategory