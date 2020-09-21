import React from 'react'
import Day from '../day/Day'
import Hours from '../day/Hours'
import AddTd from '../day/AddTd'
import { ReducerAction } from '../timesheet'
import weekStyleFilter from '../../utility/week-style-filter'
import Timesheetview from '../../models/view.model'
import FullWeekTuple from '../../models/fullweek.model'
import '../../styles/week/week.scss'

const calculateWeekTotalHours = (days:FullWeekTuple):number => days.map((day)=> day.data.reduce((acc,curr)=>acc+curr.hours,0)).reduce((acc,curr)=>acc+curr,0)

const WeekTotalHours:React.FC<{days:FullWeekTuple}> = ({days})=>{
    const totalHours = calculateWeekTotalHours(days)
    return <div className="week-total-div">
        <div className="week-total-hours"><span>{`You worked a total of `}</span><strong>{`${totalHours} hour${totalHours === 1 ? ' ' : 's'}`}</strong><span>{` this week.`}</span></div>
        <div className="triangle-topleft"></div>
    </div>
}

interface WeekProps {
    days: FullWeekTuple;
    view: Timesheetview;
    dispatch: React.Dispatch<ReducerAction>
}

const Week: React.FC<WeekProps> = ({days,view,dispatch})=>{
    return <div>
        <table className="week">
            <tbody>
                <tr>
                {days.map((day,index)=> weekStyleFilter(view,index,<Day key={index} date={day.date} entries={day.data} /> ))}
                </tr>
                <tr>{days.map((day, index) => weekStyleFilter(view, index, <AddTd key={index} index={index} day={day} dispatch={dispatch} />) )}</tr>
                <Hours days={days} view={view}/>
            </tbody>
        </table>
        <WeekTotalHours days={days} />
    </div>    
}
export default Week