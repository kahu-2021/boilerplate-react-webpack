import request from 'superagent'

const baseUrl = 'https://api.adviceslip.com/'

export function getAdviceSlip() {
    return request.get(baseUrl + 'advice')
    .then(res => JSON.parse(res.text))
}

export function getAdviceSlipById(id) {
    return request.get(baseUrl + 'advice/' + id)
    .then(res => res.body)
}