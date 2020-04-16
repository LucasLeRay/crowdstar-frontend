import React from 'react'
import { string } from 'prop-types'
import { Link } from 'react-router-dom'

import Button from '../../commons/Components/Button'
import {
  StepContainer,
  Intro,
  Important,
  LastStepHeight,
  GoWall,
} from '../CreateBoard.module.css'

function Step5({ hashtag, name }) {
  return (
    <>
      <div className={`${StepContainer} ${LastStepHeight}`}>
        <div className={Intro}>
          <h2>
            Congrats!
            <span role="img" aria-label="Party">
              {' 🎉'}
            </span>
          </h2>
          <p>You can now access to your wall!</p>
        </div>
        <p>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          We hope the best for <span className={Important}>#{hashtag}</span>
        </p>
      </div>
      <div className={GoWall}>
        <Link to={`/board/${name}`}>
          <Button>Go to your Wall</Button>
        </Link>
      </div>
    </>
  )
}

Step5.propTypes = {
  hashtag: string.isRequired,
  name: string.isRequired,
}

export default Step5
