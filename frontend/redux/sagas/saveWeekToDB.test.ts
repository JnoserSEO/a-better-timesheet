import { put, call, delay } from 'redux-saga/effects'
import { saveLocalValue } from '../../database/localStorage'
import { saveWeekToDB } from './getWeekFromDB'

beforeAll(() => {
    //clear storage before test suite. Storage state is shared between tests.
    localStorage.clear();
});

test('should save week to database', () => {
    const gen = saveWeekToDB('Foo')
    expect(gen.next().value).toEqual(call(saveLocalValue,'Foo','Bar'))
    expect(gen.next().value).toEqual(delay(100))
    expect(gen.next().value).toEqual(put({ type: 'SAVE_WEEK_DONE'}))
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
})