import request from 'superagent'

const baseUrl = 'https://api.adviceslip.com/'

export function getAdviceSlip() {
    return request.get(baseUrl + 'advice')
    .then(res => res.body)
}

export function getAdviceSlipById(id) {
    return request.get(baseUrl + 'advice/' + id)
    .then(res => res.body)
}