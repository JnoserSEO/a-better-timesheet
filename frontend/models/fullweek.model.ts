import EntryData from './entryData.model'

export type DayofWeek ='Sunday'|'Monday'|'Tuesday'|'Wednesday'|'Thursday'|'Friday'|'Saturday'

export type DayEntry = { dayOfWeek:DayofWeek, date: Date; data: EntryData[]}

export type FullWeekTuple = [
    Sunday:DayEntry,
    Monday:DayEntry,
    Tuesday:DayEntry,
    Wednesday:DayEntry,
    Thursday:DayEntry,
    Friday:DayEntry,
    Saturday:DayEntry,
]

interface DayofWeekIndexed {
    [key: string]: DayEntry;
}

export interface FullWeekObject extends DayofWeekIndexed {
    Sunday: DayEntry,
    Monday: DayEntry,
    Tuesday: DayEntry,
    Wednesday: DayEntry,
    Thursday: DayEntry,
    Friday: DayEntry,
    Saturday: DayEntry,
}

export default FullWeekTuple