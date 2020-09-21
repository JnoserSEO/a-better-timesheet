import React from 'react'
import TimesheetView from '../../models/view.model'
import { ReducerAction } from '../timesheet'
import '../../styles/week/week-style-switch.scss'

interface WeekStyleSwitchProps{
    view:TimesheetView;
    dispatch:React.Dispatch<ReducerAction>
}

const WeekStyleSwitch:React.FC<WeekStyleSwitchProps> = ({view,dispatch})=>{

    return <div className="week-style-swith">
        <div onClick={() => dispatch({type:'SET_WEEK_VIEW',value:'5 day'})} className={view === '5 day' ? 'week-style-swith-selected' :'week-style-div'}>5 Day</div>
        <div onClick={() => dispatch({type:'SET_WEEK_VIEW',value:'7 day'})} className={view === '7 day' ? 'week-style-swith-selected' : 'week-style-div'}>7 Day</div>
    </div>
}

export default WeekStyleSwitch