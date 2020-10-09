import { getLocalValue } from '../../database/localStorage'
import { put, call, delay, all } from 'redux-saga/effects'

export function* getWeekFromDB(key:string) {
    yield call(getLocalValue,key)
    yield delay(100) //simulate async call
    yield put({ type:'CHANGE_WEEK',state:'Bar'})
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga(key:string) {
    yield all([
        getWeekFromDB(key)
    ])
}