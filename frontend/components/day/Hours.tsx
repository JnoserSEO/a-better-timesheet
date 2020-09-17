import React from 'react'
import FullWeek from '../../models/fullweek.model'
import '../../styles/day/hours.scss'

const Hours:React.FC<{days:FullWeek}> = ({days})=>{
    return <tr>{days.map((day, index) => {
        const hours = day.data.reduce((acc, curr) => acc + curr.hours, 0)
        return <td key={index} className="day-total">{`${hours} Hour${hours === 1 ? '' : 's'}`}</td> 
    })}</tr>
}

export default Hours