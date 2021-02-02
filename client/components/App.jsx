import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import ChuckNorrisJokesList from './ChuckNorrisJokesList'
import JokesByCategory from './JokeByCatergory'

const App = () => {
  return (
    <>
    <h1>Chuck Norris very good</h1>
    <Router>
      <Route path='/' exact component={ChuckNorrisJokesList}/>
      <Route path='/categories' exact component={JokesByCategory}/>
    </Router>
    </>
  )
}

export default App
