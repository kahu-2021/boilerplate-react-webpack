import request from "superagent"

const baseUrl = "https://api.thecatapi.com/v1/images/search"

export function getRandomCat () {
  return request
  .get(baseUrl)
  .then(res => res.body)
}