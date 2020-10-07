import React from 'react'
import { useDispatch } from 'react-redux'
import allActions from '../../redux/actions/all-actions'
import { DayofWeek } from '../../models/fullweek.model'
import '../../styles/entry/entry.scss'

export interface EntryProps {
    hours:number;
    name:string;
    dayOfWeek: DayofWeek;
    index:number;
}

const flexString = (hours:number):'column'|'row' => {
    if(hours > 1){
        return 'column'
    }
    return 'row'
}

export const Entry:React.FC<EntryProps> = ({hours,name,dayOfWeek,index})=>{
    const reduxDispatch = useDispatch()
    return <div className="timesheet-entry" style={{height:`${23*hours}px`}} >
        <div className="timesheet-text-div" style={{flexDirection:flexString(hours)}} >
            <div className="timesheet-entry-name"><span>{name}</span></div>
            <div className="timesheet-entry-hours"><span>{`${hours} Hour${hours > 1 ? 's' : '  '}`}</span></div>
        </div>
        {/* <button className="timesheet-entry-delete"><i className="fa fa-close"></i></button> */}
        <button className="timesheet-entry-delete" onClick={() => reduxDispatch(allActions.weekActions.removeEntry(dayOfWeek,index))} >×</button>
    </div>
}