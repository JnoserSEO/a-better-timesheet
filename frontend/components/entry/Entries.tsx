import React from 'react'
import {Entry, EntryProps} from './Entry'
import '../../styles/entry/entries.scss'
export interface EntriesProps {
    entries: EntryProps[]
}

export const Entries: React.FC<EntriesProps> = ({entries})=>{
    return <div className="timesheet-entries">
        <div >{entries.map((e, index) => <Entry key={index} hours={e.hours} name={e.name} />)}</div>
    </div>
}