import React from 'react'
import Day from '../day/Day'
import Hours from '../day/Hours'
import weekStyleFilter from '../../utility/week-style-filter'
import Timesheetview from '../../models/view.model'
import FullWeekTupple from '../../models/fullweek.model'
import '../../styles/week/week.scss'

const calculateWeekTotalHours = (days:FullWeekTupple):number => days.map((day)=> day.data.reduce((acc,curr)=>acc+curr.hours,0)).reduce((acc,curr)=>acc+curr,0)

const WeekTotalHours:React.FC<{days:FullWeekTupple}> = ({days})=>{
    const totalHours = calculateWeekTotalHours(days)
    return <div className="week-total-div">
        <div className="week-total-hours"><span>{`You worked a total of `}</span><strong>{`${totalHours} hour${totalHours === 1 ? ' ' : 's'}`}</strong><span>{` this week.`}</span></div>
        <div className="triangle-topleft"></div>
    </div>
}

const AddTd:React.FC<{index:number}> = ({index})=> <td key={index} className="add-td"><div className="add-div"><span className='add'>+</span></div></td>

interface WeekProps {
    days: FullWeekTupple;
    view: Timesheetview;
}

const Week: React.FC<WeekProps> = ({days,view})=>{
    return <div>
        <table className="week">
            <tbody>
                <tr>
                {days.map((day,index)=> weekStyleFilter(view,index,<Day key={index} entries={day.data} /> ))}
                </tr>
                <tr>{days.map((_, index) => weekStyleFilter(view,index,<AddTd key={index} index={index} />) )}</tr>
                <Hours days={days} view={view}/>
            </tbody>
        </table>
        <WeekTotalHours days={days} />
    </div>    
}
export default Week