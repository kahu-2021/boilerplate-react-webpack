import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import ChuckNorrisJokesList from './ChuckNorrisJokesList'
import JokesByCategory from './JokeByCatergory'
import SingleCategory from './SingleCategory'

const App = () => {
  return (
    <>
    <h1>Chuck Norris very good</h1>
    <Router>
      <Route path='/' exact component={ChuckNorrisJokesList}/>
      <Route path='/categories' exact component={JokesByCategory}/>
      <Route path='/singlecat/:category' exact component={SingleCategory}/>
    </Router>
    </>
  )
}

export default App
