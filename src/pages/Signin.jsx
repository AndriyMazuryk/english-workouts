import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { signin } from '../redux/actions/user'

export default function Signin(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userSignin = useSelector(state => state.userSignin)
  const { loading, userInfo, error } = userSignin
  const dispatch = useDispatch()

  useEffect(() => {
    if (userInfo) {
      props.history.push('/')
    }
  }, [userInfo])

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(signin(email, password))
  }

  return (
    <div>
      { loading && <div>Loading...</div>}
      { error && <div>Error: {error}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} />
        <button type="submit">Sign in</button>
      </form>
      <Link to="/register">Sign up</Link>
    </div>
  )
}
