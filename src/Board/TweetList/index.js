import React from 'react'
import { arrayOf, shape, string, bool } from 'prop-types'

import Tweet from './Tweet'
import { Container, Placeholder, MarginGiveway } from './TweetList.module.css'
import { ReactComponent as MobileMessages } from './mobileMessages.svg'

function TweetList({ tweets, hashtag, color, isGiveway, isAvailable }) {
  return tweets.length ? (
    <div className={Container}>
      {tweets.map((tweet) => (
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
  ) : (
    <div className={`${Placeholder} ${isGiveway && MarginGiveway}`}>
      { isAvailable ? (<span>Be the first to tweet with</span>) : <span>You no longer have access to</span>}
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <b>#{hashtag}</b>
      { isAvailable ? (<span></span>) : <span>😕</span>}
      <MobileMessages fill={color} />
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
  isGiveway: bool,
}

TweetList.defaultProps = {
  isGiveway: false,
}

export default TweetList
