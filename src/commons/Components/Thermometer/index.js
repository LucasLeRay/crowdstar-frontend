import React from 'react'

import img from './gift.png'
import {
  Container,
  GiftImage,
  Glass,
  Total,
  Amount,
  Bulb,
  RedCircle,
  Filler,
} from './style.module.css'

function Thermometer() {
  return (
    <div>
      <div className={Container}>
        <img className={GiftImage} src={img}></img>
        <span className={Glass}>
          {/* <strong className={Total}>30%</strong> */}
          <span className={Amount}></span>
        </span>
        <div className={Bulb}>
          <span className={RedCircle}>1000</span>
          <span className={Filler}></span>
        </div>
      </div>
    </div>
  )
}

export default Thermometer
