import {FullWeekObject,DayEntry,DayofWeek} from '../models/fullweek.model'
import { startOfWeekYear,startOfDay,getDay, endOfWeek, eachDayOfInterval } from 'date-fns'

type dayNum = 0 | 1 | 2 | 3 | 4 | 5 | 6

const dayNumToProperName = (dayNum:dayNum):DayofWeek=>{
    switch (dayNum) {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
    }
}

export const dayToProperNameToIndex = (dayOfWeek: DayofWeek) => {
    switch (dayOfWeek) {
        case 'Sunday':
            return 0
        case 'Monday':
            return 1
        case 'Tuesday':
            return 2
        case 'Wednesday':
            return 3
        case 'Thursday':
            return 4
        case 'Friday':
            return 5
        case 'Saturday':
            return 6
    }
}

const getDayProperName = (date:Date):DayofWeek=> {
    const dayNum = getDay(date)
    return dayNumToProperName(dayNum)
}

const dateToDayEntryTupple = (d:Date):[DayofWeek,DayEntry] => {
    const dayOfWeek = getDayProperName(d)
    return [dayOfWeek,{ dayOfWeek:dayOfWeek , date: startOfDay(d), data: [] }]
}

const newFullWeek = (date:Date):FullWeekObject=>{
    const sunday = startOfWeekYear(date, { weekStartsOn: 0 })
    const weekTupples: [DayofWeek, DayEntry][] = eachDayOfInterval({ start: sunday, end: endOfWeek(sunday) }).map(dateToDayEntryTupple)
    const fullweek = Object.fromEntries(weekTupples)
    return fullweek as FullWeekObject
}

export default newFullWeek