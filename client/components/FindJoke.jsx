import React, { useState } from 'react'
import { getJokesFromSearchTerm } from '../apis/dadjoke'

const FindJoke = () => {

  const [jokes, setJokes] = useState({results: []})

  const submitHandler = (evt) => {
    evt.preventDefault()
    getJokesFromSearchTerm(evt.target.searchTerm.value)
    .then(jokes => {
      setJokes(jokes)
    })
  }


  return (
    <>
    <h2>Search For A Dad Joke!</h2>
    <form onSubmit={submitHandler}>
      <label> Search dad jokes for:
        <input type="text" name="searchTerm" placeholder="hipster"></input>
      </label>
      <button>Search!</button>
      <ul>
        {jokes.results.map(joke => {
          return <li key={joke.id}>{joke.joke}</li>
        })}
      </ul>
    </form>
    </>
  )
}

export default FindJoke
