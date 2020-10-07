import React from 'react'
import { Entry } from './Entry'
import '../../styles/entry/entries.scss'
import { DayofWeek } from '../../models/fullweek.model'
import EntryData from '../../models/entryData.model'
export interface EntriesProps {
    entries: EntryData[];
    dayOfWeek: DayofWeek
}

export const Entries: React.FC<EntriesProps> = ({entries,dayOfWeek})=>{
    return <div className="timesheet-entries">
        <div >{entries.map((e, index) => <Entry key={index} index={index} dayOfWeek={dayOfWeek} hours={e.hours} name={e.name} />)}</div>
    </div>
}