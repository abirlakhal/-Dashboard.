import './_styles.scss'
import React from 'react'

export default function Switch() {
  return (
    <div className='toggle-switch noselect'>
      <input type="checkbox" id="switch" />
      <label className='noselect' htmlFor="switch"/>
    </div>
  )
}
