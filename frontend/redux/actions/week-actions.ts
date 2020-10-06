import { DayofWeek } from '../../models/fullweek.model'
import { EntryProps } from '../../components/entry/Entry'
import { FullWeekObject } from '../../models/fullweek.model'

const addEntry = (dayOfWeek:DayofWeek,entry:EntryProps)=>{
    return {
        type: 'ADD_ENTRY',
        dayOfWeek:dayOfWeek,
        entry:entry
    }
}

const updateEntry = (dayOfWeek: DayofWeek, entry: EntryProps,entryIndex: number) => {
    return {
        type: 'UPDATE_ENTRY',
        dayOfWeek: dayOfWeek,
        entry: entry,
        entryIndex:entryIndex
    }
}

const removeEntry = (dayOfWeek: DayofWeek,entryIndex: number) => {
    return {
        type: 'REMOVE_ENTRY',
        dayOfWeek: dayOfWeek,
        entryIndex: entryIndex
    }
}

const changeWeek = (state:FullWeekObject) =>{
    return {
        type:'CHANGE_WEEK',
        state:state
    }
}

export default {
    addEntry,
    updateEntry,
    removeEntry,
    changeWeek
}
