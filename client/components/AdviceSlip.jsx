import React, { useEffect, useState } from 'react'
import { getAdviceSlip, getAdviceSlipById } from '../apis/advice'

const AdviceSlip = () => {
	const [advice, setAdvice] = useState(null)
	// const [loading, setLoading] = useState(false)

	const fetchAdvice = () => {
		// console.log('fetch')
		// setLoading(true)
		getAdviceSlip()
			.then(fetchedAdvice => {
				// console.log(fetchedAdvice.slip)
				setAdvice(fetchedAdvice.slip)
				// setLoading(false)
			})
	}

	const [singleAdvice, setSingleAdvice] = useState(null)

	const fetchAdviceById = (id) => {
		getAdviceSlipById(id)
			.then(fetchedAdviceId => {
				setSingleAdvice(fetchedAdviceId.slip)
			})
	}

	// const getRandomAdvice = () => {
	// 	console.log(advice.slip.advice)
	// 	// return (
	// 	// )
	// }

	const handleClick = () =>{
		return fetchAdvice()
	}

	useEffect(() => {
		fetchAdvice()
	}, [])

	return (
		<>
			<ul>
				{advice &&
					<li>{advice.advice}</li>
				}
			</ul>
			<button onClick={handleClick} >press</button>
		</>
	)
}

export default AdviceSlip