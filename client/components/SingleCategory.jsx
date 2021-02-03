import React, {useEffect, useState} from 'react'
import {getIndividualCategory} from '../apis/chuckNorris'

const SingleCategory = (props) => {

  const [singleCat, setSingleCat] = useState([])

  const category = props.match.params.category

  const getSingleCat = () => {
    getIndividualCategory(category)
    .then(singCat => {
      setSingleCat(singCat)
    })
  }

  useEffect(() => {
    getSingleCat()
  }, [])

  return(
    <>
      {singleCat && (
        <>
        <h2>
          Here is the jokes from your selected category
        </h2>
        <p>
         {singleCat.value}
        </p>
        </>
      )}

    </>
  )








}






export default SingleCategory