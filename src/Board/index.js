import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
import { PulseLoader } from 'react-spinners'

import apiRequest from '../commons/helpers/apiRequest'
import Counter from './Counter'
import TweetList from './TweetList'
import Pricing from './Pricing'
import {
  Container,
  BannerWrapper,
  BoardWrapper,
  LoadingWrapper,
  WinnerWrapper,
  ReduceCounter,
} from './Board.module.css'
import Tweet from './TweetList/Tweet'

async function getBoardInformation(name) {
  try {
    return apiRequest(undefined, 'GET', `board/${name}`)
  } catch (err) {
    console.error(err)
    return err
  }
}

function Board() {
  const { name } = useParams()
  const [board, setBoard] = useState(null)
  const [tier, setTier] = useState('NONE')
  const [tweets, setTweets] = useState([])
  const [counter, setCounter] = useState(0)
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    let result
    const socket = io('https://api.crowdstar.xyz')
    const fetchData = async () => {
      const boardInfos = await getBoardInformation(name)
      result = boardInfos.result
      socket.emit('register', {
        name: result.name,
        hashtag: result.hashtag,
        winnerRate: result.winnerRate,
        giveway: result.giveway,
      })
      socket.on('tweet', (data) => {
        setTweets((state) => [data.tweet, ...state.slice(0, 9)])
        setCounter(data.counter)
      })
      socket.on('winner', (data) => {
        setWinner(data)
        setTimeout(() => {
          setWinner(null)
        }, 8000)
      })
      setBoard(result)
      setTier(result.tier)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return board ? (
    <div className={Container} style={{ backgroundColor: board.color }}>
      {board.banner && (
        <div className={BannerWrapper}>
          <img src={board.banner} alt={board.name} />
        </div>
      )}
      {['FREE', 'STANDARD', 'PREMIUM'].includes(tier) ? (
        <div className={BoardWrapper}>
          {['EVERY', 'AT'].includes(board.giveway) && (
            <Counter
              className={board.banner ? ReduceCounter : ''}
              current={counter}
              rate={board.winnerRate}
              repeat={board.giveway === 'EVERY'}
            />
          )}
          {winner ? (
            <div className={WinnerWrapper}>
              {/* eslint-disable-next-line max-len */}
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
          ) : (
            <TweetList
              tweets={tweets}
              hashtag={board.hashtag}
              color={board.color}
              isGiveway={board.giveway !== 'NONE'}
            />
          )}
        </div>
      ) : (
        <Pricing
          boardId={board.boardId}
          name={board.name}
          setTier={setTier}
          email={board.email}
        />
      )}
    </div>
  ) : (
    <div className={LoadingWrapper}>
      <PulseLoader size={30} margin={10} color="#1da1f2" />
    </div>
  )
}

export default Board
