import React from 'react'
import { string } from 'prop-types'
import { Link } from 'react-router-dom'
import {
  StepContainer,
  ButtonWrapper,
  StepBody,
  Congrats,
  Details,
  GoBoard,
} from '../CreateBoard.module.css'
import Button from '../../commons/Components/Button'

function Step5({ name }) {
  return (
    <div className={StepContainer}>
      <div className={StepBody}>
        <span className={Congrats}>
          Congrats!
          <span role="img" aria-label="heart">
            {' 🎉🎉🎉'}
          </span>
        </span>
        <div className={Details}>
          <span>Your board is setup!</span>
          <span>
            You will now receive an email with the id of your board and the code
            to update it!
          </span>
        </div>
      </div>
      <div className={ButtonWrapper}>
        <Link to={`/board/${name}`}>
          <Button className={GoBoard} label="Go to your board" size="large" />
        </Link>
      </div>
    </div>
  )
}

Step5.propTypes = {
  name: string.isRequired,
}

export default Step5
