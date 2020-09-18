import React from 'react'
import TimesheetView from '../../models/view.model'
import '../../styles/week/week-style-switch.scss'

interface WeekStyleSwitchProps{
    view:TimesheetView;
    callback:(view:TimesheetView)=>void
}

const WeekStyleSwitch:React.FC<WeekStyleSwitchProps> = ({view,callback})=>{

    return <div className="week-style-swith">
        <div onClick={() => callback('5 day')} className={view === '5 day' ? 'week-style-swith-selected' :'week-style-div'}>5 Day</div>
        <div onClick={() => callback('7 day')} className={view === '7 day' ? 'week-style-swith-selected' : 'week-style-div'}>7 Day</div>
    </div>
}

export default WeekStyleSwitch