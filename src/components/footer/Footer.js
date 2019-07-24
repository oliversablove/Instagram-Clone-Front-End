import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'

const authenticatedOptions = (
  <Fragment>
    <button>Home</button>
    <button>Global</button>
    <button><Link to="new-post">Post</Link></button>
    <button>Notifications</button>
    <button>Profile</button>
  </Fragment>
)

const Footer = ({ user }) => (
  <footer className="main-footer">
    <nav>
      { user && authenticatedOptions}
    </nav>
  </footer>
)

export default Footer
