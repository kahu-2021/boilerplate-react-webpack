import request from 'superagent'

const baseUrl = "https://api.nasa.gov/planetary/apod"
const apiKey = "?api_key=Re5esrxfM9He4aB4GBj5hgD97fd8zqPjixuU9EtQ"

export function getPictureOfTheDay() {
  return request
  .get(baseUrl + apiKey)
  .then(res => res.body)
}