import './_styles.scss'
import React from 'react'

import {
  MdDashboard as Dashboard,
  MdPieChart as PieChart,
  MdSettings as Settings,
  MdChatBubble as ChatBubble
} from 'react-icons/md';

export default function _sidebar() {
  return (
    <section className='side-bar'>

      <div className="sidebar-wrapper">

        <div className="image logo"/>

        <div className="sidebar-menu noselect">
          <div className="menu-item active">
            <Dashboard className='icon'/>
          </div>
          <div className="menu-item">
            <PieChart className='icon'/>
          </div>
          <div className="menu-item badge">
            <ChatBubble className='icon'/>
          </div>
          <div className="menu-item">
            <Settings className='icon'/>
          </div>
        </div>

        <div className="image avatar"/>

      </div>

    </section>
  )
}
