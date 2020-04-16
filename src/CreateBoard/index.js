import React, { useState, useEffect } from 'react'
import { PulseLoader } from 'react-spinners'

import apiRequest from '../commons/helpers/apiRequest'
import Button from '../commons/Components/Button'
import Tweet from '../Landing/Tweet'
import { ReactComponent as Arrow } from './arrow.svg'
import { tweets } from './mock.json'
import {
  Container,
  StepWrapper,
  NavigateWrapper,
  StepDots,
  ActiveDot,
  Dot,
  Render,
  LoadingWrapper,
  TweetList,
  BannerWrapper,
  ActionWrapper,
  CounterWrapper,
} from './CreateBoard.module.css'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import Counter from '../Board/Counter'
import useWindowDimensions from '../commons/hooks/useWindowDimensions'

function CreateBoard() {
  const [step, setStep] = useState(0)
  const [hashtag, setHashtag] = useState('')
  const [color, setColor] = useState('#1da1f2')
  const [banner, setBanner] = useState()
  const [giveway, setGiveway] = useState('NONE')
  const [winnerRate, setWinnerRate] = useState(50)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [imgBanner, setImgBanner] = useState('')
  const [loading, setLoading] = useState(false)

  const { height } = useWindowDimensions()

  useEffect(() => {
    if (banner) {
      const reader = new FileReader()
      reader.readAsDataURL(banner)
      reader.onload = () => {
        setImgBanner(reader.result)
      }
    }
  }, [banner])

  async function handleSubmit() {
    try {
      setLoading(true)
      const board = await apiRequest(
        {
          hashtag,
          color,
          banner: imgBanner,
          giveway,
          winnerRate,
          email,
        },
        'POST',
        'board',
      )
      setName(board.name)
      setStep(4)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.error(err)
    }
  }

  return (
    <div className={Container}>
      <div className={StepWrapper}>
        {step === 0 && <Step1 hashtag={hashtag} setHashtag={setHashtag} />}
        {step === 1 && (
          <Step2 color={color} setColor={setColor} setBanner={setBanner} />
        )}
        {step === 2 && (
          <Step3
            giveway={giveway}
            setGiveway={setGiveway}
            winnerRate={winnerRate}
            setWinnerRate={setWinnerRate}
          />
        )}
        {step === 3 && <Step4 email={email} setEmail={setEmail} />}
        {step === 4 && <Step5 name={name} hashtag={hashtag} />}
        {step < 4 && !loading && (
          <div className={NavigateWrapper}>
            <Button
              disabled={
                !(
                  (step === 0 &&
                    /^[A-Za-z0-9]*$/.test(hashtag) &&
                    hashtag.length > 2) ||
                  step === 1 ||
                  (step === 2 && (giveway === 'NONE' || winnerRate >= 50)) ||
                  (step === 3 &&
                    // eslint-disable-next-line max-len
                    /^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$/.test(
                      email,
                    ) &&
                    email.length > 0)
                )
              }
              onClick={() => {
                if (step === 3) {
                  handleSubmit()
                } else {
                  setStep(step + 1)
                }
              }}
            >
              <Arrow />
            </Button>
            <div className={StepDots}>
              {[0, 1, 2, 3].map((dot) => (
                <span
                  key={dot}
                  onClick={() => {
                    if (dot < step) setStep(dot)
                  }}
                  className={dot === step ? ActiveDot : Dot}
                />
              ))}
            </div>
          </div>
        )}
        {step === 3 && loading && (
          <div className={LoadingWrapper}>
            <PulseLoader size={30} margin={10} color="#1da1f2" />
          </div>
        )}
      </div>
      <div className={Render} style={{ backgroundColor: color }}>
        {imgBanner && (
          <div className={BannerWrapper}>
            <img src={imgBanner} alt={hashtag} />
          </div>
        )}
        <div className={ActionWrapper}>
          {['EVERY', 'AT'].includes(giveway) && (
            <Counter
              current={3}
              rate={winnerRate}
              repeat={giveway === 'EVERY'}
              className={CounterWrapper}
            />
          )}
          <div className={TweetList}>
            {tweets.slice(height < 1000 ? 1 : 0, 3).map((tweet) => (
              <Tweet
                profilePicture={tweet.profilePicture}
                userName={tweet.userName}
                screenName={tweet.screenName}
                content={
                  hashtag
                    ? tweet.content.replace('#Hackathon2020', `#${hashtag}`)
                    : tweet.content
                }
                media={tweet.media}
                key={tweet.userName}
                color={color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateBoard
