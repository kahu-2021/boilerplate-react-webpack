import React, { useState, useEffect } from 'react'
import { getRandomDadJoke } from '../apis/dadjoke'

const DadJoke = () => {

  const [joke, getJoke] = useState([])

  const fetchJoke = () => {
    getRandomDadJoke()
    .then(joke => {
      getJoke(joke)
    })
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <>
    <h2>Random Horrible Dad Joke!</h2>
    <p>{joke.joke}</p>
    <button onClick={fetchJoke}>Give me another!</button>

    </>
  )
}

export default DadJoke
