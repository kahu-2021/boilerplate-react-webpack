import request from 'superagent'

const baseUrl = 'https://futuramaapi.herokuapp.com/api/'

export function getCharacters() {
  return request.get(baseUrl + 'quotes')
    .then(res => res.body)
}

export function getCharacterById(id) {
  return request.get(baseUrl + 'characters/' + id)
    .then(res => res.body)
}