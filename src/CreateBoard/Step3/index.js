import React from 'react'
import { func, string, number } from 'prop-types'

import {
  StepContainer,
  Intro,
  Important,
  GivewayOptions,
  GivewayOption,
  GivewayInput,
  Warning,
} from '../CreateBoard.module.css'
import Input from '../../commons/Components/Input'
import Radio from '../../commons/Components/Radio'

function Step3({ giveway, setGiveway, winnerRate, setWinnerRate }) {
  return (
    <div className={StepContainer}>
      <div className={Intro}>
        <h2>
          Reward your audience!
          <span role="img" aria-label="Gift">
            {' 🎁'}
          </span>
        </h2>
        <p>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          Up to <span className={Important}>3x more tweets</span> with gifts!
          <br />
          (We will send you a notification by e-mail for each winner so you can
          send them their gifts)
        </p>
      </div>
      <div className={GivewayOptions}>
        <div className={GivewayOption}>
          <Radio
            name="Multiple Giveway"
            checked={giveway === 'EVERY'}
            onChange={() => setGiveway('EVERY')}
          />
          <span>
            One reward every
            <Input
              type="number"
              min={50}
              className={GivewayInput}
              value={winnerRate}
              onChange={(e) => setWinnerRate(Number(e.target.value))}
            />
            tweets
          </span>
        </div>
        <div className={GivewayOption}>
          <Radio
            name="One Giveway"
            className={GivewayOption}
            checked={giveway === 'AT'}
            onChange={() => setGiveway('AT')}
          />
          <span>
            One reward at
            <Input
              type="number"
              min={50}
              className={GivewayInput}
              value={winnerRate}
              onChange={(e) => setWinnerRate(Number(e.target.value))}
            />
            tweets
          </span>
        </div>
        <div className={GivewayOption}>
          <Radio
            name="No Giveway"
            className={GivewayOption}
            checked={giveway === 'NONE'}
            onChange={() => setGiveway('NONE')}
          />
          <span>No reward</span>
        </div>
      </div>
      {winnerRate < 50 && giveway !== 'NONE' && (
        <span className={Warning}>Minimum 50 tweets per winner</span>
      )}
    </div>
  )
}

Step3.propTypes = {
  giveway: string.isRequired,
  setGiveway: func.isRequired,
  winnerRate: number.isRequired,
  setWinnerRate: func.isRequired,
}

export default Step3
