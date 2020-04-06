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
  GiveawayGiftInput,
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

  function validInputs() {
    if (isGiveway && winnerRate < 1) {
      return false
    }
    return (
      ['NONE', 'at', 'every'].includes(giveway) &&
      !Number.isNaN(winnerRate) &&
      winnerRate >= 0
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (isGiveway) {
      setGiveway(giveway.toUpperCase())
    } else {
      setGiveway('NONE')
      setWinnerRate(0)
    }
    nextStep()
  }

  return (
    <div className={StepContainer}>
      <form onSubmit={handleSubmit}>
        <div className={StepBody}>
          <div>
            <div className={GivewayWrapper}>
              <span>Give gifts to your Tweeters?</span>
              <CheckBox
                checked={isGiveway}
                onChange={(e) => {
                  if (e.target.checked) {
                    setGiveway('every')
                  }
                  setIsGiveway(e.target.checked)
                }}
              />
            </div>
            {isGiveway && (
              <>
                <div className={GivewayOption}>
                  <span>Give a gift</span>
                  <div className={GiveawayGiftInput}>
                    <Select
                      className={GivewaySelect}
                      value={giveway}
                      options={['every', 'at']}
                    />
                    <Input
                      type="number"
                      className={GivewayInput}
                      value={winnerRate}
                      onChange={(e) => setWinnerRate(Number(e.target.value))}
                    />
                  </div>
                  <span>tweets</span>
                </div>
                <Range
                  value={winnerRate}
                  min={10}
                  max={1000}
                  step={10}
                  onChange={(e) => setWinnerRate(Number(e.target.value))}
                />
              </>
            )}
          </div>
        </div>
        <div className={ButtonWrapper}>
          <Button label="Previous" size="large" onClick={prevStep} />
          <Button
            disabled={!validInputs()}
            label="Next"
            size="large"
            type="submit"
          />
        </div>
      </form>
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
