import React from 'react'
import { mount } from 'enzyme'
import store from '../../redux/store'
import { Provider } from 'react-redux'
import WeekModal from './WeekModal'

beforeEach(() => {
    beforeEach(() => {
        Date.now = jest.fn(() => 1601401562455); // 2020-9-29
    });
});

test('should render App', () => {
    const wrapper = mount(<Provider store={store}><WeekModal day={{dayOfWeek: 'Sunday',date: new Date(),data: [],}} dispatch={(x)=>x} /></Provider>)
    expect(wrapper).toMatchSnapshot()
})
