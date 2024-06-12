/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import './date.css'
import 'animate.css'

const Time = ({ information, date }) => {
    const [count, setCount] = useState(0)
    function countArticles() {

        const totalCount = information.reduce((acc, eachInfo) => {
            return acc + eachInfo.pages.length
        }, 0)
        setCount(totalCount)



    }

    let startYear = information.length > 0 ? information[0].year : null;
    let endYear = information.length > 0 ? information[information.length - 1].year : null;

    useEffect(() => {
        countArticles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [information])

    return (
        <div className='date'>
            <h1 className='poppins-light animate__animated animate__fadeInDownBig'>Today</h1>
            <h1 className='time poppins-light animate__animated animate__fadeInDownBig'>{date}</h1>
            <h2 className='small-screen poppins-light animate__animated animate__fadeInDownBig'>{count} events from {endYear}AD - {startYear}AD</h2>
        </div>
    )
}

export default Time;
