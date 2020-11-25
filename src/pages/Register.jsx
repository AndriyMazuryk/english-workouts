import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { register } from '../redux/actions/user'

export default function Register(props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const userRegister = useSelector(state => state.userRegister)
  const { loading, userInfo, error } = userRegister
  const dispatch = useDispatch()
  const [validationError, setValidationError] = useState('')

  useEffect(() => {

    if (userInfo) {
      props.history.push('/')
    }

    if (validationError) {
      setTimeout(() => setValidationError(''), 5000)
    }
  }, [userInfo, validationError])

  const submitHandler = (e) => {
    e.preventDefault()

    if (password === rePassword){
      dispatch(register(name, email, password))
    } else {
      setValidationError('Passwords don\'t match')
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {validationError && <div>Validation Error: {validationError}</div>}
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Passowrd</label>
        <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} />
        <label htmlFor="re-password">Re-Password:</label>
        <input type="password" name="re-password" id="re-password" onChange={e => setRePassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
