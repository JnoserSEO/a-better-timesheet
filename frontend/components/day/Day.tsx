import React from 'react'
import { isToday } from 'date-fns'
import { Entries } from '../entry/Entries'
import { EntryProps } from '../entry/Entry'
import '../../styles/day/day.scss'
import '../../styles/utility/utility.scss'

interface DayProps {
    date:Date;
    entries:EntryProps[];
}

const Day:React.FC<DayProps> = ({date,entries})=>{
    return <td className={`hours-td${isToday(date) ? ' today-highlight' : ''}`}>
            <Entries entries={entries} />
    </td>
}

export default Day