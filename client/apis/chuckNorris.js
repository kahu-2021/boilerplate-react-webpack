import request from 'superagent'

const baseUrl = 'https://api.chucknorris.io/jokes/random'
const catergoryUrl = 'https://api.chucknorris.io/jokes/categories'

export function getChuckNorris() {
  return request.get(baseUrl)
  .then(res => res.body)
}

export function getChuckNorrisById(id) {
  return request.get(baseUrl + id)
  .then(res => res.body)
}

export function getChuckNorrisByCategory() {
  return request.get(catergoryUrl)
  .then(res => res.body)
}

