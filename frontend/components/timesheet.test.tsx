import React from 'react'
import { mount } from 'enzyme'
import store from '../redux/store'
import { Provider } from 'react-redux'
import TimeSheets from './timesheet'

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

test('should add a timesheet entry', () => {
    const wrapper = mount(<Provider store={store}><TimeSheets /></Provider>)
    wrapper.find('.add').at(0).simulate('click')
    wrapper.find('input').at(0).simulate('change', { target: { value: 'Comp A' } })
    wrapper.find('input').at(1).simulate('change', { target: { value: 1 } })
    wrapper.find('#entry-submit').simulate('click')
    expect(wrapper.find('.timesheet-entry')).toHaveLength(1)
    // console.log(wrapper)
})

test('should add and remove a timesheet entry', () => {
    const wrapper = mount(<Provider store={store}><TimeSheets /></Provider>)
    expect(wrapper.find('.timesheet-entry')).toHaveLength(1)
    wrapper.find('.timesheet-entry-delete').simulate('click')
    expect(wrapper.find('.timesheet-entry')).toHaveLength(0)
    // console.log(wrapper)
})