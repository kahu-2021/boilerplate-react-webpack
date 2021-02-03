import React, { useEffect, useState } from 'react'
import { getAdviceSlip, getAdviceSlipById } from '../apis/advice'

const AdviceSlip = () => {
	const [advice, setAdvice] = useState(null)

	const fetchAdvice = () => {
		getAdviceSlip()
			.then(fetchedAdvice => {
				console.log(fetchedAdvice)
				setAdvice(fetchedAdvice)
			})
	}

	// const [singleAdvice, setSingleAdvice] = useState(null)

	// const fetchAdviceById = (id) => {
	// 	getAdviceSlipById(id)
	// 		.then(fetchedAdviceId => {
	// 			setSingleAdvice(fetchedAdviceId)
	// 		})
	// }

	useEffect(() => {
		fetchAdvice()
	}, [])

	return (
		<>
			<ul>
				{advice &&
					<li>{advice.slip.advice}</li>
				}
				{/* <button onClick={advice.slip.advice}>press</button> */}
			</ul>
			{/* <button onClick={advice.slip.advice}>press</button> */}
		</>
	)
}

export default AdviceSlip