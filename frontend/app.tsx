import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import TimeSheets from '../frontend/components/timesheet'
// import {FullWeekObject} from './models/fullweek.model'
// import AppRouter from './routers/AppRouter'
// import 'normalize.css/normalize.css'
// import '../styles/styles.scss'

// const week:FullWeekObject = {
//     Sunday:{dayOfWeek:'Sunday',date:new Date(),data:[]},
//     Monday:{dayOfWeek:'Monday',date:new Date(),data:[{ hours: 2, name: 'Comp A' }, { hours: 1, name: 'Comp B' }, { hours: 5, name: 'Comp C' }, { hours: 1, name: 'Comp D' }]}, 
//     Tuesday:{dayOfWeek:'Tuesday',date:new Date(),data:[{ hours: 2, name: 'Comp A' }, { hours: 1, name: 'Comp B' }, { hours: 5, name: 'Comp C' }, { hours: 1, name: 'Comp D' }]},
//     Wednesday:{dayOfWeek:'Wednesday',date:new Date(),data:[{ hours: 2, name: 'Comp A' }, { hours: 1, name: 'Comp B' }, { hours: 5, name: 'Comp C' }, { hours: 1, name: 'Comp D' }]}, 
//     Thursday:{dayOfWeek:'Thursday',date:new Date(),data:[{ hours: 2, name: 'Comp A' }, { hours: 1, name: 'Comp B' }, { hours: 5, name: 'Comp C' }, { hours: 1, name: 'Comp D' }]},
//     Friday:{dayOfWeek:'Friday',date:new Date(),data:[{ hours: 2, name: 'Comp A' }, { hours: 1, name: 'Comp B' }, { hours: 5, name: 'Comp C' }, { hours: 1, name: 'Comp D' }]}, 
//     Saturday:{dayOfWeek:'Saturday',date:new Date(),data:[{ hours: 1, name: 'Comp A' }]}
// }
const App = ()=><Provider store={store}><TimeSheets /></Provider>
ReactDOM.render(<App />, document.getElementById('app'))
export default App