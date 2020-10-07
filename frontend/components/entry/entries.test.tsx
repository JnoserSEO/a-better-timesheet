import React from 'react'
import { mount } from 'enzyme'
import store from '../../redux/store'
import { Provider } from 'react-redux'
import { Entries } from './Entries'


test('should render Entries with two timesheet entries', () => {
    const wrapper = mount(<Provider store={store}><Entries entries={[{hours:2,name:'Comp A'},{hours:1,name:'Comp B'}]} dayOfWeek={'Sunday'} /></Provider>)
    expect(wrapper.find('.timesheet-entry')).toHaveLength(2)
    expect(wrapper.find).toMatchSnapshot()
})