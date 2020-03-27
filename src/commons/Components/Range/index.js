import React from 'react'
import { string } from 'prop-types'
import { Grommet, RangeInput } from 'grommet'

import { Container } from './Range.module.css'

const theme = {
  rangeInput: {
    thumb: {
      color: '#1da1f2',
    },
  },
}

function Range({ className, ...props }) {
  return (
    <div className={`${className} ${Container}`}>
      <Grommet theme={theme}>
        <RangeInput {...props} />
      </Grommet>
    </div>
  )
}

Range.propTypes = {
  className: string,
}

Range.defaultProps = {
  className: '',
}

export default Range
