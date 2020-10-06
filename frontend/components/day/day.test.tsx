import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Day from './Day'


//<td class="hours-td"><div class="timesheet-entries"><div></div></div></td>
beforeEach(() => {
    beforeEach(() => {
        Date.now = jest.fn(() => 1601401562455); // 2020-9-29
    });
});

test('should render Day correctly with no entries',()=>{
    const wrapper = shallow(<Day date={new Date()} entries={[]} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
