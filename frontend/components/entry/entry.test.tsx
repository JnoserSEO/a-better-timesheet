import React from 'react'
import { shallow } from 'enzyme'
import { Entry } from './Entry'



test('should render Entry with 1 hour', () => {
    const wrapper = shallow(<Entry hours={1} name={'Comp A'} />)
    expect(wrapper.find).toMatchSnapshot()
})

test('should render Entry with 2 hours', () => {
    const wrapper = shallow(<Entry hours={2} name={'Comp A'} />)
    expect(wrapper.find).toMatchSnapshot()
})

test('should render Entry with 4 hours', () => {
    const wrapper = shallow(<Entry hours={8} name={'Comp A'} />)
    expect(wrapper.find).toMatchSnapshot()
})


