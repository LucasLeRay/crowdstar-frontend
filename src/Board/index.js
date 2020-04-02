import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'

import apiRequest from '../commons/helpers/apiRequest'
import Thermometer from './Thermometer'
import TweetList from './TweetList'
import { Container, BannerWrapper, BoardWrapper } from './Board.module.css'

async function getBoardInformation(name) {
  try {
    return apiRequest(undefined, 'GET', `board/${name}`)
  } catch (err) {
    console.error(err)
    return err
  }
}

function Feed() {
  const { name } = useParams()
  const [board, setBoard] = useState(null)
  const [tweets, setTweets] = useState([])
  const [counter, setCounter] = useState([])

  useEffect(() => {
    let result
    const socket = io('https://api.crowdstar.xyz')
    const fetchData = async () => {
      const boardInfos = await getBoardInformation(name)
      result = boardInfos.result
      socket.emit('register', {
        name: result.name,
        hashtag: result.hashtag,
      })
      socket.on('tweet', data => {
        setTweets(state => [data.tweet, ...state.slice(0, 9)])
        setCounter(data.counter)
      })
      setBoard(result)
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
      <div className={BoardWrapper}>
        {['every', 'at'].includes(board.giveway) && (
          <Thermometer current="60" max="1000" />
        )}
        <TweetList
          tweets={tweets}
          hashtag={board.hashtag}
          color={board.color}
        />
      </div>
    </div>
  ) : (
    <div>loading</div>
  )
}

export default Feed
