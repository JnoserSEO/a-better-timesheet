import React from 'react'
import { Entries, EntriesProps } from '../entry/Entries'
import '../../styles/day/day.scss'
import '../../styles/utility/utility.scss'

const Day:React.FC<EntriesProps> = ({entries})=>{
    return <td className="hours-td">
            <Entries entries={entries} />
    </td>
}

export default Day