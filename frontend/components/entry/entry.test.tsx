import React from 'react'
import { shallow } from 'enzyme'
import store from '../../redux/store'
import { Provider } from 'react-redux'
import { Entry } from './Entry'



test('should render Entry with 1 hour', () => {
    const wrapper = shallow(<Provider store={store}><Entry hours={1} name={'Comp A'} dayOfWeek='Friday' index={0} /></Provider>)
    expect(wrapper.find).toMatchSnapshot()
})

test('should render Entry with 2 hours', () => {
    const wrapper = shallow(<Provider store={store}><Entry hours={2} name={'Comp A'} dayOfWeek='Friday' index={0} /></Provider>)
    expect(wrapper.find).toMatchSnapshot()
})

test('should render Entry with 4 hours', () => {
    const wrapper = shallow(<Provider store={store}><Entry hours={8} name={'Comp A'} dayOfWeek='Friday' index={0} /></Provider>)
    expect(wrapper.find).toMatchSnapshot()
})


