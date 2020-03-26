import React, { useState } from 'react'
import { func, string, number } from 'prop-types'
import { Select } from '@bit/grommet.grommet.select'
import { CheckBox } from '@bit/grommet.grommet.check-box'

import {
  StepContainer,
  ButtonWrapper,
  StepBody,
  GivewayWrapper,
  GivewayOption,
} from '../CreateBoard.module.css'
import Button from '../../commons/Components/Button'
import Input from '../../commons/Components/Input'

function Step3({
  prevStep,
  nextStep,
  giveway,
  setGiveway,
  winnerRate,
  setWinnerRate,
}) {
  const [isGiveway, setIsGiveway] = useState(false)
  function onNextStep() {
    nextStep()
  }

  return (
    <div className={StepContainer}>
      <div className={StepBody}>
        <div>
          <div className={GivewayWrapper}>
            <span>Give gifts to your Tweeters?</span>
            <CheckBox
              checked={isGiveway}
              onChange={e => setIsGiveway(e.target.checked)}
            />
          </div>
          {isGiveway && (
            <div className={GivewayOption}>
              <span>Give a gift</span>
              <Select value={giveway} options={['every', 'at']} />
              <span>tweets</span>
              <Input
                value={winnerRate}
                onChange={e => setWinnerRate(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>
      <div className={ButtonWrapper}>
        <Button onClick={prevStep}>Previous</Button>
        <Button onClick={onNextStep}>Next</Button>
      </div>
    </div>
  )
}

Step3.propTypes = {
  prevStep: func.isRequired,
  nextStep: func.isRequired,
  giveway: string.isRequired,
  setGiveway: func.isRequired,
  winnerRate: number.isRequired,
  setWinnerRate: func.isRequired,
}

export default Step3
