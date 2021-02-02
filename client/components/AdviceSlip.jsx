import React, { useEffect, useState } from 'react'
import { getAdviceSlip, getAdviceSlipById } from '../apis/advice'

const AdviceSlip = () => {
    const [advise, setAdvice] = useState([])

    const fetchAdvice = () => {
        getAdviceSlip()
        .then(fetchedAdvice => {
            setAdvice(fetchedAdvice)
        })
    }

    const [singleAdvice, setSingleAdvice] = useState(null)

    const fetchAdviceById = (id) => {
        getAdviceSlipById(id)
        .then(fetchedAdviceId => {
            setSingleAdvice(fetchedAdviceId)
        })
    }

    useEffect(() => {
        fetchAdvice()
    }, [])

    return (
        <>
        <ul>
            {advise && 
                <li>{advise.slip} </li> 
            }
        </ul>
        </>
    )
}

export default AdviceSlip