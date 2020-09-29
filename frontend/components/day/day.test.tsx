import React from 'react'
import { shallow } from 'enzyme'
import Day from './Day'

test('should render Day correctly',()=>{
    const wrapper = shallow(<Day date={new Date()} entries={[]} />)
    console.log(wrapper)
})