import React from 'react'
import { func, string } from 'prop-types'
import {
  StepContainer,
  ButtonWrapper,
  StepBody,
  AskEmail,
  Email,
} from '../CreateBoard.module.css'
import Button from '../../commons/Components/Button'
import Input from '../../commons/Components/Input'

function Step4({ prevStep, nextStep, email, setEmail }) {
  function validInputs() {
    return (
      /^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$/.test(
        email,
      ) && email.length > 0
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    nextStep()
  }

  return (
    <div className={StepContainer}>
      <form onSubmit={handleSubmit}>
        <div className={StepBody}>
          <div className={AskEmail}>
            <span>Almost done!</span>
            <span>What is your email address?</span>
            <Input
              className={Email}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={ButtonWrapper}>
          <Button label="Previous" size="large" onClick={prevStep} />
          <Button
            disabled={!validInputs()}
            label="Create!"
            size="large"
            type="submit"
          />
        </div>
      </form>
    </div>
  )
}

Step4.propTypes = {
  prevStep: func.isRequired,
  nextStep: func.isRequired,
  email: string.isRequired,
  setEmail: func.isRequired,
}

export default Step4
