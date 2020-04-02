import React from 'react'
import { arrayOf, shape, string } from 'prop-types'

import Tweet from './Tweet'
import { Container } from './TweetList.module.css'

function TweetList({ tweets, hashtag, color }) {
  return (
    <div className={Container}>
      {tweets.map(tweet => (
        <Tweet
          profilePicture={tweet.profilePicture}
          userName={tweet.userName}
          screenName={tweet.screenName}
          content={tweet.content}
          hashtag={hashtag}
          media={tweet.media}
          key={tweet.id}
          color={color}
        />
      ))}
    </div>
  )
}

TweetList.propTypes = {
  tweets: arrayOf(
    shape({
      profilePicture: string.isRequired,
      userName: string.isRequired,
      screenName: string.isRequired,
      content: string.isRequired,
      id: string.isRequired,
      media: string,
    }),
  ).isRequired,
  color: string.isRequired,
  hashtag: string.isRequired,
}

export default TweetList
