import React from 'react'
import { func, string } from 'prop-types'
import {
  StepContainer,
  Intro,
  UploadBannerWrapper,
  FileWrapper,
  ColorInput,
} from '../CreateBoard.module.css'
import FileInput from '../../commons/Components/FileInput'

function Step2({ color, setColor, setBanner }) {
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
      <div className={Intro}>
        <h2>
          Add your style!
          <span role="img" aria-label="Artist">
            {' 👨‍🎨'}
          </span>
        </h2>
        <p>Let speak the artist in you</p>
      </div>
      <div className={UploadBannerWrapper}>
        <span>Choose your banner:</span>
        <FileInput
          className={FileWrapper}
          name="banner"
          onChange={handleChange}
        />
      </div>
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
    </div>
  )
}

Step2.propTypes = {
  color: string.isRequired,
  setColor: func.isRequired,
  setBanner: func.isRequired,
}

export default Step2
