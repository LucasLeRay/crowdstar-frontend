import React from 'react'
import DesignComponent from './Design/DesignComponent'
import { Link, useHistory } from 'react-router-dom'

import './styles.css'

const nextStep = () => {
  console.log('yeet')
}

function WindowComponent() {
  let state = 0

  return (
    <div className="window">
      <h1>Create a board</h1>
      <div className="childWindow">
        <DesignComponent />
      </div>
      <div className="bottom">
        <div></div>
        <Link to="/">
          <button className="twitter-button">
            Cancel
          </button>
        </Link>
        <button onClick={nextStep}>Click me</button>
        <button className="twitter-button">Next</button>
        <div></div>
      </div>
    </div>
  )
}

export default WindowComponent
