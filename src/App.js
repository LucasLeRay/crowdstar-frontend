import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Landing from './Landing'
import CreateBoard from './CreateBoard'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/new">
          <CreateBoard />
        </Route>

        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
