import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Landing from './Landing'
import CreateBoard from './CreateBoard'
import Board from './Board'
import Billing from './Billing'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/new">
          <CreateBoard />
        </Route>

        <Route path="/board/:name">
          <Board />
        </Route>

        <Route path="/billing/:name/">
          <Billing />
        </Route>

        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
