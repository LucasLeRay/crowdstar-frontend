import React, { useState, useEffect } from 'react'
import { string, func } from 'prop-types'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import config from '../../commons/helpers/config'
import { Container, CardsWrapper, Disclaimer } from './Pricing.module.css'
import Card from './Card'
import Payment from './Payment'
import apiRequest from '../../commons/helpers/apiRequest'

function Pricing({ boardId, name, setTier, email }) {
  const [selected, setSelected] = useState('')
  const [stripe, setStripe] = useState(null)

  useEffect(() => {
    setStripe(loadStripe(config.ProdStripeKey))
  }, [])

  async function chooseTier(tier, id) {
    try {
      const board = await apiRequest(
        {
          source: id,
          boardId,
          name,
          tier,
          email,
        },
        'POST',
        'billing',
      )
      setTier(board.Attributes.tier)
    } catch (err) {
      console.error(err)
    }
  }

  async function selectTier(tier) {
    if (tier === 'FREE') {
      chooseTier(tier)
    } else {
      setSelected(tier)
    }
  }

  return (
    <div className={Container}>
      {!!selected.length && (
        <Elements stripe={stripe}>
          <Payment
            tier={selected}
            chooseTier={chooseTier}
            setSelected={setSelected}
          />
        </Elements>
      )}
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
  boardId: string.isRequired,
  name: string.isRequired,
  setTier: func.isRequired,
  email: string.isRequired,
}

export default Pricing
