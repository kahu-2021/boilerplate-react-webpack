import React, { useEffect, useState } from 'react'
import { getFoodDish, getDishByCategory } from '../apis/foodDish'

const ShowFoodDish = () => {
	const [dish, setDish] = useState([])

	const fetchDishes = () => {
		getFoodDish()
			.then(fetchedDishes => {
				setDish(fetchedDishes)
				console.log(fetchedDishes)
			})
	}

	const [singleCategory, setSingleCategory] = useState(null)

	const fetchDishByCategory = (food) => {
		getDishByCategory(food)
			.then(fetchedDish => {
				setSingleCategory(fetchedDish)
			}) 
	}

	useEffect(() => {
		fetchDishes()
	}, [])

	return (
		<>
				{ dish &&
					<img src={dish.image} />
				}

			{singleCategory && (
        <p>
          {singleCategory.image}
        </p>
      )}
		</>
	)

}

export default ShowFoodDish