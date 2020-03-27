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

function Step4({ prevStep, handleSubmit, email, setEmail }) {
  return (
    <div className={StepContainer}>
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
        <Button onClick={prevStep}>Previous</Button>
        <Button onClick={handleSubmit}>Créer!!</Button>
      </div>
    </div>
  )
}

Step4.propTypes = {
  prevStep: func.isRequired,
  handleSubmit: func.isRequired,
  email: string.isRequired,
  setEmail: func.isRequired,
}

export default Step4
