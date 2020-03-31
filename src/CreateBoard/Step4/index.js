import React, { useState } from 'react'
import { func, string } from 'prop-types'
import { PulseLoader } from 'react-spinners'
import {
  StepContainer,
  ButtonWrapper,
  StepBody,
  AskEmail,
  Email,
  LoadingWrapper,
} from '../CreateBoard.module.css'
import Button from '../../commons/Components/Button'
import Input from '../../commons/Components/Input'

function Step4({ prevStep, nextStep, email, setEmail }) {
  const [loading, setLoading] = useState(false)

  function validInputs() {
    return (
      /^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$/.test(
        email,
      ) && email.length > 0
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    nextStep()
  }

  return (
    <div className={StepContainer}>
      {loading ? (
        <div className={LoadingWrapper}>
          <PulseLoader size={30} margin={10} color="#1da1f2" />
        </div>
      ) : (
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
      )}
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
