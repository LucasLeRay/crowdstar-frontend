import React from 'react'

import Tweet from './Tweet'
import { Container, TweetContainer } from './style.module.css'

let tweets = [
  {
    id: 1,
    user: 'Guillaume Monot',
    username: '@guillaume_monot',
    content: 'Oh my tweets are on the screen! #EpitechHackaton2020',
  },
  {
    id: 2,
    user: 'Lucas Le Ray',
    username: '@LucasLeRay',
    content: 'Good luck guys! #EpitechHackaton2020',
  },
  {
    id: 3,
    user: 'Mike',
    username: '@NilsCambreleng',
    content: 'Hi noobies! #EpitechHackaton2020',
  },
]

function List() {
  return (
    <div className={Container}>
      {tweets.map(tweet => {
        console.log('tweet ', tweet)
        return (
          <div className={TweetContainer} key={tweet.id}>
            <Tweet
              user={tweet.user}
              username={tweet.username}
              content={tweet.content}
            />
          </div>
        )
      })}
      {/* <div>tweets sdff dsdsd</div>
      <div>tweets sdff dsdsd</div>
      <div>tweets sdff dsdsd</div>
      <div>tweets sdff dsdsd</div> */}
    </div>
  )
}

export default List
