import React from 'react'
import { string } from 'prop-types'
import { Grommet, TextInput } from 'grommet'

import { Container } from './Input.module.css'

const theme = {
  global: {
    control: {
      border: {
        radius: '10px',
        width: '0px',
      },
    },
    focus: {
      border: {
        color: 'transparent',
      },
    },
    colors: {
      placeholder: '#657786',
    },
  },
}

function Input({ className, ...props }) {
  return (
    <div className={`${className} ${Container}`}>
      <Grommet theme={theme}>
        <TextInput {...props} />
      </Grommet>
    </div>
  )
}

Input.propTypes = {
  className: string,
}

Input.defaultProps = {
  className: '',
}

export default Input
