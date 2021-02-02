import React, {useEffect, useState} from 'react'
import {getChuckNorrisByCategory} from '../apis/chuckNorris'

const SingleCategory = () => {

  const [singleCat, setSingleCat]

  const getSingleCat = () => {
    getChuckNorrisByCategory()
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
        <h2>
          
        </h2>
      )}

    </>
  )








}






export default SingleCategory