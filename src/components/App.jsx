import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Home, IrregularVerbs, Register } from '../pages'

import store from '../redux/store'
import Signin from '../pages/Signin'

export default function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/irregular-verbs" component={IrregularVerbs} />
          <Route path="/register" component={Register} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </Provider>
    </Router>
  )
}
