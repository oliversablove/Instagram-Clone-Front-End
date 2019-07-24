import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

// switch link from sign-in to current non-user page (either sign-up or sign-in)
const notSignedInLogo = (
  <Fragment>
    <Link className="title" to="/sign-in">
      <span>NOT</span>stagram
    </Link>
  </Fragment>
)

const signedInLogo = (
  <Fragment>
    <Link className="title" to="/">
      <span>NOT</span>stagram
    </Link>
  </Fragment>
)

const signOut = (
  <Fragment>
    <Link to="/sign-out">Sign Out</Link>
  </Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1 className="title">
      { user ? signedInLogo : notSignedInLogo }
    </h1>
    <nav>
      { user ? signOut : '' }
    </nav>
  </header>
)

export default Header
