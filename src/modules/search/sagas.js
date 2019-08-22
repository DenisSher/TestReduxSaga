import * as Manager from "./Manager";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchSearch, setSearch, setIsLoading } from "./state";

export const fetchSearchSaga = function*({payload: query}) {
  yield put(setIsLoading(true));
  const data = yield call(Manager.getSearch, query);
  yield put(setSearch(data));
  yield put(setIsLoading(false));
};

const searchSaga = function*() {
  yield takeLatest(fetchSearch, fetchSearchSaga)
}

export default searchSaga