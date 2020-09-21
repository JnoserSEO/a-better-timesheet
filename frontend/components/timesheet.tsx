import React, { useReducer} from 'react'
import { useSelector } from 'react-redux'
import Week from './week/Week'
import WeekMenu from './week/WeekMenu'
import WeekModal from './week/WeekModal'
import FullWeekTuple, { FullWeekObject, DayEntry } from '../models/fullweek.model'
import TimesheetView from '../models/view.model'
import DefaultReduxState from '../models/state.model'

interface TimesheetState {
    showModal: boolean;
    weekView: TimesheetView;
    selectedDay: DayEntry | null
}

interface ShowModalAction {
    type: 'SHOW_MODAL';
    value: DayEntry;
}

interface HideModalAction {
    type:'HIDE_MODAL'
}


interface WeekViewAction {
    type: 'SET_WEEK_VIEW';
    value: TimesheetView;
}

export type ReducerAction = ShowModalAction | HideModalAction | WeekViewAction

const rangeState: TimesheetState = {
    showModal: false,
    weekView: '5 day',
    selectedDay: null
}

const sliderReducer: React.Reducer<TimesheetState, ReducerAction> = (state, action): TimesheetState => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return { ...state, showModal:true,selectedDay:action.value}
        case 'HIDE_MODAL':
            return { ...state, showModal: false, selectedDay:null };  
        case 'SET_WEEK_VIEW':
            return { ...state,weekView: action.value };  
        default:
            return state
    }
}

const TimeSheets:React.FC = ()=>{
    const [state, dispatch] = useReducer<React.Reducer<TimesheetState,ReducerAction>>(sliderReducer,rangeState);
    const week = useSelector<DefaultReduxState,FullWeekObject>( (state) => state.week)
    const days = Object.values(week) as FullWeekTuple
    return <div>
        {state.showModal && <WeekModal day={state.selectedDay} dispatch={dispatch} />}
        <WeekMenu view={state.weekView} dispatch={dispatch} />
        <Week days={days} view={state.weekView} dispatch={dispatch} />
    </div>
}

export default TimeSheets