import request from 'superagent'
import { getSatellites, getSatelliteById } from '../apis/iss'
const baseUrl = 'https://api.wheretheiss.at/v1/'

export function getSatellites() {
  return request.get(baseUrl + 'satellites')
    .then(res => res.body)//res body sent back
}

export function getSatelliteById() {
  return request.get(baseUrl + "satellites/' + id")
    .then(res => res.body)
}

//getSatellites().then(console.log(getSatellites)

export function getSatelliteById(id) {}


