import React from 'react'
import { func, string } from 'prop-types'
import {
  StepContainer,
  ButtonWrapper,
  StepBody,
  HashtagWrapper,
  HashtagInput,
} from '../CreateBoard.module.css'
import Button from '../../commons/Components/Button'
import Input from '../../commons/Components/Input'

function Step1({ handleCancel, nextStep, hashtag, setHashtag }) {
  function onNextStep() {
    nextStep()
  }

  return (
    <div className={StepContainer}>
      <div className={StepBody}>
        <h2>What is your</h2>
        <span className={HashtagWrapper}>
          <span>#</span>
          <Input
            className={HashtagInput}
            value={hashtag}
            onChange={e => setHashtag(e.target.value)}
            placeholder="hashtag"
            style={{ width: hashtag.length * 55 }}
          />
          <span>?</span>
        </span>
      </div>
      <div className={ButtonWrapper}>
        <Button
          colorBackground
          label="Cancel"
          size="large"
          onClick={handleCancel}
        />
        <Button
          colorBackground
          label="Next"
          size="large"
          onClick={onNextStep}
        />
      </div>
    </div>
  )
}

Step1.propTypes = {
  handleCancel: func.isRequired,
  nextStep: func.isRequired,
  hashtag: string.isRequired,
  setHashtag: func.isRequired,
}

export default Step1
