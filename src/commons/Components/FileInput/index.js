import React from 'react'
import { Upload } from 'grommet-icons'
import Button from '../Button'
import { Container } from './FileInput.module.css'

function FileInput(props) {
  return (
    <div className={Container}>
      <Button label="Upload" icon={<Upload size="medium" color="#14171a" />} />
      <input id="file-upload" type="file" {...props} />
    </div>
  )
}

export default FileInput
