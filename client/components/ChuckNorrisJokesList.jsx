import React, { useEffect, useState } from 'react'
import {getChuckNorris, getChuckNorrisById} from '../apis/chuckNorris'

const ChuckNorrisJokesList = () => {

  const [jokes, setJokes] = useState([])

  const getJokes = () => {
    getChuckNorris()
    .then(gottedJokes => {
      setJokes(gottedJokes)
    })
  }


  useEffect(() => {
    getJokes()
  }, [])

  return(
    <>
      {jokes && (
        <div>
          <h3>
          Here is my joke 
          </h3>
          
          {jokes.value} 
        </div>  
      )}
      <a href='#/categories'>categories</a>
    </>
  )
}

export default ChuckNorrisJokesList