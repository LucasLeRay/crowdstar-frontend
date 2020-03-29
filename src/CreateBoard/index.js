import React, { useState, useEffect } from 'react'
import { shape, func } from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Container, StepWrapper, BannerWrapper } from './CreateBoard.module.css'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'

function CreateBoard({ history }) {
  const [step, setStep] = useState(0)
  const [hashtag, setHashtag] = useState('')
  const [color, setColor] = useState('#1da1f2')
  const [banner, setBanner] = useState(undefined)
  const [giveway, setGiveway] = useState('every')
  const [winnerRate, setWinnerRate] = useState(1)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [imgBanner, setImgBanner] = useState('')

  useEffect(() => {
    if (banner) {
      const reader = new FileReader()
      reader.readAsDataURL(banner)
      reader.onload = () => {
        setImgBanner(reader.result)
      }
    }
  }, [banner])

  function handleCancel() {
    history.push('/')
  }

  async function handleSubmit() {
    try {
      const res = await fetch('http://api.crowdstar.xyz/board', {
        method: 'POST',
        body: {
          hashtag,
          color,
          banner,
          name: 'test-1',
          giveway,
          winnerRate,
          email,
        },
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      })
      const board = await res.json()
      setName(board.name)
      setStep(4)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={Container} style={{ backgroundColor: color }}>
      {imgBanner && (
        <div className={BannerWrapper}>
          <img src={imgBanner} alt="banner" />
        </div>
      )}
      <div className={StepWrapper}>
        <div>
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
              nextStep={handleSubmit}
              email={email}
              setEmail={setEmail}
            />
          )}
          {step === 4 && <Step5 name={name} />}
        </div>
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
