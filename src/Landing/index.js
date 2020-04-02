import React from 'react'
import MovingWave from '@bit/lucasleray.landing-stuff.moving-wave'
import { Link } from 'react-router-dom'

import useWindowDimensions from '../commons/hooks/useWindowDimensions'
import feedDemo from './feedDemo.png'
import Button from '../commons/Components/Button'
import {
  Container,
  Header,
  Body,
  LeftPart,
  RightPart,
  ButtonWrapper,
  Demo,
  DemoDescription,
  Copyright,
} from './Landing.module.css'

function Landing() {
  const { width } = useWindowDimensions()

  return (
    <div className={Container}>
      {width > 1000 && (
        <header className={Header}>
          <ul>
            <li>
              <Link to="/configuration">Join a Board</Link>
            </li>
          </ul>
        </header>
      )}

      <div className={Body}>
        <div className={LeftPart}>
          <h1>The Tweet Board that makes you famous.</h1>
          <p>Show the world the last tweets speaking of your awesome event!</p>
          <p>
            Customize the board with your design and reward your Tweeters with
            gifts to encourage them!
          </p>
          <div className={ButtonWrapper}>
            <Link to="/new">
              <Button size="large" active label="Create a Board" />
            </Link>
            <p>(It&#39;s free!)</p>
          </div>
        </div>
        <div className={RightPart}>
          <div className={Demo}>
            <img src={feedDemo} alt="demo" />
          </div>
          <div className={DemoDescription}>
            x2.2 more visibility on average!
          </div>
        </div>
      </div>

      {width > 1200 && (
        <footer>
          <MovingWave />
          <div className={Copyright}>
            Made with
            <span role="img" aria-label="heart">
              {' ❤️ '}
            </span>
            by Lucas Le Ray & Guillaume Monot
          </div>
        </footer>
      )}
    </div>
  )
}

export default Landing
