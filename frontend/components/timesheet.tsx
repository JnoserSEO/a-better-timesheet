import React, {useState} from 'react'
import Week from './week/Week'
import Timesheetview from '../models/view.model'
import FullWeek from '../models/fullweek.model'

export interface TimesheetProps {
    days: FullWeek;
    view?: Timesheetview;
}

const TimeSheets:React.FC<TimesheetProps> = ({days,view='5 day'})=>{
    const [weekView,setWeekView] = useState(view)
    console.log(weekView,setWeekView)
    return <div>
        <Week days={days} view={view} />
    </div>
}

export default TimeSheets