import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from './logo.svg'
import { ReactComponent as Wave1 } from './wave1.svg'
import { ReactComponent as Wave2 } from './wave2.svg'
import { ReactComponent as Famous } from './famous.svg'
import { ReactComponent as Gift } from './gift.svg'
import { ReactComponent as Customize } from './customize.svg'
import { tweets } from './mock.json'
import Button from '../commons/Components/Button'
import Input from '../commons/Components/Input'
import Tweet from './Tweet'
import useWindowDimensions from '../commons/hooks/useWindowDimensions'
import {
  Container,
  LogoWrapper,
  Hero,
  LeftPart,
  OverWaves,
  Important,
  CTA,
  ButtonWrapper,
  Choice,
  JoinWall,
  RightPart,
  Fade,
  WaveWrapper,
  Advantages,
  VideoWrapper,
  AdvantagesWrapper,
  Footer,
  ModalWrapper,
  JoinWallInput,
  ModalButtons,
  CloseButton,
  JoinButton,
} from './Landing.module.css'

function Landing() {
  Modal.setAppElement('#root')
  const [isOpen, setIsOpen] = useState(false)
  const [wall, setWall] = useState('')
  const [mockTweets, setMockTweets] = useState([])
  const { height } = useWindowDimensions()

  useEffect(() => {
    if (
      mockTweets.length < tweets.length &&
      (height > 900 || mockTweets.length < 3)
    ) {
      const interval = setInterval(() => {
        setMockTweets(tweets.slice(0, mockTweets.length + 1))
      }, 2000)
      return () => clearInterval(interval)
    }
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mockTweets])

  return (
    <div className={Container}>
      <div className={LogoWrapper}>
        <Logo />
      </div>
      <div className={Hero}>
        <div className={`${LeftPart} ${isOpen ? '' : OverWaves}`}>
          <h1>
            Showcase & reward
            <br />
            tweets of your audience
          </h1>
          <p>
            With
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <span className={Important}>{' CrowdStar'}</span>, engage and reward
            your audience with a Tweet Wall you can setup in seconds.
          </p>
          <div className={CTA}>
            <div className={ButtonWrapper}>
              <Link to="/new">
                <Button>Start now</Button>
              </Link>
              <span>(it&#39;s free)</span>
            </div>
            <span className={Choice}>or</span>
            <span className={JoinWall} onClick={() => setIsOpen(true)}>
              Join an existing wall
            </span>
          </div>
        </div>
        <div
          className={`${RightPart} ${
            mockTweets.length === tweets.length && !isOpen ? Fade : ''
          }`}
        >
          {mockTweets.map((tweet) => (
            <Tweet
              key={tweet.screenName}
              profilePicture={tweet.profilePicture}
              userName={tweet.userName}
              screenName={tweet.screenName}
              content={tweet.content}
            />
          ))}
        </div>
        {!isOpen && (
          <div className={WaveWrapper}>
            <Wave1 />
          </div>
        )}
      </div>
      <div className={Advantages}>
        <div className={VideoWrapper}>
          <iframe
            src="https://player.vimeo.com/video/411546697"
            title="Demo"
            allowFullScreen
          />
        </div>
        <div className={AdvantagesWrapper}>
          <div>
            <h2>Become famous</h2>
            <Famous />
            <p>
              Make your event a trending topic on Twitter.
              <br />
              <span className={Important}>x5.4 more tweets on average!</span>
            </p>
          </div>
          <div>
            <h2>Reward your audience</h2>
            <Gift />
            <p>
              Offer gifts to participants to encourage Tweeting about your
              event.
            </p>
          </div>
          <div>
            <h2>Customize your wall</h2>
            <Customize />
            <p>
              Add your own logos and colors to your wall to make it really
              yours.
            </p>
          </div>
        </div>
        <div className={ButtonWrapper}>
          <Link to="/new">
            <Button>Start now</Button>
          </Link>
        </div>
        {!isOpen && (
          <div className={WaveWrapper}>
            <Wave2 />
          </div>
        )}
      </div>
      <div className={Footer}>
        Made with
        <span role="img" aria-label="heart">
          {' ❤️ '}
        </span>
        {'by  '}
        <a
          target="_blank"
          href="https://lucas-le-ray.com"
          rel="noopener noreferrer"
        >
          Lucas Le Ray
        </a>
        {' & '}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/guillaume-monot/"
          rel="noopener noreferrer"
        >
          Guillaume Monot
        </a>
      </div>
      <Modal
        className={ModalWrapper}
        isOpen={isOpen}
        onRequestClose={() => {
          setWall('')
          setIsOpen(false)
        }}
        contentLabel="Join Wall"
      >
        <h2>What is the id of your wall?</h2>
        <p>We sent it to you by email</p>

        <Input
          className={JoinWallInput}
          placeholder="crowdstar-0403"
          value={wall}
          onChange={(e) => setWall(e.target.value)}
        />

        <div className={ModalButtons}>
          <Button
            className={CloseButton}
            label="Close"
            size="large"
            onClick={() => {
              setWall('')
              setIsOpen(false)
            }}
          />
          <Link to={`/board/${wall}`}>
            <Button
              className={JoinButton}
              label="Join"
              size="large"
              disabled={!wall.length}
            />
          </Link>
        </div>
      </Modal>
    </div>
  )
}

export default Landing
