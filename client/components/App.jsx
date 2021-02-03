import React from 'react'
import DadJoke from './DadJoke'
import FindJoke from "./FindJoke"
import APOD from './APOD'
import PastAPOD from './PastAPOD'
import Cat from './Cat'

const App = () => {
  return (
    <>
    <DadJoke/> 
    <br></br>
    <br></br>
    <FindJoke/>
    <br></br>
    {/* <APOD/> */}
    <br></br>
    {/* <PastAPOD/> */}
    <br></br>
    <Cat/>
    </>
  )
}

export default App
