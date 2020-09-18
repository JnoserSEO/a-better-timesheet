import React, {useState} from 'react'
import Week from './week/Week'
import WeekMenu from './week/WeekMenu'
import Timesheetview from '../models/view.model'
import FullWeekTupple, { FullWeekObject } from '../models/fullweek.model'

export interface TimesheetProps {
    week: FullWeekObject;
    view: Timesheetview;
}

const TimeSheets:React.FC<TimesheetProps> = ({week,view='5 day'})=>{
    const [weekView,setWeekView] = useState(view)
    console.log(weekView,setWeekView)
    const days = Object.values(week) as FullWeekTupple
    return <div>
        <WeekMenu view={weekView} callback={setWeekView} />
        <Week days={days} view={weekView} />
    </div>
}

export default TimeSheets