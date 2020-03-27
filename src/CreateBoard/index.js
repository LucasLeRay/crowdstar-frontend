import React, { useState } from 'react'
import { shape, func } from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Container, StepWrapper } from './CreateBoard.module.css'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

function CreateBoard({ history }) {
  const [step, setStep] = useState(0)
  const [hashtag, setHashtag] = useState('')
  const [color, setColor] = useState('#1da1f2')
  const [banner, setBanner] = useState('')
  const [giveway, setGiveway] = useState('every')
  const [winnerRate, setWinnerRate] = useState(1)
  const [email, setEmail] = useState('')

  function handleCancel() {
    history.push('/')
  }

  function handleSubmit() {
    console.log('done')
  }

  return (
    <div className={Container} style={{ backgroundColor: color }}>
      <div className={StepWrapper}>
        {step === 0 && (
          <Step1
            handleCancel={handleCancel}
            nextStep={() => setStep(1)}
            hashtag={hashtag}
            setHashtag={setHashtag}
          />
        )}
        {step === 1 && (
          <Step2
            prevStep={() => setStep(0)}
            nextStep={() => setStep(2)}
            color={color}
            setColor={setColor}
            banner={banner}
            setBanner={setBanner}
          />
        )}
        {step === 2 && (
          <Step3
            prevStep={() => setStep(1)}
            nextStep={() => setStep(3)}
            giveway={giveway}
            setGiveway={setGiveway}
            winnerRate={winnerRate}
            setWinnerRate={setWinnerRate}
          />
        )}
        {step === 3 && (
          <Step4
            prevStep={() => setStep(2)}
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
          />
        )}
      </div>
    </div>
  )
}

CreateBoard.propTypes = {
  history: shape({
    push: func.isRequired,
  }).isRequired,
}

export default withRouter(CreateBoard)
