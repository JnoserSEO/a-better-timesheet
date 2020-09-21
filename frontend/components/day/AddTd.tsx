import React from 'react'
import { isToday } from 'date-fns'
import { ReducerAction } from '../timesheet'
import { DayEntry } from '../../models/fullweek.model'
import '../../styles/day/add.scss'

interface AddTdProps { 
    index: number; 
    day: DayEntry; 
    dispatch: React.Dispatch<ReducerAction>
}

const AddTd: React.FC<AddTdProps> = ({ index,day,dispatch }) => {
    console.log(day)
    return <td key={index} className={`add-td${isToday(day.date) ? ' add-today-highlight' : ''}`}>
        <div className="add-div">
            <span className='add' onClick={() => dispatch({ type: 'SHOW_MODAL', value: day })}>+</span>
        </div>
    </td>
}


export default AddTd