import React from 'react'

import { 
    Container, 
    Column, 
    Row,
    UserImage,
    User,
    Username,
    Content
} from './style.module.css'

function Tweet({ ...props }) {
  console.log(props)

  return (
    <div className={Container}>
      <div className={Column}>
        <div className={Row}>
          <img 
            className={UserImage}
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
            alt="banner"
          />
          <div class={Column}>
            <div className={User}>{props.user}</div>
            <div className={Username}>{props.username}</div>
          </div>
        </div>

        <div className={Content}>{props.content}</div>
      </div>
    </div>
  )
}

export default Tweet
