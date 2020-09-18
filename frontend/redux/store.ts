import { createStore, combineReducers } from 'redux'
import {startOfWeekYear} from 'date-fns'
import newFullWeek, {dayToProperNameToIndex} from '../utility/newFullWeek'
import FullWeek, {DayofWeek,DayEntry} from '../models/fullweek.model'
import { EntryProps } from '../components/entry/Entry'

const days: FullWeek = [
    { dayOfWeek: 'Sunday', date: new Date(), data: [] },
    { dayOfWeek: 'Monday', date: new Date(), data: [] },
    { dayOfWeek: 'Tuesday', date: new Date(), data: [] },
    { dayOfWeek: 'Wednesday', date: new Date(), data: [] },
    { dayOfWeek: 'Thursday', date: new Date(), data: [] },
    { dayOfWeek: 'Friday', date: new Date(), data: [] },
    { dayOfWeek: 'Saturday', date: new Date(), data: [] }
]

const SUNDAY_THIS_WEEK = startOfWeekYear(new Date(),{weekStartsOn:0})

const this_week = newFullWeek(SUNDAY_THIS_WEEK)
const THIS_WEEK = this_week instanceof Error ? days : this_week


const weekReducer = (state = THIS_WEEK, action: { type:string,dayOfWeek:DayofWeek,entry?:EntryProps }) => {
    const dayIndex = dayToProperNameToIndex(action.dayOfWeek)
    switch (action.type) {
        case 'ADD_ENTRY':
            return { ...state,...state[dayIndex].data[...state[dayIndex].data,action.entry]};
        case 'UPDATE_ENTRY':
            return { ...state,state[dayIndex]: action.unit };
        case 'REMOVE_ENTRY':
            return { ...state,state[dayIndex] };    
        default:
            return state;
            break;
    }
}

const reducer = combineReducers({ columns: columnReducer, rows: rowReducer, timeUnit: timeUnitReducer })
const store = createStore(reducer)

// store.subscribe(() => {
//     const state = store.getState();
//     const viscolumns = getVisibleColumns(state.columns)
//     console.log(viscolumns)
// })

// store.dispatch(setColumn({ name:'Name' }))
// store.dispatch(setColumn({ name: 'St' }))
// store.dispatch(setColumn({ name: 'Name' }))

export default store