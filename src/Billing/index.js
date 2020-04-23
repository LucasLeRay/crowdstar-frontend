import React, { useEffect } from 'react'
import { useParams, withRouter } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'
import { shape, func } from 'prop-types'

import useQuery from '../commons/hooks/useQuery'
import apiRequest from '../commons/helpers/apiRequest'
import { LoadingWrapper } from './Billing.module.css'

function Billing({ history }) {
  const { name } = useParams()
  const query = useQuery()

  useEffect(() => {
    async function updateTier(tier, sessionId) {
      await apiRequest(
        {
          name,
          tier,
          sessionId,
        },
        'POST',
        'billing',
      )
      history.push(`/board/${name}`)
    }
    const tier = query.get('tier')
    const sessionId = query.get('session_id')

    if (['STANDARD', 'PREMIUM'].includes(tier) && sessionId) {
      updateTier(tier, sessionId)
    } else {
      history.push(`/board/${name}`)
    }
  }, [])

  return (
    <div className={LoadingWrapper}>
      <PulseLoader size={30} margin={10} color="#1da1f2" />
    </div>
  )
}

Billing.propTypes = {
  history: shape({
    push: func,
  }).isRequired,
}

export default withRouter(Billing)
