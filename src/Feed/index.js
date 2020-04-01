import React from 'react'
import { useParams } from 'react-router-dom'

import apiRequest from '../commons/helpers/apiRequest'
import Thermometer from '../commons/Components/Thermometer'

async function getRoomInformation(room) {
    try {
        const board = await apiRequest(
          undefined,
          'GET',
          `board/${room}`,
        )
        return (board);
      } catch (err) {
        console.error(err)
        return (err);
      }
} 

function Feed() {
  let { room } = useParams()

  getRoomInformation(room)

  return (
    <div>
      <Thermometer current="60" max="1000" />
    </div>
  )
}

export default Feed
