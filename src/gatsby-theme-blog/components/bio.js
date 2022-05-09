import React from "react"
import { Avatar, MediaObject, Icon } from "gatsby-theme-blog"

export default function Bio({ name, bio, avatar, twitterUrl, githubUrl }) {
  return (
    <MediaObject>
      <Avatar {...avatar} />
      <div>
        <h3>{name}</h3>
        <p>{bio}</p>
        <a href={twitterUrl}>
          <Icon name="twitter" />
        </a>
        <a href={githubUrl}>
          <Icon name="github" />
        </a>
      </div>
    </MediaObject>
  )
}