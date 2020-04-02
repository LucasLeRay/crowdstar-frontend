import React from 'react'
import { string } from 'prop-types'
import { Grommet, CheckBox as GrommetCheckbox } from 'grommet'

import { Container } from './CheckBox.module.css'

const theme = {
  checkBox: {
    border: {
      color: '#1da1f2',
    },
    toggle: {
      color: '#1da1f2',
    },
    color: '#1da1f2',
    size: '32px',
  },
  global: {
    focus: {
      border: {
        color: '#1da1f2',
      },
    },
  },
}

function CheckBox({ className, ...props }) {
  return (
    <div className={`${className} ${Container}`}>
      <Grommet theme={theme}>
        <GrommetCheckbox {...props} />
      </Grommet>
    </div>
  )
}

CheckBox.propTypes = {
  className: string,
}

CheckBox.defaultProps = {
  className: '',
}

export default CheckBox
