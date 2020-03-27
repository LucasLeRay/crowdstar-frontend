import React, { useState } from 'react'
import { func, string, number } from 'prop-types'

import {
  StepContainer,
  ButtonWrapper,
  StepBody,
  GivewayWrapper,
  GivewayOption,
  GivewaySelect,
  GivewayInput,
} from '../CreateBoard.module.css'
import Button from '../../commons/Components/Button'
import Input from '../../commons/Components/Input'
import Select from '../../commons/Components/Select'
import Range from '../../commons/Components/Range'
import CheckBox from '../../commons/Components/CheckBox'

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
            <>
              <div className={GivewayOption}>
                <span>Give a gift</span>
                <Select
                  className={GivewaySelect}
                  value={giveway}
                  options={['every', 'at']}
                />
                <Input
                  className={GivewayInput}
                  value={winnerRate}
                  onChange={e => setWinnerRate(e.target.value)}
                />
                <span>tweets</span>
              </div>
              <Range
                value={winnerRate}
                min={10}
                max={1000}
                step={10}
                onChange={e => setWinnerRate(e.target.value)}
              />
            </>
          )}
        </div>
      </div>
      <div className={ButtonWrapper}>
        <Button label="Previous" size="large" onClick={prevStep} />
        <Button label="Next" size="large" onClick={onNextStep} />
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
