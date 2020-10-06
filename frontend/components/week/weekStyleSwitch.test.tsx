import React from 'react'
import { shallow } from 'enzyme'
import WeekStyleSwitch from './WeekStyleSwitch'


test('should render Week with two timesheet entries', () => {
    const wrapper = shallow(<WeekStyleSwitch view={'5 day'} dispatch={(x) => x} />)
    expect(wrapper).toMatchSnapshot()
})