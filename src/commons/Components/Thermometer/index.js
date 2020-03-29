import React from 'react'

import img from './gift.png'
import {
  Container,
  GiftImage,
  Glass,
  Amount,
  Bulb,
  RedCircle,
  Filler,
} from './style.module.css'

function Thermometer({ current, max, ...props }) {
  
    const styles = {
        amount: {
            height: `${current / max * 100}%`,
        }
    }

    const filler = (current > 0) ? <div className={Filler}></div> : <div></div>


    return (
    <div>
      <div className={Container}>
        <img className={GiftImage} src={img}></img>
        <span className={Glass}>
          <span className={Amount} style={styles.amount}></span>
        </span>
        <div className={Bulb}>
          <span className={RedCircle}>{current}</span>
          {/* <div className={Filler}></div> */}
            {filler}
        </div>
      </div>
    </div>
  )
}

Thermometer.propTypes = {
    max: Number,
  }
  
  Thermometer.defaultProps = {
    current : '0',
  }

export default Thermometer
