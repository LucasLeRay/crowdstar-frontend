import React from 'react'
// eslint-disable-next-line import/no-unresolved
import MovingWave from '@bit/lucasleray.landing-stuff.moving-wave'
import { Link } from 'react-router-dom'
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
  return (
    <div className={Container}>
      <header className={Header}>
        <ul>
          <li>
            <Link to="/configuration">Join a Board</Link>
          </li>
        </ul>
      </header>

      <div className={Body}>
        <div className={LeftPart}>
          <h1>A Tweet board suited for your events.</h1>
          <p>
            With CrowdStar you can show the world the last tweets speaking of
            your awesome event!
          </p>
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

      <footer>
        <MovingWave />
        <div className={Copyright}>
          Made with ❤️ by Lucas Le Ray & Guillaume Monot
        </div>
      </footer>
    </div>
  )
}

export default Landing
