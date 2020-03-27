import React from 'react'
import { string } from 'prop-types'
import { Grommet, Select as GrommetSelect } from 'grommet'

import { Container } from './Select.module.css'

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
        color: '#1da1f2',
      },
    },
    hover: {
      background: '#e1e8ed',
    },
    colors: {
      selected: '#1da1f2',
    },
  },
  select: {
    icons: {
      color: '#1da1f2',
    },
    background: '#e1e8ed',
  },
}

function Select({ className, ...props }) {
  return (
    <div className={`${className} ${Container}`}>
      <Grommet theme={theme}>
        <GrommetSelect {...props} />
      </Grommet>
    </div>
  )
}

Select.propTypes = {
  className: string,
}

Select.defaultProps = {
  className: '',
}

export default Select
