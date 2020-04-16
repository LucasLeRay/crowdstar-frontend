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
} from './Tweet.module.css'

function Tweet({ color, profilePicture, userName, screenName, content }) {
  const convertedContent = content.replace(
    /(#[a-zA-Z0-9]*)/g,
    (text) => `<span style="color:${color}">${text}</span>`,
  )
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
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: convertedContent }}
      />
    </li>
  )
}

Tweet.propTypes = {
  color: string,
  profilePicture: string.isRequired,
  userName: string.isRequired,
  screenName: string.isRequired,
  content: string.isRequired,
}

Tweet.defaultProps = {
  color: '#1da1f2',
}

export default Tweet
