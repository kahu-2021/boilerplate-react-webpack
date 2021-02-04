//@ts-check

import request from "superagent";

const baseUrl = "https://ghibliapi.herokuapp.com";
const museumUrl = "https://openaccess-api.clevelandart.org/api";

export function getFilms() {
  return request.get(baseUrl + "/films")
    .then(res => res.body);
}

export function getArtworks() {
  return request.get(museumUrl + "/artworks/").query({limit:40})
    .then(res => res.body)
}
