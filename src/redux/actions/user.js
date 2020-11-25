import Axios from 'axios'
import Cookie from 'js-cookie'
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from '../constants/user'

const register = (name, email, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } })
    try {
        const { data } = await Axios.post('/api/users/register', { name, email, password })
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
        Cookie.set('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error.message })
    }
}

export { register }