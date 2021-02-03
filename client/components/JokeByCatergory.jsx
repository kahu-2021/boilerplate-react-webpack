import React, {useEffect, useState} from 'react'
import {getChuckNorris, getChuckNorrisById, getChuckNorrisByCategory, getCategoryId, getIndividualCategory} from '../apis/chuckNorris'
import {Link} from 'react-router-dom'

const JokesByCategory = () => {

  const [category, setCategory] = useState([])

  // const [chosenCat, setChosenCat] = useState([])

  const getCategory = () => {
    getChuckNorrisByCategory()
    .then(gottedCategory => {
      setCategory(gottedCategory)
    })
  }

  // const getCategoryById = (c) => {
  //   getCategoryById(c)
  //   .then(gottedCategory => {
  //     setCategory(gottedCategory)
  //   })
  // }

  useEffect(() => {
    getCategory()
  }, [])

  return(
    <>
      <h3>Here are the possible catergories</h3>
      <ul>
      {category.map(c => {
        return (
          <li key={c}>
            <Link to={`/singlecat/${c}`}>
            {c}
            </Link>
          </li>

        )
      })}
      </ul>
      <a href='/'>Home</a>
    </>
  )
}


export default JokesByCategory