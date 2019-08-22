import {createAction, handleAction} from 'redux-actions'
import {combineReducers} from 'redux'
import * as R from 'ramda'

const createActionWithPrefix = type => createAction(`CITIES/${type}`)
export const getSearch = R.prop('search')

export const fetchSearch = createActionWithPrefix('FETCH_SEARCH')
export const setSearch = createActionWithPrefix('SET_SEARCH')

export const item = handleAction(
  setSearch,
  (state, {payload: cities}) => cities,
  []
)

export const getItem = R.pipe(
  getSearch,
  R.prop('item')
)

export const setIsLoading = createActionWithPrefix('SET_IS_LOADING')

export const isLoading = handleAction(
  setIsLoading,
  (state, {payload: isLoading}) => isLoading,
  false
)

export const getIsLoading = R.pipe(
  getSearch,
  R.prop('isLoading')
)

const search = combineReducers({item, isLoading})

export default search