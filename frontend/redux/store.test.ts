import allActions from './actions/all-actions'
import store from './store'

beforeEach(() => {
    beforeEach(() => {
        Date.now = jest.fn(() => 1601401562455); // 2020-9-29
    });
});


store.dispatch(allActions.weekActions.addEntry('Monday',{ hours: 4, name: 'Comp B' }))
store.getState()
test('entry should be added to the store on Tuesday', () => {
    store.dispatch(allActions.weekActions.addEntry('Tuesday', { hours: 1, name: 'Comp A' }))
    const newState = store.getState()
    expect(newState).toEqual({
        week:{
        Sunday: { dayOfWeek: 'Sunday', date: new Date('2020-09-27T00:00:00.000Z'), data: [] },
        Monday: { dayOfWeek: 'Monday', date: new Date('2020-09-28T00:00:00.000Z'), data: [{ "hours": 4, "name": "Comp B" }] },
        Tuesday: { dayOfWeek: 'Tuesday', date: new Date('2020-09-29T00:00:00.000Z'), data: [{ "hours": 1, "name": "Comp A" }] },
        Wednesday: { dayOfWeek: 'Wednesday', date: new Date('2020-09-30T00:00:00.000Z'), data: [] },
        Thursday: { dayOfWeek: 'Thursday', date: new Date('2020-10-01T00:00:00.000Z'), data: [] },
        Friday: { dayOfWeek: 'Friday', date: new Date('2020-10-02T00:00:00.000Z'), data: [] },
        Saturday: { dayOfWeek: 'Saturday', date: new Date('2020-10-03T00:00:00.000Z'), data: [] }
    }})
})

test('week reducer should update Tuesday entry to 4 hours', () => {

    store.dispatch(allActions.weekActions.updateEntry('Tuesday', { hours: 2, name: 'Comp A' },0))
    const newState = store.getState()
    expect(newState).toEqual({week:{
        Sunday: { dayOfWeek: 'Sunday', date: new Date('2020-09-27T00:00:00.000Z'), data: [] },
        Monday: { dayOfWeek: 'Monday', date: new Date('2020-09-28T00:00:00.000Z'), data: [{ "hours": 4, "name": "Comp B" }] },
        Tuesday: { dayOfWeek: 'Tuesday', date: new Date('2020-09-29T00:00:00.000Z'), data: [{ "hours": 2, "name": "Comp A" }] },
        Wednesday: { dayOfWeek: 'Wednesday', date: new Date('2020-09-30T00:00:00.000Z'), data: [] },
        Thursday: { dayOfWeek: 'Thursday', date: new Date('2020-10-01T00:00:00.000Z'), data: [] },
        Friday: { dayOfWeek: 'Friday', date: new Date('2020-10-02T00:00:00.000Z'), data: [] },
        Saturday: { dayOfWeek: 'Saturday', date: new Date('2020-10-03T00:00:00.000Z'), data: [] }
    }})
})

test('week reducer should remove entry from Monday', () => {
    store.dispatch(allActions.weekActions.removeEntry('Monday',0))
    const newState = store.getState()
    expect(newState).toEqual({
        week:{
            Sunday: { dayOfWeek: 'Sunday', date: new Date('2020-09-27T00:00:00.000Z'), data: [] },
            Monday: { dayOfWeek: 'Monday', date: new Date('2020-09-28T00:00:00.000Z'), data: [] },
            Tuesday: { dayOfWeek: 'Tuesday', date: new Date('2020-09-29T00:00:00.000Z'), data: [{ "hours": 2, "name": "Comp A" }] },
            Wednesday: { dayOfWeek: 'Wednesday', date: new Date('2020-09-30T00:00:00.000Z'), data: [] },
            Thursday: { dayOfWeek: 'Thursday', date: new Date('2020-10-01T00:00:00.000Z'), data: [] },
            Friday: { dayOfWeek: 'Friday', date: new Date('2020-10-02T00:00:00.000Z'), data: [] },
            Saturday: { dayOfWeek: 'Saturday', date: new Date('2020-10-03T00:00:00.000Z'), data: [] }
    }})
})
