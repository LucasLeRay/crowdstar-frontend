import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import components
import Landing from './Landing/Landing'
import Configuration from './Configuration/Configuration'
import Feed from './Feed/Feed'

function App() {
  return (
    <div>
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
    </div>
  )
}

export default App
