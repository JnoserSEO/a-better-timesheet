import { FullWeekObject } from '../../models/fullweek.model';
import weekReducer from './week-reducers'
import newFullWeek from '../../utility/newFullWeek'

beforeEach(() => {
    beforeEach(() => {
        Date.now = jest.fn(() => 1601401562455); // 2020-9-29
    });
});
const WEEK = newFullWeek(new Date(1601401562455))
const STATE = weekReducer(WEEK, {
    type: 'ADD_ENTRY',
    dayOfWeek: 'Monday',
    entry: { hours: 4, name: 'Comp B' }
}) as FullWeekObject//should have index of 0

test('week reducer should add entry test',()=>{
    const newState = weekReducer(STATE, {
        type: 'ADD_ENTRY',
        dayOfWeek: 'Tuesday',
        entry: { hours: 1, name: 'Comp A' }
    })
    expect(newState).toEqual({
        Sunday: { dayOfWeek: 'Sunday', date: new Date('2020-09-27T00:00:00.000Z'), data: []},
        Monday: { dayOfWeek:'Monday', date: new Date('2020-09-28T00:00:00.000Z'), data: [{"hours": 4,"name": "Comp B"}]},
        Tuesday: { dayOfWeek:'Tuesday', date: new Date('2020-09-29T00:00:00.000Z'), data: [{"hours": 1,"name": "Comp A"}]},
        Wednesday: { dayOfWeek:'Wednesday', date: new Date('2020-09-30T00:00:00.000Z'), data: []},
        Thursday: { dayOfWeek:'Thursday', date: new Date('2020-10-01T00:00:00.000Z'), data: []},
        Friday: { dayOfWeek:'Friday', date: new Date('2020-10-02T00:00:00.000Z'), data: []},
        Saturday: { dayOfWeek:'Saturday', date: new Date('2020-10-03T00:00:00.000Z'), data: []}})
})

test('week reducer should update Tuesday entry to 4 hours', () => {
    const newState = weekReducer(STATE, {
        type: 'UPDATE_ENTRY',
        dayOfWeek: 'Monday',
        entry: { hours: 2, name: 'Comp A' },
        entryIndex:0
    })

    expect(newState).toEqual({
        Sunday: { dayOfWeek: 'Sunday', date: new Date('2020-09-27T00:00:00.000Z'), data: [] },
        Monday: { dayOfWeek: 'Monday', date: new Date('2020-09-28T00:00:00.000Z'), data: [{ "hours": 2, "name": "Comp A" }] },
        Tuesday: { dayOfWeek: 'Tuesday', date: new Date('2020-09-29T00:00:00.000Z'), data: [] },
        Wednesday: { dayOfWeek: 'Wednesday', date: new Date('2020-09-30T00:00:00.000Z'), data: [] },
        Thursday: { dayOfWeek: 'Thursday', date: new Date('2020-10-01T00:00:00.000Z'), data: [] },
        Friday: { dayOfWeek: 'Friday', date: new Date('2020-10-02T00:00:00.000Z'), data: [] },
        Saturday: { dayOfWeek: 'Saturday', date: new Date('2020-10-03T00:00:00.000Z'), data: [] }
    })
})

test('week reducer should remove entry from Monday', () => {
    const newState = weekReducer(STATE, {
        type: 'REMOVE_ENTRY',
        dayOfWeek: 'Monday',
        entryIndex: 0
    })
    expect(newState).toEqual({
        Sunday: { dayOfWeek: 'Sunday', date: new Date('2020-09-27T00:00:00.000Z'), data: [] },
        Monday: { dayOfWeek: 'Monday', date: new Date('2020-09-28T00:00:00.000Z'), data: [] },
        Tuesday: { dayOfWeek: 'Tuesday', date: new Date('2020-09-29T00:00:00.000Z'), data: [] },
        Wednesday: { dayOfWeek: 'Wednesday', date: new Date('2020-09-30T00:00:00.000Z'), data: [] },
        Thursday: { dayOfWeek: 'Thursday', date: new Date('2020-10-01T00:00:00.000Z'), data: [] },
        Friday: { dayOfWeek: 'Friday', date: new Date('2020-10-02T00:00:00.000Z'), data: [] },
        Saturday: { dayOfWeek: 'Saturday', date: new Date('2020-10-03T00:00:00.000Z'), data: [] }
    })
})


