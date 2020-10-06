import React from 'react'
import { shallow } from 'enzyme'
// import toJSON from 'enzyme-to-json'
import AddTd from './AddTd'


test('should render Day correctly with no entries', () => {
    const wrapper = shallow(<AddTd index={0} day={{dayOfWeek:'Tuesday',date:new Date(1601401562455),data:[]}} dispatch={(x)=>x} />)
    expect(wrapper).toMatchSnapshot()
})