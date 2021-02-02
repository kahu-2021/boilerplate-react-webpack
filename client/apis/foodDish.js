import request from 'superagent'

const baseUrl = 'https://foodish-api.herokuapp.com/api/'

export function getFoodDish() {
    return request.get(baseUrl)
        .then(res => res.body)
}

export function getDishByCategory(food) {
    return request.get(baseUrl + 'images/' + food)
        .then(res => res.body)
}