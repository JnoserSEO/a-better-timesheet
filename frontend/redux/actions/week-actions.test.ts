import actions from "./week-actions"
// import { DayofWeek } from '../../models/fullweek.model'
// import { EntryProps } from '../../components/entry/Entry'

test('add entry should return action object',()=>{
    const result = actions.addEntry('Tuesday', {hours: 1,name: 'Comp A'})
    expect(result).toEqual({
        type: 'ADD_ENTRY',
        dayOfWeek: 'Tuesday',
        entry: { hours: 1, name: 'Comp A' }
    })
})

test('update entry should return action object',()=>{
    const result = actions.updateEntry('Tuesday',{hours:2,name:'Comp A'},0)
    expect(result).toEqual({
        type: 'UPDATE_ENTRY',
        dayOfWeek: 'Tuesday',
        entry: {hours:2,name:'Comp A'},
        entryIndex: 0
    })
})

test('remove entry should return action object',()=>{
    const result = actions.removeEntry('Tuesday',0)
    expect(result).toEqual({
        type: 'REMOVE_ENTRY',
        dayOfWeek: 'Tuesday',
        entryIndex: 0
    })
})