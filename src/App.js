import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Landing from './Landing'
import Configuration from './Configuration'
import Feed from './Feed'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/feed/:id">
          <Feed />
        </Route>

        <Route path="/configuration">
          <Configuration />
        </Route>

        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
