import React from 'react'
import { string } from 'prop-types'
import { Grommet, Button as GrommetButton } from 'grommet'

const theme = {
  global: {
    colors: {
      text: '#14171a',
    },
    active: {
      background: {
        color: '#fff',
        opacity: 1,
      },
      color: '#1da1f2',
    },
    focus: {
      border: {
        color: '#1da1f2',
      },
    },
  },
  button: {
    active: {
      extend: {
        fontWeight: '700',
      },
    },
  },
}

function Button({ className, ...props }) {
  return (
    <div className={className}>
      <Grommet theme={theme}>
        <GrommetButton color="#1da1f2" {...props} />
      </Grommet>
    </div>
  )
}

Button.propTypes = {
  className: string,
}

Button.defaultProps = {
  className: '',
}

export default Button
