import React from 'react'
import TimesheetView from '../../models/view.model'
import WeekStyleSwitch from './WeekStyleSwitch'
import '../../styles/week/week-menu.scss'

interface WeekMenuProps {
    view:TimesheetView;
    callback:(view:TimesheetView)=>void;
}

const WeekMenu:React.FC<WeekMenuProps> =({view,callback})=>{
    return <div className="week-menu">
        <img height="51px" src="./img/calendar.svg" />
        <div className="week-menu-week-selector">
            <div className="week-not-selected">Last Week</div>
            <div className="week-selected">This Week</div>
            <div className="week-not-selected">Next Week</div>
        </div>
        <WeekStyleSwitch view={view} callback={callback} />
    </div>
}

export default WeekMenu