import React from 'react'
import { shallow } from 'enzyme'
import Hours from './Hours'
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


test('should render Hours correctly with no entries', () => {
    const wrapper = shallow(<Hours akey={3} days={days} view={'5 day'} />)
    expect(wrapper.find).toMatchSnapshot()
})


