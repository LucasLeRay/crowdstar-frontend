import React from 'react'
import { string, number, arrayOf, bool, func } from 'prop-types'

import { ReactComponent as Check } from './check.svg'
import {
  ImportantBorder,
  Container,
  PriceWrapper,
  ActualPrice,
  DollarSign,
  Discount,
  AdvantagesWrapper,
  Advantage,
  ButtonWrapper,
  ImportantButton,
  RegularButton,
  EarlyAccess,
} from './Card.module.css'

function Card({
  name,
  price,
  discount,
  advantages,
  buttonTitle,
  important,
  onSelect,
}) {
  return (
    <div className={`${Container} ${important ? ImportantBorder : ''}`}>
      {important && <div className={EarlyAccess}>Early access discount!</div>}
      <h2>{name}</h2>
      <div className={PriceWrapper}>
        <div className={ActualPrice}>
          <span className={DollarSign}>$</span>
          {price}
        </div>
        {discount > 0 && (
          <div className={Discount}>
            <span className={DollarSign}>$</span>
            {discount}
          </div>
        )}
      </div>
      <div className={AdvantagesWrapper}>
        {advantages.map((advantage) => (
          <span key={advantage} className={Advantage}>
            <Check />
            {advantage}
          </span>
        ))}
      </div>
      <div className={ButtonWrapper}>
        <button
          type="button"
          className={important ? ImportantButton : RegularButton}
          onClick={onSelect}
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: string.isRequired,
  price: number.isRequired,
  discount: number,
  advantages: arrayOf(string).isRequired,
  buttonTitle: string.isRequired,
  important: bool,
  onSelect: func.isRequired,
}

Card.defaultProps = {
  discount: 0,
  important: false,
}

export default Card
