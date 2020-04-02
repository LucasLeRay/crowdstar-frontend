import React from 'react'
import { arrayOf, shape } from 'prop-types'

import Tweet from './Tweet'
import { Container, TweetContainer } from './TweetList.module.css'

function TweetList({ tweets }) {
  return (
    <div className={Container}>
      {tweets.map(tweet => (
        <div className={TweetContainer} key={tweet.id}>
          <Tweet
            user={tweet.user}
            username={tweet.username}
            content={tweet.content}
          />
        </div>
      ))}
    </div>
  )
}

TweetList.propTypes = {
  tweets: arrayOf(shape({})).isRequired,
}

export default TweetList
