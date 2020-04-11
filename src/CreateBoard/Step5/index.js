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
          <span role="img" aria-label="party">
            {' 🎉🎉🎉'}
          </span>
        </span>
        <div className={Details}>
          <span>Your wall is setup!</span>
          <span>
            You will now receive an email with the id to access to your wall.
          </span>
        </div>
      </div>
      <div className={ButtonWrapper}>
        <Link to={`/board/${name}`}>
          <Button className={GoBoard} label="Go to your wall" size="large" />
        </Link>
      </div>
    </div>
  )
}

Step5.propTypes = {
  name: string.isRequired,
}

export default Step5
