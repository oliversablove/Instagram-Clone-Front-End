import React, { Fragment } from 'react'

import Button from 'react-bootstrap/Button'

import './Footer.scss'

const authenticatedOptions = (
  <Fragment>
    <Button href="#new-post">New Post</Button>
    <Button href="#posts">Posts</Button>
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
