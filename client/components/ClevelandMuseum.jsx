//@ts-check

import React, { useState, useEffect } from "react";
import { getArtworks } from "../apis/iss";

const ClevelandMuseum = () => {
  const [artworks, setArtworks] = useState({data : []});

  const fetchArtworks = () => {
    getArtworks()
      .then(artworksList => {
        // console.log(artworksList)
        setArtworks(artworksList);
      });
  }
  
  useEffect(() => {
      fetchArtworks();
    }, []
  );
    
  return (
    <ul>
      {artworks.data.filter(artwork => {
          return artwork.images != null
        }).map(artwork=> {
          return (
              <li key={artwork.id}>
                <p>
                  {artwork.creators[0].description}
                </p>
                <div>
                  {artwork.title}
                </div>
                <img src={artwork.images.web.url} />
              </li>
            )
          })
      }
    </ul>
  );
}

export default ClevelandMuseum