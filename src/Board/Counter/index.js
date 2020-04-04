import React from 'react'
import { number, bool, string } from 'prop-types'

import { ReactComponent as Gift } from './gift.svg'
import {
  Container,
  GiftImage,
  Glass,
  Amount,
  Bulb,
  RedCircle,
  Filler,
} from './Counter.module.css'

function Counter({ current, rate, repeat, className }) {
  const prev = repeat ? current - (current % rate) : 0
  const styles = {
    amount: {
      height: `${((current - prev) / rate) * 100}%`,
      maxHeight: '100%',
    },
  }

  return (
    <div>
      <div className={`${Container} ${className}`}>
        <Gift className={GiftImage} alt="gift" />
        <span className={Glass}>
          <span className={Amount} style={styles.amount} />
        </span>
        <div className={Bulb}>
          <span className={RedCircle}>{current}</span>
          {current % rate > 0 && <div className={Filler} />}
        </div>
      </div>
    </div>
  )
}

Counter.propTypes = {
  current: number.isRequired,
  rate: number.isRequired,
  repeat: bool.isRequired,
  className: string,
}

Counter.defaultProps = {
  className: '',
}

export default Counter
