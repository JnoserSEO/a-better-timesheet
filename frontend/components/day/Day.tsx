import React from 'react'
import { Entries, EntriesProps } from '../entry/Entries'
import '../../styles/day/day.scss'
import '../../styles/utility/utility.scss'

const Day:React.FC<EntriesProps> = ({entries})=>{
    const hours = entries.reduce((acc, curr) => acc + curr.hours, 0)
    return <div className="day-inner">
        <Entries entries={entries} />
        <div className="add-div"><span className='add'>+</span></div>
        <div className="day-total">{`${hours} Hour${hours > 1 ? 's':''}`}</div>
    </div>
}

export default Day