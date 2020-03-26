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

function Step2({ prevStep, nextStep, color, setColor, banner, setBanner }) {
  function onNextStep() {
    nextStep()
  }

  return (
    <div className={StepContainer}>
      <div className={StepBody}>
        <div>
          <span className={ColorInput}>
            Choose your background color:
            <span style={{ color: '#1da1f2' }}>
              <input
                type="color"
                value={color}
                onChange={e => setColor(e.target.value)}
              />
            </span>
          </span>
          <div className={UploadBannerWrapper}>
            <span>Choose your banner:</span>
            <Button>Upload</Button>
          </div>
        </div>
      </div>
      <div className={ButtonWrapper}>
        <Button onClick={prevStep}>Previous</Button>
        <Button onClick={onNextStep}>Next</Button>
      </div>
    </div>
  )
}

Step2.propTypes = {
  prevStep: func.isRequired,
  nextStep: func.isRequired,
  color: string.isRequired,
  setColor: func.isRequired,
  banner: string.isRequired,
  setBanner: func.isRequired,
}

export default Step2
