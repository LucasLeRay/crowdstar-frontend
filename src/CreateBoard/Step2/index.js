import React from 'react'
import { func, string } from 'prop-types'
import {
  StepContainer,
  ButtonWrapper,
  StepBody,
  UploadBannerWrapper,
  ColorInput,
} from '../CreateBoard.module.css'
import Button from '../../commons/Components/Button'
import FileInput from '../../commons/Components/FileInput'

function Step2({ prevStep, nextStep, color, setColor, setBanner }) {
  function handleSubmit(e) {
    e.preventDefault()
    nextStep()
  }

  function handleChange(e) {
    const {
      target: { name, value, files },
    } = e

    if (name === 'banner') {
      setBanner(files[0])
    } else if (name === 'color') {
      setColor(value)
    }
  }

  return (
    <div className={StepContainer}>
      <form onSubmit={handleSubmit}>
        <div className={StepBody}>
          <span className={ColorInput}>
            Choose your background color:
            <span style={{ color: '#1da1f2' }}>
              <input
                name="color"
                type="color"
                value={color}
                onChange={handleChange}
              />
            </span>
          </span>
          <div className={UploadBannerWrapper}>
            <span>Choose your banner:</span>
            <FileInput name="banner" onChange={handleChange} />
          </div>
        </div>
        <div className={ButtonWrapper}>
          <Button label="Previous" size="large" onClick={prevStep} />
          <Button label="Next" type="submit" size="large" />
        </div>
      </form>
    </div>
  )
}

Step2.propTypes = {
  prevStep: func.isRequired,
  nextStep: func.isRequired,
  color: string.isRequired,
  setColor: func.isRequired,
  setBanner: func.isRequired,
}

export default Step2
