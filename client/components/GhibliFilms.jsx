//@ts-check

import React, { useEffect, useState } from "react";
import { getFilms } from "../apis/iss";

const GhibliFilms = () => {
  const [films, setFilms] = useState([]);

  const fetchFilms = () => {
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

  return (
    <ul>
      {films.map(film => {
        return (
            <li key={film.id}>
              {film.title}
            </li>
          )
        })
      }
    </ul>
  )
}

export default GhibliFilms