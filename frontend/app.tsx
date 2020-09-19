import React from 'react'
import ReactDOM from 'react-dom'
import TimeSheets from '../frontend/components/timesheet'
import {FullWeekObject} from './models/fullweek.model'
// import AppRouter from './routers/AppRouter'
// import store from './redux/store'
// import 'normalize.css/normalize.css'
// import '../styles/styles.scss'

const week:FullWeekObject = {
    Sunday:{dayOfWeek:'Sunday',date:new Date(),data:[]},
    Monday:{dayOfWeek:'Monday',date:new Date(),data:[{ hours: 2, name: 'Comp A' }, { hours: 1, name: 'Comp B' }, { hours: 5, name: 'Comp C' }, { hours: 1, name: 'Comp D' }]}, 
    Tuesday:{dayOfWeek:'Tuesday',date:new Date(),data:[{ hours: 2, name: 'Comp A' }, { hours: 1, name: 'Comp B' }, { hours: 5, name: 'Comp C' }, { hours: 1, name: 'Comp D' }]},
    Wednesday:{dayOfWeek:'Wednesday',date:new Date(),data:[{ hours: 2, name: 'Comp A' }, { hours: 1, name: 'Comp B' }, { hours: 5, name: 'Comp C' }, { hours: 1, name: 'Comp D' }]}, 
    Thursday:{dayOfWeek:'Thursday',date:new Date(),data:[{ hours: 2, name: 'Comp A' }, { hours: 1, name: 'Comp B' }, { hours: 5, name: 'Comp C' }, { hours: 1, name: 'Comp D' }]},
    Friday:{dayOfWeek:'Friday',date:new Date(),data:[{ hours: 2, name: 'Comp A' }, { hours: 1, name: 'Comp B' }, { hours: 5, name: 'Comp C' }, { hours: 1, name: 'Comp D' }]}, 
    Saturday:{dayOfWeek:'Saturday',date:new Date(),data:[{ hours: 1, name: 'Comp A' }]}
}

ReactDOM.render(<TimeSheets week={week} view={'7 day'} />, document.getElementById('app'))