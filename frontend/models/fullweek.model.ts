import {EntryProps} from '../components/entry/Entry'

export type DayofWeek ='Sunday'|'Monday'|'Tuesday'|'Wednesday'|'Thursday'|'Friday'|'Saturday'

export type DayEntry = { dayOfWeek:DayofWeek, date: Date; data: EntryProps[] }

type FullWeek = [
    {dayOfWeek:'Sunday',date:Date;data:EntryProps[]},
    {dayOfWeek:'Monday',date:Date;data:EntryProps[]},
    {dayOfWeek:'Tuesday',date:Date;data:EntryProps[]},
    {dayOfWeek:'Wednesday',date:Date;data:EntryProps[]},
    {dayOfWeek:'Thursday',date:Date;data:EntryProps[]},
    {dayOfWeek:'Friday',date:Date;data:EntryProps[]},
    {dayOfWeek:'Saturday',date:Date;data:EntryProps[] },
]

export default FullWeek