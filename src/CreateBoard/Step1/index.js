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
            style={{ width: hashtag.length * 46 }}
          />
          <span>?</span>
        </span>
      </div>
      <div className={ButtonWrapper}>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={onNextStep}>Next</Button>
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
