import React from 'react'
import { string } from 'prop-types'

import {
  Container,
  User,
  Names,
  ProfileImage,
  UserName,
  ScreenName,
  Content,
  Media,
} from './Tweet.module.css'

function Tweet({
  profilePicture,
  userName,
  screenName,
  content,
  media,
  hashtag,
  color,
}) {
  const convertedContent = content
    .replace(
      /(#[a-zA-Z0-9]*)/g,
      text => `<span style="color:${color}">${text}</span>`,
    )
    .replace(/(http|https):\/\/[^\s]*/g, '')
  return (
    <li className={Container}>
      <div className={User}>
        <img alt="profile" src={profilePicture} className={ProfileImage} />
        <div className={Names}>
          <h2 className={UserName}>{userName}</h2>
          <h2 className={ScreenName}>{screenName}</h2>
        </div>
      </div>
      <p
        className={Content}
        dangerouslySetInnerHTML={{ __html: convertedContent }}
      />
      {!!media && (
        <div className={Media}>
          <img src={media} alt={hashtag} />
        </div>
      )}
    </li>
  )
}

Tweet.propTypes = {
  profilePicture: string.isRequired,
  userName: string.isRequired,
  screenName: string.isRequired,
  content: string.isRequired,
  hashtag: string.isRequired,
  color: string.isRequired,
  media: string,
}

Tweet.defaultProps = {
  media: '',
}

export default Tweet
