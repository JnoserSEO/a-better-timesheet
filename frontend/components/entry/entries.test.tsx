import React from 'react'
import { mount } from 'enzyme'
import { Entries } from './Entries'


test('should render Entries with two timesheet entries', () => {
    const wrapper = mount(<Entries entries={[{hours:2,name:'Comp A'},{hours:1,name:'Comp B'}]} />)
    expect(wrapper.find('.timesheet-entry')).toHaveLength(2)
    expect(wrapper.find).toMatchSnapshot()
})