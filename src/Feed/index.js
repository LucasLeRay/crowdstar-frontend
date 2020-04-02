import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import io from 'socket.io-client'

import apiRequest from '../commons/helpers/apiRequest'
import Thermometer from '../commons/Components/Thermometer'

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
      socket.on('tweet', tweet => console.log(tweet))
      setBoard(result)
    }
    fetchData()
    return () => {
      console.log('unregister')
      socket.emit('unregister', result.name)
    }
  }, [])

  return (
    <div>
      <Thermometer current="60" max="1000" />
      <Link to="/">lol</Link>
      {board && board.name}
    </div>
  )
}

export default Feed
