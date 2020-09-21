import React, {useState} from 'react'
import { format } from 'date-fns'
import { DayEntry } from '../../models/fullweek.model'
import { ReducerAction } from '../timesheet'
import { useDispatch } from 'react-redux'
import allActions from '../../redux/actions/all-actions'
import '../../styles/week/modal.scss'

interface WeekModalProps {
    day: DayEntry|null;
    dispatch: React.Dispatch<ReducerAction>
}

const WeekModal:React.FC<WeekModalProps> = ({day,dispatch})=>{
    const [client,setClient] = useState('')
    const [hours,setHours]= useState(0)
    const reduxDispatch = useDispatch()
    if(!day){
        return <div></div>
    }
    //dispatch(allAction.weekActions.addEntry(dayOfWeek, { hours: 2, name: 'Comp A' })
    return <div className="week-modal-background" onClick={()=>dispatch({type:'HIDE_MODAL'})}>
        <div className="week-modal" onClick={(e) => e.stopPropagation()/* prevent event from bubling to parent div i.e. allow clicking on this div */}> 
            {day ? day.dayOfWeek + ' ' + format(day.date, 'P') : undefined}
            <div>
                <span>Client</span>
                <input type="text" onChange={e => setClient(e.target.value)} />
            </div>
            <div>
                <span>Hours</span>
                <input type="number" onChange={e => setHours(+e.target.value)/* cast to number */} /> 
            </div>
            <div>
                <button onClick={() => {
                    reduxDispatch(allActions.weekActions.addEntry(day.dayOfWeek,{name:client,hours:hours})) 
                    dispatch({type:'HIDE_MODAL'})
                }} >Submit</button>
            </div>
        </div>
    </div>
}

export default WeekModal