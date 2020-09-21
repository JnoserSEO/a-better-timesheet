import React from 'react'
import TimesheetView from '../../models/view.model'
import { ReducerAction } from '../timesheet'
import WeekStyleSwitch from './WeekStyleSwitch'
import '../../styles/week/week-menu.scss'

interface WeekMenuProps {
    view:TimesheetView;
    dispatch:React.Dispatch<ReducerAction>
}

const WeekMenu:React.FC<WeekMenuProps> =({view,dispatch})=>{
    return <div className="week-menu">
        <img height="51px" src="./img/calendar.svg" />
        <div className="week-menu-week-selector">
            <div className="week-not-selected">Last Week</div>
            <div className="week-selected">This Week</div>
            <div className="week-not-selected">Next Week</div>
        </div>
        <WeekStyleSwitch view={view} dispatch={dispatch} />
    </div>
}

export default WeekMenu