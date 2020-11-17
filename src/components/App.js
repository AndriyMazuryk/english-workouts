import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home, IrregularVerbs } from '../pages'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/irregular-verbs" component={IrregularVerbs} />
      </Switch>
    </Router>
  )
}
