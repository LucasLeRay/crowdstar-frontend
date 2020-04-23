import React from 'react'
import { string, func } from 'prop-types'
import { loadStripe } from '@stripe/stripe-js'

import config from '../../commons/helpers/config'
import { Container, CardsWrapper, Disclaimer } from './Pricing.module.css'
import Card from './Card'
import apiRequest from '../../commons/helpers/apiRequest'

const stripePromise = loadStripe(config.ProdStripeKey)

function Pricing({ name, setTier }) {
  async function selectTier(tier) {
    if (tier === 'FREE') {
      const board = await apiRequest(
        {
          name,
          tier,
        },
        'POST',
        'billing',
      )
      setTier(board.Attributes.tier)
    } else {
      const { id } = await apiRequest(
        {
          name,
        },
        'POST',
        `billing/session/${tier}`,
      )
      const stripe = await stripePromise
      await stripe.redirectToCheckout({
        sessionId: id,
      })
    }
  }

  return (
    <div className={Container}>
      <div className={CardsWrapper}>
        <Card
          name="Free"
          price={0}
          advantages={['Up to 500 tweets', 'Up to 6h']}
          buttonTitle="Use for free"
          onSelect={() => {
            selectTier('FREE')
          }}
        />
        <Card
          name="Standard"
          price={50}
          discount={110}
          advantages={[
            'Up to 1000 tweets',
            'Up to 12h',
            'No CrowdStar copyright',
          ]}
          buttonTitle="Continue"
          onSelect={() => {
            selectTier('STANDARD')
          }}
        />
        <Card
          name="Premium"
          price={80}
          discount={200}
          advantages={[
            'Unlimited tweets',
            'Unlimited duration',
            'No CrowdStar copyright',
            '$30 discount next time',
          ]}
          buttonTitle="Continue"
          important
          onSelect={() => {
            selectTier('PREMIUM')
          }}
        />
      </div>
      <span className={Disclaimer}>You will not be able to change later</span>
    </div>
  )
}

Pricing.propTypes = {
  name: string.isRequired,
  setTier: func.isRequired,
}

export default Pricing
