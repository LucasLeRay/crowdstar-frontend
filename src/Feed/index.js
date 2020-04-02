import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import io from 'socket.io-client'

import apiRequest from '../commons/helpers/apiRequest'
import Thermometer from '../commons/Components/Thermometer'
import TweetList from './TweetList'

async function getRoomInformation(room) {
  try {
    return apiRequest(undefined, 'GET', `board/${room}`)
  } catch (err) {
    console.error(err)
    return err
  }
}

function Feed() {
  const { room } = useParams()
  const [board, setBoard] = useState(null)
  const [tweets, setTweets] = useState([])
  const [counter, setCounter] = useState([])

  useEffect(() => {
    let result
    const socket = io('https://api.crowdstar.xyz')
    const fetchData = async () => {
      const roomInfos = await getRoomInformation(room)
      result = roomInfos.result
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
    return () => {
      socket.emit('unregister', result.name)
    }
  }, [])

  return (
    <div>
      <Thermometer current="60" max="1000" />
      <Link to="/">lol</Link>
      <TweetList tweets={tweets} />
      {board && board.name}
    </div>
  )
}

export default Feed
