import { combineReducers } from 'redux'

import { userRegisterReducer } from './user'

const rootReducer = combineReducers({
    userRegister: userRegisterReducer
})

export default rootReducer