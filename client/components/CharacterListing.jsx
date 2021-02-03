import React, { useEffect, useState } from "react"
import { getCharacters } from "../apis/futurama"

const CharacterListing = () => {
  const [randomCharacter, setRandomCharacter] = useState({})
  const [randomCharacterTwo, setRandomCharacterTwo] = useState({})
  const [score, setScore] = useState(0)
  const [flipper, setFlipper] = useState(0)


  const fetchCharacters = () => {
    getCharacters().then((fetchedCharacters) => {
      console.log(fetchedCharacters)
      const randomNumber = () =>
        Math.floor(Math.random() * Math.floor(fetchedCharacters.length))
      let ranNum = randomNumber()
      let ranNum2 = randomNumber()
      
      while (fetchedCharacters[ranNum].character == fetchedCharacters[ranNum2].character) {
   
        ranNum2 = randomNumber()
      }
      
      setRandomCharacter(fetchedCharacters[ranNum])
      setRandomCharacterTwo(fetchedCharacters[ranNum2])

      setImageFlip(Math.round(Math.random()))
    })
  }

  useEffect(() => {
    fetchCharacters()
  }, [])


  const handleClick = (character) => {
    character == randomCharacter.character
      ? setScore((prevScore) => prevScore + 1)
      : console.log("incorrect")
    fetchCharacters()
  }

  const [imageFlip, setImageFlip] = useState(0)

  return (
    <>
      <h1 >Quote: "{randomCharacter.quote}"</h1>
      <h2>Who said it?</h2>
      <div style={{display: "flex", flexDirection: imageFlip == 0 ? "row" : "row-reverse"}}>
      <div >
      <button onClick={() => handleClick(randomCharacter.character)}>
        {randomCharacter.character}
      </button>
      <img  style={{ height:"300px"}} src={randomCharacter.image}/>
      </div>
      <div id="characterTwo">
      <button onClick={() => handleClick(randomCharacterTwo.character)}>
        {randomCharacterTwo.character}
      </button>
      <img style={{ height:"300px"}} src={randomCharacterTwo.image}/>
      </div>
      </div>
      <p>Score: {score}</p>
    </>
  );
};
export default CharacterListing;
