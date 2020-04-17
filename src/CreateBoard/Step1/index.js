import React from 'react'
import { func, string } from 'prop-types'
import {
  StepContainer,
  Intro,
  HashtagWrapper,
  HashtagInput,
} from '../CreateBoard.module.css'
import Input from '../../commons/Components/Input'

function Step1({ hashtag, setHashtag }) {
  function handleChange(e) {
    const {
      target: { value },
    } = e
    setHashtag(value)
  }

  return (
    <div className={StepContainer}>
      <div className={Intro}>
        <h2>
          Welcome on CrowdStar!
          <span role="img" aria-label="Welcome">
            {' 👋'}
          </span>
        </h2>
        <p>We&#39;ll start by creating your wall</p>
      </div>
      <p>
        What is the hashtag of your
        <br />
        (awesome) event?
      </p>
      <div className={HashtagWrapper}>
        <span>#</span>
        <Input
          className={HashtagInput}
          value={hashtag}
          onChange={handleChange}
          placeholder="Hackathon2020"
        />
      </div>
    </div>
  )
}

Step1.propTypes = {
  hashtag: string.isRequired,
  setHashtag: func.isRequired,
}

export default Step1
