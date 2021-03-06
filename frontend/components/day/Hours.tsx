import React from 'react'
import FullWeekTuple, {DayEntry} from '../../models/fullweek.model'
import TimesheetView from '../../models/view.model'
import weekStyleFilter from '../../utility/week-style-filter'
import '../../styles/day/hours.scss'

interface HoursTdProps{
    day:DayEntry
    index:number;
}

const HoursTd:React.FC<HoursTdProps> =({day,index})=>{
    const hours = day.data.reduce((acc, curr) => acc + curr.hours, 0)
    return <td key={index} className="day-total">{`${hours} Hour${hours === 1 ? '' : 's'}`}</td> 
}

const Hours:React.FC<{akey:number,days:FullWeekTuple,view:TimesheetView}> = ({akey,days,view})=>{
    return <tr key={akey} >{days.map((day,index) => weekStyleFilter(view,index,<HoursTd key={index} day={day} index={index} />) )}</tr>
}

export default Hours