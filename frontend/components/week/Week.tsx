import React from 'react'
import Day from '../day/Day'
import { TimesheetProps } from '../timesheet'
import '../../styles/week/week.scss'


const Week: React.FC<TimesheetProps> = ({days,view})=>(
    <div className="week">
        {days.map((day,index)=>{
            if( view==='7 day' || view === '5 day' && index !== 0 && index !== 6 ){ 
                return <Day key={index} entries={day} />
            }
            return '' 
        })}
    </div>
)

export default Week