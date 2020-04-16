import React from 'react'
import { string } from 'prop-types'
import { Grommet, RadioButton } from 'grommet'

const theme = {
  radioButton: {
    border: {
      color: '#1da1f2',
    },
    check: {
      color: '#1da1f2',
      extend: {
        borderColor: '#292f36',
      },
    },
    size: '28px',
  },
}

function Radio({ className, ...props }) {
  return (
    <div className={className}>
      <Grommet theme={theme}>
        <RadioButton {...props} />
      </Grommet>
    </div>
  )
}

Radio.propTypes = {
  className: string,
}

Radio.defaultProps = {
  className: '',
}

export default Radio
