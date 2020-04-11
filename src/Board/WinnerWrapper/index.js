import React from 'react'
import { shape, string } from 'prop-types'
import Confetti from 'react-confetti'

import Tweet from '../TweetList/Tweet'
import { Container } from './WinnerWrapper.module.css'
import useWindowDimensions from '../../commons/hooks/useWindowDimensions'

function WinnerWrapper({ winner, board }) {
  const { width, height } = useWindowDimensions()
  return (
    <div className={Container}>
      <Confetti width={width} height={height} />
      <span>{`Congrats ${winner.screenName}, You won a gift! 🎉🎉🎉`}</span>
      <Tweet
        profilePicture={winner.profilePicture}
        userName={winner.userName}
        screenName={winner.screenName}
        content={winner.content}
        hashtag={board.hashtag}
        media={winner.media}
        key={winner.id}
        color={board.color}
      />
    </div>
  )
}

WinnerWrapper.propTypes = {
  winner: shape({
    screenName: string,
    profilePicture: string,
    userName: string,
    content: string,
    media: string,
    id: string,
  }).isRequired,
  board: shape({
    hashtag: string,
    color: string,
  }).isRequired,
}

export default WinnerWrapper
