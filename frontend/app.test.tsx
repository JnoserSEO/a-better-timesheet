import React from 'react'
import { mount } from 'enzyme'
import store from './redux/store'
import { Provider } from 'react-redux'
import TimeSheets from '../frontend/components/timesheet'

beforeEach(() => {
    beforeEach(() => {
        Date.now = jest.fn(() => 1601401562455); // 2020-9-29
    });
});

test('should render App', () => {
    const wrapper = mount(<Provider store={store}><TimeSheets /></Provider>)
    expect(wrapper).toMatchSnapshot()
    // console.log(wrapper)
})