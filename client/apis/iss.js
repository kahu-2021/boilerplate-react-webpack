//@ts-check

import request from "superagent";

const baseUrl = "https://ghibliapi.herokuapp.com";

export function getFilms() {
  return request.get(baseUrl + "/films")
    .then(res => res.body);
}