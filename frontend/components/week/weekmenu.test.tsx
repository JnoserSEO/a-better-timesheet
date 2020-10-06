import React from 'react'
import { mount } from 'enzyme'
import WeekMenu from './WeekMenu'


test('should render WeekMenu', () => {
    const wrapper = mount(<WeekMenu view={'5 day'} dispatch={(x) => x} />)
    expect(wrapper.find).toMatchSnapshot()
})