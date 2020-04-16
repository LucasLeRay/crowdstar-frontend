import React from 'react'
import { func, string } from 'prop-types'
import { StepContainer, Email, Intro } from '../CreateBoard.module.css'
import Input from '../../commons/Components/Input'

function Step4({ email, setEmail }) {
  return (
    <div className={StepContainer}>
      <div className={Intro}>
        <h2>
          One finale step!
          <span role="img" aria-label="Rocket">
            {' 🚀'}
          </span>
        </h2>
        <p>
          We need your e-mail address to send you the link of your board (and
          the winners of your gifts).
        </p>
      </div>
      <p>What is your email address?</p>
      <Input
        className={Email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  )
}

Step4.propTypes = {
  email: string.isRequired,
  setEmail: func.isRequired,
}

export default Step4
