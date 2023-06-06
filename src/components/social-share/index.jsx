import React from 'react'
import { shareToTwitter, shareToFacebook } from '../../utils/share'

import './index.scss'

export const SocialShare = ({ title, author }) => {
  const text = `Recommend on "${title}" written by @${author}`

  const onClickTwitterIcon = e => {
    e.preventDefault()

    return shareToTwitter(window.location.href, text)
  }

  const onClickFacebookIcon = e => {
    e.preventDefault()
    return shareToFacebook(window.location.href, text)
  }

  return (
    <div className="social-share">
    </div>
  )
}
