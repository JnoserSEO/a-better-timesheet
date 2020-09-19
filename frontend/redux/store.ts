import { createStore, combineReducers } from 'redux'
import newFullWeek from '../utility/newFullWeek'
import { DayofWeek } from '../models/fullweek.model'
import { EntryProps } from '../components/entry/Entry'

const THIS_WEEK = newFullWeek(new Date())

const weekReducer = (state = THIS_WEEK, action: { type:string,dayOfWeek:DayofWeek,entry?:EntryProps,entryIndex?:number}) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return {...state,[action.dayOfWeek]:{...state[action.dayOfWeek],data:[...state[action.dayOfWeek].data,action.entry]}};
        case 'UPDATE_ENTRY':
            return { ...state, 
                [action.dayOfWeek]: { ...state[action.dayOfWeek],
                    data:[...state[action.dayOfWeek].data.filter((_,index)=> index !== action.entryIndex ),action.entry]
                }
            };
        case 'REMOVE_ENTRY':
            return {...state,
                [action.dayOfWeek]: {
                    ...state[action.dayOfWeek],
                    data: [...state[action.dayOfWeek].data.filter((_, index)=> index !== action.entryIndex )]
                }
            }; 
        default:
            return state;
    }
}

const reducer = combineReducers({ week: weekReducer})
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