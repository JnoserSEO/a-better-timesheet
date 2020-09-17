import React from 'react'
import ReactDOM from 'react-dom'
import TimeSheets from '../frontend/components/timesheet'
import FullWeek from './models/fullweek.model'
// import AppRouter from './routers/AppRouter'
// import store from './redux/store'
// import 'normalize.css/normalize.css'
// import '../styles/styles.scss'

const days:FullWeek = [
    {dayOfWeek:'Sunday',date:new Date(),data:[]},
    {dayOfWeek:'Monday',date:new Date(),data:[{ hours: 2, name: 'Comp A' }, { hours: 1, name: 'Comp B' }, { hours: 5, name: 'Comp C' }, { hours: 1, name: 'Comp D' }]}, 
    {dayOfWeek:'Tuesday',date:new Date(),data:[{ hours: 2, name: 'Comp A' }, { hours: 1, name: 'Comp B' }, { hours: 5, name: 'Comp C' }, { hours: 1, name: 'Comp D' }]},
    {dayOfWeek:'Wednesday',date:new Date(),data:[{ hours: 2, name: 'Comp A' }, { hours: 1, name: 'Comp B' }, { hours: 5, name: 'Comp C' }, { hours: 1, name: 'Comp D' }]}, 
    {dayOfWeek:'Thursday',date:new Date(),data:[{ hours: 2, name: 'Comp A' }, { hours: 1, name: 'Comp B' }, { hours: 5, name: 'Comp C' }, { hours: 1, name: 'Comp D' }]},
    {dayOfWeek:'Friday',date:new Date(),data:[{ hours: 2, name: 'Comp A' }, { hours: 1, name: 'Comp B' }, { hours: 5, name: 'Comp C' }, { hours: 1, name: 'Comp D' }]}, 
    {dayOfWeek:'Saturday',date:new Date(),data:[{ hours: 1, name: 'Comp A' }]}
]

ReactDOM.render(<TimeSheets days={days} view={'7 day'} />, document.getElementById('app'))