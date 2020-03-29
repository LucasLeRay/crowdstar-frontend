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
  function handleSubmit(e) {
    e.preventDefault()
    nextStep()
  }

  function handleChange(e) {
    const {
      target: { value },
    } = e
    setHashtag(value)
  }

  return (
    <div className={StepContainer}>
      <form onSubmit={handleSubmit}>
        <div className={StepBody}>
          <h2>What is your</h2>
          <span className={HashtagWrapper}>
            <span>#</span>
            <Input
              className={HashtagInput}
              value={hashtag}
              onChange={handleChange}
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
            disabled={!(/^[A-Za-z0-9]*$/.test(hashtag) && hashtag.length > 2)}
            colorBackground
            label="Next"
            size="large"
            type="submit"
          />
        </div>
      </form>
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
