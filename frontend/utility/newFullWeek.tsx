import FullWeekArray, {DayEntry,DayofWeek} from '../models/fullweek.model'
import { isSunday,startOfDay,getDay, endOfWeek, eachDayOfInterval } from 'date-fns'

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

const dateToDayEntry = (d:Date):DayEntry => ({ dayOfWeek: getDayProperName(d), date: startOfDay(d), data: [] })

const newFullWeek = (sunday:Date):FullWeek|Error=>{
    if(isSunday(sunday)){
        const fullweek:DayEntry[] = eachDayOfInterval({ start: sunday, end: endOfWeek(sunday) }).map(dateToDayEntry)
        if(fullweek.length === 7 && isFullWeek(fullweek)){
            return fullweek as FullWeek  
        }
    }
    return new Error('Date is not Sunday')
}

const isFullWeek = (partialWeek:DayEntry[]):boolean =>{
    if(partialWeek.length !== 7){
        return false
    }
    return partialWeek.every((e, index) => e.dayOfWeek === dayNumToProperName(index as dayNum))
}

export default newFullWeek