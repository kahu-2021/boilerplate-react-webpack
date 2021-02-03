import request from 'superagent'

const baseUrl = "https://api.nasa.gov/planetary/apod"
const apiKey = "Re5esrxfM9He4aB4GBj5hgD97fd8zqPjixuU9EtQ"

export function getPictureOfTheDay() {
  return request
  .get(baseUrl)
  .query({api_key : apiKey})
  .then(res => res.body)
}

export function getPictureOfTheDayOnCertainDay(day) {
  return request
  .get(baseUrl)
  .query({api_key : apiKey})
  .query({date: day})
  .then(res => res.body)
}