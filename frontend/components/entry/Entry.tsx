import React from 'react'
import '../../styles/entry/entry.scss'

export interface EntryProps {
    hours:number;
    name:string;
}

const flexString = (hours:number):'column'|'row' => {
    if(hours > 1){
        return 'column'
    }
    return 'row'
}

export const Entry:React.FC<EntryProps> = ({hours,name})=>{
    return <div className="timesheet-entry" style={{height:`${23*hours}px`,flexDirection:flexString(hours)}} >
        <div className="timesheet-entry-name"><span>{name}</span></div>
        <div className="timesheet-entry-hours"><span>{`${hours} Hour${hours > 1 ? 's' : '  '}`}</span></div>
    </div>
}