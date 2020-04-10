import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { func, string } from 'prop-types'
import Modal from 'react-modal'

import { PulseLoader } from 'react-spinners'
import {
  Container,
  CardField,
  ButtonWrapper,
  Checkout,
  ErrorWrapper,
  LoadingWrapper,
} from './Payment.module.css'
import Button from '../../../commons/Components/Button'

function Payment({ tier, chooseTier, setSelected }) {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    try {
      event.preventDefault()
      if (!stripe || !elements) {
        return
      }

      setIsProcessing(true)
      const cardElement = elements.getElement(CardElement)
      const { token, errorPayment } = await stripe.createToken(cardElement)
      if (errorPayment) {
        setError(errorPayment.message)
        setIsProcessing(false)
        return
      }
      if (!token) {
        setError('Card number is invalid.')
        setIsProcessing(false)
        return
      }

      await chooseTier(tier, token.id)
    } catch (err) {
      setError(err.message)
      setIsProcessing(false)
    }
  }

  return (
    <Modal
      className={Container}
      isOpen
      onRequestClose={() => {
        setSelected('')
      }}
      contentLabel="Payment Modal"
    >
      <h1>{`${tier.charAt(0) + tier.slice(1).toLowerCase()} wall`}</h1>
      <form onSubmit={handleSubmit}>
        <CardElement
          className={CardField}
          options={{
            style: {
              base: {
                fontWeight: 700,
                fontSize: '18px',
                fontSmoothing: 'antialiased',
                ':focus': {
                  color: '#424770',
                },

                '::placeholder': {
                  color: '#9BACC8',
                },

                ':focus::placeholder': {
                  color: '#CFD7DF',
                },
              },
            },
          }}
        />
        <div className={ButtonWrapper}>
          {isProcessing ? (
            <div className={LoadingWrapper}>
              <PulseLoader size={30} margin={10} color="#1da1f2" />
            </div>
          ) : (
            <>
              <Button
                label="Cancel"
                size="large"
                onClick={() => setSelected('')}
              />
              <Button
                className={Checkout}
                label={`Pay $${tier === 'STANDARD' ? '50' : '80'}`}
                type="submit"
                size="large"
              />
            </>
          )}
        </div>
        {error && <div className={ErrorWrapper}>{error}</div>}
      </form>
    </Modal>
  )
}

Payment.propTypes = {
  tier: string.isRequired,
  setSelected: func.isRequired,
  chooseTier: func.isRequired,
}

export default Payment
