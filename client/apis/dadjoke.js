import request from "superagent"

const baseUrl = 'https://icanhazdadjoke.com/'

export function getRandomDadJoke () {
  return request
  .get(baseUrl)
  .set("Accept", "application/json")
  .then(res => res.body)
}

export function getJokesFromSearchTerm (searchTerm) {
  return request
  .get(baseUrl + 'search?term=' + searchTerm)
  .set("Accept", "application/json")
  .then(res => {
    return res.body})
}

