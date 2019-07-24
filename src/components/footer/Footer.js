import React, { Fragment } from 'react'

import './Footer.scss'

const authenticatedOptions = (
  <Fragment>
    <button>Home</button>
    <button>Global</button>
    <button>Post</button>
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
