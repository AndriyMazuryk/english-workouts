import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'

import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const userInfo = Cookie.getJSON('userInfo') || null

const initialState = {}

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

export default store