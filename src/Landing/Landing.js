import React from 'react'
import './Landing.css'
import MovingWave from '@bit/lucasleray.landing-stuff.moving-wave'

function Landing() {
  return (
    <div className="Landing">
      <header>
        <ul id="nav">
          <li>
            <a href="/configuration">Join a Board</a>
          </li>
        </ul>
      </header>

      {/* <main> */}
      <div className="row">
        <div className="col left">
          <h1 id="landing-title">A Tweet board suited for your events.</h1>
          <p id="project-description">
            With CrowdStar you can show the world the last tweets speaking of
            your awesome event! Customize the board with your design and reward
            your Tweeters with gifts to encourage them!
          </p>
          <div className="button-description">
            <button><a href="/configuration">Create a Board</a></button>

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

      <footer>
        <MovingWave className="WaveWrapper" />
        Made with ❤️ by Lucas Le Ray & Guillaume Monot
      </footer>
    </div>
  )
}

export default Landing
