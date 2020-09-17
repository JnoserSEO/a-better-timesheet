import React from 'react'
import {Entry, EntryProps} from './Entry'

export interface EntriesProps {
    entries: EntryProps[]
}

export const Entries: React.FC<EntriesProps> = ({entries})=>{
    return <div>
        {entries.map((e, index) => <Entry key={index} hours={e.hours} name={e.name} /> )}
    </div>
}