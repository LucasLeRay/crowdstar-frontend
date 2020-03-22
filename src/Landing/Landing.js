import React, { Component } from 'react'
import './Landing.css'
import MovingWave from '@bit/lucasleray.landing-stuff.moving-wave'

function Landing() {
  return (
    <div className="Landing">
      <header>
        <ul id="nav">
          <li>
            <a href="#">Join a Board</a>
          </li>
        </ul>
      </header>

      {/* <main> */}
        <div className="row">
          <div className="col left">
            <h1 id="landing-title">A Tweet board suited for your events.</h1>
            <p id="project-description">
              With CrowdStar you can show the world the last tweets speaking of
              your awesome event! Customize the board with your design and
              reward your Tweeters with gifts to encourage them!
            </p>
            <div className="button-description">
              <button>Create a Board</button>
              <p className="white-bold">(It's free!)</p>
            </div>
          </div>
          <div className="col right">
            <div className="crowdstar-demo">Demo</div>
            <div className="demo-description">
              x2.2 more visibility on average!
            </div>
          </div>
        </div>
      {/* </main> */}

      <MovingWave className="WaveWrapper" />
      <footer>Made with ❤️ by Lucas Le Ray & Guillaume Monot</footer>
    </div>
  )
}

export default Landing
