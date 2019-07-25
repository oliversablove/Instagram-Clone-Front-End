import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

// switch link from sign-in to current non-user page (either sign-up or sign-in)
const Header = ({ user }) => {
  return (
    <header className="main-header">
      <h1 className="title">
        <Link className="title" to={user ? '/posts' : '/sign-in'}>
          <span>NOT</span>stagram
        </Link>
      </h1>
      <nav className="sign-out-link">
        { user ? <Link to="/sign-out">Sign Out</Link> : '' }
      </nav>
    </header>
  )
}

export default Header
