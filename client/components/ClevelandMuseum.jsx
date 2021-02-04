//@ts-check

import React, { useState, useEffect } from "react";
import { getArtworks } from "../apis/iss";

const ClevelandMuseum = () => {
  const [artworks, setArtworks] = useState({data : []});
  const [idToShow, setId] = useState("");

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

  function clickButton(id) {
    setId(id);
  }
    
  return (
    <ul>
      {artworks.data.filter(artwork => {
          return artwork.images != null && artwork.creators[0].biography != null
        }).map(artwork=> {
          return (
              <li key={artwork.id}>
                <div>
                  <div>
                    {artwork.creators[0].description}
                  </div>
                  <button key={artwork.id} onClick={() => clickButton(artwork.id)}>Biography</button>
                  {idToShow === artwork.id && <div>{artwork.creators[0].biography}</div>}
                </div>
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