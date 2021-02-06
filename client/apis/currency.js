import request from 'superagent'
const baseUrl = 'https://api.coinbase.com/v2/exchange-rates'



export function getAllRates() {
    return request.get(baseUrl)//get a list of all bitcoin conversion rates
        .then(res => res.body)
}

getAllRates().then(console.log)
