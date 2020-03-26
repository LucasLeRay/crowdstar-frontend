import React from 'react'

import { Container, Header } from './Feed.module.css'

import Thermometer from '../commons/Components/Thermometer'

function Feed() {
  return (
    <div className={Container}>
      <div className={Header}>logo</div>
      <div class="flex">
        <Thermometer />
      </div>
      Feed
    </div>
  )
}

export default Feed
