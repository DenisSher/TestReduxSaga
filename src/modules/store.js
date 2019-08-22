import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)

export default store