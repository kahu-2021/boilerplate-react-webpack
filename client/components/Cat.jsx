import React, { useEffect, useState } from 'react'
import { getRandomCat } from '../apis/cats'

const Cat = () => {
  const [cat, setCat] = useState(null)

  const fetchCat = () => {
    getRandomCat()
    .then(cat => {
      // console.log(cat[0])
      setCat(cat[0])
    })
  }

  useEffect(() => {
    fetchCat()
  }, [])

  return (
    <>
    <h2>Random Cute Kitty!</h2>
      {cat && <img src={cat.url}/>}
      <br></br>
      <br></br>
      <button onClick={fetchCat}>Show Me Another!</button>
    </>
  )
}

export default Cat