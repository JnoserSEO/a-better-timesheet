import React from 'react'
import Day from '../day/Day'
import Hours from '../day/Hours'
import { TimesheetProps } from '../timesheet'
import '../../styles/week/week.scss'


const Week: React.FC<TimesheetProps> = ({days,view='5 day'})=>{
    
    return <table className="week">
        <tbody>
            <tr>
            {days.map((day,index)=>{
                if( view==='7 day' || view === '5 day' && index !== 0 && index !== 6 ){ 
                    return <Day key={index} entries={day.data} />
                }
                return '' 
            })}
            </tr>
            <tr>{days.map((_,index) => <td key={index} className="add-td"><div className="add-div"><span className='add'>+</span></div></td>)}</tr>
            <Hours days={days} />
        </tbody>
    </table>
}
export default Week