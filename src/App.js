import React from 'react'
import logo from './logo.svg'
import './App.css'
import Landing from './Landing/Landing'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/feed/:id">
            <Landing />
          </Route>

          <Route path="/configuration">
            <Landing />
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
