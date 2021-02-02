import request from 'superagent'

const baseUrl = 'http://www.boredapi.com/api/activity'

export function getRandom() {
  return request.get(baseUrl + '/')
    .then(res => res.body)
}

// export function getSatelliteById(id) {
//   return request.get(baseUrl + 'satellites/' + id)
//     .then(res => res.body)