//@ts-check

import React, { useState, useEffect } from "react";
import { getArtworks } from "../apis/iss";

const ClevelandMuseum = () => {
  const [artworks, setArtworks] = useState({data : []});

  const fetchArtworks = () => {
    getArtworks()
      .then(artworksList => {
        console.log(artworksList)
        setArtworks(artworksList)
      })
  }
  
  useEffect(() => {
      fetchArtworks();
    }, []
  )
    
  return (
    <ul>
      {artworks.data.map(artwork=> {
          return (
            <li key={artwork.id}>
              {artwork.title}
            </li>
          )
        })
      }
    </ul>
  )
}

export default ClevelandMuseum