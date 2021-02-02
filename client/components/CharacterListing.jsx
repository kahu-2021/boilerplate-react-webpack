import React, { useEffect, useState } from 'react'
import { getCharacterById, getCharacters } from '../apis/futurama'

const CharacterListing = () => {
  const [characters, setCharacters] = useState([])
  const [randomCharacter, setRandomCharacter] = useState({})
  const [randomCharacterTwo, setRandomCharacterTwo] = useState({})
  const [score, setScore] = useState(0)

  const fetchCharacters = () => {
    getCharacters()
      .then(fetchedCharacters => {
        console.log(fetchedCharacters)
        const randomNumber = () => Math.floor(Math.random() * Math.floor(fetchedCharacters.length))
        let ranNum = randomNumber()
        let ranNum2 = randomNumber()

        while (ranNum === ranNum2) {
          ranNum2 = randomNumber()
        }

        setRandomCharacter(fetchedCharacters[ranNum])
        setRandomCharacterTwo(fetchedCharacters[ranNum2])
      })
  }

  const fetchCharacterById = (id) => {
    getCharacterById(id)
      .then(fetchedCharacter => {
        setSingleSatellite(fetchedCharacter)
      })
  }

  useEffect(() => {
    fetchCharacters()

  }, [])

   const handleClick = (character) => {
    character == randomCharacter.character ?     setScore(prevScore => prevScore + 1)
    : console.log("incorrect")
    fetchCharacters()
  }

  return (
    <>
    <h1>Quote: "{randomCharacter.quote}"</h1>
    <h2>Who said it?</h2>
      <button onClick={() => handleClick(randomCharacter.character)}>{randomCharacter.character}</button>
      <button onClick={() => handleClick(randomCharacterTwo.character)}>{randomCharacterTwo.character}</button>
      <p>Score: {score}</p>
    </>
  )
}
export default CharacterListing