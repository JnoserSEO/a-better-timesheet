import { put, call, delay } from 'redux-saga/effects'
import { getLocalValue } from '../../database/localStorage'
import { getWeekFromDB } from './getWeekFromDB'

beforeAll(() => {
    //clear storage before test suite. Storage state is shared between tests.
    localStorage.clear();
    localStorage.setItem('Foo','Bar')
});


test('should grab week from database and send redux action',()=>{
    const gen = getWeekFromDB('Foo')

    expect(gen.next().value).toEqual(call(getLocalValue,'Foo'))
    expect(gen.next().value).toEqual(delay(100))
    expect(gen.next().value).toEqual(put({ type:'CHANGE_WEEK',state:'Bar'}))
})