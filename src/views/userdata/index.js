import './_styles.scss'
import React from 'react'

export default function metadata() {
  return (
    <div className="user-metadata">

      <div className="avatar">
        <div className="user-image image" />
        <div className="button" />
      </div>

      <div className="fit-points">
        <div className="count">81</div>
        <div className="label">fit<br />points</div>
      </div>

    </div>
  )
}
