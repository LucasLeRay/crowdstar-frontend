import React from 'react'
import { string, func } from 'prop-types'
import { Container } from './Button.module.css'

function Button({ title, onClick }) {
  return (
    <div className={Container}>
      <button onClick={onClick}>{title}</button>
    </div>
  )
}

Button.propTypes = {
  title: string.isRequired,
  onClick: func,
}

Button.defaultProps = {
  onClick: () => {},
}

export default Button
