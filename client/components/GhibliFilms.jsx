//@ts-check

import React, { useEffect, useState } from "react";
import { getFilms } from "../apis/iss";

const GhibliFilms = () => {
  const [films, setFilms] = useState([]);
  const [idToShow, setId] = useState("");

  const fetchFilms = () => {
    // console.log(getFilms())
    getFilms()
        .then(filmsList => {
            setFilms(filmsList);
          }
        )
  }

  useEffect(() => {
      fetchFilms();
    }, []
  )

  function getDescription(id) {
    setId(id)
  }

  // function renderFilmInfo (film) {
    //   return (
    //     <>
    //     <img src={film.image} />
    //     <p>{film.year}</p>
    //     <p>{film.description}</p>
    //     </>
    //   )
    // }
  // return (
  //     <ul>
  //       {films.map(film => {
  //         return (
  //             <li key={film.id} onClick={() => getDescription(film.id)}>
  //                 {film.title}
  //                 {idToShow === film.id && renderFilmInfo(film)}
  //             </li>
  //           )
  //         })
  //       }
  //     </ul>
  //   )

  return (
    <ul>
      {films.map(film => {
        return (
            <li key={film.id} onClick={() => getDescription(film.id)}>
                {film.title}
                {idToShow === film.id && <p>{film.description}</p>}
            </li>
          )
        })
      }
    </ul>
  )
}

export default GhibliFilms