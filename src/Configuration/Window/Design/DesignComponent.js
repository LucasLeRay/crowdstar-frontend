import React from 'react'
import './styles.css'
import { SketchPicker } from 'react-color'

function DesignComponent() {
  return (
    <div className="col">
      <div className="row">
        <div>Choose your background color</div>
        <div>
          <input type="color" id="html5colorpicker"></input>{' '}
        </div>
        {/* <SketchPicker /> */}
      </div>
      <div className="row">
        <div>Choose your banner</div>
        <input
          id="car"
          type="file"
          accept="image/*"
        />
      </div>
      <div className="row">
        <div>Choose your logo title</div>
        <input type="text"/>
      </div>
    </div>
  )
}

export default DesignComponent
