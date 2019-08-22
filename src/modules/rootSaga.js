import {all} from 'redux-saga/effects'
import {searchSaga} from './search'

const rootSaga = function*() {
  yield all([searchSaga()])
}

export default rootSaga