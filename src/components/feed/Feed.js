import React, { Fragment } from 'react'

import './Feed.scss'
import './Post.scss'

const timestampToDate = (timestamp) => {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  let month = date.getMont() + 1
  if (month < 10) {
    month = '0' + month
  }
  let day = date.getDate()
  if (day < 10) {
    day = '0' + day
  }
  return day + '/' + month + '/' + year
}

const authenticatedOptions = (
  <Fragment>
    <article className="post">
      <section className="post-user">User Name</section>
      <section className="post-picture">
        <img src="" alt="post description" className="post-image" />
      </section>
      <footer className="post-description">
        <p><strong>post display name</strong>: post description</p>
        <p className="timestamp">{timestampToDate}</p>
      </footer>
    </article>
  </Fragment>
)

const Feed = ({ user }) => (
  <Fragment>
    { user && authenticatedOptions}
  </Fragment>
)

export default Feed
