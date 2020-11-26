import { combineReducers } from 'redux'

import { userRegisterReducer, userSigninReducer } from './user'

const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
    userSignin: userSigninReducer
})

export default rootReducer