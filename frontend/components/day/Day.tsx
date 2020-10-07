import React from 'react'
import { isToday } from 'date-fns'
import { getDayProperName } from '../../utility/newFullWeek'
import { Entries } from '../entry/Entries'
import EntryData from '../../models/entryData.model'
import '../../styles/day/day.scss'
import '../../styles/utility/utility.scss'

interface DayProps {
    date:Date;
    entries: EntryData[];
}

const Day:React.FC<DayProps> = ({date,entries})=>{
    return <td className={`hours-td${isToday(date) ? ' today-highlight' : ''}`}>
            <Entries entries={entries} dayOfWeek={getDayProperName(date)} />
    </td>
}

export default Day