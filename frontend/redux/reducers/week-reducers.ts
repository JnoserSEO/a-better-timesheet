import newFullWeek from '../../utility/newFullWeek'
import { DayofWeek } from '../../models/fullweek.model'
import EntryData from '../../models/entryData.model'
import { FullWeekObject} from '../../models/fullweek.model'


const THIS_WEEK = newFullWeek(new Date())

const weekReducer = (state = THIS_WEEK, action: { type: string, dayOfWeek?: DayofWeek, entry?: EntryData, entryIndex?: number,state?:FullWeekObject}) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            if(action.dayOfWeek)
            return { ...state, [action.dayOfWeek]: { ...state[action.dayOfWeek], data: [...state[action.dayOfWeek].data, action.entry] } };
        case 'UPDATE_ENTRY':
            if (action.dayOfWeek)
            return {
                ...state,
                [action.dayOfWeek]: {
                    ...state[action.dayOfWeek],
                    data: [...state[action.dayOfWeek].data.filter((_, index) => index !== action.entryIndex), action.entry]
                }
            };
        case 'REMOVE_ENTRY':
            if (action.dayOfWeek)
            return {
                ...state,
                [action.dayOfWeek]: {
                    ...state[action.dayOfWeek],
                    data: [...state[action.dayOfWeek].data.filter((_, index) => index !== action.entryIndex)]
                }
            };
        case 'CHANGE_WEEK':
            if (action.state)
            return action.state
        default:
            return state;
    }
}

export default weekReducer