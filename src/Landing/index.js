import React from 'react'
import MovingWave from '@bit/lucasleray.landing-stuff.moving-wave'
import { Link } from 'react-router-dom'

import Modal from 'react-modal'

import useWindowDimensions from '../commons/hooks/useWindowDimensions'
import feedDemo from './feedDemo.png'
import Button from '../commons/Components/Button'

import Input from '../commons/Components/Input'

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
  ModalStyle,
  RoomInput,
  ModalButton,
} from './Landing.module.css'

function Landing() {
  Modal.setAppElement('#root')
  const { width } = useWindowDimensions()

  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [room, setRoom] = React.useState('')

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className={Container}>
      {width > 1000 && (
        <header className={Header}>
          <ul>
            <li>
              <span onClick={openModal}>Join a Board</span>
            </li>
          </ul>
        </header>
      )}

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={ModalStyle}
          contentLabel="Example Modal"
        >
          <h1>Choose your room</h1>

          <Input
            className={RoomInput}
            placeholder="crowdstar-0403"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />

          <div className={ModalButton}>
            <Button
              colorBackground
              label="Close"
              size="large"
              onClick={closeModal}
            />
            <Link to={`/board/${room}`}>
              <Button
                colorBackground
                label="Go "
                size="large"
                disabled={!(room.length > 5)}
              />
            </Link>
          </div>
        </Modal>
      </div>

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
            by{' '}
            <a href="https://www.linkedin.com/in/lucas-le-ray-89a61a135/">
              Lucas Le Ray
            </a>{' '}
            &{' '}
            <a href="https://www.linkedin.com/in/guillaume-monot/">
              Guillaume Monot
            </a>
          </div>
        </footer>
      )}
    </div>
  )
}

export default Landing
