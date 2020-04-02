import React from 'react'

import {
  Container,
  Column,
  Row,
  UserImage,
  User,
  Username,
  Content,
} from './Tweet.module.css'

function Tweet({
  profilePicture,
  userName,
  screenName,
  content,
  hashtags,
  media,
}) {
  return (
    <div className={Container}>
      <div className={Column}>
        <div className={Row}>
          <img className={UserImage} src={profilePicture} alt="profile" />
          <div className={Column}>
            <div className={User}>{screenName}</div>
            <div className={Username}>{userName}</div>
          </div>
        </div>

        <div className={Content}>{content}</div>
      </div>
    </div>
  )
}

export default Tweet
