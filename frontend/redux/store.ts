import { createStore, combineReducers } from 'redux'
import weekReducer from './reducers/week-reducers'


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