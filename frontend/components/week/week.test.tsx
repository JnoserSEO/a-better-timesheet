import React from 'react'
import {  mount } from 'enzyme'
import store from '../../redux/store'
import { Provider } from 'react-redux'
import Week from './Week'
import { FullWeekTuple } from '../../models/fullweek.model'

beforeEach(() => {
    beforeEach(() => {
        Date.now = jest.fn(() => 1601401562455); // 2020-9-29
    });
});

const days: FullWeekTuple = [{ dayOfWeek: 'Sunday', date: new Date('2020-09-27T00:00:00.000Z'), data: [] },
{ dayOfWeek: 'Monday', date: new Date('2020-09-28T00:00:00.000Z'), data: [{ "hours": 4, "name": "Comp B" }] },
{ dayOfWeek: 'Tuesday', date: new Date('2020-09-29T00:00:00.000Z'), data: [{ "hours": 1, "name": "Comp A" }] },
{ dayOfWeek: 'Wednesday', date: new Date('2020-09-30T00:00:00.000Z'), data: [] },
{ dayOfWeek: 'Thursday', date: new Date('2020-10-01T00:00:00.000Z'), data: [] },
{ dayOfWeek: 'Friday', date: new Date('2020-10-02T00:00:00.000Z'), data: [] },
{ dayOfWeek: 'Saturday', date: new Date('2020-10-03T00:00:00.000Z'), data: [] }]

test('should render Week with two timesheet entries', () => {
    const wrapper = mount(<Provider store={store}><Week days={days} view={'5 day'} dispatch={(x) => x} /></Provider>)
    expect(wrapper.find('.timesheet-entry')).toHaveLength(2)
    expect(wrapper.find('.day-total')).toHaveLength(5)
    expect(wrapper.find('.day-info')).toHaveLength(5)
    expect(wrapper.find('.add-td')).toHaveLength(5)
    expect(wrapper).toMatchSnapshot()
})