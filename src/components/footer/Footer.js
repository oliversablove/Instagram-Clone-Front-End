import React, { Fragment } from 'react'

import Button from 'react-bootstrap/Button'

import './Footer.scss'

const authenticatedOptions = (
  <Fragment>
    <Button>Home</Button>
    <Button>Global</Button>
    <Button href="#new-post">New Post</Button>
    <Button>Notifications</Button>
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
